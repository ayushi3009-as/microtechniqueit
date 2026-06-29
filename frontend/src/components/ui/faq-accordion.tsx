'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  className?: string;
}

export function FaqAccordion({ items, className }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn('mx-auto w-full max-w-3xl space-y-3', className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <motion.div
            key={index}
            className={cn(
              'overflow-hidden rounded-xl border transition-colors duration-300',
              isOpen
                ? 'border-indigo-500/30 bg-indigo-500/5'
                : 'border-zinc-800/50 bg-zinc-900/30'
            )}
            initial={false}
          >
            <button
              className={cn(
                'flex w-full items-center justify-between gap-4 px-6 py-5 text-left',
                'transition-colors duration-300',
                'hover:bg-white/[0.02]',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-500/50'
              )}
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
            >
              <span className="text-base font-medium text-zinc-100">
                {item.question}
              </span>
              <motion.span
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-zinc-400"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                {isOpen ? (
                  <Minus className="h-3.5 w-3.5" />
                ) : (
                  <Plus className="h-3.5 w-3.5" />
                )}
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
                    opacity: { duration: 0.25, delay: 0.05 },
                  }}
                >
                  <div className="px-6 pb-5 text-sm leading-relaxed text-zinc-400">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
