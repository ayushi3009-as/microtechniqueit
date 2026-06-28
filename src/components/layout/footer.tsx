import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  Services: [
    { label: 'Software Development', href: '/services/software-development' },
    { label: 'Web Development', href: '/services/web-development' },
    { label: 'Mobile Apps', href: '/services/mobile-apps' },
    { label: 'AI Solutions', href: '/services/ai-solutions' },
    { label: 'Cloud Services', href: '/services/cloud-services' },
    { label: 'Digital Marketing', href: '/services/digital-marketing' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blog' },
    { label: 'Partner Program', href: '/partner' },
  ],
  Products: [
    { label: 'Microtechnique Accounts', href: '/products/microtechnique-accounts' },
    { label: 'Billing & Inventory', href: '/products/billing-inventory' },
    { label: 'Payroll Software', href: '/products/payroll-software' },
    { label: 'Industry Solutions', href: '/products/industry-specific-software' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <Image src="/logo.jpeg" alt="Microtechnique IT" width={32} height={32} className="rounded-md" />
              <span className="text-base font-bold text-foreground font-heading">
                Microtechnique<span className="text-primary">IT</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-sm">
              A full-service technology company empowering businesses with innovative software solutions, digital transformation, and enterprise products.
            </p>
            <div className="space-y-3">
              <a href="tel:+916355997080" className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="h-4 w-4" /> +91 6355997080
              </a>
              <a href="mailto:info@microtechniqueit.com" className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-4 w-4" /> info@microtechniqueit.com
              </a>
              <div className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>Office No. G-40, Star World Complex, Pal Gam, Surat – 394510</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-foreground mb-4">{title}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Microtechnique IT & Communication Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <Link href="/about" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/about" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
