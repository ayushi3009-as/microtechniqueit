import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, Quote } from 'lucide-react';
import { caseStudies } from '@/data/case-studies';

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return { title: 'Case Study Not Found' };
  return { title: `${cs.title} — Case Study`, description: cs.challenge };
}

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) {
    return <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-heading font-bold">Case Study Not Found</h1></div>;
  }

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link><span>/</span>
            <Link href="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link><span>/</span>
            <span className="text-foreground">{cs.title}</span>
          </nav>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4">{cs.industry}</span>
          <h1 className="text-foreground mb-6 font-heading max-w-3xl">{cs.title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">Client: {cs.client}</p>
        </div>
      </section>

      {/* Results */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {cs.results.map((r) => (
              <div key={r.metric} className="card rounded-2xl p-6 text-center">
                <div className="text-2xl font-bold font-heading text-accent-gradient mb-1">{r.value}</div>
                <div className="text-sm font-semibold text-foreground">{r.metric}</div>
                <div className="text-xs text-muted-foreground mt-1">{r.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed">{cs.challenge}</p>
            </div>
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Research & Discovery</h2>
              <p className="text-muted-foreground leading-relaxed">{cs.research}</p>
            </div>
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Strategy</h2>
              <p className="text-muted-foreground leading-relaxed">{cs.strategy}</p>
            </div>
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Design Approach</h2>
              <p className="text-muted-foreground leading-relaxed">{cs.designApproach}</p>
            </div>
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Development</h2>
              <p className="text-muted-foreground leading-relaxed">{cs.development}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {cs.testimonial && (
        <section className="section-padding">
          <div className="container-custom max-w-3xl">
            <div className="card rounded-3xl p-8 lg:p-12 text-center">
              <Quote className="h-10 w-10 text-primary/20 mx-auto mb-6" />
              <blockquote className="text-lg text-foreground leading-relaxed mb-6 font-medium">&ldquo;{cs.testimonial.quote}&rdquo;</blockquote>
              <div className="text-sm font-semibold text-foreground">{cs.testimonial.name}</div>
              <div className="text-xs text-primary">{cs.testimonial.role}</div>
            </div>
          </div>
        </section>
      )}

      {/* Tech Stack */}
      <section className="py-12">
        <div className="container-custom max-w-3xl">
          <h2 className="text-xl font-heading font-bold text-foreground mb-4 text-center">Technologies Used</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {cs.technologies.map((t) => (
              <span key={t} className="px-4 py-2 rounded-lg text-sm font-medium bg-muted border border-border text-muted-foreground">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="relative rounded-3xl overflow-hidden bg-pastel-blue border border-primary/10 p-12 text-center">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Want Similar Results?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">Let&apos;s discuss how we can drive measurable outcomes for your business.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-xl bg-primary text-white hover:opacity-90 transition-colors">Start Your Project <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
