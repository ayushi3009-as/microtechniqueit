'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import StatCard from '@/components/dashboard/stat-card';
import StatusBadge from '@/components/dashboard/status-badge';
import { Briefcase, CreditCard, Clock, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function WorkingPartnerOverview() {
  const { token, user } = useAuth();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) return;

    async function fetchData() {
      try {
        const [projectsRes, paymentsRes] = await Promise.all([
          fetch(process.env.NEXT_PUBLIC_API_URL + '/projects?assigned=me', { headers: { Authorization: `Bearer ${token}` } }),
          fetch(process.env.NEXT_PUBLIC_API_URL + '/payments?mine=true', { headers: { Authorization: `Bearer ${token}` } })
        ]);
        
        const projectsData = await projectsRes.json();
        const paymentsData = await paymentsRes.json();
        
        setData({
          projects: projectsData.projects || [],
          payments: paymentsData.payments || [],
        });
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [token]);

  if (loading) return <div>Loading dashboard...</div>;

  const projects = data?.projects || [];
  const payments = data?.payments || [];
  
  const inProgress = projects.filter((p: any) => p.status === 'IN_PROGRESS').length;
  const completed = projects.filter((p: any) => p.status === 'COMPLETED').length;
  const pendingPayments = payments.filter((p: any) => p.status === 'PENDING').reduce((acc: number, p: any) => acc + p.amount, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Welcome back, {user?.firstName}!</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Projects" value={projects.length} icon={Briefcase} />
        <StatCard title="In Progress" value={inProgress} icon={Clock} />
        <StatCard title="Completed" value={completed} icon={CheckCircle2} />
        <StatCard title="Pending Payments" value={`₹${pendingPayments.toLocaleString()}`} icon={CreditCard} />
      </div>

      <div className="card border border-border/50 rounded-xl overflow-hidden mt-8">
        <div className="p-6 border-b border-border/50 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Recent Projects</h2>
          <Link href="/dashboard/working-partner/projects" className="text-sm text-primary hover:underline">View All</Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-muted-foreground bg-muted/50 uppercase border-b border-border/50">
              <tr>
                <th className="px-6 py-4 font-medium">Project Name</th>
                <th className="px-6 py-4 font-medium">Client</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Deadline</th>
              </tr>
            </thead>
            <tbody>
              {projects.slice(0, 5).map((project: any) => (
                <tr key={project.id} className="border-b border-border/50 hover:bg-muted/30">
                  <td className="px-6 py-4 font-medium">{project.name}</td>
                  <td className="px-6 py-4 text-muted-foreground">{project.clientName}</td>
                  <td className="px-6 py-4">
                    <StatusBadge status={project.status} />
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">
                    {project.deadline ? new Date(project.deadline).toLocaleDateString() : 'N/A'}
                  </td>
                </tr>
              ))}
              {projects.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-muted-foreground">
                    No projects assigned yet.
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
