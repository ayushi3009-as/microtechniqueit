// =============================================================================
// Microtechnique IT & Communication Solutions -- Type Definitions
// =============================================================================

// ---------------------------------------------------------------------------
// SEO & Meta
// ---------------------------------------------------------------------------

export interface SeoMeta {
  readonly metaTitle: string;
  readonly metaDescription: string;
  readonly keywords: readonly string[];
  readonly ogImage?: string;
  readonly canonicalUrl?: string;
}

// ---------------------------------------------------------------------------
// Company
// ---------------------------------------------------------------------------

export interface Stat {
  readonly label: string;
  readonly value: number;
  readonly suffix: string;
}

export interface SocialLink {
  readonly platform: string;
  readonly url: string;
  readonly icon: string;
}

export interface CompanyInfo {
  readonly name: string;
  readonly shortName: string;
  readonly tagline: string;
  readonly description: string;
  readonly founded: number;
  readonly phone: string;
  readonly email: string;
  readonly supportEmail: string;
  readonly address: string;
  readonly city: string;
  readonly state: string;
  readonly country: string;
  readonly postalCode: string;
  readonly mapUrl: string;
  readonly website: string;
  readonly stats: readonly Stat[];
  readonly socialLinks: readonly SocialLink[];
  readonly seo: SeoMeta;
}

// ---------------------------------------------------------------------------
// Services
// ---------------------------------------------------------------------------

export interface ServiceStat {
  readonly label: string;
  readonly value: string;
}

export interface Service {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly shortTitle: string;
  readonly description: string;
  readonly longDescription: string;
  readonly icon: string;
  readonly image: string;
  readonly features: readonly string[];
  readonly benefits: readonly string[];
  readonly technologies: readonly string[];
  readonly stats: readonly ServiceStat[];
  readonly gradient: string;
  readonly seo: SeoMeta;
}

// ---------------------------------------------------------------------------
// Products
// ---------------------------------------------------------------------------

export interface PricingTier {
  readonly name: string;
  readonly price: string;
  readonly period: string;
  readonly description: string;
  readonly features: readonly string[];
  readonly highlighted: boolean;
  readonly cta: string;
}

export interface ProductModule {
  readonly name: string;
  readonly description: string;
  readonly icon: string;
}

export interface ProductFaq {
  readonly question: string;
  readonly answer: string;
}

export interface Product {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly longDescription: string;
  readonly icon: string;
  readonly image: string;
  readonly features: readonly string[];
  readonly modules: readonly ProductModule[];
  readonly pricingTiers: readonly PricingTier[];
  readonly faqs: readonly ProductFaq[];
  readonly screenshots: readonly string[];
  readonly cta: {
    readonly label: string;
    readonly href: string;
  };
  readonly seo: SeoMeta;
}

// ---------------------------------------------------------------------------
// Industries
// ---------------------------------------------------------------------------

export interface Industry {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly challenges: readonly string[];
  readonly solutions: readonly string[];
  readonly icon: string;
  readonly image: string;
  readonly gradient: string;
  readonly seo: SeoMeta;
}

// ---------------------------------------------------------------------------
// Testimonials
// ---------------------------------------------------------------------------

export interface Testimonial {
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly company: string;
  readonly location: string;
  readonly quote: string;
  readonly rating: number;
  readonly avatar: string;
}

// ---------------------------------------------------------------------------
// Team
// ---------------------------------------------------------------------------

export interface TeamMember {
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly bio: string;
  readonly avatar: string;
  readonly socialLinks: readonly SocialLink[];
}

// ---------------------------------------------------------------------------
// Portfolio
// ---------------------------------------------------------------------------

export interface PortfolioResult {
  readonly metric: string;
  readonly value: string;
}

export interface PortfolioItem {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly client: string;
  readonly industry: string;
  readonly description: string;
  readonly challenge: string;
  readonly solution: string;
  readonly results: readonly PortfolioResult[];
  readonly technologies: readonly string[];
  readonly timeline: string;
  readonly image: string;
  readonly seo: SeoMeta;
}

// ---------------------------------------------------------------------------
// Case Studies
// ---------------------------------------------------------------------------

export interface CaseStudyResult {
  readonly metric: string;
  readonly value: string;
  readonly description: string;
}

export interface CaseStudyTestimonial {
  readonly quote: string;
  readonly name: string;
  readonly role: string;
}

export interface CaseStudy {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly client: string;
  readonly industry: string;
  readonly challenge: string;
  readonly research: string;
  readonly strategy: string;
  readonly designApproach: string;
  readonly development: string;
  readonly results: readonly CaseStudyResult[];
  readonly testimonial: CaseStudyTestimonial;
  readonly technologies: readonly string[];
  readonly image: string;
  readonly seo: SeoMeta;
}

// ---------------------------------------------------------------------------
// Blog
// ---------------------------------------------------------------------------

export interface BlogPost {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly excerpt: string;
  readonly content: string;
  readonly author: string;
  readonly date: string;
  readonly category: string;
  readonly tags: readonly string[];
  readonly readTime: string;
  readonly image: string;
  readonly seo: SeoMeta;
}

// ---------------------------------------------------------------------------
// Careers
// ---------------------------------------------------------------------------

export type EmploymentType = 'Full-time' | 'Part-time' | 'Contract' | 'Internship';

export interface Career {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly department: string;
  readonly location: string;
  readonly type: EmploymentType;
  readonly experience: string;
  readonly description: string;
  readonly responsibilities: readonly string[];
  readonly requirements: readonly string[];
  readonly benefits: readonly string[];
  readonly seo: SeoMeta;
}

// ---------------------------------------------------------------------------
// Technologies
// ---------------------------------------------------------------------------

export type TechnologyCategory =
  | 'Frontend'
  | 'Backend'
  | 'Mobile'
  | 'Database'
  | 'Cloud'
  | 'DevOps';

export interface Technology {
  readonly name: string;
  readonly icon: string;
  readonly category: TechnologyCategory;
}

export interface TechnologyGroup {
  readonly category: TechnologyCategory;
  readonly technologies: readonly Technology[];
}

// ---------------------------------------------------------------------------
// FAQs
// ---------------------------------------------------------------------------

export type FaqCategory = 'General' | 'Services' | 'Products' | 'Process';

export interface Faq {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
  readonly category: FaqCategory;
}

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

export interface NavChild {
  readonly label: string;
  readonly href: string;
  readonly description?: string;
  readonly icon?: string;
}

export interface NavItem {
  readonly label: string;
  readonly href: string;
  readonly children?: readonly NavChild[];
}
