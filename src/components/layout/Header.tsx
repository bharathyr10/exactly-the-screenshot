import { useLocation } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const pageTitles: Record<string, { title: string; subtitle: string }> = {
  '/': { title: 'Dashboard', subtitle: 'System Overview' },
  '/companies': { title: 'Companies', subtitle: 'Structured Browsing' },
  '/analytics': { title: 'Analytics', subtitle: 'Aggregated Visibility' },
  '/skills': { title: 'Skills', subtitle: 'Coming Soon' },
  '/innovation': { title: 'Innovation', subtitle: 'Coming Soon' },
};

export function Header() {
  const location = useLocation();
  const basePath = '/' + (location.pathname.split('/')[1] || '');
  const pageInfo = pageTitles[basePath] || pageTitles['/'];

  return (
    <header className="h-16 border-b border-border bg-background flex items-center justify-between px-6 shrink-0">
      <div>
        <h1 className="text-lg font-semibold text-foreground">{pageInfo.title}</h1>
        <p className="text-xs text-muted-foreground">{pageInfo.subtitle}</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Search companies..." 
            className="w-64 pl-9 h-9 bg-muted/50 border-border"
          />
        </div>
      </div>
    </header>
  );
}
