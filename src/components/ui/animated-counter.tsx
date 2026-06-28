'use client';

import { useEffect, useRef } from 'react';
import {
  useInView,
  useMotionValue,
  useTransform,
  animate,
  motion,
} from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label?: string;
  className?: string;
}

export function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  duration = 2,
  label,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const displayRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(motionValue, value, {
      duration,
      ease: [0.25, 0.46, 0.45, 0.94],
    });

    return controls.stop;
  }, [isInView, value, duration, motionValue]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      if (displayRef.current) {
        displayRef.current.textContent = `${prefix}${latest.toLocaleString()}${suffix}`;
      }
    });

    return unsubscribe;
  }, [rounded, prefix, suffix]);

  return (
    <motion.div
      ref={ref}
      className={cn('text-center', className)}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <span
        ref={displayRef}
        className="block text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent md:text-6xl"
      >
        {prefix}0{suffix}
      </span>
      {label && (
        <span className="mt-2 block text-sm font-medium tracking-wide text-zinc-500 uppercase">
          {label}
        </span>
      )}
    </motion.div>
  );
}
