import type { NavItem } from '@/types';

export const mainNavigation: readonly NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      {
        label: 'Custom Software Development',
        href: '/services/software-development',
        description: 'Bespoke applications tailored to your workflows',
        icon: 'Code2',
      },
      {
        label: 'Web Application Development',
        href: '/services/web-development',
        description: 'Blazing-fast websites on Next.js, React & Vue.js',
        icon: 'Globe',
      },
      {
        label: 'Mobile App Development',
        href: '/services/mobile-apps',
        description: 'Native & cross-platform apps for iOS and Android',
        icon: 'Smartphone',
      },
      {
        label: 'AI & Machine Learning',
        href: '/services/ai-solutions',
        description: 'Predictive analytics, NLP, computer vision & more',
        icon: 'Brain',
      },
      {
        label: 'Enterprise ERP Solutions',
        href: '/services/enterprise-erp',
        description: 'Unified finance, inventory & operations management',
        icon: 'Building2',
      },
      {
        label: 'CRM Solutions',
        href: '/services/crm-solutions',
        description: '360-degree customer management & sales automation',
        icon: 'Users',
      },
      {
        label: 'Cloud & DevOps',
        href: '/services/cloud-services',
        description: 'AWS, Azure, GCP architecture & CI/CD automation',
        icon: 'Cloud',
      },
      {
        label: 'Digital Marketing',
        href: '/services/digital-marketing',
        description: 'PPC, social media, content & growth marketing',
        icon: 'Megaphone',
      },
      {
        label: 'SEO Services',
        href: '/services/seo-services',
        description: 'Organic search domination & local SEO',
        icon: 'Search',
      },
      {
        label: 'Accounting Software',
        href: '/services/accounting-software',
        description: 'GST-compliant billing, invoicing & ERP',
        icon: 'Calculator',
      },
    ],
  },
  {
    label: 'Products',
    href: '/products',
    children: [
      {
        label: 'Microtechnique Accounts',
        href: '/products/microtechnique-accounts',
        description: 'Flagship ERP with GST billing, AI/OCR & inventory',
        icon: 'Calculator',
      },
      {
        label: 'Billing & Inventory',
        href: '/products/billing-inventory',
        description: 'Multi-store billing with barcode scanning',
        icon: 'Package',
      },
      {
        label: 'Payroll Software',
        href: '/products/payroll-software',
        description: 'Automated payroll with TDS, PF & ESIC compliance',
        icon: 'Wallet',
      },
      {
        label: 'Industry-Specific Software',
        href: '/products/industry-specific-software',
        description: 'Tailored solutions for retail, restaurant & diamond',
        icon: 'Factory',
      },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
    children: [
      {
        label: 'Healthcare',
        href: '/industries/healthcare',
        description: 'EHR, telemedicine & hospital management',
        icon: 'Heart',
      },
      {
        label: 'Finance & Banking',
        href: '/industries/finance',
        description: 'Fintech, lending platforms & compliance',
        icon: 'Landmark',
      },
      {
        label: 'Education',
        href: '/industries/education',
        description: 'LMS, virtual classrooms & student analytics',
        icon: 'GraduationCap',
      },
      {
        label: 'E-Commerce',
        href: '/industries/ecommerce',
        description: 'Headless storefronts & marketplace platforms',
        icon: 'ShoppingBag',
      },
      {
        label: 'Logistics',
        href: '/industries/logistics',
        description: 'Fleet tracking, WMS & route optimisation',
        icon: 'Truck',
      },
      {
        label: 'Retail',
        href: '/industries/retail',
        description: 'Cloud POS, loyalty & omnichannel inventory',
        icon: 'Store',
      },
      {
        label: 'Manufacturing',
        href: '/industries/manufacturing',
        description: 'MES, predictive maintenance & quality control',
        icon: 'Factory',
      },
      {
        label: 'Real Estate',
        href: '/industries/real-estate',
        description: 'PropTech CRM, virtual tours & documentation',
        icon: 'Building',
      },
      {
        label: 'Hospitality',
        href: '/industries/hospitality',
        description: 'Hotel PMS, restaurant POS & booking engines',
        icon: 'UtensilsCrossed',
      },
      {
        label: 'Construction',
        href: '/industries/construction',
        description: 'Project management, budgets & safety compliance',
        icon: 'HardHat',
      },
    ],
  },
  {
    label: 'Portfolio',
    href: '/portfolio',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Careers',
    href: '/careers',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
] as const;

/**
 * Footer navigation organised by column.
 */
export const footerNavigation = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/about#team' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Software Development', href: '/services/software-development' },
    { label: 'Web Development', href: '/services/web-development' },
    { label: 'Mobile Apps', href: '/services/mobile-apps' },
    { label: 'Digital Marketing', href: '/services/digital-marketing' },
    { label: 'Cloud & DevOps', href: '/services/cloud-services' },
  ],
  products: [
    { label: 'Microtechnique Accounts', href: '/products/microtechnique-accounts' },
    { label: 'Billing & Inventory', href: '/products/billing-inventory' },
    { label: 'Payroll Software', href: '/products/payroll-software' },
    { label: 'Industry Solutions', href: '/products/industry-specific-software' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
    { label: 'Refund Policy', href: '/refund-policy' },
  ],
} as const;
