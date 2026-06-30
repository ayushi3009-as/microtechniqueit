'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Role } from '@/lib/types';
import { 
  LayoutDashboard, 
  Briefcase, 
  CreditCard, 
  User, 
  Send, 
  Users, 
  Settings,
  LogOut,
  X,
  FileText,
  LayoutGrid
} from 'lucide-react';
import { useAuth, UserProfile } from '@/lib/auth-context';

type NavItem = {
  name: string;
  href: string;
  icon: React.ElementType;
};

const getNavItems = (role: Role): NavItem[] => {
  switch (role) {
    case Role.WORKING_PARTNER:
      return [
        { name: 'Overview', href: '/dashboard/working-partner', icon: LayoutDashboard },
        { name: 'My Projects', href: '/dashboard/working-partner/projects', icon: Briefcase },
        { name: 'Payments', href: '/dashboard/working-partner/payments', icon: CreditCard },
        { name: 'Profile', href: '/dashboard/working-partner/profile', icon: User },
      ];
    case Role.CHANNEL_PARTNER:
      return [
        { name: 'Submit Referral', href: '/dashboard/channel-partner/refer', icon: Send },
        { name: 'My Referrals', href: '/dashboard/channel-partner/referrals', icon: FileText },
        { name: 'Earnings', href: '/dashboard/channel-partner/earnings', icon: CreditCard },
        { name: 'My Projects', href: '/dashboard/channel-partner/projects', icon: Briefcase },
        { name: 'Profile', href: '/dashboard/channel-partner/profile', icon: User },
      ];
    case Role.SUPER_ADMIN:
      return [
        { name: 'Overview', href: '/dashboard/admin', icon: LayoutDashboard },
        { name: 'Employees', href: '/dashboard/admin/employees', icon: Users },
        { name: 'Clients', href: '/dashboard/admin/clients', icon: Users },
        { name: 'Partners', href: '/dashboard/admin/partners', icon: Users },
        { name: 'Projects', href: '/dashboard/admin/projects', icon: Briefcase },
        { name: 'Referrals', href: '/dashboard/admin/referrals', icon: FileText },
        { name: 'Payments', href: '/dashboard/admin/payments', icon: CreditCard },
        { name: 'Settings', href: '/dashboard/admin/settings', icon: Settings },
      ];
    case Role.CLIENT:
      return [
        { name: 'Projects', href: '/dashboard/client/projects', icon: LayoutGrid },
        { name: 'Payments', href: '/dashboard/client/payments', icon: CreditCard },
        { name: 'Profile', href: '/dashboard/client/profile', icon: User },
      ];
    default:
      return [];
  }
};

export default function Sidebar({ user, isOpen, onToggle }: { user: UserProfile, isOpen: boolean, onToggle: () => void }) {
  const pathname = usePathname();
  const { logout } = useAuth();
  const navItems = getNavItems(user.role);

  return (
    <aside 
      className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-card border-r border-border/50 transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
    >
      <div className="h-16 flex items-center justify-between px-6 border-b border-border/50">
        <Link href="/" className="font-bold text-lg gradient-text truncate">
          MicrotechniqueIT
        </Link>
        <button onClick={onToggle} className="lg:hidden text-muted-foreground hover:text-foreground">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto py-6 flex flex-col gap-1 px-3">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== `/dashboard/${user.role === Role.WORKING_PARTNER ? 'working-partner' : user.role === Role.CHANNEL_PARTNER ? 'channel-partner' : 'admin'}`);
          const Icon = item.icon;
          
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive 
                  ? 'bg-primary/10 text-primary' 
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
              {item.name}
            </Link>
          );
        })}
      </div>

      <div className="p-4 border-t border-border/50">
        <button 
          onClick={logout}
          className="flex items-center gap-3 px-3 py-2.5 w-full rounded-lg text-sm font-medium text-red-500 hover:bg-red-500/10 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Sign out
        </button>
      </div>
    </aside>
  );
}
