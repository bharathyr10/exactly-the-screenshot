import { Building2, TrendingUp, Users, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: typeof Building2;
  trend?: {
    value: string;
    positive: boolean;
  };
}

export function StatCard({ title, value, subtitle, icon: Icon, trend }: StatCardProps) {
  return (
    <div className="stat-card animate-fade-in">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-muted-foreground font-medium">{title}</p>
          <p className="text-3xl font-semibold text-foreground mt-1">{value}</p>
          {subtitle && (
            <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
          )}
          {trend && (
            <div className={cn(
              "flex items-center gap-1 mt-2 text-xs",
              trend.positive ? "text-success" : "text-destructive"
            )}>
              <TrendingUp className={cn("w-3 h-3", !trend.positive && "rotate-180")} />
              <span>{trend.value}</span>
            </div>
          )}
        </div>
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary" />
        </div>
      </div>
    </div>
  );
}

interface ComingSoonCardProps {
  title: string;
  description: string;
  requiredData?: string;
}

export function ComingSoonCard({ title, description, requiredData }: ComingSoonCardProps) {
  return (
    <div className="coming-soon-overlay animate-fade-in">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center shrink-0">
          <Clock className="w-4 h-4 text-muted-foreground" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-sm font-medium text-foreground">{title}</h3>
            <span className="coming-soon-badge">Coming Soon</span>
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
          {requiredData && (
            <p className="text-xs text-muted-foreground mt-2 italic">
              Requires: {requiredData}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
