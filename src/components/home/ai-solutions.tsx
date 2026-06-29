'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const solutions = [
  {
    emoji: '🤖',
    title: 'AI Chatbot',
    description:
      'Intelligent conversational AI for customer support & engagement',
    gradientFrom: '#2563EB',
    gradientTo: '#00E5FF',
  },
  {
    emoji: '🎙',
    title: 'AI Voice Agent',
    description: 'Voice-powered AI assistant for calls & meetings',
    gradientFrom: '#7c3aed',
    gradientTo: '#ec4899',
  },
  {
    emoji: '🎯',
    title: 'AI Lead Generator',
    description: 'Smart lead scoring & automated prospect discovery',
    gradientFrom: '#00E5FF',
    gradientTo: '#22c55e',
  },
  {
    emoji: '📢',
    title: 'AI Marketing',
    description: 'AI-driven campaign optimization & content generation',
    gradientFrom: '#ec4899',
    gradientTo: '#f97316',
  },
  {
    emoji: '📈',
    title: 'AI Analytics',
    description: 'Predictive analytics & business intelligence dashboards',
    gradientFrom: '#2563EB',
    gradientTo: '#7c3aed',
  },
  {
    emoji: '⚡',
    title: 'AI Automation',
    description: 'Workflow automation with intelligent process optimization',
    gradientFrom: '#22c55e',
    gradientTo: '#00E5FF',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export function AISolutions() {
  return (
    <section className="section-padding section-gradient">
      <div className="container-custom">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="badge mb-4 mx-auto w-fit">AI Solutions</div>
          <h2>
            Next-Gen{' '}
            <span className="text-accent-gradient">AI Solutions</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Supercharge your business with cutting-edge artificial intelligence
            tools designed for modern enterprises.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: '32px' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {solutions.map((solution) => (
            <motion.div
              key={solution.title}
              variants={cardVariants as any}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group relative rounded-[20px] p-[1.5px]"
              style={{
                background: `linear-gradient(135deg, ${solution.gradientFrom}, ${solution.gradientTo})`,
              }}
            >
              {/* Hover glow overlay */}
              <div
                className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow: `0 0 40px ${solution.gradientFrom}33, 0 0 80px ${solution.gradientTo}22`,
                }}
              />

              {/* Inner card */}
              <div
                className="relative rounded-[19px] h-full flex flex-col"
                style={{
                  padding: '32px',
                  background: 'var(--color-background)',
                }}
              >
                {/* Icon Circle */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${solution.gradientFrom}25, ${solution.gradientTo}20)`,
                    boxShadow: `0 0 30px ${solution.gradientFrom}20`,
                  }}
                >
                  {solution.emoji}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {solution.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  {solution.description}
                </p>

                {/* Learn More Link */}
                <Link
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-300 group-hover:gap-3"
                  style={{
                    background: `linear-gradient(135deg, ${solution.gradientFrom}, ${solution.gradientTo})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Learn More
                  <span
                    style={{
                      WebkitTextFillColor: 'initial',
                      color: solution.gradientTo,
                    }}
                  >
                    →
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
