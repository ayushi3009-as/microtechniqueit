import type { Industry } from '@/types';

export const industries: readonly Industry[] = [
  {
    id: 'industry-01',
    slug: 'healthcare',
    title: 'Healthcare & Life Sciences',
    description:
      'We build HIPAA-aware, patient-centric digital solutions--from hospital management systems and telemedicine platforms to electronic health records--that improve care outcomes while reducing administrative overhead.',
    challenges: [
      'Fragmented patient data across departments and facilities',
      'Manual appointment scheduling causing no-shows and wait times',
      'Regulatory compliance (HIPAA, NABH) requirements',
      'Paper-based records leading to errors and slow retrieval',
      'Lack of real-time visibility into bed occupancy and resource utilisation',
    ],
    solutions: [
      'Unified Electronic Health Record (EHR) systems with interoperability',
      'AI-powered appointment scheduling and patient queue management',
      'Telemedicine platforms with video consultation and e-prescriptions',
      'Automated compliance reporting and audit trail generation',
      'Real-time dashboards for bed management and resource allocation',
    ],
    icon: 'Heart',
    image: '/images/industries/healthcare.webp',
    gradient: 'from-red-500 to-rose-600',
    seo: {
      metaTitle: 'Healthcare Software Solutions | EHR, Telemedicine & HMS | Microtechnique IT',
      metaDescription:
        'Digital solutions for healthcare--EHR systems, telemedicine platforms, hospital management & compliance tools. Microtechnique IT, Surat.',
      keywords: ['healthcare software', 'hospital management system', 'telemedicine platform India', 'EHR solutions'],
    },
  },
  {
    id: 'industry-02',
    slug: 'finance',
    title: 'Finance & Banking',
    description:
      'We engineer secure, regulation-ready fintech solutions--from digital lending platforms and payment gateways to risk analytics dashboards--that accelerate financial operations while maintaining iron-clad compliance.',
    challenges: [
      'Stringent regulatory compliance (RBI, SEBI) requirements',
      'Legacy core banking systems that resist modernisation',
      'Fraud detection and cybersecurity threats',
      'Customer demand for instant, mobile-first financial services',
      'Complex reporting requirements across multiple jurisdictions',
    ],
    solutions: [
      'Cloud-native core banking and lending platform modernisation',
      'AI-driven fraud detection and anti-money laundering systems',
      'Mobile banking apps with biometric authentication',
      'Automated regulatory reporting and compliance engines',
      'Real-time risk analytics dashboards and stress-testing tools',
    ],
    icon: 'Landmark',
    image: '/images/industries/finance.webp',
    gradient: 'from-blue-600 to-indigo-700',
    seo: {
      metaTitle: 'Finance & Banking Software Solutions | Fintech Development | Microtechnique IT',
      metaDescription:
        'Secure fintech solutions--digital lending, payment gateways, fraud detection & regulatory compliance. Microtechnique IT, Surat.',
      keywords: ['fintech development India', 'banking software', 'digital lending platform', 'finance software Surat'],
    },
  },
  {
    id: 'industry-03',
    slug: 'education',
    title: 'Education & EdTech',
    description:
      'We create immersive learning platforms--from LMS and virtual classrooms to student management systems--that empower institutions to deliver world-class education at scale.',
    challenges: [
      'Transition from traditional to blended and online learning',
      'Student engagement and retention in remote environments',
      'Manual admission, fee, and examination management processes',
      'Lack of data-driven insights into student performance',
      'Scalability challenges during peak enrollment and exam periods',
    ],
    solutions: [
      'Custom Learning Management Systems (LMS) with gamification',
      'Live virtual classroom platforms with breakout rooms and recording',
      'Automated admission, enrollment, and fee management portals',
      'AI-powered student performance analytics and early-warning systems',
      'Scalable cloud architecture for peak-load handling',
    ],
    icon: 'GraduationCap',
    image: '/images/industries/education.webp',
    gradient: 'from-emerald-500 to-teal-600',
    seo: {
      metaTitle: 'Education Software & EdTech Solutions | LMS Development | Microtechnique IT',
      metaDescription:
        'Build immersive EdTech platforms--LMS, virtual classrooms, student management & performance analytics. Microtechnique IT, Surat.',
      keywords: ['EdTech development India', 'LMS platform', 'education software', 'virtual classroom solution'],
    },
  },
  {
    id: 'industry-04',
    slug: 'ecommerce',
    title: 'E-Commerce & Retail',
    description:
      'We build high-converting e-commerce ecosystems--from headless storefronts and marketplace platforms to omnichannel inventory systems--that turn browsers into loyal customers.',
    challenges: [
      'Cart abandonment rates exceeding industry averages',
      'Managing inventory across online and offline channels',
      'Delivering personalised shopping experiences at scale',
      'Payment gateway integration and fraud prevention',
      'Competing with marketplace giants on speed and convenience',
    ],
    solutions: [
      'Headless e-commerce storefronts with sub-second page loads',
      'Omnichannel inventory management with real-time sync',
      'AI-powered product recommendations and personalisation engines',
      'Secure, multi-gateway payment processing with fraud scoring',
      'Automated order fulfilment, shipping, and returns workflows',
    ],
    icon: 'ShoppingBag',
    image: '/images/industries/ecommerce.webp',
    gradient: 'from-orange-500 to-amber-600',
    seo: {
      metaTitle: 'E-Commerce Development Solutions | Headless & Marketplace | Microtechnique IT',
      metaDescription:
        'High-converting e-commerce platforms--headless storefronts, marketplace development, omnichannel inventory & AI personalisation. Microtechnique IT.',
      keywords: ['e-commerce development India', 'headless commerce', 'online store development Surat', 'marketplace platform'],
    },
  },
  {
    id: 'industry-05',
    slug: 'logistics',
    title: 'Logistics & Supply Chain',
    description:
      'We digitise complex supply chains--from warehouse management and fleet tracking to route optimisation and last-mile delivery--helping logistics companies move goods faster and cheaper.',
    challenges: [
      'Lack of real-time visibility into shipments and fleet location',
      'Inefficient route planning leading to higher fuel costs',
      'Manual warehouse operations causing picking and packing errors',
      'Fragmented communication between shippers, carriers, and receivers',
      'Demand forecasting inaccuracies leading to over/under-stocking',
    ],
    solutions: [
      'Real-time GPS fleet tracking with geofencing and alerts',
      'AI-powered route optimisation reducing fuel costs by 20%',
      'Warehouse Management Systems (WMS) with barcode/RFID integration',
      'Unified logistics platforms connecting all supply chain stakeholders',
      'ML-based demand forecasting for optimal inventory positioning',
    ],
    icon: 'Truck',
    image: '/images/industries/logistics.webp',
    gradient: 'from-cyan-500 to-blue-600',
    seo: {
      metaTitle: 'Logistics & Supply Chain Software | Fleet Tracking & WMS | Microtechnique IT',
      metaDescription:
        'Digitise your supply chain--fleet tracking, route optimisation, warehouse management & demand forecasting. Microtechnique IT, Surat.',
      keywords: ['logistics software India', 'fleet tracking system', 'warehouse management', 'supply chain software'],
    },
  },
  {
    id: 'industry-06',
    slug: 'retail',
    title: 'Retail & Point of Sale',
    description:
      'We empower retail businesses with modern POS systems, loyalty programmes, and omnichannel strategies that drive foot traffic, increase basket size, and build lasting customer relationships.',
    challenges: [
      'Disconnected in-store and online shopping experiences',
      'Manual inventory counting leading to stockouts and overstocking',
      'Lack of customer insights for personalised marketing',
      'Slow checkout processes causing queue frustration',
      'Difficulty managing promotions across multiple channels',
    ],
    solutions: [
      'Cloud-based POS with instant checkout and contactless payments',
      'Unified omnichannel inventory with real-time stock visibility',
      'Customer loyalty programmes with personalised offers',
      'AI-driven demand planning and automated replenishment',
      'Centralised promotion engine across online and offline channels',
    ],
    icon: 'Store',
    image: '/images/industries/retail.webp',
    gradient: 'from-violet-500 to-purple-600',
    seo: {
      metaTitle: 'Retail Software & POS Solutions | Omnichannel Retail | Microtechnique IT',
      metaDescription:
        'Modern retail solutions--cloud POS, loyalty programmes, omnichannel inventory & personalised marketing. Microtechnique IT, Surat.',
      keywords: ['retail software India', 'POS system', 'omnichannel retail', 'loyalty programme software'],
    },
  },
  {
    id: 'industry-07',
    slug: 'manufacturing',
    title: 'Manufacturing & Industry 4.0',
    description:
      'We build smart manufacturing solutions--from MES and production planning to IoT-enabled quality control--that help manufacturers achieve higher throughput, lower waste, and predictive maintenance.',
    challenges: [
      'Production bottlenecks and unplanned machine downtime',
      'Manual quality control processes leading to high defect rates',
      'Lack of real-time visibility into shop-floor operations',
      'Complex Bill of Materials (BOM) management across product variants',
      'Difficulty tracking raw material costs and production efficiency',
    ],
    solutions: [
      'Manufacturing Execution Systems (MES) with real-time shop-floor dashboards',
      'IoT-enabled predictive maintenance reducing downtime by 35%',
      'Automated quality control with computer vision inspection',
      'Advanced BOM management with multi-level variant support',
      'Production cost tracking and efficiency analytics',
    ],
    icon: 'Factory',
    image: '/images/industries/manufacturing.webp',
    gradient: 'from-slate-600 to-gray-700',
    seo: {
      metaTitle: 'Manufacturing Software | MES, IoT & Industry 4.0 | Microtechnique IT',
      metaDescription:
        'Smart manufacturing solutions--MES, predictive maintenance, IoT quality control & production planning. Microtechnique IT, Surat.',
      keywords: ['manufacturing software India', 'MES system', 'Industry 4.0 solutions', 'production planning software'],
    },
  },
  {
    id: 'industry-08',
    slug: 'real-estate',
    title: 'Real Estate & PropTech',
    description:
      'We create PropTech solutions--from property management platforms and CRM systems to virtual tour experiences--that help developers, brokers, and property managers close deals faster.',
    challenges: [
      'Lead management across multiple property listings and channels',
      'Manual property documentation and agreement generation',
      'Lack of virtual viewing options for remote buyers',
      'Fragmented communication between developers, brokers, and buyers',
      'Complex payment scheduling and milestone tracking',
    ],
    solutions: [
      'Real estate CRM with automated lead scoring and nurturing',
      'Automated agreement generation and e-signature workflows',
      '360-degree virtual property tours with VR/AR integration',
      'Unified developer-broker-buyer communication portals',
      'Payment milestone tracking with automated reminder systems',
    ],
    icon: 'Building',
    image: '/images/industries/real-estate.webp',
    gradient: 'from-yellow-500 to-orange-600',
    seo: {
      metaTitle: 'Real Estate Software & PropTech Solutions | Microtechnique IT',
      metaDescription:
        'PropTech solutions--real estate CRM, property management, virtual tours & automated documentation. Microtechnique IT, Surat.',
      keywords: ['real estate software India', 'PropTech solutions', 'property management system', 'real estate CRM'],
    },
  },
  {
    id: 'industry-09',
    slug: 'hospitality',
    title: 'Hospitality & Restaurant',
    description:
      'We digitise hospitality operations--from hotel PMS and restaurant management to online booking engines--delivering seamless guest experiences that drive repeat visits and five-star reviews.',
    challenges: [
      'Manual reservation management leading to overbooking and errors',
      'Slow table turnover and inefficient kitchen operations',
      'Lack of guest preference data for personalised experiences',
      'Fragmented online presence across booking platforms',
      'Food waste from inaccurate demand prediction',
    ],
    solutions: [
      'Hotel Property Management Systems (PMS) with channel management',
      'Restaurant POS with KOT, kitchen display, and table management',
      'Centralised online booking engine with direct booking incentives',
      'Guest CRM with preference tracking and loyalty programmes',
      'AI-driven menu engineering and demand-based inventory planning',
    ],
    icon: 'UtensilsCrossed',
    image: '/images/industries/hospitality.webp',
    gradient: 'from-pink-500 to-rose-600',
    seo: {
      metaTitle: 'Hospitality & Restaurant Software | PMS & POS Solutions | Microtechnique IT',
      metaDescription:
        'Hotel PMS, restaurant POS, online booking engines & guest CRM solutions for the hospitality industry. Microtechnique IT, Surat.',
      keywords: ['hospitality software India', 'hotel PMS', 'restaurant POS system', 'booking engine development'],
    },
  },
  {
    id: 'industry-10',
    slug: 'construction',
    title: 'Construction & Infrastructure',
    description:
      'We build project management and field operations platforms for the construction industry--tracking budgets, timelines, materials, and workforce in real time across every job site.',
    challenges: [
      'Budget overruns due to poor cost tracking and estimation',
      'Schedule delays from fragmented project communication',
      'Manual material tracking leading to waste and theft',
      'Safety compliance documentation and incident reporting',
      'Difficulty managing subcontractors and vendor payments',
    ],
    solutions: [
      'Construction project management with Gantt-based scheduling',
      'Real-time budget tracking with cost-to-complete forecasting',
      'Material management with site-level consumption tracking',
      'Digital safety checklists, incident reporting, and compliance logs',
      'Subcontractor management with milestone-based payment automation',
    ],
    icon: 'HardHat',
    image: '/images/industries/construction.webp',
    gradient: 'from-amber-600 to-yellow-700',
    seo: {
      metaTitle: 'Construction Software Solutions | Project Management | Microtechnique IT',
      metaDescription:
        'Construction project management--budget tracking, scheduling, material management & safety compliance. Microtechnique IT, Surat.',
      keywords: ['construction software India', 'project management construction', 'building management system', 'construction ERP'],
    },
  },
] as const;
