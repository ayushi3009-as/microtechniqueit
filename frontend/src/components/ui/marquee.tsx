'use client';

import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
  className?: string;
}

export function Marquee({
  children,
  speed = 40,
  direction = 'left',
  pauseOnHover = true,
  className,
}: MarqueeProps) {
  const animationDirection = direction === 'left' ? 'normal' : 'reverse';

  return (
    <div
      className={cn(
        'group relative flex overflow-hidden',
        className
      )}
      style={{
        maskImage:
          'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
      }}
    >
      {[0, 1].map((i) => (
        <div
          key={i}
          className={cn(
            'flex shrink-0 items-center gap-8',
            'animate-marquee',
            pauseOnHover && 'group-hover:[animation-play-state:paused]'
          )}
          style={{
            animationDuration: `${speed}s`,
            animationDirection,
          }}
          aria-hidden={i === 1}
        >
          {children}
        </div>
      ))}

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
      `}</style>
    </div>
  );
}
