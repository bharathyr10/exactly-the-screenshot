// Sample data for demonstration - schema-strict
// This represents what would come from Supabase tables

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

export const sampleCompanies: Company[] = [
  {
    id: '1',
    company_id: 'google-001',
    name: 'Google',
    logo_url: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
    company_type: 'Product',
    category: 'Technology',
    employee_size: '10000+',
    headquarters_address: 'Mountain View, California, USA',
    operating_countries: ['USA', 'India', 'UK', 'Germany', 'Japan'],
    founded_year: 1998,
    website: 'https://google.com',
    description: 'A multinational technology company specializing in Internet-related services and products.'
  },
  {
    id: '2',
    company_id: 'microsoft-002',
    name: 'Microsoft',
    logo_url: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31',
    company_type: 'Product',
    category: 'Technology',
    employee_size: '10000+',
    headquarters_address: 'Redmond, Washington, USA',
    operating_countries: ['USA', 'India', 'UK', 'Ireland', 'China'],
    founded_year: 1975,
    website: 'https://microsoft.com',
    description: 'American multinational technology corporation producing computer software, consumer electronics, and related services.'
  },
  {
    id: '3',
    company_id: 'tcs-003',
    name: 'Tata Consultancy Services',
    logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/1200px-Tata_Consultancy_Services_Logo.svg.png',
    company_type: 'Service',
    category: 'IT Services',
    employee_size: '10000+',
    headquarters_address: 'Mumbai, Maharashtra, India',
    operating_countries: ['India', 'USA', 'UK', 'Europe', 'APAC'],
    founded_year: 1968,
    website: 'https://tcs.com',
    description: 'Indian multinational information technology services and consulting company.'
  },
  {
    id: '4',
    company_id: 'infosys-004',
    name: 'Infosys',
    logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1200px-Infosys_logo.svg.png',
    company_type: 'Service',
    category: 'IT Services',
    employee_size: '10000+',
    headquarters_address: 'Bangalore, Karnataka, India',
    operating_countries: ['India', 'USA', 'UK', 'Australia', 'Germany'],
    founded_year: 1981,
    website: 'https://infosys.com',
    description: 'Global leader in next-generation digital services and consulting.'
  },
  {
    id: '5',
    company_id: 'amazon-005',
    name: 'Amazon',
    logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png',
    company_type: 'Product',
    category: 'E-commerce',
    employee_size: '10000+',
    headquarters_address: 'Seattle, Washington, USA',
    operating_countries: ['USA', 'India', 'UK', 'Germany', 'Japan', 'Canada'],
    founded_year: 1994,
    website: 'https://amazon.com',
    description: 'Multinational technology company focusing on e-commerce, cloud computing, and artificial intelligence.'
  },
  {
    id: '6',
    company_id: 'flipkart-006',
    name: 'Flipkart',
    logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Flipkart_logo.svg/1200px-Flipkart_logo.svg.png',
    company_type: 'Product',
    category: 'E-commerce',
    employee_size: '5000-10000',
    headquarters_address: 'Bangalore, Karnataka, India',
    operating_countries: ['India'],
    founded_year: 2007,
    website: 'https://flipkart.com',
    description: 'Indian e-commerce company headquartered in Bangalore, Karnataka.'
  },
  {
    id: '7',
    company_id: 'wipro-007',
    name: 'Wipro',
    logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/1200px-Wipro_Primary_Logo_Color_RGB.svg.png',
    company_type: 'Service',
    category: 'IT Services',
    employee_size: '10000+',
    headquarters_address: 'Bangalore, Karnataka, India',
    operating_countries: ['India', 'USA', 'UK', 'Middle East', 'Europe'],
    founded_year: 1945,
    website: 'https://wipro.com',
    description: 'Indian multinational corporation that provides IT, consulting and business process services.'
  },
  {
    id: '8',
    company_id: 'razorpay-008',
    name: 'Razorpay',
    logo_url: 'https://razorpay.com/assets/razorpay-logo.svg',
    company_type: 'Startup',
    category: 'Fintech',
    employee_size: '1000-5000',
    headquarters_address: 'Bangalore, Karnataka, India',
    operating_countries: ['India', 'Malaysia', 'Singapore'],
    founded_year: 2014,
    website: 'https://razorpay.com',
    description: 'Indian fintech company that provides business banking solutions.'
  },
];

export const sampleCompanyBusiness: CompanyBusiness[] = [
  {
    id: '1',
    company_id: 'google-001',
    business_model: 'Advertising + Cloud + Consumer Products',
    revenue_streams: ['Digital Advertising', 'Cloud Services', 'Hardware', 'App Store'],
    target_markets: ['Global Enterprise', 'SMBs', 'Consumers'],
    competitive_advantages: ['Search Dominance', 'Data Scale', 'AI/ML Leadership'],
    key_products: ['Search', 'YouTube', 'Google Cloud', 'Android', 'Chrome'],
    strategic_focus: 'AI-first transformation across all products'
  },
];

export const sampleCompanyTechnologies: CompanyTechnologies[] = [
  {
    id: '1',
    company_id: 'google-001',
    tech_stack: ['TensorFlow', 'Kubernetes', 'BigQuery', 'Spanner', 'Borg'],
    primary_languages: ['Python', 'Go', 'Java', 'C++', 'JavaScript'],
    frameworks: ['Angular', 'TensorFlow', 'Flutter', 'gRPC'],
    cloud_providers: ['Google Cloud Platform'],
    tools: ['Bazel', 'Gerrit', 'Piper', 'Critique'],
    engineering_practices: ['Code Review', 'Design Docs', '20% Time', 'OKRs']
  },
];

export const sampleCompanyPeople: CompanyPeople[] = [
  {
    id: '1',
    company_id: 'google-001',
    ceo: 'Sundar Pichai',
    leadership_team: ['Ruth Porat (CFO)', 'Prabhakar Raghavan (Search)', 'Thomas Kurian (Cloud)'],
    employee_count: 190000,
    engineering_team_size: 50000,
    notable_alumni: ['Sheryl Sandberg', 'Marissa Mayer', 'Satya Nadella']
  },
];

export const sampleCompanyCulture: CompanyCulture[] = [
  {
    id: '1',
    company_id: 'google-001',
    work_style: 'Hybrid',
    values: ['Focus on the user', 'Fast is better than slow', 'Don\'t be evil'],
    diversity_initiatives: ['Women@Google', 'Pride@Google', 'Disability Alliance'],
    employee_programs: ['TGIF', 'Peer Bonus', 'Learning Stipend'],
    work_life_balance_rating: 4.2,
    remote_policy: 'Hybrid - 3 days in office'
  },
];

export const sampleCompanyTalentGrowth: CompanyTalentGrowth[] = [
  {
    id: '1',
    company_id: 'google-001',
    career_paths: ['IC Track', 'Management Track', 'TL Track'],
    training_programs: ['Noogler Training', 'g2g', 'Career Guru'],
    mentorship_available: true,
    internal_mobility: 'High - encouraged after 1 year',
    promotion_timeline: '2-3 years per level on average',
    learning_budget: 12000
  },
];

export const sampleCompanyCompensation: CompanyCompensation[] = [
  {
    id: '1',
    company_id: 'google-001',
    salary_range_min: 120000,
    salary_range_max: 450000,
    bonus_structure: '15-20% target bonus',
    equity_offered: true,
    benefits: ['Health Insurance', '401k Match', 'Parental Leave', 'Free Meals'],
    pay_transparency: 'Pay bands shared internally'
  },
];

export const sampleCompanyLogistics: CompanyLogistics[] = [
  {
    id: '1',
    company_id: 'google-001',
    office_locations: ['Mountain View', 'New York', 'Bangalore', 'London', 'Tokyo'],
    remote_options: 'Hybrid with exceptions',
    relocation_support: true,
    visa_sponsorship: true,
    interview_process: ['Recruiter Screen', 'Technical Phone', 'Onsite (4-5 rounds)', 'Hiring Committee'],
    hiring_timeline: '4-8 weeks'
  },
];

export const sampleCompanyFinancials: CompanyFinancials[] = [
  {
    id: '1',
    company_id: 'google-001',
    annual_revenue: 307000000000,
    revenue_growth: 12.5,
    funding_stage: 'Public (NASDAQ: GOOGL)',
    profitability: 'Profitable',
    fiscal_year: 2024
  },
];

export const sampleCompanyBrandReputation: CompanyBrandReputation[] = [
  {
    id: '1',
    company_id: 'google-001',
    brand_score: 95,
    employer_rating: 4.4,
    glassdoor_rating: 4.3,
    linkedin_followers: 30000000,
    awards: ['Best Place to Work 2024', 'Most Innovative Company'],
    certifications: ['ISO 27001', 'SOC 2', 'GDPR Compliant']
  },
];

// Aggregation helpers - no AI, just counting
export const getCompanyCountByType = () => {
  const counts: Record<string, number> = {};
  sampleCompanies.forEach(c => {
    counts[c.company_type] = (counts[c.company_type] || 0) + 1;
  });
  return Object.entries(counts).map(([type, count]) => ({ type, count }));
};

export const getCompanyCountByCategory = () => {
  const counts: Record<string, number> = {};
  sampleCompanies.forEach(c => {
    counts[c.category] = (counts[c.category] || 0) + 1;
  });
  return Object.entries(counts).map(([category, count]) => ({ category, count }));
};

export const getUniqueCompanyTypes = () => [...new Set(sampleCompanies.map(c => c.company_type))];
export const getUniqueCategories = () => [...new Set(sampleCompanies.map(c => c.category))];
export const getUniqueEmployeeSizes = () => [...new Set(sampleCompanies.map(c => c.employee_size))];
