import { Building2, Layers, Clock } from 'lucide-react';
import { 
  sampleCompanies, 
  getCompanyCountByType, 
  getCompanyCountByCategory 
} from '@/data/sampleCompanies';
import { StatCard, ComingSoonCard } from '@/components/cards/StatCard';
import { AppLayout } from '@/components/layout/AppLayout';
import { CompanyCard } from '@/components/cards/CompanyCard';

export default function Dashboard() {
  const companyCountByType = getCompanyCountByType();
  const companyCountByCategory = getCompanyCountByCategory();
  const recentCompanies = sampleCompanies.slice(0, 3);

  return (
    <AppLayout>
      <div className="space-y-8 max-w-7xl">
        {/* Stats Grid */}
        <section>
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Platform Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              title="Total Companies"
              value={sampleCompanies.length}
              subtitle="In database"
              icon={Building2}
            />
            <StatCard
              title="Company Types"
              value={companyCountByType.length}
              subtitle={companyCountByType.map(c => c.type).join(', ')}
              icon={Layers}
            />
            <StatCard
              title="Categories"
              value={companyCountByCategory.length}
              subtitle="Industry verticals"
              icon={Layers}
            />
            <StatCard
              title="Last Updated"
              value="Today"
              subtitle="Data is current"
              icon={Clock}
            />
          </div>
        </section>

        {/* Distribution by Type */}
        <section>
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Companies by Type
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {companyCountByType.map(({ type, count }) => (
              <div key={type} className="stat-card">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">{type}</span>
                  <span className="text-2xl font-semibold text-primary">{count}</span>
                </div>
                <div className="mt-2 h-1.5 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all"
                    style={{ width: `${(count / sampleCompanies.length) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Distribution by Category */}
        <section>
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Companies by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {companyCountByCategory.map(({ category, count }) => (
              <div key={category} className="stat-card">
                <p className="text-xs text-muted-foreground">{category}</p>
                <p className="text-xl font-semibold text-foreground mt-1">{count}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Companies */}
        <section>
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Recently Added Companies
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {recentCompanies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        </section>

        {/* Coming Soon Features */}
        <section>
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Coming Soon
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ComingSoonCard
              title="Employability Snapshot"
              description="Personalized career readiness based on your profile and skill gaps."
              requiredData="Student & skill datasets"
            />
            <ComingSoonCard
              title="Skill Readiness"
              description="Track your progress against industry-required skill benchmarks."
              requiredData="Student & skill datasets"
            />
            <ComingSoonCard
              title="Personalized Focus Areas"
              description="AI-powered recommendations for skill development priorities."
              requiredData="Student & skill datasets"
            />
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
