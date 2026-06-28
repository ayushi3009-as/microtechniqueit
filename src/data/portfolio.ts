import type { PortfolioItem } from '@/types';

export const portfolioItems: readonly PortfolioItem[] = [
  {
    id: 'portfolio-01',
    slug: 'styleverse-ecommerce-platform',
    title: 'StyleVerse E-Commerce Platform',
    client: 'StyleVerse Fashion',
    industry: 'E-Commerce & Retail',
    description:
      'A high-performance, headless e-commerce platform handling 50,000+ SKUs with AI-powered product recommendations, real-time inventory sync across 12 warehouse locations, and a sub-1.5-second page load experience.',
    challenge:
      `StyleVerse was running on a legacy monolithic e-commerce platform that couldn\'t handle traffic surges during sale events, had a 4.8-second average page load, and offered zero personalisation--resulting in a 78% cart abandonment rate and stagnant revenue growth.`,
    solution:
      'We re-architected the platform as a headless e-commerce system using Next.js for the storefront, Node.js microservices for the backend, and PostgreSQL with Redis caching for data. We integrated an AI recommendation engine, built a real-time inventory sync system across 12 warehouses, and implemented a progressive web app with offline browsing capability.',
    results: [
      { metric: 'Revenue Increase', value: '65%' },
      { metric: 'Cart Abandonment Reduction', value: '40%' },
      { metric: 'Page Load Time', value: '1.4s (from 4.8s)' },
      { metric: 'Conversion Rate Uplift', value: '32%' },
    ],
    technologies: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Stripe'],
    timeline: '16 weeks',
    image: '/images/portfolio/styleverse-ecommerce.webp',
    seo: {
      metaTitle: 'StyleVerse E-Commerce Platform Case Study | Microtechnique IT',
      metaDescription:
        'How Microtechnique IT built a headless e-commerce platform that increased revenue by 65% and cut cart abandonment by 40%. Read the full case study.',
      keywords: ['e-commerce case study', 'headless commerce development', 'Next.js e-commerce'],
    },
  },
  {
    id: 'portfolio-02',
    slug: 'medcare-healthcare-management',
    title: 'MedCare Healthcare Management System',
    client: 'MedCare Hospital Group',
    industry: 'Healthcare',
    description:
      'A comprehensive hospital management system serving 5 hospital branches with integrated OPD/IPD management, electronic health records, telemedicine, pharmacy, and lab modules--processing 2,000+ patient interactions daily.',
    challenge:
      'MedCare Hospital Group was managing patient records across 5 branches using a combination of paper files, Excel spreadsheets, and a legacy desktop application. This led to 35-minute average patient wait times, frequent data-entry errors in prescriptions, and an inability to share patient histories across branches.',
    solution:
      'We designed and deployed a cloud-based Hospital Management System with unified EHR, automated OPD scheduling with SMS/WhatsApp reminders, integrated pharmacy and lab modules, a telemedicine portal for remote consultations, and role-based dashboards for administrators, doctors, and nursing staff.',
    results: [
      { metric: 'Patient Wait Time Reduction', value: '35%' },
      { metric: 'Prescription Errors', value: 'Near Zero' },
      { metric: 'Daily Patient Throughput', value: '2,000+' },
      { metric: 'Cross-Branch Record Access', value: 'Instant' },
    ],
    technologies: ['.NET', 'React', 'SQL Server', 'Azure', 'SignalR', 'Twilio'],
    timeline: '24 weeks',
    image: '/images/portfolio/medcare-healthcare.webp',
    seo: {
      metaTitle: 'MedCare Hospital Management System | Microtechnique IT',
      metaDescription:
        'How Microtechnique IT built a hospital management system that reduced patient wait times by 35% and eliminated prescription errors across 5 branches.',
      keywords: ['hospital management system', 'healthcare software case study', 'EHR development'],
    },
  },
  {
    id: 'portfolio-03',
    slug: 'spiceroute-restaurant-pos',
    title: 'SpiceRoute Restaurant POS & Management',
    client: 'SpiceRoute Restaurant Chain',
    industry: 'Hospitality & Restaurant',
    description:
      'A full-featured restaurant management platform with cloud POS, kitchen display system, table management, online ordering integration, and centralised multi-branch analytics--serving 8 restaurant locations.',
    challenge:
      'SpiceRoute operated 8 restaurant locations with disconnected POS systems, manual KOT (kitchen order ticket) processes, and no centralised view of sales or inventory. Average table turnover was 68 minutes, food waste exceeded 12% of inventory, and the owner had no real-time visibility into branch performance.',
    solution:
      'We built a cloud-native restaurant management platform with an intuitive POS, digital KOT with kitchen display screens, real-time table management, integration with Swiggy/Zomato for online orders, and a centralised dashboard showing live sales, inventory consumption, and staff performance across all 8 branches.',
    results: [
      { metric: 'Table Turnover Improvement', value: '22%' },
      { metric: 'Food Waste Reduction', value: '8% -> 4%' },
      { metric: 'Online Order Integration', value: 'Swiggy + Zomato' },
      { metric: 'Management Reporting', value: 'Real-Time' },
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'AWS', 'React Native'],
    timeline: '14 weeks',
    image: '/images/portfolio/spiceroute-restaurant.webp',
    seo: {
      metaTitle: 'SpiceRoute Restaurant POS System | Microtechnique IT',
      metaDescription:
        'Cloud-based restaurant POS with kitchen display, online ordering & multi-branch analytics. 22% faster table turnover. Microtechnique IT case study.',
      keywords: ['restaurant POS system', 'restaurant management software', 'cloud POS case study'],
    },
  },
  {
    id: 'portfolio-04',
    slug: 'diamondstar-inventory-system',
    title: 'Diamond Star Inventory & Trading System',
    client: 'Diamond Star Exports',
    industry: 'Diamond Industry',
    description:
      'A specialised diamond inventory and trading platform with lot tracking, Rapaport price integration, GIA/IGI certification management, consignment workflows, and real-time profit analytics for a leading Surat-based diamond exporter.',
    challenge:
      'Diamond Star Exports tracked their 15,000+ stone inventory using Excel workbooks shared across 20 team members. Rapaport price updates were entered manually, certification documents were stored in physical folders, and consignment tracking was done via WhatsApp messages--resulting in 88% inventory accuracy and significant margin leakage.',
    solution:
      'We built a purpose-designed diamond ERP with real-time Rapaport API integration, digital certification storage with OCR-powered data extraction, barcode-based lot tracking, automated consignment management with party-wise outstanding reports, and a mobile companion app for on-the-go stone search and pricing.',
    results: [
      { metric: 'Inventory Accuracy', value: '88% -> 99.5%' },
      { metric: 'Pricing Update Time', value: 'Real-Time (was 2 days)' },
      { metric: 'Monthly Reporting Time', value: 'Cut by 50%' },
      { metric: 'Stones Tracked', value: '15,000+' },
    ],
    technologies: ['.NET', 'SQL Server', 'React', 'Azure', 'OCR/AI', 'React Native'],
    timeline: '18 weeks',
    image: '/images/portfolio/diamondstar-inventory.webp',
    seo: {
      metaTitle: 'Diamond Inventory & Trading System | Microtechnique IT',
      metaDescription:
        'Specialised diamond ERP with Rapaport integration, lot tracking & certification management. Inventory accuracy improved to 99.5%. Microtechnique IT.',
      keywords: ['diamond software Surat', 'diamond inventory system', 'diamond trading platform'],
    },
  },
  {
    id: 'portfolio-05',
    slug: 'swiftship-logistics-dashboard',
    title: 'SwiftShip Logistics Dashboard & Fleet Management',
    client: 'Singh Logistics Pvt. Ltd.',
    industry: 'Logistics & Supply Chain',
    description:
      'A real-time logistics dashboard and fleet management system tracking 200+ vehicles across South India with GPS monitoring, AI route optimisation, automated dispatch, and driver performance analytics.',
    challenge:
      'Singh Logistics managed a fleet of 200+ vehicles using phone calls, paper manifests, and a basic GPS tracker with no analytical capability. Route planning was manual, fuel costs were spiraling, on-time delivery rates sat at 79%, and the operations team had no single view of fleet status.',
    solution:
      'We built a comprehensive fleet management platform with real-time GPS tracking and geofencing, AI-powered route optimisation that factors in traffic, weather, and vehicle capacity, automated dispatch with driver mobile app integration, fuel consumption analytics, and executive dashboards with drill-down KPIs.',
    results: [
      { metric: 'Fuel Cost Reduction', value: '22%' },
      { metric: 'On-Time Delivery Rate', value: '79% -> 96%' },
      { metric: 'Vehicles Tracked', value: '200+' },
      { metric: 'Dispatch Automation', value: '85% automated' },
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Google Maps API', 'AWS', 'React Native'],
    timeline: '20 weeks',
    image: '/images/portfolio/swiftship-logistics.webp',
    seo: {
      metaTitle: 'SwiftShip Logistics Fleet Management Dashboard | Microtechnique IT',
      metaDescription:
        'Real-time fleet management with AI route optimisation. Fuel costs down 22%, on-time deliveries up to 96%. Microtechnique IT case study.',
      keywords: ['fleet management system', 'logistics dashboard', 'route optimisation software'],
    },
  },
  {
    id: 'portfolio-06',
    slug: 'edunova-education-portal',
    title: 'EduNova Education Portal & LMS',
    client: 'EduNova Institute',
    industry: 'Education & EdTech',
    description:
      'A comprehensive education portal with LMS, live virtual classrooms, automated admission and fee management, student performance analytics, and a parent communication portal--serving 8,000+ students across 3 campuses.',
    challenge:
      'EduNova Institute was managing admissions via paper forms, conducting online classes on generic video platforms with no integration to their curriculum, and tracking student performance in Excel. Parents had no visibility into attendance or grades, and the administration team spent 60% of their time on manual processes.',
    solution:
      'We designed an integrated education platform with an LMS featuring video lectures, assignments, and quizzes; live virtual classrooms with breakout rooms and recording; automated admission and fee management with online payment; AI-powered student performance analytics with early-warning alerts; and a parent portal with real-time attendance and grade tracking.',
    results: [
      { metric: 'Admin Time Savings', value: '60%' },
      { metric: 'Student Engagement', value: 'Up 45%' },
      { metric: 'Students Served', value: '8,000+' },
      { metric: 'Fee Collection Rate', value: '89% -> 97%' },
    ],
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'WebRTC', 'AWS', 'Razorpay'],
    timeline: '22 weeks',
    image: '/images/portfolio/edunova-education.webp',
    seo: {
      metaTitle: 'EduNova Education Portal & LMS | Microtechnique IT',
      metaDescription:
        'Integrated education platform with LMS, virtual classrooms & student analytics. 60% admin time savings. Microtechnique IT case study.',
      keywords: ['education portal development', 'LMS case study', 'EdTech platform'],
    },
  },
] as const;
