'use client';

import { Send } from 'lucide-react';

export function ContactForm() {
  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
          <input id="name" type="text" required placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
          <input id="email" type="email" required placeholder="john@company.com" className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
          <input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">Service Interested In</label>
          <select id="service" className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" defaultValue="">
            <option value="" disabled>Select a service</option>
            <option value="software-dev">Software Development</option>
            <option value="web-dev">Web Development</option>
            <option value="mobile-apps">Mobile App Development</option>
            <option value="ai">AI Solutions</option>
            <option value="erp">Enterprise ERP</option>
            <option value="crm">CRM Solutions</option>
            <option value="cloud">Cloud Services</option>
            <option value="digital-marketing">Digital Marketing</option>
            <option value="seo">SEO Services</option>
            <option value="accounting">Accounting Software</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">Project Budget (Optional)</label>
        <select id="budget" className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" defaultValue="">
          <option value="" disabled>Select budget range</option>
          <option value="small">₹50K - ₹2L</option>
          <option value="medium">₹2L - ₹5L</option>
          <option value="large">₹5L - ₹15L</option>
          <option value="enterprise">₹15L+</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Project Details *</label>
        <textarea id="message" required rows={5} placeholder="Tell us about your project requirements, timeline, and goals..." className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none" />
      </div>
      <button type="submit" className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25">
        Send Message <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
