import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'brutalist';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, children, ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";
    
    const brutalistClasses = variant === 'brutalist' 
      ? "border-3 border-black rounded-xl relative overflow-hidden transition-all duration-300 ease-cubic-bezier(0.175, 0.885, 0.32, 1.275) hover:translate-x-[-4px] hover:translate-y-[-4px] active:translate-x-[2px] active:translate-y-[2px] shadow-[4px_4px_0px_#000000] hover:shadow-[8px_8px_0px_#000000] active:shadow-[2px_2px_0px_#000000]"
      : "rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-accent-blue";
    
    const variants = {
      primary: "bg-accent-blue hover:bg-accent-blue-light text-white shadow-lg hover:shadow-xl",
      secondary: "bg-accent-purple hover:bg-accent-purple/90 text-white shadow-lg hover:shadow-xl",
      outline: "border-2 border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white",
      ghost: "text-text-secondary hover:text-text-primary hover:bg-primary-800",
      brutalist: "bg-accent-blue text-white font-bold border-black"
    };
    
    const sizes = {
      sm: "h-9 px-3 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-14 px-8 text-lg"
    };

    const classes = cn(baseClasses, brutalistClasses, variants[variant], sizes[size], className);

    if (href) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <button className={classes} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };