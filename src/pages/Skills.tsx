import { AppLayout } from '@/components/layout/AppLayout';
import { Clock, Sparkles, Target, Layers, GitBranch } from 'lucide-react';

export default function Skills() {
  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto py-12">
        {/* Coming Soon Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-2xl font-semibold text-foreground mb-2">Skills Module</h1>
          <span className="coming-soon-badge">Coming Soon</span>
        </div>

        {/* Explanation */}
        <div className="card-elevated p-8 text-center mb-8">
          <Clock className="w-10 h-10 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground max-w-lg mx-auto">
            The Skills module is currently disabled. It will activate when skill and role tables are integrated into the database.
          </p>
        </div>

        {/* Future Capabilities */}
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
          Future Capabilities
        </h2>
        
        <div className="space-y-4">
          <div className="card-elevated p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
              <Target className="w-5 h-5 text-muted-foreground" />
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-1">Company → Skill → Depth Mapping</h3>
              <p className="text-sm text-muted-foreground">
                Visualize which skills each company requires and at what proficiency depth.
              </p>
            </div>
          </div>

          <div className="card-elevated p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
              <Layers className="w-5 h-5 text-muted-foreground" />
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-1">Role Expectations</h3>
              <p className="text-sm text-muted-foreground">
                Understand skill requirements for different roles across companies.
              </p>
            </div>
          </div>

          <div className="card-elevated p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
              <GitBranch className="w-5 h-5 text-muted-foreground" />
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-1">Skill Overlap Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Identify common skill requirements across multiple target companies.
              </p>
            </div>
          </div>
        </div>

        {/* Required Data */}
        <div className="mt-8 p-4 rounded-lg border border-dashed border-border bg-muted/30">
          <p className="text-xs text-muted-foreground text-center">
            <strong>Required:</strong> skill, role, and company_skill_mapping tables
          </p>
        </div>
      </div>
    </AppLayout>
  );
}
