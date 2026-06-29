'use client';

import { useRef, useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BentoCardProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  stat?: string;
  href?: string;
  gradient?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  children?: ReactNode;
}

const sizeClasses = {
  sm: '',
  md: 'md:col-span-2',
  lg: 'md:col-span-2 md:row-span-2',
};

export function BentoCard({
  title,
  description,
  icon,
  stat,
  href,
  gradient = 'from-indigo-500/10 via-transparent to-violet-500/10',
  className,
  size = 'sm',
  children,
}: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const Wrapper = href ? 'a' : 'div';
  const wrapperProps = href ? { href } : {};

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        'group relative overflow-hidden rounded-2xl',
        'border border-zinc-800/50',
        'bg-zinc-900/50 backdrop-blur-xl',
        'transition-shadow duration-500',
        'hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/5',
        sizeClasses[size],
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* Mouse-tracking glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: isHovered
            ? `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.12), transparent 40%)`
            : undefined,
        }}
        aria-hidden="true"
      />

      {/* Gradient border glow on hover */}
      <div
        className={cn(
          'pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500',
          'group-hover:opacity-100'
        )}
        style={{
          background: isHovered
            ? `radial-gradient(200px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.25), transparent 40%)`
            : undefined,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '1px',
        }}
        aria-hidden="true"
      />

      {/* Background gradient */}
      <div
        className={cn(
          'pointer-events-none absolute inset-0 bg-gradient-to-br opacity-50',
          gradient
        )}
        aria-hidden="true"
      />

      <Wrapper
        {...wrapperProps}
        className="relative flex h-full flex-col p-6 lg:p-8"
      >
        {icon && (
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-500/20">
            {icon}
          </div>
        )}

        {stat && (
          <div className="mb-2 text-3xl font-bold tracking-tight text-white lg:text-4xl">
            {stat}
          </div>
        )}

        <h3 className="text-lg font-semibold tracking-tight text-white">
          {title}
        </h3>

        {description && (
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">
            {description}
          </p>
        )}

        {children && <div className="mt-4 flex-1">{children}</div>}
      </Wrapper>
    </motion.div>
  );
}
