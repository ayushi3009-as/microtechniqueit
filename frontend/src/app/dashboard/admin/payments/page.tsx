'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import StatusBadge from '@/components/dashboard/status-badge';
import { Loader2, Pencil, Plus, X } from 'lucide-react';
import { Role, PaymentMode } from '@/lib/types';
import ExportButtons from '@/components/dashboard/export-buttons';

export default function AdminPayments() {
  const { token } = useAuth();
  const [payments, setPayments] = useState([]);
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [processingId, setProcessingId] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    amount: '',
    paidToId: '',
    projectId: '',
    description: '',
    paymentMode: '',
    percentagePaid: '',
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

  const openCreateModal = () => {
    setFormData({
      amount: '',
      paidToId: '',
      projectId: '',
      description: '',
      paymentMode: '',
      percentagePaid: '',
    });
    setEditingId(null);
    setShowModal(true);
  };

  const openEditModal = (payment: any) => {
    setFormData({
      amount: payment.amount != null ? String(payment.amount) : '',
      paidToId: payment.paidToId || '',
      projectId: payment.projectId || '',
      description: payment.description || '',
      paymentMode: payment.paymentMode || '',
      percentagePaid: payment.percentagePaid != null ? String(payment.percentagePaid) : '',
    });
    setEditingId(payment.id);
    setShowModal(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setProcessingId(editingId || 'create');
    try {
      if (editingId) {
        await fetch(process.env.NEXT_PUBLIC_API_URL + `/payments/${editingId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(formData)
        });
      } else {
        await fetch(process.env.NEXT_PUBLIC_API_URL + '/payments', {
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
      alert(editingId ? 'Failed to update payment' : 'Failed to create payment');
    } finally {
      setProcessingId(null);
    }
  };

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

  if (loading) return <div className="p-12 flex justify-center"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Manage Payments</h1>
        <div className="flex items-center gap-3">
          <ExportButtons 
            data={payments}
            filename="Payments_List"
            columns={[
              { header: 'Date', accessor: (p) => new Date(p.createdAt).toLocaleDateString() },
              { header: 'Recipient', accessor: (p) => p.paidTo ? `${p.paidTo.firstName} ${p.paidTo.lastName}` : '-' },
              { header: 'Project', accessor: (p) => p.project ? p.project.name : 'General' },
              { header: 'Amount', accessor: (p) => p.amount ? `Rs ${p.amount}` : '-' },
              { header: 'Mode', accessor: (p) => p.paymentMode ? p.paymentMode.replace(/_/g, ' ') : '-' },
              { header: '% Paid', accessor: (p) => p.percentagePaid != null ? `${p.percentagePaid}%` : '-' },
              { header: 'Status', accessor: (p) => p.status }
            ]}
          />
          <button onClick={openCreateModal} className="btn-primary py-2 px-4 shadow flex items-center gap-2">
            <Plus className="w-4 h-4" /> New Payment
          </button>
        </div>
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
                <th className="px-6 py-4 font-medium">Mode</th>
                <th className="px-6 py-4 font-medium">% Paid</th>
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
                    ₹{p.amount?.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">
                    {p.paymentMode ? p.paymentMode.replace(/_/g, ' ') : '—'}
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">
                    {p.percentagePaid != null ? `${p.percentagePaid}%` : '—'}
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
                          <option value="PAID">Paid</option>
                          <option value="CANCELLED">Cancelled</option>
                        </select>
                      )}
                      <button
                        onClick={() => openEditModal(p)}
                        className="p-2 bg-muted rounded hover:bg-foreground hover:text-background transition-colors"
                        title="Edit Payment"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {payments.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-6 py-8 text-center text-muted-foreground">
                    No payments found.
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
              <h2 className="text-xl font-bold">{editingId ? 'Edit Payment' : 'Create New Payment'}</h2>
              <button onClick={() => setShowModal(false)} className="p-1 rounded hover:bg-muted transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  required
                  type="number"
                  placeholder="Amount (₹)"
                  value={formData.amount}
                  onChange={e => setFormData(f => ({ ...f, amount: e.target.value }))}
                  className="w-full px-3 py-2 rounded border border-border bg-background"
                />

                <select
                  value={formData.paymentMode}
                  onChange={e => setFormData(f => ({ ...f, paymentMode: e.target.value }))}
                  className="w-full px-3 py-2 rounded border border-border bg-background"
                >
                  <option value="">-- Payment Mode --</option>
                  <option value="CASH">Cash</option>
                  <option value="UPI">UPI</option>
                  <option value="BANK_TRANSFER">Bank Transfer</option>
                  <option value="CHEQUE">Cheque</option>
                  <option value="CREDIT_CARD">Credit Card</option>
                  <option value="DEBIT_CARD">Debit Card</option>
                  <option value="OTHER">Other</option>
                </select>

                <input
                  type="number"
                  min="0"
                  max="100"
                  placeholder="Payment % (e.g. 50)"
                  value={formData.percentagePaid}
                  onChange={e => setFormData(f => ({ ...f, percentagePaid: e.target.value }))}
                  className="w-full px-3 py-2 rounded border border-border bg-background"
                />

                <select
                  required
                  value={formData.paidToId}
                  onChange={e => setFormData(f => ({ ...f, paidToId: e.target.value }))}
                  className="w-full px-3 py-2 rounded border border-border bg-background"
                >
                  <option value="">-- Select Recipient --</option>
                  {users.map((u: any) => (
                    <option key={u.id} value={u.id}>{u.firstName} {u.lastName} ({u.role})</option>
                  ))}
                </select>

                <select
                  value={formData.projectId}
                  onChange={e => setFormData(f => ({ ...f, projectId: e.target.value }))}
                  className="w-full px-3 py-2 rounded border border-border bg-background md:col-span-2"
                >
                  <option value="">-- Select Project (Optional) --</option>
                  {projects.map((p: any) => (
                    <option key={p.id} value={p.id}>{p.name}</option>
                  ))}
                </select>

                <textarea
                  placeholder="Description"
                  value={formData.description}
                  onChange={e => setFormData(f => ({ ...f, description: e.target.value }))}
                  className="w-full px-3 py-2 rounded border border-border bg-background resize-none h-24 md:col-span-2"
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
                  {editingId ? 'Save Changes' : 'Create Payment'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
