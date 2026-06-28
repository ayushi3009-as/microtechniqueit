'use client';

import { Star, Quote } from 'lucide-react';

const testimonials = [
  { name: 'Riya Patel', role: 'CEO, StyleVerse', text: 'Microtechnique IT completely transformed our e-commerce platform. Their technical expertise and attention to detail resulted in a 150% increase in our online sales within just three months.' },
  { name: 'Vikram Singh', role: 'Operations Head, LogiFlow', text: 'The custom ERP solution they built for us streamlined our entire logistics operation. We now have real-time tracking and have reduced operational costs by 30%.' },
  { name: 'Rajesh Kumar', role: 'Director, MedCare', text: 'Their team delivered a secure, compliant healthcare management system that our staff loves using. The transition was seamless, and their support is outstanding.' },
];

export function Testimonials() {
  return (
    <section className="section-padding bg-pastel-blue" style={{ padding: '80px 0', backgroundColor: '#eff6ff' }}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="badge bg-white mb-4 mx-auto w-fit">Testimonials</div>
          <h2 className="text-foreground mb-4">What Our Clients <span className="text-accent-gradient">Say</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Don&apos;t just take our word for it. Here&apos;s what businesses have to say about working with us.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {testimonials.map((t, i) => (
            <div key={i} className="card p-8 relative" style={{ padding: '32px', position: 'relative', backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <Quote className="absolute top-6 right-6 h-8 w-8 text-pastel-blue opacity-50" style={{ position: 'absolute', top: '24px', right: '24px', opacity: 0.5 }} />
              <div className="flex gap-1 mb-6" style={{ display: 'flex', gap: '4px', marginBottom: '24px' }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground text-sm leading-relaxed mb-8 italic" style={{ marginBottom: '32px' }}>"{t.text}"</p>
              <div>
                <div className="font-semibold text-foreground text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
