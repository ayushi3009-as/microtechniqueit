'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const industries = [
  'Healthcare', 'Finance', 'Education', 'E-Commerce', 'Logistics',
  'Retail', 'Manufacturing', 'Real Estate', 'Hospitality', 'Construction',
];

const industryData: Record<string, { desc: string; solutions: number }> = {
  Healthcare: { desc: 'Digital patient records, telemedicine platforms, and hospital management systems that improve care delivery.', solutions: 5 },
  Finance: { desc: 'Secure fintech solutions, payment gateways, and compliance management for financial institutions.', solutions: 4 },
  Education: { desc: 'Learning management systems, virtual classrooms, and student engagement platforms.', solutions: 5 },
  'E-Commerce': { desc: 'Multi-vendor marketplaces, inventory management, and conversion-optimized storefronts.', solutions: 6 },
  Logistics: { desc: 'Fleet management, route optimization, and real-time shipment tracking dashboards.', solutions: 4 },
  Retail: { desc: 'POS systems, inventory management, and omnichannel retail solutions.', solutions: 5 },
  Manufacturing: { desc: 'Production planning, quality control, and supply chain management systems.', solutions: 4 },
  'Real Estate': { desc: 'Property management, CRM, and virtual tour platforms for real estate businesses.', solutions: 3 },
  Hospitality: { desc: 'Hotel management, booking engines, and guest experience platforms.', solutions: 4 },
  Construction: { desc: 'Project management, estimation tools, and contractor collaboration platforms.', solutions: 3 },
};

export function IndustrySolutions() {
  const [selected, setSelected] = useState('Healthcare');
  const data = industryData[selected];

  return (
    <section className="section-padding" style={{ padding: '80px 0' }}>
      <div className="container-custom">
        <div className="text-center mb-12" style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="badge mb-4 mx-auto w-fit" style={{ margin: '0 auto 16px auto' }}>Industries</div>
          <h2 className="text-foreground mb-4" style={{ margin: '0 auto 16px auto', textAlign: 'center' }}>Tailored for Every <span className="text-accent-gradient">Industry</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto" style={{ margin: '0 auto', textAlign: 'center' }}>Solutions designed for the unique challenges and workflows of your sector.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', marginBottom: '32px' }}>
          {industries.map((ind) => (
            <button
              key={ind}
              onClick={() => setSelected(ind)}
              className={`text-sm font-medium transition-colors ${
                selected === ind
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-section-alt text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
              style={{
                padding: '8px 16px',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              {ind}
            </button>
          ))}
        </div>

        <div className="card card-lift p-8 md:p-12 text-center max-w-4xl mx-auto" style={{ padding: '48px', borderRadius: '24px', margin: '0 auto', textAlign: 'center', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', maxWidth: '896px' }}>
          <h3 className="text-2xl font-bold text-foreground mb-4" style={{ marginBottom: '16px' }}>{selected}</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto" style={{ marginBottom: '32px', margin: '0 auto' }}>{data.desc}</p>
          <div className="text-sm font-medium text-primary mb-8" style={{ marginBottom: '32px' }}>{data.solutions} tailored solutions available</div>
          <Link href={`/industries/${selected.toLowerCase().replace(' ', '-')}`} className="btn-primary inline-flex mx-auto" style={{ display: 'inline-flex', padding: '12px 24px', borderRadius: '8px' }}>
            Explore {selected} Solutions <ArrowRight className="ml-2 h-4 w-4" style={{ marginLeft: '8px' }} />
          </Link>
        </div>
      </div>
    </section>
  );
}
