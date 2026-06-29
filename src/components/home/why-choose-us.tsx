'use client';

import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Monitor, 
  Headphones, 
  Plug, 
  Building2 
} from 'lucide-react';

const features = [
  {
    title: 'AI Powered',
    icon: Brain,
    description: 'Intelligent automation and smart analytics built into every solution',
  },
  {
    title: 'Cloud Based',
    icon: Cloud,
    description: 'Access your data anywhere, anytime with secure cloud infrastructure',
  },
  {
    title: 'Secure',
    icon: Shield,
    description: 'Enterprise-grade security with encryption and compliance',
  },
  {
    title: 'Fast Deployment',
    icon: Zap,
    description: 'Go live in weeks, not months with our rapid deployment',
  },
  {
    title: 'Multi Platform',
    icon: Monitor,
    description: 'Works seamlessly across web, mobile, and desktop',
  },
  {
    title: '24×7 Support',
    icon: Headphones,
    description: 'Round-the-clock technical support and dedicated account managers',
  },
  {
    title: 'API Integration',
    icon: Plug,
    description: 'Connect with 100+ third-party services and APIs',
  },
  {
    title: 'Enterprise Ready',
    icon: Building2,
    description: 'Scalable architecture designed for growing businesses',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  },
};

export function WhyChooseUs() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="container-custom relative z-10">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="badge mb-4 mx-auto w-fit">Why Us</div>
          <h2>
            Why Choose <span className="text-accent-gradient">Microtechnique IT</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            We don't just write code. We build robust digital ecosystems that drive your business forward.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: '32px' }}
          variants={containerVariants as any}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={feature.title}
                variants={itemVariants as any}
                whileHover={{ y: -8 }}
                className="card card-glow text-center flex flex-col items-center group cursor-default bg-white/[0.02] border-white/5 hover:bg-white/[0.04]"
                style={{ padding: '32px' }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300 relative">
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300 relative z-10" />
                </div>
                
                {/* Text */}
                <h3 className="text-lg font-bold mb-3 text-white/90 group-hover:text-white transition-colors">
                  <span className="text-primary mr-1 opacity-0 group-hover:opacity-100 transition-opacity">✅</span>
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
