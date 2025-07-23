# AI Training Content Access Platform - Database Schema

## Overview

This database schema is designed for a comprehensive AI training content access platform with user authentication, subscription management, content access control, and advanced security features.

## Schema Components

### 1. User Management System

**Core Tables:**
- `users` - User profiles, authentication, and account status
- `roles` - Role-based access control system
- `user_roles` - User role assignments
- `user_verifications` - Email/phone verification tokens
- `password_history` - Password history for security compliance
- `user_security_settings` - Individual user security preferences

**Key Features:**
- Multi-factor authentication support
- Account lockout protection
- Password history tracking
- Flexible role-based permissions
- Email/phone verification system

### 2. Subscription Management

**Core Tables:**
- `subscription_plans` - Available subscription tiers
- `user_subscriptions` - User subscription records
- `payments` - Payment transaction history
- `subscription_changes` - Subscription upgrade/downgrade tracking

**Key Features:**
- Multiple billing cycles (monthly, yearly, lifetime)
- Trial period support
- Prorated upgrades/downgrades
- Payment provider integration
- Subscription analytics

### 3. Content Access Control

**Core Tables:**
- `content_categories` - Hierarchical content organization
- `content_items` - AI training content metadata
- `user_content_permissions` - Granular content access permissions
- `content_consumption` - User interaction tracking
- `learning_analytics` - Learning progress and metrics

**Key Features:**
- Hierarchical content categories
- Fine-grained access control
- Content consumption tracking
- Learning progress analytics
- Content rating system

### 4. Security & Audit System

**Core Tables:**
- `login_attempts` - Login attempt tracking and security monitoring
- `user_sessions` - Active session management
- `api_tokens` - API access token management
- `refresh_tokens` - JWT refresh token handling
- `security_audit_log` - Security event logging
- `audit_trail` - Data change tracking

**Key Features:**
- Comprehensive audit logging
- Session management
- API token security
- Suspicious activity detection
- Data change tracking

## Database Features

### Performance Optimizations

1. **Comprehensive Indexing**
   - Primary key indexes on all tables
   - Foreign key indexes for joins
   - Composite indexes for common queries
   - Full-text search indexes for content

2. **Materialized Views**
   - `subscription_metrics` - Real-time subscription analytics
   - `content_popularity` - Content engagement metrics

3. **Partitioning Strategy**
   - Login attempts partitioned by month
   - Content consumption partitioned by month
   - Security audit logs partitioned by month

4. **Query Optimization**
   - Optimized views for common access patterns
   - Efficient join strategies
   - Proper data types and constraints

### Security Features

1. **Authentication Security**
   - Password hashing with bcrypt
   - Multi-factor authentication support
   - Session timeout management
   - Account lockout protection

2. **Authorization System**
   - Role-based access control
   - Resource-level permissions
   - Content access levels
   - API token management

3. **Audit & Compliance**
   - Comprehensive audit trails
   - Security event logging
   - Data change tracking
   - Compliance reporting

4. **Data Protection**
   - Soft deletes for data retention
   - Encrypted sensitive data
   - IP-based access tracking
   - Suspicious activity detection

## Migration Strategy

The schema is deployed through incremental migrations:

1. **Migration 001** - Initial Setup
   - Basic user authentication
   - Simple subscription system
   - Core content structure

2. **Migration 002** - Security Enhancements
   - Login attempt tracking
   - Password history
   - API token management
   - Audit logging

3. **Migration 003** - Content & Payments
   - Advanced content management
   - Payment processing
   - Learning analytics
   - Subscription tracking

## Key Views

### `active_user_subscriptions`
Provides a complete view of active user subscriptions with plan details for billing and access control.

### `user_content_access`
Determines user access to content based on subscription level and explicit permissions.

### `user_activity_summary`
Aggregates user activity including content consumption, completion rates, and login patterns.

### `user_security_status`
Provides security overview including account status, 2FA status, and session information.

## Usage Patterns

### Authentication Queries
```sql
-- User login validation
SELECT u.*, uss.* FROM users u
LEFT JOIN user_security_settings uss ON u.id = uss.user_id
WHERE u.email = ? AND u.account_status = 'active';

-- Track login attempt
SELECT track_login_attempt(?, ?, ?, ?, ?, ?);
```

### Content Access Queries
```sql
-- Check user content access
SELECT has_access FROM user_content_access
WHERE user_id = ? AND content_id = ?;

-- Get user's accessible content
SELECT * FROM content_items ci
JOIN user_content_access uca ON ci.id = uca.content_id
WHERE uca.user_id = ? AND uca.has_access = true;
```

### Subscription Queries
```sql
-- Get active subscription
SELECT * FROM active_user_subscriptions
WHERE user_id = ?;

-- Check subscription status
SELECT status, current_period_end FROM user_subscriptions
WHERE user_id = ? AND status = 'active';
```

## Performance Considerations

1. **Connection Pooling**
   - Use connection pooling (10-50 connections recommended)
   - Implement connection retry logic

2. **Query Optimization**
   - Use prepared statements
   - Implement query result caching
   - Monitor slow queries

3. **Scaling Strategies**
   - Read replicas for analytics
   - Horizontal partitioning for large tables
   - Caching layer for frequently accessed data

4. **Maintenance Tasks**
   - Regular VACUUM and ANALYZE
   - Index maintenance
   - Token cleanup jobs
   - Archive old audit logs

## Security Best Practices

1. **Database Security**
   - Use database user with minimal permissions
   - Enable SSL/TLS connections
   - Regular security updates

2. **Application Security**
   - Input validation and sanitization
   - Parameterized queries
   - Rate limiting for API endpoints

3. **Monitoring & Alerting**
   - Failed login attempt monitoring
   - Unusual activity detection
   - Performance monitoring

## Backup & Recovery

1. **Backup Strategy**
   - Daily full backups
   - Point-in-time recovery
   - Test backup restoration regularly

2. **Disaster Recovery**
   - Cross-region backup replication
   - Recovery time objectives (RTO)
   - Recovery point objectives (RPO)

## Environment Setup

### Development
```bash
# Create database
createdb ai_training_platform_dev

# Run migrations
psql -d ai_training_platform_dev -f migrations/001_initial_setup.sql
psql -d ai_training_platform_dev -f migrations/002_security_enhancements.sql
psql -d ai_training_platform_dev -f migrations/003_content_and_payments.sql
```

### Production
```bash
# Create database with proper settings
createdb ai_training_platform_prod

# Apply migrations with transaction safety
psql -d ai_training_platform_prod -f migrations/001_initial_setup.sql
psql -d ai_training_platform_prod -f migrations/002_security_enhancements.sql
psql -d ai_training_platform_prod -f migrations/003_content_and_payments.sql
```

## Monitoring Queries

### System Health
```sql
-- Check active sessions
SELECT COUNT(*) FROM user_sessions WHERE is_active = true;

-- Recent login attempts
SELECT COUNT(*) FROM login_attempts WHERE created_at > NOW() - INTERVAL '1 hour';

-- Subscription metrics
SELECT * FROM subscription_metrics;
```

### Security Monitoring
```sql
-- Failed login attempts
SELECT COUNT(*) FROM login_attempts 
WHERE status = 'failed' AND created_at > NOW() - INTERVAL '1 hour';

-- Suspicious activity
SELECT * FROM security_audit_log 
WHERE severity IN ('warning', 'error', 'critical') 
AND created_at > NOW() - INTERVAL '1 day';
```

## Future Enhancements

1. **Advanced Analytics**
   - Machine learning for user behavior prediction
   - Content recommendation engine
   - Fraud detection algorithms

2. **Scalability Improvements**
   - Sharding strategy for user data
   - Cache optimization
   - Database clustering

3. **Additional Features**
   - Multi-tenant support
   - Advanced reporting
   - API rate limiting enhancement

## Support

For questions about the database schema:
- Review the migration files for implementation details
- Check the audit logs for data changes
- Monitor performance with the provided queries
- Follow security best practices for production deployment