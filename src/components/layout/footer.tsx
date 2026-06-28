import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const footerLinks = {
  Services: [
    { label: 'Software Development', href: '/services/software-development' },
    { label: 'Web Development', href: '/services/web-development' },
    { label: 'Mobile Apps', href: '/services/mobile-apps' },
    { label: 'AI Solutions', href: '/services/ai-solutions' },
    { label: 'Cloud Services', href: '/services/cloud-services' },
    { label: 'Digital Marketing', href: '/services/digital-marketing' },
  ],
  Products: [
    { label: 'Microtechnique Accounts', href: '/products/microtechnique-accounts' },
    { label: 'Billing & Inventory', href: '/products/billing-inventory' },
    { label: 'Payroll Software', href: '/products/payroll-software' },
    { label: 'Industry Solutions', href: '/products/industry-specific-software' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Careers', href: '/careers' },
    { label: 'Partner Program', href: '/partner' },
  ],
  Resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Documentation', href: '/docs' },
    { label: 'Help Center', href: '/help' },
  ],
};

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#0f172a', color: '#ffffff', paddingTop: '100px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="container-custom" style={{ maxWidth: '1320px', margin: '0 auto' }}>
        
        {/* TOP SECTION: Newsletter & Contact */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '64px', marginBottom: '80px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '64px' }}>
          
          {/* Newsletter */}
          <div style={{ flex: '1 1 400px' }}>
            <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px' }}>Stay at the forefront of innovation.</h3>
            <p style={{ fontSize: '16px', color: '#94a3b8', marginBottom: '24px', maxWidth: '400px' }}>Subscribe to our newsletter for insights on enterprise tech, AI, and digital transformation.</p>
            <form style={{ display: 'flex', gap: '12px', maxWidth: '400px' }}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                style={{ flex: 1, height: '56px', padding: '0 20px', borderRadius: '12px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff', outline: 'none' }} 
              />
              <button 
                type="submit" 
                style={{ height: '56px', padding: '0 24px', borderRadius: '12px', backgroundColor: '#38bdf8', color: '#0f172a', fontWeight: 600, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                Subscribe <Send size={16} />
              </button>
            </form>
          </div>

          {/* Office & Contact */}
          <div style={{ flex: '1 1 400px', display: 'flex', flexWrap: 'wrap', gap: '48px' }}>
            <div>
              <h4 style={{ fontSize: '14px', fontWeight: 600, color: '#94a3b8', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Headquarters</h4>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: '#e2e8f0', marginBottom: '12px' }}>
                <MapPin size={20} style={{ color: '#38bdf8', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '15px', lineHeight: '1.6' }}>Office No. G-40, Star World Complex,<br />Pal Gam, Surat – 394510</span>
              </div>
            </div>
            <div>
              <h4 style={{ fontSize: '14px', fontWeight: 600, color: '#94a3b8', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Contact Us</h4>
              <a href="tel:+916355997080" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#e2e8f0', marginBottom: '12px', fontSize: '15px', textDecoration: 'none' }}>
                <Phone size={20} style={{ color: '#38bdf8' }} /> +91 6355997080
              </a>
              <a href="mailto:info@microtechniqueit.com" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#e2e8f0', fontSize: '15px', textDecoration: 'none' }}>
                <Mail size={20} style={{ color: '#38bdf8' }} /> info@microtechniqueit.com
              </a>
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION: Links & Brand */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '64px', marginBottom: '80px' }}>
          
          {/* Brand & Awards */}
          <div style={{ flex: '1 1 300px' }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', textDecoration: 'none' }}>
              <Image src="/logo.jpeg" alt="Microtechnique IT" width={40} height={40} style={{ borderRadius: '8px' }} />
              <span style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff' }}>
                Microtechnique<span style={{ color: '#38bdf8' }}>IT</span>
              </span>
            </Link>
            <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: '1.6', marginBottom: '32px' }}>
              A full-service technology company empowering businesses with innovative software solutions and enterprise products.
            </p>
            
            {/* Awards & Certs */}
            <div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
              <div style={{ padding: '8px 12px', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', fontSize: '12px', fontWeight: 600, color: '#e2e8f0' }}>ISO 9001:2015</div>
              <div style={{ padding: '8px 12px', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', fontSize: '12px', fontWeight: 600, color: '#e2e8f0' }}>MSME Registered</div>
            </div>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', transition: 'background-color 0.2s', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>IN</a>
              <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', transition: 'background-color 0.2s', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>X</a>
              <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', transition: 'background-color 0.2s', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>FB</a>
              <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', transition: 'background-color 0.2s', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>IG</a>
            </div>
          </div>

          {/* Links Matrix */}
          <div style={{ flex: '2 1 600px', display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} style={{ flex: '1 1 150px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: 600, color: '#94a3b8', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{category}</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {links.map(link => (
                    <li key={link.href}>
                      <Link href={link.href} style={{ color: '#e2e8f0', fontSize: '15px', textDecoration: 'none', transition: 'color 0.2s' }}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* BOTTOM SECTION */}
        <div style={{ padding: '32px 0', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
          <div style={{ fontSize: '14px', color: '#94a3b8' }}>
            &copy; {new Date().getFullYear()} Microtechnique IT & Communication Solutions. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '32px' }}>
            <Link href="/privacy" style={{ fontSize: '14px', color: '#94a3b8', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link href="/terms" style={{ fontSize: '14px', color: '#94a3b8', textDecoration: 'none' }}>Terms of Service</Link>
            <Link href="/cookies" style={{ fontSize: '14px', color: '#94a3b8', textDecoration: 'none' }}>Cookie Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
