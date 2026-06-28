'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: 'What is your typical project timeline?', a: 'Depending on the complexity, a standard corporate website takes 4-6 weeks, while a custom enterprise software application can take 3-6 months. We provide detailed timelines during the discovery phase.' },
  { q: 'Do you provide ongoing support?', a: 'Yes, we offer comprehensive AMC (Annual Maintenance Contracts) and SLA-based support packages to ensure your software remains secure, up-to-date, and performs optimally.' },
  { q: 'Can you integrate with our existing systems?', a: 'Absolutely. Our engineers have extensive experience integrating new solutions with legacy systems, third-party APIs, ERPs, and CRMs.' },
  { q: 'What are your payment terms?', a: 'We typically work on a milestone-based payment structure: 30% upfront, and the rest divided across key deliverables (design approval, beta release, final launch).' },
];

export function FaqSection() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="section-padding bg-section-alt">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-foreground mb-4">Frequently Asked <span className="text-accent-gradient">Questions</span></h2>
            <p className="text-muted-foreground">Everything you need to know about working with us.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="card overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between font-semibold text-foreground hover:bg-muted/50 transition-colors"
                >
                  {faq.q}
                  <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: open === i ? '200px' : '0' }}
                >
                  <p className="px-6 pb-5 pt-2 text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
