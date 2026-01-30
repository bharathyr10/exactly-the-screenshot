import { AppLayout } from '@/components/layout/AppLayout';
import { 
  sampleCompanies, 
  getCompanyCountByType, 
  getCompanyCountByCategory,
  sampleCompanyTechnologies,
  sampleCompanyCulture
} from '@/data/sampleCompanies';
import { ComingSoonCard } from '@/components/cards/StatCard';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export default function Analytics() {
  const companyCountByType = getCompanyCountByType();
  const companyCountByCategory = getCompanyCountByCategory();

  // Aggregate tech stack frequency
  const techFrequency: Record<string, number> = {};
  sampleCompanyTechnologies.forEach(t => {
    t.primary_languages?.forEach(lang => {
      techFrequency[lang] = (techFrequency[lang] || 0) + 1;
    });
  });
  const techData = Object.entries(techFrequency)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);

  // Aggregate remote policy
  const remotePolicy: Record<string, number> = {};
  sampleCompanyCulture.forEach(c => {
    if (c.work_style) {
      remotePolicy[c.work_style] = (remotePolicy[c.work_style] || 0) + 1;
    }
  });
  const remotePolicyData = Object.entries(remotePolicy)
    .map(([name, value]) => ({ name, value }));

  const COLORS = ['hsl(217, 91%, 60%)', 'hsl(142, 71%, 45%)', 'hsl(45, 93%, 47%)', 'hsl(0, 84%, 60%)'];

  return (
    <AppLayout>
      <div className="space-y-8 max-w-7xl">
        {/* Company Distribution Charts */}
        <section>
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Company Distribution
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* By Type */}
            <div className="card-elevated p-6">
              <h3 className="text-sm font-medium text-foreground mb-4">By Company Type</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={companyCountByType}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 13% 91%)" />
                    <XAxis dataKey="type" tick={{ fontSize: 12 }} stroke="hsl(220 9% 46%)" />
                    <YAxis tick={{ fontSize: 12 }} stroke="hsl(220 9% 46%)" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid hsl(220 13% 91%)',
                        borderRadius: '6px',
                        fontSize: '12px'
                      }} 
                    />
                    <Bar dataKey="count" fill="hsl(217, 91%, 60%)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* By Category */}
            <div className="card-elevated p-6">
              <h3 className="text-sm font-medium text-foreground mb-4">By Category</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={companyCountByCategory}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="count"
                      nameKey="category"
                      label={({ category, count }) => `${category}: ${count}`}
                      labelLine={false}
                    >
                      {companyCountByCategory.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid hsl(220 13% 91%)',
                        borderRadius: '6px',
                        fontSize: '12px'
                      }} 
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Frequency */}
        <section>
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Tech Stack Frequency
          </h2>
          
          <div className="card-elevated p-6">
            <p className="text-xs text-muted-foreground mb-4">
              Based on {sampleCompanyTechnologies.length} companies with technology data
            </p>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={techData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 13% 91%)" />
                  <XAxis type="number" tick={{ fontSize: 12 }} stroke="hsl(220 9% 46%)" />
                  <YAxis dataKey="name" type="category" tick={{ fontSize: 12 }} stroke="hsl(220 9% 46%)" width={80} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid hsl(220 13% 91%)',
                      borderRadius: '6px',
                      fontSize: '12px'
                    }} 
                  />
                  <Bar dataKey="count" fill="hsl(142, 71%, 45%)" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        {/* Culture Indicators */}
        <section>
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Culture Indicators
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="stat-card">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Work Styles Tracked</p>
              <p className="text-2xl font-semibold text-foreground mt-1">{remotePolicyData.length}</p>
            </div>
            <div className="stat-card">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Companies with Culture Data</p>
              <p className="text-2xl font-semibold text-foreground mt-1">{sampleCompanyCulture.length}</p>
            </div>
            <div className="stat-card">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Total Companies</p>
              <p className="text-2xl font-semibold text-foreground mt-1">{sampleCompanies.length}</p>
            </div>
          </div>
        </section>

        {/* Coming Soon */}
        <section>
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Coming Soon
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ComingSoonCard
              title="Skill Trend Shifts"
              description="Track how skill requirements change over time across companies and roles."
              requiredData="Skill & role datasets"
            />
            <ComingSoonCard
              title="Outcome Correlations"
              description="Analyze relationships between company attributes and placement outcomes."
              requiredData="Placement outcome data"
            />
            <ComingSoonCard
              title="Innovation Impact"
              description="Measure how innovation initiatives affect company growth and culture."
              requiredData="Innovation framework data"
            />
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
