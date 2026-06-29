import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { products } from '@/data/products';

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: 'Product Not Found' };
  return { title: product.seo.metaTitle, description: product.seo.metaDescription, keywords: [...product.seo.keywords] };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) {
    return <div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-heading font-bold text-foreground mb-4">Product Not Found</h1><Link href="/products" className="text-primary">View all products</Link></div></div>;
  }

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link><span>/</span>
            <Link href="/products" className="hover:text-primary transition-colors">Products</Link><span>/</span>
            <span className="text-foreground">{product.title}</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-foreground mb-6 font-heading">{product.title}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">{product.description}</p>
            <div className="flex gap-4 mt-8">
              {product.cta && <a href={product.cta.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity">{product.cta.label} <ArrowRight className="h-4 w-4" /></a>}
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-xl border border-border text-foreground hover:bg-muted transition-colors">Request Demo</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-foreground font-heading mb-8 text-center">Key <span className="text-accent-gradient">Features</span></h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {product.features.map((f) => (
              <div key={f} className="flex items-start gap-3 p-5 card rounded-xl">
                <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" /><span className="text-sm text-foreground">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {product.modules && product.modules.length > 0 && (
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="text-foreground font-heading mb-8 text-center">Product <span className="text-accent-gradient">Modules</span></h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {product.modules.map((m) => (
                <div key={m.name} className="card rounded-xl p-5 text-center hover:border-primary/30 transition-colors">
                  <span className="text-sm font-semibold text-foreground">{m.name}</span>
                  <p className="text-xs text-muted-foreground mt-1">{m.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {product.pricingTiers && product.pricingTiers.length > 0 && (
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="text-foreground font-heading mb-4 text-center">Simple, Transparent <span className="text-accent-gradient">Pricing</span></h2>
            <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">Choose the plan that fits your business needs.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {product.pricingTiers.map((tier, i) => (
                <div key={tier.name} className={`card rounded-2xl p-8 ${i === 1 ? 'border-primary/50 ring-1 ring-primary/20' : ''}`}>
                  {i === 1 && <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary mb-4">Most Popular</span>}
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold font-heading text-accent-gradient mb-1">{tier.price}</div>
                  <p className="text-sm text-muted-foreground mb-6">{tier.period}</p>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground"><Check className="h-4 w-4 text-primary shrink-0" />{f}</li>
                    ))}
                  </ul>
                  <Link href="/contact" className={`block text-center px-6 py-3 text-sm font-semibold rounded-xl transition-colors ${i === 1 ? 'bg-primary text-primary-foreground hover:opacity-90' : 'border border-border text-foreground hover:bg-muted'}`}>
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {product.faqs && product.faqs.length > 0 && (
        <section className="section-padding">
          <div className="container-custom max-w-3xl">
            <h2 className="text-foreground font-heading mb-8 text-center">Frequently Asked <span className="text-accent-gradient">Questions</span></h2>
            <div className="space-y-4">
              {product.faqs.map((faq) => (
                <div key={faq.question} className="card rounded-xl p-6">
                  <h3 className="text-sm font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-padding">
        <div className="container-custom">
          <div className="relative rounded-3xl overflow-hidden bg-pastel-blue border border-primary/10 p-12 text-center">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">Try {product.title} free for 15 days. No credit card required.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-xl bg-primary text-white hover:opacity-90 transition-colors">Contact Sales <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'Product', name: product.title, description: product.description,
        brand: { '@type': 'Organization', name: 'Microtechnique IT' },
        url: `https://microtechniqueit.com/products/${product.slug}`,
      }) }} />
    </>
  );
}
