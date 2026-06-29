import type { Career } from '@/types';

export const careers: readonly Career[] = [
  // â"€â"€ 1. Digital Marketing Executive â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€
  {
    id: 'career-01',
    slug: 'digital-marketing-executive',
    title: 'Digital Marketing Executive',
    department: 'Marketing',
    location: 'Surat, Gujarat',
    type: 'Full-time',
    experience: '1--3 years',
    description:
      `We\'re looking for a data-driven Digital Marketing Executive to plan, execute, and optimise multi-channel digital campaigns that generate qualified leads and drive measurable revenue growth. You\'ll work across Google Ads, Meta (Facebook/Instagram), LinkedIn, SEO, email marketing, and content--reporting directly to the marketing lead and collaborating closely with our design and development teams.`,
    responsibilities: [
      'Plan, launch, and optimise Google Ads (Search, Display, Shopping) and Meta Ads campaigns to meet lead-generation and ROAS targets',
      'Manage social media accounts--content calendars, community engagement, and performance reporting across LinkedIn, Instagram, Facebook, and Twitter',
      'Execute on-page and off-page SEO strategies including keyword research, content optimisation, link building, and technical audits',
      'Design and deploy email marketing automation campaigns and nurture sequences using tools like Mailchimp or HubSpot',
      'Analyse campaign performance using Google Analytics, Search Console, and platform-native dashboards--producing weekly and monthly reports with actionable insights',
      'Collaborate with the content team to produce blog posts, landing pages, case studies, and lead magnets',
      'Stay current with digital marketing trends, algorithm updates, and emerging platforms',
    ],
    requirements: [
      '1--3 years of hands-on digital marketing experience with demonstrable campaign results',
      'Proficiency in Google Ads, Meta Ads Manager, Google Analytics 4, and Google Search Console',
      'Strong understanding of SEO principles--on-page, technical, and off-page',
      'Experience with email marketing platforms (Mailchimp, HubSpot, or equivalent)',
      'Excellent written and verbal communication in English',
      'Analytical mindset with the ability to derive insights from data and translate them into action',
      `Bachelor\'s degree in Marketing, Communications, Business, or a related field`,
    ],
    benefits: [
      'Competitive salary with performance-based bonuses',
      'Health insurance coverage for employee and family',
      'Flexible working hours with hybrid work options',
      'Learning & development budget for courses and certifications',
      'Annual team retreats and company-sponsored events',
      'Modern office in Star World Complex, Surat, with free parking',
    ],
    seo: {
      metaTitle: 'Digital Marketing Executive Job | Surat | Microtechnique IT Careers',
      metaDescription:
        'Join Microtechnique IT as a Digital Marketing Executive in Surat. Manage Google Ads, SEO, social media & email campaigns. Apply now.',
      keywords: ['digital marketing job Surat', 'marketing executive vacancy', 'digital marketing career Gujarat'],
    },
  },

  // â"€â"€ 2. .NET Developer with MVC â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€
  {
    id: 'career-02',
    slug: 'dotnet-developer-mvc',
    title: '.NET Developer with MVC',
    department: 'Engineering',
    location: 'Surat, Gujarat',
    type: 'Full-time',
    experience: '2--5 years',
    description:
      `We\'re hiring an experienced .NET Developer with strong MVC expertise to build and maintain enterprise-grade applications--including our flagship Microtechnique Accounts ERP platform. You\'ll work on challenging projects spanning ERP, CRM, healthcare, and industry-specific software, writing clean, testable, and performant code in a collaborative Agile environment.`,
    responsibilities: [
      'Design, develop, and maintain web applications using ASP.NET MVC, .NET Core, and C#',
      'Build RESTful APIs and integrate with third-party services (payment gateways, GST portals, CRMs)',
      'Write and optimise complex SQL queries, stored procedures, and database schemas in SQL Server',
      'Implement authentication, authorisation, and role-based access control (RBAC) systems',
      'Participate in code reviews, ensuring adherence to coding standards, design patterns, and SOLID principles',
      'Collaborate with frontend developers (React) to build seamless full-stack experiences',
      'Write unit and integration tests to maintain high code coverage and reliability',
      'Troubleshoot production issues, optimise performance, and mentor junior developers',
    ],
    requirements: [
      '2--5 years of professional experience in .NET development (ASP.NET MVC, .NET Core, C#)',
      'Strong proficiency in SQL Server--complex queries, indexing, stored procedures, and performance tuning',
      'Experience building and consuming RESTful APIs',
      'Solid understanding of design patterns (MVC, Repository, Unit of Work) and SOLID principles',
      'Familiarity with frontend technologies--HTML, CSS, JavaScript, and ideally React',
      'Experience with version control (Git), CI/CD pipelines, and Agile/Scrum methodologies',
      `Bachelor\'s degree in Computer Science, IT, or a related field`,
    ],
    benefits: [
      'Competitive salary based on experience and skills',
      'Health insurance for employee and dependents',
      'Opportunity to work on flagship products used by 1,000+ businesses',
      'Regular tech talks, hackathons, and learning opportunities',
      'Flexible working hours with hybrid work policy',
      'Modern office with ergonomic workstations and recreational area',
      'Career growth path with clear promotion criteria',
    ],
    seo: {
      metaTitle: '.NET Developer with MVC Job | Surat | Microtechnique IT Careers',
      metaDescription:
        'Join Microtechnique IT as a .NET Developer (MVC) in Surat. Build enterprise ERP, CRM & healthcare applications. 2--5 years experience. Apply now.',
      keywords: ['.NET developer job Surat', 'ASP.NET MVC developer', '.NET career Gujarat', 'C# developer vacancy'],
    },
  },

  // â"€â"€ 3. Web Designer â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€
  {
    id: 'career-03',
    slug: 'web-designer',
    title: 'Web Designer',
    department: 'Design',
    location: 'Surat, Gujarat',
    type: 'Full-time',
    experience: '1--3 years',
    description:
      `We\'re looking for a creative and detail-oriented Web Designer who can transform business requirements into visually stunning, conversion-optimised, and accessible web experiences. You\'ll design responsive websites, landing pages, and web application interfaces--collaborating daily with developers and marketers to bring ideas from wireframe to pixel-perfect reality.`,
    responsibilities: [
      'Design responsive, mobile-first website layouts, landing pages, and web application interfaces in Figma',
      'Create wireframes, prototypes, and high-fidelity mockups based on project requirements and user research',
      'Develop and maintain design systems and component libraries for consistency across projects',
      'Collaborate with frontend developers to ensure designs are implemented with pixel-perfect accuracy',
      'Design marketing assets--social media graphics, email templates, presentation decks, and ad creatives',
      'Conduct basic usability testing and incorporate feedback into design iterations',
      'Stay current with UI/UX trends, web design best practices, and accessibility standards (WCAG)',
    ],
    requirements: [
      '1--3 years of professional web design experience with a strong portfolio showcasing responsive website designs',
      'Expert proficiency in Figma (required); familiarity with Adobe Creative Suite (Photoshop, Illustrator) is a plus',
      'Strong understanding of responsive design, grid systems, typography, and colour theory',
      'Basic knowledge of HTML, CSS, and how designs translate to code',
      'Understanding of UX principles--user flows, information architecture, and accessibility',
      'Excellent attention to detail and a keen eye for visual aesthetics',
      `Bachelor\'s degree or diploma in Graphic Design, Visual Communication, or a related field`,
    ],
    benefits: [
      'Competitive salary with annual performance reviews',
      'Health insurance for employee and family',
      'Creative freedom and ownership of design decisions',
      'Access to premium design tools and resources (Figma, Adobe, stock libraries)',
      'Flexible hours and hybrid work options',
      'Opportunity to design products used by thousands of businesses',
      'Collaborative, design-first culture with regular design critiques',
    ],
    seo: {
      metaTitle: 'Web Designer Job | Surat | Microtechnique IT Careers',
      metaDescription:
        'Join Microtechnique IT as a Web Designer in Surat. Design responsive websites, landing pages & web apps in Figma. 1--3 years experience. Apply now.',
      keywords: ['web designer job Surat', 'UI designer vacancy', 'web design career Gujarat', 'Figma designer job'],
    },
  },
] as const;
