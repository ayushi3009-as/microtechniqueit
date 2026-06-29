'use client';

import { motion } from 'framer-motion';

const products = [
  {
    emoji: '📊',
    title: 'Microtechnique Accounts',
    description: 'GST billing, invoicing, inventory & financial reports',
    features: ['GST Ready', 'AI/OCR Scanning', 'Multi-branch'],
    badge: 'Most Popular',
  },
  {
    emoji: '👨‍💼',
    title: 'HRMS & Payroll',
    description: 'Complete HR management with payroll automation',
    features: ['Attendance', 'Leave Mgmt', 'Salary Processing'],
    badge: null,
  },
  {
    emoji: '🏢',
    title: 'ERP Solution',
    description: 'End-to-end enterprise resource planning',
    features: ['Inventory', 'Production', 'Supply Chain'],
    badge: null,
  },
  {
    emoji: '🤝',
    title: 'CRM',
    description: 'Customer relationship & sales pipeline management',
    features: ['Lead Tracking', 'Sales Pipeline', 'Analytics'],
    badge: null,
  },
  {
    emoji: '🏥',
    title: 'Hospital Management',
    description: 'Complete hospital & clinic management system',
    features: ['OPD/IPD', 'Pharmacy', 'Lab Reports'],
    badge: null,
  },
  {
    emoji: '🏫',
    title: 'School ERP',
    description: 'All-in-one school management platform',
    features: ['Admissions', 'Fees', 'Exams'],
    badge: null,
  },
  {
    emoji: '🍽',
    title: 'Restaurant POS',
    description: 'Smart point of sale for restaurants',
    features: ['Table Mgmt', 'KOT', 'Online Orders'],
    badge: null,
  },
  {
    emoji: '🏗',
    title: 'Builder CRM',
    description: 'Real estate & construction project management',
    features: ['Plot Booking', 'Payment Plans', 'Site Tracking'],
    badge: null,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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

export function ProductsShowcase() {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container-custom">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="badge mb-4 mx-auto w-fit">Our Products</div>
          <h2>
            Enterprise{' '}
            <span className="text-accent-gradient">Software Products</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Ready-to-use, scalable products built for Indian businesses across
            every industry.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
          style={{ gap: '32px' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {products.map((product) => (
            <motion.div
              key={product.title}
              variants={cardVariants as any}
              className="card card-glow group relative flex flex-col"
              style={{ padding: '32px' }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* Badge */}
              {product.badge && (
                <span
                  className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(37, 99, 235, 0.25), rgba(0, 229, 255, 0.2))',
                    color: '#00E5FF',
                    border: '1px solid rgba(0, 229, 255, 0.3)',
                  }}
                >
                  {product.badge}
                </span>
              )}

              {/* Emoji Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 shrink-0"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(37, 99, 235, 0.2), rgba(0, 229, 255, 0.15))',
                  boxShadow: '0 0 24px rgba(37, 99, 235, 0.15)',
                }}
              >
                {product.emoji}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {product.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                {product.description}
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap mb-8" style={{ gap: '8px' }}>
                {product.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-[11px] font-semibold tracking-wide px-3 py-1.5 rounded-full"
                    style={{
                      background: 'rgba(255, 255, 255, 0.04)',
                      color: 'var(--color-muted-foreground)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Live Demo Button */}
              <button className="w-full text-[13px] font-bold py-3 mt-auto rounded-xl transition-all duration-300 bg-card/50 border border-border text-foreground group-hover:bg-blue-500/15 group-hover:border-blue-500/40 group-hover:text-blue-400 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.15)]">
                Live Demo
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
