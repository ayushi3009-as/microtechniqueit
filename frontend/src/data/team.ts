import type { TeamMember } from '@/types';

export const teamMembers: readonly TeamMember[] = [
  {
    id: 'team-01',
    name: 'Mr. Garvit Dubey',
    role: 'Chief Technology Officer (CTO)',
    bio: 'Garvit leads the technology vision and engineering strategy at Microtechnique IT, overseeing a team of 50+ developers and architects. With deep expertise in cloud-native architectures, enterprise ERP systems, and AI/ML, he has personally architected over 80 mission-critical projects across healthcare, finance, and manufacturing verticals. Under his leadership, the company has achieved a 95% client retention rate and delivered solutions that process millions of transactions daily.',
    avatar: '/images/team/garvit-dubey.webp',
    socialLinks: [
      { platform: 'LinkedIn', url: '#', icon: 'linkedin' },
      { platform: 'Twitter', url: '#', icon: 'twitter' },
    ],
  },
  {
    id: 'team-02',
    name: 'Mrs. Varsha Pandey',
    role: 'Head of Human Resources',
    bio: `Varsha drives the people strategy that makes Microtechnique IT one of Surat\'s most sought-after tech employers. She has built a culture-first hiring framework that attracts top engineering talent while maintaining a 92% employee satisfaction score. From onboarding and professional development to performance management and wellness initiatives, Varsha ensures every team member has the tools and environment to do their best work.`,
    avatar: '/images/team/varsha-pandey.webp',
    socialLinks: [
      { platform: 'LinkedIn', url: '#', icon: 'linkedin' },
    ],
  },
] as const;
