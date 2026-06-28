import type { CaseStudy } from '@/types';

export const caseStudies: readonly CaseStudy[] = [
  // â"€â"€ 1. Healthcare â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€
  {
    id: 'case-study-01',
    slug: 'medcare-hospital-digital-transformation',
    title: 'Digital Transformation of a Multi-Branch Hospital Network',
    client: 'MedCare Hospital Group',
    industry: 'Healthcare',
    challenge:
      'MedCare Hospital Group operated 5 branches across Hyderabad with no unified patient management system. Patient records were maintained on paper and in isolated desktop applications, leading to 35-minute average OPD wait times, frequent prescription errors due to illegible handwriting, and an inability to share patient histories across branches. The hospital group was losing patients to competitors who offered faster, more modern experiences.',
    research:
      'We conducted a 3-week discovery phase that included shadowing doctors, nurses, and administrative staff across all 5 branches. We mapped 47 distinct workflows, interviewed 15 department heads, analysed 6 months of patient complaint data, and benchmarked against NABH accreditation standards. Key findings revealed that 62% of patient complaints related to wait times and 28% to billing confusion.',
    strategy:
      'We proposed a phased digital transformation roadmap: Phase 1 focused on a unified EHR and OPD scheduling system to address the most critical patient-facing pain points. Phase 2 added pharmacy, lab, and billing modules. Phase 3 introduced telemedicine and patient-facing mobile apps. This phased approach allowed the hospital to see ROI within 8 weeks of the initial deployment.',
    designApproach:
      'The UX was designed for clinical efficiency--large touch targets for tablet use, colour-coded patient status indicators, and one-click prescription templates. We conducted usability testing with 12 doctors and 20 nurses, iterating on the interface until task completion time for a typical OPD visit dropped below 4 minutes. The design system ensured visual consistency across web, tablet, and mobile interfaces.',
    development:
      'The platform was built on .NET with React for the frontend, SQL Server for the database, and Azure for cloud hosting. We used SignalR for real-time updates (e.g., lab results pushing to doctor dashboards), integrated Twilio for SMS/WhatsApp appointment reminders, and built RBAC with granular permissions for 8 distinct user roles. The system was deployed branch-by-branch over 6 weeks with parallel-run validation.',
    results: [
      { metric: 'Patient Wait Time', value: '35% reduction', description: 'Average OPD wait time dropped from 35 minutes to 22 minutes within the first month.' },
      { metric: 'Prescription Errors', value: 'Near Zero', description: 'Digital prescriptions with drug interaction alerts eliminated handwriting-related errors.' },
      { metric: 'Patient Throughput', value: '2,000+ daily', description: 'The system now processes over 2,000 patient interactions daily across all 5 branches.' },
      { metric: 'Cross-Branch Access', value: 'Instant', description: 'Doctors can access complete patient history from any branch in under 2 seconds.' },
    ],
    testimonial: {
      quote: `Implementing the hospital management system from Microtechnique IT was one of the best decisions we\'ve made. Patient wait times have decreased by 35%, and doctors have instant access to complete patient histories.`,
      name: 'Rajesh Kumar',
      role: 'Operations Head, MedCare Hospital Group',
    },
    technologies: ['.NET', 'React', 'SQL Server', 'Azure', 'SignalR', 'Twilio', 'Docker'],
    image: '/images/case-studies/medcare-hospital.webp',
    seo: {
      metaTitle: 'MedCare Hospital Digital Transformation | Case Study | Microtechnique IT',
      metaDescription:
        'How Microtechnique IT digitised a 5-branch hospital network--reducing wait times by 35%, eliminating prescription errors, and processing 2,000+ daily patient interactions.',
      keywords: ['hospital digital transformation', 'healthcare case study', 'hospital management system'],
    },
  },

  // â"€â"€ 2. E-Commerce â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€
  {
    id: 'case-study-02',
    slug: 'styleverse-ecommerce-revenue-growth',
    title: 'Driving 65% Revenue Growth Through Headless Commerce',
    client: 'StyleVerse Fashion',
    industry: 'E-Commerce',
    challenge:
      'StyleVerse, a fast-growing fashion e-commerce brand in Delhi, was operating on a legacy monolithic platform that buckled under traffic surges during sale events. Page load times averaged 4.8 seconds, the checkout flow had 7 steps, mobile experience was poor, and the platform offered zero personalisation. The result: a 78% cart abandonment rate and year-over-year revenue growth that had flatlined at 3%.',
    research:
      'We analysed 12 months of Google Analytics data, heat maps from 50,000+ sessions, and customer feedback surveys. Key findings: 45% of users abandoned due to slow load times, 23% dropped off at the 4th checkout step, and mobile users (67% of traffic) had a 2.1% conversion rate vs. 4.8% on desktop. Competitive analysis revealed that top-performing fashion e-commerce sites loaded in under 2 seconds and used AI recommendations.',
    strategy:
      'We recommended a complete re-architecture to headless commerce: a Next.js storefront decoupled from the backend, Node.js microservices for cart/checkout/inventory, and an AI recommendation engine. The checkout flow was redesigned from 7 steps to 2. We planned a "dark launch" strategy--running the new platform in shadow mode for 2 weeks before switching traffic.',
    designApproach:
      'The UX was redesigned mobile-first with a focus on speed and simplicity. Product discovery was enhanced with visual search, smart filters, and AI-curated "Looks" collections. The checkout was compressed to a single-page experience with saved addresses, multiple payment options, and real-time delivery estimates. We A/B tested 3 homepage variants before finalising the highest-converting design.',
    development:
      'The frontend was built with Next.js and Tailwind CSS for optimal performance and developer velocity. The backend comprised Node.js microservices for cart, checkout, inventory, and user management, with PostgreSQL as the primary database and Redis for caching and session management. AI recommendations were powered by a collaborative filtering model trained on 2 years of purchase data. Deployment was on AWS with CloudFront CDN.',
    results: [
      { metric: 'Revenue Growth', value: '65% increase', description: 'Online revenue grew by 65% within 3 months of the new platform launch.' },
      { metric: 'Cart Abandonment', value: '40% reduction', description: 'Cart abandonment dropped from 78% to 47% with the streamlined checkout.' },
      { metric: 'Page Load Time', value: '1.4 seconds', description: 'Average page load improved from 4.8s to 1.4s--a 71% reduction.' },
      { metric: 'Mobile Conversion', value: '2.1% -> 4.5%', description: 'Mobile conversion rate more than doubled with the mobile-first redesign.' },
    ],
    testimonial: {
      quote: 'Microtechnique IT transformed our outdated platform into a blazing-fast, conversion-optimised storefront. Within three months, our revenue jumped by 65%.',
      name: 'Riya Patel',
      role: 'Founder & CEO, StyleVerse Fashion',
    },
    technologies: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Tailwind CSS'],
    image: '/images/case-studies/styleverse-ecommerce.webp',
    seo: {
      metaTitle: 'StyleVerse E-Commerce Revenue Growth | Case Study | Microtechnique IT',
      metaDescription:
        'How headless commerce architecture drove 65% revenue growth, 40% cart abandonment reduction, and 1.4s page loads for StyleVerse Fashion. Microtechnique IT case study.',
      keywords: ['e-commerce case study', 'headless commerce', 'revenue growth case study'],
    },
  },

  // â"€â"€ 3. Diamond Industry â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€
  {
    id: 'case-study-03',
    slug: 'diamondstar-inventory-modernisation',
    title: 'Modernising Diamond Inventory Management from Excel to AI-Powered ERP',
    client: 'Diamond Star Exports',
    industry: 'Diamond Industry',
    challenge:
      `Diamond Star Exports, one of Surat\'s prominent diamond exporters, managed their 15,000+ stone inventory across Excel workbooks shared via email among 20 team members. Rapaport price updates were manually entered twice a week, GIA/IGI certification documents were stored in physical folders, and consignment tracking relied on WhatsApp messages. Inventory accuracy sat at 88%, margin leakage was estimated at 4--6% of revenue, and month-end reporting consumed an entire week of the finance team\'s time.`,
    research:
      `We spent 2 weeks embedded in Diamond Star\'s Surat office, observing the complete stone lifecycle--from rough purchase through cutting, polishing, certification, and export. We interviewed traders, sorters, the accounts team, and the owner. We mapped 23 distinct workflows and identified that 40% of the finance team\'s time was spent reconciling consignment data, and pricing errors accounted for 2.3% of lost margin.`,
    strategy:
      'We designed a diamond-specific ERP that respected the unique language of the industry--carats, clarity, cut, colour, fluorescence, and Rapaport discounts. The system would integrate directly with the Rapaport API for real-time pricing, use OCR to digitise certifications, implement barcode-based lot tracking, and automate consignment reconciliation. We planned a parallel-run period where both Excel and the new system would be used simultaneously for 4 weeks.',
    designApproach:
      'The UI was designed for speed--diamond traders need to search, filter, and price stones in seconds, not minutes. We built a powerful search interface with 14 filterable parameters (shape, weight range, clarity, colour, lab, etc.), inline price editing with Rapaport discount calculations, and a visual stone gallery with certificate thumbnails. The mobile app was designed for trade shows--allowing salespeople to search inventory and create memos on the spot.',
    development:
      'The platform was built on .NET with a React frontend and SQL Server database, hosted on Azure. The Rapaport API integration auto-updated prices every 6 hours. OCR-powered by Azure Cognitive Services extracted data from GIA/IGI certificate images. Barcode scanning was implemented for lot-level tracking with full chain-of-custody logging. The mobile app was built with React Native for both iOS and Android.',
    results: [
      { metric: 'Inventory Accuracy', value: '88% -> 99.5%', description: 'Barcode-based lot tracking and automated reconciliation pushed accuracy to 99.5%.' },
      { metric: 'Pricing Updates', value: 'Real-Time', description: 'Rapaport API integration replaced 2-day manual updates with real-time pricing.' },
      { metric: 'Reporting Time', value: '50% reduction', description: 'Month-end reporting that took a week now completes in 3 days.' },
      { metric: 'Margin Recovery', value: '3.2%', description: 'Eliminating pricing errors and consignment leakage recovered 3.2% of annual revenue.' },
    ],
    testimonial: {
      quote: 'The diamond industry software handles everything we need--lot tracking, Rapaport integration, and certification management. Our inventory accuracy went from 88% to 99.5%.',
      name: 'Karan Desai',
      role: 'Owner, Diamond Star Exports',
    },
    technologies: ['.NET', 'React', 'SQL Server', 'Azure', 'Azure Cognitive Services', 'React Native'],
    image: '/images/case-studies/diamondstar-inventory.webp',
    seo: {
      metaTitle: 'Diamond Inventory Modernisation | Case Study | Microtechnique IT',
      metaDescription:
        'How Microtechnique IT replaced Excel-based diamond tracking with an AI-powered ERP--achieving 99.5% inventory accuracy and recovering 3.2% revenue. Surat case study.',
      keywords: ['diamond software case study', 'diamond ERP Surat', 'inventory modernisation'],
    },
  },

  // â"€â"€ 4. Logistics â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€
  {
    id: 'case-study-04',
    slug: 'singh-logistics-fleet-optimisation',
    title: 'AI-Driven Fleet Optimisation for a 200+ Vehicle Logistics Company',
    client: 'Singh Logistics Pvt. Ltd.',
    industry: 'Logistics & Supply Chain',
    challenge:
      'Singh Logistics operated a fleet of 200+ trucks across South India with route planning done manually by dispatchers using local knowledge. GPS tracking was basic--showing vehicle location but offering no analytics. Fuel costs consumed 38% of revenue, on-time delivery rates were 79%, and the operations team had no consolidated view of fleet performance. Driver allocation was inefficient, with some vehicles running 30% under capacity while others were overloaded.',
    research:
      'We analysed 6 months of trip data (18,000+ trips), fuel purchase records, maintenance logs, and delivery SLA reports. GPS historical data revealed that 23% of routes included unnecessary detours. Fuel consumption analysis showed a 15% variance between the most and least efficient drivers on identical routes. Customer feedback indicated that late deliveries were the #1 complaint, cited in 41% of support tickets.',
    strategy:
      'We designed a three-layer solution: (1) a real-time fleet visibility layer with GPS tracking, geofencing, and live ETAs; (2) an AI route optimisation engine that factors in traffic patterns, weather, vehicle capacity, and delivery windows; and (3) a driver performance analytics module to identify coaching opportunities. The rollout was phased by region over 8 weeks.',
    designApproach:
      `The command-centre dashboard was designed for the operations team to manage 200+ vehicles from a single screen--with map-based visualisation, colour-coded vehicle status, and one-click drill-down into any vehicle\'s trip history and performance. The driver mobile app was kept intentionally simple--large buttons, turn-by-turn navigation, and a delivery confirmation workflow that takes under 10 seconds.`,
    development:
      'The platform was built with React for the web dashboard, Node.js microservices for the backend, PostgreSQL for transactional data, and Redis for real-time caching. Google Maps API powered the mapping and geocoding layer. The AI route optimisation engine used historical trip data and real-time traffic feeds to generate optimal routes. The driver app was built with React Native. Everything was deployed on AWS with auto-scaling for the real-time tracking workload.',
    results: [
      { metric: 'Fuel Cost Reduction', value: '22%', description: 'AI route optimisation and driver coaching reduced fuel consumption by 22% within 4 months.' },
      { metric: 'On-Time Delivery', value: '79% -> 96%', description: 'Optimised routing and real-time tracking improved on-time delivery from 79% to 96%.' },
      { metric: 'Fleet Utilisation', value: '31% improvement', description: 'Intelligent dispatch increased average vehicle utilisation by 31%.' },
      { metric: 'Dispatch Automation', value: '85%', description: '85% of dispatches are now handled automatically by the AI engine.' },
    ],
    testimonial: {
      quote: 'Microtechnique IT built a fleet management system that cut our fuel costs by 22% and pushed on-time deliveries to 96%. The AI route optimisation alone paid for the entire project in 3 months.',
      name: 'Vikram Singh',
      role: 'Managing Director, Singh Logistics Pvt. Ltd.',
    },
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Google Maps API', 'AWS', 'React Native'],
    image: '/images/case-studies/singh-logistics.webp',
    seo: {
      metaTitle: 'AI Fleet Optimisation for Logistics | Case Study | Microtechnique IT',
      metaDescription:
        'How Microtechnique IT built an AI fleet management system that reduced fuel costs by 22% and improved on-time deliveries to 96% for a 200+ vehicle logistics company.',
      keywords: ['fleet optimisation case study', 'logistics AI', 'fleet management system'],
    },
  },
] as const;
