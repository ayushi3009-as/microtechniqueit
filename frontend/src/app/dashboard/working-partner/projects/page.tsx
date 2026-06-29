'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import StatusBadge from '@/components/dashboard/status-badge';

export default function WorkingPartnerProjects() {
  const { token } = useAuth();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) return;
    
    fetch(process.env.NEXT_PUBLIC_API_URL + '/projects?assigned=me', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => res.json())
    .then(data => {
      setProjects(data.projects || []);
    })
    .catch(console.error)
    .finally(() => setLoading(false));
  }, [token]);

  if (loading) return <div>Loading projects...</div>;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">My Projects</h1>
      
      <div className="card border border-border/50 rounded-xl overflow-hidden bg-card">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-muted-foreground bg-muted/50 uppercase border-b border-border/50">
              <tr>
                <th className="px-6 py-4 font-medium">Project Name</th>
                <th className="px-6 py-4 font-medium">Client Info</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Deadline</th>
                <th className="px-6 py-4 font-medium">Value</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project: any) => (
                <tr key={project.id} className="border-b border-border/50 hover:bg-muted/30">
                  <td className="px-6 py-4">
                    <div className="font-medium text-foreground">{project.name}</div>
                    <div className="text-xs text-muted-foreground mt-1 line-clamp-1">{project.description}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium">{project.clientName}</div>
                    <div className="text-xs text-muted-foreground">{project.clientEmail}</div>
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={project.status} />
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">
                    {project.deadline ? new Date(project.deadline).toLocaleDateString() : 'No deadline'}
                  </td>
                  <td className="px-6 py-4 font-medium">
                    ₹{project.totalAmount.toLocaleString()}
                  </td>
                </tr>
              ))}
              {projects.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-muted-foreground">
                    No projects found.
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
