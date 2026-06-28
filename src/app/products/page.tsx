import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, Star } from 'lucide-react';
import { products } from '@/data/products';

export const metadata: Metadata = {
  title: 'Our Products — Software Solutions for Indian Businesses',
  description: 'Explore Microtechnique IT products: Microtechnique Accounts ERP, Billing & Inventory, Payroll Software, and Industry-Specific Solutions. Built for Indian businesses.',
};

export default function ProductsPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden">
        
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span><span className="text-foreground">Products</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">Our Products</span>
            <h1 className="text-foreground mb-6 font-heading">Software Solutions <span className="text-accent-gradient">Built for India</span></h1>
            <p className="text-lg text-muted-foreground leading-relaxed">GST-compliant, feature-rich software products designed from the ground up for Indian businesses of all sizes.</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom space-y-8">
          {products.map((product, index) => (
            <div key={product.id} className="card rounded-3xl p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  {index === 0 && <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary mb-4"><Star className="h-3 w-3" />Flagship Product</span>}
                  <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">{product.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>
                  <div className="flex flex-wrap gap-3">
                    <Link href={`/products/${product.slug}`} className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                    {product.cta && (
                      <a href={product.cta.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl border border-border text-foreground hover:bg-muted transition-colors">
                        {product.cta.label}
                      </a>
                    )}
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="grid grid-cols-2 gap-3">
                    {product.features.slice(0, 6).map((feature) => (
                      <div key={feature} className="flex items-start gap-2 p-3 rounded-xl bg-muted border border-border">
                        <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-xs text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="relative rounded-3xl overflow-hidden bg-pastel-blue border border-primary/10 p-12 lg:p-16 text-center">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">Try Before You Buy</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">Start with a 15-day free trial. No credit card required.</p>
            <a href="https://microtechnique.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-xl bg-primary text-white hover:opacity-90 transition-colors">
              Start Free Trial <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
