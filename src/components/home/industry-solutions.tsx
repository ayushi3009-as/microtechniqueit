'use client';

import { motion } from 'framer-motion';
import { 
  Factory, 
  ShoppingCart, 
  Heart, 
  GraduationCap, 
  Building, 
  Truck, 
  Banknote, 
  Hotel 
} from 'lucide-react';

const industries = [
  {
    name: 'Manufacturing',
    icon: Factory,
    description: 'Smart manufacturing with IoT & automation',
    color: 'from-blue-500 to-indigo-500',
    shadow: 'rgba(59, 130, 246, 0.2)',
  },
  {
    name: 'Retail',
    icon: ShoppingCart,
    description: 'Omnichannel retail & inventory management',
    color: 'from-purple-500 to-pink-500',
    shadow: 'rgba(168, 85, 247, 0.2)',
  },
  {
    name: 'Healthcare',
    icon: Heart,
    description: 'Digital health solutions & patient management',
    color: 'from-rose-500 to-red-500',
    shadow: 'rgba(244, 63, 94, 0.2)',
  },
  {
    name: 'Education',
    icon: GraduationCap,
    description: 'Smart classrooms & learning management',
    color: 'from-amber-500 to-orange-500',
    shadow: 'rgba(245, 158, 11, 0.2)',
  },
  {
    name: 'Real Estate',
    icon: Building,
    description: 'Property management & sales automation',
    color: 'from-emerald-500 to-teal-500',
    shadow: 'rgba(16, 185, 129, 0.2)',
  },
  {
    name: 'Logistics',
    icon: Truck,
    description: 'Supply chain & fleet management',
    color: 'from-cyan-500 to-blue-500',
    shadow: 'rgba(6, 182, 212, 0.2)',
  },
  {
    name: 'Finance',
    icon: Banknote,
    description: 'Fintech solutions & banking software',
    color: 'from-indigo-500 to-violet-500',
    shadow: 'rgba(99, 102, 241, 0.2)',
  },
  {
    name: 'Hospitality',
    icon: Hotel,
    description: 'Hotel & restaurant management systems',
    color: 'from-pink-500 to-rose-500',
    shadow: 'rgba(236, 72, 153, 0.2)',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  },
};

export function IndustrySolutions() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom relative z-10">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="badge mb-4 mx-auto w-fit">Industries</div>
          <h2>
            Industries <span className="text-accent-gradient">We Serve</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Tailored software solutions designed for the specific needs and workflows of your industry.
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
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <motion.div 
                key={ind.name}
                variants={itemVariants as any}
                whileHover={{ scale: 1.03, y: -5 }}
                className="card relative group overflow-hidden cursor-pointer"
                style={{ padding: '32px', '--hover-shadow': ind.shadow } as any}
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" 
                     style={{ backgroundImage: `linear-gradient(to bottom right, var(--color-background), ${ind.shadow})` }} />
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${ind.color} flex items-center justify-center text-foreground mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">
                    {ind.name}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {ind.description}
                  </p>

                  <div className="mt-6 flex items-center text-xs font-semibold uppercase tracking-wider text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Explore Solutions <span className="ml-2">→</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
