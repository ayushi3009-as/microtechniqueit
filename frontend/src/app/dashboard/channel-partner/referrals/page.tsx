'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import StatusBadge from '@/components/dashboard/status-badge';
import Link from 'next/link';

export default function ChannelPartnerReferrals() {
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

  if (loading) return <div>Loading referrals...</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">My Referrals</h1>
        <Link href="/dashboard/channel-partner/refer" className="btn-primary py-2 px-4 shadow">
          + New Referral
        </Link>
      </div>
      
      <div className="card border border-border/50 rounded-xl overflow-hidden bg-card">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-muted-foreground bg-muted/50 uppercase border-b border-border/50">
              <tr>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Customer Details</th>
                <th className="px-6 py-4 font-medium">Product Interest</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Commission Amount</th>
              </tr>
            </thead>
            <tbody>
              {referrals.map((ref: any) => (
                <tr key={ref.id} className="border-b border-border/50 hover:bg-muted/30">
                  <td className="px-6 py-4 text-muted-foreground">
                    {new Date(ref.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-foreground">{ref.customerName}</div>
                    <div className="text-xs text-muted-foreground mt-1">{ref.customerCompany || ref.customerPhone || 'No contact info'}</div>
                  </td>
                  <td className="px-6 py-4 font-medium">
                    {ref.productInterest}
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={ref.status} />
                  </td>
                  <td className="px-6 py-4">
                    {ref.status === 'ACCEPTED' ? (
                      <div>
                        <div className="font-bold text-green-500">
                          ₹{ref.commissionAmount?.toLocaleString() || 0}
                        </div>
                        <div className="text-xs mt-1">
                          <StatusBadge status={ref.commissionStatus || 'PENDING'} />
                        </div>
                      </div>
                    ) : (
                      <span className="text-muted-foreground text-xs italic">TBD upon acceptance</span>
                    )}
                  </td>
                </tr>
              ))}
              {referrals.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-muted-foreground">
                    You haven't submitted any referrals yet.
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
