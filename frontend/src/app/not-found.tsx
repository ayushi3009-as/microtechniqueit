import Link from 'next/link';
import { ArrowRight, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      
      <div className="relative z-10 text-center px-6">
        <div className="text-[150px] lg:text-[200px] font-heading font-bold leading-none text-accent-gradient select-none">404</div>
        <h1 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4 -mt-4">Page Not Found</h1>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
            <Home className="h-4 w-4" /> Go Home
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl border border-border text-foreground hover:bg-muted transition-colors">
            Contact Support <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
