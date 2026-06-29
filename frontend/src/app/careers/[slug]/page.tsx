import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, MapPin, Clock, Briefcase, Check } from 'lucide-react';
import { careers } from '@/data/careers';

export async function generateStaticParams() {
  return careers.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const career = careers.find((c) => c.slug === slug);
  if (!career) return { title: 'Position Not Found' };
  return { title: `${career.title} — Careers`, description: career.description };
}

export default async function CareerDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const career = careers.find((c) => c.slug === slug);
  if (!career) {
    return <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-heading font-bold">Position Not Found</h1></div>;
  }

  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden">
        
        <div className="container-custom relative z-10 max-w-4xl">
          <Link href="/careers" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Careers
          </Link>
          <h1 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">{career.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <span className="flex items-center gap-1"><Briefcase className="h-4 w-4" />{career.department}</span>
            <span className="flex items-center gap-1"><MapPin className="h-4 w-4" />{career.location}</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{career.type}</span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">{career.experience}</span>
          </div>
          <p className="text-muted-foreground leading-relaxed">{career.description}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-xl font-heading font-bold text-foreground mb-4">Responsibilities</h2>
                <ul className="space-y-3">
                  {career.responsibilities.map((r) => (
                    <li key={r} className="flex items-start gap-3"><Check className="h-4 w-4 text-primary shrink-0 mt-0.5" /><span className="text-sm text-muted-foreground">{r}</span></li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-heading font-bold text-foreground mb-4">Requirements</h2>
                <ul className="space-y-3">
                  {career.requirements.map((r) => (
                    <li key={r} className="flex items-start gap-3"><Check className="h-4 w-4 text-primary shrink-0 mt-0.5" /><span className="text-sm text-muted-foreground">{r}</span></li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="card rounded-2xl p-6 sticky top-24">
                <h3 className="text-lg font-heading font-bold text-foreground mb-4">Benefits</h3>
                <ul className="space-y-3 mb-6">
                  {career.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2"><Check className="h-4 w-4 text-primary shrink-0 mt-0.5" /><span className="text-sm text-muted-foreground">{b}</span></li>
                  ))}
                </ul>
                <a href={`mailto:hr@microtechniqueit.com?subject=Application: ${career.title}`} className="block text-center px-6 py-3 text-sm font-semibold rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
                  Apply Now <ArrowRight className="h-4 w-4 inline ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'JobPosting', title: career.title,
        description: career.description, employmentType: career.type.toUpperCase().replace('-', '_'),
        hiringOrganization: { '@type': 'Organization', name: 'Microtechnique IT', sameAs: 'https://microtechniqueit.com' },
        jobLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', addressLocality: 'Surat', addressRegion: 'Gujarat', addressCountry: 'IN' } },
      }) }} />
    </>
  );
}
