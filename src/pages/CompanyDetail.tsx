import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Building2, Globe, MapPin, Users, Calendar, ExternalLink } from 'lucide-react';
import { AppLayout } from '@/components/layout/AppLayout';
import { CompanyTabs } from '@/components/company/CompanyTabs';
import { 
  sampleCompanies, 
  sampleCompanyBusiness,
  sampleCompanyTechnologies,
  sampleCompanyPeople,
  sampleCompanyCulture,
  sampleCompanyTalentGrowth,
  sampleCompanyCompensation,
  sampleCompanyLogistics,
  sampleCompanyFinancials,
  sampleCompanyBrandReputation
} from '@/data/sampleCompanies';

export default function CompanyDetail() {
  const { companyId } = useParams<{ companyId: string }>();
  
  const company = sampleCompanies.find(c => c.company_id === companyId);
  
  if (!company) {
    return (
      <AppLayout>
        <div className="text-center py-12">
          <p className="text-muted-foreground">Company not found.</p>
          <Link to="/companies" className="text-sm text-primary hover:underline mt-2 inline-block">
            Back to companies
          </Link>
        </div>
      </AppLayout>
    );
  }

  // Get related data
  const business = sampleCompanyBusiness.find(b => b.company_id === companyId);
  const technologies = sampleCompanyTechnologies.find(t => t.company_id === companyId);
  const people = sampleCompanyPeople.find(p => p.company_id === companyId);
  const culture = sampleCompanyCulture.find(c => c.company_id === companyId);
  const talentGrowth = sampleCompanyTalentGrowth.find(t => t.company_id === companyId);
  const compensation = sampleCompanyCompensation.find(c => c.company_id === companyId);
  const logistics = sampleCompanyLogistics.find(l => l.company_id === companyId);
  const financials = sampleCompanyFinancials.find(f => f.company_id === companyId);
  const brandReputation = sampleCompanyBrandReputation.find(b => b.company_id === companyId);

  return (
    <AppLayout>
      <div className="max-w-6xl space-y-6">
        {/* Back link */}
        <Link 
          to="/companies" 
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to companies
        </Link>

        {/* Company Header */}
        <header className="card-elevated p-6">
          <div className="flex items-start gap-6">
            {/* Logo */}
            <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center shrink-0 overflow-hidden">
              {company.logo_url ? (
                <img 
                  src={company.logo_url} 
                  alt={`${company.name} logo`}
                  className="w-full h-full object-contain p-2"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
              ) : null}
              <Building2 className={company.logo_url ? 'hidden' : 'w-8 h-8 text-muted-foreground'} />
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl font-semibold text-foreground">{company.name}</h1>
                <span className="filter-chip text-xs">
                  {company.company_type}
                </span>
                <span className="filter-chip text-xs">
                  {company.category}
                </span>
              </div>

              {company.description && (
                <p className="text-muted-foreground text-sm mb-4 max-w-2xl">
                  {company.description}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4" />
                  {company.employee_size}
                </span>
                {company.headquarters_address && (
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    {company.headquarters_address}
                  </span>
                )}
                {company.founded_year && (
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    Founded {company.founded_year}
                  </span>
                )}
                {company.website && (
                  <a 
                    href={company.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-primary hover:underline"
                  >
                    <Globe className="w-4 h-4" />
                    Website
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Tabs */}
        <CompanyTabs
          company={company}
          business={business}
          technologies={technologies}
          people={people}
          culture={culture}
          talentGrowth={talentGrowth}
          compensation={compensation}
          logistics={logistics}
          financials={financials}
          brandReputation={brandReputation}
        />
      </div>
    </AppLayout>
  );
}
