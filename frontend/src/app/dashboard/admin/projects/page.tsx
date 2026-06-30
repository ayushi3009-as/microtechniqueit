'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import StatusBadge from '@/components/dashboard/status-badge';
import { Loader2, Pencil, Plus, X } from 'lucide-react';
import { Role } from '@/lib/types';
import ExportButtons from '@/components/dashboard/export-buttons';

export default function AdminProjects() {
  const { token } = useAuth();
  const [projects, setProjects] = useState([]);
  const [workers, setWorkers] = useState([]);
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [processingId, setProcessingId] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    clientId: '',
    assignedToId: '',
    deadline: '',
    totalAmount: '',
  });

  const fetchData = async () => {
    if (!token) return;
    try {
      const [projRes, workersRes, clientsRes] = await Promise.all([
        fetch(process.env.NEXT_PUBLIC_API_URL + '/projects', { headers: { Authorization: `Bearer ${token}` } }),
        fetch(process.env.NEXT_PUBLIC_API_URL + `/admin/users?role=${Role.WORKING_PARTNER}`, { headers: { Authorization: `Bearer ${token}` } }),
        fetch(process.env.NEXT_PUBLIC_API_URL + '/admin/users?role=CHANNEL_PARTNER', { headers: { Authorization: `Bearer ${token}` } })
      ]);
      const projData = await projRes.json();
      const workersData = await workersRes.json();
      const clientsData = await clientsRes.json();

      setProjects(projData.projects || []);
      setWorkers(workersData.users || []);
      setClients(clientsData.users || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [token]);

  const openCreateModal = () => {
    setFormData({
      name: '',
      description: '',
      clientName: '',
      clientEmail: '',
      clientPhone: '',
      clientId: '',
      assignedToId: '',
      deadline: '',
      totalAmount: '',
    });
    setEditingId(null);
    setShowModal(true);
  };

  const openEditModal = (project: any) => {
    setFormData({
      name: project.name || '',
      description: project.description || '',
      clientName: project.clientName || '',
      clientEmail: project.clientEmail || '',
      clientPhone: project.clientPhone || '',
      clientId: project.clientId || '',
      assignedToId: project.assignedToId || '',
      deadline: project.deadline ? new Date(project.deadline).toISOString().split('T')[0] : '',
      totalAmount: project.totalAmount != null ? String(project.totalAmount) : '',
    });
    setEditingId(project.id);
    setShowModal(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setProcessingId(editingId || 'create');
    try {
      if (editingId) {
        await fetch(process.env.NEXT_PUBLIC_API_URL + `/projects/${editingId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(formData)
        });
      } else {
        await fetch(process.env.NEXT_PUBLIC_API_URL + '/projects', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(formData)
        });
      }
      setShowModal(false);
      await fetchData();
    } catch (err) {
      console.error(err);
      alert(editingId ? 'Failed to update project' : 'Failed to create project');
    } finally {
      setProcessingId(null);
    }
  };

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

  const handleUpdateEmpCommStatus = async (id: string, empCommissionStatus: string) => {
    setProcessingId(id);
    try {
      await fetch(process.env.NEXT_PUBLIC_API_URL + `/projects/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ empCommissionStatus })
      });
      await fetchData();
    } catch (err) {
      console.error(err);
      alert('Failed to update employee commission status');
    } finally {
      setProcessingId(null);
    }
  };

  if (loading) return <div className="p-12 flex justify-center"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Manage Projects</h1>
        <div className="flex items-center gap-3">
          <ExportButtons 
            data={projects}
            filename="Projects_List"
            columns={[
              { header: 'Project Name', accessor: (p) => p.name },
              { header: 'Description', accessor: (p) => p.description || '-' },
              { header: 'Client', accessor: (p) => p.clientName || '-' },
              { header: 'Client Contact', accessor: (p) => `${p.clientEmail || ''} ${p.clientPhone || ''}`.trim() },
              { header: 'Assigned To', accessor: (p) => p.assignedTo ? `${p.assignedTo.firstName} ${p.assignedTo.lastName}` : 'Unassigned' },
              { header: 'Value', accessor: (p) => p.totalAmount ? `Rs ${p.totalAmount}` : '-' },
              { header: 'Deadline', accessor: (p) => p.deadline ? new Date(p.deadline).toLocaleDateString() : '-' },
              { header: 'Status', accessor: (p) => p.status }
            ]}
          />
          <button onClick={openCreateModal} className="btn-primary py-2 px-4 shadow flex items-center gap-2">
            <Plus className="w-4 h-4" /> New Project
          </button>
        </div>
      </div>

      <div className="card border border-border/50 rounded-xl overflow-hidden bg-card">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-muted-foreground bg-muted/50 uppercase border-b border-border/50">
              <tr>
                <th className="px-6 py-4 font-medium">Project Name</th>
                <th className="px-6 py-4 font-medium">Client</th>
                <th className="px-6 py-4 font-medium">Assigned To</th>
                <th className="px-6 py-4 font-medium">Commissions</th>
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
                  <td className="px-6 py-4 text-xs w-48">
                    {p.empCommissionAmount || p.referral?.commissionAmount ? (
                      <div className="space-y-2">
                        {p.referral?.commissionAmount && (
                          <div className="border border-border/50 rounded p-1.5 bg-background">
                            <div className="flex justify-between mb-1 text-muted-foreground"><span>Partner</span><span className="font-medium text-green-500">₹{p.referral.commissionAmount}</span></div>
                            <StatusBadge status={p.referral.commissionStatus || 'PENDING'} />
                          </div>
                        )}
                        {p.empCommissionAmount && (
                          <div className="border border-border/50 rounded p-1.5 bg-background">
                            <div className="flex justify-between mb-1 text-muted-foreground"><span>Employee</span><span className="font-medium text-green-500">₹{p.empCommissionAmount}</span></div>
                            <div className="flex items-center justify-between">
                              <StatusBadge status={p.empCommissionStatus || 'PENDING'} />
                              {p.empCommissionStatus !== 'PAID' && (
                                <button 
                                  onClick={() => handleUpdateEmpCommStatus(p.id, 'PAID')}
                                  className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded hover:bg-primary/20"
                                >
                                  Mark Paid
                                </button>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : '-'}
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-bold">₹{p.totalAmount?.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">{p.deadline ? new Date(p.deadline).toLocaleDateString() : 'No deadline'}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="mb-2">
                      <StatusBadge status={p.status} />
                    </div>
                    <div className="flex items-center gap-2">
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
                      <button
                        onClick={() => openEditModal(p)}
                        className="p-2 bg-muted rounded hover:bg-foreground hover:text-background transition-colors"
                        title="Edit Project"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {projects.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-muted-foreground">
                    No projects found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center"
          style={{ padding: '16px' }}
        >
          <div
            className="bg-card border border-border/50 rounded-xl w-full max-w-2xl shadow-2xl max-h-[90vh] overflow-y-auto relative"
            style={{ padding: '24px' }}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">{editingId ? 'Edit Project' : 'Create New Project'}</h2>
              <button onClick={() => setShowModal(false)} className="p-1 rounded hover:bg-muted transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  required
                  placeholder="Project Name"
                  value={formData.name}
                  onChange={e => setFormData(f => ({ ...f, name: e.target.value }))}
                  className="w-full px-3 py-2 rounded border border-border bg-background"
                />
                <input
                  required
                  type="number"
                  placeholder="Total Amount (₹)"
                  value={formData.totalAmount}
                  onChange={e => setFormData(f => ({ ...f, totalAmount: e.target.value }))}
                  className="w-full px-3 py-2 rounded border border-border bg-background"
                />
                <input
                  type="date"
                  placeholder="Deadline"
                  value={formData.deadline}
                  onChange={e => setFormData(f => ({ ...f, deadline: e.target.value }))}
                  className="w-full px-3 py-2 rounded border border-border bg-background text-muted-foreground"
                />

                <select
                  required
                  value={formData.clientId}
                  onChange={e => setFormData(f => ({ ...f, clientId: e.target.value }))}
                  className="w-full px-3 py-2 rounded border border-border bg-background md:col-span-2"
                >
                  <option value="">-- Select Client --</option>
                  {clients.map((c: any) => (
                    <option key={c.id} value={c.id}>{c.firstName} {c.lastName} {c.companyName ? `(${c.companyName})` : `(${c.email})`}</option>
                  ))}
                </select>

                <select
                  value={formData.assignedToId}
                  onChange={e => setFormData(f => ({ ...f, assignedToId: e.target.value }))}
                  className="w-full px-3 py-2 rounded border border-border bg-background md:col-span-2"
                >
                  <option value="">-- Assign to Employee (Optional) --</option>
                  {workers.map((w: any) => (
                    <option key={w.id} value={w.id}>{w.firstName} {w.lastName} ({w.email})</option>
                  ))}
                </select>

                <textarea
                  placeholder="Project Description"
                  value={formData.description}
                  onChange={e => setFormData(f => ({ ...f, description: e.target.value }))}
                  className="w-full px-3 py-2 rounded border border-border bg-background md:col-span-2 resize-none h-24"
                />
              </div>
              <div className="flex justify-end gap-2 pt-4">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 rounded bg-muted">Cancel</button>
                <button
                  disabled={processingId === (editingId || 'create')}
                  type="submit"
                  className="btn-primary px-4 py-2 rounded flex items-center gap-2"
                >
                  {processingId === (editingId || 'create') && <Loader2 className="w-4 h-4 animate-spin" />}
                  {editingId ? 'Save Changes' : 'Create Project'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
