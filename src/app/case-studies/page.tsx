import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { caseStudies } from '@/data/case-studies';

export const metadata: Metadata = {
  title: 'Case Studies — Real Results, Real Impact',
  description: 'Discover how Microtechnique IT has helped businesses achieve measurable results through technology. Explore our detailed case studies.',
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden">
        
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link><span>/</span><span className="text-foreground">Case Studies</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6"><TrendingUp className="h-3.5 w-3.5" />Case Studies</span>
            <h1 className="text-foreground mb-6 font-heading">Proven Results, <span className="text-accent-gradient">Real Impact</span></h1>
            <p className="text-lg text-muted-foreground leading-relaxed">In-depth looks at how we&apos;ve helped businesses overcome challenges and achieve measurable outcomes.</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom space-y-8">
          {caseStudies.map((study, index) => (
            <Link key={study.id} href={`/case-studies/${study.slug}`} className="block group">
              <div className="card rounded-3xl p-8 lg:p-12 hover:border-primary/30 transition-all duration-300">
                <div className="grid lg:grid-cols-5 gap-8 items-center">
                  <div className="lg:col-span-3">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4">{study.industry}</span>
                    <h2 className="text-2xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{study.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">{study.challenge}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.technologies.map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-md text-xs font-medium bg-muted border border-border text-muted-foreground">{t}</span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">Read Full Case Study <ArrowRight className="h-4 w-4" /></span>
                  </div>
                  <div className="lg:col-span-2">
                    <div className="grid grid-cols-2 gap-4">
                      {study.results.map((r) => (
                        <div key={r.metric} className="text-center p-4 rounded-xl bg-muted border border-border">
                          <div className="text-xl font-bold font-heading text-accent-gradient">{r.value}</div>
                          <div className="text-xs text-muted-foreground mt-1">{r.metric}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
