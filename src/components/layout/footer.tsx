'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Send } from 'lucide-react';

/* ── Footer link columns ── */
const productLinks = [
  { label: 'Microtechnique Accounts', href: '/products/microtechnique-accounts' },
  { label: 'HRMS & Payroll', href: '/products/hrms-payroll' },
  { label: 'ERP Solution', href: '/products/erp-solution' },
  { label: 'CRM', href: '/products/crm' },
  { label: 'Hospital Management', href: '/products/hospital-management' },
  { label: 'School ERP', href: '/products/school-erp' },
  { label: 'Restaurant POS', href: '/products/restaurant-pos' },
  { label: 'Builder CRM', href: '/products/builder-crm' },
];

const serviceLinks = [
  { label: 'Custom Software', href: '/services/software-development' },
  { label: 'Web Development', href: '/services/web-development' },
  { label: 'Mobile Apps', href: '/services/mobile-apps' },
  { label: 'Cloud Solutions', href: '/services/cloud-services' },
  { label: 'AI Solutions', href: '/services/ai-solutions' },
  { label: 'Digital Marketing', href: '/services/digital-marketing' },
];

const industryLinks = [
  { label: 'Manufacturing', href: '/industries/manufacturing' },
  { label: 'Retail', href: '/industries/retail' },
  { label: 'Healthcare', href: '/industries/healthcare' },
  { label: 'Education', href: '/industries/education' },
  { label: 'Real Estate', href: '/industries/real-estate' },
  { label: 'Logistics', href: '/industries/logistics' },
  { label: 'Finance', href: '/industries/finance' },
  { label: 'Hospitality', href: '/industries/hospitality' },
];

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
  { label: 'Partner With Us', href: '/partner' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
];

const socialLinks = [
  { label: 'IN', title: 'LinkedIn', href: '#' },
  { label: 'X', title: 'Twitter / X', href: '#' },
  { label: 'FB', title: 'Facebook', href: '#' },
  { label: 'IG', title: 'Instagram', href: '#' },
];

export function Footer() {
  return (
    <footer
      style={{ backgroundColor: '#0a0f2c', borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="container-custom" style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* ═══════════════════ TOP ROW ═══════════════════ */}
        <div
          className="flex flex-col lg:flex-row gap-12 lg:gap-16 py-16"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        >
          {/* Left — Brand + Description + Socials */}
          <div className="flex-1 max-w-md">
            <Link href="/" className="flex items-center gap-3 mb-5" style={{ textDecoration: 'none' }}>
              <Image
                src="/logo.jpeg"
                alt="MicrotechniqueIT"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-xl font-bold font-heading gradient-text">
                MicrotechniqueIT
              </span>
            </Link>

            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: 'var(--color-muted-foreground)' }}
            >
              A full-service technology company empowering businesses with innovative software
              solutions, enterprise products, and digital transformation strategies — from
              startups to large enterprises.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  title={social.title}
                  className="flex items-center justify-center rounded-full text-xs font-bold transition-all duration-200"
                  style={{
                    width: 38,
                    height: 38,
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: '#ffffff',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      'rgba(37, 99, 235, 0.2)';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      'rgba(37, 99, 235, 0.4)';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#00E5FF';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      'rgba(255,255,255,0.05)';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      'rgba(255,255,255,0.08)';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff';
                  }}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right — Newsletter */}
          <div className="flex-1 max-w-md lg:ml-auto">
            <h3
              className="font-heading text-lg font-bold mb-2"
              style={{ color: '#ffffff' }}
            >
              Stay at the forefront of innovation.
            </h3>
            <p
              className="text-sm mb-5"
              style={{ color: 'var(--color-muted-foreground)' }}
            >
              Subscribe for insights on enterprise tech, AI, and digital transformation.
            </p>
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="form-input flex-1"
                style={{
                  height: 48,
                  fontSize: '0.875rem',
                  borderRadius: 12,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#ffffff',
                }}
              />
              <button
                type="submit"
                className="btn-primary shrink-0"
                style={{
                  height: 48,
                  padding: '0 1.25rem',
                  borderRadius: 12,
                  fontSize: '0.875rem',
                }}
              >
                <span className="flex items-center gap-2">
                  Subscribe <Send className="w-4 h-4" />
                </span>
              </button>
            </form>
          </div>
        </div>

        {/* ═══════════════════ MIDDLE ROW — 4-Column Links ═══════════════════ */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 py-14"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        >
          {/* Products */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-wider mb-5"
              style={{ color: '#ffffff' }}
            >
              Products
            </h4>
            <ul className="flex flex-col gap-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'var(--color-muted-foreground)', textDecoration: 'none' }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = '#ffffff')
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color =
                        'var(--color-muted-foreground)')
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-wider mb-5"
              style={{ color: '#ffffff' }}
            >
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'var(--color-muted-foreground)', textDecoration: 'none' }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = '#ffffff')
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color =
                        'var(--color-muted-foreground)')
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-wider mb-5"
              style={{ color: '#ffffff' }}
            >
              Industries
            </h4>
            <ul className="flex flex-col gap-3">
              {industryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'var(--color-muted-foreground)', textDecoration: 'none' }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = '#ffffff')
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color =
                        'var(--color-muted-foreground)')
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-wider mb-5"
              style={{ color: '#ffffff' }}
            >
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'var(--color-muted-foreground)', textDecoration: 'none' }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = '#ffffff')
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color =
                        'var(--color-muted-foreground)')
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ═══════════════════ BOTTOM ROW ═══════════════════ */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8">
          <p className="text-xs" style={{ color: 'var(--color-muted-foreground)' }}>
            &copy; 2024 Microtechnique IT &amp; Communication Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs transition-colors duration-200"
              style={{ color: 'var(--color-muted-foreground)', textDecoration: 'none' }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = '#ffffff')
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  'var(--color-muted-foreground)')
              }
            >
              Privacy Policy
            </Link>
            <span style={{ color: 'rgba(255,255,255,0.15)' }}>|</span>
            <Link
              href="/terms"
              className="text-xs transition-colors duration-200"
              style={{ color: 'var(--color-muted-foreground)', textDecoration: 'none' }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = '#ffffff')
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  'var(--color-muted-foreground)')
              }
            >
              Terms of Service
            </Link>
            <span style={{ color: 'rgba(255,255,255,0.15)' }}>|</span>
            <Link
              href="/cookies"
              className="text-xs transition-colors duration-200"
              style={{ color: 'var(--color-muted-foreground)', textDecoration: 'none' }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = '#ffffff')
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  'var(--color-muted-foreground)')
              }
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
