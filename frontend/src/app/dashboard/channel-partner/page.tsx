'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import StatCard from '@/components/dashboard/stat-card';
import StatusBadge from '@/components/dashboard/status-badge';
import { Users, FileText, CheckCircle2, IndianRupee } from 'lucide-react';
import Link from 'next/link';

export default function ChannelPartnerOverview() {
  const { token, user } = useAuth();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) return;

    fetch(process.env.NEXT_PUBLIC_API_URL + '/referrals?mine=true', { headers: { Authorization: `Bearer ${token}` } })
      .then(res => res.json())
      .then(data => setData({ referrals: data.referrals || [] }))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [token]);

  if (loading) return <div>Loading dashboard...</div>;

  const referrals = data?.referrals || [];
  
  const accepted = referrals.filter((r: any) => r.status === 'ACCEPTED').length;
  const pending = referrals.filter((r: any) => r.status === 'SUBMITTED' || r.status === 'UNDER_REVIEW').length;
  const totalCommission = referrals.filter((r: any) => r.status === 'ACCEPTED').reduce((acc: number, r: any) => acc + (r.commissionAmount || 0), 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Welcome back, {user?.firstName}!</h1>
        <Link href="/dashboard/channel-partner/refer" className="btn-primary py-2 px-4 shadow">
          + New Referral
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Referrals" value={referrals.length} icon={Users} />
        <StatCard title="Accepted" value={accepted} icon={CheckCircle2} />
        <StatCard title="Pending Review" value={pending} icon={FileText} />
        <StatCard title="Total Commission" value={`₹${totalCommission.toLocaleString()}`} icon={IndianRupee} />
      </div>

      <div className="card border border-border/50 rounded-xl overflow-hidden mt-8">
        <div className="p-6 border-b border-border/50 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Recent Referrals</h2>
          <Link href="/dashboard/channel-partner/referrals" className="text-sm text-primary hover:underline">View All</Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-muted-foreground bg-muted/50 uppercase border-b border-border/50">
              <tr>
                <th className="px-6 py-4 font-medium">Customer Name</th>
                <th className="px-6 py-4 font-medium">Product Interest</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Commission</th>
              </tr>
            </thead>
            <tbody>
              {referrals.slice(0, 5).map((ref: any) => (
                <tr key={ref.id} className="border-b border-border/50 hover:bg-muted/30">
                  <td className="px-6 py-4 font-medium">{ref.customerName}</td>
                  <td className="px-6 py-4 text-muted-foreground">{ref.productInterest}</td>
                  <td className="px-6 py-4">
                    <StatusBadge status={ref.status} />
                  </td>
                  <td className="px-6 py-4 font-medium text-green-500">
                    {ref.commissionAmount ? `₹${ref.commissionAmount.toLocaleString()}` : '-'}
                  </td>
                </tr>
              ))}
              {referrals.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-muted-foreground">
                    No referrals submitted yet.
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
