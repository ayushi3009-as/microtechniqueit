'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { Loader2 } from 'lucide-react';

const PRODUCTS = [
  'Microtechnique Accounts (Billing & Inventory)',
  'HRMS & Payroll Software',
  'ERP Solution',
  'CRM Software',
  'Hospital Management System',
  'School ERP',
  'Restaurant POS',
  'Builder CRM',
  'AI Chatbot / AI Voice Agent',
  'Custom Web Application',
  'Custom Mobile App',
  'Other'
];

export default function SubmitReferral() {
  const { token } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    customerCompany: '',
    productInterest: PRODUCTS[0],
    budgetRange: '',
    timeline: '',
    requirements: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;
    
    setLoading(true);
    setError('');
    
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/referrals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });
      
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to submit referral');
      }
      
      router.push('/dashboard/channel-partner/referrals');
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Submit New Referral</h1>
      
      <div className="card p-6 md:p-8 border border-border/50 bg-card rounded-xl">
        {error && (
          <div className="mb-6 p-3 bg-red-500/10 border border-red-500/50 rounded-lg text-red-500 text-sm">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="customerName" className="text-sm font-medium">Customer Name *</label>
              <input id="customerName" required value={formData.customerName} onChange={handleChange} type="text" className="w-full px-4 py-2.5 rounded-lg border border-border/50 bg-background/50 focus:border-primary outline-none text-sm" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label htmlFor="customerCompany" className="text-sm font-medium">Customer Company</label>
              <input id="customerCompany" value={formData.customerCompany} onChange={handleChange} type="text" className="w-full px-4 py-2.5 rounded-lg border border-border/50 bg-background/50 focus:border-primary outline-none text-sm" placeholder="Acme Corp" />
            </div>
            <div className="space-y-2">
              <label htmlFor="customerEmail" className="text-sm font-medium">Customer Email</label>
              <input id="customerEmail" value={formData.customerEmail} onChange={handleChange} type="email" className="w-full px-4 py-2.5 rounded-lg border border-border/50 bg-background/50 focus:border-primary outline-none text-sm" placeholder="john@acme.com" />
            </div>
            <div className="space-y-2">
              <label htmlFor="customerPhone" className="text-sm font-medium">Customer Phone</label>
              <input id="customerPhone" value={formData.customerPhone} onChange={handleChange} type="tel" className="w-full px-4 py-2.5 rounded-lg border border-border/50 bg-background/50 focus:border-primary outline-none text-sm" placeholder="+91 9876543210" />
            </div>
            
            <div className="space-y-2 md:col-span-2">
              <label htmlFor="productInterest" className="text-sm font-medium">Product / Service Interest *</label>
              <select id="productInterest" required value={formData.productInterest} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-border/50 bg-background/50 focus:border-primary outline-none text-sm">
                {PRODUCTS.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="budgetRange" className="text-sm font-medium">Estimated Budget (Optional)</label>
              <select id="budgetRange" value={formData.budgetRange} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-border/50 bg-background/50 focus:border-primary outline-none text-sm">
                <option value="">Select budget range...</option>
                <option value="Under ₹50,000">Under ₹50,000</option>
                <option value="₹50,000 - ₹1,00L">₹50,000 - ₹1,00,000</option>
                <option value="₹1,00L - ₹5,00L">₹1,00,000 - ₹5,00,000</option>
                <option value="Above ₹5,00L">Above ₹5,00,000</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="timeline" className="text-sm font-medium">Expected Timeline (Optional)</label>
              <select id="timeline" value={formData.timeline} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-border/50 bg-background/50 focus:border-primary outline-none text-sm">
                <option value="">Select timeline...</option>
                <option value="Immediate">Immediate (Within 1 week)</option>
                <option value="1-4 weeks">1-4 weeks</option>
                <option value="1-3 months">1-3 months</option>
                <option value="Just exploring">Just exploring</option>
              </select>
            </div>

            <div className="space-y-2 md:col-span-2">
              <label htmlFor="requirements" className="text-sm font-medium">Specific Requirements / Notes</label>
              <textarea id="requirements" value={formData.requirements} onChange={handleChange} rows={4} className="w-full px-4 py-2.5 rounded-lg border border-border/50 bg-background/50 focus:border-primary outline-none text-sm resize-none" placeholder="Provide any details about what the customer is looking for..." />
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button disabled={loading} type="submit" className="btn-primary py-2.5 px-8 shadow disabled:opacity-70 flex items-center gap-2">
              {loading && <Loader2 className="w-4 h-4 animate-spin" />}
              Submit Referral
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
