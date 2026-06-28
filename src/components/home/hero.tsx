'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const highlights = [
  '200+ Projects Delivered',
  '150+ Happy Clients',
  '5+ Years of Innovation',
];

export function HeroSection() {
  return (
    <section style={{ paddingTop: '160px', paddingBottom: '120px', textAlign: 'center', background: 'linear-gradient(180deg, #eff6ff 0%, #f5f3ff 40%, #fafbfc 100%)' }}>
      <div style={{ margin: '0 auto', maxWidth: '900px', padding: '0 20px' }}>
        <div style={{ display: 'inline-block', textAlign: 'center' }}>
          {/* Badge */}
          <div className="badge" style={{ display: 'inline-block', marginBottom: '24px' }}>
            Your Partner in Digital Transformation
          </div>

          {/* Heading */}
          <h1 className="text-foreground mb-6" style={{ textAlign: 'center', width: '100%', display: 'block' }}>
            Building Tomorrow&apos;s{' '}
            <span className="text-accent-gradient">Digital Infrastructure</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8" style={{ textAlign: 'center', width: '100%' }}>
            We design and build enterprise-grade software, intelligent applications,
            and scalable cloud solutions that drive measurable business growth.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '48px' }}>
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Book a Consultation
              <ArrowRight className="h-4 w-4" style={{ display: 'inline' }} />
            </Link>
            <Link href="/portfolio" className="btn-secondary text-base px-8 py-4">
              Explore Our Work
            </Link>
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
