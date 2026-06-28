'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'p';
  className?: string;
  delay?: number;
  splitBy?: 'word' | 'char';
  once?: boolean;
}

export function AnimatedText({
  text,
  as: Tag = 'p',
  className,
  delay = 0,
  splitBy = 'word',
  once = true,
}: AnimatedTextProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);
  const isInView = useInView(ref, { once, margin: '-50px' });

  const units = splitBy === 'word' ? text.split(' ') : text.split('');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const containerVariants: any = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: splitBy === 'char' ? 0.02 : 0.06,
        delayChildren: delay,
      },
    },
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const unitVariants: any = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <Tag ref={ref} className={cn('flex flex-wrap', className)}>
      <motion.span
        className="flex flex-wrap"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {units.map((unit, i) => (
          <motion.span
            key={`${unit}-${i}`}
            variants={unitVariants}
            className="inline-block"
            style={{ marginRight: splitBy === 'word' ? '0.3em' : undefined }}
          >
            {unit}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}
