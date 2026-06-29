'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import StatusBadge from '@/components/dashboard/status-badge';
import { Loader2 } from 'lucide-react';
import { Role } from '@/lib/types';

export default function AdminProjects() {
  const { token } = useAuth();
  const [projects, setProjects] = useState([]);
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [processingId, setProcessingId] = useState<string | null>(null);
  
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    assignedToId: '',
    deadline: '',
    totalAmount: '',
  });

  const fetchData = async () => {
    if (!token) return;
    try {
      const [projRes, usersRes] = await Promise.all([
        fetch(process.env.NEXT_PUBLIC_API_URL + '/projects', { headers: { Authorization: `Bearer ${token}` } }),
        fetch(process.env.NEXT_PUBLIC_API_URL + `/admin/users?role=${Role.WORKING_PARTNER}`, { headers: { Authorization: `Bearer ${token}` } })
      ]);
      const projData = await projRes.json();
      const usersData = await usersRes.json();
      
      setProjects(projData.projects || []);
      setWorkers(usersData.users || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [token]);

  const handleUpdateStatus = async (id: string, status: string) => {
    setProcessingId(id);
    try {
      await fetch(process.env.NEXT_PUBLIC_API_URL + `/projects/${id}`, {
        method: 'PATCH',
        headers: { 
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify({ status })
      });
      await fetchData();
    } catch (err) {
      console.error(err);
      alert('Failed to update project status');
    } finally {
      setProcessingId(null);
    }
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setProcessingId('create');
    try {
      await fetch(process.env.NEXT_PUBLIC_API_URL + '/projects', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify(formData)
      });
      setShowModal(false);
      setFormData({ name: '', description: '', clientName: '', clientEmail: '', clientPhone: '', assignedToId: '', deadline: '', totalAmount: '' });
      await fetchData();
    } catch (err) {
      console.error(err);
      alert('Failed to create project');
    } finally {
      setProcessingId(null);
    }
  };

  if (loading) return <div>Loading projects...</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Manage Projects</h1>
        <button onClick={() => setShowModal(true)} className="btn-primary py-2 px-4 shadow">
          + New Project
        </button>
      </div>
      
      <div className="card border border-border/50 rounded-xl overflow-hidden bg-card">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-muted-foreground bg-muted/50 uppercase border-b border-border/50">
              <tr>
                <th className="px-6 py-4 font-medium">Project Name</th>
                <th className="px-6 py-4 font-medium">Client</th>
                <th className="px-6 py-4 font-medium">Assigned To</th>
                <th className="px-6 py-4 font-medium">Value & Deadline</th>
                <th className="px-6 py-4 font-medium">Status & Action</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p: any) => (
                <tr key={p.id} className="border-b border-border/50 hover:bg-muted/30">
                  <td className="px-6 py-4">
                    <div className="font-medium text-foreground">{p.name}</div>
                    <div className="text-xs text-muted-foreground mt-1 line-clamp-1">{p.description}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium">{p.clientName}</div>
                    <div className="text-xs text-muted-foreground">{p.clientEmail || p.clientPhone}</div>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">
                    {p.assignedTo ? `${p.assignedTo.firstName} ${p.assignedTo.lastName}` : 'Unassigned'}
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-bold">₹{p.totalAmount.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">{p.deadline ? new Date(p.deadline).toLocaleDateString() : 'No deadline'}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="mb-2">
                      <StatusBadge status={p.status} />
                    </div>
                    {processingId === p.id ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <select 
                        value={p.status} 
                        onChange={(e) => handleUpdateStatus(p.id, e.target.value)}
                        className="text-xs p-1 rounded border border-border bg-background"
                      >
                        <option value="PENDING">Pending</option>
                        <option value="IN_PROGRESS">In Progress</option>
                        <option value="ON_HOLD">On Hold</option>
                        <option value="COMPLETED">Completed</option>
                        <option value="CANCELLED">Cancelled</option>
                      </select>
                    )}
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

      {showModal && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card border border-border/50 rounded-xl p-6 w-full max-w-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Create New Project</h2>
            <form onSubmit={handleCreate} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input required placeholder="Project Name" value={formData.name} onChange={e => setFormData(f => ({...f, name: e.target.value}))} className="w-full px-3 py-2 rounded border border-border bg-background" />
                <input required type="number" placeholder="Total Amount (₹)" value={formData.totalAmount} onChange={e => setFormData(f => ({...f, totalAmount: e.target.value}))} className="w-full px-3 py-2 rounded border border-border bg-background" />
                <input required placeholder="Client Name" value={formData.clientName} onChange={e => setFormData(f => ({...f, clientName: e.target.value}))} className="w-full px-3 py-2 rounded border border-border bg-background" />
                <input type="email" placeholder="Client Email" value={formData.clientEmail} onChange={e => setFormData(f => ({...f, clientEmail: e.target.value}))} className="w-full px-3 py-2 rounded border border-border bg-background" />
                <input type="tel" placeholder="Client Phone" value={formData.clientPhone} onChange={e => setFormData(f => ({...f, clientPhone: e.target.value}))} className="w-full px-3 py-2 rounded border border-border bg-background" />
                <input type="date" placeholder="Deadline" value={formData.deadline} onChange={e => setFormData(f => ({...f, deadline: e.target.value}))} className="w-full px-3 py-2 rounded border border-border bg-background text-muted-foreground" />
                
                <select value={formData.assignedToId} onChange={e => setFormData(f => ({...f, assignedToId: e.target.value}))} className="w-full px-3 py-2 rounded border border-border bg-background md:col-span-2">
                  <option value="">-- Assign to Employee (Optional) --</option>
                  {workers.map((w: any) => (
                    <option key={w.id} value={w.id}>{w.firstName} {w.lastName} ({w.email})</option>
                  ))}
                </select>
                
                <textarea placeholder="Project Description" value={formData.description} onChange={e => setFormData(f => ({...f, description: e.target.value}))} className="w-full px-3 py-2 rounded border border-border bg-background md:col-span-2 resize-none h-24" />
              </div>
              <div className="flex justify-end gap-2 pt-4">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 rounded bg-muted">Cancel</button>
                <button disabled={processingId === 'create'} type="submit" className="px-4 py-2 rounded bg-primary text-white flex items-center gap-2">
                  {processingId === 'create' && <Loader2 className="w-4 h-4 animate-spin" />}
                  Create Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
