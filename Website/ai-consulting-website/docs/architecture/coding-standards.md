# Newcode Website - Coding Standards

## Overview

This document defines the coding standards and best practices for the Newcode AI Consulting Website. These standards ensure code consistency, maintainability, and effective collaboration between human developers and AI agents.

## General Principles

### 1. **French-First Development**
- All user-facing content must be created in French first
- Variable names and comments can be in English for technical clarity
- Translation keys should be descriptive and consistent
- Follow Quebec French terminology where applicable

### 2. **Type Safety First**
- Use TypeScript for all code
- Avoid `any` types - use proper type definitions
- Leverage Prisma-generated types for database operations
- Define custom types in `src/types/` directory

### 3. **Component-Driven Architecture**
- Single responsibility principle for components
- Prefer composition over inheritance
- Use proper prop typing with TypeScript interfaces
- Keep components focused and reusable

## File Organization

### File Naming Conventions

```typescript
// Components: PascalCase
HeroBanner.tsx
FormationOverview.tsx
NavigationMenu.tsx

// Pages: lowercase with hyphens
formation-kickstart/
case-studies/
book-demo/

// Utilities: camelCase
timerValidation.ts
prismaClient.ts
authHelpers.ts

// API routes: lowercase
route.ts
signup/route.ts
[id]/route.ts

// Types: PascalCase with .d.ts for declarations
UserTypes.ts
next-auth.d.ts
ApiResponses.ts
```

### Directory Structure Rules

```
src/
├── components/
│   ├── ui/           # Atomic, reusable components
│   ├── sections/     # Page sections and features
│   ├── layout/       # Layout components
│   └── auth/         # Authentication components
├── app/
│   ├── [locale]/     # Internationalized pages
│   └── api/          # API routes
├── lib/              # Utilities and configurations
├── types/            # Type definitions
├── hooks/            # Custom React hooks
├── utils/            # Pure utility functions
└── messages/         # Translation files
```

## TypeScript Standards

### Interface Definitions

```typescript
// ✅ Good: Descriptive interface names
interface FormationDetails {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: 'CAD' | 'USD';
  modules: FormationModule[];
}

interface UserProgress {
  userId: string;
  courseId: string;
  completionPercentage: number;
  lastAccessedAt: Date;
}

// ❌ Bad: Generic or unclear names
interface Data {
  stuff: any[];
}

interface Props {
  data: any;
}
```

### Type Exports and Imports

```typescript
// ✅ Good: Organized type imports
import type { User, Course, Material } from '@prisma/client';
import type { NextAuthOptions } from 'next-auth';
import type { FormationDetails, UserProgress } from '@/types/course';

// ✅ Good: Re-export commonly used types
// types/index.ts
export type { FormationDetails, UserProgress } from './course';
export type { AuthUser, UserRole } from './auth';
```

## Component Standards

### React Component Structure

```typescript
// ✅ Good: Well-structured component
import React from 'react';
import { useTranslations } from 'next-intl';
import type { FormationDetails } from '@/types/course';

interface FormationCardProps {
  formation: FormationDetails;
  onEnroll: (formationId: string) => void;
  className?: string;
}

export function FormationCard({ 
  formation, 
  onEnroll, 
  className = '' 
}: FormationCardProps) {
  const t = useTranslations('formations');
  
  const handleEnrollClick = () => {
    onEnroll(formation.id);
  };

  return (
    <div className={`formation-card ${className}`}>
      <h3>{formation.title}</h3>
      <p>{formation.description}</p>
      <span className="price">
        {formation.price} {formation.currency}
      </span>
      <button 
        onClick={handleEnrollClick}
        className="enroll-button"
      >
        {t('enrollNow')}
      </button>
    </div>
  );
}
```

### Hooks and State Management

```typescript
// ✅ Good: Custom hook with proper typing
import { useState, useEffect } from 'react';
import type { Course } from '@prisma/client';

interface UseCourseProgressReturn {
  progress: number;
  loading: boolean;
  error: string | null;
  updateProgress: (newProgress: number) => Promise<void>;
}

export function useCourseProgress(courseId: string): UseCourseProgressReturn {
  const [progress, setProgress] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const updateProgress = async (newProgress: number) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/courses/${courseId}/progress`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ progress: newProgress }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update progress');
      }
      
      setProgress(newProgress);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch initial progress
    fetchProgress();
  }, [courseId]);

  return { progress, loading, error, updateProgress };
}
```

## API Standards

### API Route Structure

```typescript
// ✅ Good: Proper API route with error handling
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const course = await prisma.course.findUnique({
      where: { id: params.id },
      include: {
        materials: true,
        progress: {
          where: { userId: session.user.id }
        }
      }
    });

    if (!course) {
      return NextResponse.json(
        { error: 'Course not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ course });
  } catch (error) {
    console.error('Error fetching course:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

### Database Queries

```typescript
// ✅ Good: Efficient Prisma queries with proper error handling
export async function getUserCourses(userId: string) {
  try {
    const courses = await prisma.course.findMany({
      where: {
        progress: {
          some: { userId }
        }
      },
      include: {
        progress: {
          where: { userId },
          select: {
            progress: true,
            completedAt: true,
            updatedAt: true
          }
        },
        _count: {
          select: {
            materials: true
          }
        }
      },
      orderBy: {
        updatedAt: 'desc'
      }
    });

    return courses;
  } catch (error) {
    console.error('Error fetching user courses:', error);
    throw new Error('Failed to fetch courses');
  }
}
```

## Internationalization Standards

### Translation Key Naming

```typescript
// ✅ Good: Descriptive and hierarchical keys
{
  "formations": {
    "kickstart": {
      "title": "Formation Kickstart",
      "description": "Créez votre premier site ou app avec l'IA en quelques heures",
      "price": "280€",
      "paymentOptions": "payable en 3x"
    },
    "architecte": {
      "title": "Formation Architecte",
      "description": "  : La vision d'un entrepreneur, la puissance d'un lead tech",
      "price": "700€"
    },
    "common": {
      "enrollNow": "S'inscrire maintenant",
      "learnMore": "En savoir plus",
      "duration": "Durée",
      "modules": "modules"
    }
  }
}
```

### Component Internationalization

```typescript
// ✅ Good: Proper use of next-intl
import { useTranslations } from 'next-intl';

export function FormationPricing() {
  const t = useTranslations('formations');
  
  return (
    <div className="pricing-section">
      <h2>{t('kickstart.title')}</h2>
      <p>{t('kickstart.description')}</p>
      <span className="price">
        {t('kickstart.price')} ({t('kickstart.paymentOptions')})
      </span>
    </div>
  );
}
```

## Styling Standards

### Tailwind CSS Guidelines

```typescript
// ✅ Good: Logical class organization
<div className={cn(
  // Layout
  "flex flex-col md:flex-row gap-6 p-6",
  // Background and borders
  "bg-white rounded-lg border border-gray-200",
  // Shadow and effects
  "shadow-sm hover:shadow-md transition-shadow",
  // Responsive modifiers
  "md:p-8 lg:p-10",
  // Conditional classes
  isActive && "ring-2 ring-blue-500",
  className
)}>
```

### Component Styling Patterns

```typescript
// ✅ Good: Consistent styling patterns
const buttonVariants = {
  primary: "bg-blue-600 hover:bg-blue-700 text-white",
  secondary: "bg-gray-200 hover:bg-gray-300 text-gray-900",
  outline: "border border-gray-300 hover:border-gray-400 bg-transparent"
};

interface ButtonProps {
  variant?: keyof typeof buttonVariants;
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', size = 'md', children }: ButtonProps) {
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };

  return (
    <button className={cn(
      "rounded-md font-medium transition-colors",
      buttonVariants[variant],
      sizeClasses[size]
    )}>
      {children}
    </button>
  );
}
```

## Performance Standards

### Code Splitting and Imports

```typescript
// ✅ Good: Dynamic imports for code splitting
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const FormationDetails = dynamic(
  () => import('@/components/sections/FormationDetails'),
  {
    loading: () => <div>Chargement...</div>
  }
);

// ✅ Good: Tree-shaking friendly imports
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

// ❌ Bad: Import everything
import * as UI from '@/components/ui';
```

### Database Performance

```typescript
// ✅ Good: Efficient queries with proper pagination
export async function getCourses(page: number = 1, limit: number = 10) {
  const skip = (page - 1) * limit;
  
  const [courses, total] = await Promise.all([
    prisma.course.findMany({
      skip,
      take: limit,
      where: { isPublished: true },
      select: {
        id: true,
        title: true,
        description: true,
        price: true,
        _count: {
          select: { materials: true }
        }
      },
      orderBy: { createdAt: 'desc' }
    }),
    prisma.course.count({
      where: { isPublished: true }
    })
  ]);

  return {
    courses,
    pagination: {
      page,
      limit,
      total,
      pages: Math.ceil(total / limit)
    }
  };
}
```

## Security Standards

### Input Validation

```typescript
import { z } from 'zod';

// ✅ Good: Proper schema validation
const createCourseSchema = z.object({
  title: z.string().min(1).max(100),
  description: z.string().min(10).max(1000),
  price: z.number().positive(),
  modules: z.array(z.object({
    title: z.string().min(1),
    content: z.string().min(1),
    order: z.number().int().positive()
  }))
});

export async function createCourse(data: unknown) {
  const validatedData = createCourseSchema.parse(data);
  // ... rest of implementation
}
```

### Authentication Checks

```typescript
// ✅ Good: Consistent auth checks
export async function requireAuth(request: NextRequest) {
  const session = await getServerSession(authOptions);
  
  if (!session?.user) {
    return NextResponse.json(
      { error: 'Authentication required' },
      { status: 401 }
    );
  }
  
  return session;
}

// Usage in API routes
export async function DELETE(request: NextRequest) {
  const session = await requireAuth(request);
  if (session instanceof NextResponse) return session; // Error response
  
  // Continue with authenticated logic
}
```

## Testing Standards

### Component Testing

```typescript
import { render, screen } from '@testing-library/react';
import { FormationCard } from '@/components/sections/FormationCard';

describe('FormationCard', () => {
  const mockFormation = {
    id: '1',
    title: 'Formation Kickstart',
    description: 'Test description',
    price: 280,
    currency: 'CAD' as const
  };

  it('renders formation details correctly', () => {
    render(
      <FormationCard 
        formation={mockFormation} 
        onEnroll={jest.fn()} 
      />
    );
    
    expect(screen.getByText('Formation Kickstart')).toBeInTheDocument();
    expect(screen.getByText('280 CAD')).toBeInTheDocument();
  });
});
```

## Code Review Checklist

### Before Submitting Code

- [ ] TypeScript compilation passes without errors
- [ ] All components have proper prop types
- [ ] French translations are complete and accurate
- [ ] API routes include proper error handling
- [ ] Database queries are optimized
- [ ] Components follow single responsibility principle
- [ ] Code follows established naming conventions
- [ ] No sensitive data is exposed in client code
- [ ] Performance considerations are addressed
- [ ] Tests are written and passing

### AI Agent Guidelines

When working with AI agents on this codebase:

1. **Always specify TypeScript types** for better code generation
2. **Provide context about French-first approach** when creating content
3. **Include proper error handling** in all generated API routes
4. **Follow the established component patterns** from existing code
5. **Maintain consistency** with existing styling and structure
6. **Generate complete components** with proper imports and exports
7. **Include proper accessibility attributes** in UI components
8. **Follow the established directory structure** for new files

## Conclusion

These coding standards ensure that the Newcode website maintains high code quality, performance, and consistency across all development work, whether done by human developers or AI agents. Regular adherence to these standards will result in a maintainable, scalable, and professional codebase that serves the business objectives effectively.