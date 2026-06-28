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
      <section style={{ position: 'relative', paddingTop: '8rem', paddingBottom: '4rem', overflow: 'hidden' }}>
        
        <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '1320px', margin: '0 auto', padding: '0 1.5rem' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#64748b', marginBottom: '2rem' }} aria-label="Breadcrumb">
            <Link href="/" style={{ color: '#64748b', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <span style={{ color: '#0f172a' }}>Services</span>
          </nav>
          <div style={{ maxWidth: '768px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 500, backgroundColor: 'rgba(99, 102, 241, 0.1)', color: '#6366f1', border: '1px solid rgba(99, 102, 241, 0.2)', marginBottom: '1.5rem' }}>
              Our Expertise
            </span>
            <h1 style={{ color: '#0f172a', marginBottom: '1.5rem', fontFamily: 'Outfit, sans-serif', fontSize: '4rem', fontWeight: 800, lineHeight: 1.1 }}>
              Solutions That Drive{' '}
              <span style={{ background: 'linear-gradient(to right, #6366f1, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Business Growth</span>
            </h1>
            <p style={{ fontSize: '1.125rem', color: '#64748b', lineHeight: 1.6 }}>
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
                style={{ display: 'block', padding: '2rem', borderRadius: '1rem', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', textDecoration: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}
                className="hover-lift"
              >
                <div className={`w-fit mb-5`} style={{ padding: '0.75rem', borderRadius: '0.75rem', backgroundColor: '#f1f5f9', display: 'inline-block' }}>
                  <service.icon style={{ width: '24px', height: '24px', color: '#0f172a' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '0.75rem' }}>
                  <h2 style={{ fontSize: '1.25rem', fontFamily: 'Outfit, sans-serif', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                    {service.title}
                  </h2>
                  <span style={{ flexShrink: 0, padding: '0.25rem 0.625rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 600, backgroundColor: 'rgba(99, 102, 241, 0.1)', color: '#6366f1' }}>
                    {service.stat}
                  </span>
                </div>
                <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.6, marginBottom: '1rem' }}>
                  {service.description}
                </p>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#6366f1', fontWeight: 500 }}>
                  Learn More <ArrowRight style={{ width: '16px', height: '16px' }} />
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
