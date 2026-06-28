'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Headphones, Mail, LogIn, Handshake, PhoneCall } from 'lucide-react';

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
    <>
      {/* TOP BAR */}
      <div className="hidden lg:block bg-white border-b border-slate-100 text-sm font-medium text-slate-700">
        <div className="max-w-7xl mx-auto px-4 h-10 flex items-center justify-between">
          
          {/* Left Side */}
          <div className="flex items-center gap-6">
            <a href="tel:+916355997080" className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
              <Headphones className="w-4 h-4 text-indigo-600" />
              +91 6355997080
            </a>
            <div className="w-px h-4 bg-slate-200"></div>
            <a href="mailto:info@microtechniqueit.com" className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
              <Mail className="w-4 h-4 text-indigo-600" />
              info@microtechniqueit.com
            </a>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-6">
            <Link href="/login" className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
              <LogIn className="w-4 h-4 text-indigo-600" />
              Login
            </Link>
            <div className="w-px h-4 bg-slate-200"></div>
            <Link href="/partner" className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
              <Handshake className="w-4 h-4 text-indigo-600" />
              Partner With Us
            </Link>
            <div className="w-px h-4 bg-slate-200"></div>
            <Link href="/contact" className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
              <PhoneCall className="w-4 h-4 text-indigo-600" />
              Contact Us
            </Link>
          </div>

        </div>
      </div>

      {/* MAIN NAVBAR */}
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="container-custom">
          <div className="flex items-center h-16">
              
              {/* Logo */}
              <div className="flex-1 flex items-center">
                <Link href="/" className="flex items-center gap-2.5 shrink-0">
                  <Image src="/logo.jpeg" alt="Microtechnique IT" width={32} height={32} className="rounded-md" />
                  <span className="text-base font-bold text-foreground font-heading">
                    Microtechnique<span className="text-primary">IT</span>
                  </span>
                </Link>
              </div>

              {/* Desktop Nav */}
              <nav className="hidden lg:flex items-center justify-center gap-8 flex-none">
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

              {/* Mobile Toggle / Empty Right Side on Desktop */}
              <div className="flex-1 flex items-center justify-end">
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
              </div>
            </div>
          )}
        </header>
    </>
  );
}
