import { NavLink, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Building2, 
  Sparkles, 
  BarChart3, 
  Lightbulb,
  Clock
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { FeatureState } from '@/types/company';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface NavItemData {
  label: string;
  path: string;
  icon: typeof LayoutDashboard;
  state: FeatureState;
  description?: string;
}

const navItems: NavItemData[] = [
  { 
    label: 'Dashboard', 
    path: '/', 
    icon: LayoutDashboard, 
    state: 'enabled' 
  },
  { 
    label: 'Companies', 
    path: '/companies', 
    icon: Building2, 
    state: 'enabled' 
  },
  { 
    label: 'Skills', 
    path: '/skills', 
    icon: Sparkles, 
    state: 'coming_soon',
    description: 'Activates when skill & role tables are integrated'
  },
  { 
    label: 'Analytics', 
    path: '/analytics', 
    icon: BarChart3, 
    state: 'enabled' 
  },
  { 
    label: 'Innovation', 
    path: '/innovation', 
    icon: Lightbulb, 
    state: 'coming_soon',
    description: 'Coming soon with innovation framework data'
  },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col shrink-0">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">DCC</span>
          </div>
          <div>
            <h1 className="text-sm font-semibold text-sidebar-foreground">SRM DCC</h1>
            <p className="text-[10px] text-muted-foreground">Digital Career Compass</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || 
            (item.path !== '/' && location.pathname.startsWith(item.path));
          const isDisabled = item.state === 'coming_soon' || item.state === 'disabled';

          const linkContent = (
            <div
              className={cn(
                'nav-item',
                isActive && 'nav-item-active',
                isDisabled && 'nav-item-disabled'
              )}
            >
              <item.icon className="w-4 h-4" />
              <span className="flex-1">{item.label}</span>
              {item.state === 'coming_soon' && (
                <Clock className="w-3 h-3 text-muted-foreground" />
              )}
            </div>
          );

          if (isDisabled) {
            return (
              <Tooltip key={item.path}>
                <TooltipTrigger asChild>
                  <div>{linkContent}</div>
                </TooltipTrigger>
                <TooltipContent side="right" className="max-w-xs">
                  <p className="font-medium">Coming Soon</p>
                  {item.description && (
                    <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                  )}
                </TooltipContent>
              </Tooltip>
            );
          }

          return (
            <NavLink key={item.path} to={item.path}>
              {linkContent}
            </NavLink>
          );
        })}
      </nav>

      {/* Version info */}
      <div className="p-4 border-t border-sidebar-border">
        <p className="text-[10px] text-muted-foreground">Phase 1 • Schema v1.0</p>
      </div>
    </aside>
  );
}
