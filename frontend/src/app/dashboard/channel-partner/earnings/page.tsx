'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import StatusBadge from '@/components/dashboard/status-badge';
import StatCard from '@/components/dashboard/stat-card';
import { IndianRupee, Clock, CheckCircle2 } from 'lucide-react';

export default function ChannelPartnerEarnings() {
  const { token } = useAuth();
  const [referrals, setReferrals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) return;
    
    fetch(process.env.NEXT_PUBLIC_API_URL + '/referrals?mine=true', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => res.json())
    .then(data => {
      setReferrals(data.referrals || []);
    })
    .catch(console.error)
    .finally(() => setLoading(false));
  }, [token]);

  if (loading) return <div>Loading earnings...</div>;

  const acceptedReferrals = referrals.filter((r: any) => r.status === 'ACCEPTED' && r.commissionAmount > 0);
  
  const totalCommission = acceptedReferrals.reduce((acc, r: any) => acc + (r.commissionAmount || 0), 0);
  const totalPaid = acceptedReferrals.filter((r: any) => r.commissionStatus === 'PAID').reduce((acc, r: any) => acc + (r.commissionAmount || 0), 0);
  const totalPending = acceptedReferrals.filter((r: any) => r.commissionStatus !== 'PAID').reduce((acc, r: any) => acc + (r.commissionAmount || 0), 0);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Earnings & Commission</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <StatCard title="Total Commission" value={`₹${totalCommission.toLocaleString()}`} icon={IndianRupee} />
        <StatCard title="Commission Paid" value={`₹${totalPaid.toLocaleString()}`} icon={CheckCircle2} />
        <StatCard title="Commission Pending" value={`₹${totalPending.toLocaleString()}`} icon={Clock} />
      </div>

      <div className="card border border-border/50 rounded-xl overflow-hidden bg-card">
        <div className="p-6 border-b border-border/50">
          <h2 className="text-lg font-semibold">Commission Payouts</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-muted-foreground bg-muted/50 uppercase border-b border-border/50">
              <tr>
                <th className="px-6 py-4 font-medium">Customer Name</th>
                <th className="px-6 py-4 font-medium">Product</th>
                <th className="px-6 py-4 font-medium">Referral Date</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Commission</th>
              </tr>
            </thead>
            <tbody>
              {acceptedReferrals.map((ref: any) => (
                <tr key={ref.id} className="border-b border-border/50 hover:bg-muted/30">
                  <td className="px-6 py-4 font-medium text-foreground">
                    {ref.customerName}
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">
                    {ref.productInterest}
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">
                    {new Date(ref.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={ref.commissionStatus || 'PENDING'} />
                  </td>
                  <td className="px-6 py-4 font-bold text-green-500">
                    ₹{ref.commissionAmount.toLocaleString()}
                  </td>
                </tr>
              ))}
              {acceptedReferrals.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-muted-foreground">
                    No accepted commissions yet.
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
