import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Calendar, Tag } from 'lucide-react';
import { blogPosts } from '@/data/blog-posts';

export const metadata: Metadata = {
  title: 'Blog — Insights & Resources',
  description: 'Read the latest insights on software development, AI, cloud, digital marketing, and business technology from the Microtechnique IT team.',
};

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden">
        
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link><span>/</span><span className="text-foreground">Blog</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">Insights</span>
            <h1 className="text-foreground mb-6 font-heading">Ideas, Insights & <span className="text-accent-gradient">Innovation</span></h1>
            <p className="text-lg text-muted-foreground leading-relaxed">Expert perspectives on technology, business, and digital transformation.</p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <Link href={`/blog/${featured.slug}`} className="block group">
            <div className="card rounded-3xl p-8 lg:p-12 hover:border-primary/30 transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4">{featured.category}</span>
                  <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{featured.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{featured.date}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{featured.readTime}</span>
                  </div>
                </div>
                <div className="h-64 rounded-2xl bg-pastel-blue flex items-center justify-center">
                  <span className="text-8xl font-heading font-bold text-accent-gradient opacity-20">{featured.title.charAt(0)}</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* All Posts */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group card rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                <div className="h-40 bg-pastel-blue flex items-center justify-center">
                  <span className="text-6xl font-heading font-bold text-accent-gradient opacity-15">{post.title.charAt(0)}</span>
                </div>
                <div className="p-6">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-3">{post.category}</span>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
