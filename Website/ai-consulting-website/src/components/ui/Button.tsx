import React, { memo } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'brutalist';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
  'aria-label'?: string;
  loading?: boolean;
}

const Button = memo(React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, children, loading = false, ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transition-all duration-200";
    
    const brutalistClasses = variant === 'brutalist' 
      ? "border-3 border-black rounded-xl relative overflow-hidden transition-all duration-300 ease-cubic-bezier(0.175, 0.885, 0.32, 1.275) hover:translate-x-[-4px] hover:translate-y-[-4px] active:translate-x-[2px] active:translate-y-[2px] shadow-[4px_4px_0px_#000000] hover:shadow-[8px_8px_0px_#000000] active:shadow-[2px_2px_0px_#000000]"
      : "rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-cta-highlight";
    
    const variants = {
      primary: "bg-cta-highlight hover:bg-hover-effect text-text-light shadow-lg hover:shadow-xl focus-visible:ring-cta-highlight",
      secondary: "bg-dark-accent hover:bg-neutral-support text-text-light shadow-lg hover:shadow-xl focus-visible:ring-dark-accent",
      outline: "border-2 border-cta-highlight text-cta-highlight hover:bg-cta-highlight hover:text-text-light focus-visible:ring-cta-highlight",
      ghost: "text-text-secondary hover:text-primary-dark hover:bg-background-base focus-visible:ring-neutral-support",
      brutalist: "bg-cta-highlight text-text-light font-bold border-black focus-visible:ring-cta-highlight"
    };
    
    const sizes = {
      sm: "h-9 px-3 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-14 px-8 text-lg"
    };

    const classes = cn(
      baseClasses, 
      brutalistClasses, 
      variants[variant], 
      sizes[size], 
      loading && "opacity-75 cursor-not-allowed",
      className
    );

    const buttonContent = (
      <>
        {loading && (
          <svg 
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" 
            fill="none" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
        {children}
      </>
    );

    if (href) {
      // Check if it's an internal link (starts with /) or external link (starts with http/mailto)
      const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
      
      if (isExternal) {
        return (
          <a 
            href={href} 
            className={classes} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-disabled={loading}
          >
            {buttonContent}
          </a>
        );
      } else {
        return (
          <Link href={href} className={classes} aria-disabled={loading}>
            {buttonContent}
          </Link>
        );
      }
    }

    return (
      <button 
        className={classes} 
        ref={ref} 
        disabled={loading || props.disabled}
        aria-disabled={loading || props.disabled}
        {...props}
      >
        {buttonContent}
      </button>
    );
  }
));

Button.displayName = "Button";

export { Button };