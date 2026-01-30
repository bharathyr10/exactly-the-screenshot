import type { CompanyBusiness } from '@/types/company';
import { DataField, DataSection, TagList, NoDataMessage } from './TabComponents';

interface BusinessTabProps {
  business?: CompanyBusiness;
}

export function BusinessTab({ business }: BusinessTabProps) {
  if (!business) {
    return <NoDataMessage />;
  }

  return (
    <div className="space-y-6">
      <DataSection title="Business Model">
        <DataField label="Model" value={business.business_model} />
      </DataSection>

      {business.revenue_streams && (
        <DataSection title="Revenue Streams">
          <TagList items={business.revenue_streams} />
        </DataSection>
      )}

      {business.target_markets && (
        <DataSection title="Target Markets">
          <TagList items={business.target_markets} />
        </DataSection>
      )}

      {business.competitive_advantages && (
        <DataSection title="Competitive Advantages">
          <TagList items={business.competitive_advantages} />
        </DataSection>
      )}

      {business.key_products && (
        <DataSection title="Key Products">
          <TagList items={business.key_products} />
        </DataSection>
      )}

      {business.strategic_focus && (
        <DataSection title="Strategic Focus">
          <p className="text-sm text-muted-foreground">{business.strategic_focus}</p>
        </DataSection>
      )}
    </div>
  );
}
