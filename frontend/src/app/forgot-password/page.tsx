'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, KeyRound, Lock, Loader2, ArrowRight } from 'lucide-react';

export default function ForgotPassword() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return setError('Email is required');
    
    setLoading(true);
    setError('');
    setMessage('');
    
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await res.json();
      
      if (!res.ok) throw new Error(data.error || 'Failed to send OTP');
      
      setMessage('OTP has been sent to your email.');
      setStep(2);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp) return setError('OTP is required');
    
    setLoading(true);
    setError('');
    
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp })
      });
      const data = await res.json();
      
      if (!res.ok) throw new Error(data.error || 'Invalid OTP');
      
      setMessage('OTP verified. Please enter your new password.');
      setStep(3);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPassword || newPassword !== confirmPassword) {
      return setError('Passwords do not match');
    }
    if (newPassword.length < 6) {
      return setError('Password must be at least 6 characters long');
    }
    
    setLoading(true);
    setError('');
    
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp, newPassword })
      });
      const data = await res.json();
      
      if (!res.ok) throw new Error(data.error || 'Failed to reset password');
      
      setMessage('Password reset successfully. Redirecting to login...');
      setTimeout(() => router.push('/'), 2000);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute -bottom-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <div className="card w-full max-w-md p-8 rounded-2xl border border-border/50 bg-card/80 backdrop-blur-xl shadow-2xl z-10">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center">
            <Lock className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Reset Password</h1>
          <p className="text-sm text-muted-foreground">
            {step === 1 && "Enter your email to receive a secure OTP"}
            {step === 2 && "Enter the 6-digit OTP sent to your email"}
            {step === 3 && "Create a new, secure password"}
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-medium">
            {error}
          </div>
        )}

        {message && !error && (
          <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-500 text-sm font-medium">
            {message}
          </div>
        )}

        {step === 1 && (
          <form onSubmit={handleSendOtp} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-border/50 bg-background/50 focus:bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                  placeholder="name@example.com"
                  required
                />
              </div>
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-3 rounded-xl font-medium shadow-lg shadow-primary/25 flex justify-center items-center gap-2"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : (
                <>Send OTP <ArrowRight className="w-4 h-4" /></>
              )}
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">One-Time Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <KeyRound className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  type="text"
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-border/50 bg-background/50 focus:bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none tracking-[0.5em] font-mono text-center"
                  placeholder="------"
                  required
                />
              </div>
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-3 rounded-xl font-medium shadow-lg shadow-primary/25 flex justify-center items-center gap-2"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : (
                <>Verify OTP <ArrowRight className="w-4 h-4" /></>
              )}
            </button>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handleResetPassword} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">New Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-border/50 bg-background/50 focus:bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Confirm Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-border/50 bg-background/50 focus:bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-3 rounded-xl font-medium shadow-lg shadow-primary/25 flex justify-center items-center gap-2"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Reset Password'}
            </button>
          </form>
        )}

        <div className="mt-8 text-center">
          <Link href="/" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
