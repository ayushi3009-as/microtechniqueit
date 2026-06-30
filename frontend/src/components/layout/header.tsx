'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import {
  Menu,
  X,
  ChevronDown,
  Sun,
  Moon,
  Code2,
  Globe,
  Smartphone,
  Cloud,
  Brain,
  Megaphone,
  Calendar,
  ArrowRight,
  ChevronRight,
  LayoutGrid,
  Package,
  DollarSign,
  Users,
  Factory,
  BookUser,
  HeartPulse,
  GraduationCap,
  UtensilsCrossed,
  Building2,
} from 'lucide-react';

/* ── Services mega-menu data ── */
const services = [
  {
    label: 'Custom Software',
    href: '/services/software-development',
    icon: Code2,
    description: 'Tailored enterprise solutions built for your unique workflows.',
  },
  {
    label: 'Web Development',
    href: '/services/web-development',
    icon: Globe,
    description: 'High-performance web apps with modern frameworks.',
  },
  {
    label: 'Mobile Apps',
    href: '/services/mobile-apps',
    icon: Smartphone,
    description: 'Native & cross-platform apps for iOS and Android.',
  },
  {
    label: 'Cloud Solutions',
    href: '/services/cloud-services',
    icon: Cloud,
    description: 'Scalable cloud architecture, migration & DevOps.',
  },
  {
    label: 'AI/ML Solutions',
    href: '/services/ai-solutions',
    icon: Brain,
    description: 'Intelligent automation, NLP & predictive analytics.',
  },
  {
    label: 'Digital Marketing',
    href: '/services/digital-marketing',
    icon: Megaphone,
    description: 'SEO, paid media & conversion-focused strategies.',
  },
];

/* ── Products dropdown data ── */
const products = [
  { label: 'Microtechnique Accounts', href: '/products/microtechnique-accounts', icon: DollarSign },
  { label: 'HRMS & Payroll', href: '/products/hrms-payroll', icon: Users },
  { label: 'ERP Solution', href: '/products/erp-solution', icon: Factory },
  { label: 'CRM', href: '/products/crm', icon: BookUser },
  { label: 'Hospital Management', href: '/products/hospital-management', icon: HeartPulse },
  { label: 'School ERP', href: '/products/school-erp', icon: GraduationCap },
  { label: 'Restaurant POS', href: '/products/restaurant-pos', icon: UtensilsCrossed },
  { label: 'Builder CRM', href: '/products/builder-crm', icon: Building2 },
];

/* ── Top-level nav items ── */
const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services', hasDropdown: 'services' as const },
  { label: 'Products', href: '/products', hasDropdown: 'products' as const },
  { label: 'Industries', href: '/industries' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => { setMounted(true); }, []);



  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  if (pathname?.startsWith('/dashboard') || pathname === '/login' || pathname === '/forgot-password') return null;

  const openDropdown = (key: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(key);
  };
  const closeDropdown = () => {
    dropdownTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 transition-all duration-300"
        style={{
          zIndex: 100,
          height: 72,
          ...(scrolled
            ? {
                background: 'rgba(5, 8, 22, 0.75)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderBottom: '1px solid var(--color-border)',
                boxShadow: '0 4px 30px rgba(0,0,0,0.2)',
              }
            : {
                background: 'transparent',
                borderBottom: '1px solid transparent',
              }),
        }}
      >
        <div className="container-custom h-full">
          <div className="flex items-center justify-between h-full">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <Image src="/logo.jpeg" alt="MicrotechniqueIT" width={48} height={48} className="rounded-xl" />
              <span className="text-xl font-bold font-heading gradient-text">MicrotechniqueIT</span>
            </Link>

            {/* ── Desktop Navigation ── */}
            <nav className="hidden xl:flex items-center gap-4">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && openDropdown(item.hasDropdown)}
                  onMouseLeave={closeDropdown}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1.5 px-3 py-2 text-[15px] font-medium rounded-lg transition-colors"
                    style={{ color: 'var(--color-muted-foreground)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-foreground)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-muted-foreground)')}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown
                        className="h-3.5 w-3.5 transition-transform duration-200"
                        style={{ transform: activeDropdown === item.hasDropdown ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      />
                    )}
                  </Link>

                  {/* ── Services Mega-Menu ── */}
                  {item.hasDropdown === 'services' && activeDropdown === 'services' && (
                    <div
                      className="absolute top-[calc(100%+12px)] left-1/2"
                      style={{ transform: 'translateX(-15%)', width: 800, zIndex: 200 }}
                    >
                      <div
                        className="rounded-2xl overflow-hidden"
                        style={{
                          background: 'var(--color-card)',
                          backdropFilter: 'blur(30px)',
                          WebkitBackdropFilter: 'blur(30px)',
                          border: '1px solid var(--color-border)',
                          boxShadow: '0 40px 80px rgba(0,0,0,0.8)',
                          animation: 'fade-in 0.2s ease-out',
                        }}
                      >
                        {/* Header */}
                        <div
                          className="flex items-center justify-between"
                          style={{ padding: '20px 28px', borderBottom: '1px solid var(--color-border)' }}
                        >
                          <div>
                            <p
                              className="text-[11px] font-bold tracking-widest uppercase mb-0.5"
                              style={{ color: 'var(--color-muted-foreground)' }}
                            >
                              Our Services
                            </p>
                            <p className="text-[12px]" style={{ color: 'var(--color-muted-foreground)' }}>
                              End-to-end technology solutions
                            </p>
                          </div>
                          <Link
                            href="/contact"
                            className="flex items-center gap-2 text-[13px] font-bold rounded-lg transition-all hover:-translate-y-0.5"
                            style={{
                              padding: '8px 16px',
                              background: '#2563eb',
                              color: 'var(--color-foreground)',
                              border: '1px solid #3b82f6',
                              boxShadow: '0 4px 14px 0 rgba(37, 99, 235, 0.39)',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = '#1d4ed8';
                              e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 99, 235, 0.23)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = '#2563eb';
                              e.currentTarget.style.boxShadow = '0 4px 14px 0 rgba(37, 99, 235, 0.39)';
                            }}
                          >
                            <Calendar className="w-3.5 h-3.5" />
                            Book a free consultation
                          </Link>
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-2 gap-3" style={{ padding: '16px 28px' }}>
                          {services.map((svc) => {
                            const Icon = svc.icon;
                            return (
                              <Link
                                key={svc.href}
                                href={svc.href}
                                className="flex items-start gap-4 rounded-xl transition-all group"
                                style={{ padding: '16px' }}
                                onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--color-surface)')}
                                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                              >
                                {/* Icon */}
                                <div
                                  className="flex items-center justify-center shrink-0 w-[42px] h-[42px] rounded-[10px] transition-all group-hover:border-[rgba(99,133,255,0.4)] group-hover:bg-[rgba(99,133,255,0.12)]"
                                  style={{
                                    background: 'var(--color-surface)',
                                    border: '1px solid var(--color-border)',
                                  }}
                                >
                                  <Icon className="w-[18px] h-[18px] transition-colors"
                                    style={{ color: 'var(--color-foreground)' }}
                                  />
                                </div>

                                {/* Text */}
                                <div className="flex-1 min-w-0 pt-0.5">
                                  <div className="flex items-center gap-1.5 mb-1">
                                    <span
                                      className="text-[14px] font-semibold transition-colors group-hover:text-[var(--color-foreground)]"
                                      style={{ color: 'var(--color-foreground)' }}
                                    >
                                      {svc.label}
                                    </span>
                                    <ArrowRight
                                      className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5"
                                      style={{ color: 'rgba(99,133,255,0.7)' }}
                                    />
                                  </div>
                                  <span
                                    className="text-[12.5px] leading-relaxed transition-colors group-hover:text-[var(--color-foreground)]"
                                    style={{ color: 'var(--color-muted-foreground)' }}
                                  >
                                    {svc.description}
                                  </span>
                                </div>
                              </Link>
                            );
                          })}
                        </div>

                        {/* Footer */}
                        <div
                          className="flex items-center gap-3"
                          style={{
                            padding: '16px 28px',
                            borderTop: '1px solid var(--color-border)',
                            background: 'var(--color-background-secondary)',
                          }}
                        >
                          <div
                            className="w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ background: 'rgba(99,133,255,0.6)' }}
                          />
                          <span className="text-[12px] flex-1" style={{ color: 'var(--color-muted-foreground)' }}>
                            Not sure where to start?
                          </span>
                          <Link
                            href="/services"
                            className="text-[12px] font-medium transition-colors"
                            style={{ color: 'rgba(99,133,255,0.7)' }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(140,165,255,1)')}
                            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(99,133,255,0.7)')}
                          >
                            View all services →
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ── Products Dropdown ── */}
                  {item.hasDropdown === 'products' && activeDropdown === 'products' && (
                    <div
                      className="absolute top-[calc(100%+12px)] left-1/2"
                      style={{ transform: 'translateX(-30%)', width: 560, zIndex: 200 }}
                    >
                      <div
                        className="rounded-2xl overflow-hidden"
                        style={{
                          background: 'var(--color-card)',
                          backdropFilter: 'blur(30px)',
                          WebkitBackdropFilter: 'blur(30px)',
                          border: '1px solid var(--color-border)',
                          boxShadow: '0 40px 80px rgba(0,0,0,0.8)',
                          animation: 'fade-in 0.2s ease-out',
                        }}
                      >
                        {/* Header */}
                        <div
                          className="flex items-center gap-3"
                          style={{ padding: '16px 24px', borderBottom: '1px solid var(--color-border)' }}
                        >
                          <div
                            className="flex items-center justify-center w-8 h-8 rounded-[8px] shrink-0"
                            style={{
                              background: 'rgba(99,133,255,0.12)',
                              border: '1px solid rgba(99,133,255,0.2)',
                            }}
                          >
                            <Package className="w-4 h-4" style={{ color: 'rgba(99,133,255,0.85)' }} />
                          </div>
                          <div>
                            <p className="text-[13px] font-semibold" style={{ color: 'var(--color-foreground)' }}>
                              Product Suite
                            </p>
                            <p className="text-[11px]" style={{ color: 'var(--color-muted-foreground)' }}>
                              8 ready-to-deploy business solutions
                            </p>
                          </div>
                        </div>

                        {/* List */}
                        <div className="grid grid-cols-2 gap-2" style={{ padding: '16px 24px' }}>
                          {products.map((product) => {
                            const Icon = product.icon;
                            return (
                              <Link
                                key={product.href}
                                href={product.href}
                                className="flex items-center gap-3 rounded-[10px] transition-all group"
                                style={{ padding: '10px 14px' }}
                                onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--color-surface)')}
                                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                              >
                                <div
                                  className="flex items-center justify-center w-8 h-8 rounded-[7px] shrink-0 transition-all group-hover:bg-[rgba(99,133,255,0.18)] group-hover:border-[rgba(99,133,255,0.3)]"
                                  style={{
                                    background: 'var(--color-surface)',
                                    border: '1px solid var(--color-border)',
                                  }}
                                >
                                  <Icon
                                    className="w-3.5 h-3.5 transition-colors group-hover:text-[rgba(140,165,255,0.9)]"
                                    style={{ color: 'var(--color-muted-foreground)' }}
                                  />
                                </div>
                                <span
                                  className="text-[13.5px] font-medium flex-1 transition-colors group-hover:text-[var(--color-foreground)]"
                                  style={{ color: 'var(--color-foreground)' }}
                                >
                                  {product.label}
                                </span>
                                <ChevronRight
                                  className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity"
                                  style={{ color: 'var(--color-muted-foreground)' }}
                                />
                              </Link>
                            );
                          })}
                        </div>

                        {/* Footer */}
                        <div
                          style={{ padding: '12px 24px 20px 24px', borderTop: '1px solid var(--color-border)' }}
                        >
                          <Link
                            href="/products"
                            className="flex items-center justify-center gap-2 w-full rounded-[10px] text-[14px] font-bold transition-all hover:-translate-y-0.5"
                            style={{
                              padding: '12px 24px',
                              background: 'var(--color-surface)',
                              color: 'var(--color-foreground)',
                              border: '1px solid var(--color-border)',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = 'var(--color-border)';
                              e.currentTarget.style.borderColor = 'var(--color-muted-foreground)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = 'var(--color-surface)';
                              e.currentTarget.style.borderColor = 'var(--color-border)';
                            }}
                          >
                            <LayoutGrid className="w-4 h-4" />
                            Browse all products
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* ── Right Controls ── */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="relative flex items-center justify-center rounded-full transition-colors"
                style={{
                  width: 38, height: 38,
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-muted-foreground)',
                }}
                aria-label="Toggle theme"
              >
                {mounted ? (
                  theme === 'dark'
                    ? <Sun className="w-[18px] h-[18px]" />
                    : <Moon className="w-[18px] h-[18px]" />
                ) : (
                  <Sun className="w-[18px] h-[18px] opacity-0" />
                )}
              </button>

              {/* Partner with Us Link */}
              <Link
                href="/partner-with-us"
                className="hidden sm:inline-flex items-center text-[14px] font-semibold transition-colors"
                style={{ color: 'var(--color-foreground)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-foreground)'}
              >
                Partner with Us
              </Link>

              {/* Login Link */}
              <Link
                href="/login"
                className="hidden sm:inline-flex items-center text-[14px] font-semibold transition-colors"
                style={{ color: 'var(--color-foreground)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-foreground)'}
              >
                Log in
              </Link>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="xl:hidden flex items-center justify-center rounded-lg transition-colors"
                style={{
                  width: 40, height: 40,
                  color: 'var(--color-foreground)',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid var(--color-border)',
                }}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile Full-Screen Overlay ── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 xl:hidden flex flex-col"
          style={{
            zIndex: 99,
            paddingTop: 72,
            background: 'rgba(5, 8, 22, 0.95)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            animation: 'fade-in 0.25s ease-out',
          }}
        >
          <nav className="flex-1 overflow-y-auto px-6 py-6">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    onClick={closeMobile}
                    className="block px-4 py-3.5 text-lg font-semibold rounded-xl transition-colors"
                    style={{ color: 'var(--color-foreground)' }}
                  >
                    {item.label}
                  </Link>

                  {item.hasDropdown === 'services' && (
                    <div className="pl-8 flex flex-col gap-0.5 mb-2">
                      {services.map((svc) => (
                        <Link
                          key={svc.href}
                          href={svc.href}
                          onClick={closeMobile}
                          className="block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors"
                          style={{ color: 'var(--color-muted-foreground)' }}
                        >
                          {svc.label}
                        </Link>
                      ))}
                    </div>
                  )}

                  {item.hasDropdown === 'products' && (
                    <div className="pl-8 flex flex-col gap-0.5 mb-2">
                      {products.map((product) => (
                        <Link
                          key={product.href}
                          href={product.href}
                          onClick={closeMobile}
                          className="block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors"
                          style={{ color: 'var(--color-muted-foreground)' }}
                        >
                          {product.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 px-4">
              <Link
                href="/contact"
                onClick={closeMobile}
                className="btn-primary w-full justify-center"
                style={{ padding: '0.875rem 2rem' }}
              >
                <span>Book Demo</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}