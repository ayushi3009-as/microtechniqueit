'use client';

import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

const products = [
  {
    slug: 'microtechnique-accounts',
    title: 'Microtechnique Accounts',
    desc: 'Flagship ERP for GST billing, invoicing, inventory, and financial reports.',
    features: ['GST Ready', 'AI/OCR Bill Scanning', 'Multi-user Access'],
    badge: 'Most Popular',
  },
  {
    slug: 'billing-inventory',
    title: 'Billing & Inventory',
    desc: 'Multi-store barcode and role-based access for seamless operations.',
    features: ['Barcode Integration', 'Multi-store', 'Real-time Stock'],
  },
  {
    slug: 'payroll-software',
    title: 'Payroll Software',
    desc: 'Automated payroll with TDS/PF/PT/ESIC and attendance tracking.',
    features: ['Automated Salary', 'Compliance', 'Staff Portal'],
  },
  {
    slug: 'industry-specific-software',
    title: 'Industry Solutions',
    desc: 'Specialized software for retail, restaurant, manufacturing, and more.',
    features: ['Custom Workflows', 'Domain Specific', 'Scalable'],
  },
];

export function ProductsShowcase() {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="badge mb-4 w-fit">Our Products</div>
            <h2 className="text-foreground mb-4">Enterprise <span className="text-accent-gradient">Software</span></h2>
            <p className="text-muted-foreground">Ready-to-use, scalable products built for Indian businesses.</p>
          </div>
          <Link href="/products" className="btn-secondary">
            View All Products
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product) => (
            <div key={product.slug} className="card card-lift p-8">
              {product.badge && (
                <span className="inline-block px-3 py-1 bg-pastel-violet text-primary text-xs font-semibold rounded-full mb-4">
                  {product.badge}
                </span>
              )}
              <h3 className="text-xl font-semibold text-foreground mb-3">{product.title}</h3>
              <p className="text-muted-foreground mb-6">{product.desc}</p>
              
              <ul className="space-y-3 mb-8">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                    <Check className="h-4 w-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href={`/products/${product.slug}`} className="text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all text-sm">
                Explore Product <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
