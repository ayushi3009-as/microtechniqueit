'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, ArrowLeft, Send, Lock } from 'lucide-react';
import { useState } from 'react';

export default function ForgotPasswordPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 relative overflow-hidden bg-background">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background" />
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-[420px]"
      >
        <div className="card p-8 md:p-10 shadow-2xl backdrop-blur-xl bg-card/80 border border-border/50">
          {!isSubmitted ? (
            <>
              <div className="text-center mb-8">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 border border-primary/20">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <h1 className="text-2xl font-bold mb-2">Reset Password</h1>
                <p className="text-sm text-muted-foreground">Enter your email address and we&apos;ll send you a link to reset your password.</p>
              </div>

              <form 
                className="space-y-5" 
                onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }}
              >
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      id="email"
                      type="email"
                      placeholder="name@company.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border/50 bg-background/50 focus:bg-background focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all text-sm"
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="btn-primary w-full py-2.5 flex items-center justify-center gap-2 mt-4 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                  Send Reset Link <Send className="w-4 h-4" />
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-6">
              <div className="mx-auto w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6 border border-green-500/20">
                <Mail className="w-8 h-8 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold mb-3">Check your email</h2>
              <p className="text-muted-foreground mb-8">
                We&apos;ve sent a password reset link to your email address. Please check your inbox and spam folder.
              </p>
            </div>
          )}

          <div className="mt-8 text-center border-t border-border/50 pt-6">
            <Link href="/login" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Sign in
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
