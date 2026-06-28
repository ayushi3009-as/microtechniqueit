import type { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { products } from '@/data/products';
import { industries } from '@/data/industries';
import { blogPosts } from '@/data/blog-posts';
import { caseStudies } from '@/data/case-studies';
import { careers } from '@/data/careers';

const BASE = 'https://microtechniqueit.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/products`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/industries`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/portfolio`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/case-studies`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/careers`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.6 },
    { url: `${BASE}/technologies`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE}/partner`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE}/services/${s.slug}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7,
  }));

  const productPages: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${BASE}/products/${p.slug}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7,
  }));

  const industryPages: MetadataRoute.Sitemap = industries.map((i) => ({
    url: `${BASE}/industries/${i.slug}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((b) => ({
    url: `${BASE}/blog/${b.slug}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6,
  }));

  const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map((cs) => ({
    url: `${BASE}/case-studies/${cs.slug}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6,
  }));

  const careerPages: MetadataRoute.Sitemap = careers.map((c) => ({
    url: `${BASE}/careers/${c.slug}`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.5,
  }));

  return [...staticPages, ...servicePages, ...productPages, ...industryPages, ...blogPages, ...caseStudyPages, ...careerPages];
}
