'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const dashboards = [
  {
    name: 'Billing',
    image: '/images/hero/dashboard-billing.png',
    color: 'from-blue-500 to-cyan-400',
    stats: [
      { label: 'Total Revenue', value: '₹4.2M' },
      { label: 'Invoices', value: '1,245' },
      { label: 'Outstanding', value: '₹340K' },
    ],
  },
  {
    name: 'CRM',
    image: '/images/hero/dashboard-crm.png',
    color: 'from-purple-500 to-pink-500',
    stats: [
      { label: 'New Leads', value: '845' },
      { label: 'Active Deals', value: '124' },
      { label: 'Conversion', value: '24%' },
    ],
  },
  {
    name: 'ERP',
    image: '/images/hero/dashboard-erp.png',
    color: 'from-emerald-400 to-cyan-500',
    stats: [
      { label: 'Orders', value: '3,450' },
      { label: 'Production', value: '92%' },
      { label: 'Inventory', value: '₹12M' },
    ],
  },
  {
    name: 'HRMS',
    image: '/images/hero/dashboard-hrms.png',
    color: 'from-orange-400 to-pink-500',
    stats: [
      { label: 'Employees', value: '450' },
      { label: 'Attendance', value: '96%' },
      { label: 'Open Roles', value: '12' },
    ],
  },
];

const expertiseList = [
  'ERP Systems',
  'CRM Solutions',
  'HRMS Platforms',
  'Billing Software',
  'Mobile Apps',
  'AI Automation',
  'Cloud Architecture'
];

export function HeroSection() {
  const [activeDashboard, setActiveDashboard] = useState(0);
  const [activeExpertise, setActiveExpertise] = useState(0);

  // Auto-slide dashboards & expertise
  useEffect(() => {
    const dashInterval = setInterval(() => {
      setActiveDashboard((prev) => (prev + 1) % dashboards.length);
    }, 4000);
    
    const expertiseInterval = setInterval(() => {
      setActiveExpertise((prev) => (prev + 1) % expertiseList.length);
    }, 2500);
    
    return () => {
      clearInterval(dashInterval);
      clearInterval(expertiseInterval);
    };
  }, []);

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-background pt-24 pb-12">
      {/* Background Gradient & Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background opacity-90" />
        
        {/* Animated Particles/Dots Network (CSS based) */}
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-primary"
              style={{
                width: Math.random() * 4 + 2 + 'px',
                height: Math.random() * 4 + 2 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animation: `particle-drift ${Math.random() * 10 + 10}s infinite linear`,
                boxShadow: '0 0 10px rgba(37,99,235,0.8)',
              }}
            />
          ))}
        </div>

        {/* Floating Glass Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[120px] animate-float-slow" />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* LEFT SIDE: Text Content */}
          <motion.div 
            className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
          >
            <motion.div 
              className="badge mb-6 backdrop-blur-md bg-card/50 border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-accent">✦</span> Premium Software Engineering
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Empowering Businesses with <br className="hidden md:block" />
              <span className="text-accent-gradient drop-shadow-sm">AI-Powered Software Solutions</span>
            </motion.h1>

            <motion.div 
              className="flex items-center justify-center lg:justify-start gap-2 mb-10 text-lg text-muted-foreground/80 h-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span>Specializing in</span>
              <div className="relative overflow-hidden h-8 w-48 text-left">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={activeExpertise}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute inset-0 font-semibold text-foreground"
                  >
                    {expertiseList[activeExpertise]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link href="/contact" className="btn-primary w-full sm:w-auto text-base py-3.5 shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                🚀 Book Free Demo
              </Link>
              <Link href="/portfolio" className="btn-secondary w-full sm:w-auto text-base py-3.5 bg-card/50 hover:bg-muted border-border">
                ▶️ Watch Live Demo
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: 3D Laptop Mockup */}
          <motion.div 
            className="w-full lg:w-[45%] hidden md:block perspective-1000 mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative rotate-3d hover:transform hover:rotate-y-[-5deg] hover:rotate-x-[2deg] transition-transform duration-700 w-full max-w-[600px] mx-auto">
              
              {/* Laptop Screen Frame */}
              <div className="laptop-frame relative bg-card p-2 aspect-[16/10] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                
                {/* Screen Content / Dashboard */}
                <div className="relative w-full h-full bg-background rounded overflow-hidden flex flex-col border border-border/50">
                  {/* Fake Top Bar */}
                  <div className="h-6 bg-card/50 flex items-center px-3 border-b border-border/50">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-500/80" />
                      <div className="w-2 h-2 rounded-full bg-amber-500/80" />
                      <div className="w-2 h-2 rounded-full bg-green-500/80" />
                    </div>
                  </div>

                  {/* Dashboard Content Container */}
                  <div className="flex-1 relative overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeDashboard}
                        initial={{ opacity: 0, scale: 0.95, filter: 'blur(4px)' }}
                        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, scale: 1.05, filter: 'blur(4px)' }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        className="absolute inset-0"
                      >
                        {(() => {
                          const dash = dashboards[activeDashboard];
                          return (
                            <Image 
                              src={dash.image}
                              alt={`${dash.name} Dashboard Interface`}
                              fill
                              className="object-cover object-top opacity-90 hover:opacity-100 transition-opacity duration-500"
                              unoptimized
                            />
                          );
                        })()}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Laptop Base */}
              <div className="laptop-base relative z-10 flex justify-center">
                <div className="laptop-notch" />
              </div>

              {/* Base shadow glow */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-primary/20 blur-2xl rounded-full" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
