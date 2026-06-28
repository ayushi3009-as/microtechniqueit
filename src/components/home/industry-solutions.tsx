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
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="badge mb-4 mx-auto w-fit">Industries</div>
          <h2 className="text-foreground mb-4">Tailored for Every <span className="text-accent-gradient">Industry</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Solutions designed for the unique challenges and workflows of your sector.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {industries.map((ind) => (
            <button
              key={ind}
              onClick={() => setSelected(ind)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                selected === ind
                  ? 'bg-primary text-white'
                  : 'bg-muted text-muted-foreground hover:text-foreground'
              }`}
            >
              {ind}
            </button>
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-center card p-8">
          <h3 className="text-xl font-semibold text-foreground mb-3">{selected}</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">{data.desc}</p>
          <p className="text-sm text-muted-foreground mb-6">{data.solutions} tailored solutions available</p>
          <Link href={`/industries/${selected.toLowerCase().replace(' ', '-')}`} className="btn-primary mx-auto w-fit">
            Explore {selected} Solutions <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
