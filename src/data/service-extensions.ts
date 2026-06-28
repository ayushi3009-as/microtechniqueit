export const serviceExtensions: Record<string, any> = {
  'software-development': {
    process: [
      { id: '1', title: 'Discovery', desc: 'Requirements & architecture mapping.' },
      { id: '2', title: 'Design', desc: 'UI/UX and database schema design.' },
      { id: '3', title: 'Development', desc: 'Agile sprints with CI/CD.' },
      { id: '4', title: 'Testing', desc: 'Automated & manual QA.' },
      { id: '5', title: 'Deployment', desc: 'Zero-downtime cloud deployment.' },
      { id: '6', title: 'Support', desc: '24/7 monitoring and scaling.' }
    ],
    techStackGroups: [
      { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind'] },
      { category: 'Backend', items: ['Node.js', '.NET', 'Python', 'Go'] },
      { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis'] },
      { category: 'Cloud', items: ['AWS', 'Docker', 'Kubernetes'] }
    ],
    faqs: [
      { q: 'How long does custom software development take?', a: 'Typically 3-6 months for an MVP, depending on complexity.' },
      { q: 'Who owns the intellectual property?', a: 'You own 100% of the IP and source code upon project completion.' },
      { q: 'Do you provide post-launch support?', a: 'Yes, we offer comprehensive SLA-based support and maintenance.' }
    ],
    testimonial: {
      quote: "Microtechnique delivered a complex ERP system that transformed our multi-branch operations. Their engineering quality is truly enterprise-grade.",
      name: "Rahul Verma",
      role: "Operations Director",
      company: "Apex Logistics",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=rahul"
    },
    comparison: [
      { feature: 'Timeline Delivery', us: '98% On-Time', others: 'Often Delayed' },
      { feature: 'Code Quality', us: 'Automated CI/CD & Testing', others: 'Manual/Ad-hoc' },
      { feature: 'Transparency', us: 'Weekly Agile Sprints', others: 'Black Box' },
      { feature: 'Support SLA', us: '99.9% Uptime Guarantee', others: 'Best Effort' }
    ],
    heroIllustration: '/images/blog/blog_custom_software.png',
    floatingLabels: ['API', 'Database', 'Microservices', 'Security']
  }
};

const defaultExtension = {
  process: [
    { id: '1', title: 'Discovery', desc: 'Deep dive into your business needs.' },
    { id: '2', title: 'Strategy', desc: 'Mapping the blueprint for success.' },
    { id: '3', title: 'Execution', desc: 'Building with precision and speed.' },
    { id: '4', title: 'Delivery', desc: 'Launching and scaling seamlessly.' }
  ],
  techStackGroups: [
    { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'PostgreSQL', 'Redis'] },
    { category: 'Infrastructure', items: ['AWS', 'Vercel', 'Docker'] }
  ],
  faqs: [
    { q: 'What is your pricing model?', a: 'We offer fixed-price contracts for well-defined scopes and retainer models for ongoing work.' },
    { q: 'How do we track progress?', a: 'We provide access to a real-time dashboard and conduct weekly review meetings.' }
  ],
  testimonial: {
    quote: "The technical execution and strategic vision provided by the team exceeded all our expectations.",
    name: "Priya Desai",
    role: "CEO",
    company: "TechNova",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=priya"
  },
  comparison: [
    { feature: 'Quality Assurance', us: 'Rigorous Automated QA', others: 'Basic Checks' },
    { feature: 'Communication', us: 'Dedicated Project Manager', others: 'Fragmented' },
    { feature: 'Scalability', us: 'Cloud-Native Architecture', others: 'Monolithic' }
  ],
  heroIllustration: '/images/blog/blog_nextjs_performance.png',
  floatingLabels: ['Analytics', 'Performance', 'Scale', 'Security']
};

export const getServiceExtension = (slug: string) => {
  return serviceExtensions[slug] || defaultExtension;
};
