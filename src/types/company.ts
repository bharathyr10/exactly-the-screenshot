// Schema-strict type definitions based on Supabase tables
// Only types that exist in the actual database schema

export interface Company {
  id: string;
  company_id: string;
  name: string;
  logo_url?: string;
  company_type: string;
  category: string;
  employee_size: string;
  headquarters_address?: string;
  operating_countries?: string[];
  founded_year?: number;
  website?: string;
  description?: string;
  created_at?: string;
  updated_at?: string;
}

export interface CompanyBrandReputation {
  id: string;
  company_id: string;
  brand_score?: number;
  employer_rating?: number;
  glassdoor_rating?: number;
  linkedin_followers?: number;
  awards?: string[];
  certifications?: string[];
}

export interface CompanyBusiness {
  id: string;
  company_id: string;
  business_model?: string;
  revenue_streams?: string[];
  target_markets?: string[];
  competitive_advantages?: string[];
  key_products?: string[];
  strategic_focus?: string;
}

export interface CompanyCompensation {
  id: string;
  company_id: string;
  salary_range_min?: number;
  salary_range_max?: number;
  bonus_structure?: string;
  equity_offered?: boolean;
  benefits?: string[];
  pay_transparency?: string;
}

export interface CompanyCulture {
  id: string;
  company_id: string;
  work_style?: string;
  values?: string[];
  diversity_initiatives?: string[];
  employee_programs?: string[];
  work_life_balance_rating?: number;
  remote_policy?: string;
}

export interface CompanyFinancials {
  id: string;
  company_id: string;
  annual_revenue?: number;
  revenue_growth?: number;
  funding_stage?: string;
  total_funding?: number;
  profitability?: string;
  fiscal_year?: number;
}

export interface CompanyLogistics {
  id: string;
  company_id: string;
  office_locations?: string[];
  remote_options?: string;
  relocation_support?: boolean;
  visa_sponsorship?: boolean;
  interview_process?: string[];
  hiring_timeline?: string;
}

export interface CompanyPeople {
  id: string;
  company_id: string;
  ceo?: string;
  leadership_team?: string[];
  employee_count?: number;
  engineering_team_size?: number;
  hr_contact?: string;
  notable_alumni?: string[];
}

export interface CompanyTalentGrowth {
  id: string;
  company_id: string;
  career_paths?: string[];
  training_programs?: string[];
  mentorship_available?: boolean;
  internal_mobility?: string;
  promotion_timeline?: string;
  learning_budget?: number;
}

export interface CompanyTechnologies {
  id: string;
  company_id: string;
  tech_stack?: string[];
  primary_languages?: string[];
  frameworks?: string[];
  cloud_providers?: string[];
  tools?: string[];
  engineering_practices?: string[];
}

// Navigation and feature state types
export type FeatureState = 'enabled' | 'coming_soon' | 'disabled';

export interface NavItem {
  label: string;
  path: string;
  icon: string;
  state: FeatureState;
  description?: string;
}

// Filter types for Companies page
export interface CompanyFilters {
  company_type?: string;
  category?: string;
  employee_size?: string;
  operating_countries?: string[];
}
