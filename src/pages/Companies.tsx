import { useState, useMemo } from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { CompanyCard } from '@/components/cards/CompanyCard';
import { FilterGroup } from '@/components/filters/FilterChip';
import { 
  sampleCompanies, 
  getUniqueCompanyTypes, 
  getUniqueCategories,
  getUniqueEmployeeSizes
} from '@/data/sampleCompanies';

export default function Companies() {
  const [typeFilter, setTypeFilter] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [sizeFilter, setSizeFilter] = useState<string | null>(null);

  const companyTypes = getUniqueCompanyTypes();
  const categories = getUniqueCategories();
  const employeeSizes = getUniqueEmployeeSizes();

  const filteredCompanies = useMemo(() => {
    return sampleCompanies.filter(company => {
      if (typeFilter && company.company_type !== typeFilter) return false;
      if (categoryFilter && company.category !== categoryFilter) return false;
      if (sizeFilter && company.employee_size !== sizeFilter) return false;
      return true;
    });
  }, [typeFilter, categoryFilter, sizeFilter]);

  const activeFilters = [typeFilter, categoryFilter, sizeFilter].filter(Boolean).length;

  return (
    <AppLayout>
      <div className="space-y-6 max-w-7xl">
        {/* Filters */}
        <section className="space-y-4 p-4 rounded-lg border border-border bg-card">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium text-foreground">Filters</h2>
            {activeFilters > 0 && (
              <button 
                onClick={() => {
                  setTypeFilter(null);
                  setCategoryFilter(null);
                  setSizeFilter(null);
                }}
                className="text-xs text-primary hover:underline"
              >
                Clear all ({activeFilters})
              </button>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FilterGroup
              label="Company Type"
              options={companyTypes}
              selected={typeFilter}
              onSelect={setTypeFilter}
            />
            <FilterGroup
              label="Category"
              options={categories}
              selected={categoryFilter}
              onSelect={setCategoryFilter}
            />
            <FilterGroup
              label="Employee Size"
              options={employeeSizes}
              selected={sizeFilter}
              onSelect={setSizeFilter}
            />
          </div>
        </section>

        {/* Results */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-muted-foreground">
              Showing <span className="font-medium text-foreground">{filteredCompanies.length}</span> companies
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredCompanies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>

          {filteredCompanies.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No companies match your filters.</p>
              <button 
                onClick={() => {
                  setTypeFilter(null);
                  setCategoryFilter(null);
                  setSizeFilter(null);
                }}
                className="text-sm text-primary hover:underline mt-2"
              >
                Clear filters
              </button>
            </div>
          )}
        </section>
      </div>
    </AppLayout>
  );
}
