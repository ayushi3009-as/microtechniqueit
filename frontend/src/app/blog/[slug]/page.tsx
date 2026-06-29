import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { blogPosts } from '@/data/blog-posts';

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: 'Post Not Found' };
  return { title: `${post.title} — Blog`, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    return <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-heading font-bold">Post Not Found</h1></div>;
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <article>
        <section className="relative pt-32 pb-16 overflow-hidden">
          
          <div className="container-custom relative z-10 max-w-4xl">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4">{post.category}</span>
            <h1 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span>By {post.author}</span>
              <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{post.date}</span>
              <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{post.readTime}</span>
            </div>
          </div>
        </section>

        <section className="section-padding pt-8">
          <div className="container-custom max-w-3xl">
            <div className="prose  prose-lg max-w-none text-muted-foreground leading-relaxed whitespace-pre-line">
              {post.content}
            </div>
            <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-border">
              {post.tags.map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-muted border border-border text-muted-foreground">
                  <Tag className="h-3 w-3" />{tag}
                </span>
              ))}
            </div>
          </div>
        </section>
      </article>

      {/* Related Posts */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-8 text-center">More <span className="text-accent-gradient">Articles</span></h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {relatedPosts.map((p) => (
              <Link key={p.id} href={`/blog/${p.slug}`} className="group card rounded-2xl p-6 hover:border-primary/30 transition-all hover:-translate-y-1">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-3">{p.category}</span>
                <h3 className="text-base font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'BlogPosting', headline: post.title,
        description: post.excerpt, author: { '@type': 'Person', name: post.author },
        datePublished: post.date, publisher: { '@type': 'Organization', name: 'Microtechnique IT' },
      }) }} />
    </>
  );
}
