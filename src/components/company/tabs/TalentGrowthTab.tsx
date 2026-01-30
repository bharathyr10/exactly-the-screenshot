import type { CompanyTalentGrowth } from '@/types/company';
import { DataField, DataSection, TagList, NoDataMessage } from './TabComponents';

interface TalentGrowthTabProps {
  talentGrowth?: CompanyTalentGrowth;
}

export function TalentGrowthTab({ talentGrowth }: TalentGrowthTabProps) {
  if (!talentGrowth) {
    return <NoDataMessage />;
  }

  return (
    <div className="space-y-6">
      <DataSection title="Career Development">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DataField label="Internal Mobility" value={talentGrowth.internal_mobility} />
          <DataField label="Promotion Timeline" value={talentGrowth.promotion_timeline} />
          <DataField label="Mentorship Available" value={talentGrowth.mentorship_available ? 'Yes' : 'No'} />
          <DataField 
            label="Learning Budget" 
            value={talentGrowth.learning_budget ? `$${talentGrowth.learning_budget.toLocaleString()}/year` : undefined} 
          />
        </div>
      </DataSection>

      {talentGrowth.career_paths && (
        <DataSection title="Career Paths">
          <TagList items={talentGrowth.career_paths} />
        </DataSection>
      )}

      {talentGrowth.training_programs && (
        <DataSection title="Training Programs">
          <TagList items={talentGrowth.training_programs} />
        </DataSection>
      )}
    </div>
  );
}
