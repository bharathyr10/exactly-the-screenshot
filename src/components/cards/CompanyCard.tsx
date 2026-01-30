import { Link } from 'react-router-dom';
import { Building2, MapPin, Users, ChevronRight } from 'lucide-react';
import type { Company } from '@/types/company';

interface CompanyCardProps {
  company: Company;
}

export function CompanyCard({ company }: CompanyCardProps) {
  return (
    <Link
      to={`/companies/${company.company_id}`}
      className="card-elevated p-4 flex items-start gap-4 transition-all hover:border-primary/30 group animate-slide-up"
    >
      {/* Logo */}
      <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center shrink-0 overflow-hidden">
        {company.logo_url ? (
          <img 
            src={company.logo_url} 
            alt={`${company.name} logo`}
            className="w-full h-full object-contain p-1"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
        ) : null}
        <Building2 className={company.logo_url ? 'hidden' : 'w-5 h-5 text-muted-foreground'} />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-medium text-foreground truncate">{company.name}</h3>
          <span className="filter-chip text-xs py-0.5 px-2 shrink-0">
            {company.company_type}
          </span>
        </div>
        
        <p className="text-sm text-muted-foreground mb-2">{company.category}</p>
        
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            {company.employee_size}
          </span>
          {company.headquarters_address && (
            <span className="flex items-center gap-1 truncate">
              <MapPin className="w-3 h-3 shrink-0" />
              <span className="truncate">{company.headquarters_address}</span>
            </span>
          )}
        </div>
      </div>

      {/* Arrow */}
      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
    </Link>
  );
}
