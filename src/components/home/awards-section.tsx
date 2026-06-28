'use client';

import { Award, Trophy, Star } from 'lucide-react';

const awards = [
  { icon: Award, title: 'Best IT Company', org: 'Gujarat Tech Awards 2025' },
  { icon: Trophy, title: 'Excellence in Enterprise Software', org: 'India Digital Summit' },
  { icon: Star, title: 'Top Rated Agency', org: 'Clutch 2025' },
];

export function AwardsSection() {
  return (
    <section className="section-padding bg-section-alt" style={{ padding: '80px 0' }}>
      <div className="container-custom">
        <div className="text-center mb-12" style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 className="text-foreground mb-4" style={{ marginBottom: '16px' }}>Recognized for <span className="text-accent-gradient">Excellence</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto" style={{ margin: '0 auto' }}>Our commitment to quality has been recognized by industry leaders.</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', maxWidth: '896px', margin: '0 auto' }}>
          {awards.map((award, i) => (
            <div key={i} className="flex flex-col items-center text-center p-6 border border-border rounded-2xl bg-white" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '24px', border: '1px solid #e2e8f0', borderRadius: '16px', backgroundColor: '#ffffff' }}>
              <div className="w-12 h-12 rounded-full bg-pastel-amber flex items-center justify-center mb-4" style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#fffbeb', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <award.icon className="h-6 w-6 text-yellow-600" style={{ width: '24px', height: '24px', color: '#d97706' }} />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{award.title}</h3>
              <p className="text-sm text-muted-foreground">{award.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
