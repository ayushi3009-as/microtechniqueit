import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, AlertTriangle } from 'lucide-react';
import { industries } from '@/data/industries';

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return { title: 'Industry Not Found' };
  return { title: industry.seo.metaTitle, description: industry.seo.metaDescription, keywords: [...industry.seo.keywords] };
}

export default async function IndustryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) {
    return <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-heading font-bold">Industry Not Found</h1></div>;
  }

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link><span>/</span>
            <Link href="/industries" className="hover:text-primary transition-colors">Industries</Link><span>/</span>
            <span className="text-foreground">{industry.title}</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-foreground mb-6 font-heading">{industry.title} <span className="text-accent-gradient">Solutions</span></h1>
            <p className="text-lg text-muted-foreground leading-relaxed">{industry.description}</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 mt-8 text-base font-semibold rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
              Discuss Your Project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-foreground font-heading mb-6">Industry <span className="text-accent-gradient">Challenges</span></h2>
              <div className="space-y-4">
                {industry.challenges.map((c) => (
                  <div key={c} className="flex items-start gap-3 card rounded-xl p-5">
                    <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{c}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-foreground font-heading mb-6">Our <span className="text-accent-gradient">Solutions</span></h2>
              <div className="space-y-4">
                {industry.solutions.map((s) => (
                  <div key={s} className="flex items-start gap-3 card rounded-xl p-5">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="relative rounded-3xl overflow-hidden bg-pastel-blue border border-primary/10 p-12 text-center">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Transform Your {industry.title} Business</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">Let&apos;s build a solution tailored to your industry needs.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-xl bg-primary text-white hover:opacity-90 transition-colors">Get Started <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
