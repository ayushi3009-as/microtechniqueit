'use client';

import { Menu, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { UserProfile } from '@/lib/auth-context';

export default function Topbar({ user, onMenuToggle }: { user: UserProfile, onMenuToggle: () => void }) {
  const { theme, setTheme } = useTheme();

  return (
    <header className="h-16 flex items-center justify-between px-4 lg:px-8 border-b border-border/50 bg-background/95 backdrop-blur z-30 sticky top-0">
      <div className="flex items-center gap-4">
        <button onClick={onMenuToggle} className="lg:hidden p-2 -ml-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted">
          <Menu className="w-5 h-5" />
        </button>
        <h2 className="text-lg font-semibold capitalize hidden sm:block">
          {user.role.replace('_', ' ').toLowerCase()} Dashboard
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
        >
          {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
        
        <div className="flex items-center gap-3 pl-4 border-l border-border/50">
          <div className="hidden md:flex flex-col items-end">
            <span className="text-sm font-medium leading-none mb-1">{user.firstName} {user.lastName}</span>
            <span className="text-xs text-muted-foreground leading-none">{user.email}</span>
          </div>
          <div className="w-9 h-9 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm">
            {user.firstName[0]}{user.lastName[0]}
          </div>
        </div>
      </div>
    </header>
  );
}
