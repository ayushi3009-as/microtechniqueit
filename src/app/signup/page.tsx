'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Lock, User, ArrowRight, Building2 } from 'lucide-react';

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 relative overflow-hidden bg-background">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background" />
        <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-[460px]"
      >
        <div className="card p-8 md:p-10 shadow-2xl backdrop-blur-xl bg-card/80 border border-border/50">
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <span className="text-xl font-bold font-heading gradient-text">MicrotechniqueIT</span>
            </Link>
            <h1 className="text-2xl font-bold mb-2">Create an account</h1>
            <p className="text-sm text-muted-foreground">Get started with our premium software solutions</p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[13px] font-medium text-foreground">First name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-border/50 bg-background/50 focus:bg-background focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all text-sm"
                    required
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[13px] font-medium text-foreground">Last name</label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full px-3 py-2.5 rounded-lg border border-border/50 bg-background/50 focus:bg-background focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all text-sm"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[13px] font-medium text-foreground">Company</label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Acme Corp"
                  className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-border/50 bg-background/50 focus:bg-background focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all text-sm"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[13px] font-medium text-foreground">Work Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="john@company.com"
                  className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-border/50 bg-background/50 focus:bg-background focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all text-sm"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[13px] font-medium text-foreground">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-border/50 bg-background/50 focus:bg-background focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all text-sm"
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn-primary w-full py-2.5 flex items-center justify-center gap-2 mt-2 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
              Create account <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-6 text-center">
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
