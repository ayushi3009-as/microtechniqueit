import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock, ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us — Get in Touch',
  description: 'Contact Microtechnique IT for enterprise software development, web development, mobile apps, and digital transformation. Get a free consultation today.',
};

export default function ContactPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .contact-page-wrapper {
            background-color: #ffffff;
            color: #0f172a;
            font-family: inherit;
            overflow: hidden;
            min-height: 100vh;
            position: relative;
          }
          
          /* Hero Split */
          .contact-hero {
            display: flex;
            align-items: center;
            justify-content: space-between;
            min-height: 85vh;
            padding: 140px 5% 80px;
            gap: 60px;
            background: radial-gradient(circle at 10% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
                        radial-gradient(circle at 90% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%);
            position: relative;
            max-width: 1600px;
            margin: 0 auto;
          }
          .hero-text-content {
            flex: 1.2;
            max-width: 650px;
            z-index: 2;
          }
          .hero-headline {
            font-size: clamp(3rem, 5vw, 4.5rem);
            font-weight: 800;
            line-height: 1.1;
            margin-bottom: 24px;
            background: linear-gradient(to right, #0f172a, #4f46e5);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            letter-spacing: -0.02em;
          }
          .hero-subheadline {
            font-size: 1.25rem;
            color: #94a3b8;
            line-height: 1.7;
            margin-bottom: 40px;
            font-weight: 400;
          }
          .hero-image-container {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            z-index: 2;
          }
          .hero-image-container img {
            width: 100%;
            max-width: 600px;
            height: auto;
            border-radius: 32px;
            box-shadow: 0 40px 80px -20px rgba(99, 102, 241, 0.4);
            animation: float 8s ease-in-out infinite;
            border: 1px solid rgba(255,255,255,0.1);
            object-fit: cover;
          }
          .glow-orb {
            position: absolute;
            width: 500px;
            height: 500px;
            background: #4f46e5;
            border-radius: 50%;
            filter: blur(150px);
            opacity: 0.25;
            z-index: 1;
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }

          /* Glass Contact Cards */
          .glass-cards-grid {
            padding: 40px 5% 80px;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 24px;
            position: relative;
            z-index: 5;
            max-width: 1600px;
            margin: 0 auto;
          }
          .glass-contact-card {
            background: #ffffff;
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(0, 0, 0, 0.05);
            border-radius: 24px;
            padding: 40px 30px;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            text-decoration: none;
            color: #0f172a;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
            position: relative;
            overflow: hidden;
          }
          .glass-contact-card::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; height: 1px;
            background: linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent);
            opacity: 0;
            transition: opacity 0.4s ease;
          }
          .glass-contact-card:hover {
            transform: translateY(-12px);
            background: #f8fafc;
            border-color: rgba(99, 102, 241, 0.4);
            box-shadow: 0 20px 40px rgba(99, 102, 241, 0.15);
          }
          .glass-contact-card:hover::before {
            opacity: 1;
          }
          .icon-box {
            width: 64px;
            height: 64px;
            border-radius: 20px;
            background: linear-gradient(135deg, rgba(99,102,241,0.15), rgba(168,85,247,0.15));
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 24px;
            color: #818cf8;
            border: 1px solid rgba(99,102,241,0.2);
            transition: all 0.3s ease;
          }
          .glass-contact-card:hover .icon-box {
            background: linear-gradient(135deg, #4f46e5, #9333ea);
            color: white;
            transform: scale(1.1) rotate(5deg);
            border-color: transparent;
            box-shadow: 0 10px 20px rgba(147, 51, 234, 0.3);
          }
          .contact-card-title {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 12px;
            letter-spacing: -0.01em;
          }
          .contact-card-value {
            font-size: 1.05rem;
            color: #4f46e5;
            font-weight: 600;
            margin-bottom: 8px;
          }
          .contact-card-desc {
            font-size: 0.9rem;
            color: #64748b;
          }

          /* Form & FAQ Layout */
          .split-content-section {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 80px;
            padding: 80px 5% 120px;
            max-width: 1400px;
            margin: 0 auto;
            align-items: start;
          }

          /* Form Styles */
          .premium-form-container {
            background: #ffffff;
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            border: 1px solid rgba(0, 0, 0, 0.05);
            border-radius: 32px;
            padding: 50px;
            box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.05);
            position: relative;
          }
          .premium-form-container::after {
            content: '';
            position: absolute;
            inset: -1px;
            border-radius: 33px;
            padding: 1px;
            background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%, rgba(99,102,241,0.15) 100%);
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            pointer-events: none;
          }
          .form-heading {
            margin-bottom: 40px;
          }
          .form-heading h2 {
            font-size: 2.5rem;
            margin-bottom: 12px;
            font-weight: 700;
            letter-spacing: -0.02em;
          }
          .form-heading p {
            color: #94a3b8;
            font-size: 1.1rem;
            line-height: 1.6;
          }
          .input-wrap {
            position: relative;
            margin-bottom: 28px;
          }
          .input-wrap input, 
          .input-wrap textarea {
            width: 100%;
            background: #f8fafc;
            border: 1px solid var(--color-border);
            border-radius: 18px;
            color: #0f172a;
            font-size: 1rem;
            padding: 0 24px;
            outline: none;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-sizing: border-box;
            font-family: inherit;
          }
          .input-wrap input {
            height: 56px;
          }
          .input-wrap textarea {
            height: 160px;
            padding-top: 24px;
            resize: vertical;
          }
          .input-wrap label {
            position: absolute;
            left: 24px;
            top: 18px;
            color: #64748b;
            pointer-events: none;
            transition: all 0.2s ease-out;
            font-size: 1rem;
            background: transparent;
            margin: 0;
            padding: 0;
          }
          .input-wrap textarea ~ label {
            top: 24px;
          }
          
          /* Glowing Focus & Floating Labels */
          .input-wrap input:focus, 
          .input-wrap textarea:focus {
            border-color: #6366f1;
            background: rgba(99, 102, 241, 0.03);
            box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.15), inset 0 0 20px rgba(99, 102, 241, 0.05);
          }
          .input-wrap input:focus ~ label,
          .input-wrap input:not(:placeholder-shown) ~ label,
          .input-wrap textarea:focus ~ label,
          .input-wrap textarea:not(:placeholder-shown) ~ label {
            top: -10px;
            left: 16px;
            font-size: 0.85rem;
            color: #a5b4fc;
            background: #f8fafc; 
            padding: 0 8px;
            border-radius: 6px;
            font-weight: 500;
          }
          .btn-submit {
            background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
            border: none;
            border-radius: 18px;
            height: 56px;
            width: 100%;
            color: #0f172a;
            font-size: 1.125rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            margin-top: 20px;
            box-shadow: 0 10px 20px -5px rgba(99, 102, 241, 0.5);
            position: relative;
            overflow: hidden;
          }
          .btn-submit::before {
            content: '';
            position: absolute;
            top: 0; left: -100%; width: 100%; height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: all 0.5s ease;
          }
          .btn-submit:hover {
            transform: translateY(-2px);
            box-shadow: 0 15px 30px -5px rgba(99, 102, 241, 0.6);
          }
          .btn-submit:hover::before {
            left: 100%;
          }

          /* FAQ Accordion */
          .faq-container {
            padding-top: 20px;
          }
          .faq-heading {
            font-size: 2.25rem;
            margin-bottom: 40px;
            font-weight: 700;
            background: linear-gradient(to right, #0f172a, #475569);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            letter-spacing: -0.01em;
          }
          .faq-card {
            background: rgba(0, 0, 0, 0.02);
            border: 1px solid rgba(0, 0, 0, 0.05);
            border-radius: 20px;
            margin-bottom: 16px;
            transition: all 0.3s ease;
          }
          .faq-card:hover {
            border-color: rgba(99, 102, 241, 0.3);
            background: rgba(0, 0, 0, 0.04);
          }
          .faq-card details {
            width: 100%;
          }
          .faq-card summary {
            padding: 24px 30px;
            font-size: 1.1rem;
            font-weight: 500;
            cursor: pointer;
            list-style: none;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #0f172a;
          }
          .faq-card summary::-webkit-details-marker {
            display: none;
          }
          .faq-card summary::after {
            content: '+';
            font-size: 1.5rem;
            font-weight: 300;
            color: #818cf8;
            transition: transform 0.4s ease;
          }
          .faq-card details[open] summary::after {
            transform: rotate(45deg);
            color: #0f172a;
          }
          .faq-card details[open] summary {
            color: #0f172a;
          }
          .faq-body {
            padding: 0 30px 24px;
            color: #94a3b8;
            line-height: 1.7;
            font-size: 1rem;
            animation: fadeInDown 0.3s ease-out;
          }
          @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          /* Trust Logos */
          .trust-banner {
            padding: 80px 5% 100px;
            text-align: center;
            border-top: 1px solid rgba(0, 0, 0, 0.05);
            background: linear-gradient(to bottom, transparent, rgba(99, 102, 241, 0.02));
          }
          .trust-title {
            font-size: 0.875rem;
            text-transform: uppercase;
            letter-spacing: 0.25em;
            color: #64748b;
            margin-bottom: 50px;
            font-weight: 600;
          }
          .trust-logos-wrap {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 80px;
            flex-wrap: wrap;
          }
          .brand-logo {
            display: flex;
            align-items: center;
            gap: 12px;
            opacity: 0.4;
            transition: all 0.4s ease;
            filter: grayscale(100%);
          }
          .brand-logo:hover {
            opacity: 1;
            filter: grayscale(0%);
            transform: translateY(-3px) scale(1.05);
          }
          .brand-logo span {
            font-size: 1.35rem;
            font-weight: 700;
            color: #0f172a;
            letter-spacing: -0.02em;
          }

          /* Responsive Adjustments */
          @media (max-width: 1024px) {
            .contact-hero {
              flex-direction: column;
              text-align: center;
              padding-top: 160px;
              gap: 40px;
            }
            .hero-text-content {
              margin: 0 auto;
            }
            .split-content-section {
              grid-template-columns: 1fr;
              gap: 60px;
            }
            .premium-form-container {
              padding: 40px 24px;
            }
          }
          @media (max-width: 768px) {
            .hero-headline {
              font-size: 2.5rem;
            }
            .trust-logos-wrap {
              gap: 40px;
            }
          }
        `
      }} />

      <main className="contact-page-wrapper">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="glow-orb" style={{ top: '-10%', left: '-5%' }}></div>
          <div className="hero-text-content">
            <h1 className="hero-headline">Let's Build Something Extraordinary</h1>
            <p className="hero-subheadline">
              Ready to transform your business with cutting-edge technology? Whether you need enterprise software, a stunning website, or a complete digital strategy — we're here to help you succeed.
            </p>
          </div>
          <div className="hero-image-container">
            <div className="glow-orb" style={{ bottom: '-20%', right: '-10%', background: '#a855f7', width: '400px', height: '400px' }}></div>
            <img src="/contact-illustration.png" alt="Contact Illustration" />
          </div>
        </section>

        {/* Glass Contact Cards */}
        <section className="glass-cards-grid">
          <a href="mailto:info@microtechniqueit.com" className="glass-contact-card">
            <div className="icon-box">
              <Mail size={28} strokeWidth={1.5} />
            </div>
            <h3 className="contact-card-title">Email Us</h3>
            <p className="contact-card-value">info@microtechniqueit.com</p>
            <p className="contact-card-desc">We respond within 24 hours</p>
          </a>
          
          <a href="tel:+916355997080" className="glass-contact-card">
            <div className="icon-box">
              <Phone size={28} strokeWidth={1.5} />
            </div>
            <h3 className="contact-card-title">Call Us</h3>
            <p className="contact-card-value">+91 6355997080</p>
            <p className="contact-card-desc">Mon-Sun, 9:00 AM – 9:00 PM IST</p>
          </a>

          <div className="glass-contact-card">
            <div className="icon-box">
              <MapPin size={28} strokeWidth={1.5} />
            </div>
            <h3 className="contact-card-title">Office</h3>
            <p className="contact-card-value">Star World Complex, Pal Gam</p>
            <p className="contact-card-desc">Surat, Gujarat 394510, India</p>
          </div>

          <a href="mailto:support@microtechniqueit.com" className="glass-contact-card">
            <div className="icon-box">
              <Clock size={28} strokeWidth={1.5} />
            </div>
            <h3 className="contact-card-title">Support</h3>
            <p className="contact-card-value">24/7 Dedicated Support</p>
            <p className="contact-card-desc">For existing clients only</p>
          </a>
        </section>

        {/* Form and FAQ Split */}
        <section className="split-content-section">
          {/* Form */}
          <div className="premium-form-container">
            <div className="form-heading">
              <h2>Send a Message</h2>
              <p>Fill out the form below and our team will get back to you promptly.</p>
            </div>
            <form>
              <div className="input-wrap">
                <input type="text" id="name" placeholder=" " required />
                <label htmlFor="name">Full Name</label>
              </div>
              <div className="input-wrap">
                <input type="email" id="email" placeholder=" " required />
                <label htmlFor="email">Email Address</label>
              </div>
              <div className="input-wrap">
                <input type="tel" id="phone" placeholder=" " />
                <label htmlFor="phone">Phone Number (Optional)</label>
              </div>
              <div className="input-wrap">
                <textarea id="message" placeholder=" " required></textarea>
                <label htmlFor="message">How can we help you?</label>
              </div>
              <button type="submit" className="btn-submit">
                Send Message <ArrowRight size={20} />
              </button>
            </form>
          </div>

          {/* FAQ Accordion */}
          <div className="faq-container">
            <h2 className="faq-heading">Frequently Asked Questions</h2>
            
            <div className="faq-card">
              <details>
                <summary>What services do you provide?</summary>
                <div className="faq-body">
                  We specialize in enterprise software development, web and mobile app development, UI/UX design, cloud solutions, and complete digital transformation strategies tailored for your business needs.
                </div>
              </details>
            </div>
            
            <div className="faq-card">
              <details>
                <summary>How long does it take to complete a project?</summary>
                <div className="faq-body">
                  Project timelines vary depending on complexity and scope. A standard website might take 4-6 weeks, while a complex enterprise application could take several months. We provide detailed timelines during our initial consultation.
                </div>
              </details>
            </div>

            <div className="faq-card">
              <details>
                <summary>Do you provide post-launch support?</summary>
                <div className="faq-body">
                  Yes, absolutely! We offer comprehensive maintenance and support packages to ensure your software remains up-to-date, secure, and performs optimally long after the initial launch.
                </div>
              </details>
            </div>

            <div className="faq-card">
              <details>
                <summary>How do we start the process?</summary>
                <div className="faq-body">
                  Simply fill out the contact form or give us a call. We'll schedule a free discovery session to understand your requirements, after which we'll provide a detailed proposal and technical roadmap.
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* Trust Logos */}
        <section className="trust-banner">
          <h3 className="trust-title">Trusted by innovative companies worldwide</h3>
          <div className="trust-logos-wrap">
            <div className="brand-logo">
              <ShieldCheck size={36} color="#6366f1" />
              <span>SecureCorp</span>
            </div>
            <div className="brand-logo">
              <Zap size={36} color="#eab308" />
              <span>FastTech</span>
            </div>
            <div className="brand-logo">
              <Globe size={36} color="#06b6d4" />
              <span>GlobalNet</span>
            </div>
            <div className="brand-logo">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              <span>BuildStack</span>
            </div>
          </div>
        </section>
      </main>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            mainEntity: {
              '@type': 'Organization',
              name: 'Microtechnique IT & Communication Solutions',
              telephone: '+91-6355997080',
              email: 'info@microtechniqueit.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Office No. G-40, Star World Complex',
                addressLocality: 'Surat',
                addressRegion: 'Gujarat',
                postalCode: '394510',
                addressCountry: 'IN',
              },
            },
          }),
        }}
      />
    </>
  );
}
