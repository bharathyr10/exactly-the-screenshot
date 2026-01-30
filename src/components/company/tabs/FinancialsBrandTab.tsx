import type { CompanyFinancials, CompanyBrandReputation } from '@/types/company';
import { DataField, DataSection, TagList, NoDataMessage } from './TabComponents';
import { Star } from 'lucide-react';

interface FinancialsBrandTabProps {
  financials?: CompanyFinancials;
  brandReputation?: CompanyBrandReputation;
}

export function FinancialsBrandTab({ financials, brandReputation }: FinancialsBrandTabProps) {
  if (!financials && !brandReputation) {
    return <NoDataMessage />;
  }

  return (
    <div className="space-y-8">
      {/* Financials */}
      {financials && (
        <div className="space-y-6">
          <h3 className="text-sm font-semibold text-foreground border-b border-border pb-2">Financials</h3>
          
          <DataSection title="Financial Overview">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <DataField 
                label="Annual Revenue" 
                value={financials.annual_revenue 
                  ? `$${(financials.annual_revenue / 1000000000).toFixed(1)}B` 
                  : undefined
                } 
              />
              <DataField 
                label="Revenue Growth" 
                value={financials.revenue_growth ? `${financials.revenue_growth}%` : undefined} 
              />
              <DataField label="Funding Stage" value={financials.funding_stage} />
              <DataField label="Profitability" value={financials.profitability} />
              <DataField label="Fiscal Year" value={financials.fiscal_year?.toString()} />
              <DataField 
                label="Total Funding" 
                value={financials.total_funding 
                  ? `$${(financials.total_funding / 1000000).toFixed(0)}M` 
                  : undefined
                } 
              />
            </div>
          </DataSection>
        </div>
      )}

      {/* Brand & Reputation */}
      {brandReputation && (
        <div className="space-y-6">
          <h3 className="text-sm font-semibold text-foreground border-b border-border pb-2">Brand & Reputation</h3>
          
          <DataSection title="Ratings">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {brandReputation.employer_rating && (
                <div className="stat-card text-center">
                  <p className="text-xs text-muted-foreground mb-1">Employer Rating</p>
                  <div className="flex items-center justify-center gap-1">
                    <Star className="w-4 h-4 text-warning fill-warning" />
                    <span className="text-xl font-semibold">{brandReputation.employer_rating}</span>
                  </div>
                </div>
              )}
              {brandReputation.glassdoor_rating && (
                <div className="stat-card text-center">
                  <p className="text-xs text-muted-foreground mb-1">Glassdoor</p>
                  <div className="flex items-center justify-center gap-1">
                    <Star className="w-4 h-4 text-warning fill-warning" />
                    <span className="text-xl font-semibold">{brandReputation.glassdoor_rating}</span>
                  </div>
                </div>
              )}
              {brandReputation.linkedin_followers && (
                <div className="stat-card text-center">
                  <p className="text-xs text-muted-foreground mb-1">LinkedIn Followers</p>
                  <span className="text-xl font-semibold">
                    {(brandReputation.linkedin_followers / 1000000).toFixed(1)}M
                  </span>
                </div>
              )}
            </div>
          </DataSection>

          {brandReputation.awards && (
            <DataSection title="Awards">
              <TagList items={brandReputation.awards} />
            </DataSection>
          )}

          {brandReputation.certifications && (
            <DataSection title="Certifications">
              <TagList items={brandReputation.certifications} />
            </DataSection>
          )}
        </div>
      )}
    </div>
  );
}
