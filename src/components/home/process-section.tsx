'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  {
    icon: '🔍',
    title: 'Discover',
    description: 'Understanding your business needs, goals, and challenges',
  },
  {
    icon: '📋',
    title: 'Planning',
    description: 'Creating detailed roadmap, architecture, and project plan',
  },
  {
    icon: '🎨',
    title: 'Design',
    description: 'UI/UX design with interactive prototypes and user testing',
  },
  {
    icon: '💻',
    title: 'Development',
    description: 'Agile development with regular sprints and demos',
  },
  {
    icon: '🧪',
    title: 'Testing',
    description: 'Comprehensive QA with automated and manual testing',
  },
  {
    icon: '🚀',
    title: 'Deployment',
    description: 'Seamless deployment with CI/CD and monitoring',
  },
  {
    icon: '🛡',
    title: 'Support',
    description: 'Ongoing maintenance, updates, and 24/7 support',
  },
];

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section className="section-padding bg-section-alt relative overflow-hidden">
      <div className="container-custom relative z-10">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="badge mb-4 mx-auto w-fit">Our Process</div>
          <h2>
            Development <span className="text-accent-gradient">Process</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A proven, agile methodology that ensures your project is delivered on time, within budget, and above expectations.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          
          {/* Vertical Line Background */}
          <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 md:-translate-x-1/2" />
          
          {/* Animated Vertical Line */}
          <motion.div 
            className="absolute left-[24px] md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-primary to-accent md:-translate-x-1/2 origin-top"
            style={{ height: lineHeight }}
          />

          {/* Steps */}
          <div className="space-y-12 md:space-y-24 relative">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className={`flex flex-col md:flex-row items-start md:items-center relative z-10 ${isEven ? 'md:flex-row-reverse' : ''}`}
                  style={{ gap: '48px' }}
                >
                  
                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-1/2" />

                  {/* Dot/Icon on Timeline */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-[#050816] border-[3px] border-primary shadow-[0_0_20px_rgba(37,99,235,0.4)] z-20">
                    <span className="text-lg">{step.icon}</span>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className={`glass rounded-2xl relative group hover:bg-white/[0.08] transition-colors border border-white/10 hover:border-primary/30 flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`} style={{ padding: '24px', gap: '24px' }}>
                      
                      {/* Step Number */}
                      <div className="text-6xl font-black text-white/10 shrink-0 select-none pointer-events-none">
                        0{idx + 1}
                      </div>
                      
                      {/* Text Content */}
                      <div className="flex-1">
                        <h3 className={`text-xl font-bold text-white mb-2 relative z-10 ${isEven ? 'text-right' : 'text-left'}`}>
                          {step.title}
                        </h3>
                        <p className={`text-muted-foreground text-sm leading-relaxed relative z-10 ${isEven ? 'text-right' : 'text-left'}`}>
                          {step.description}
                        </p>
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
