-- =====================================================
-- Migration 002: Security and Authentication Enhancements
-- =====================================================
-- This migration adds comprehensive security features including
-- login attempt tracking, password history, 2FA support,
-- API tokens, and audit logging.
-- =====================================================

-- Migration metadata
INSERT INTO schema_migrations (version, description, applied_at) VALUES 
('002', 'Security enhancements with login tracking, password history, and audit logging', CURRENT_TIMESTAMP);

-- Add security columns to users table
ALTER TABLE users ADD COLUMN IF NOT EXISTS two_factor_secret VARCHAR(100);
ALTER TABLE users ADD COLUMN IF NOT EXISTS backup_codes JSONB;
ALTER TABLE users ADD COLUMN IF NOT EXISTS account_locked_until TIMESTAMP;
ALTER TABLE users ADD COLUMN IF NOT EXISTS metadata JSONB DEFAULT '{}';

-- User verification tokens table
CREATE TABLE user_verifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    token VARCHAR(255) UNIQUE NOT NULL,
    token_type VARCHAR(50) NOT NULL CHECK (token_type IN ('email_verification', 'phone_verification', 'password_reset', 'account_activation')),
    expires_at TIMESTAMP NOT NULL,
    used_at TIMESTAMP,
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Password history for security compliance
CREATE TABLE password_history (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- User security settings
CREATE TABLE user_security_settings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID UNIQUE NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    password_expiry_days INTEGER DEFAULT 90,
    require_password_change BOOLEAN DEFAULT FALSE,
    login_notifications_enabled BOOLEAN DEFAULT TRUE,
    suspicious_activity_alerts BOOLEAN DEFAULT TRUE,
    session_timeout_minutes INTEGER DEFAULT 60,
    concurrent_sessions_limit INTEGER DEFAULT 5,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Login attempts tracking
CREATE TABLE login_attempts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    email VARCHAR(255),
    ip_address INET NOT NULL,
    user_agent TEXT,
    status VARCHAR(20) NOT NULL CHECK (status IN ('success', 'failed', 'blocked', 'suspicious')),
    failure_reason VARCHAR(100),
    location_country VARCHAR(2),
    location_city VARCHAR(100),
    is_suspicious BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- API access tokens
CREATE TABLE api_tokens (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    token_name VARCHAR(100) NOT NULL,
    token_hash VARCHAR(255) UNIQUE NOT NULL,
    token_prefix VARCHAR(20) NOT NULL,
    permissions JSONB DEFAULT '[]',
    rate_limit INTEGER DEFAULT 1000,
    last_used_at TIMESTAMP,
    expires_at TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Refresh tokens for JWT
CREATE TABLE refresh_tokens (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    token_hash VARCHAR(255) UNIQUE NOT NULL,
    session_id UUID REFERENCES user_sessions(id) ON DELETE CASCADE,
    expires_at TIMESTAMP NOT NULL,
    revoked_at TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Security audit log
CREATE TABLE security_audit_log (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    event_type VARCHAR(50) NOT NULL,
    event_category VARCHAR(50) NOT NULL,
    severity VARCHAR(20) DEFAULT 'info' CHECK (severity IN ('info', 'warning', 'error', 'critical')),
    description TEXT NOT NULL,
    ip_address INET,
    user_agent TEXT,
    resource_type VARCHAR(50),
    resource_id UUID,
    additional_data JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for security tables
CREATE INDEX idx_user_verifications_user ON user_verifications(user_id);
CREATE INDEX idx_user_verifications_token ON user_verifications(token);
CREATE INDEX idx_user_verifications_type ON user_verifications(token_type);
CREATE INDEX idx_password_history_user ON password_history(user_id);
CREATE INDEX idx_login_attempts_user ON login_attempts(user_id);
CREATE INDEX idx_login_attempts_ip ON login_attempts(ip_address);
CREATE INDEX idx_login_attempts_created ON login_attempts(created_at);
CREATE INDEX idx_login_attempts_suspicious ON login_attempts(is_suspicious);
CREATE INDEX idx_api_tokens_user ON api_tokens(user_id);
CREATE INDEX idx_api_tokens_hash ON api_tokens(token_hash);
CREATE INDEX idx_api_tokens_active ON api_tokens(is_active);
CREATE INDEX idx_refresh_tokens_user ON refresh_tokens(user_id);
CREATE INDEX idx_refresh_tokens_hash ON refresh_tokens(token_hash);
CREATE INDEX idx_security_audit_user ON security_audit_log(user_id);
CREATE INDEX idx_security_audit_event ON security_audit_log(event_type);
CREATE INDEX idx_security_audit_created ON security_audit_log(created_at);

-- Update triggers for new tables
CREATE TRIGGER update_user_security_settings_updated_at BEFORE UPDATE ON user_security_settings FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Security functions for password validation
CREATE OR REPLACE FUNCTION check_password_history(user_uuid UUID, new_password_hash VARCHAR)
RETURNS BOOLEAN AS $$
DECLARE
    history_count INTEGER;
BEGIN
    SELECT COUNT(*) INTO history_count
    FROM password_history
    WHERE user_id = user_uuid AND password_hash = new_password_hash;
    
    RETURN history_count = 0;
END;
$$ LANGUAGE plpgsql;

-- Function to clean up expired tokens
CREATE OR REPLACE FUNCTION cleanup_expired_tokens()
RETURNS INTEGER AS $$
DECLARE
    deleted_count INTEGER;
BEGIN
    DELETE FROM user_verifications WHERE expires_at < CURRENT_TIMESTAMP;
    GET DIAGNOSTICS deleted_count = ROW_COUNT;
    
    DELETE FROM refresh_tokens WHERE expires_at < CURRENT_TIMESTAMP;
    
    RETURN deleted_count;
END;
$$ LANGUAGE plpgsql;

-- Function to track login attempts
CREATE OR REPLACE FUNCTION track_login_attempt(
    p_user_id UUID,
    p_email VARCHAR,
    p_ip_address INET,
    p_user_agent TEXT,
    p_status VARCHAR,
    p_failure_reason VARCHAR DEFAULT NULL
)
RETURNS VOID AS $$
BEGIN
    INSERT INTO login_attempts (user_id, email, ip_address, user_agent, status, failure_reason)
    VALUES (p_user_id, p_email, p_ip_address, p_user_agent, p_status, p_failure_reason);
    
    -- Check for suspicious activity (5 failed attempts in 15 minutes)
    IF p_status = 'failed' THEN
        PERFORM 1 FROM login_attempts
        WHERE ip_address = p_ip_address
        AND status = 'failed'
        AND created_at > CURRENT_TIMESTAMP - INTERVAL '15 minutes'
        GROUP BY ip_address
        HAVING COUNT(*) >= 5;
        
        IF FOUND THEN
            INSERT INTO security_audit_log (event_type, event_category, severity, description, ip_address, user_agent)
            VALUES ('suspicious_login', 'security', 'warning', 'Multiple failed login attempts detected', p_ip_address, p_user_agent);
        END IF;
    END IF;
END;
$$ LANGUAGE plpgsql;

-- Insert default security settings for existing users
INSERT INTO user_security_settings (user_id)
SELECT id FROM users
WHERE NOT EXISTS (
    SELECT 1 FROM user_security_settings WHERE user_id = users.id
);

-- Create view for user security status
CREATE VIEW user_security_status AS
SELECT 
    u.id,
    u.email,
    u.account_status,
    u.email_verified,
    u.two_factor_enabled,
    u.failed_login_attempts,
    u.account_locked_until,
    uss.password_expiry_days,
    uss.require_password_change,
    CASE 
        WHEN u.account_locked_until > CURRENT_TIMESTAMP THEN true
        ELSE false
    END as is_locked,
    COUNT(DISTINCT us.id) as active_sessions,
    MAX(la.created_at) as last_login_attempt
FROM users u
LEFT JOIN user_security_settings uss ON u.id = uss.user_id
LEFT JOIN user_sessions us ON u.id = us.user_id AND us.is_active = true
LEFT JOIN login_attempts la ON u.id = la.user_id
GROUP BY u.id, u.email, u.account_status, u.email_verified, u.two_factor_enabled, 
         u.failed_login_attempts, u.account_locked_until, uss.password_expiry_days, uss.require_password_change;

-- Rollback instructions
UPDATE schema_migrations SET rollback_sql = '
DROP VIEW IF EXISTS user_security_status;
DROP FUNCTION IF EXISTS track_login_attempt CASCADE;
DROP FUNCTION IF EXISTS cleanup_expired_tokens CASCADE;
DROP FUNCTION IF EXISTS check_password_history CASCADE;
DROP TABLE IF EXISTS security_audit_log CASCADE;
DROP TABLE IF EXISTS refresh_tokens CASCADE;
DROP TABLE IF EXISTS api_tokens CASCADE;
DROP TABLE IF EXISTS login_attempts CASCADE;
DROP TABLE IF EXISTS user_security_settings CASCADE;
DROP TABLE IF EXISTS password_history CASCADE;
DROP TABLE IF EXISTS user_verifications CASCADE;
ALTER TABLE users DROP COLUMN IF EXISTS two_factor_secret;
ALTER TABLE users DROP COLUMN IF EXISTS backup_codes;
ALTER TABLE users DROP COLUMN IF EXISTS account_locked_until;
ALTER TABLE users DROP COLUMN IF EXISTS metadata;
' WHERE version = '002';

-- Migration complete
SELECT 'Migration 002 completed successfully' as status;