'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { products } from '@/data/products';
import { ArrowRight, CheckCircle2, ChevronRight, Check } from 'lucide-react';
import Link from 'next/link';

export default function ProductsClient() {
  return (
    <div style={{ backgroundColor: '#ffffff', color: '#0f172a', minHeight: '100vh', fontFamily: 'Inter, sans-serif', overflow: 'hidden' }}>
      <style dangerouslySetInnerHTML={{
        __html: `
          .container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 1.5rem;
          }
          .hero-flex {
            display: flex;
            flex-direction: column;
            gap: 3rem;
            align-items: center;
          }
          .hero-content { width: 100%; }
          .hero-visual { width: 100%; position: relative; height: 400px; display: none; }
          .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
            border-radius: 9999px;
            background-color: rgba(56, 189, 248, 0.1);
            color: #38bdf8;
            font-size: 0.875rem;
            font-weight: 600;
            border: 1px solid rgba(56, 189, 248, 0.2);
          }
          
          @media (min-width: 768px) {
            .hero-flex { flex-direction: row !important; }
            .hero-content { width: 50% !important; }
            .hero-visual { width: 50% !important; display: block !important; }
            .hero-title { font-size: 4rem !important; }
            
            .asym-row { flex-direction: row !important; }
            .asym-row-rev { flex-direction: row-reverse !important; }
            
            .bento-grid { 
              display: grid !important; 
              grid-template-columns: repeat(3, 1fr) !important; 
              gap: 1.5rem !important;
            }
            .bento-main { grid-column: span 2 !important; grid-row: span 2 !important; }
            
            .centered-large { text-align: center !important; }
            .centered-large-inner { align-items: center !important; margin: 0 auto !important; }
            
            .checklist-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          
          @media (min-width: 1024px) {
            .hero-visual { height: 600px !important; }
            .checklist-grid { grid-template-columns: repeat(3, 1fr) !important; }
          }

          .floating-card-1 {
            animation: float 6s ease-in-out infinite;
          }
          .floating-card-2 {
            animation: float 7s ease-in-out infinite 2s;
          }
          @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(2deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }
            
          .hover-lift {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .hover-lift:hover {
            transform: translateY(-8px) !important;
            box-shadow: 0 20px 40px rgba(0,0,0,0.4) !important;
          }
          
          .text-gradient {
            background: linear-gradient(135deg, #38bdf8, #818cf8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
            
          .card-bg {
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(0, 0, 0, 0.1);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          }
        `
      }} />

      {/* Hero Section */}
      <section style={{ paddingTop: '8rem', paddingBottom: '6rem', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at 20% 30%, rgba(56, 189, 248, 0.15), transparent 50%)', zIndex: 0 }} />
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="hero-flex">
            <div className="hero-content">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="hero-badge" style={{ marginBottom: '1.5rem' }}>
                  <CheckCircle2 style={{ width: '16px', height: '16px' }} />
                  Next-Gen Software Suite
                </div>
                <h1 className="hero-title" style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem' }}>
                  Powering India's <br/>
                  <span className="text-gradient">Digital Growth</span>
                </h1>
                <p style={{ fontSize: '1.125rem', color: '#64748b', marginBottom: '2.5rem', lineHeight: 1.6, maxWidth: '90%' }}>
                  From flagship ERPs to industry-specific point-of-sale solutions, we build world-class software that solves complex problems with elegant simplicity.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <button onClick={() => { document.getElementById('products-list')?.scrollIntoView({ behavior: 'smooth' }) }} style={{ padding: '1rem 2rem', backgroundColor: '#38bdf8', color: '#0f172a', borderRadius: '0.75rem', fontWeight: 600, fontSize: '1rem', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                    Explore Products <ChevronRight style={{ width: '20px', height: '20px' }} />
                  </button>
                  <Link href="/contact" style={{ padding: '1rem 2rem', backgroundColor: '#ffffff', color: '#0f172a', borderRadius: '0.75rem', fontWeight: 600, fontSize: '1rem', border: '1px solid #cbd5e1', cursor: 'pointer', textDecoration: 'none' }}>
                    View Pricing
                  </Link>
                </div>
              </motion.div>
            </div>
            
            <div className="hero-visual">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ width: '100%', height: '100%', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                {/* Floating Card 1 */}
                <div className="floating-card-1 card-bg" style={{ position: 'absolute', top: '10%', right: '5%', width: '200px', padding: '1rem', borderRadius: '1rem', zIndex: 3, boxShadow: '0 15px 30px -5px rgba(0,0,0,0.1)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #38bdf8, #3b82f6)' }} />
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.75rem', color: '#0f172a' }}>System Active</div>
                      <div style={{ fontSize: '0.65rem', color: '#64748b' }}>All services operational</div>
                    </div>
                  </div>
                  <div style={{ height: '6px', background: 'rgba(0,0,0,0.05)', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: '85%', height: '100%', backgroundColor: '#38bdf8' }} />
                  </div>
                </div>
                
                {/* Floating Card 2 */}
                <div className="floating-card-2 card-bg" style={{ position: 'absolute', bottom: '15%', left: '5%', width: '180px', padding: '1rem', borderRadius: '1rem', zIndex: 3, boxShadow: '0 15px 30px -5px rgba(0,0,0,0.1)' }}>
                   <div style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: '0.25rem', color: '#0f172a' }}>+124%</div>
                   <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Efficiency Gain</div>
                   <img src="/abstract-graphic.png" alt="Graph" style={{ width: '100%', marginTop: '0.75rem', borderRadius: '0.5rem', opacity: 0.9 }} onError={(e) => e.currentTarget.style.display = 'none'} />
                </div>

                {/* Main Graphic */}
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '70%', height: '70%', background: 'radial-gradient(circle, rgba(129, 140, 248, 0.2) 0%, transparent 70%)', zIndex: 1, borderRadius: '50%' }} />
                <img src="/product-mockup.png" alt="Software Dashboard" style={{ position: 'relative', width: '90%', objectFit: 'contain', zIndex: 2, borderRadius: '1rem', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }} onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.style.background = 'url(/abstract-graphic.png) center/cover'; }} />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Asymmetric Product Sections */}
      <section id="products-list" style={{ padding: '6rem 0', backgroundColor: 'transparent' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
          
          {products.map((product, index) => {
            
            // Product 1: Text Left, Image Right
            if (index === 0) {
              return (
                <div key={product.id} className="asym-row" style={{ display: 'flex', flexDirection: 'column', gap: '4rem', alignItems: 'center' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'inline-block', padding: '0.5rem 1rem', backgroundColor: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Flagship Product</div>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem', lineHeight: 1.2 }}>{product.title}</h2>
                    <p style={{ fontSize: '1.125rem', color: '#64748b', marginBottom: '2rem', lineHeight: 1.6 }}>{product.longDescription}</p>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
                      {product.features.slice(0, 4).map((feature, i) => (
                        <div key={i} className="card-bg hover-lift" style={{ padding: '1rem', borderRadius: '0.75rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                          <CheckCircle2 style={{ color: '#38bdf8', flexShrink: 0, width: '20px', height: '20px', marginTop: '2px' }} />
                          <span style={{ fontSize: '0.875rem', lineHeight: 1.4 }}>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link href={`/products/${product.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#38bdf8', fontWeight: 600, textDecoration: 'none', fontSize: '1rem' }}>
                      Explore {product.title} <ArrowRight style={{ width: '18px', height: '18px' }} />
                    </Link>
                  </div>
                  <div style={{ flex: 1, position: 'relative' }}>
                    <div className="card-bg hover-lift" style={{ padding: '1rem', borderRadius: '1.5rem' }}>
                      <img src="/product-mockup.png" alt={product.title} style={{ width: '100%', borderRadius: '1rem', display: 'block' }} />
                    </div>
                  </div>
                </div>
              );
            }
            
            // Product 2: Text Right, Image Left
            if (index === 1) {
              return (
                <div key={product.id} className="asym-row-rev" style={{ display: 'flex', flexDirection: 'column', gap: '4rem', alignItems: 'center' }}>
                  <div style={{ flex: 1 }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem', lineHeight: 1.2 }}>{product.title}</h2>
                    <p style={{ fontSize: '1.125rem', color: '#64748b', marginBottom: '2rem', lineHeight: 1.6 }}>{product.description}</p>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                      {product.features.slice(0, 4).map((feature, i) => (
                        <div key={i} className="card-bg hover-lift" style={{ padding: '1.25rem', borderRadius: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                          <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(56, 189, 248, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Check style={{ color: '#38bdf8', width: '20px', height: '20px' }} />
                          </div>
                          <span style={{ fontSize: '1rem', fontWeight: 500 }}>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link href={`/products/${product.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 1.5rem', backgroundColor: 'rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '0.75rem', color: '#0f172a', fontWeight: 600, textDecoration: 'none' }}>
                      Learn More
                    </Link>
                  </div>
                  <div style={{ flex: 1, position: 'relative' }}>
                     <div style={{ position: 'absolute', inset: '-2rem', background: 'radial-gradient(circle, rgba(129, 140, 248, 0.15) 0%, transparent 70%)', zIndex: 0 }} />
                    <img src="/abstract-graphic.png" alt="Decorative" style={{ width: '100%', borderRadius: '1.5rem', position: 'relative', zIndex: 1, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }} />
                  </div>
                </div>
              );
            }
            
            // Product 3: Bento Grid
            if (index === 2) {
              return (
                <div key={product.id} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto', marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>{product.title}</h2>
                    <p style={{ color: '#64748b', fontSize: '1.125rem' }}>{product.description}</p>
                  </div>
                  
                  <div className="bento-grid" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div className="bento-main card-bg hover-lift" style={{ padding: '2.5rem', borderRadius: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '2rem', minHeight: '300px' }}>
                      <div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>Core Modules</h3>
                        <p style={{ color: '#64748b', marginBottom: '2rem' }}>Experience full automation with integrated systems tailored for modern operations.</p>
                      </div>
                      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        {product.modules?.slice(0, 3).map((mod, i) => (
                           <div key={i} style={{ padding: '0.5rem 1rem', backgroundColor: 'rgba(0,0,0,0.05)', borderRadius: '2rem', fontSize: '0.875rem' }}>{mod.name}</div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="card-bg hover-lift" style={{ padding: '2rem', borderRadius: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                      <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(56, 189, 248, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                         <CheckCircle2 style={{ color: '#38bdf8', width: '32px', height: '32px' }} />
                      </div>
                      <h4 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>Compliance Ready</h4>
                      <p style={{ color: '#64748b', fontSize: '0.875rem' }}>Auto TDS, PF & ESIC</p>
                    </div>
                    
                    <div className="card-bg hover-lift" style={{ padding: '2rem', borderRadius: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)' }}>
                      <Link href={`/products/${product.slug}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', color: '#0f172a', textDecoration: 'none' }}>
                        <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#38bdf8', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff' }}>
                          <ArrowRight style={{ width: '24px', height: '24px' }} />
                        </div>
                        <span style={{ fontWeight: 600 }}>Explore Solution</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }
            
            // Product 4: Large Centered
            if (index === 3) {
              return (
                <div key={product.id} className="centered-large" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', padding: '4rem', borderRadius: '2rem', background: 'radial-gradient(circle at top, rgba(30, 41, 59, 0.8), #0b1120)', border: '1px solid rgba(0,0,0,0.05)' }}>
                  <div className="centered-large-inner" style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <div style={{ padding: '0.5rem 1rem', backgroundColor: 'rgba(129, 140, 248, 0.1)', color: '#818cf8', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Specialized</div>
                    <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1 }}>{product.title}</h2>
                    <p style={{ fontSize: '1.25rem', color: '#64748b', marginBottom: '3rem', lineHeight: 1.6 }}>{product.description}</p>
                    
                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center', width: '100%', marginBottom: '3rem' }}>
                      {product.modules?.map((mod, i) => (
                        <div key={i} className="card-bg hover-lift" style={{ padding: '1.5rem', borderRadius: '1rem', flex: '1 1 200px', minWidth: '200px', textAlign: 'center' }}>
                          <div style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>{mod.name}</div>
                          <p style={{ fontSize: '0.875rem', color: '#64748b' }}>{mod.description}</p>
                        </div>
                      ))}
                    </div>
                    
                    <Link href={`/products/${product.slug}`} style={{ padding: '1rem 2.5rem', backgroundColor: '#fff', color: '#0f172a', borderRadius: '0.75rem', fontWeight: 600, fontSize: '1.125rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                      Discover Capabilities <ChevronRight style={{ width: '20px', height: '20px' }} />
                    </Link>
                  </div>
                </div>
              );
            }
            
            return null;
          })}
          
        </div>
      </section>

      {/* "Why Our Products" Comparison Checklist */}
      <section style={{ padding: '6rem 0', backgroundColor: '#f8fafc', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Why Choose Microtechnique</h2>
            <p style={{ color: '#64748b', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>A unified ecosystem designed to eliminate friction and scale effortlessly.</p>
          </div>
          
          <div className="checklist-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
            {[
              { title: 'GST Compliant out of the box', desc: 'No manual tax calculations. Always updated with latest Govt rules.' },
              { title: 'Bank-grade Security', desc: 'End-to-end encryption and automated daily backups keep your data safe.' },
              { title: 'AI-Powered OCR', desc: 'Scan bills and invoices with 99% accuracy to save hours of manual entry.' },
              { title: 'Omnichannel Ready', desc: 'Manage offline stores and online operations from a single dashboard.' },
              { title: '24/7 Priority Support', desc: 'Local support teams available via phone, chat, and email whenever you need.' },
              { title: 'Seamless Integrations', desc: 'Connects perfectly with your existing payment gateways and hardware.' }
            ].map((item, i) => (
              <div key={i} className="hover-lift" style={{ display: 'flex', gap: '1.25rem', padding: '1.5rem', borderRadius: '1rem', backgroundColor: 'rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.05)' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Check style={{ width: '16px', height: '16px' }} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>{item.title}</h4>
                  <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Massive Dark Gradient CTA */}
      <section style={{ padding: '6rem 1.5rem', backgroundColor: '#0f172a' }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          borderRadius: '2rem', 
          padding: '5rem 2rem', 
          textAlign: 'center',
          background: 'linear-gradient(135deg, #1e1b4b 0%, #0f172a 50%, #082f49 100%)',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
          border: '1px solid rgba(0,0,0,0.1)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ position: 'absolute', top: '-50%', left: '-50%', width: '200%', height: '200%', background: 'radial-gradient(circle, rgba(56,189,248,0.1) 0%, transparent 60%)', zIndex: 0, animation: 'spin 20s linear infinite' }} />
          
          <style dangerouslySetInnerHTML={{ __html: `@keyframes spin { 100% { transform: rotate(360deg); } }` }} />
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', color: '#0f172a', letterSpacing: '-0.02em' }}>
              Ready to transform your business?
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#cbd5e1', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
              Join thousands of Indian businesses scaling faster with Microtechnique's intelligent software suite.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="hover-lift" style={{ padding: '1.25rem 3rem', backgroundColor: '#38bdf8', color: '#0f172a', borderRadius: '1rem', fontWeight: 700, fontSize: '1.125rem', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.75rem', boxShadow: '0 10px 25px rgba(56, 189, 248, 0.3)' }}>
                Start 15-Day Free Trial <ArrowRight style={{ width: '20px', height: '20px' }} />
              </button>
              <button className="hover-lift" style={{ padding: '1.25rem 3rem', backgroundColor: 'rgba(0,0,0,0.05)', color: '#0f172a', borderRadius: '1rem', fontWeight: 700, fontSize: '1.125rem', border: '1px solid rgba(0,0,0,0.2)', cursor: 'pointer' }}>
                Schedule Demo
              </button>
            </div>
            <p style={{ marginTop: '2rem', fontSize: '0.875rem', color: '#64748b' }}>No credit card required • Setup in 5 minutes</p>
          </div>
        </div>
      </section>

    </div>
  );
}
