'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { industries } from '@/data/industries';
import Link from 'next/link';
import { 
  Heart, Landmark, GraduationCap, ShoppingBag, Truck, 
  Store, Factory, Building, ArrowRight, CheckCircle2 
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Heart,
  Landmark,
  GraduationCap,
  ShoppingBag,
  Truck,
  Store,
  Factory,
  Building
};

export default function IndustriesClient() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const customStyles = `
    .ind-container {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
    .ind-hero {
      display: flex;
      flex-direction: column;
      padding: 120px 0 80px;
      background: #0b0f19;
      color: #fff;
      overflow: hidden;
    }
    .ind-hero-split {
      display: flex;
      flex-direction: column;
      gap: 40px;
    }
    @media (min-width: 992px) {
      .ind-hero-split {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }
      .ind-hero-text, .ind-hero-visual {
        flex: 1;
      }
    }
    .ind-title {
      font-size: 3rem;
      font-weight: 800;
      line-height: 1.2;
      margin: 0;
      background: linear-gradient(90deg, #60a5fa, #a78bfa);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .ind-subtitle {
      font-size: 1.125rem;
      color: #94a3b8;
      line-height: 1.6;
      margin: 0;
    }
    .ind-icon-cloud {
      position: relative;
      width: 100%;
      min-height: 400px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .ind-icon-float {
      position: absolute;
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
    }
    
    .ind-bento {
      padding: 100px 0;
      background: #f8fafc;
    }
    .ind-bento-grid {
      display: grid;
      gap: 24px;
      grid-template-columns: 1fr;
    }
    @media (min-width: 768px) {
      .ind-bento-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (min-width: 1024px) {
      .ind-bento-grid {
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: auto auto auto;
      }
      .bento-large {
        grid-column: span 2;
        grid-row: span 2;
      }
      .bento-medium {
        grid-column: span 2;
        grid-row: span 1;
      }
      .bento-small {
        grid-column: span 1;
        grid-row: span 1;
      }
    }
    .bento-card {
      background: #ffffff;
      border-radius: 24px;
      padding: 32px;
      border: 1px solid #e2e8f0;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      position: relative;
      overflow: hidden;
      text-decoration: none;
      color: inherit;
    }
    .bento-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
      border-color: #3b82f6;
    }
    .bento-card h3 {
      font-size: 1.5rem;
      margin: 0 0 12px 0;
      color: #0f172a;
      font-weight: 700;
    }
    .bento-card p {
      font-size: 0.95rem;
      color: #64748b;
      margin: 0 0 24px 0;
      line-height: 1.5;
    }
    .bento-icon-wrapper {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 24px;
      background: #eff6ff;
      color: #3b82f6;
    }
    
    .ind-timeline {
      padding: 100px 0;
      background: #ffffff;
    }
    .timeline-wrapper {
      display: flex;
      flex-direction: column;
      gap: 32px;
      margin-top: 60px;
    }
    @media (min-width: 768px) {
      .timeline-wrapper {
        flex-direction: row;
        align-items: flex-start;
      }
    }
    .timeline-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      position: relative;
    }
    .timeline-dot {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: #eff6ff;
      color: #3b82f6;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 1.25rem;
      margin-bottom: 24px;
      position: relative;
      z-index: 2;
      border: 2px solid #bfdbfe;
    }
    .timeline-line {
      display: none;
    }
    @media (min-width: 768px) {
      .timeline-line {
        display: block;
        position: absolute;
        top: 24px;
        left: 48px;
        right: -32px;
        height: 2px;
        background: #e2e8f0;
        z-index: 1;
      }
      .timeline-item:last-child .timeline-line {
        display: none;
      }
    }
    .timeline-title {
      font-size: 1.25rem;
      font-weight: 700;
      margin: 0 0 12px 0;
      color: #0f172a;
    }
    .timeline-desc {
      font-size: 0.95rem;
      color: #64748b;
      margin: 0;
      line-height: 1.6;
    }
    
    .ind-stats {
      padding: 80px 0;
      background: #0b0f19;
      color: #fff;
    }
    .stats-grid {
      display: grid;
      gap: 24px;
      grid-template-columns: 1fr;
    }
    @media (min-width: 600px) {
      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (min-width: 1024px) {
      .stats-grid {
        grid-template-columns: repeat(4, 1fr);
      }
    }
    .stat-card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 20px;
      padding: 40px 24px;
      text-align: center;
      transition: transform 0.3s ease;
    }
    .stat-card:hover {
      transform: translateY(-5px);
      background: rgba(255, 255, 255, 0.05);
    }
    .stat-value {
      font-size: 3.5rem;
      font-weight: 800;
      margin: 0 0 12px 0;
      background: linear-gradient(90deg, #60a5fa, #a78bfa);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      line-height: 1;
    }
    .stat-label {
      font-size: 1.1rem;
      color: #94a3b8;
      margin: 0;
      font-weight: 500;
    }
    
    .ind-cta {
      padding: 120px 0;
      background: #f8fafc;
      text-align: center;
    }
    .cta-box {
      background: linear-gradient(135deg, #1e3a8a, #3b82f6);
      border-radius: 32px;
      padding: 80px 40px;
      color: #fff;
      position: relative;
      overflow: hidden;
      box-shadow: 0 25px 50px -12px rgba(30, 58, 138, 0.25);
    }
    .cta-title {
      font-size: 3rem;
      font-weight: 800;
      margin: 0 0 20px 0;
      line-height: 1.2;
    }
    .cta-desc {
      font-size: 1.25rem;
      color: #e0e7ff;
      margin: 0 auto 40px auto;
      max-width: 700px;
      line-height: 1.6;
    }
    .cta-btn {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      background: #ffffff;
      color: #1e3a8a;
      padding: 18px 40px;
      border-radius: 99px;
      font-weight: 700;
      font-size: 1.1rem;
      text-decoration: none;
      transition: all 0.3s ease;
    }
    .cta-btn:hover {
      transform: scale(1.05);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    }
  `;

  const bentoGrid = industries.slice(0, 7);
  const getBentoClass = (index: number) => {
    if (index === 0) return 'bento-large';
    if (index === 1 || index === 2) return 'bento-medium';
    return 'bento-small';
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      
      {/* Hero Section */}
      <section className="ind-hero">
        <div className="ind-container">
          <div className="ind-hero-split">
            <div className="ind-hero-text">
              <motion.h1 
                className="ind-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Tailored Solutions for Every Industry
              </motion.h1>
              <motion.p 
                className="ind-subtitle" style={{ marginTop: '24px' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                We build specialized software architectures to address the unique 
                challenges, regulatory requirements, and strategic goals of your sector.
              </motion.p>
            </div>
            <div className="ind-hero-visual">
              <div className="ind-icon-cloud">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <motion.img 
                  src="/industry-mockup.png" 
                  alt="Industry Solutions" 
                  style={{ width: '100%', maxWidth: '420px', borderRadius: '24px', position: 'relative', zIndex: 10, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', border: '1px solid rgba(255,255,255,0.1)' }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <motion.img 
                  src="/abstract-graphic.png" 
                  alt="Abstract background" 
                  style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '130%', opacity: 0.2, zIndex: 1 }}
                />
                
                {[Heart, Landmark, ShoppingBag].map((Icon, i) => {
                  const positions = [
                    { top: '5%', left: '5%' },
                    { bottom: '15%', right: '5%' },
                    { top: '15%', right: '10%' }
                  ];
                  const sizes = [64, 80, 56];
                  return (
                    <motion.div
                      key={i}
                      className="ind-icon-float"
                      style={{ ...positions[i], width: sizes[i], height: sizes[i], zIndex: 5 }}
                      animate={{ y: [0, -20, 0] }}
                      transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Icon size={sizes[i] * 0.45} />
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Showcase */}
      <section className="ind-bento">
        <div className="ind-container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <motion.h2 
              style={{ fontSize: '2.5rem', fontWeight: 800, margin: '0 0 16px 0', color: '#0f172a' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Industry Showcase
            </motion.h2>
            <motion.p 
              style={{ fontSize: '1.125rem', color: '#64748b', maxWidth: '650px', margin: '0 auto', lineHeight: 1.6 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Explore our specialized technology offerings tailored to meet the exacting 
              standards and operational workflows of various global industries.
            </motion.p>
          </div>
          
          <div className="ind-bento-grid">
            {bentoGrid.map((industry, index) => {
              const Icon = iconMap[industry.icon] || CheckCircle2;
              const bClass = getBentoClass(index);
              
              return (
                <Link href={`/industries/${industry.slug}`} key={industry.slug} className={`bento-card ${bClass}`}>
                  <div className="bento-icon-wrapper">
                    <Icon size={24} />
                  </div>
                  <h3>{industry.title}</h3>
                  <p>{industry.description}</p>
                  
                  {index === 0 && (
                    <div style={{ marginTop: 'auto', paddingTop: '24px', borderTop: '1px solid #e2e8f0' }}>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {industry.solutions.slice(0, 3).map((sol, i) => (
                          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '0.95rem', color: '#475569', lineHeight: 1.5 }}>
                            <CheckCircle2 size={18} color="#3b82f6" style={{ marginTop: '2px', flexShrink: 0 }} />
                            {sol}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#3b82f6', fontWeight: 600, marginTop: index === 0 ? '24px' : 'auto' }}>
                    View Solutions <ArrowRight size={18} />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="ind-timeline">
        <div className="ind-container">
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, margin: '0 0 16px 0', color: '#0f172a' }}>Our Integration Process</h2>
            <p style={{ fontSize: '1.125rem', color: '#64748b', maxWidth: '650px', margin: '0 auto' }}>
              How we deliver high-impact industry solutions from concept to deployment.
            </p>
          </div>
          <div className="timeline-wrapper">
            {[
              { title: 'Discovery & Analysis', desc: 'Deep dive into your specific challenges, workflows, and compliance needs.' },
              { title: 'Architecture & Design', desc: 'Crafting robust, scalable blueprints tailored to your operational models.' },
              { title: 'Agile Development', desc: 'Iterative building with regular feedback loops and strict quality control.' },
              { title: 'Deployment & Support', desc: 'Seamless integration, team training, and 24/7 ongoing maintenance.' },
            ].map((step, i) => (
              <motion.div 
                key={i} 
                className="timeline-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="timeline-dot">{i + 1}</div>
                <div className="timeline-line"></div>
                <h4 className="timeline-title">{step.title}</h4>
                <p className="timeline-desc">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="ind-stats">
        <div className="ind-container">
          <div className="stats-grid">
            {[
              { value: '200+', label: 'Projects Delivered' },
              { value: '15+', label: 'Industries Served' },
              { value: '98%', label: 'Client Retention' },
              { value: '50M+', label: 'Lines of Code' },
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                className="stat-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="ind-cta">
        <div className="ind-container">
          <motion.div 
            className="cta-box"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/abstract-graphic.png" 
              alt="Abstract" 
              style={{ position: 'absolute', top: '-20%', left: '-10%', width: '120%', height: '140%', objectFit: 'cover', opacity: 0.1, zIndex: 1 }}
            />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h2 className="cta-title">Ready to transform your industry?</h2>
              <p className="cta-desc">
                Partner with us to build custom software that drives innovation, 
                ensures compliance, and accelerates your business growth.
              </p>
              <Link href="/contact" className="cta-btn">
                Start Your Project <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
