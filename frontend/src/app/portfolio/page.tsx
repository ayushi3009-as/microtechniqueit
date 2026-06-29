import type { Metadata } from 'next';
import PortfolioClient from './portfolio-client';
import { portfolioItems } from '@/data/portfolio';

export const metadata: Metadata = {
  title: 'Portfolio — Our Work & Projects',
  description: 'Explore Microtechnique IT portfolio of successful projects across healthcare, e-commerce, logistics, manufacturing, education, and more.',
};

export default function PortfolioPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: portfolioItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'CreativeWork',
        name: item.title,
        description: item.description,
        url: `https://microtechnique.com/portfolio/${item.slug}`,
        author: {
          '@type': 'Organization',
          name: 'Microtechnique IT',
        }
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PortfolioClient />
    </>
  );
}
