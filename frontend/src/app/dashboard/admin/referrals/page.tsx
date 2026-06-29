'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import StatusBadge from '@/components/dashboard/status-badge';
import { Loader2, Check, X, DollarSign, Edit } from 'lucide-react';

export default function AdminReferrals() {
  const { token } = useAuth();
  const [referrals, setReferrals] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [processingId, setProcessingId] = useState<string | null>(null);
  
  // State for inline forms
  const [activeForm, setActiveForm] = useState<{ id: string, type: 'ACCEPT' | 'REJECT' | 'COMMISSION' } | null>(null);
  const [formData, setFormData] = useState({
    finalPrice: '',
    commissionAmount: '',
    adminNotes: ''
  });

  const fetchReferrals = async () => {
    if (!token) return;
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/referrals', {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      setReferrals(data.referrals || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReferrals();
  }, [token]);

  const handleAction = async (id: string, action: string, data: any) => {
    setProcessingId(id);
    try {
      await fetch(process.env.NEXT_PUBLIC_API_URL + `/referrals/${id}`, {
        method: 'PATCH',
        headers: { 
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify(data)
      });
      setActiveForm(null);
      await fetchReferrals();
    } catch (err) {
      console.error(err);
      alert('Action failed');
    } finally {
      setProcessingId(null);
    }
  };

  const handleAcceptSubmit = (e: React.FormEvent, id: string) => {
    e.preventDefault();
    handleAction(id, 'ACCEPT', {
      status: 'ACCEPTED',
      finalPrice: formData.finalPrice,
      commissionAmount: formData.commissionAmount,
      adminNotes: formData.adminNotes
    });
  };

  const handleRejectSubmit = (e: React.FormEvent, id: string) => {
    e.preventDefault();
    handleAction(id, 'REJECT', {
      status: 'REJECTED',
      adminNotes: formData.adminNotes
    });
  };

  if (loading) return <div>Loading referrals...</div>;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Manage Referrals</h1>
      
      <div className="card border border-border/50 rounded-xl overflow-hidden bg-card">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-muted-foreground bg-muted/50 uppercase border-b border-border/50">
              <tr>
                <th className="px-6 py-4 font-medium">Customer</th>
                <th className="px-6 py-4 font-medium">Referred By</th>
                <th className="px-6 py-4 font-medium">Product / Budget</th>
                <th className="px-6 py-4 font-medium">Status / Finance</th>
                <th className="px-6 py-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {referrals.map((ref: any) => (
                <tr key={ref.id} className="border-b border-border/50 hover:bg-muted/30">
                  <td className="px-6 py-4">
                    <div className="font-medium text-foreground">{ref.customerName}</div>
                    <div className="text-xs text-muted-foreground mt-1 line-clamp-1">{ref.customerCompany || ref.customerPhone}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium">{ref.referredBy?.firstName} {ref.referredBy?.lastName}</div>
                    <div className="text-xs text-muted-foreground">{ref.referredBy?.companyName}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium">{ref.productInterest}</div>
                    <div className="text-xs text-muted-foreground">{ref.budgetRange || 'No budget specified'}</div>
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={ref.status} />
                    {ref.status === 'ACCEPTED' && (
                      <div className="mt-2 text-xs border-t border-border/50 pt-2">
                        <div className="flex justify-between mb-1">
                          <span className="text-muted-foreground">Price:</span>
                          <span className="font-medium">₹{ref.finalPrice?.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Comm:</span>
                          <span className="font-medium text-green-500">₹{ref.commissionAmount?.toLocaleString()}</span>
                        </div>
                        <div className="mt-1">
                          <StatusBadge status={ref.commissionStatus || 'PENDING'} />
                        </div>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {processingId === ref.id ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <div className="flex flex-col gap-2">
                        {(ref.status === 'SUBMITTED' || ref.status === 'UNDER_REVIEW') && activeForm?.id !== ref.id && (
                          <div className="flex gap-2">
                            <button 
                              onClick={() => { setActiveForm({ id: ref.id, type: 'ACCEPT' }); setFormData({ finalPrice: '', commissionAmount: '', adminNotes: '' }); }}
                              className="p-2 bg-green-500/10 text-green-500 rounded hover:bg-green-500/20 transition-colors" title="Accept"
                            >
                              <Check className="w-4 h-4" />
                            </button>
                            <button 
                              onClick={() => { setActiveForm({ id: ref.id, type: 'REJECT' }); setFormData({ finalPrice: '', commissionAmount: '', adminNotes: '' }); }}
                              className="p-2 bg-red-500/10 text-red-500 rounded hover:bg-red-500/20 transition-colors" title="Reject"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        )}
                        
                        {ref.status === 'ACCEPTED' && ref.commissionStatus !== 'PAID' && (
                          <button 
                            onClick={() => handleAction(ref.id, 'MARK_PAID', { commissionStatus: 'PAID' })}
                            className="flex items-center gap-1 text-xs px-2 py-1.5 bg-primary/10 text-primary rounded hover:bg-primary/20 transition-colors"
                          >
                            <DollarSign className="w-3 h-3" /> Mark Paid
                          </button>
                        )}
                        
                        {/* Inline Form for Accept */}
                        {activeForm?.id === ref.id && activeForm?.type === 'ACCEPT' && (
                          <form onSubmit={(e) => handleAcceptSubmit(e, ref.id)} className="bg-background/80 p-3 rounded border border-border/50 text-xs w-64 -ml-40 absolute z-10 shadow-xl backdrop-blur">
                            <h4 className="font-medium mb-2">Accept Referral</h4>
                            <input required type="number" placeholder="Final Price (₹)" value={formData.finalPrice} onChange={e => setFormData(f => ({...f, finalPrice: e.target.value}))} className="w-full mb-2 p-1.5 rounded border border-border bg-background" />
                            <input required type="number" placeholder="Commission Amount (₹)" value={formData.commissionAmount} onChange={e => setFormData(f => ({...f, commissionAmount: e.target.value}))} className="w-full mb-2 p-1.5 rounded border border-border bg-background" />
                            <textarea placeholder="Notes (optional)" value={formData.adminNotes} onChange={e => setFormData(f => ({...f, adminNotes: e.target.value}))} className="w-full mb-2 p-1.5 rounded border border-border bg-background resize-none h-12" />
                            <div className="flex gap-2">
                              <button type="submit" className="flex-1 bg-green-500 text-white rounded py-1">Save</button>
                              <button type="button" onClick={() => setActiveForm(null)} className="flex-1 bg-muted rounded py-1">Cancel</button>
                            </div>
                          </form>
                        )}

                        {/* Inline Form for Reject */}
                        {activeForm?.id === ref.id && activeForm?.type === 'REJECT' && (
                          <form onSubmit={(e) => handleRejectSubmit(e, ref.id)} className="bg-background/80 p-3 rounded border border-border/50 text-xs w-64 -ml-40 absolute z-10 shadow-xl backdrop-blur">
                            <h4 className="font-medium mb-2">Reject Referral</h4>
                            <textarea required placeholder="Reason for rejection..." value={formData.adminNotes} onChange={e => setFormData(f => ({...f, adminNotes: e.target.value}))} className="w-full mb-2 p-1.5 rounded border border-border bg-background resize-none h-16" />
                            <div className="flex gap-2">
                              <button type="submit" className="flex-1 bg-red-500 text-white rounded py-1">Confirm Reject</button>
                              <button type="button" onClick={() => setActiveForm(null)} className="flex-1 bg-muted rounded py-1">Cancel</button>
                            </div>
                          </form>
                        )}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
              {referrals.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-muted-foreground">
                    No referrals found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
