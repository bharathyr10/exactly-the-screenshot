import type { CompanyCulture } from '@/types/company';
import { DataField, DataSection, TagList, NoDataMessage } from './TabComponents';

interface CultureTabProps {
  culture?: CompanyCulture;
}

export function CultureTab({ culture }: CultureTabProps) {
  if (!culture) {
    return <NoDataMessage />;
  }

  return (
    <div className="space-y-6">
      <DataSection title="Work Environment">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DataField label="Work Style" value={culture.work_style} />
          <DataField label="Remote Policy" value={culture.remote_policy} />
          <DataField label="Work-Life Balance Rating" value={culture.work_life_balance_rating?.toFixed(1)} />
        </div>
      </DataSection>

      {culture.values && (
        <DataSection title="Company Values">
          <TagList items={culture.values} />
        </DataSection>
      )}

      {culture.diversity_initiatives && (
        <DataSection title="Diversity Initiatives">
          <TagList items={culture.diversity_initiatives} />
        </DataSection>
      )}

      {culture.employee_programs && (
        <DataSection title="Employee Programs">
          <TagList items={culture.employee_programs} />
        </DataSection>
      )}
    </div>
  );
}
