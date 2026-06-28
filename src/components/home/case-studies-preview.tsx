'use client';

import Link from 'next/link';
import { ArrowRight, TrendingUp } from 'lucide-react';

const cases = [
  { slug: 'medcare-hospital-digital-transformation', client: 'MedCare Hospital', industry: 'Healthcare', metric: '40%', metricLabel: 'Efficiency Increase', bg: 'bg-pastel-blue' },
  { slug: 'styleverse-ecommerce-revenue-growth', client: 'StyleVerse', industry: 'E-Commerce', metric: '150%', metricLabel: 'Revenue Growth', bg: 'bg-pastel-rose' },
  { slug: 'diamondstar-inventory-modernisation', client: 'DiamondStar', industry: 'Manufacturing', metric: '99.9%', metricLabel: 'Accuracy Rate', bg: 'bg-pastel-emerald' },
];

export function CaseStudiesPreview() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="badge mb-4 w-fit">Success Stories</div>
            <h2 className="text-foreground mb-4">Proven <span className="text-accent-gradient">Results</span></h2>
            <p className="text-muted-foreground">See how we have helped businesses transform and grow through technology.</p>
          </div>
          <Link href="/case-studies" className="btn-secondary">
            View All Case Studies
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((cs) => (
            <Link key={cs.slug} href={`/case-studies/${cs.slug}`} className="group card card-lift flex flex-col h-full">
              <div className={`p-8 ${cs.bg} rounded-t-2xl flex-grow`}>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 block">{cs.industry}</span>
                <h3 className="text-xl font-semibold text-foreground mb-6">{cs.client}</h3>
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-8 w-8 text-primary" />
                  <div>
                    <div className="text-2xl font-bold text-foreground">{cs.metric}</div>
                    <div className="text-xs text-muted-foreground">{cs.metricLabel}</div>
                  </div>
                </div>
              </div>
              <div className="p-4 border-t border-border flex justify-between items-center bg-white rounded-b-2xl">
                <span className="text-sm font-medium text-foreground">Read Case Study</span>
                <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
