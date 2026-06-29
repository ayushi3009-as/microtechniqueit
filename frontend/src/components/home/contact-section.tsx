'use client';

import { useState } from 'react';
import { Mail, MapPin } from 'lucide-react';
import { companyInfo } from '@/data/company';

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.1)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="badge mb-4 mx-auto w-fit">Get In Touch</div>
          <h2>
            Let's Build <span className="text-accent-gradient">Something Amazing</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Ready to transform your business? Book a free demo or contact us to discuss your requirements.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row" style={{ gap: '48px' }}>
          
          {/* LEFT: Form */}
          <div className="w-full lg:w-[60%]">
            <div className="glass rounded-2xl bg-card border-border relative" style={{ padding: '32px' }}>
              
              {isSubmitted ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm rounded-2xl z-20">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 text-3xl mb-4">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Thank you!</h3>
                  <p className="text-foreground/70">We will be in touch shortly.</p>
                </div>
              ) : null}

              <h3 className="text-2xl font-bold text-foreground mb-6">Book a Free Demo</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-1.5">Full Name</label>
                    <input required type="text" className="form-input w-full" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-1.5">Phone Number</label>
                    <input required type="tel" className="form-input w-full" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-1.5">Email Address</label>
                    <input required type="email" className="form-input w-full" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-1.5">Company Name</label>
                    <input type="text" className="form-input w-full" placeholder="Your Company Ltd." />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-1.5">Product / Service Interest</label>
                  <select required className="form-input w-full bg-card">
                    <option value="" disabled selected>Select an option</option>
                    <option>Microtechnique Accounts</option>
                    <option>HRMS & Payroll</option>
                    <option>ERP Solution</option>
                    <option>CRM</option>
                    <option>Hospital Management</option>
                    <option>School ERP</option>
                    <option>Restaurant POS</option>
                    <option>Builder CRM</option>
                    <option>AI Solutions</option>
                    <option>Custom Development</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-1.5">Message (Optional)</label>
                  <textarea rows={4} className="form-input w-full resize-none" placeholder="Tell us about your requirements..."></textarea>
                </div>

                <button type="submit" className="btn-primary w-full py-3.5 mt-2 text-base">
                  🚀 Book Free Demo
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT: Contact Info & Map */}
          <div className="w-full lg:w-[40%] flex flex-col" style={{ gap: '24px' }}>
            
            {/* WhatsApp Card */}
            <div className="glass rounded-2xl bg-card border-border flex items-start" style={{ padding: '24px', gap: '16px' }}>
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.01 2.01001C6.49002 2.01001 2.01001 6.49001 2.01001 12.01C2.01001 13.91 2.54002 15.68 3.47002 17.21L2.01001 22.01L6.96001 20.66C8.47001 21.53 10.18 22.01 12.01 22.01C17.53 22.01 22.01 17.53 22.01 12.01C22.01 6.49001 17.53 2.01001 12.01 2.01001Z" fill="#25D366"/>
                  <path d="M16.92 14.54C16.67 14.41 15.46 13.82 15.23 13.73C15.01 13.65 14.84 13.6 14.68 13.85C14.51 14.09 14.05 14.64 13.91 14.81C13.77 14.97 13.62 14.99 13.38 14.87C13.13 14.75 12.34 14.49 11.4 13.66C10.66 13.01 10.15 12.21 10 11.96C9.85 11.71 9.98 11.58 10.1 11.45C10.21 11.33 10.35 11.16 10.47 11.02C10.59 10.87 10.64 10.77 10.72 10.61C10.8 10.45 10.76 10.3 10.7 10.18C10.64 10.05 10.15 8.85 9.94 8.35C9.74 7.87 9.54 7.94 9.39 7.94C9.25 7.94 9.09 7.94 8.92 7.94C8.76 7.94 8.49 8 8.27 8.25C8.04 8.5 7.42 9.07 7.42 10.24C7.42 11.4 8.29 12.53 8.41 12.69C8.53 12.85 10.09 15.26 12.45 16.27C13.01 16.51 13.45 16.66 13.79 16.76C14.35 16.94 14.86 16.91 15.26 16.85C15.71 16.78 16.67 16.26 16.88 15.68C17.08 15.1 17.08 14.6 17.01 14.49C16.95 14.4 16.79 14.34 16.54 14.21H16.92V14.54Z" fill="white"/>
                </svg>
              </div>
              <div>
                <h4 className="text-foreground font-semibold mb-1">WhatsApp Us</h4>
                <p className="text-muted-foreground text-sm mb-3">+91 6355997080</p>
                <a 
                  href="https://wa.me/916355997080?text=Hi%20Microtechnique%20IT" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-500 text-sm font-semibold hover:underline"
                >
                  Chat on WhatsApp →
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="glass rounded-2xl bg-card border-border flex items-start" style={{ padding: '24px', gap: '16px' }}>
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-foreground font-semibold mb-1">Email Us</h4>
                <a href="mailto:info@microtechniqueit.com" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                  {companyInfo.email}
                </a>
              </div>
            </div>

            {/* Address & Map Card */}
            <div className="glass rounded-2xl bg-card border-border flex flex-col" style={{ padding: '24px', gap: '16px' }}>
              <div className="flex items-start" style={{ gap: '16px' }}>
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="text-foreground font-semibold mb-1">Visit Our Office</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {companyInfo.address}
                  </p>
                </div>
              </div>
              
              <div className="w-full aspect-[16/9] rounded-xl overflow-hidden border border-border mt-2">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.1891744688337!2d72.78611231539288!3d21.17067998592624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d9addfcee21%3A0xfbf3e5d7ca0a14e3!2sStar%20World%20Complex!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Office Location"
                ></iframe>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
