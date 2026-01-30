import type { CompanyCompensation, CompanyLogistics } from '@/types/company';
import { DataField, DataSection, TagList, NoDataMessage } from './TabComponents';

interface CompensationLogisticsTabProps {
  compensation?: CompanyCompensation;
  logistics?: CompanyLogistics;
}

export function CompensationLogisticsTab({ compensation, logistics }: CompensationLogisticsTabProps) {
  if (!compensation && !logistics) {
    return <NoDataMessage />;
  }

  return (
    <div className="space-y-8">
      {/* Compensation */}
      {compensation && (
        <div className="space-y-6">
          <h3 className="text-sm font-semibold text-foreground border-b border-border pb-2">Compensation</h3>
          
          <DataSection title="Salary & Benefits">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <DataField 
                label="Salary Range" 
                value={compensation.salary_range_min && compensation.salary_range_max 
                  ? `$${compensation.salary_range_min.toLocaleString()} - $${compensation.salary_range_max.toLocaleString()}`
                  : undefined
                } 
              />
              <DataField label="Bonus Structure" value={compensation.bonus_structure} />
              <DataField label="Equity Offered" value={compensation.equity_offered ? 'Yes' : 'No'} />
              <DataField label="Pay Transparency" value={compensation.pay_transparency} />
            </div>
          </DataSection>

          {compensation.benefits && (
            <DataSection title="Benefits">
              <TagList items={compensation.benefits} />
            </DataSection>
          )}
        </div>
      )}

      {/* Logistics */}
      {logistics && (
        <div className="space-y-6">
          <h3 className="text-sm font-semibold text-foreground border-b border-border pb-2">Logistics</h3>
          
          <DataSection title="Work Arrangements">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <DataField label="Remote Options" value={logistics.remote_options} />
              <DataField label="Relocation Support" value={logistics.relocation_support ? 'Yes' : 'No'} />
              <DataField label="Visa Sponsorship" value={logistics.visa_sponsorship ? 'Yes' : 'No'} />
              <DataField label="Hiring Timeline" value={logistics.hiring_timeline} />
            </div>
          </DataSection>

          {logistics.office_locations && (
            <DataSection title="Office Locations">
              <TagList items={logistics.office_locations} />
            </DataSection>
          )}

          {logistics.interview_process && (
            <DataSection title="Interview Process">
              <div className="space-y-2">
                {logistics.interview_process.map((step, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-medium flex items-center justify-center">
                      {index + 1}
                    </span>
                    <span className="text-sm text-foreground">{step}</span>
                  </div>
                ))}
              </div>
            </DataSection>
          )}
        </div>
      )}
    </div>
  );
}
