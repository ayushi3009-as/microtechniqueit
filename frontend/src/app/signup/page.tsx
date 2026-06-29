'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Building, ArrowRight, Phone, AlertCircle, Loader2 } from 'lucide-react';
import { Role } from '@/lib/types';
import { useAuth } from '@/lib/auth-context';

export default function SignupPage() {
  const [role, setRole] = useState<Role>(Role.CHANNEL_PARTNER);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    companyName: '',
    gstNumber: '',
    employeeId: '',
    department: '',
  });
  
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, role }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to register');
      }

      // Login immediately
      login(data.token, data.user);
      
      // Redirect based on role
      if (data.user.role === Role.CHANNEL_PARTNER) {
        router.push('/dashboard/channel-partner');
      } else {
        router.push('/dashboard/working-partner');
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 relative overflow-hidden bg-background">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background" />
        <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-[500px]"
      >
        <div className="card p-8 md:p-10 shadow-2xl backdrop-blur-xl bg-card/80 border border-border/50">
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold font-heading gradient-text">MicrotechniqueIT</span>
            </Link>
            <h1 className="text-2xl font-bold mb-2">Create an account</h1>
            <p className="text-sm text-muted-foreground">Join our partner network today</p>
          </div>

          {error && (
            <div className="mb-6 p-3 bg-red-500/10 border border-red-500/50 rounded-lg flex items-start gap-2 text-red-500 text-sm">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <p>{error}</p>
            </div>
          )}

          <div className="mb-6 flex p-1 bg-background/50 rounded-lg border border-border/50">
            <button 
              onClick={() => setRole(Role.CHANNEL_PARTNER)}
              className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-all ${role === Role.CHANNEL_PARTNER ? 'bg-primary text-primary-foreground shadow' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Channel Partner
            </button>
            <button 
              onClick={() => setRole(Role.WORKING_PARTNER)}
              className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-all ${role === Role.WORKING_PARTNER ? 'bg-primary text-primary-foreground shadow' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Employee (Working)
            </button>
          </div>

          <form className="space-y-4" onSubmit={handleSignup}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="firstName" className="text-sm font-medium text-foreground">First Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input id="firstName" required value={formData.firstName} onChange={handleChange} type="text" placeholder="John" className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border/50 bg-background/50 focus:bg-background focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all text-sm" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label htmlFor="lastName" className="text-sm font-medium text-foreground">Last Name</label>
                <input id="lastName" required value={formData.lastName} onChange={handleChange} type="text" placeholder="Doe" className="w-full px-4 py-2.5 rounded-lg border border-border/50 bg-background/50 focus:bg-background focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all text-sm" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email" className="text-sm font-medium text-foreground">Work Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input id="email" required value={formData.email} onChange={handleChange} type="email" placeholder="john@company.com" className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border/50 bg-background/50 focus:bg-background focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all text-sm" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input id="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="+91 9876543210" className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border/50 bg-background/50 focus:bg-background focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all text-sm" />
              </div>
            </div>

            {role === Role.CHANNEL_PARTNER && (
              <>
                <div className="space-y-1.5">
                  <label htmlFor="companyName" className="text-sm font-medium text-foreground">Company Name</label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input id="companyName" required value={formData.companyName} onChange={handleChange} type="text" placeholder="Acme Corp" className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border/50 bg-background/50 focus:bg-background focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all text-sm" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="gstNumber" className="text-sm font-medium text-foreground">GST Number (Optional)</label>
                  <input id="gstNumber" value={formData.gstNumber} onChange={handleChange} type="text" placeholder="22AAAAA0000A1Z5" className="w-full px-4 py-2.5 rounded-lg border border-border/50 bg-background/50 focus:bg-background focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all text-sm" />
                </div>
              </>
            )}

            {role === Role.WORKING_PARTNER && (
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="employeeId" className="text-sm font-medium text-foreground">Employee ID</label>
                  <input id="employeeId" required value={formData.employeeId} onChange={handleChange} type="text" placeholder="EMP-001" className="w-full px-4 py-2.5 rounded-lg border border-border/50 bg-background/50 focus:bg-background focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all text-sm" />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="department" className="text-sm font-medium text-foreground">Department</label>
                  <input id="department" required value={formData.department} onChange={handleChange} type="text" placeholder="Engineering" className="w-full px-4 py-2.5 rounded-lg border border-border/50 bg-background/50 focus:bg-background focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all text-sm" />
                </div>
              </div>
            )}

            <div className="space-y-1.5">
              <label htmlFor="password" className="text-sm font-medium text-foreground">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input id="password" required value={formData.password} onChange={handleChange} type="password" placeholder="••••••••" className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border/50 bg-background/50 focus:bg-background focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all text-sm" />
              </div>
            </div>

            <button disabled={isLoading} type="submit" className="btn-primary w-full py-2.5 flex items-center justify-center gap-2 mt-2 shadow-[0_0_15px_rgba(37,99,235,0.2)] disabled:opacity-70">
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Create account <ArrowRight className="w-4 h-4" /></>}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{' '}
              <Link href="/login" className="text-primary font-semibold hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
