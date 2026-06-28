import type { Service } from '@/types';

export const services: readonly Service[] = [
  // â"€â"€ 1. Custom Software Development â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€
  {
    id: 'service-01',
    slug: 'software-development',
    title: 'Custom Software Development',
    shortTitle: 'Software Dev',
    description:
      'We architect tailor-made software that fits your workflows like a glove--eliminating inefficiency, automating manual processes, and delivering measurable ROI from day one.',
    longDescription:
      'Off-the-shelf tools force you to adapt your business to their limitations. Our custom software development practice flips that equation: we invest in deep discovery sessions with your stakeholders, map every workflow, and build scalable, cloud-ready applications that evolve alongside your enterprise. From microservices to monoliths, from internal dashboards to customer-facing portals, our engineering team ships production-grade code on predictable timelines.',
    icon: 'Code2',
    image: '/images/services/software-development.webp',
    features: [
      'End-to-end bespoke application development',
      'Microservices & event-driven architecture',
      'Legacy system modernisation & migration',
      'API design, development & integration',
      'Automated testing & CI/CD pipelines',
      'Performance tuning & scalability audits',
      'Post-launch support & iterative enhancements',
      'Compliance-ready (HIPAA, GDPR, SOC 2) builds',
    ],
    benefits: [
      'Eliminate operational bottlenecks with purpose-built tools',
      'Reduce manual effort by up to 60% through automation',
      'Scale seamlessly from 10 to 10,000 concurrent users',
      'Own your IP--no recurring vendor lock-in fees',
      'Accelerate time-to-market with agile sprints',
    ],
    technologies: ['React', 'Next.js', '.NET', 'Node.js', 'PostgreSQL', 'Docker', 'Azure'],
    stats: [
      { label: 'Projects Delivered', value: '200+' },
      { label: 'Client Retention', value: '95%' },
    ],
    gradient: 'from-blue-600 to-indigo-700',
    seo: {
      metaTitle: 'Custom Software Development Services | Microtechnique IT Surat',
      metaDescription:
        'Build scalable, enterprise-grade custom software with Microtechnique IT. 200+ projects delivered with 95% client retention. Get a free consultation today.',
      keywords: [
        'custom software development',
        'bespoke software Surat',
        'enterprise application development',
        'software company Gujarat',
      ],
    },
  },

  // â"€â"€ 2. Web Development â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€
  {
    id: 'service-02',
    slug: 'web-development',
    title: 'Web Application Development',
    shortTitle: 'Web Dev',
    description:
      'We craft blazing-fast, responsive web applications that captivate visitors, rank on Google, and convert browsers into buyers--built on modern frameworks and best-in-class UX.',
    longDescription:
      'Your website is your hardest-working salesperson--it never sleeps, never takes a day off, and reaches prospects across the globe. We build web applications on Next.js, React, and Vue.js that load in under two seconds, score 95+ on Core Web Vitals, and are engineered for conversion. Whether you need a corporate web presence, a SaaS dashboard, or a complex multi-tenant platform, we deliver pixel-perfect, SEO-ready experiences that drive revenue.',
    icon: 'Globe',
    image: '/images/services/web-development.webp',
    features: [
      'Progressive Web App (PWA) development',
      'Server-side rendering & static site generation',
      'Headless CMS & JAMstack architecture',
      'Responsive, mobile-first design systems',
      'Core Web Vitals optimisation',
      'Third-party API & payment gateway integration',
      'Web accessibility (WCAG 2.1 AA) compliance',
      'Real-time features via WebSockets',
    ],
    benefits: [
      'Achieve sub-2-second load times for higher conversions',
      'Rank higher with search-engine-optimised architecture',
      'Reach every device with fluid responsive layouts',
      'Reduce bounce rates by up to 40% with modern UX',
      'Future-proof your stack with cutting-edge frameworks',
    ],
    technologies: ['Next.js', 'React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    stats: [
      { label: 'Websites Launched', value: '120+' },
      { label: 'Avg. Lighthouse Score', value: '95+' },
    ],
    gradient: 'from-emerald-500 to-teal-600',
    seo: {
      metaTitle: 'Web Application Development Services | Microtechnique IT Surat',
      metaDescription:
        'Build high-performance web applications with Next.js, React & Vue.js. Sub-2s load times, 95+ Lighthouse scores. Microtechnique IT--120+ websites launched.',
      keywords: [
        'web development Surat',
        'Next.js development',
        'React web applications',
        'web design company Gujarat',
      ],
    },
  },

  // â"€â"€ 3. Mobile App Development â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€
  {
    id: 'service-03',
    slug: 'mobile-apps',
    title: 'Mobile App Development',
    shortTitle: 'Mobile Apps',
    description:
      'We engineer native and cross-platform mobile experiences that delight users, drive engagement, and extend your digital reach to billions of smartphone users worldwide.',
    longDescription:
      `The smartphone is the world's most personal device--and your app needs to earn a permanent spot on the home screen. We build high-performance mobile applications using React Native, Flutter, Swift, and Kotlin that deliver native-quality experiences on both iOS and Android. From concept sketching through App Store submission, our mobile team handles UX research, UI animation, offline-first architecture, push notifications, and analytics integration so you launch with confidence.`,
    icon: 'Smartphone',
    image: '/images/services/mobile-apps.webp',
    features: [
      'Cross-platform development (React Native, Flutter)',
      'Native iOS (Swift) & Android (Kotlin) development',
      'Offline-first architecture with background sync',
      'Push notification & in-app messaging systems',
      'Biometric authentication & secure data storage',
      'In-app payments & subscription management',
      'App Store Optimisation (ASO) & launch strategy',
    ],
    benefits: [
      'Launch on iOS and Android simultaneously with one codebase',
      'Increase user engagement by 3Ã-- with native-feel interactions',
      'Monetise via subscriptions, in-app purchases, or ads',
      'Extend brand reach to 6.8 billion smartphone users',
      'Collect actionable analytics from day one',
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Node.js', 'AWS'],
    stats: [
      { label: 'Apps Published', value: '45+' },
      { label: 'Combined Downloads', value: '500K+' },
    ],
    gradient: 'from-violet-500 to-purple-700',
    seo: {
      metaTitle: 'Mobile App Development Services | iOS & Android | Microtechnique IT',
      metaDescription:
        'Build stunning iOS & Android apps with React Native, Flutter, Swift & Kotlin. 45+ apps published, 500K+ downloads. Microtechnique IT, Surat.',
      keywords: [
        'mobile app development Surat',
        'React Native development',
        'Flutter app development India',
        'iOS Android app company',
      ],
    },
  },

  // â"€â"€ 4. AI & Machine Learning Solutions â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€
  {
    id: 'service-04',
    slug: 'ai-solutions',
    title: 'AI & Machine Learning Solutions',
    shortTitle: 'AI Solutions',
    description:
      'We embed artificial intelligence into your business processes--from predictive analytics and computer vision to NLP chatbots--so you can make smarter decisions at machine speed.',
    longDescription:
      'Artificial intelligence is no longer a luxury--it is a competitive necessity. Our AI practice helps enterprises move from data-rich to insight-rich by building production-grade machine-learning models, computer-vision systems, recommendation engines, and conversational AI agents. We handle the entire ML lifecycle: data engineering, feature extraction, model training, validation, deployment on scalable infrastructure, and continuous monitoring for model drift.',
    icon: 'Brain',
    image: '/images/services/ai-solutions.webp',
    features: [
      'Predictive analytics & demand forecasting',
      'Natural Language Processing (NLP) & chatbots',
      'Computer vision & image recognition',
      'Recommendation engines & personalisation',
      'OCR & intelligent document processing',
      'MLOps & model monitoring pipelines',
      'Generative AI integration (GPT, DALL-E)',
    ],
    benefits: [
      'Forecast demand with up to 92% accuracy',
      'Automate customer support and cut ticket volume by 45%',
      'Unlock hidden patterns in petabytes of enterprise data',
      'Reduce manual document processing time by 70%',
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'AWS SageMaker', 'Docker', 'FastAPI'],
    stats: [
      { label: 'AI Models Deployed', value: '30+' },
      { label: 'Avg. Accuracy', value: '92%' },
    ],
    gradient: 'from-amber-500 to-orange-600',
    seo: {
      metaTitle: 'AI & Machine Learning Solutions | Microtechnique IT Surat',
      metaDescription:
        'Harness AI for predictive analytics, NLP chatbots, computer vision & OCR. 30+ models deployed with 92% avg. accuracy. Microtechnique IT.',
      keywords: [
        'AI solutions India',
        'machine learning development',
        'NLP chatbot development',
        'computer vision services Surat',
      ],
    },
  },

  // â"€â"€ 5. Enterprise ERP Solutions â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€
  {
    id: 'service-05',
    slug: 'enterprise-erp',
    title: 'Enterprise ERP Solutions',
    shortTitle: 'ERP Solutions',
    description:
      'We design and deploy end-to-end ERP systems that unify your finance, inventory, HR, and operations under a single dashboard--eliminating data silos and accelerating decision-making.',
    longDescription:
      'Fragmented tools and spreadsheet-driven processes cost growing enterprises millions in lost productivity. Our ERP solutions consolidate every department--finance, procurement, inventory, manufacturing, HR, and CRM--into a unified, real-time platform built on modern cloud architecture. Whether you choose our flagship Microtechnique Accounts or need a ground-up custom ERP, we deliver systems that scale from a single office to a multi-location enterprise.',
    icon: 'Building2',
    image: '/images/services/enterprise-erp.webp',
    features: [
      'Unified finance, inventory & procurement modules',
      'GST-compliant billing & GSTR filing',
      'Multi-branch & multi-warehouse support',
      'Role-based access & audit trails',
      'Real-time dashboards & executive reporting',
      'Workflow automation & approval chains',
      'Third-party integration (banks, logistics, e-commerce)',
      'On-premise & cloud deployment options',
    ],
    benefits: [
      'Eliminate data silos across departments',
      'Cut month-end close time by 50% or more',
      'Gain real-time visibility into cash flow & inventory',
      'Ensure 100% GST compliance with automated filing',
      'Scale seamlessly as you add locations or business units',
    ],
    technologies: ['.NET', 'SQL Server', 'React', 'Azure', 'Redis', 'Docker', 'Power BI'],
    stats: [
      { label: 'ERP Deployments', value: '60+' },
      { label: 'Avg. Efficiency Gain', value: '40%' },
    ],
    gradient: 'from-rose-500 to-red-600',
    seo: {
      metaTitle: 'Enterprise ERP Solutions | GST-Compliant | Microtechnique IT',
      metaDescription:
        'Deploy GST-compliant ERP systems that unify finance, inventory & HR. 60+ deployments with 40% avg. efficiency gains. Microtechnique IT, Surat.',
      keywords: [
        'ERP solutions India',
        'enterprise resource planning Surat',
        'GST ERP software',
        'custom ERP development',
      ],
    },
  },

  // â"€â"€ 6. CRM Solutions â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€
  {
    id: 'service-06',
    slug: 'crm-solutions',
    title: 'CRM Solutions',
    shortTitle: 'CRM',
    description:
      'We build intelligent CRM platforms that give your sales, marketing, and support teams a 360-degree view of every customer--driving retention, upsells, and lifetime value.',
    longDescription:
      'Customer relationships are your most valuable asset, yet most businesses manage them across disconnected email threads, spreadsheets, and sticky notes. Our CRM solutions centralise every interaction--calls, emails, meetings, support tickets, and purchase history--into an intuitive platform that surfaces actionable insights. With built-in automation, lead scoring, pipeline management, and AI-driven next-best-action recommendations, your revenue teams close deals faster and keep customers longer.',
    icon: 'Users',
    image: '/images/services/crm-solutions.webp',
    features: [
      '360-degree customer profiles & interaction history',
      'Visual sales pipeline & deal tracking',
      'AI-powered lead scoring & prioritisation',
      'Marketing automation & email campaigns',
      'Omnichannel support ticketing system',
      'Custom reports, dashboards & KPI tracking',
      'WhatsApp, SMS & telephony integration',
    ],
    benefits: [
      'Shorten sales cycles by up to 28%',
      'Increase deal close rates with AI lead scoring',
      'Improve customer retention through proactive engagement',
      'Eliminate revenue leakage with pipeline visibility',
      'Empower field teams with mobile CRM access',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Elasticsearch', 'AWS', 'Docker'],
    stats: [
      { label: 'CRM Implementations', value: '35+' },
      { label: 'Avg. Sales Uplift', value: '28%' },
    ],
    gradient: 'from-cyan-500 to-blue-600',
    seo: {
      metaTitle: 'Custom CRM Solutions | Sales & Marketing Automation | Microtechnique IT',
      metaDescription:
        'Build a 360-degree CRM with AI lead scoring, pipeline management & marketing automation. 35+ implementations. Microtechnique IT, Surat.',
      keywords: [
        'CRM development India',
        'custom CRM solutions',
        'sales automation software',
        'CRM company Surat',
      ],
    },
  },

  // â"€â"€ 7. Cloud Services â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€
  {
    id: 'service-07',
    slug: 'cloud-services',
    title: 'Cloud Infrastructure & DevOps',
    shortTitle: 'Cloud & DevOps',
    description:
      'We design resilient, cost-optimised cloud architectures on AWS, Azure, and GCP--then automate everything with CI/CD pipelines, Infrastructure-as-Code, and 24/7 monitoring.',
    longDescription:
      'Cloud is not just a hosting decision--it is a strategic lever that determines how fast you innovate, how reliably you operate, and how securely you scale. Our certified cloud engineers assess your workloads, design multi-AZ architectures with auto-scaling and disaster recovery, migrate existing systems with zero downtime, and implement GitOps-driven CI/CD pipelines that ship features multiple times a day. We manage, monitor, and continuously optimise your infrastructure so you can focus on building products.',
    icon: 'Cloud',
    image: '/images/services/cloud-services.webp',
    features: [
      'Cloud architecture design & well-architected reviews',
      'AWS, Azure & Google Cloud deployments',
      'Containerisation with Docker & Kubernetes',
      'Infrastructure as Code (Terraform, Pulumi)',
      'CI/CD pipeline design (GitHub Actions, Jenkins)',
      'Zero-downtime migration strategies',
      '24/7 monitoring, alerting & incident response',
      'Cost optimisation & reserved instance planning',
    ],
    benefits: [
      'Achieve 99.99% uptime with multi-AZ architecture',
      'Reduce infrastructure costs by up to 35%',
      'Ship features 5Ã-- faster with automated CI/CD',
      'Scale instantly to handle traffic spikes',
      'Improve security posture with cloud-native controls',
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
    stats: [
      { label: 'Cloud Migrations', value: '40+' },
      { label: 'Uptime SLA', value: '99.99%' },
    ],
    gradient: 'from-sky-500 to-indigo-600',
    seo: {
      metaTitle: 'Cloud Infrastructure & DevOps Services | AWS Azure GCP | Microtechnique IT',
      metaDescription:
        'Design resilient cloud architectures on AWS, Azure & GCP with CI/CD automation. 99.99% uptime SLA, 40+ migrations. Microtechnique IT, Surat.',
      keywords: [
        'cloud services Surat',
        'AWS Azure consulting India',
        'DevOps automation',
        'cloud migration services',
      ],
    },
  },

  // â"€â"€ 8. Digital Marketing â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€
  {
    id: 'service-08',
    slug: 'digital-marketing',
    title: 'Digital Marketing & Growth',
    shortTitle: 'Digital Marketing',
    description:
      'We craft data-driven digital marketing strategies--spanning PPC, social media, content marketing, and email automation--that fill your pipeline with qualified leads and measurable ROI.',
    longDescription:
      'Visibility without strategy is just noise. Our digital marketing team combines creative storytelling with rigorous analytics to build campaigns that attract, engage, and convert your ideal customers. From Google Ads and Meta campaigns to LinkedIn outreach and marketing automation, every rupee you invest is tracked, optimised, and reported on weekly. We do not chase vanity metrics--we chase revenue.',
    icon: 'Megaphone',
    image: '/images/services/digital-marketing.webp',
    features: [
      'Google Ads & Meta (Facebook/Instagram) campaign management',
      'LinkedIn advertising & B2B lead generation',
      'Social media management & content calendars',
      'Email marketing automation & drip campaigns',
      'Content marketing & thought leadership',
      'Landing page design & A/B testing',
      'Marketing analytics & attribution modelling',
    ],
    benefits: [
      'Generate 3Ã-- more qualified leads per marketing rupee',
      'Achieve 200--400% ROAS on paid campaigns',
      'Build brand authority with consistent content',
      'Nurture prospects automatically through the funnel',
      'Make data-backed decisions with weekly reporting',
    ],
    technologies: ['Google Ads', 'Meta Ads', 'Mailchimp', 'HubSpot', 'Google Analytics', 'Semrush'],
    stats: [
      { label: 'Campaigns Managed', value: '150+' },
      { label: 'Avg. ROAS', value: '350%' },
    ],
    gradient: 'from-pink-500 to-rose-600',
    seo: {
      metaTitle: 'Digital Marketing Services | PPC, Social Media & Content | Microtechnique IT',
      metaDescription:
        'Drive qualified leads with data-driven PPC, social media & content marketing. 350% avg. ROAS across 150+ campaigns. Microtechnique IT, Surat.',
      keywords: [
        'digital marketing Surat',
        'PPC management India',
        'social media marketing Gujarat',
        'content marketing agency',
      ],
    },
  },

  // â"€â"€ 9. SEO Services â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€
  {
    id: 'service-09',
    slug: 'seo-services',
    title: 'Search Engine Optimisation (SEO)',
    shortTitle: 'SEO',
    description:
      'We engineer organic search dominance--combining technical SEO, strategic content, and authoritative link-building to put your brand on Page 1 of Google for the keywords that matter most.',
    longDescription:
      'Ranking on Google is not luck--it is engineering. Our SEO team conducts exhaustive keyword research, competitive gap analysis, and technical audits to build a roadmap that moves the needle month over month. We optimise on-page elements, fix crawlability issues, produce high-authority content, earn quality backlinks, and track rankings with surgical precision. The result: sustainable organic traffic that compounds over time and reduces your dependence on paid advertising.',
    icon: 'Search',
    image: '/images/services/seo-services.webp',
    features: [
      'Technical SEO audits & Core Web Vitals optimisation',
      'Keyword research & competitive gap analysis',
      'On-page SEO (meta tags, schema, internal linking)',
      'Content strategy & SEO copywriting',
      'Link building & digital PR outreach',
      'Local SEO & Google Business Profile optimisation',
      'Monthly ranking reports & analytics dashboards',
    ],
    benefits: [
      'Achieve Page 1 rankings for high-intent keywords',
      'Increase organic traffic by 150--300% in 6 months',
      'Reduce customer acquisition cost vs. paid channels',
      'Build long-term brand authority & trust',
      'Gain a compounding traffic asset that grows over time',
    ],
    technologies: ['Semrush', 'Ahrefs', 'Google Search Console', 'Screaming Frog', 'Surfer SEO'],
    stats: [
      { label: 'Keywords on Page 1', value: '500+' },
      { label: 'Avg. Traffic Growth', value: '250%' },
    ],
    gradient: 'from-lime-500 to-green-600',
    seo: {
      metaTitle: 'SEO Services | Rank #1 on Google | Microtechnique IT Surat',
      metaDescription:
        'Dominate Google search results with technical SEO, content strategy & link building. 500+ Page 1 rankings, 250% avg. traffic growth. Microtechnique IT.',
      keywords: [
        'SEO services Surat',
        'search engine optimisation India',
        'local SEO Gujarat',
        'SEO company Surat',
      ],
    },
  },

  // â"€â"€ 10. Accounting Software Solutions â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€
  {
    id: 'service-10',
    slug: 'accounting-software',
    title: 'Accounting & Billing Software',
    shortTitle: 'Accounting Software',
    description:
      'We develop GST-compliant accounting and billing software--including our flagship Microtechnique Accounts--that automates invoicing, inventory, and financial reporting for Indian businesses.',
    longDescription:
      'Indian businesses face unique compliance challenges: GST filing, TDS management, multi-state invoicing, and ever-changing tax regulations. Our accounting software solutions--anchored by the Microtechnique Accounts platform--are purpose-built for the Indian market. From automated GSTR-1/3B filing and AI-powered bill scanning to real-time inventory tracking and comprehensive ledger management, we eliminate the spreadsheet chaos and give you financial clarity at a glance.',
    icon: 'Calculator',
    image: '/images/services/accounting-software.webp',
    features: [
      'GST-compliant invoicing & billing',
      'Automated GSTR-1, GSTR-3B & annual returns',
      'AI/OCR-powered bill scanning & data entry',
      'Real-time inventory & stock management',
      'Purchase order & vendor management',
      'Multi-user access with role-based permissions',
      'Financial reports: P&L, balance sheet, cash flow',
      'Bank reconciliation & payment tracking',
    ],
    benefits: [
      'File GST returns in minutes, not hours',
      'Eliminate manual data entry errors with AI/OCR',
      'Get real-time visibility into cash flow & receivables',
      'Manage unlimited branches from one dashboard',
      'Start free with a 15-day no-commitment trial',
    ],
    technologies: ['.NET', 'SQL Server', 'React', 'Azure', 'OCR/AI', 'REST APIs'],
    stats: [
      { label: 'Active Users', value: '1,000+' },
      { label: 'GST Returns Filed', value: '10K+' },
    ],
    gradient: 'from-yellow-500 to-amber-600',
    seo: {
      metaTitle: 'Accounting & Billing Software | GST-Compliant | Microtechnique IT',
      metaDescription:
        'Automate GST invoicing, GSTR filing, inventory & financial reporting with Microtechnique Accounts. 1,000+ active users. 15-day free trial.',
      keywords: [
        'accounting software India',
        'GST billing software',
        'invoicing software Surat',
        'Microtechnique Accounts',
      ],
    },
  },
] as const;
