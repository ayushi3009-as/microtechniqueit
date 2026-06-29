'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import StatusBadge from '@/components/dashboard/status-badge';

export default function WorkingPartnerPayments() {
  const { token } = useAuth();
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) return;
    
    fetch(process.env.NEXT_PUBLIC_API_URL + '/payments?mine=true', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => res.json())
    .then(data => {
      setPayments(data.payments || []);
    })
    .catch(console.error)
    .finally(() => setLoading(false));
  }, [token]);

  if (loading) return <div>Loading payments...</div>;

  const totalEarned = payments.filter((p: any) => p.status === 'PAID').reduce((acc, p: any) => acc + p.amount, 0);
  const pending = payments.filter((p: any) => p.status === 'PENDING').reduce((acc, p: any) => acc + p.amount, 0);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Payments</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="card p-6 border border-border/50 bg-card rounded-xl">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Total Earned (Paid)</h3>
          <span className="text-3xl font-bold text-green-500">₹{totalEarned.toLocaleString()}</span>
        </div>
        <div className="card p-6 border border-border/50 bg-card rounded-xl">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Pending Payments</h3>
          <span className="text-3xl font-bold text-yellow-500">₹{pending.toLocaleString()}</span>
        </div>
      </div>

      <div className="card border border-border/50 rounded-xl overflow-hidden bg-card">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-muted-foreground bg-muted/50 uppercase border-b border-border/50">
              <tr>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Project</th>
                <th className="px-6 py-4 font-medium">Description</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Amount</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment: any) => (
                <tr key={payment.id} className="border-b border-border/50 hover:bg-muted/30">
                  <td className="px-6 py-4 text-muted-foreground">
                    {new Date(payment.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 font-medium text-foreground">
                    {payment.project?.name || 'General Payment'}
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">
                    {payment.description || '-'}
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={payment.status} />
                  </td>
                  <td className="px-6 py-4 font-bold">
                    ₹{payment.amount.toLocaleString()}
                  </td>
                </tr>
              ))}
              {payments.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-muted-foreground">
                    No payments found.
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
