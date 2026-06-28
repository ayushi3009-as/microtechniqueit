import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { services } from '@/data/services';

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: 'Service Not Found' };
  return {
    title: service.seo.metaTitle,
    description: service.seo.metaDescription,
    keywords: [...service.seo.keywords],
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-4">Service Not Found</h1>
          <Link href="/services" className="text-primary hover:underline">View all services</Link>
        </div>
      </div>
    );
  }

  const relatedServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            <span>/</span>
            <span className="text-foreground">{service.shortTitle}</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
              {service.stats?.[0]?.value ?? service.shortTitle}
            </span>
            <h1 className="text-foreground mb-6 font-heading">{service.title}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">{service.longDescription}</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/portfolio" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl border border-border text-foreground hover:bg-muted transition-colors">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-foreground font-heading mb-4">What We <span className="text-accent-gradient">Deliver</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive capabilities designed to address your specific business challenges.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {service.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 p-5 card rounded-xl">
                <div className="p-1 rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5"><Check className="h-4 w-4" /></div>
                <span className="text-sm text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="card rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-foreground font-heading mb-6">Why Choose Our <span className="text-accent-gradient">{service.shortTitle}</span></h2>
                <div className="space-y-4">
                  {service.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <div className="p-1 rounded-full bg-primary/20 text-primary shrink-0 mt-1"><Check className="h-3.5 w-3.5" /></div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-heading font-bold text-foreground mb-4">Technologies We Use</h3>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 rounded-lg text-sm font-medium bg-muted border border-border text-muted-foreground">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-foreground font-heading mb-8 text-center">Related <span className="text-accent-gradient">Services</span></h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {relatedServices.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group">
                <h3 className="text-lg font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{s.description}</p>
                <span className="inline-flex items-center gap-2 text-sm text-primary font-medium">Learn More <ArrowRight className="h-4 w-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="relative rounded-3xl overflow-hidden bg-pastel-blue border border-primary/10 p-12 lg:p-16 text-center">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">Let&apos;s discuss how our {service.shortTitle.toLowerCase()} services can transform your business.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-xl bg-primary text-white hover:opacity-90 transition-colors">
              Schedule a Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'Service', name: service.title,
        description: service.description, provider: { '@type': 'Organization', name: 'Microtechnique IT' },
        url: `https://microtechniqueit.com/services/${service.slug}`,
      }) }} />
    </>
  );
}
