import React from 'react';

export default function CareersPage() {
  return (
    <div className="careers-container">
      <style dangerouslySetInnerHTML={{
        __html: `
          .careers-container {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            color: #111827;
            background-color: #fafafa;
            overflow-x: hidden;
          }

          /* Hero Section */
          .hero-section {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 8rem 5%;
            min-height: 80vh;
            position: relative;
            background: radial-gradient(circle at 10% 20%, rgba(240, 245, 255, 0.8) 0%, #fafafa 90%);
          }

          .hero-content {
            flex: 1;
            max-width: 600px;
            z-index: 2;
          }

          .hero-title {
            font-size: 4rem;
            font-weight: 800;
            line-height: 1.1;
            letter-spacing: -0.03em;
            margin-bottom: 1.5rem;
            background: linear-gradient(135deg, #111827 0%, #4b5563 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .hero-subtitle {
            font-size: 1.25rem;
            color: #4b5563;
            line-height: 1.6;
            margin-bottom: 2.5rem;
          }

          .hero-cta {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 1rem 2rem;
            background-color: #000;
            color: #fff;
            font-weight: 600;
            border-radius: 9999px;
            text-decoration: none;
            transition: all 0.3s ease;
            box-shadow: 0 4px 14px 0 rgba(0,0,0,0.1);
          }

          .hero-cta:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0,0,0,0.15);
          }

          .hero-visual {
            flex: 1;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .hero-image-wrapper {
            position: relative;
            width: 100%;
            max-width: 500px;
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 0 25px 50px -12px rgba(0,0,0,0.15);
          }

          .hero-image {
            width: 100%;
            height: auto;
            display: block;
            object-fit: cover;
          }

          .floating-card {
            position: absolute;
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            padding: 1.5rem;
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.6);
            box-shadow: 0 10px 40px rgba(0,0,0,0.08);
            animation: float 6s ease-in-out infinite;
            display: flex;
            align-items: center;
            gap: 1rem;
            z-index: 10;
          }

          .card-icon {
            font-size: 2rem;
          }
          .card-text {
            font-weight: 600;
            color: #111827;
            font-size: 0.95rem;
          }

          .card-top-left { top: -20px; left: -40px; }
          .card-bottom-right { bottom: -20px; right: -40px; animation-delay: 2s; }

          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }

          .section-title {
            font-size: 2.5rem;
            font-weight: 700;
            text-align: center;
            margin-bottom: 1rem;
            color: #111827;
          }
          
          .section-subtitle {
            text-align: center;
            color: #6b7280;
            font-size: 1.1rem;
            margin-bottom: 4rem;
          }

          /* Bento Grid */
          .bento-section {
            padding: 6rem 5%;
            background-color: #fff;
          }

          .bento-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, 250px);
            gap: 1.5rem;
            max-width: 1200px;
            margin: 0 auto;
          }

          .bento-item {
            background: #f9fafb;
            border-radius: 24px;
            padding: 2.5rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
            border: 1px solid rgba(0,0,0,0.03);
          }

          .bento-item:hover {
            transform: translateY(-4px) scale(1.01);
            box-shadow: 0 20px 40px -10px rgba(0,0,0,0.08);
          }

          .bento-item h3 {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 0.75rem;
            z-index: 2;
          }

          .bento-item p {
            color: #4b5563;
            line-height: 1.6;
            z-index: 2;
          }

          .bento-item-1 { grid-column: span 2; background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); }
          .bento-item-4 { grid-column: span 2; background: linear-gradient(135deg, #fdf4ff 0%, #fae8ff 100%); }
          .bento-item-2 { background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); }
          .bento-item-3 { background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%); }

          /* Timeline */
          .timeline-section {
            padding: 8rem 5%;
            background-color: #fafafa;
          }

          .timeline-container {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            max-width: 1000px;
            margin: 0 auto;
            position: relative;
          }

          .timeline-container::before {
            content: '';
            position: absolute;
            top: 24px;
            left: 0;
            width: 100%;
            height: 2px;
            background: #e5e7eb;
            z-index: 1;
          }

          .timeline-step {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            z-index: 2;
            width: 25%;
            text-align: center;
          }

          .timeline-dot {
            width: 50px;
            height: 50px;
            background: #fff;
            border: 3px solid #111827;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 1.25rem;
            margin-bottom: 1.5rem;
            box-shadow: 0 4px 10px rgba(0,0,0,0.05);
            transition: all 0.3s ease;
          }

          .timeline-step:hover .timeline-dot {
            transform: scale(1.15);
            background: #111827;
            color: #fff;
          }

          .timeline-title {
            font-weight: 700;
            margin-bottom: 0.5rem;
            font-size: 1.1rem;
            color: #111827;
          }

          .timeline-desc {
            font-size: 0.95rem;
            color: #6b7280;
            padding: 0 1rem;
            line-height: 1.5;
          }

          /* Open Positions */
          .positions-section {
            padding: 6rem 5%;
            background-color: #fff;
          }

          .positions-list {
            max-width: 900px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
          }

          .position-card {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 2rem;
            background: #fff;
            border: 1px solid #e5e7eb;
            border-radius: 16px;
            transition: all 0.3s ease;
            cursor: pointer;
          }

          .position-card:hover {
            border-color: #d1d5db;
            box-shadow: 0 12px 30px -10px rgba(0,0,0,0.1);
            transform: translateY(-4px);
          }

          .position-info h3 {
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 0.75rem;
          }

          .position-meta {
            display: flex;
            gap: 1rem;
            color: #6b7280;
            font-size: 0.9rem;
            align-items: center;
          }

          .tag {
            padding: 0.35rem 0.85rem;
            border-radius: 999px;
            font-size: 0.75rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }

          .tag-engineering { background: #e0e7ff; color: #4338ca; }
          .tag-design { background: #fce7f3; color: #be185d; }
          .tag-product { background: #dcfce7; color: #15803d; }
          
          .badge-remote {
            display: inline-flex;
            align-items: center;
            gap: 0.35rem;
            font-size: 0.9rem;
            color: #4b5563;
            font-weight: 500;
          }

          .badge-remote::before {
            content: '';
            display: inline-block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: #10b981;
            box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.2);
          }

          .apply-btn {
            padding: 0.75rem 2rem;
            border: 1px solid #e5e7eb;
            background: transparent;
            border-radius: 999px;
            font-weight: 600;
            transition: all 0.2s ease;
            color: #111827;
            white-space: nowrap;
          }

          .position-card:hover .apply-btn {
            background: #111827;
            color: #fff;
            border-color: #111827;
          }

          @media (max-width: 900px) {
            .hero-section {
              flex-direction: column;
              text-align: center;
              padding-top: 6rem;
              gap: 4rem;
            }
            .bento-grid {
              grid-template-columns: 1fr;
              grid-template-rows: auto;
            }
            .bento-item-1, .bento-item-4 {
              grid-column: span 1;
            }
            .timeline-container {
              flex-direction: column;
              align-items: center;
              gap: 3rem;
            }
            .timeline-container::before {
              top: 0;
              left: 50%;
              width: 2px;
              height: 100%;
              transform: translateX(-50%);
            }
            .timeline-step {
              width: 100%;
            }
            .position-card {
              flex-direction: column;
              align-items: flex-start;
              gap: 1.5rem;
            }
            .apply-btn {
              width: 100%;
              text-align: center;
            }
            .floating-card {
              display: none;
            }
          }
        `
      }} />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Do the best work of your career.</h1>
          <p className="hero-subtitle">
            Join a collective of driven, passionate individuals building the future of enterprise software. 
            We value creativity, impact, and a culture of continuous learning.
          </p>
          <a href="#positions" className="hero-cta">View Open Positions</a>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <img 
              src="/office-culture.png" 
              alt="Our Office Culture" 
              className="hero-image"
              width={500}
              height={600}
            />
          </div>
          <div className="floating-card card-top-left">
            <span className="card-icon">🚀</span>
            <span className="card-text">Fast-paced growth</span>
          </div>
          <div className="floating-card card-bottom-right">
            <span className="card-icon">🫶</span>
            <span className="card-text">Inclusive culture</span>
          </div>
        </div>
      </section>

      {/* Bento Grid: Why Join Us */}
      <section className="bento-section">
        <h2 className="section-title">Why Microtechnique?</h2>
        <p className="section-subtitle">We give you the autonomy and resources to thrive.</p>
        
        <div className="bento-grid">
          <div className="bento-item bento-item-1">
            <h3>Work from anywhere</h3>
            <p>Our remote-first culture means you can contribute from the comfort of your home, a cafe in Paris, or our stunning headquarters. We care about output, not hours at a desk.</p>
          </div>
          <div className="bento-item bento-item-2">
            <h3>Health & Wellness</h3>
            <p>Comprehensive medical, dental, and mental health coverage for you and your dependents.</p>
          </div>
          <div className="bento-item bento-item-3">
            <h3>Learning Stipend</h3>
            <p>$2,000 annual budget for courses, books, conferences, and continuous upskilling.</p>
          </div>
          <div className="bento-item bento-item-4">
            <h3>Meaningful Equity</h3>
            <p>We want you to be an owner. Every employee receives a generous equity package so we all share in our long-term success.</p>
          </div>
        </div>
      </section>

      {/* Application Timeline */}
      <section className="timeline-section">
        <h2 className="section-title">Our Hiring Process</h2>
        <p className="section-subtitle">Transparent, fair, and designed to help you shine.</p>

        <div className="timeline-container">
          <div className="timeline-step">
            <div className="timeline-dot">1</div>
            <h4 className="timeline-title">Apply</h4>
            <p className="timeline-desc">Submit your resume and portfolio. We read every single application.</p>
          </div>
          <div className="timeline-step">
            <div className="timeline-dot">2</div>
            <h4 className="timeline-title">HR Screening</h4>
            <p className="timeline-desc">A 30-minute chat to align on expectations, culture fit, and your goals.</p>
          </div>
          <div className="timeline-step">
            <div className="timeline-dot">3</div>
            <h4 className="timeline-title">Final Interview</h4>
            <p className="timeline-desc">Meet the team, do a collaborative exercise, and ask us anything.</p>
          </div>
          <div className="timeline-step">
            <div className="timeline-dot">4</div>
            <h4 className="timeline-title">The Offer</h4>
            <p className="timeline-desc">If it's a mutual match, we extend an offer and celebrate your arrival!</p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="positions-section" id="positions">
        <h2 className="section-title">Open Positions</h2>
        <p className="section-subtitle">Find your next role and help us build the future.</p>

        <div className="positions-list">
          <div className="position-card">
            <div className="position-info">
              <h3>Senior Frontend Engineer</h3>
              <div className="position-meta">
                <span className="tag tag-engineering">Engineering</span>
                <span className="badge-remote">Remote</span>
                <span>Full-time</span>
              </div>
            </div>
            <button className="apply-btn">Apply Now</button>
          </div>

          <div className="position-card">
            <div className="position-info">
              <h3>Product Designer</h3>
              <div className="position-meta">
                <span className="tag tag-design">Design</span>
                <span className="badge-remote">Remote (US)</span>
                <span>Full-time</span>
              </div>
            </div>
            <button className="apply-btn">Apply Now</button>
          </div>

          <div className="position-card">
            <div className="position-info">
              <h3>Product Manager</h3>
              <div className="position-meta">
                <span className="tag tag-product">Product</span>
                <span className="badge-remote">Remote (EMEA)</span>
                <span>Full-time</span>
              </div>
            </div>
            <button className="apply-btn">Apply Now</button>
          </div>
        </div>
      </section>
    </div>
  );
}
