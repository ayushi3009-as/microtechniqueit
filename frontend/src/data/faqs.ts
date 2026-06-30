import type { Faq } from '@/types';

export const faqs: readonly Faq[] = [
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // General (5)
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    id: 'faq-gen-01',
    question: 'What does Microtechnique IT do?',
    answer:
      'Microtechnique IT & Communication Solutions is a full-service technology company based in Surat, Gujarat. We specialise in custom software development, enterprise ERP solutions, mobile app development, web applications, digital marketing (SEO, PPC, social media), and cloud infrastructure. Since 2020 we have delivered 200+ projects for 150+ clients across healthcare, finance, retail, manufacturing, and the diamond industry.',
    category: 'General',
  },
  {
    id: 'faq-gen-02',
    question: 'Where is Microtechnique IT located?',
    answer:
      'Our office is located at Office No. G-40, Star World Complex, Green City Road, Near Bhagwan Circle, Pal Gam, Surat -- 394510, Gujarat, India. We also serve clients remotely across India and internationally.',
    category: 'General',
  },
  {
    id: 'faq-gen-03',
    question: 'Which industries do you serve?',
    answer:
      'We serve a broad range of industries including Healthcare, Finance & Banking, Education, E-Commerce, Logistics & Supply Chain, Retail, Manufacturing, Real Estate, Hospitality & Restaurants, Construction, the Diamond Industry, and Trading businesses. Our team has deep domain expertise in each sector.',
    category: 'General',
  },
  {
    id: 'faq-gen-04',
    question: 'How can I get in touch with your team?',
    answer:
      'You can reach us by phone at +91 6355997080, by email at info@Microtechnique IT.com, or by filling out the contact form on our website. For support queries, email support@Microtechnique IT.com. We typically respond within 2 business hours.',
    category: 'General',
  },
  {
    id: 'faq-gen-05',
    question: 'Do you work with startups or only large enterprises?',
    answer:
      'We work with businesses of all sizes--from bootstrapped startups building their MVP to established enterprises deploying large-scale ERP systems. Our engagement models are flexible: fixed-price projects for startups with clear scopes, and dedicated-team arrangements for enterprises needing ongoing development.',
    category: 'General',
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // Services (5)
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    id: 'faq-svc-01',
    question: 'What technologies do you use for custom software development?',
    answer:
      'We use a modern, best-in-class technology stack including React, Next.js, Vue.js, and Angular on the frontend; .NET, Node.js, Python, Laravel, and Java on the backend; PostgreSQL, SQL Server, MongoDB, and Redis for databases; and AWS, Azure, and Google Cloud for infrastructure. The specific stack is chosen based on your project requirements, scalability needs, and team expertise.',
    category: 'Services',
  },
  {
    id: 'faq-svc-02',
    question: 'Do you provide ongoing support and maintenance after project delivery?',
    answer:
      'Absolutely. We offer flexible support and maintenance plans that include bug fixes, security patches, performance monitoring, feature enhancements, and 24/7 emergency support for critical systems. Our standard SLA guarantees response within 2 hours for critical issues and 8 hours for non-critical requests.',
    category: 'Services',
  },
  {
    id: 'faq-svc-03',
    question: 'Can you build both iOS and Android apps from a single codebase?',
    answer:
      'Yes. We build cross-platform mobile applications using React Native and Flutter that deliver native-quality experiences on both iOS and Android from a single codebase. This approach reduces development time by 30--40% and ensures feature parity across platforms. For performance-critical applications, we also offer native development in Swift (iOS) and Kotlin (Android).',
    category: 'Services',
  },
  {
    id: 'faq-svc-04',
    question: 'What does your digital marketing service include?',
    answer:
      'Our digital marketing services cover the full funnel: Search Engine Optimisation (SEO), Pay-Per-Click advertising (Google Ads, Meta Ads), social media management and marketing, content marketing and copywriting, email marketing automation, landing page design and A/B testing, and analytics/reporting. Every campaign is data-driven with weekly performance reports and monthly strategy reviews.',
    category: 'Services',
  },
  {
    id: 'faq-svc-05',
    question: 'Do you help with cloud migration from on-premise servers?',
    answer:
      'Yes, we provide end-to-end cloud migration services. Our certified cloud architects assess your current infrastructure, design the target architecture on AWS, Azure, or Google Cloud, execute the migration with zero-downtime strategies, and provide ongoing cloud management and cost optimisation. We have completed 40+ migrations with 99.99% uptime SLA.',
    category: 'Services',
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // Products (5)
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    id: 'faq-prd-01',
    question: 'What is Microtechnique Accounts?',
    answer:
      'Microtechnique Accounts is our flagship ERP and accounting platform designed exclusively for Indian businesses. It includes GST-compliant invoicing, automated GSTR-1/3B filing, AI/OCR bill scanning, real-time inventory management, purchase order tracking, comprehensive ledger management, and financial reporting--all in one unified dashboard. You can start a 15-day free trial at microtechnique.in.',
    category: 'Products',
  },
  {
    id: 'faq-prd-02',
    question: 'Is Microtechnique Accounts GST-compliant?',
    answer:
      'Yes, fully. Microtechnique Accounts is built from the ground up for Indian GST compliance. It supports automated GSTR-1, GSTR-3B, and annual return filing, auto-calculates taxes based on HSN codes, handles multi-state invoicing, and generates all government-mandated reports. The software is updated promptly whenever GST regulations change.',
    category: 'Products',
  },
  {
    id: 'faq-prd-03',
    question: 'Can I try your products before purchasing?',
    answer:
      'Yes. Microtechnique Accounts offers a 15-day free trial with full feature access--no credit card required. Simply visit microtechnique.in to sign up. For our Billing & Inventory, Payroll, and Industry-Specific software, we offer free live demonstrations--contact us to schedule one.',
    category: 'Products',
  },
  {
    id: 'faq-prd-04',
    question: 'Does your payroll software handle Indian statutory compliance?',
    answer:
      'Yes. Our Payroll Management Software automatically calculates and deducts TDS, EPF, EPS, Professional Tax, and ESIC based on the latest government rules. It generates Form 16, 24Q, and all required statutory compliance reports. Visit payrollmicrotechnique.store to learn more or start a free trial.',
    category: 'Products',
  },
  {
    id: 'faq-prd-05',
    question: 'Do you offer industry-specific software for the diamond industry?',
    answer:
      `Yes. Our Diamond Suite is purpose-built for Surat\'s diamond industry and includes lot tracking, Rapaport price integration, GIA/IGI certification management, consignment workflows, party-wise outstanding reports, and a mobile app for trade shows. It\'s designed by people who understand the diamond business intimately.`,
    category: 'Products',
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // Process (5)
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    id: 'faq-prc-01',
    question: 'What is your typical project development process?',
    answer:
      'We follow a structured 6-phase process: (1) Discovery & Requirements--we conduct stakeholder interviews, map workflows, and define scope; (2) Architecture & Design--we create wireframes, prototypes, and system architecture; (3) Development--we build in 2-week agile sprints with regular demos; (4) Testing & QA--automated and manual testing for functionality, performance, and security; (5) Deployment--staged rollout with monitoring; (6) Support & Iteration--ongoing maintenance, enhancements, and optimisation.',
    category: 'Process',
  },
  {
    id: 'faq-prc-02',
    question: 'How long does a typical project take?',
    answer:
      'Timelines vary based on complexity. A marketing website typically takes 4--6 weeks. A custom web application takes 8--16 weeks. A full enterprise ERP or large-scale platform can take 16--24 weeks. During the discovery phase, we provide a detailed timeline with sprint-level milestones so you always know what to expect and when.',
    category: 'Process',
  },
  {
    id: 'faq-prc-03',
    question: 'How do you handle project communication and updates?',
    answer:
      'Transparency is core to how we work. You get: a dedicated project manager as your single point of contact; access to our project management tool (Jira/ClickUp) for real-time task tracking; bi-weekly sprint demos where you see and test working software; weekly written status reports summarising progress, blockers, and next steps; and a direct Slack/Teams channel with our development team.',
    category: 'Process',
  },
  {
    id: 'faq-prc-04',
    question: 'What are your pricing models?',
    answer:
      'We offer three engagement models: (1) Fixed Price--ideal for projects with well-defined scope and requirements; you get a detailed proposal with a firm quote before work begins. (2) Time & Materials--best for projects where scope may evolve; you pay for actual hours worked at agreed rates with full transparency. (3) Dedicated Team--a monthly-retainer model where a team of developers, designers, and QA engineers works exclusively on your project.',
    category: 'Process',
  },
  {
    id: 'faq-prc-05',
    question: 'Do you sign NDAs and ensure data security?',
    answer:
      'Yes, absolutely. We sign Non-Disclosure Agreements (NDAs) before any project discussion begins. All client data is encrypted at rest and in transit, access is limited to authorised team members on a need-to-know basis, and we follow industry-standard security practices including regular code audits, dependency scanning, and secure coding guidelines. For regulated industries, we build to HIPAA, GDPR, or SOC 2 standards as required.',
    category: 'Process',
  },
] as const;

/**
 * FAQs grouped by category for section rendering.
 */
export const faqsByCategory = {
  General: faqs.filter((f) => f.category === 'General'),
  Services: faqs.filter((f) => f.category === 'Services'),
  Products: faqs.filter((f) => f.category === 'Products'),
  Process: faqs.filter((f) => f.category === 'Process'),
} as const;
