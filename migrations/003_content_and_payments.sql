-- =====================================================
-- Migration 003: Content Management and Payment System
-- =====================================================
-- This migration adds comprehensive content management,
-- payment processing, subscription tracking, and analytics.
-- =====================================================

-- Migration metadata
INSERT INTO schema_migrations (version, description, applied_at) VALUES 
('003', 'Content management system with payment processing and analytics', CURRENT_TIMESTAMP);

-- Enhanced subscription plans with full feature set
ALTER TABLE subscription_plans ADD COLUMN IF NOT EXISTS price_currency VARCHAR(3) DEFAULT 'USD';
ALTER TABLE subscription_plans ADD COLUMN IF NOT EXISTS trial_period_days INTEGER DEFAULT 0;
ALTER TABLE subscription_plans ADD COLUMN IF NOT EXISTS features JSONB DEFAULT '{}';
ALTER TABLE subscription_plans ADD COLUMN IF NOT EXISTS limits JSONB DEFAULT '{}';
ALTER TABLE subscription_plans ADD COLUMN IF NOT EXISTS max_concurrent_sessions INTEGER DEFAULT 1;
ALTER TABLE subscription_plans ADD COLUMN IF NOT EXISTS api_rate_limit INTEGER DEFAULT 100;
ALTER TABLE subscription_plans ADD COLUMN IF NOT EXISTS storage_limit_gb INTEGER DEFAULT 5;
ALTER TABLE subscription_plans ADD COLUMN IF NOT EXISTS sort_order INTEGER DEFAULT 0;

-- Enhanced user subscriptions with billing details
ALTER TABLE user_subscriptions ADD COLUMN IF NOT EXISTS billing_cycle VARCHAR(20) NOT NULL DEFAULT 'monthly';
ALTER TABLE user_subscriptions ADD COLUMN IF NOT EXISTS price_paid DECIMAL(10,2);
ALTER TABLE user_subscriptions ADD COLUMN IF NOT EXISTS currency VARCHAR(3) DEFAULT 'USD';
ALTER TABLE user_subscriptions ADD COLUMN IF NOT EXISTS trial_start_date TIMESTAMP;
ALTER TABLE user_subscriptions ADD COLUMN IF NOT EXISTS trial_end_date TIMESTAMP;
ALTER TABLE user_subscriptions ADD COLUMN IF NOT EXISTS next_billing_date TIMESTAMP;
ALTER TABLE user_subscriptions ADD COLUMN IF NOT EXISTS cancelled_at TIMESTAMP;
ALTER TABLE user_subscriptions ADD COLUMN IF NOT EXISTS cancellation_reason TEXT;
ALTER TABLE user_subscriptions ADD COLUMN IF NOT EXISTS promo_code VARCHAR(50);
ALTER TABLE user_subscriptions ADD COLUMN IF NOT EXISTS discount_amount DECIMAL(10,2) DEFAULT 0;
ALTER TABLE user_subscriptions ADD COLUMN IF NOT EXISTS external_subscription_id VARCHAR(255);
ALTER TABLE user_subscriptions ADD COLUMN IF NOT EXISTS payment_provider VARCHAR(50);
ALTER TABLE user_subscriptions ADD COLUMN IF NOT EXISTS metadata JSONB DEFAULT '{}';

-- Payment transactions table
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

-- Subscription changes tracking
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

-- Enhanced content categories with hierarchy
ALTER TABLE content_categories ADD COLUMN IF NOT EXISTS parent_id UUID REFERENCES content_categories(id);
ALTER TABLE content_categories ADD COLUMN IF NOT EXISTS sort_order INTEGER DEFAULT 0;
ALTER TABLE content_categories ADD COLUMN IF NOT EXISTS metadata JSONB DEFAULT '{}';

-- Enhanced content items with full metadata
ALTER TABLE content_items ADD COLUMN IF NOT EXISTS difficulty_level VARCHAR(20) DEFAULT 'beginner' CHECK (difficulty_level IN ('beginner', 'intermediate', 'advanced', 'expert'));
ALTER TABLE content_items ADD COLUMN IF NOT EXISTS estimated_duration INTEGER; -- in minutes
ALTER TABLE content_items ADD COLUMN IF NOT EXISTS content_url TEXT;
ALTER TABLE content_items ADD COLUMN IF NOT EXISTS thumbnail_url TEXT;
ALTER TABLE content_items ADD COLUMN IF NOT EXISTS file_size BIGINT;
ALTER TABLE content_items ADD COLUMN IF NOT EXISTS file_format VARCHAR(20);
ALTER TABLE content_items ADD COLUMN IF NOT EXISTS tags JSONB DEFAULT '[]';
ALTER TABLE content_items ADD COLUMN IF NOT EXISTS prerequisites JSONB DEFAULT '[]';
ALTER TABLE content_items ADD COLUMN IF NOT EXISTS learning_objectives JSONB DEFAULT '[]';
ALTER TABLE content_items ADD COLUMN IF NOT EXISTS published_at TIMESTAMP;
ALTER TABLE content_items ADD COLUMN IF NOT EXISTS view_count INTEGER DEFAULT 0;
ALTER TABLE content_items ADD COLUMN IF NOT EXISTS download_count INTEGER DEFAULT 0;
ALTER TABLE content_items ADD COLUMN IF NOT EXISTS rating_average DECIMAL(3,2) DEFAULT 0;
ALTER TABLE content_items ADD COLUMN IF NOT EXISTS rating_count INTEGER DEFAULT 0;
ALTER TABLE content_items ADD COLUMN IF NOT EXISTS created_by UUID REFERENCES users(id);
ALTER TABLE content_items ADD COLUMN IF NOT EXISTS metadata JSONB DEFAULT '{}';

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

-- Learning analytics
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

-- Audit trail for sensitive operations
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

-- Indexes for new tables
CREATE INDEX idx_payments_user ON payments(user_id);
CREATE INDEX idx_payments_subscription ON payments(subscription_id);
CREATE INDEX idx_payments_status ON payments(status);
CREATE INDEX idx_payments_created ON payments(created_at);
CREATE INDEX idx_subscription_changes_subscription ON subscription_changes(subscription_id);
CREATE INDEX idx_subscription_changes_type ON subscription_changes(change_type);
CREATE INDEX idx_user_content_permissions_user ON user_content_permissions(user_id);
CREATE INDEX idx_user_content_permissions_content ON user_content_permissions(content_id);
CREATE INDEX idx_content_consumption_user ON content_consumption(user_id);
CREATE INDEX idx_content_consumption_content ON content_consumption(content_id);
CREATE INDEX idx_content_consumption_action ON content_consumption(action);
CREATE INDEX idx_content_consumption_created ON content_consumption(created_at);
CREATE INDEX idx_content_consumption_user_content ON content_consumption(user_id, content_id);
CREATE INDEX idx_learning_analytics_user ON learning_analytics(user_id);
CREATE INDEX idx_learning_analytics_content ON learning_analytics(content_id);
CREATE INDEX idx_learning_analytics_recorded ON learning_analytics(recorded_at);
CREATE INDEX idx_audit_trail_table ON audit_trail(table_name);
CREATE INDEX idx_audit_trail_record ON audit_trail(record_id);
CREATE INDEX idx_audit_trail_changed ON audit_trail(changed_at);

-- Enhanced subscription plans index
CREATE INDEX idx_subscription_plans_access_level ON subscription_plans(content_access_level);
CREATE INDEX idx_subscription_plans_active ON subscription_plans(is_active);
CREATE INDEX idx_user_subscriptions_billing_date ON user_subscriptions(next_billing_date);
CREATE INDEX idx_user_subscriptions_period ON user_subscriptions(current_period_start, current_period_end);

-- Content indexes
CREATE INDEX idx_content_items_category ON content_items(category_id);
CREATE INDEX idx_content_items_access_level ON content_items(access_level);
CREATE INDEX idx_content_items_premium ON content_items(is_premium);
CREATE INDEX idx_content_items_published ON content_items(is_published);
CREATE INDEX idx_content_items_type ON content_items(content_type);
CREATE INDEX idx_content_items_difficulty ON content_items(difficulty_level);
CREATE INDEX idx_content_categories_parent ON content_categories(parent_id);

-- Full-text search indexes
CREATE INDEX idx_content_items_search ON content_items USING gin(to_tsvector('english', title || ' ' || description));

-- Update triggers for new tables
CREATE TRIGGER update_payments_updated_at BEFORE UPDATE ON payments FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
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
CREATE TRIGGER audit_user_subscriptions AFTER INSERT OR UPDATE OR DELETE ON user_subscriptions FOR EACH ROW EXECUTE FUNCTION audit_trigger_function();
CREATE TRIGGER audit_payments AFTER INSERT OR UPDATE OR DELETE ON payments FOR EACH ROW EXECUTE FUNCTION audit_trigger_function();

-- Create views for common queries
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

-- User content access view
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

-- Content consumption analytics function
CREATE OR REPLACE FUNCTION update_content_stats()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        -- Update view count
        IF NEW.action = 'view' THEN
            UPDATE content_items 
            SET view_count = view_count + 1
            WHERE id = NEW.content_id;
        END IF;
        
        -- Update download count
        IF NEW.action = 'download' THEN
            UPDATE content_items 
            SET download_count = download_count + 1
            WHERE id = NEW.content_id;
        END IF;
        
        -- Update rating average
        IF NEW.action = 'rate' AND NEW.rating IS NOT NULL THEN
            UPDATE content_items 
            SET rating_average = (
                SELECT AVG(rating::DECIMAL)
                FROM content_consumption
                WHERE content_id = NEW.content_id AND action = 'rate' AND rating IS NOT NULL
            ),
            rating_count = (
                SELECT COUNT(*)
                FROM content_consumption
                WHERE content_id = NEW.content_id AND action = 'rate' AND rating IS NOT NULL
            )
            WHERE id = NEW.content_id;
        END IF;
        
        RETURN NEW;
    END IF;
    RETURN NULL;
END;
$$ language 'plpgsql';

-- Apply content stats trigger
CREATE TRIGGER update_content_stats_trigger AFTER INSERT ON content_consumption FOR EACH ROW EXECUTE FUNCTION update_content_stats();

-- Update existing subscription plans with new features
UPDATE subscription_plans SET features = '{"ads": true, "support": "community"}' WHERE name = 'free';
UPDATE subscription_plans SET features = '{"ads": false, "support": "email"}' WHERE name = 'basic';
UPDATE subscription_plans SET features = '{"ads": false, "support": "priority", "api_access": true}' WHERE name = 'pro';

-- Insert enterprise plan
INSERT INTO subscription_plans (name, display_name, description, price_monthly, price_yearly, content_access_level, max_concurrent_sessions, features) 
VALUES ('enterprise', 'Enterprise', 'Full access plus team features', 99.99, 999.99, 4, 10, '{"ads": false, "support": "dedicated", "api_access": true, "team_management": true}');

-- Insert additional content categories
INSERT INTO content_categories (name, slug, description, access_level, required_plan_level) VALUES
('Computer Vision', 'computer-vision', 'Image and video processing', 3, 2),
('Advanced AI Research', 'advanced-ai', 'Cutting-edge research and techniques', 4, 3),
('AI Ethics and Safety', 'ai-ethics', 'Responsible AI development', 2, 2);

-- Rollback instructions
UPDATE schema_migrations SET rollback_sql = '
DROP TRIGGER IF EXISTS update_content_stats_trigger ON content_consumption;
DROP FUNCTION IF EXISTS update_content_stats CASCADE;
DROP VIEW IF EXISTS user_content_access;
DROP VIEW IF EXISTS active_user_subscriptions;
DROP TRIGGER IF EXISTS audit_payments ON payments;
DROP TRIGGER IF EXISTS audit_user_subscriptions ON user_subscriptions;
DROP FUNCTION IF EXISTS audit_trigger_function CASCADE;
DROP TABLE IF EXISTS audit_trail CASCADE;
DROP TABLE IF EXISTS learning_analytics CASCADE;
DROP TABLE IF EXISTS content_consumption CASCADE;
DROP TABLE IF EXISTS user_content_permissions CASCADE;
DROP TABLE IF EXISTS subscription_changes CASCADE;
DROP TABLE IF EXISTS payments CASCADE;
-- Remove added columns (this would require backing up data first)
' WHERE version = '003';

-- Migration complete
SELECT 'Migration 003 completed successfully' as status;