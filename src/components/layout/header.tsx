'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

const navItems = [
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Software Development', href: '/services/software-development' },
      { label: 'Web Development', href: '/services/web-development' },
      { label: 'Mobile Apps', href: '/services/mobile-apps' },
      { label: 'AI Solutions', href: '/services/ai-solutions' },
      { label: 'Enterprise ERP', href: '/services/enterprise-erp' },
      { label: 'CRM Solutions', href: '/services/crm-solutions' },
      { label: 'Cloud Services', href: '/services/cloud-services' },
      { label: 'Digital Marketing', href: '/services/digital-marketing' },
      { label: 'SEO Services', href: '/services/seo-services' },
      { label: 'Accounting Software', href: '/services/accounting-software' },
    ],
  },
  { label: 'Products', href: '/products' },
  { label: 'Industries', href: '/industries' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 pointer-events-none">
      <header className="mx-auto max-w-7xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm rounded-2xl pointer-events-auto">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <Image src="/logo.jpeg" alt="Microtechnique IT" width={32} height={32} className="rounded-md" />
              <span className="text-base font-bold text-foreground font-heading">
                Microtechnique<span className="text-primary">IT</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors rounded-lg hover:bg-slate-50"
                  >
                    {item.label}
                    {item.children && <ChevronDown className="h-3.5 w-3.5 text-slate-400 group-hover:text-slate-900 transition-colors" />}
                  </Link>

                  {/* Dropdown */}
                  {item.children && openDropdown === item.label && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-64 z-50">
                      <div className="bg-white rounded-2xl border border-slate-100 shadow-xl p-2 grid gap-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Link href="/contact" className="hidden sm:inline-flex btn-primary text-sm px-6 py-2 rounded-xl shadow-sm hover:shadow-md transition-all">
                Get in Touch
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-900"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 rounded-b-2xl absolute left-0 right-0 top-full mt-2 shadow-xl">
            <div className="p-4 space-y-1 max-h-[80vh] overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-sm font-semibold text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors"
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
              <div className="pt-4 mt-4 border-t border-slate-100">
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn-primary w-full justify-center py-3 rounded-xl">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
