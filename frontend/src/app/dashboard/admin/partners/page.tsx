'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import { Loader2, UserCheck, UserX, Pencil, Plus, X } from 'lucide-react';
import { Role } from '@/lib/types';
import ExportButtons from '@/components/dashboard/export-buttons';

export default function AdminPartners() {
  const { token } = useAuth();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [processingId, setProcessingId] = useState<string | null>(null);
  const filterRole = Role.CHANNEL_PARTNER;
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    role: Role.CHANNEL_PARTNER as string,
    companyName: '',
    gstNumber: '',
    employeeId: '',
    department: '',
  });

  const fetchUsers = async () => {
    if (!token) return;
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/admin/users${filterRole ? `?role=${filterRole}` : ''}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      setUsers(data.users || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchUsers();
  }, [token, filterRole]);

  const openCreateModal = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: '',
      role: Role.CHANNEL_PARTNER,
      companyName: '',
      gstNumber: '',
      employeeId: '',
      department: '',
    });
    setEditingId(null);
    setShowModal(true);
  };

  const openEditModal = (user: any) => {
    setFormData({
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      email: user.email || '',
      password: '',
      phone: user.phone || '',
      role: user.role || Role.CHANNEL_PARTNER,
      companyName: user.companyName || '',
      gstNumber: user.gstNumber || '',
      employeeId: user.employeeId || '',
      department: user.department || '',
    });
    setEditingId(user.id);
    setShowModal(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setProcessingId(editingId || 'create');
    try {
      if (editingId) {
        // Omit password field when editing
        const { password, ...updateData } = formData;
        await fetch(process.env.NEXT_PUBLIC_API_URL + `/admin/users/${editingId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(updateData)
        });
      } else {
        await fetch(process.env.NEXT_PUBLIC_API_URL + '/admin/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(formData)
        });
      }
      setShowModal(false);
      await fetchUsers();
    } catch (err) {
      console.error(err);
      alert(editingId ? 'Failed to update user' : 'Failed to create user');
    } finally {
      setProcessingId(null);
    }
  };

  const toggleStatus = async (id: string, currentStatus: boolean) => {
    setProcessingId(id);
    try {
      await fetch(process.env.NEXT_PUBLIC_API_URL + `/admin/users/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ isActive: !currentStatus })
      });
      await fetchUsers();
    } catch (err) {
      console.error(err);
      alert('Failed to update user status');
    } finally {
      setProcessingId(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Manage Partners</h1>
        <div className="flex items-center gap-3">
          <ExportButtons 
            data={users}
            filename="Partners_List"
            columns={[
              { header: 'Name', accessor: (u) => `${u.firstName} ${u.lastName}` },
              { header: 'Email', accessor: (u) => u.email },
              { header: 'Phone', accessor: (u) => u.phone || '-' },
              { header: 'Company', accessor: (u) => u.companyName || '-' },
              { header: 'GST', accessor: (u) => u.gstNumber || '-' },
              { header: 'Status', accessor: (u) => u.isActive ? 'Active' : 'Suspended' }
            ]}
          />
          <button onClick={openCreateModal} className="btn-primary py-2 px-4 shadow flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add Partner
          </button>
        </div>
      </div>

      <div className="card border border-border/50 rounded-xl overflow-hidden bg-card">
        {loading ? (
          <div className="p-12 flex justify-center"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground bg-muted/50 uppercase border-b border-border/50">
                <tr>
                  <th className="px-6 py-4 font-medium">Name</th>
                  <th className="px-6 py-4 font-medium">Phone</th>
                  <th className="px-6 py-4 font-medium">Company</th>
                  <th className="px-6 py-4 font-medium">GST No.</th>
                  <th className="px-6 py-4 font-medium">Joined</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u: any) => (
                  <tr key={u.id} className={`border-b border-border/50 hover:bg-muted/30 ${!u.isActive ? 'opacity-60' : ''}`}>
                    <td className="px-6 py-4">
                      <div className="font-medium text-foreground">{u.firstName} {u.lastName}</div>
                      <div className="text-xs text-muted-foreground mt-1">{u.email}</div>
                      {u.companyName && <div className="text-xs text-muted-foreground mt-1">{u.companyName}</div>}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      {u.phone || '—'}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      {u.companyName || '—'}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      {u.gstNumber || '—'}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      {new Date(u.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${u.isActive ? 'bg-green-500/10 text-green-500 border-green-500/20' : 'bg-red-500/10 text-red-500 border-red-500/20'}`}>
                        {u.isActive ? 'Active' : 'Suspended'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => openEditModal(u)}
                          className="p-2 bg-muted rounded hover:bg-foreground hover:text-background transition-colors"
                          title="Edit User"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => toggleStatus(u.id, u.isActive)}
                          disabled={processingId === u.id}
                          className="p-2 bg-muted rounded hover:bg-foreground hover:text-background transition-colors disabled:opacity-50"
                          title={u.isActive ? "Suspend User" : "Activate User"}
                        >
                          {processingId === u.id ? <Loader2 className="w-4 h-4 animate-spin" /> : u.isActive ? <UserX className="w-4 h-4" /> : <UserCheck className="w-4 h-4" />}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {users.length === 0 && (
                  <tr>
                    <td colSpan={7} className="px-6 py-8 text-center text-muted-foreground">
                      No users found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
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
              <h2 className="text-xl font-bold">{editingId ? 'Edit Partner' : 'Add Partner'}</h2>
              <button onClick={() => setShowModal(false)} className="p-1 rounded hover:bg-muted transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  required
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={e => setFormData(f => ({ ...f, firstName: e.target.value }))}
                  className="w-full px-3 py-2 rounded border border-border bg-background"
                />
                <input
                  required
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={e => setFormData(f => ({ ...f, lastName: e.target.value }))}
                  className="w-full px-3 py-2 rounded border border-border bg-background"
                />
                <input
                  required
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={e => setFormData(f => ({ ...f, email: e.target.value }))}
                  className="w-full px-3 py-2 rounded border border-border bg-background"
                />
                {!editingId && (
                  <input
                    required
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={e => setFormData(f => ({ ...f, password: e.target.value }))}
                    className="w-full px-3 py-2 rounded border border-border bg-background"
                  />
                )}
                <input
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={e => setFormData(f => ({ ...f, phone: e.target.value }))}
                  className="w-full px-3 py-2 rounded border border-border bg-background"
                />

                <input
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={e => setFormData(f => ({ ...f, companyName: e.target.value }))}
                  className="w-full px-3 py-2 rounded border border-border bg-background"
                />
                <input
                  placeholder="GST Number"
                  value={formData.gstNumber}
                  onChange={e => setFormData(f => ({ ...f, gstNumber: e.target.value }))}
                  className="w-full px-3 py-2 rounded border border-border bg-background"
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
                  {editingId ? 'Save Changes' : 'Create Partner'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
