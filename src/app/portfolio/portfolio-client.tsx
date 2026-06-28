'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioItems } from '@/data/portfolio';

export default function PortfolioClient() {
  const [activeIndustry, setActiveIndustry] = useState<string>('All');

  const industries = useMemo(() => {
    const inds = new Set(portfolioItems.map(item => item.industry));
    return ['All', ...Array.from(inds)];
  }, []);

  const filteredItems = useMemo(() => {
    if (activeIndustry === 'All') return portfolioItems;
    return portfolioItems.filter(item => item.industry === activeIndustry);
  }, [activeIndustry]);

  return (
    <div className="portfolio-wrapper" style={{ backgroundColor: '#ffffff', color: '#0f172a', minHeight: '100vh', fontFamily: '"Inter", sans-serif' }}>
      <style dangerouslySetInnerHTML={{__html: `
        .portfolio-wrapper * { box-sizing: border-box; }
        
        .portfolio-hero { padding: 120px 20px 80px; }
        .split-hero { display: flex; flex-direction: column; gap: 40px; }
        @media (min-width: 992px) {
          .split-hero { flex-direction: row; align-items: center; justify-content: space-between; }
          .hero-text { flex: 1.2; padding-right: 40px; }
          .hero-visual { flex: 0.8; }
        }
        
        .filter-bar-container { padding: 0 20px; margin-bottom: 50px; }
        .filter-bar { display: flex; gap: 12px; overflow-x: auto; padding-bottom: 12px; }
        .filter-bar::-webkit-scrollbar { height: 4px; }
        .filter-bar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 4px; }
        
        .editorial-grid { display: grid; gap: 24px; grid-template-columns: 1fr; padding: 0 20px 80px; }
        @media (min-width: 768px) {
          .editorial-grid { grid-template-columns: repeat(2, 1fr); gap: 32px; }
          .card-full { grid-column: 1 / -1; }
        }
        @media (min-width: 1200px) {
          .editorial-grid { grid-template-columns: repeat(3, 1fr); gap: 40px; }
          .card-landscape { grid-column: span 2; }
          .card-portrait { grid-column: span 1; }
          .card-full { grid-column: 1 / -1; }
        }

        .project-card { 
          background: #ffffff; 
          border: 1px solid rgba(255,255,255,0.08); 
          border-radius: 24px; 
          overflow: hidden; 
          display: flex; 
          flex-direction: column;
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease, border-color 0.4s ease;
        }
        .project-card:hover { 
          transform: translateY(-8px); 
          box-shadow: 0 20px 40px rgba(0,0,0,0.6); 
          border-color: rgba(138,43,226,0.4); 
        }

        .card-img-container { position: relative; width: 100%; overflow: hidden; }
        .card-portrait .card-img-container { aspect-ratio: 4/5; }
        .card-landscape .card-img-container { aspect-ratio: 16/9; }
        .card-full .card-img-container { aspect-ratio: 21/9; }
        
        @media (max-width: 767px) {
          .card-full .card-img-container { aspect-ratio: 16/9; }
        }
        
        .project-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.8s ease; }
        .project-card:hover .project-img { transform: scale(1.08); }

        .card-content { padding: 32px; flex: 1; display: flex; flex-direction: column; }
        .card-full .card-content { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; }
        @media (max-width: 991px) {
          .card-full .card-content { grid-template-columns: 1fr; gap: 24px; }
        }

        .cta-section { padding: 0 20px 80px; }
        .cta-block { 
          padding: 80px 40px; 
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a24 100%); 
          border-radius: 32px; 
          text-align: center;
          border: 1px solid rgba(255,255,255,0.1);
          position: relative;
          overflow: hidden;
          box-shadow: inset 0 0 100px rgba(0,0,0,0.5);
        }
        .cta-btn {
          display: inline-block;
          padding: 18px 40px;
          background: #fff;
          color: #000;
          text-decoration: none;
          border-radius: 40px;
          font-weight: 700;
          font-size: 16px;
          margin-top: 40px;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }
        .cta-btn:hover { 
          transform: translateY(-2px); 
          box-shadow: 0 10px 20px rgba(255,255,255,0.2); 
          background: #000;
          color: #fff;
          border-color: #fff;
        }
      `}} />
      
      {/* Split Hero */}
      <section className="portfolio-hero">
        <div className="split-hero" style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="hero-text">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              style={{ display: 'inline-block', padding: '8px 16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '30px', fontSize: '13px', fontWeight: '600', marginBottom: '24px', letterSpacing: '1px', textTransform: 'uppercase' }}
            >
              Our Portfolio
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              style={{ fontSize: 'clamp(44px, 6vw, 84px)', lineHeight: '1.05', margin: '0 0 24px', fontWeight: '800', letterSpacing: '-0.03em' }}
            >
              Digital <span style={{ background: 'linear-gradient(90deg, #8A2BE2, #4169E1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Excellence</span> Delivered.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.6', maxWidth: '540px', marginBottom: '32px' }}
            >
              We craft high-performance platforms that drive tangible growth. Explore our selected case studies where complex engineering challenges meet elegant storytelling and design.
            </motion.p>
          </div>
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{ position: 'relative', borderRadius: '32px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
          >
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(138,43,226,0.2), rgba(65,105,225,0.2))', mixBlendMode: 'overlay', zIndex: 1 }}></div>
            <img src="/abstract-graphic.png" alt="Abstract Innovation" style={{ width: '100%', height: 'auto', objectFit: 'contain', display: 'block', borderRadius: '32px' }} />
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div className="filter-bar-container">
          <div className="filter-bar">
            {industries.map(industry => (
              <button
                key={industry}
                onClick={() => setActiveIndustry(industry)}
                style={{
                  background: activeIndustry === industry ? '#ffffff' : 'rgba(255,255,255,0.03)',
                  color: activeIndustry === industry ? '#000000' : '#ffffff',
                  border: '1px solid rgba(255,255,255,0.1)',
                  padding: '12px 28px',
                  borderRadius: '40px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '14px',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  whiteSpace: 'nowrap'
                }}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Grid */}
      <section style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <motion.div layout className="editorial-grid">
          <AnimatePresence>
            {filteredItems.map((item, index) => {
              let cardClass = 'card-portrait';
              if (index % 6 === 0 || index % 6 === 5) cardClass = 'card-full';
              else if (index % 6 === 1 || index % 6 === 4) cardClass = 'card-landscape';

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, type: 'spring', bounce: 0.2 }}
                  key={item.id}
                  className={`project-card ${cardClass}`}
                >
                  <div className="card-img-container">
                    <img src={item.image} alt={item.title} className="project-img" />
                    <div style={{ position: 'absolute', top: '24px', left: '24px', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(12px)', padding: '8px 16px', borderRadius: '30px', fontSize: '13px', fontWeight: '600', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }}>
                      {item.industry}
                    </div>
                  </div>
                  <div className="card-content">
                    {cardClass === 'card-full' && (
                      <>
                        <div>
                          <h2 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '20px', lineHeight: '1.2' }}>{item.title}</h2>
                          <p style={{ color: '#64748b', lineHeight: '1.7', marginBottom: '32px', fontSize: '16px' }}>{item.description}</p>
                          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                            {item.technologies.slice(0,5).map(tech => (
                              <span key={tech} style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', fontSize: '13px', color: '#334155', fontWeight: '600' }}>{tech}</span>
                            ))}
                          </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                          <div>
                            <h3 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#8A2BE2', marginBottom: '10px', fontWeight: '700' }}>The Challenge</h3>
                            <p style={{ fontSize: '15px', color: '#ccc', lineHeight: '1.7' }}>{item.challenge}</p>
                          </div>
                          <div>
                            <h3 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#4169E1', marginBottom: '10px', fontWeight: '700' }}>The Solution</h3>
                            <p style={{ fontSize: '15px', color: '#ccc', lineHeight: '1.7' }}>{item.solution}</p>
                          </div>
                          <div>
                             <h3 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#20B2AA', marginBottom: '16px', fontWeight: '700' }}>The Results</h3>
                             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                               {item.results.slice(0,2).map(res => (
                                 <div key={res.metric} style={{ background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                   <div style={{ fontSize: '28px', fontWeight: '800', color: '#0f172a', marginBottom: '6px' }}>{res.value}</div>
                                   <div style={{ fontSize: '13px', color: '#888', fontWeight: '600' }}>{res.metric}</div>
                                 </div>
                               ))}
                             </div>
                          </div>
                        </div>
                      </>
                    )}

                    {cardClass === 'card-landscape' && (
                      <>
                        <h2 style={{ fontSize: '26px', fontWeight: '800', marginBottom: '16px', lineHeight: '1.3' }}>{item.title}</h2>
                        <p style={{ color: '#64748b', fontSize: '15px', lineHeight: '1.6', marginBottom: '28px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{item.description}</p>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', flex: 1 }}>
                          <div>
                            <h3 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: '#8A2BE2', marginBottom: '8px', fontWeight: '700' }}>Challenge</h3>
                            <p style={{ fontSize: '14px', color: '#bbb', lineHeight: '1.6', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{item.challenge}</p>
                          </div>
                          <div>
                            <h3 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: '#4169E1', marginBottom: '8px', fontWeight: '700' }}>Solution</h3>
                            <p style={{ fontSize: '14px', color: '#bbb', lineHeight: '1.6', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{item.solution}</p>
                          </div>
                        </div>
                        
                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '28px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                          <div style={{ fontSize: '13px', color: '#888', fontWeight: '700', letterSpacing: '1px' }}>KEY RESULT</div>
                          <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                            <span style={{ fontSize: '26px', fontWeight: '800', color: '#0f172a' }}>{item.results[0].value}</span>
                            <span style={{ fontSize: '14px', color: '#20B2AA', fontWeight: '600' }}>{item.results[0].metric}</span>
                          </div>
                        </div>
                      </>
                    )}

                    {cardClass === 'card-portrait' && (
                      <>
                        <h2 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '16px', lineHeight: '1.3' }}>{item.title}</h2>
                        <div style={{ flex: 1 }}>
                          <p style={{ color: '#64748b', fontSize: '15px', lineHeight: '1.6', marginBottom: '24px', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{item.description}</p>
                        </div>
                        <div style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.02), rgba(255,255,255,0.04))', padding: '24px', borderRadius: '20px', marginTop: 'auto', border: '1px solid rgba(255,255,255,0.03)' }}>
                          <h3 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#4169E1', marginBottom: '10px', fontWeight: '700' }}>Result Delivered</h3>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <span style={{ fontSize: '32px', fontWeight: '800', color: '#0f172a', lineHeight: '1' }}>{item.results[0].value}</span>
                            <span style={{ fontSize: '14px', color: '#888', fontWeight: '600' }}>{item.results[0].metric}</span>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Premium CTA */}
      <section className="cta-section" style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div className="cta-block">
          <div style={{ position: 'absolute', top: '-200px', left: '-200px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(138,43,226,0.2) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(50px)' }}></div>
          <div style={{ position: 'absolute', bottom: '-200px', right: '-200px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(65,105,225,0.2) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(50px)' }}></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: '800', marginBottom: '20px', position: 'relative', zIndex: 1, letterSpacing: '-0.02em' }}>Ready to Transform Your Business?</h2>
            <p style={{ fontSize: '20px', color: '#64748b', maxWidth: '640px', margin: '0 auto', position: 'relative', zIndex: 1, lineHeight: '1.6' }}>Let's build a solution tailored to your unique challenges. Our engineering team is ready to help you scale.</p>
            <a href="/contact" className="cta-btn" style={{ position: 'relative', zIndex: 1 }}>Start Your Project</a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
