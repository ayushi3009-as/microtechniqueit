'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export function ContactCta() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container-custom">
        <motion.div 
          className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#0a0f2c] to-[#050816] border border-white/10 p-10 md:p-16 text-center shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Background Effects */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px]" />
            
            {/* Grid Pattern overlay */}
            <div 
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 backdrop-blur-sm">
              <Sparkles className="w-8 h-8 text-accent" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Accelerate Your <br className="hidden md:block" />
              <span className="text-accent-gradient">Digital Transformation?</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
              Join 5000+ businesses who have streamlined their operations, increased revenue, and reduced costs with our premium software solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/contact" className="btn-primary text-base py-3.5 px-8 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] group">
                Schedule a Consultation
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="tel:+916355997080" className="btn-secondary text-base py-3.5 px-8 bg-white/5 border-white/10 hover:bg-white/10">
                Call +91 6355997080
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
