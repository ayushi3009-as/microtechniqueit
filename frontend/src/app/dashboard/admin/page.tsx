'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import StatCard from '@/components/dashboard/stat-card';
import { Users, Briefcase, IndianRupee, FileText } from 'lucide-react';
import Link from 'next/link';

export default function AdminOverview() {
  const { token, user } = useAuth();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) return;

    fetch(process.env.NEXT_PUBLIC_API_URL + '/admin/stats', { headers: { Authorization: `Bearer ${token}` } })
      .then(res => res.json())
      .then(data => setData(data.stats))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [token]);

  if (loading) return <div>Loading dashboard...</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Users" value={data?.totalUsers || 0} icon={Users} />
        <StatCard title="Active Projects" value={data?.activeProjects || 0} icon={Briefcase} />
        <StatCard title="Total Referrals" value={data?.totalReferrals || 0} icon={FileText} />
        <StatCard title="Total Revenue" value={`₹${(data?.totalRevenue || 0).toLocaleString()}`} icon={IndianRupee} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <div className="card border border-border/50 rounded-xl overflow-hidden bg-card p-6">
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <div className="grid grid-cols-2 gap-4">
            <Link href="/dashboard/admin/employees" className="p-4 rounded-lg border border-border/50 bg-background/50 hover:bg-muted/50 transition-colors flex flex-col items-center justify-center text-center gap-2">
              <Users className="w-6 h-6 text-primary" />
              <span className="font-medium">Manage Employees</span>
            </Link>
            <Link href="/dashboard/admin/clients" className="p-4 rounded-lg border border-border/50 bg-background/50 hover:bg-muted/50 transition-colors flex flex-col items-center justify-center text-center gap-2">
              <Users className="w-6 h-6 text-primary" />
              <span className="font-medium">Manage Clients</span>
            </Link>
            <Link href="/dashboard/admin/referrals" className="p-4 rounded-lg border border-border/50 bg-background/50 hover:bg-muted/50 transition-colors flex flex-col items-center justify-center text-center gap-2">
              <FileText className="w-6 h-6 text-primary" />
              <span className="font-medium">Review Referrals</span>
            </Link>
            <Link href="/dashboard/admin/projects" className="p-4 rounded-lg border border-border/50 bg-background/50 hover:bg-muted/50 transition-colors flex flex-col items-center justify-center text-center gap-2">
              <Briefcase className="w-6 h-6 text-primary" />
              <span className="font-medium">Projects & Tasks</span>
            </Link>
            <Link href="/dashboard/admin/payments" className="p-4 rounded-lg border border-border/50 bg-background/50 hover:bg-muted/50 transition-colors flex flex-col items-center justify-center text-center gap-2">
              <IndianRupee className="w-6 h-6 text-primary" />
              <span className="font-medium">Manage Payments</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
