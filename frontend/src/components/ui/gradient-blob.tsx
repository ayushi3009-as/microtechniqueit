'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GradientBlobProps {
  className?: string;
}

const blobs = [
  {
    color: 'bg-indigo-500/20',
    size: 'h-72 w-72 md:h-96 md:w-96',
    initial: { x: -100, y: -50 },
    animate: {
      x: [-100, 50, -80, 30, -100],
      y: [-50, 80, -30, 60, -50],
    },
    duration: 20,
  },
  {
    color: 'bg-violet-500/15',
    size: 'h-80 w-80 md:h-[28rem] md:w-[28rem]',
    initial: { x: 100, y: 50 },
    animate: {
      x: [100, -60, 120, -40, 100],
      y: [50, -70, 40, -60, 50],
    },
    duration: 25,
  },
  {
    color: 'bg-cyan-500/10',
    size: 'h-64 w-64 md:h-80 md:w-80',
    initial: { x: 0, y: 100 },
    animate: {
      x: [0, 80, -60, 40, 0],
      y: [100, -40, 80, -20, 100],
    },
    duration: 22,
  },
  {
    color: 'bg-fuchsia-500/10',
    size: 'h-56 w-56 md:h-72 md:w-72',
    initial: { x: -50, y: -80 },
    animate: {
      x: [-50, 70, -30, 90, -50],
      y: [-80, 30, -50, 70, -80],
    },
    duration: 28,
  },
];

export function GradientBlob({ className }: GradientBlobProps) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 -z-10 overflow-hidden',
        className
      )}
      aria-hidden="true"
    >
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={cn(
            'absolute left-1/2 top-1/2 rounded-full blur-3xl',
            blob.color,
            blob.size
          )}
          initial={blob.initial}
          animate={blob.animate}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
