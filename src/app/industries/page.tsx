import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { industries } from '@/data/industries';

export const metadata: Metadata = {
  title: 'Industries We Serve — Tailored Technology Solutions',
  description: 'Microtechnique IT serves healthcare, finance, education, e-commerce, logistics, retail, manufacturing, and more with industry-specific software solutions.',
};

export default function IndustriesPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden">
        
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link><span>/</span><span className="text-foreground">Industries</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">Industries</span>
            <h1 className="text-foreground mb-6 font-heading">Tailored for Every <span className="text-accent-gradient">Industry</span></h1>
            <p className="text-lg text-muted-foreground leading-relaxed">Our multi-industry expertise enables us to deliver solutions that address the unique challenges and opportunities in your sector.</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <Link key={industry.slug} href={`/industries/${industry.slug}`} className="group card rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                <h2 className="text-lg font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{industry.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{industry.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{industry.solutions.length} solutions</span>
                  <span className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">Explore <ArrowRight className="h-4 w-4" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="relative rounded-3xl overflow-hidden bg-pastel-blue border border-primary/10 p-12 text-center">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Don&apos;t See Your Industry?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">We build custom solutions for any industry. Let&apos;s talk about your specific needs.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-xl bg-primary text-white hover:opacity-90 transition-colors">Contact Us <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
