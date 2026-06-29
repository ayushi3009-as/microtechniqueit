'use client';

import { forwardRef } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  [
    'relative inline-flex items-center justify-center gap-2',
    'font-medium tracking-tight rounded-xl',
    'transition-all duration-300 ease-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950',
    'disabled:pointer-events-none disabled:opacity-50',
    'cursor-pointer select-none',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-gradient-to-r from-indigo-500 via-indigo-600 to-violet-600',
          'text-white shadow-lg shadow-indigo-500/25',
          'hover:shadow-xl hover:shadow-indigo-500/30',
          'hover:from-indigo-400 hover:via-indigo-500 hover:to-violet-500',
        ],
        secondary: [
          'bg-transparent border border-zinc-700/50',
          'text-zinc-100 backdrop-blur-sm',
          'hover:border-indigo-500/50 hover:bg-indigo-500/5',
          'hover:text-white hover:shadow-lg hover:shadow-indigo-500/10',
        ],
        ghost: [
          'bg-transparent text-zinc-400',
          'hover:text-white hover:bg-white/5',
        ],
        destructive: [
          'bg-gradient-to-r from-red-500 to-rose-600',
          'text-white shadow-lg shadow-red-500/25',
          'hover:shadow-xl hover:shadow-red-500/30',
          'hover:from-red-400 hover:to-rose-500',
        ],
      },
      size: {
        sm: 'h-8 px-3 text-xs rounded-lg',
        md: 'h-10 px-5 text-sm',
        lg: 'h-12 px-7 text-base',
        xl: 'h-14 px-10 text-lg rounded-2xl',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends Omit<HTMLMotionProps<'button'>, 'children'>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      isLoading = false,
      icon,
      iconPosition = 'left',
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        disabled={disabled || isLoading}
        {...props}
      >
        {/* Gradient border overlay for secondary variant */}
        {variant === 'secondary' && (
          <span
            className={cn(
              'absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500',
              'bg-gradient-to-r from-indigo-500/20 via-violet-500/20 to-indigo-500/20',
              'group-hover:opacity-100'
            )}
            aria-hidden="true"
          />
        )}

        {isLoading && (
          <Loader2 className="h-4 w-4 animate-spin" />
        )}

        {!isLoading && icon && iconPosition === 'left' && (
          <span className="shrink-0">{icon}</span>
        )}

        <span>{children}</span>

        {!isLoading && icon && iconPosition === 'right' && (
          <span className="shrink-0">{icon}</span>
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
