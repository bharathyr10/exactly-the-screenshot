import { useState } from 'react';
import { cn } from '@/lib/utils';
import type { 
  Company,
  CompanyBusiness,
  CompanyTechnologies,
  CompanyPeople,
  CompanyCulture,
  CompanyTalentGrowth,
  CompanyCompensation,
  CompanyLogistics,
  CompanyFinancials,
  CompanyBrandReputation
} from '@/types/company';
import { OverviewTab } from './tabs/OverviewTab';
import { BusinessTab } from './tabs/BusinessTab';
import { TechnologyTab } from './tabs/TechnologyTab';
import { PeopleTab } from './tabs/PeopleTab';
import { CultureTab } from './tabs/CultureTab';
import { TalentGrowthTab } from './tabs/TalentGrowthTab';
import { CompensationLogisticsTab } from './tabs/CompensationLogisticsTab';
import { FinancialsBrandTab } from './tabs/FinancialsBrandTab';

interface CompanyTabsProps {
  company: Company;
  business?: CompanyBusiness;
  technologies?: CompanyTechnologies;
  people?: CompanyPeople;
  culture?: CompanyCulture;
  talentGrowth?: CompanyTalentGrowth;
  compensation?: CompanyCompensation;
  logistics?: CompanyLogistics;
  financials?: CompanyFinancials;
  brandReputation?: CompanyBrandReputation;
}

const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'business', label: 'Business & Strategy' },
  { id: 'technology', label: 'Technology' },
  { id: 'people', label: 'People & Leadership' },
  { id: 'culture', label: 'Culture' },
  { id: 'talent', label: 'Talent & Growth' },
  { id: 'compensation', label: 'Compensation & Logistics' },
  { id: 'financials', label: 'Financials & Brand' },
];

export function CompanyTabs(props: CompanyTabsProps) {
  const [activeTab, setActiveTab] = useState('overview');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab company={props.company} />;
      case 'business':
        return <BusinessTab business={props.business} />;
      case 'technology':
        return <TechnologyTab technologies={props.technologies} />;
      case 'people':
        return <PeopleTab people={props.people} />;
      case 'culture':
        return <CultureTab culture={props.culture} />;
      case 'talent':
        return <TalentGrowthTab talentGrowth={props.talentGrowth} />;
      case 'compensation':
        return <CompensationLogisticsTab compensation={props.compensation} logistics={props.logistics} />;
      case 'financials':
        return <FinancialsBrandTab financials={props.financials} brandReputation={props.brandReputation} />;
      default:
        return null;
    }
  };

  return (
    <div className="card-elevated overflow-hidden">
      {/* Tab Navigation */}
      <div className="border-b border-border overflow-x-auto">
        <nav className="flex min-w-max px-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn('tab-item', activeTab === tab.id && 'tab-item-active')}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {renderTabContent()}
      </div>
    </div>
  );
}
