import type { Company } from '@/types/company';
import { Globe, MapPin, Calendar, Tag } from 'lucide-react';
import { DataField, DataSection, TagList } from './TabComponents';

interface OverviewTabProps {
  company: Company;
}

export function OverviewTab({ company }: OverviewTabProps) {
  return (
    <div className="space-y-6">
      <DataSection title="Company Information">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DataField label="Company Type" value={company.company_type} />
          <DataField label="Category" value={company.category} />
          <DataField label="Employee Size" value={company.employee_size} />
          <DataField label="Founded" value={company.founded_year?.toString()} />
          <DataField label="Headquarters" value={company.headquarters_address} icon={MapPin} />
          <DataField label="Website" value={company.website} icon={Globe} isLink />
        </div>
      </DataSection>

      {company.operating_countries && company.operating_countries.length > 0 && (
        <DataSection title="Operating Countries">
          <TagList items={company.operating_countries} />
        </DataSection>
      )}

      {company.description && (
        <DataSection title="About">
          <p className="text-sm text-muted-foreground leading-relaxed">{company.description}</p>
        </DataSection>
      )}
    </div>
  );
}
