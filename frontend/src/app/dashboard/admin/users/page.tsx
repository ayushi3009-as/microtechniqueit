'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import { Loader2, UserCheck, UserX } from 'lucide-react';
import { Role } from '@/lib/types';

export default function AdminUsers() {
  const { token } = useAuth();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [processingId, setProcessingId] = useState<string | null>(null);
  const [filterRole, setFilterRole] = useState<string>('');

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
        <h1 className="text-2xl font-bold">Manage Users</h1>
        <select 
          value={filterRole}
          onChange={(e) => setFilterRole(e.target.value)}
          className="px-4 py-2 rounded-lg border border-border/50 bg-card outline-none text-sm"
        >
          <option value="">All Roles</option>
          <option value={Role.WORKING_PARTNER}>Working Partners (Employees)</option>
          <option value={Role.CHANNEL_PARTNER}>Channel Partners</option>
        </select>
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
                  <th className="px-6 py-4 font-medium">Role</th>
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
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold border bg-primary/10 text-primary border-primary/20">
                        {u.role.replace('_', ' ')}
                      </span>
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
                      <button 
                        onClick={() => toggleStatus(u.id, u.isActive)}
                        disabled={processingId === u.id}
                        className="p-2 bg-muted rounded hover:bg-foreground hover:text-background transition-colors disabled:opacity-50"
                        title={u.isActive ? "Suspend User" : "Activate User"}
                      >
                        {processingId === u.id ? <Loader2 className="w-4 h-4 animate-spin" /> : u.isActive ? <UserX className="w-4 h-4" /> : <UserCheck className="w-4 h-4" />}
                      </button>
                    </td>
                  </tr>
                ))}
                {users.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-muted-foreground">
                      No users found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
