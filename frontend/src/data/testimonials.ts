import type { Testimonial } from '@/types';

export const testimonials: readonly Testimonial[] = [
  {
    id: 'testimonial-01',
    name: 'Riya Patel',
    role: 'Founder & CEO',
    company: 'StyleVerse E-Commerce',
    location: 'Delhi',
    quote:
      `Microtechnique IT transformed our outdated e-commerce platform into a blazing-fast, conversion-optimised storefront. Within three months of launch, our online revenue jumped by 65% and cart abandonment dropped by 40%. Their team didn\'t just deliver code--they delivered a growth engine.`,
    rating: 5,
    avatar: '/images/testimonials/riya-patel.webp',
  },
  {
    id: 'testimonial-02',
    name: 'Vikram Singh',
    role: 'Managing Director',
    company: 'Singh Logistics Pvt. Ltd.',
    location: 'Bangalore',
    quote:
      `We needed a fleet management and route optimisation system that could handle 200+ vehicles across South India. Microtechnique IT built exactly that--on time, on budget, and with features we hadn\'t even thought of. Fuel costs are down 22% and on-time deliveries are up to 96%. Exceptional work.`,
    rating: 5,
    avatar: '/images/testimonials/vikram-singh.webp',
  },
  {
    id: 'testimonial-03',
    name: 'Rajesh Kumar',
    role: 'Operations Head',
    company: 'MedCare Hospital Group',
    location: 'Hyderabad',
    quote:
      `Implementing the hospital management system from Microtechnique IT was one of the best decisions we\'ve made. Patient wait times have decreased by 35%, our OPD scheduling is now fully automated, and doctors have instant access to complete patient histories. The support team is responsive and truly cares about our success.`,
    rating: 5,
    avatar: '/images/testimonials/rajesh-kumar.webp',
  },
  {
    id: 'testimonial-04',
    name: 'Aarav Sharma',
    role: 'Co-Founder & CTO',
    company: 'FinEdge Technologies',
    location: 'Mumbai',
    quote:
      `As a fintech startup, we couldn\'t afford to compromise on security or scalability. Microtechnique IT delivered a cloud-native lending platform that processes 10,000+ loan applications daily without breaking a sweat. Their engineering depth--from microservices architecture to DevOps automation--is genuinely world-class.`,
    rating: 5,
    avatar: '/images/testimonials/aarav-sharma.webp',
  },
  {
    id: 'testimonial-05',
    name: 'Priya Mehta',
    role: 'Director of Finance',
    company: 'Mehta Textiles Group',
    location: 'Surat',
    quote:
      'We switched to Microtechnique Accounts for our multi-branch textile business, and the difference has been night and day. GST filing that used to take our accountant three days now takes three clicks. The AI bill scanner alone saves us 15 hours of data entry every month. I wish we had found them sooner.',
    rating: 5,
    avatar: '/images/testimonials/priya-mehta.webp',
  },
  {
    id: 'testimonial-06',
    name: 'Karan Desai',
    role: 'Owner',
    company: 'Diamond Star Exports',
    location: 'Surat',
    quote:
      `The diamond industry software from Microtechnique IT handles everything we need--lot tracking, Rapaport integration, certification management, and consignment workflows. It\'s built by people who genuinely understand our business. Our inventory accuracy went from 88% to 99.5%, and our monthly reporting time was cut in half.`,
    rating: 4,
    avatar: '/images/testimonials/karan-desai.webp',
  },
] as const;
