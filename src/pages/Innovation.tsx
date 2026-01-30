import { AppLayout } from '@/components/layout/AppLayout';
import { Clock, Lightbulb, Rocket, Building2, FileText, Award } from 'lucide-react';

export default function Innovation() {
  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto py-12">
        {/* Coming Soon Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Lightbulb className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-2xl font-semibold text-foreground mb-2">Innovation Module</h1>
          <span className="coming-soon-badge">Coming Soon</span>
        </div>

        {/* Explanation */}
        <div className="card-elevated p-8 text-center mb-8">
          <Clock className="w-10 h-10 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground max-w-lg mx-auto">
            The Innovation module will showcase the five-tier innovation framework and track industry involvement, IP, and research initiatives.
          </p>
        </div>

        {/* Five-Tier Framework Preview */}
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
          Five-Tier Innovation Framework
        </h2>
        
        <div className="space-y-3">
          {[
            { tier: 1, title: 'Foundation', description: 'Basic innovation practices and awareness', icon: Building2 },
            { tier: 2, title: 'Exploration', description: 'Active experimentation with new technologies', icon: Rocket },
            { tier: 3, title: 'Industry Involvement', description: 'Collaboration with industry partners and startups', icon: Building2 },
            { tier: 4, title: 'IP & Research', description: 'Patent development and academic research partnerships', icon: FileText },
            { tier: 5, title: 'Market Leadership', description: 'Defining industry standards and creating new markets', icon: Award },
          ].map((item) => (
            <div key={item.tier} className="card-elevated p-4 flex items-center gap-4 opacity-60">
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                <span className="text-sm font-semibold text-muted-foreground">{item.tier}</span>
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
              <item.icon className="w-5 h-5 text-muted-foreground" />
            </div>
          ))}
        </div>

        {/* Required Data */}
        <div className="mt-8 p-4 rounded-lg border border-dashed border-border bg-muted/30">
          <p className="text-xs text-muted-foreground text-center">
            <strong>Required:</strong> innovation_tier, company_innovation, and research_partnership tables
          </p>
        </div>
      </div>
    </AppLayout>
  );
}
