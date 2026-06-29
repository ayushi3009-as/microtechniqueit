import type { Technology, TechnologyGroup } from '@/types';

export const technologies: readonly Technology[] = [
  // â"€â"€ Frontend â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€
  { name: 'React', icon: '/images/tech/react.svg', category: 'Frontend' },
  { name: 'Next.js', icon: '/images/tech/nextjs.svg', category: 'Frontend' },
  { name: 'Vue.js', icon: '/images/tech/vuejs.svg', category: 'Frontend' },
  { name: 'Angular', icon: '/images/tech/angular.svg', category: 'Frontend' },
  { name: 'TypeScript', icon: '/images/tech/typescript.svg', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: '/images/tech/tailwindcss.svg', category: 'Frontend' },
  { name: 'Flutter', icon: '/images/tech/flutter.svg', category: 'Frontend' },

  // â"€â"€ Backend â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€
  { name: 'Node.js', icon: '/images/tech/nodejs.svg', category: 'Backend' },
  { name: '.NET', icon: '/images/tech/dotnet.svg', category: 'Backend' },
  { name: 'Laravel', icon: '/images/tech/laravel.svg', category: 'Backend' },
  { name: 'Python', icon: '/images/tech/python.svg', category: 'Backend' },
  { name: 'Java', icon: '/images/tech/java.svg', category: 'Backend' },
  { name: 'Express', icon: '/images/tech/express.svg', category: 'Backend' },

  // â"€â"€ Mobile â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€
  { name: 'React Native', icon: '/images/tech/react-native.svg', category: 'Mobile' },
  { name: 'Flutter', icon: '/images/tech/flutter.svg', category: 'Mobile' },
  { name: 'Swift', icon: '/images/tech/swift.svg', category: 'Mobile' },
  { name: 'Kotlin', icon: '/images/tech/kotlin.svg', category: 'Mobile' },

  // â"€â"€ Database â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€
  { name: 'PostgreSQL', icon: '/images/tech/postgresql.svg', category: 'Database' },
  { name: 'MySQL', icon: '/images/tech/mysql.svg', category: 'Database' },
  { name: 'MongoDB', icon: '/images/tech/mongodb.svg', category: 'Database' },
  { name: 'Redis', icon: '/images/tech/redis.svg', category: 'Database' },

  // â"€â"€ Cloud â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€
  { name: 'AWS', icon: '/images/tech/aws.svg', category: 'Cloud' },
  { name: 'Azure', icon: '/images/tech/azure.svg', category: 'Cloud' },
  { name: 'Google Cloud', icon: '/images/tech/gcp.svg', category: 'Cloud' },
  { name: 'Docker', icon: '/images/tech/docker.svg', category: 'Cloud' },
  { name: 'Kubernetes', icon: '/images/tech/kubernetes.svg', category: 'Cloud' },

  // â"€â"€ DevOps â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€
  { name: 'GitHub Actions', icon: '/images/tech/github-actions.svg', category: 'DevOps' },
  { name: 'Jenkins', icon: '/images/tech/jenkins.svg', category: 'DevOps' },
  { name: 'Docker', icon: '/images/tech/docker.svg', category: 'DevOps' },
  { name: 'CI/CD', icon: '/images/tech/cicd.svg', category: 'DevOps' },
] as const;

/**
 * Technologies grouped by category for easy rendering in UI sections.
 */
export const technologyGroups: readonly TechnologyGroup[] = [
  {
    category: 'Frontend',
    technologies: technologies.filter((t) => t.category === 'Frontend'),
  },
  {
    category: 'Backend',
    technologies: technologies.filter((t) => t.category === 'Backend'),
  },
  {
    category: 'Mobile',
    technologies: technologies.filter((t) => t.category === 'Mobile'),
  },
  {
    category: 'Database',
    technologies: technologies.filter((t) => t.category === 'Database'),
  },
  {
    category: 'Cloud',
    technologies: technologies.filter((t) => t.category === 'Cloud'),
  },
  {
    category: 'DevOps',
    technologies: technologies.filter((t) => t.category === 'DevOps'),
  },
] as const;
