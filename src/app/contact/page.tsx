import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'Contact Us — Get in Touch',
  description:
    'Contact Microtechnique IT for enterprise software development, web development, mobile apps, and digital transformation. Get a free consultation today.',
  keywords: [
    'contact microtechnique IT',
    'software development consultation',
    'IT company Surat',
    'free consultation',
    'enterprise software quote',
  ],
};

const contactInfo = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'info@microtechniqueit.com',
    href: 'mailto:info@microtechniqueit.com',
    description: 'We respond within 24 hours',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '+91 6355997080',
    href: 'tel:+916355997080',
    description: 'Mon-Sun, 9:00 AM – 9:00 PM IST',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: 'Star World Complex, Pal Gam, Surat',
    href: '#',
    description: 'Gujarat 394510, India',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: '9:00 AM – 9:00 PM',
    href: '#',
    description: 'Monday to Sunday',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground">Contact</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
              Get In Touch
            </span>
            <h1 className="text-foreground mb-6 font-heading">
              Let&apos;s Build Something{' '}
              <span className="text-accent-gradient">Extraordinary</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ready to transform your business with cutting-edge technology? Whether you need
              enterprise software, a stunning website, or a complete digital strategy — we&apos;re
              here to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                className="card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <info.icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1">{info.label}</h3>
                <p className="text-base font-medium text-foreground mb-1">{info.value}</p>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </a>
            ))}
          </div>

          {/* Contact Form + Map */}
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              {/* Support Card */}
              <div className="card rounded-2xl p-8">
                <h3 className="text-lg font-heading font-bold text-foreground mb-4">
                  Need Immediate Support?
                </h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  For existing clients who need technical support, reach out directly to our support team.
                </p>
                <a
                  href="mailto:support@microtechniqueit.com"
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
                >
                  support@microtechniqueit.com
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              {/* Partnership Card */}
              <div className="card rounded-2xl p-8">
                <h3 className="text-lg font-heading font-bold text-foreground mb-4">
                  Partner With Us
                </h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Interested in a strategic partnership? Join our partner program and grow together.
                </p>
                <Link
                  href="/partner"
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
                >
                  Explore Partner Program
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Office Location */}
              <div className="card rounded-2xl p-8">
                <h3 className="text-lg font-heading font-bold text-foreground mb-4">
                  Our Office
                </h3>
                <div className="aspect-video rounded-xl bg-muted border border-border flex items-center justify-center mb-4">
                  <div className="text-center">
                    <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Surat, Gujarat, India</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Office No. G-40, Star World Complex, Green City Road,
                  Near Bhagwan Circle, Pal Gam, Surat – 394510
                </p>
              </div>
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
            '@type': 'ContactPage',
            mainEntity: {
              '@type': 'Organization',
              name: 'Microtechnique IT & Communication Solutions',
              telephone: '+91-6355997080',
              email: 'info@microtechniqueit.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Office No. G-40, Star World Complex',
                addressLocality: 'Surat',
                addressRegion: 'Gujarat',
                postalCode: '394510',
                addressCountry: 'IN',
              },
            },
          }),
        }}
      />
    </>
  );
}
