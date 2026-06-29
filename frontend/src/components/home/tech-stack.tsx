'use client';

import { motion } from 'framer-motion';

const technologies = [
  { name: 'React', icon: '⚛️', delay: 0 },
  { name: 'Next.js', icon: '▲', delay: 0.2 },
  { name: 'Flutter', icon: '🦋', delay: 0.4 },
  { name: 'Node.js', icon: '🟢', delay: 0.1 },
  { name: 'Python', icon: '🐍', delay: 0.3 },
  { name: 'AI/LLM', icon: '🧠', delay: 0.5 },
  { name: 'AWS', icon: '☁️', delay: 0.2 },
  { name: 'Azure', icon: '🔷', delay: 0.4 },
  { name: 'Docker', icon: '🐳', delay: 0.1 },
  { name: 'Kubernetes', icon: '☸️', delay: 0.3 },
];

export function TechStack() {
  return (
    <section className="section-padding bg-section-alt relative overflow-hidden">
      <div className="container-custom relative z-10">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="badge mb-4 mx-auto w-fit">Technology</div>
          <h2>
            Technology <span className="text-accent-gradient">Stack</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            We leverage modern, scalable technologies to build robust solutions that stand the test of time.
          </p>
        </motion.div>

        {/* Floating Tech Pills */}
        <motion.div 
          className="flex flex-wrap justify-center max-w-4xl mx-auto mb-16"
          style={{ gap: '16px' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {technologies.map((tech) => (
            <div 
              key={tech.name}
              className="relative group"
              style={{
                animation: `float-delayed 6s ease-in-out infinite`,
                animationDelay: `${tech.delay}s`
              }}
            >
              <div className="glass rounded-full flex items-center bg-white/[0.03] border-border hover:border-primary/50 transition-colors duration-300 cursor-default hover:bg-white/[0.08] group-hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]" style={{ padding: '12px 24px', gap: '12px' }}>
                <span className="text-xl group-hover:scale-110 transition-transform">{tech.icon}</span>
                <span className="font-medium text-foreground group-hover:text-foreground transition-colors">{tech.name}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Categories */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center"
          style={{ gap: '32px' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ delay: 0.4 }}
        >
          {['Frontend & Mobile', 'Backend & AI', 'Cloud & DevOps'].map((cat) => (
            <div key={cat} className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent" />
              {cat}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
