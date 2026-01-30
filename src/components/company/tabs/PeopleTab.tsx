import type { CompanyPeople } from '@/types/company';
import { DataField, DataSection, TagList, NoDataMessage } from './TabComponents';

interface PeopleTabProps {
  people?: CompanyPeople;
}

export function PeopleTab({ people }: PeopleTabProps) {
  if (!people) {
    return <NoDataMessage />;
  }

  return (
    <div className="space-y-6">
      <DataSection title="Leadership">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DataField label="CEO" value={people.ceo} />
          <DataField label="Employee Count" value={people.employee_count?.toLocaleString()} />
          <DataField label="Engineering Team Size" value={people.engineering_team_size?.toLocaleString()} />
          <DataField label="HR Contact" value={people.hr_contact} />
        </div>
      </DataSection>

      {people.leadership_team && (
        <DataSection title="Leadership Team">
          <TagList items={people.leadership_team} />
        </DataSection>
      )}

      {people.notable_alumni && (
        <DataSection title="Notable Alumni">
          <TagList items={people.notable_alumni} />
        </DataSection>
      )}
    </div>
  );
}
