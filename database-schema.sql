-- =====================================================
-- AI Training Content Access Platform Database Schema
-- =====================================================
-- Designed for user authentication, subscription management,
-- content access control, security, and performance optimization
-- =====================================================

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- =====================================================
-- 1. USER MANAGEMENT TABLES
-- =====================================================

-- Core user profiles and authentication
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    avatar_url TEXT,
    bio TEXT,
    timezone VARCHAR(50) DEFAULT 'UTC',
    language VARCHAR(10) DEFAULT 'en',
    phone VARCHAR(20),
    date_of_birth DATE,
    account_status VARCHAR(20) DEFAULT 'active' CHECK (account_status IN ('active', 'suspended', 'deactivated', 'pending_verification')),
    email_verified BOOLEAN DEFAULT FALSE,
    email_verified_at TIMESTAMP,
    phone_verified BOOLEAN DEFAULT FALSE,
    phone_verified_at TIMESTAMP,
    two_factor_enabled BOOLEAN DEFAULT FALSE,
    two_factor_secret VARCHAR(100),
    backup_codes JSONB,
    last_login_at TIMESTAMP,
    last_login_ip INET,
    failed_login_attempts INTEGER DEFAULT 0,
    account_locked_until TIMESTAMP,
    preferences JSONB DEFAULT '{}',
    metadata JSONB DEFAULT '{}',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP
);

-- User roles and permissions system
CREATE TABLE roles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(50) UNIQUE NOT NULL,
    display_name VARCHAR(100) NOT NULL,
    description TEXT,
    permissions JSONB DEFAULT '[]',
    is_system_role BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- User role assignments
CREATE TABLE user_roles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    role_id UUID NOT NULL REFERENCES roles(id) ON DELETE CASCADE,
    assigned_by UUID REFERENCES users(id),
    assigned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE,
    UNIQUE(user_id, role_id)
);

-- Account verification tokens
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

-- Password history for security
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
    allowed_ip_ranges JSONB DEFAULT '[]',
    session_timeout_minutes INTEGER DEFAULT 60,
    concurrent_sessions_limit INTEGER DEFAULT 5,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================================
-- 2. SUBSCRIPTION MANAGEMENT
-- =====================================================

-- Subscription plans and pricing tiers
CREATE TABLE subscription_plans (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL,
    display_name VARCHAR(100) NOT NULL,
    description TEXT,
    price_monthly DECIMAL(10,2),
    price_yearly DECIMAL(10,2),
    price_currency VARCHAR(3) DEFAULT 'USD',
    billing_cycle VARCHAR(20) DEFAULT 'monthly' CHECK (billing_cycle IN ('monthly', 'yearly', 'lifetime')),
    trial_period_days INTEGER DEFAULT 0,
    features JSONB DEFAULT '{}',
    limits JSONB DEFAULT '{}',
    content_access_level INTEGER DEFAULT 1,
    max_concurrent_sessions INTEGER DEFAULT 1,
    api_rate_limit INTEGER DEFAULT 100,
    storage_limit_gb INTEGER DEFAULT 5,
    is_active BOOLEAN DEFAULT TRUE,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- User subscriptions
CREATE TABLE user_subscriptions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    plan_id UUID NOT NULL REFERENCES subscription_plans(id),
    status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'cancelled', 'expired', 'trial', 'past_due', 'suspended')),
    billing_cycle VARCHAR(20) NOT NULL,
    price_paid DECIMAL(10,2),
    currency VARCHAR(3) DEFAULT 'USD',
    trial_start_date TIMESTAMP,
    trial_end_date TIMESTAMP,
    current_period_start TIMESTAMP NOT NULL,
    current_period_end TIMESTAMP NOT NULL,
    next_billing_date TIMESTAMP,
    cancelled_at TIMESTAMP,
    cancellation_reason TEXT,
    auto_renew BOOLEAN DEFAULT TRUE,
    promo_code VARCHAR(50),
    discount_amount DECIMAL(10,2) DEFAULT 0,
    external_subscription_id VARCHAR(255),
    payment_provider VARCHAR(50),
    metadata JSONB DEFAULT '{}',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Payment transactions
CREATE TABLE payments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    subscription_id UUID REFERENCES user_subscriptions(id),
    amount DECIMAL(10,2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'USD',
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed', 'refunded', 'partially_refunded')),
    payment_method VARCHAR(50),
    payment_provider VARCHAR(50),
    external_transaction_id VARCHAR(255),
    gateway_response JSONB,
    description TEXT,
    invoice_id VARCHAR(255),
    refunded_amount DECIMAL(10,2) DEFAULT 0,
    refunded_at TIMESTAMP,
    refund_reason TEXT,
    processing_fee DECIMAL(10,2) DEFAULT 0,
    net_amount DECIMAL(10,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Subscription renewals and changes
CREATE TABLE subscription_changes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    subscription_id UUID NOT NULL REFERENCES user_subscriptions(id) ON DELETE CASCADE,
    change_type VARCHAR(50) NOT NULL CHECK (change_type IN ('upgrade', 'downgrade', 'renewal', 'cancellation', 'reactivation')),
    from_plan_id UUID REFERENCES subscription_plans(id),
    to_plan_id UUID REFERENCES subscription_plans(id),
    effective_date TIMESTAMP NOT NULL,
    proration_amount DECIMAL(10,2) DEFAULT 0,
    reason TEXT,
    changed_by UUID REFERENCES users(id),
    metadata JSONB DEFAULT '{}',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================================
-- 3. CONTENT ACCESS CONTROL
-- =====================================================

-- Content categories and hierarchies
CREATE TABLE content_categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    parent_id UUID REFERENCES content_categories(id),
    access_level INTEGER DEFAULT 1,
    required_plan_level INTEGER DEFAULT 1,
    sort_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    metadata JSONB DEFAULT '{}',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- AI training content items
CREATE TABLE content_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    description TEXT,
    content_type VARCHAR(50) NOT NULL CHECK (content_type IN ('course', 'lesson', 'tutorial', 'dataset', 'model', 'tool')),
    category_id UUID REFERENCES content_categories(id),
    access_level INTEGER DEFAULT 1,
    required_plan_level INTEGER DEFAULT 1,
    difficulty_level VARCHAR(20) DEFAULT 'beginner' CHECK (difficulty_level IN ('beginner', 'intermediate', 'advanced', 'expert')),
    estimated_duration INTEGER, -- in minutes
    content_url TEXT,
    thumbnail_url TEXT,
    file_size BIGINT,
    file_format VARCHAR(20),
    tags JSONB DEFAULT '[]',
    prerequisites JSONB DEFAULT '[]',
    learning_objectives JSONB DEFAULT '[]',
    is_premium BOOLEAN DEFAULT FALSE,
    is_published BOOLEAN DEFAULT FALSE,
    published_at TIMESTAMP,
    view_count INTEGER DEFAULT 0,
    download_count INTEGER DEFAULT 0,
    rating_average DECIMAL(3,2) DEFAULT 0,
    rating_count INTEGER DEFAULT 0,
    created_by UUID REFERENCES users(id),
    metadata JSONB DEFAULT '{}',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- User content permissions
CREATE TABLE user_content_permissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    content_id UUID NOT NULL REFERENCES content_items(id) ON DELETE CASCADE,
    permission_type VARCHAR(20) DEFAULT 'view' CHECK (permission_type IN ('view', 'download', 'edit', 'admin')),
    granted_by UUID REFERENCES users(id),
    granted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE,
    UNIQUE(user_id, content_id, permission_type)
);

-- Content consumption tracking
CREATE TABLE content_consumption (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    content_id UUID NOT NULL REFERENCES content_items(id) ON DELETE CASCADE,
    action VARCHAR(50) NOT NULL CHECK (action IN ('view', 'download', 'complete', 'bookmark', 'share', 'rate')),
    progress_percentage INTEGER DEFAULT 0 CHECK (progress_percentage >= 0 AND progress_percentage <= 100),
    time_spent_minutes INTEGER DEFAULT 0,
    completion_date TIMESTAMP,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    notes TEXT,
    ip_address INET,
    user_agent TEXT,
    device_info JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Learning progress and analytics
CREATE TABLE learning_analytics (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    content_id UUID REFERENCES content_items(id) ON DELETE CASCADE,
    category_id UUID REFERENCES content_categories(id),
    session_id UUID,
    metric_type VARCHAR(50) NOT NULL,
    metric_value DECIMAL(10,2),
    metric_data JSONB,
    recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================================
-- 4. SECURITY & AUDIT
-- =====================================================

-- Login attempts and security logs
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
    device_fingerprint VARCHAR(255),
    is_suspicious BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Active user sessions
CREATE TABLE user_sessions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    session_token VARCHAR(255) UNIQUE NOT NULL,
    refresh_token VARCHAR(255) UNIQUE,
    ip_address INET NOT NULL,
    user_agent TEXT,
    device_info JSONB,
    is_active BOOLEAN DEFAULT TRUE,
    expires_at TIMESTAMP NOT NULL,
    last_activity_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
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
    old_values JSONB,
    new_values JSONB,
    additional_data JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- System-wide audit trail
CREATE TABLE audit_trail (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    table_name VARCHAR(50) NOT NULL,
    record_id UUID NOT NULL,
    action VARCHAR(10) NOT NULL CHECK (action IN ('INSERT', 'UPDATE', 'DELETE')),
    old_values JSONB,
    new_values JSONB,
    changed_by UUID REFERENCES users(id),
    changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================================
-- 5. PERFORMANCE OPTIMIZATION INDEXES
-- =====================================================

-- Users table indexes
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_username ON users(username);
CREATE INDEX idx_users_account_status ON users(account_status);
CREATE INDEX idx_users_email_verified ON users(email_verified);
CREATE INDEX idx_users_created_at ON users(created_at);
CREATE INDEX idx_users_last_login ON users(last_login_at);
CREATE INDEX idx_users_deleted_at ON users(deleted_at) WHERE deleted_at IS NOT NULL;

-- User roles indexes
CREATE INDEX idx_user_roles_user_id ON user_roles(user_id);
CREATE INDEX idx_user_roles_role_id ON user_roles(role_id);
CREATE INDEX idx_user_roles_active ON user_roles(is_active);

-- Subscriptions indexes
CREATE INDEX idx_user_subscriptions_user_id ON user_subscriptions(user_id);
CREATE INDEX idx_user_subscriptions_plan_id ON user_subscriptions(plan_id);
CREATE INDEX idx_user_subscriptions_status ON user_subscriptions(status);
CREATE INDEX idx_user_subscriptions_billing_date ON user_subscriptions(next_billing_date);
CREATE INDEX idx_user_subscriptions_period ON user_subscriptions(current_period_start, current_period_end);

-- Content access indexes
CREATE INDEX idx_content_items_category ON content_items(category_id);
CREATE INDEX idx_content_items_access_level ON content_items(access_level);
CREATE INDEX idx_content_items_published ON content_items(is_published);
CREATE INDEX idx_content_items_premium ON content_items(is_premium);
CREATE INDEX idx_content_items_type ON content_items(content_type);
CREATE INDEX idx_content_items_slug ON content_items(slug);

-- Content consumption indexes
CREATE INDEX idx_content_consumption_user ON content_consumption(user_id);
CREATE INDEX idx_content_consumption_content ON content_consumption(content_id);
CREATE INDEX idx_content_consumption_action ON content_consumption(action);
CREATE INDEX idx_content_consumption_created ON content_consumption(created_at);
CREATE INDEX idx_content_consumption_user_content ON content_consumption(user_id, content_id);

-- Security indexes
CREATE INDEX idx_login_attempts_user ON login_attempts(user_id);
CREATE INDEX idx_login_attempts_ip ON login_attempts(ip_address);
CREATE INDEX idx_login_attempts_created ON login_attempts(created_at);
CREATE INDEX idx_login_attempts_suspicious ON login_attempts(is_suspicious);

CREATE INDEX idx_user_sessions_user ON user_sessions(user_id);
CREATE INDEX idx_user_sessions_token ON user_sessions(session_token);
CREATE INDEX idx_user_sessions_active ON user_sessions(is_active);
CREATE INDEX idx_user_sessions_expires ON user_sessions(expires_at);

CREATE INDEX idx_api_tokens_user ON api_tokens(user_id);
CREATE INDEX idx_api_tokens_hash ON api_tokens(token_hash);
CREATE INDEX idx_api_tokens_active ON api_tokens(is_active);

-- Audit indexes
CREATE INDEX idx_security_audit_user ON security_audit_log(user_id);
CREATE INDEX idx_security_audit_event ON security_audit_log(event_type);
CREATE INDEX idx_security_audit_created ON security_audit_log(created_at);
CREATE INDEX idx_audit_trail_table ON audit_trail(table_name);
CREATE INDEX idx_audit_trail_record ON audit_trail(record_id);

-- Full-text search indexes
CREATE INDEX idx_content_items_search ON content_items USING gin(to_tsvector('english', title || ' ' || description));
CREATE INDEX idx_users_search ON users USING gin(to_tsvector('english', first_name || ' ' || last_name || ' ' || email));

-- =====================================================
-- 6. TRIGGERS AND FUNCTIONS
-- =====================================================

-- Updated timestamp trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply updated_at triggers to relevant tables
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_user_security_settings_updated_at BEFORE UPDATE ON user_security_settings FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_subscription_plans_updated_at BEFORE UPDATE ON subscription_plans FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_user_subscriptions_updated_at BEFORE UPDATE ON user_subscriptions FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_payments_updated_at BEFORE UPDATE ON payments FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_content_categories_updated_at BEFORE UPDATE ON content_categories FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_content_items_updated_at BEFORE UPDATE ON content_items FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_content_consumption_updated_at BEFORE UPDATE ON content_consumption FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Audit trail trigger function
CREATE OR REPLACE FUNCTION audit_trigger_function()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'DELETE' THEN
        INSERT INTO audit_trail (table_name, record_id, action, old_values, changed_at)
        VALUES (TG_TABLE_NAME, OLD.id, 'DELETE', row_to_json(OLD), CURRENT_TIMESTAMP);
        RETURN OLD;
    ELSIF TG_OP = 'UPDATE' THEN
        INSERT INTO audit_trail (table_name, record_id, action, old_values, new_values, changed_at)
        VALUES (TG_TABLE_NAME, NEW.id, 'UPDATE', row_to_json(OLD), row_to_json(NEW), CURRENT_TIMESTAMP);
        RETURN NEW;
    ELSIF TG_OP = 'INSERT' THEN
        INSERT INTO audit_trail (table_name, record_id, action, new_values, changed_at)
        VALUES (TG_TABLE_NAME, NEW.id, 'INSERT', row_to_json(NEW), CURRENT_TIMESTAMP);
        RETURN NEW;
    END IF;
    RETURN NULL;
END;
$$ language 'plpgsql';

-- Apply audit triggers to sensitive tables
CREATE TRIGGER audit_users AFTER INSERT OR UPDATE OR DELETE ON users FOR EACH ROW EXECUTE FUNCTION audit_trigger_function();
CREATE TRIGGER audit_user_subscriptions AFTER INSERT OR UPDATE OR DELETE ON user_subscriptions FOR EACH ROW EXECUTE FUNCTION audit_trigger_function();
CREATE TRIGGER audit_payments AFTER INSERT OR UPDATE OR DELETE ON payments FOR EACH ROW EXECUTE FUNCTION audit_trigger_function();

-- =====================================================
-- 7. VIEWS FOR COMMON QUERIES
-- =====================================================

-- Active user subscriptions with plan details
CREATE VIEW active_user_subscriptions AS
SELECT 
    us.id,
    us.user_id,
    u.email,
    u.username,
    sp.name as plan_name,
    sp.display_name as plan_display_name,
    us.status,
    us.current_period_start,
    us.current_period_end,
    us.next_billing_date,
    us.auto_renew,
    sp.content_access_level,
    sp.max_concurrent_sessions
FROM user_subscriptions us
JOIN users u ON us.user_id = u.id
JOIN subscription_plans sp ON us.plan_id = sp.id
WHERE us.status = 'active' AND u.account_status = 'active';

-- User content access permissions
CREATE VIEW user_content_access AS
SELECT 
    u.id as user_id,
    u.email,
    ci.id as content_id,
    ci.title,
    ci.content_type,
    ci.access_level as content_access_level,
    ci.required_plan_level,
    COALESCE(us.status, 'none') as subscription_status,
    COALESCE(sp.content_access_level, 0) as user_access_level,
    CASE 
        WHEN sp.content_access_level >= ci.required_plan_level THEN true
        WHEN ucp.id IS NOT NULL AND ucp.is_active = true THEN true
        ELSE false
    END as has_access
FROM users u
CROSS JOIN content_items ci
LEFT JOIN user_subscriptions us ON u.id = us.user_id AND us.status = 'active'
LEFT JOIN subscription_plans sp ON us.plan_id = sp.id
LEFT JOIN user_content_permissions ucp ON u.id = ucp.user_id AND ci.id = ucp.content_id
WHERE u.account_status = 'active' AND ci.is_published = true;

-- User activity summary
CREATE VIEW user_activity_summary AS
SELECT 
    u.id as user_id,
    u.email,
    u.username,
    COUNT(DISTINCT cc.content_id) as content_accessed,
    COUNT(DISTINCT CASE WHEN cc.action = 'complete' THEN cc.content_id END) as content_completed,
    SUM(cc.time_spent_minutes) as total_time_spent_minutes,
    MAX(cc.created_at) as last_activity,
    COUNT(DISTINCT la.id) as login_attempts,
    COUNT(DISTINCT CASE WHEN la.status = 'success' THEN la.id END) as successful_logins
FROM users u
LEFT JOIN content_consumption cc ON u.id = cc.user_id
LEFT JOIN login_attempts la ON u.id = la.user_id
WHERE u.account_status = 'active'
GROUP BY u.id, u.email, u.username;

-- =====================================================
-- 8. INITIAL DATA SEEDING
-- =====================================================

-- Insert default roles
INSERT INTO roles (name, display_name, description, permissions, is_system_role) VALUES
('admin', 'Administrator', 'Full system access', '["*"]', true),
('moderator', 'Moderator', 'Content moderation and user management', '["users:read", "users:moderate", "content:moderate"]', true),
('premium_user', 'Premium User', 'Access to premium content', '["content:premium"]', true),
('free_user', 'Free User', 'Basic access to free content', '["content:free"]', true);

-- Insert default subscription plans
INSERT INTO subscription_plans (name, display_name, description, price_monthly, price_yearly, billing_cycle, features, content_access_level, max_concurrent_sessions) VALUES
('free', 'Free', 'Basic access to free content', 0, 0, 'monthly', '{"ads": true, "support": "community"}', 1, 1),
('basic', 'Basic', 'Access to basic AI training content', 19.99, 199.99, 'monthly', '{"ads": false, "support": "email"}', 2, 2),
('pro', 'Professional', 'Full access to AI training library', 49.99, 499.99, 'monthly', '{"ads": false, "support": "priority", "api_access": true}', 3, 5),
('enterprise', 'Enterprise', 'Full access plus team features', 99.99, 999.99, 'monthly', '{"ads": false, "support": "dedicated", "api_access": true, "team_management": true}', 4, 10);

-- Insert default content categories
INSERT INTO content_categories (name, slug, description, access_level, required_plan_level) VALUES
('Machine Learning Fundamentals', 'ml-fundamentals', 'Basic concepts and algorithms', 1, 1),
('Deep Learning', 'deep-learning', 'Neural networks and deep learning', 2, 2),
('Natural Language Processing', 'nlp', 'Text processing and language models', 3, 2),
('Computer Vision', 'computer-vision', 'Image and video processing', 3, 2),
('Advanced AI Research', 'advanced-ai', 'Cutting-edge research and techniques', 4, 3),
('AI Ethics and Safety', 'ai-ethics', 'Responsible AI development', 2, 2);

-- =====================================================
-- 9. DATABASE PARTITIONING (for scalability)
-- =====================================================

-- Partition login_attempts by month for performance
CREATE TABLE login_attempts_y2024m01 PARTITION OF login_attempts
FOR VALUES FROM ('2024-01-01') TO ('2024-02-01');

-- Partition content_consumption by month
CREATE TABLE content_consumption_y2024m01 PARTITION OF content_consumption
FOR VALUES FROM ('2024-01-01') TO ('2024-02-01');

-- Partition security_audit_log by month
CREATE TABLE security_audit_log_y2024m01 PARTITION OF security_audit_log
FOR VALUES FROM ('2024-01-01') TO ('2024-02-01');

-- =====================================================
-- 10. QUERY OPTIMIZATION PATTERNS
-- =====================================================

-- Materialized view for subscription metrics (refresh daily)
CREATE MATERIALIZED VIEW subscription_metrics AS
SELECT 
    sp.name as plan_name,
    COUNT(*) as active_subscribers,
    SUM(us.price_paid) as monthly_revenue,
    AVG(EXTRACT(EPOCH FROM (us.current_period_end - us.current_period_start))/86400) as avg_subscription_days
FROM user_subscriptions us
JOIN subscription_plans sp ON us.plan_id = sp.id
WHERE us.status = 'active'
GROUP BY sp.name;

-- Index for subscription metrics refresh
CREATE UNIQUE INDEX idx_subscription_metrics_plan ON subscription_metrics(plan_name);

-- Materialized view for content popularity
CREATE MATERIALIZED VIEW content_popularity AS
SELECT 
    ci.id,
    ci.title,
    ci.content_type,
    COUNT(DISTINCT cc.user_id) as unique_users,
    COUNT(*) as total_views,
    AVG(cc.rating) as avg_rating,
    SUM(cc.time_spent_minutes) as total_time_spent
FROM content_items ci
LEFT JOIN content_consumption cc ON ci.id = cc.content_id
GROUP BY ci.id, ci.title, ci.content_type;

-- =====================================================
-- END OF SCHEMA
-- =====================================================

-- Performance notes:
-- 1. Use connection pooling (recommended: 10-50 connections)
-- 2. Enable query plan caching
-- 3. Regular VACUUM and ANALYZE operations
-- 4. Consider read replicas for analytics queries
-- 5. Monitor slow queries and optimize indexes
-- 6. Use Redis/Memcached for session storage and caching
-- 7. Implement database backup and disaster recovery

-- Security notes:
-- 1. Use prepared statements to prevent SQL injection
-- 2. Implement row-level security policies if needed
-- 3. Regular security audits and penetration testing
-- 4. Encrypt sensitive data at rest and in transit
-- 5. Implement proper database user permissions
-- 6. Monitor for suspicious database activity
-- 7. Regular database updates and security patches