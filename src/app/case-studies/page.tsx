import type { Metadata } from 'next';
import Link from 'next/link';
import { caseStudies } from '@/data/case-studies';

export const metadata: Metadata = {
  title: 'Case Studies — Real Results, Real Impact',
  description: 'Discover how Microtechnique IT has helped businesses achieve measurable results through technology. Explore our detailed case studies.',
};

export default function CaseStudiesPage() {
  const featured = caseStudies[0];
  const rest = caseStudies.slice(1);

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Case Studies — Real Results, Real Impact",
    "description": "Discover how Microtechnique IT has helped businesses achieve measurable results through technology.",
    "url": "https://microtechniqueit.com/case-studies",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": caseStudies.map((study, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://microtechniqueit.com/case-studies/${study.slug}`
      }))
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <style dangerouslySetInnerHTML={{ __html: `
        .cs-page-container { 
          font-family: var(--font-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif); 
          background-color: #ffffff; 
          color: #0f172a;
          overflow-x: hidden;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        .cs-page-container *, .cs-page-container *::before, .cs-page-container *::after {
          box-sizing: border-box;
        }
        
        /* HERO SECTION */
        .cs-hero { 
          display: flex; 
          align-items: center; 
          justify-content: space-between; 
          padding: 160px 5% 100px; 
          min-height: 85vh; 
          background: radial-gradient(circle at 20% 30%, #11111a, #000 60%); 
        }
        .cs-hero-content { 
          flex: 1; 
          max-width: 650px; 
          animation: cs-fadeUp 1s ease-out;
        }
        .cs-hero-badge { 
          display: inline-block; 
          padding: 8px 16px; 
          border-radius: 20px; 
          background: rgba(255,255,255,0.05); 
          font-size: 14px; 
          font-weight: 500; 
          margin-bottom: 24px; 
          border: 1px solid rgba(255,255,255,0.1); 
          backdrop-filter: blur(10px);
        }
        .cs-hero-title { 
          font-size: 72px; 
          line-height: 1.05; 
          margin-bottom: 24px; 
          font-weight: 800; 
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #fff 30%, #888); 
          -webkit-background-clip: text; 
          -webkit-text-fill-color: transparent; 
        }
        .cs-hero-desc { 
          font-size: 20px; 
          color: #a0a0a0; 
          margin-bottom: 40px; 
          line-height: 1.6; 
          max-width: 500px;
        }
        .cs-hero-image-wrapper { 
          flex: 1; 
          display: flex; 
          justify-content: flex-end; 
          position: relative; 
          perspective: 1000px;
          animation: cs-fadeIn 1.2s ease-out;
        }
        .cs-hero-image { 
          width: 100%;
          max-width: 600px; 
          height: auto; 
          border-radius: 24px; 
          box-shadow: 0 40px 80px rgba(0,0,0,0.6); 
          border: 1px solid rgba(255,255,255,0.1); 
          transform: rotateY(-5deg) rotateX(5deg);
          transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1); 
        }
        .cs-hero-image-wrapper:hover .cs-hero-image { 
          transform: rotateY(0deg) rotateX(0deg) scale(1.02); 
        }
        .cs-btn { 
          display: inline-flex; 
          align-items: center; 
          gap: 12px; 
          background: #fff; 
          color: #000; 
          padding: 16px 32px; 
          border-radius: 30px; 
          font-weight: 600; 
          text-decoration: none; 
          transition: all 0.3s ease; 
        }
        .cs-btn:hover { 
          background: #e0e0e0;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(255,255,255,0.1);
        }

        /* TIMELINE SECTION */
        .cs-timeline { 
          padding: 100px 5%; 
          background: #050505; 
          border-top: 1px solid rgba(255,255,255,0.05); 
          border-bottom: 1px solid rgba(255,255,255,0.05); 
        }
        .cs-timeline-title { 
          text-align: center; 
          font-size: 32px; 
          margin-bottom: 80px; 
          font-weight: 700; 
          letter-spacing: -0.01em;
        }
        .cs-timeline-track { 
          display: flex; 
          justify-content: space-between; 
          position: relative; 
          max-width: 1000px; 
          margin: 0 auto; 
        }
        .cs-timeline-track::before { 
          content: ''; 
          position: absolute; 
          top: 30px; 
          left: 30px; 
          right: 30px; 
          height: 1px; 
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent); 
          z-index: 1; 
        }
        .cs-timeline-step { 
          display: flex; 
          flex-direction: column; 
          align-items: center; 
          position: relative; 
          z-index: 2; 
          width: 120px; 
        }
        .cs-timeline-dot { 
          width: 60px; 
          height: 60px; 
          border-radius: 30px; 
          background: #ffffff; 
          border: 1px solid rgba(255,255,255,0.2); 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          margin-bottom: 20px; 
          font-size: 20px;
          font-weight: 700; 
          color: #888; 
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); 
        }
        .cs-timeline-step:hover .cs-timeline-dot { 
          background: #fff; 
          color: #000; 
          border-color: #0f172a; 
          transform: scale(1.15); 
          box-shadow: 0 0 30px rgba(255,255,255,0.3); 
        }
        .cs-timeline-label { 
          font-size: 14px; 
          color: #666; 
          text-transform: uppercase; 
          letter-spacing: 1.5px; 
          font-weight: 600; 
          text-align: center; 
          transition: color 0.3s ease; 
        }
        .cs-timeline-step:hover .cs-timeline-label { 
          color: #0f172a; 
        }

        /* FEATURED SECTION */
        .cs-featured { 
          padding: 120px 5%; 
          background: #ffffff; 
        }
        .cs-featured-inner { 
          display: flex; 
          flex-direction: column; 
          background: linear-gradient(160deg, #0a0a0a, #030303); 
          border: 1px solid rgba(255,255,255,0.08); 
          border-radius: 40px; 
          padding: 80px; 
          position: relative; 
          overflow: hidden;
        }
        .cs-featured-inner::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%);
          border-radius: 50%;
          z-index: 0;
          pointer-events: none;
        }
        .cs-featured-badge { 
          display: inline-block;
          background: #fff; 
          color: #000; 
          padding: 8px 16px; 
          border-radius: 20px; 
          font-size: 12px; 
          font-weight: 700; 
          text-transform: uppercase; 
          letter-spacing: 1px; 
          margin-bottom: 40px;
          align-self: flex-start;
          position: relative;
          z-index: 2;
        }
        .cs-featured-content { 
          max-width: 800px; 
          position: relative;
          z-index: 2; 
        }
        .cs-featured-industry { 
          color: #888; 
          font-size: 16px; 
          margin-bottom: 20px; 
          text-transform: uppercase; 
          letter-spacing: 1.5px; 
          font-weight: 500;
        }
        .cs-featured-title { 
          font-size: 56px; 
          margin-bottom: 32px; 
          font-weight: 800; 
          line-height: 1.1; 
          letter-spacing: -0.02em;
        }
        .cs-featured-desc { 
          font-size: 20px; 
          color: #999; 
          line-height: 1.6; 
          margin-bottom: 48px; 
        }
        .cs-featured-stats { 
          display: flex; 
          flex-wrap: wrap;
          gap: 24px; 
          margin-bottom: 48px; 
        }
        .cs-stat-card { 
          background: rgba(255,255,255,0.02); 
          padding: 32px; 
          border-radius: 24px; 
          border: 1px solid rgba(255,255,255,0.05); 
          flex: 1 1 200px; 
          transition: transform 0.4s ease, background 0.4s ease; 
        }
        .cs-stat-card:hover { 
          transform: translateY(-8px); 
          background: rgba(255,255,255,0.05); 
          border-color: rgba(255,255,255,0.1);
        }
        .cs-stat-value { 
          font-size: 40px; 
          font-weight: 800; 
          color: #0f172a; 
          margin-bottom: 12px; 
          background: linear-gradient(135deg, #fff, #aaa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .cs-stat-label { 
          font-size: 15px; 
          color: #777; 
          font-weight: 500;
        }

        /* GRID SECTION */
        .cs-grid { 
          padding: 100px 5% 160px; 
          background: #ffffff; 
        }
        .cs-grid-title { 
          font-size: 48px; 
          margin-bottom: 80px; 
          font-weight: 800; 
          letter-spacing: -0.02em;
        }
        .cs-cards { 
          display: grid; 
          grid-template-columns: repeat(auto-fill, minmax(380px, 1fr)); 
          gap: 40px; 
        }
        .cs-card { 
          background: #050505; 
          border-radius: 32px; 
          overflow: hidden; 
          border: 1px solid rgba(255,255,255,0.06); 
          text-decoration: none; 
          display: flex; 
          flex-direction: column; 
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease; 
        }
        .cs-card:hover { 
          transform: translateY(-12px); 
          box-shadow: 0 30px 60px rgba(0,0,0,0.8); 
          border-color: rgba(255,255,255,0.15); 
        }
        .cs-card-img-wrap { 
          width: 100%; 
          height: 280px; 
          overflow: hidden; 
          position: relative; 
        }
        .cs-card-img { 
          width: 100%; 
          height: 100%; 
          object-fit: cover; 
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1); 
        }
        .cs-card:hover .cs-card-img { 
          transform: scale(1.08); 
        }
        .cs-card-img-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 40%, #050505);
        }
        .cs-card-content { 
          padding: 40px; 
          display: flex; 
          flex-direction: column; 
          flex: 1; 
          position: relative;
          margin-top: -30px;
          z-index: 2;
        }
        .cs-card-badge { 
          display: inline-block; 
          padding: 8px 16px; 
          background: rgba(255,255,255,0.05); 
          border-radius: 20px; 
          font-size: 12px; 
          font-weight: 700; 
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #0f172a; 
          margin-bottom: 24px; 
          align-self: flex-start; 
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
        }
        .cs-card-title { 
          font-size: 28px; 
          color: #0f172a; 
          margin-bottom: 16px; 
          font-weight: 700; 
          line-height: 1.2; 
        }
        .cs-card-desc { 
          font-size: 16px; 
          color: #888; 
          line-height: 1.6; 
          margin-bottom: 32px; 
          flex: 1; 
        }
        .cs-card-footer { 
          display: flex; 
          align-items: center; 
          gap: 8px; 
          color: #0f172a; 
          font-size: 15px; 
          font-weight: 600; 
          transition: gap 0.3s ease; 
        }
        .cs-card:hover .cs-card-footer { 
          gap: 16px; 
        }

        /* ANIMATIONS */
        @keyframes cs-fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes cs-fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .cs-hero { flex-direction: column; text-align: center; padding-top: 180px; }
          .cs-hero-desc { margin: 0 auto 40px; }
          .cs-hero-image-wrapper { margin-top: 80px; justify-content: center; }
          .cs-featured-inner { padding: 40px; border-radius: 24px; }
          .cs-timeline-track { flex-wrap: wrap; justify-content: center; gap: 40px; }
          .cs-timeline-track::before { display: none; }
          .cs-cards { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
          .cs-hero-title { font-size: 48px; }
          .cs-featured-title { font-size: 40px; }
          .cs-featured-stats { flex-direction: column; gap: 16px; }
          .cs-grid-title { font-size: 36px; }
          .cs-card-content { padding: 30px; }
        }
      ` }} />
      <div className="cs-page-container">
        
        {/* HERO SECTION */}
        <section className="cs-hero">
          <div className="cs-hero-content">
            <div className="cs-hero-badge">Our Impact</div>
            <h1 className="cs-hero-title">Proven Results,<br />Real Impact</h1>
            <p className="cs-hero-desc">In-depth looks at how we've helped businesses overcome challenges and achieve measurable outcomes through premium engineering and design.</p>
            <a href="#featured" className="cs-btn">
              Explore Studies 
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14m-7-7 7 7-7 7"/>
              </svg>
            </a>
          </div>
          <div className="cs-hero-image-wrapper">
            <img src="/case-study-hero.png" alt="Case Studies" className="cs-hero-image" />
          </div>
        </section>

        {/* TIMELINE SECTION */}
        <section className="cs-timeline">
          <h2 className="cs-timeline-title">Our Approach to Transformation</h2>
          <div className="cs-timeline-track">
            <div className="cs-timeline-step">
              <div className="cs-timeline-dot">1</div>
              <div className="cs-timeline-label">Discovery</div>
            </div>
            <div className="cs-timeline-step">
              <div className="cs-timeline-dot">2</div>
              <div className="cs-timeline-label">Planning</div>
            </div>
            <div className="cs-timeline-step">
              <div className="cs-timeline-dot">3</div>
              <div className="cs-timeline-label">Design</div>
            </div>
            <div className="cs-timeline-step">
              <div className="cs-timeline-dot">4</div>
              <div className="cs-timeline-label">Dev & Eng</div>
            </div>
            <div className="cs-timeline-step">
              <div className="cs-timeline-dot">5</div>
              <div className="cs-timeline-label">Delivery</div>
            </div>
          </div>
        </section>

        {/* FEATURED CASE STUDY */}
        <section id="featured" className="cs-featured">
          <div className="cs-featured-inner">
            <div className="cs-featured-badge">Featured Case Study</div>
            <div className="cs-featured-content">
              <div className="cs-featured-industry">{featured.industry}</div>
              <h2 className="cs-featured-title">{featured.title}</h2>
              <p className="cs-featured-desc">{featured.challenge}</p>
              <div className="cs-featured-stats">
                {featured.results.slice(0, 3).map((r, i) => (
                  <div key={i} className="cs-stat-card">
                    <div className="cs-stat-value">{r.value}</div>
                    <div className="cs-stat-label">{r.metric}</div>
                  </div>
                ))}
              </div>
              <Link href={`/case-studies/${featured.slug}`} className="cs-btn">
                Read Full Case Study 
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14m-7-7 7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* GRID SECTION */}
        <section className="cs-grid">
          <h2 className="cs-grid-title">More Success Stories</h2>
          <div className="cs-cards">
            {rest.map(study => (
              <Link key={study.id} href={`/case-studies/${study.slug}`} className="cs-card">
                <div className="cs-card-img-wrap">
                  <img src={study.image} alt={study.title} className="cs-card-img" />
                </div>
                <div className="cs-card-content">
                  <div className="cs-card-badge">{study.industry}</div>
                  <h3 className="cs-card-title">{study.title}</h3>
                  <p className="cs-card-desc">{study.challenge.substring(0, 140)}...</p>
                  <div className="cs-card-footer">
                    View Case Study
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14m-7-7 7 7-7 7"/>
                    </svg>
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
