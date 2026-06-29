'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Star, Quote } from 'lucide-react';

const tabs = ['Video Reviews', 'Google Reviews', 'Client Photos'];

const videoReviews = [
  { name: 'Riya Patel', company: 'StyleVerse E-Commerce', thumb: 'from-purple-500/20 to-pink-500/20' },
  { name: 'Vikram Singh', company: 'Singh Logistics Pvt. Ltd.', thumb: 'from-blue-500/20 to-cyan-500/20' },
  { name: 'Rajesh Kumar', company: 'MedCare Hospital Group', thumb: 'from-emerald-500/20 to-teal-500/20' },
];

const googleReviews = [
  { name: 'Aarav Sharma', company: 'FinEdge Tech', rating: 5, text: "Microtechnique IT delivered a cloud-native lending platform that processes 10,000+ loan applications daily. Their engineering depth is genuinely world-class." },
  { name: 'Priya Mehta', company: 'Mehta Textiles', rating: 5, text: "We switched to Microtechnique Accounts and the difference has been night and day. GST filing that used to take three days now takes three clicks." },
  { name: 'Karan Desai', company: 'Diamond Star', rating: 4, text: "The diamond industry software handles everything we need. Our inventory accuracy went from 88% to 99.5%, and our reporting time was cut in half." },
  { name: 'Neha Gupta', company: 'EduSmart Academy', rating: 5, text: "The school ERP they built for us completely transformed how we manage admissions, fees, and exams. Highly recommended team." },
];

const clientPhotos = [
  { name: 'R. Patel', initials: 'RP', role: 'CEO', company: 'StyleVerse', quote: "They delivered a growth engine." },
  { name: 'V. Singh', initials: 'VS', role: 'Director', company: 'Singh Logistics', quote: "Fuel costs are down 22%." },
  { name: 'R. Kumar', initials: 'RK', role: 'Head Ops', company: 'MedCare', quote: "Patient wait times decreased by 35%." },
  { name: 'A. Sharma', initials: 'AS', role: 'CTO', company: 'FinEdge', quote: "Processes 10k+ applications daily." },
  { name: 'P. Mehta', initials: 'PM', role: 'Director Fin', company: 'Mehta Textiles', quote: "AI bill scanner saves 15 hours/month." },
  { name: 'K. Desai', initials: 'KD', role: 'Owner', company: 'Diamond Star', quote: "Built by people who understand our business." },
];

export function Testimonials() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="section-padding bg-[#050816] relative overflow-hidden">
      <div className="container-custom relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="badge mb-4 mx-auto w-fit">Testimonials</div>
          <h2>
            What Our <span className="text-accent-gradient">Clients Say</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from the businesses we've helped transform.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab, idx) => (
            <button
              key={tab}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === idx 
                  ? 'bg-primary text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]' 
                  : 'bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="min-h-[400px] relative">
          <AnimatePresence mode="wait">
            
            {/* TAB 0: Video Reviews */}
            {activeTab === 0 && (
              <motion.div
                key="videos"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-3"
                style={{ gap: '24px' }}
              >
                {videoReviews.map((vid, i) => (
                  <div key={i} className="card group overflow-hidden bg-white/[0.02] border-white/10 hover:border-white/20" style={{ padding: '16px' }}>
                    <div className={`relative aspect-video rounded-xl bg-gradient-to-br ${vid.thumb} border border-white/5 flex items-center justify-center mb-4 overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 cursor-pointer`}>
                      <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-primary/90 transition-colors shadow-lg z-10 relative">
                        <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                      </div>
                      {/* Fake Thumbnail image effect */}
                      <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]" />
                    </div>
                    <h3 className="font-semibold text-lg text-white/90">{vid.name}</h3>
                    <p className="text-sm text-muted-foreground">{vid.company}</p>
                  </div>
                ))}
              </motion.div>
            )}

            {/* TAB 1: Google Reviews */}
            {activeTab === 1 && (
              <motion.div
                key="google"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col items-center justify-center mb-10">
                  <div className="flex gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" />)}
                  </div>
                  <div className="text-xl font-bold text-white/90 mb-1">4.9/5 Rating</div>
                  <div className="text-sm text-muted-foreground">Based on 200+ Google Reviews</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '24px' }}>
                  {googleReviews.map((review, i) => (
                    <div key={i} className="card bg-white/[0.02] border-white/10 flex flex-col h-full" style={{ padding: '24px' }}>
                      <div className="flex gap-1 mb-4">
                        {Array.from({length: 5}).map((_, j) => (
                          <Star key={j} className={`w-4 h-4 ${j < review.rating ? 'text-yellow-400' : 'text-white/20'}`} fill={j < review.rating ? "currentColor" : "none"} />
                        ))}
                      </div>
                      <p className="text-white/80 leading-relaxed text-sm mb-6 flex-1 italic">
                        "{review.text}"
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm">
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-semibold text-white/90 text-sm">{review.name}</div>
                          <div className="text-xs text-muted-foreground">{review.company}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* TAB 2: Client Photos */}
            {activeTab === 2 && (
              <motion.div
                key="photos"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                style={{ gap: '24px' }}
              >
                {clientPhotos.map((photo, i) => (
                  <div key={i} className="card bg-white/[0.02] border-white/10 text-center relative overflow-hidden" style={{ padding: '24px' }}>
                    <Quote className="absolute top-4 left-4 w-8 h-8 text-white/5 rotate-180" />
                    
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-blue-600/30 to-purple-600/30 border border-white/10 flex items-center justify-center text-xl font-bold text-white mb-4 shadow-inner">
                      {photo.initials}
                    </div>
                    
                    <p className="text-sm text-white/80 italic mb-4">"{photo.quote}"</p>
                    
                    <div>
                      <div className="font-semibold text-white/90 text-sm">{photo.name}</div>
                      <div className="text-xs text-primary">{photo.role}, {photo.company}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
