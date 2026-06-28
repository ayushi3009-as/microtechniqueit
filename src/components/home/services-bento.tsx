'use client';

import Link from 'next/link';
import { ArrowRight, Code2, Globe, Smartphone, Brain, Building2, Users, Cloud, Megaphone, Search, Calculator } from 'lucide-react';

const services = [
  { slug: 'software-development', title: 'Software Development', desc: 'Custom enterprise software engineered for scale and performance.', icon: Code2, bg: 'bg-pastel-blue' },
  { slug: 'web-development', title: 'Web Development', desc: 'Responsive, SEO-optimized websites that convert visitors into customers.', icon: Globe, bg: 'bg-pastel-emerald' },
  { slug: 'mobile-apps', title: 'Mobile Apps', desc: 'Native and cross-platform mobile experiences users love.', icon: Smartphone, bg: 'bg-pastel-amber' },
  { slug: 'ai-solutions', title: 'AI Solutions', desc: 'Intelligent automation and ML tools for competitive advantage.', icon: Brain, bg: 'bg-pastel-violet' },
  { slug: 'enterprise-erp', title: 'Enterprise ERP', desc: 'Unified operations from finance to supply chain in one platform.', icon: Building2, bg: 'bg-pastel-rose' },
  { slug: 'crm-solutions', title: 'CRM Solutions', desc: 'Nurture leads, close deals, and retain clients effectively.', icon: Users, bg: 'bg-pastel-cyan' },
  { slug: 'cloud-services', title: 'Cloud Services', desc: 'Scalable cloud infrastructure on AWS, Azure, and Google Cloud.', icon: Cloud, bg: 'bg-pastel-blue' },
  { slug: 'digital-marketing', title: 'Digital Marketing', desc: 'Data-driven strategies that increase visibility and conversions.', icon: Megaphone, bg: 'bg-pastel-rose' },
  { slug: 'seo-services', title: 'SEO Services', desc: 'Search optimization that puts your business on page one.', icon: Search, bg: 'bg-pastel-emerald' },
  { slug: 'accounting-software', title: 'Accounting & Billing', desc: 'GST-compliant accounting and billing for Indian businesses.', icon: Calculator, bg: 'bg-pastel-amber' },
];

export function ServicesBento() {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="badge mb-4 mx-auto w-fit">Our Expertise</div>
          <h2 className="text-foreground mb-4">Solutions That Drive <span className="text-accent-gradient">Growth</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto">End-to-end technology services designed to transform your business operations and accelerate growth.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="group card card-lift p-6">
              <div className={`w-10 h-10 rounded-xl ${service.bg} flex items-center justify-center mb-4`}>
                <service.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{service.desc}</p>
              <span className="text-sm text-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
