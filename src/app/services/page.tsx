import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Code2,
  Globe,
  Smartphone,
  Brain,
  Building2,
  Users,
  Cloud,
  Megaphone,
  Search,
  Calculator,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services — Enterprise Software & Digital Solutions',
  description:
    'Explore Microtechnique IT services: custom software development, web development, mobile apps, AI solutions, ERP, CRM, cloud services, digital marketing, SEO, and accounting software.',
  keywords: [
    'software development services',
    'web development company',
    'mobile app development',
    'AI solutions',
    'enterprise ERP',
    'CRM solutions',
    'cloud services',
    'digital marketing agency',
    'SEO services',
    'accounting software',
  ],
};

const services = [
  {
    slug: 'software-development',
    title: 'Software Development',
    description: 'Custom enterprise software engineered for scale, security, and performance. We build solutions that streamline operations and drive growth.',
    icon: Code2,
    stat: '200+ Projects',
    gradient: 'from-blue-500/10 to-indigo-500/10',
    size: 'large',
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    description: 'Responsive, SEO-optimized websites and web applications that convert visitors into customers.',
    icon: Globe,
    stat: '150+ Websites',
    gradient: 'from-emerald-500/10 to-teal-500/10',
    size: 'large',
  },
  {
    slug: 'mobile-apps',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile experiences for iOS and Android that users love.',
    icon: Smartphone,
    stat: '50+ Apps',
    gradient: 'from-orange-500/10 to-amber-500/10',
  },
  {
    slug: 'ai-solutions',
    title: 'AI Solutions',
    description: 'Intelligent automation, machine learning, and AI-powered tools that give your business a competitive edge.',
    icon: Brain,
    stat: 'Smart Automation',
    gradient: 'from-purple-500/10 to-fuchsia-500/10',
  },
  {
    slug: 'enterprise-erp',
    title: 'Enterprise ERP',
    description: 'Comprehensive ERP solutions that unify your operations — from finance to supply chain — in one platform.',
    icon: Building2,
    stat: 'End-to-End',
    gradient: 'from-rose-500/10 to-pink-500/10',
  },
  {
    slug: 'crm-solutions',
    title: 'CRM Solutions',
    description: 'Customer relationship management systems that help you nurture leads, close deals, and retain clients.',
    icon: Users,
    stat: '360° View',
    gradient: 'from-cyan-500/10 to-sky-500/10',
  },
  {
    slug: 'cloud-services',
    title: 'Cloud Services',
    description: 'Scalable cloud infrastructure, migration, and management on AWS, Azure, and Google Cloud.',
    icon: Cloud,
    stat: '99.9% Uptime',
    gradient: 'from-indigo-500/10 to-violet-500/10',
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Data-driven digital marketing strategies that increase brand visibility, traffic, and conversions.',
    icon: Megaphone,
    stat: 'ROI Focused',
    gradient: 'from-red-500/10 to-orange-500/10',
  },
  {
    slug: 'seo-services',
    title: 'SEO Services',
    description: 'Search engine optimization that puts your business on page one and drives qualified organic traffic.',
    icon: Search,
    stat: 'Page 1 Rankings',
    gradient: 'from-green-500/10 to-emerald-500/10',
  },
  {
    slug: 'accounting-software',
    title: 'Accounting & Billing',
    description: 'GST-compliant accounting, billing, and inventory software designed for Indian businesses.',
    icon: Calculator,
    stat: 'GST Ready',
    gradient: 'from-yellow-500/10 to-amber-500/10',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground">Services</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
              Our Expertise
            </span>
            <h1 className="text-foreground mb-6 font-heading">
              Solutions That Drive{' '}
              <span className="text-accent-gradient">Business Growth</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From custom software development to digital marketing, we offer a comprehensive
              suite of technology services designed to transform your business operations and
              accelerate growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`group card rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 ${service.size === 'large' ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className={`p-3 rounded-xl bg-gradient-to-br ${service.gradient} w-fit mb-5`}>
                  <service.icon className="h-6 w-6 text-foreground" />
                </div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h2 className="text-lg font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h2>
                  <span className="shrink-0 px-2.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                    {service.stat}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-primary font-medium group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', borderRadius: '1.5rem', overflow: 'hidden', backgroundColor: '#e0e7ff', border: '1px solid rgba(99, 102, 241, 0.1)', padding: '4rem 2rem', textAlign: 'center' }}>
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
                Need a Custom Solution?
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
                Every business is unique. Let&apos;s discuss how we can tailor our services to your specific needs.
              </p>
              <Link
                href="/contact"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem', fontSize: '1rem', fontWeight: 600, borderRadius: '0.75rem', backgroundColor: '#6366f1', color: '#ffffff', textDecoration: 'none', transition: 'opacity 0.2s' }}
              >
                Get a Free Consultation
                <ArrowRight style={{ width: '16px', height: '16px' }} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: services.map((service, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              item: {
                '@type': 'Service',
                name: service.title,
                description: service.description,
                url: `https://microtechniqueit.com/services/${service.slug}`,
                provider: {
                  '@type': 'Organization',
                  name: 'Microtechnique IT',
                },
              },
            })),
          }),
        }}
      />
    </>
  );
}
