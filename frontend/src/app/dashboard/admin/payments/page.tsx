'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import StatusBadge from '@/components/dashboard/status-badge';
import { Loader2 } from 'lucide-react';
import { Role } from '@/lib/types';

export default function AdminPayments() {
  const { token } = useAuth();
  const [payments, setPayments] = useState([]);
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [processingId, setProcessingId] = useState<string | null>(null);
  
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    amount: '',
    paidToId: '',
    projectId: '',
    description: '',
  });

  const fetchData = async () => {
    if (!token) return;
    try {
      const [payRes, usersRes, projRes] = await Promise.all([
        fetch(process.env.NEXT_PUBLIC_API_URL + '/payments', { headers: { Authorization: `Bearer ${token}` } }),
        fetch(process.env.NEXT_PUBLIC_API_URL + '/admin/users', { headers: { Authorization: `Bearer ${token}` } }),
        fetch(process.env.NEXT_PUBLIC_API_URL + '/projects', { headers: { Authorization: `Bearer ${token}` } })
      ]);
      const payData = await payRes.json();
      const usersData = await usersRes.json();
      const projData = await projRes.json();
      
      setPayments(payData.payments || []);
      setUsers(usersData.users || []);
      setProjects(projData.projects || []);
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
      await fetch(process.env.NEXT_PUBLIC_API_URL + `/payments/${id}`, {
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
      alert('Failed to update payment status');
    } finally {
      setProcessingId(null);
    }
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setProcessingId('create');
    try {
      await fetch(process.env.NEXT_PUBLIC_API_URL + '/payments', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify(formData)
      });
      setShowModal(false);
      setFormData({ amount: '', paidToId: '', projectId: '', description: '' });
      await fetchData();
    } catch (err) {
      console.error(err);
      alert('Failed to create payment');
    } finally {
      setProcessingId(null);
    }
  };

  if (loading) return <div>Loading payments...</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Manage Payments</h1>
        <button onClick={() => setShowModal(true)} className="btn-primary py-2 px-4 shadow">
          + New Payment
        </button>
      </div>
      
      <div className="card border border-border/50 rounded-xl overflow-hidden bg-card">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-muted-foreground bg-muted/50 uppercase border-b border-border/50">
              <tr>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Recipient</th>
                <th className="px-6 py-4 font-medium">Project / Description</th>
                <th className="px-6 py-4 font-medium">Amount</th>
                <th className="px-6 py-4 font-medium">Status & Action</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((p: any) => (
                <tr key={p.id} className="border-b border-border/50 hover:bg-muted/30">
                  <td className="px-6 py-4 text-muted-foreground">
                    {new Date(p.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium">{p.paidTo?.firstName} {p.paidTo?.lastName}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium">{p.project?.name || 'General'}</div>
                    <div className="text-xs text-muted-foreground mt-1 line-clamp-1">{p.description}</div>
                  </td>
                  <td className="px-6 py-4 font-bold">
                    ₹{p.amount.toLocaleString()}
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
                        <option value="PAID">Paid</option>
                        <option value="CANCELLED">Cancelled</option>
                      </select>
                    )}
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

      {showModal && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card border border-border/50 rounded-xl p-6 w-full max-w-2xl shadow-2xl">
            <h2 className="text-xl font-bold mb-4">Create New Payment</h2>
            <form onSubmit={handleCreate} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input required type="number" placeholder="Amount (₹)" value={formData.amount} onChange={e => setFormData(f => ({...f, amount: e.target.value}))} className="w-full px-3 py-2 rounded border border-border bg-background" />
                
                <select required value={formData.paidToId} onChange={e => setFormData(f => ({...f, paidToId: e.target.value}))} className="w-full px-3 py-2 rounded border border-border bg-background">
                  <option value="">-- Select Recipient --</option>
                  {users.map((u: any) => (
                    <option key={u.id} value={u.id}>{u.firstName} {u.lastName} ({u.role})</option>
                  ))}
                </select>

                <select value={formData.projectId} onChange={e => setFormData(f => ({...f, projectId: e.target.value}))} className="w-full px-3 py-2 rounded border border-border bg-background">
                  <option value="">-- Select Project (Optional) --</option>
                  {projects.map((p: any) => (
                    <option key={p.id} value={p.id}>{p.name}</option>
                  ))}
                </select>
                
                <textarea placeholder="Description" value={formData.description} onChange={e => setFormData(f => ({...f, description: e.target.value}))} className="w-full px-3 py-2 rounded border border-border bg-background resize-none h-24" />
              </div>
              <div className="flex justify-end gap-2 pt-4">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 rounded bg-muted">Cancel</button>
                <button disabled={processingId === 'create'} type="submit" className="px-4 py-2 rounded bg-primary text-white flex items-center gap-2">
                  {processingId === 'create' && <Loader2 className="w-4 h-4 animate-spin" />}
                  Create Payment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
