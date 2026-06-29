'use client';

import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Clock, Activity, Zap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const caseStudies = [
  {
    company: 'MedCare Hospital Group',
    industry: 'Healthcare',
    before: { text: 'Manual patient records, 45 min wait times', icon: Clock },
    after: { text: 'Digital records, 10 min wait times', icon: Zap },
    metrics: [
      { label: 'Efficiency Gain', value: 65, suffix: '%' },
      { label: 'Patient Throughput', value: 3, suffix: 'x' },
    ],
    color: 'from-blue-500 to-cyan-400',
  },
  {
    company: 'StyleVerse E-Commerce',
    industry: 'Retail',
    before: { text: '₹15L monthly revenue, 60% cart abandonment', icon: Activity },
    after: { text: '₹50L monthly revenue, 20% cart abandonment', icon: TrendingUp },
    metrics: [
      { label: 'Revenue Growth', value: 230, suffix: '%' },
      { label: 'Better Retention', value: 40, suffix: '%' },
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    company: 'Diamond Star Exports',
    industry: 'Manufacturing',
    before: { text: '88% inventory accuracy, manual tracking', icon: Clock },
    after: { text: '99.5% accuracy, automated tracking', icon: Zap },
    metrics: [
      { label: 'Time Saved', value: 50, suffix: '%' },
      { label: 'Accuracy Improvement', value: 11.5, suffix: '%' },
    ],
    color: 'from-emerald-400 to-cyan-500',
  },
];

// Reusable Counter component
function AnimatedCounter({ value, suffix }: { value: number, suffix: string }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.5 }
    );
    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // easeOutExpo
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(value * easeOut);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [inView, value]);

  // Format to 1 decimal if needed
  const displayValue = value % 1 !== 0 ? count.toFixed(1) : Math.round(count);

  return (
    <span ref={nodeRef} className="font-bold text-2xl text-foreground">
      {displayValue}{suffix}
    </span>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export function CaseStudiesPreview() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container-custom relative z-10">
        
        {/* Header */}
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="max-w-2xl">
            <div className="badge mb-4 w-fit">Success Stories</div>
            <h2>
              Client <span className="text-accent-gradient">Success Stories</span>
            </h2>
            <p className="text-muted-foreground mt-4">
              Real results for real businesses. See how our solutions drive measurable impact.
            </p>
          </div>
          <button className="btn-secondary whitespace-nowrap hidden md:inline-flex">
            View All Case Studies
          </button>
        </motion.div>

        {/* Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3"
          style={{ gap: '32px' }}
          variants={containerVariants as any}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {caseStudies.map((study, idx) => (
            <motion.div 
              key={idx}
              variants={cardVariants as any}
              whileHover={{ y: -8 }}
              className="card group flex flex-col h-full bg-card border-border hover:border-border transition-all duration-300 relative overflow-hidden"
            >
              {/* Top Gradient Bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${study.color}`} />
              
              <div className="flex flex-col h-full flex-1" style={{ padding: '32px' }}>
                {/* Header */}
                <div className="mb-8">
                  <span className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2 block">
                    {study.industry}
                  </span>
                  <h3 className="text-2xl font-bold text-foreground">
                    {study.company}
                  </h3>
                </div>

                {/* Before / After */}
                <div className="space-y-4 mb-8 flex-1">
                  <div className="bg-card/50 border border-border/50 rounded-xl p-4 flex gap-3 items-start">
                    <study.before.icon className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-muted-foreground uppercase font-semibold mb-1 tracking-wider">Before</div>
                      <div className="text-sm text-foreground/70 leading-relaxed">{study.before.text}</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center -my-2 relative z-10">
                    <div className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-primary rotate-90" />
                    </div>
                  </div>

                  <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex gap-3 items-start">
                    <study.after.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-primary/70 uppercase font-semibold mb-1 tracking-wider">After</div>
                      <div className="text-sm text-foreground leading-relaxed">{study.after.text}</div>
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {study.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="bg-card/50 rounded-lg p-3 border border-border/50">
                      <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                      <div className="text-xs text-muted-foreground mt-1">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Footer Link */}
                <div className="mt-auto pt-4 border-t border-border flex items-center text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                  Read Full Story <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              
              {/* Hover Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-8 text-center md:hidden">
          <button className="btn-secondary w-full">
            View All Case Studies
          </button>
        </div>

      </div>
    </section>
  );
}
