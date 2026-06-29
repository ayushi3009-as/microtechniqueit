'use client';

import { useAuth } from '@/lib/auth-context';

export default function ProfilePage() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">My Profile</h1>
      
      <div className="card border border-border/50 bg-card rounded-xl overflow-hidden">
        <div className="p-6 border-b border-border/50 bg-muted/20">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-2xl">
              {user.firstName[0]}{user.lastName[0]}
            </div>
            <div>
              <h2 className="text-xl font-bold">{user.firstName} {user.lastName}</h2>
              <p className="text-muted-foreground">{user.role.replace('_', ' ')}</p>
            </div>
          </div>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground uppercase">Email Address</label>
              <p className="text-sm font-medium">{user.email}</p>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground uppercase">Phone Number</label>
              <p className="text-sm font-medium">{user.phone || 'Not provided'}</p>
            </div>
          </div>
          
          <div className="border-t border-border/50 pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {user.role === 'WORKING_PARTNER' ? (
              <>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-muted-foreground uppercase">Employee ID</label>
                  <p className="text-sm font-medium">{user.employeeId || 'N/A'}</p>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-muted-foreground uppercase">Department</label>
                  <p className="text-sm font-medium">{user.department || 'N/A'}</p>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-muted-foreground uppercase">Company Name</label>
                  <p className="text-sm font-medium">{user.companyName || 'N/A'}</p>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-muted-foreground uppercase">GST Number</label>
                  <p className="text-sm font-medium">{user.gstNumber || 'N/A'}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
