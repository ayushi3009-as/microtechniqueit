'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './button';
import { GradientBlob } from './gradient-blob';

interface CtaSectionProps {
  title: string;
  description?: string;
  primaryCta?: string;
  secondaryCta?: string;
  primaryHref?: string;
  secondaryHref?: string;
  className?: string;
}

export function CtaSection({
  title,
  description,
  primaryCta = 'Get Started',
  secondaryCta,
  primaryHref = '#',
  secondaryHref = '#',
  className,
}: CtaSectionProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden rounded-3xl',
        'border border-indigo-500/10',
        'bg-gradient-to-br from-indigo-950/50 via-zinc-900/50 to-violet-950/50',
        'px-6 py-16 sm:px-12 md:py-24',
        className
      )}
    >
      <GradientBlob className="opacity-40" />

      <motion.div
        className="relative mx-auto max-w-2xl text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          <span className="bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
            {title}
          </span>
        </h2>

        {description && (
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            {description}
          </p>
        )}

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            variant="primary"
            size="lg"
            icon={<ArrowRight className="h-4 w-4" />}
            iconPosition="right"
            onClick={() => {
              window.location.href = primaryHref;
            }}
          >
            {primaryCta}
          </Button>

          {secondaryCta && (
            <Button
              variant="secondary"
              size="lg"
              onClick={() => {
                window.location.href = secondaryHref;
              }}
            >
              {secondaryCta}
            </Button>
          )}
        </div>
      </motion.div>
    </section>
  );
}
