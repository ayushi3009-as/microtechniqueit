import type { Metadata } from 'next';
import ProductsClient from './products-client';

export const metadata: Metadata = {
  title: 'Our Products — Software Solutions for Indian Businesses',
  description: 'Explore Microtechnique IT products: Microtechnique Accounts ERP, Billing & Inventory, Payroll Software, and Industry-Specific Solutions. Built for Indian businesses.',
};

export default function ProductsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://microtechnique.in/#organization',
        name: 'Microtechnique IT',
        url: 'https://microtechnique.in',
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Microtechnique Accounts',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web, Windows',
        offers: {
          '@type': 'Offer',
          price: '999',
          priceCurrency: 'INR',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductsClient />
    </>
  );
}
