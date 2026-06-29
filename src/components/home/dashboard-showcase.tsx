'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = [
  { id: 'billing', label: 'Billing Dashboard', color: 'from-blue-500 to-cyan-400' },
  { id: 'crm', label: 'CRM Dashboard', color: 'from-purple-500 to-pink-500' },
  { id: 'erp', label: 'ERP Dashboard', color: 'from-emerald-400 to-cyan-500' },
  { id: 'hr', label: 'HR Dashboard', color: 'from-orange-400 to-pink-500' },
];

export function DashboardShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <section className="section-padding bg-section-alt relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="badge mb-4 mx-auto w-fit">Live Previews</div>
          <h2>
            Dashboard <span className="text-accent-gradient">Showcase</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Experience our intuitive, data-rich interfaces designed for maximum productivity.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab, idx) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(idx)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === idx 
                  ? 'bg-primary text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]' 
                  : 'bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Laptop Mockup */}
        <motion.div 
          className="max-w-[900px] mx-auto perspective-1000"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="rotate-3d hover:transform hover:rotate-y-[0deg] hover:rotate-x-[0deg] transition-transform duration-700 ease-out">
            
            <div className="laptop-frame bg-[#0a0f2c] p-2 aspect-[16/10] sm:aspect-[16/9]">
              <div className="relative w-full h-full bg-[#050816] rounded overflow-hidden border border-white/10 flex">
                
                {/* Fake Sidebar */}
                <div className="hidden sm:flex flex-col w-48 bg-white/5 border-r border-white/10 p-4">
                  <div className="w-24 h-6 bg-white/10 rounded mb-8" />
                  <div className="space-y-3">
                    {Array.from({length: 6}).map((_, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded bg-white/10" />
                        <div className={`h-3 rounded bg-white/10 ${i === 0 ? 'w-20 bg-primary/40' : 'w-16'}`} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col relative overflow-hidden">
                  {/* Fake Topbar */}
                  <div className="h-14 border-b border-white/10 flex items-center justify-between px-6 bg-white/[0.02]">
                    <div className="w-48 h-6 bg-white/5 rounded" />
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-white/10" />
                      <div className="w-8 h-8 rounded-full bg-white/10" />
                    </div>
                  </div>

                  {/* Dashboard Views */}
                  <div className="flex-1 relative p-6">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 p-6 flex flex-col gap-6"
                      >
                        {/* Header Row */}
                        <div className="flex justify-between items-end">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">{tabs[activeTab].label}</h3>
                            <p className="text-sm text-white/50">Overview and key metrics</p>
                          </div>
                          <div className={`px-4 py-2 rounded bg-gradient-to-r ${tabs[activeTab].color} text-white text-sm font-medium`}>
                            Generate Report
                          </div>
                        </div>

                        {/* Stats Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          {Array.from({length: 3}).map((_, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                              <div className="w-8 h-8 rounded bg-white/10 mb-3" />
                              <div className="h-3 w-16 bg-white/20 rounded mb-2" />
                              <div className="h-6 w-24 bg-white/40 rounded" />
                            </div>
                          ))}
                        </div>

                        {/* Charts / Main Area Row */}
                        <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
                          {/* Main Chart */}
                          <div className="sm:col-span-2 bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col">
                            <div className="h-4 w-32 bg-white/20 rounded mb-6" />
                            <div className="flex-1 flex items-end gap-2">
                              {Array.from({length: 12}).map((_, i) => (
                                <div 
                                  key={i} 
                                  className={`flex-1 rounded-t bg-gradient-to-t ${tabs[activeTab].color} opacity-80`}
                                  style={{ height: `${Math.max(20, Math.random() * 100)}%` }}
                                />
                              ))}
                            </div>
                          </div>
                          
                          {/* Side Widget */}
                          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                            <div className="h-4 w-24 bg-white/20 rounded mb-6" />
                            <div className="space-y-4">
                              {Array.from({length: 4}).map((_, i) => (
                                <div key={i} className="flex items-center gap-3">
                                  <div className="w-10 h-10 rounded-full bg-white/10" />
                                  <div className="flex-1">
                                    <div className="h-3 w-full bg-white/20 rounded mb-1" />
                                    <div className="h-2 w-1/2 bg-white/10 rounded" />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                      </motion.div>
                    </AnimatePresence>
                  </div>

                </div>
              </div>
            </div>

            <div className="laptop-base relative z-10 flex justify-center">
              <div className="laptop-notch" />
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
