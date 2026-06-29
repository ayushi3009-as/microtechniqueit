'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fadeUp: any = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export function SectionHeader({
  badge,
  title,
  description,
  align = 'center',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mx-auto max-w-3xl space-y-4',
        align === 'center' && 'text-center',
        align === 'left' && 'text-left',
        className
      )}
    >
      {badge && (
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span
            className={cn(
              'inline-flex items-center rounded-full px-4 py-1.5',
              'text-xs font-semibold uppercase tracking-wider',
              'bg-gradient-to-r from-indigo-500/10 to-violet-500/10',
              'text-indigo-400 ring-1 ring-indigo-500/20'
            )}
          >
            {badge}
          </span>
        </motion.div>
      )}

      <motion.h2
        custom={1}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
      >
        <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
          {title}
        </span>
      </motion.h2>

      {description && (
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-base leading-relaxed text-zinc-400 sm:text-lg md:text-xl"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
