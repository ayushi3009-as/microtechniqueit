import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  [
    'inline-flex items-center rounded-full px-3 py-1',
    'text-xs font-semibold uppercase tracking-wider',
    'transition-colors duration-300',
  ],
  {
    variants: {
      variant: {
        default: [
          'bg-zinc-800/80 text-zinc-300',
          'ring-1 ring-zinc-700/50',
        ],
        outline: [
          'bg-transparent text-zinc-400',
          'ring-1 ring-zinc-700',
        ],
        gradient: [
          'bg-gradient-to-r from-indigo-500/10 to-violet-500/10',
          'text-indigo-400',
          'ring-1 ring-indigo-500/20',
        ],
        success: [
          'bg-emerald-500/10 text-emerald-400',
          'ring-1 ring-emerald-500/20',
        ],
        warning: [
          'bg-amber-500/10 text-amber-400',
          'ring-1 ring-amber-500/20',
        ],
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { badgeVariants };
