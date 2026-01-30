import { ReactNode } from 'react';
import { LucideIcon, AlertCircle } from 'lucide-react';

interface DataSectionProps {
  title: string;
  children: ReactNode;
}

export function DataSection({ title, children }: DataSectionProps) {
  return (
    <div>
      <h3 className="text-sm font-medium text-foreground mb-3">{title}</h3>
      {children}
    </div>
  );
}

interface DataFieldProps {
  label: string;
  value?: string | number | null;
  icon?: LucideIcon;
  isLink?: boolean;
}

export function DataField({ label, value, icon: Icon, isLink }: DataFieldProps) {
  if (value === undefined || value === null) {
    return (
      <div className="space-y-1">
        <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
        <p className="text-sm text-muted-foreground italic">Not available</p>
      </div>
    );
  }

  return (
    <div className="space-y-1">
      <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
      <div className="flex items-center gap-2">
        {Icon && <Icon className="w-4 h-4 text-muted-foreground" />}
        {isLink && typeof value === 'string' ? (
          <a 
            href={value} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline"
          >
            {value}
          </a>
        ) : (
          <p className="text-sm text-foreground">{value}</p>
        )}
      </div>
    </div>
  );
}

interface TagListProps {
  items?: string[];
}

export function TagList({ items }: TagListProps) {
  if (!items || items.length === 0) {
    return <p className="text-sm text-muted-foreground italic">Not available</p>;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item, index) => (
        <span key={index} className="filter-chip text-xs">
          {item}
        </span>
      ))}
    </div>
  );
}

export function NoDataMessage({ message = 'Data not available for this company' }: { message?: string }) {
  return (
    <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 text-muted-foreground">
      <AlertCircle className="w-5 h-5" />
      <p className="text-sm">{message}</p>
    </div>
  );
}
