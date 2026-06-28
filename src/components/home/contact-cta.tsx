'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function ContactCta() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="bg-pastel-blue rounded-3xl p-12 lg:p-20 text-center border border-primary/10">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Let's discuss your project requirements. Our experts are ready to build 
            the perfect solution tailored to your specific needs.
          </p>
          <Link href="/contact" className="btn-primary px-10 py-5 text-base shadow-sm">
            Schedule a Free Consultation
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
