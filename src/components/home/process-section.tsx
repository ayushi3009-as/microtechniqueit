'use client';

import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';const steps = [
  { num: '01', title: 'Discovery & Strategy', desc: 'We analyze your requirements, target audience, and business goals to form a solid technical strategy.' },
  { num: '02', title: 'UI/UX Design', desc: 'Our designers create intuitive, user-centric interfaces that align with your brand identity.' },
  { num: '03', title: 'Development', desc: 'Agile sprints with regular updates, building scalable and secure code architectures.' },
  { num: '04', title: 'Testing & QA', desc: 'Rigorous manual and automated testing to ensure a flawless, bug-free launch.' },
  { num: '05', title: 'Deployment & Support', desc: 'Smooth deployment to production and ongoing maintenance to keep your software running perfectly.' },
];

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section className="section-padding" style={{ padding: '80px 0', overflow: 'hidden' }}>
      <div className="container-custom">
        <div className="text-center mb-16" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="badge mb-4 mx-auto w-fit" style={{ margin: '0 auto 16px auto' }}>How We Work</div>
          <h2 className="text-foreground mb-4" style={{ margin: '0 auto 16px auto', textAlign: 'center' }}>Our Proven <span className="text-accent-gradient">Process</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto" style={{ margin: '0 auto', textAlign: 'center' }}>A transparent, agile methodology ensuring quality delivery on time, every time.</p>
        </div>

        <div className="max-w-4xl mx-auto relative" ref={containerRef} style={{ position: 'relative', margin: '0 auto', maxWidth: '896px' }}>
          {/* Vertical Line (Static) */}
          <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', backgroundColor: '#e2e8f0', transform: 'translateX(-50%)' }} />
          
          {/* Vertical Line (Animated Flow) */}
          <motion.div 
            style={{ 
              position: 'absolute', 
              left: '50%', 
              top: 0, 
              bottom: 0, 
              width: '2px', 
              backgroundColor: '#4f46e5', 
              transform: 'translateX(-50%)',
              scaleY: scrollYProgress,
              transformOrigin: "top",
              zIndex: 1
            }} 
          />
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '64px', position: 'relative', zIndex: 2 }}>
            {steps.map((step, idx) => (
              <div key={step.num} style={{ display: 'flex', flexDirection: idx % 2 === 0 ? 'row-reverse' : 'row', alignItems: 'center', position: 'relative', width: '100%', justifyContent: 'space-between' }}>
                {/* Center dot */}
                <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#eff6ff', border: '4px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#4f46e5' }} />
                </div>
                
                {/* Spacer to push card to the side */}
                <div style={{ width: '50%' }} />
                
                {/* Card content */}
                <div className="card" style={{ width: '45%', padding: '32px', backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', textAlign: idx % 2 === 0 ? 'right' : 'left', position: 'relative', zIndex: 5 }}>
                  <span style={{ display: 'block', marginBottom: '8px', color: '#4f46e5', fontSize: '12px', fontWeight: 'bold', letterSpacing: '0.1em' }}>STEP {step.num}</span>
                  <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#0f172a' }}>{step.title}</h3>
                  <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#64748b' }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
