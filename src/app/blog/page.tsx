import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Calendar, User, Tag } from 'lucide-react';
import { blogPosts } from '@/data/blog-posts';

export const metadata: Metadata = {
  title: 'Blog — Insights & Resources',
  description: 'Read the latest insights on software development, AI, cloud, digital marketing, and business technology from the Microtechnique IT team.',
};

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .blog-page-container {
          font-family: var(--font-sans, system-ui, -apple-system, sans-serif);
          background-color: #050505;
          color: #f1f5f9;
          min-height: 100vh;
        }
        
        .blog-wrapper {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 5%;
        }

        .blog-hero {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 120px 0 80px 0;
          gap: 60px;
        }

        .blog-hero-content {
          flex: 1;
          max-width: 580px;
        }

        .blog-hero-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 100px;
          font-size: 0.875rem;
          font-weight: 600;
          background: rgba(59, 130, 246, 0.1);
          color: #60a5fa;
          border: 1px solid rgba(59, 130, 246, 0.2);
          margin-bottom: 32px;
        }

        .blog-hero-title {
          font-size: 4.5rem;
          line-height: 1.05;
          font-weight: 800;
          margin-bottom: 24px;
          letter-spacing: -0.03em;
        }

        .blog-hero-title span {
          background: linear-gradient(135deg, #60a5fa, #c084fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .blog-hero-desc {
          font-size: 1.25rem;
          line-height: 1.6;
          color: #94a3b8;
          max-width: 480px; /* Narrow paragraph */
        }

        .blog-hero-image-wrapper {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          position: relative;
        }

        .blog-hero-image-wrapper::before {
          content: "";
          position: absolute;
          inset: 10%;
          background: #3b82f6;
          filter: blur(100px);
          opacity: 0.15;
          border-radius: 50%;
        }

        .blog-hero-img {
          width: 100%;
          max-width: 500px;
          height: auto;
          border-radius: 32px;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
          transform: perspective(1000px) rotateY(-8deg) rotateX(4deg);
          transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
          position: relative;
          z-index: 2;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .blog-hero-img:hover {
          transform: perspective(1000px) rotateY(0deg) rotateX(0deg);
        }

        .featured-section {
          padding: 80px 0;
        }

        .section-title {
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 40px;
          color: #f8fafc;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .section-title-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, rgba(255, 255, 255, 0.1), transparent);
        }

        .featured-card {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 60px;
          background: linear-gradient(145deg, #111318, #0a0b0e);
          border-radius: 40px;
          padding: 60px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
          text-decoration: none;
          color: inherit;
          align-items: center;
        }

        .featured-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.5);
          border-color: rgba(59, 130, 246, 0.3);
        }

        .featured-content {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .featured-meta {
          display: flex;
          align-items: center;
          gap: 20px;
          font-size: 0.9rem;
          color: #94a3b8;
          flex-wrap: wrap;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .featured-cat {
          background: rgba(192, 132, 252, 0.1);
          color: #c084fc;
          padding: 6px 16px;
          border-radius: 100px;
          font-weight: 600;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: inline-block;
        }

        .featured-title {
          font-size: 2.75rem;
          line-height: 1.15;
          font-weight: 800;
          color: #f8fafc;
          transition: color 0.3s ease;
          letter-spacing: -0.02em;
        }

        .featured-card:hover .featured-title {
          color: #60a5fa;
        }

        .featured-excerpt {
          font-size: 1.125rem;
          line-height: 1.7;
          color: #cbd5e1;
          max-width: 460px; /* Narrow width */
        }

        .featured-image-container {
          width: 100%;
          height: 480px;
          border-radius: 28px;
          background: #2dd4bf;
          background-image: linear-gradient(135deg, #1e3a8a 0%, #4c1d95 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3) inset;
        }
        
        .featured-image-container::after {
          content: "";
          position: absolute;
          inset: 0;
          background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
          z-index: 1;
        }

        .featured-image-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          inset: 0;
          z-index: 2;
          transition: transform 0.8s ease;
        }

        .featured-card:hover .featured-image-img {
          transform: scale(1.05);
        }

        .featured-letter {
          font-size: 10rem;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.1);
          z-index: 0;
        }

        .sticky-nav {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(5, 5, 5, 0.85);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          padding: 24px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          margin-bottom: 60px;
        }

        .category-list {
          display: flex;
          align-items: center;
          gap: 12px;
          overflow-x: auto;
          scrollbar-width: none;
        }

        .category-list::-webkit-scrollbar {
          display: none;
        }

        .cat-btn {
          padding: 10px 24px;
          border-radius: 100px;
          background: rgba(255, 255, 255, 0.03);
          color: #94a3b8;
          font-weight: 600;
          font-size: 0.9rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          white-space: nowrap;
        }

        .cat-btn:hover {
          background: rgba(255, 255, 255, 0.08);
          color: #f8fafc;
        }

        .cat-btn.active {
          background: #3b82f6;
          color: #ffffff;
          border-color: #3b82f6;
          box-shadow: 0 4px 20px rgba(59, 130, 246, 0.4);
        }

        .grid-section {
          padding-bottom: 140px;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
          gap: 40px;
        }

        .grid-card {
          background: #0f1115;
          border-radius: 28px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          overflow: hidden;
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease, border-color 0.4s ease;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          color: inherit;
        }

        .grid-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
          border-color: rgba(59, 130, 246, 0.3);
        }

        .card-image-wrap {
          height: 240px;
          background: linear-gradient(135deg, #1e293b, #0f172a);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .card-image-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          inset: 0;
          z-index: 2;
          transition: transform 0.6s ease;
        }

        .grid-card:hover .card-image-img {
          transform: scale(1.08);
        }

        .card-letter {
          font-size: 6rem;
          font-weight: 800;
          background: linear-gradient(135deg, #3b82f6, #c084fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          opacity: 0.2;
          z-index: 1;
        }

        .card-content {
          padding: 32px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .card-cat {
          align-self: flex-start;
          background: rgba(59, 130, 246, 0.1);
          color: #60a5fa;
          padding: 6px 14px;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 600;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .card-title {
          font-size: 1.5rem;
          line-height: 1.35;
          font-weight: 700;
          color: #f8fafc;
          margin-bottom: 16px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition: color 0.3s ease;
        }

        .grid-card:hover .card-title {
          color: #60a5fa;
        }

        .card-excerpt {
          font-size: 1rem;
          line-height: 1.6;
          color: #94a3b8;
          margin-bottom: 28px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          max-width: 320px; /* Narrow width for readability */
        }

        .card-footer {
          margin-top: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .card-author {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .author-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: linear-gradient(135deg, #f43f5e, #fb923c);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          font-weight: 700;
          color: white;
          box-shadow: 0 4px 10px rgba(244, 63, 94, 0.3);
        }

        .author-name {
          font-size: 0.9rem;
          font-weight: 600;
          color: #cbd5e1;
        }

        .card-read-time {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          color: #64748b;
          font-weight: 500;
        }

        @media (max-width: 1024px) {
          .blog-hero {
            flex-direction: column;
            text-align: center;
            padding: 80px 0 60px 0;
          }
          
          .blog-hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .blog-hero-title {
            font-size: 3.5rem;
          }

          .featured-card {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 40px;
          }

          .featured-image-container {
            order: -1;
            height: 360px;
          }
        }
        
        @media (max-width: 640px) {
          .blog-hero-title {
            font-size: 2.75rem;
          }
          
          .featured-card {
            padding: 24px;
            border-radius: 24px;
          }
          
          .featured-image-container {
            height: 240px;
            border-radius: 16px;
          }
          
          .blog-grid {
            grid-template-columns: 1fr;
          }
        }
      `}} />

      <div className="blog-page-container">
        
        {/* Hero Section */}
        <header className="blog-wrapper">
          <div className="blog-hero">
            <div className="blog-hero-content">
              <div className="blog-hero-label">
                <Tag size={16} /> Insightful Reads
              </div>
              <h1 className="blog-hero-title">Ideas, Insights & <span>Innovation</span></h1>
              <p className="blog-hero-desc">Expert perspectives on technology, business, and digital transformation tailored for modern enterprises.</p>
            </div>
            <div className="blog-hero-image-wrapper">
              <img 
                src="/blog-illustration.png" 
                alt="Blog Illustration" 
                className="blog-hero-img"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800';
                }}
              />
            </div>
          </div>
        </header>

        {/* Featured Post */}
        <section className="blog-wrapper featured-section">
          <h2 className="section-title">
            <span>Featured Article</span>
            <div className="section-title-line"></div>
          </h2>
          
          <Link href={`/blog/${featured.slug}`} className="featured-card">
            <div className="featured-content">
              <div>
                <span className="featured-cat">{featured.category}</span>
              </div>
              <h2 className="featured-title">{featured.title}</h2>
              <p className="featured-excerpt">{featured.excerpt}</p>
              
              <div className="featured-meta">
                <div className="meta-item">
                  <User size={16} />
                  <span>{featured.author}</span>
                </div>
                <div className="meta-item">
                  <Calendar size={16} />
                  <span>{featured.date}</span>
                </div>
                <div className="meta-item">
                  <Clock size={16} />
                  <span>{featured.readTime}</span>
                </div>
              </div>
            </div>
            
            <div className="featured-image-container">
              {featured.image && (
                <img 
                  src={featured.image} 
                  alt={featured.title} 
                  className="featured-image-img"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              )}
              <span className="featured-letter">{featured.title.charAt(0)}</span>
            </div>
          </Link>
        </section>

        {/* Sticky Filter */}
        <div className="sticky-nav">
          <div className="blog-wrapper">
            <div className="category-list">
              <button className="cat-btn active">All Articles</button>
              {categories.map(cat => (
                <button key={cat} className="cat-btn">{cat}</button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <section className="blog-wrapper grid-section">
          <div className="blog-grid">
            {rest.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="grid-card">
                <div className="card-image-wrap">
                  {post.image && (
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="card-image-img"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  )}
                  <span className="card-letter">{post.title.charAt(0)}</span>
                </div>
                
                <div className="card-content">
                  <span className="card-cat">{post.category}</span>
                  <h3 className="card-title">{post.title}</h3>
                  <p className="card-excerpt">{post.excerpt}</p>
                  
                  <div className="card-footer">
                    <div className="card-author">
                      <div className="author-avatar">{post.author.charAt(0)}</div>
                      <span className="author-name">{post.author}</span>
                    </div>
                    <div className="card-read-time">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
        
      </div>
    </>
  );
}
