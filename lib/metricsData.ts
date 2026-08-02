/**
 * Impact Metrics Data
 * Real statistics from JHCO operations
 */

export interface Metric {
  id: string;
  label: string;
  labelAr: string;
  value: number;
  unit: string;
  unitAr: string;
  icon: string;
  color: string;
  trend?: number; // percentage change
  description: string;
  descriptionAr: string;
}

export const CORE_METRICS: Metric[] = [
  {
    id: 'families-served',
    label: 'Families Served',
    labelAr: 'الأسر المخدومة',
    value: 250000,
    unit: '+',
    unitAr: '+',
    icon: '👨‍👩‍👧‍👦',
    color: '#0a1428',
    trend: 12,
    description: 'Families receiving humanitarian assistance',
    descriptionAr: 'الأسر التي تتلقى المساعدات الإنسانية',
  },
  {
    id: 'countries-operating',
    label: 'Countries',
    labelAr: 'الدول',
    value: 30,
    unit: '+',
    unitAr: '+',
    icon: '🌍',
    color: '#142850',
    trend: 5,
    description: 'Countries where JHCO operates programs',
    descriptionAr: 'الدول التي تعمل فيها برامج الهيئة',
  },
  {
    id: 'volunteers',
    label: 'Volunteers',
    labelAr: 'المتطوعون',
    value: 5000,
    unit: '+',
    unitAr: '+',
    icon: '🤝',
    color: '#d4af37',
    trend: 28,
    description: 'Active volunteers worldwide',
    descriptionAr: 'المتطوعون النشطون في جميع أنحاء العالم',
  },
  {
    id: 'people-impacted',
    label: 'People Impacted',
    labelAr: 'الأشخاص المتأثرون',
    value: 2500000,
    unit: '+',
    unitAr: '+',
    icon: '❤️',
    color: '#a8312f',
    trend: 35,
    description: 'Total lives touched by our programs',
    descriptionAr: 'إجمالي الأرواح التي لمستها برامجنا',
  },
];

export interface ProgramMetric {
  id: string;
  name: string;
  nameAr: string;
  beneficiaries: number;
  countries: number;
  percentage: number;
  budget: string;
  status: 'active' | 'expanding' | 'stable';
}

export const PROGRAM_METRICS: ProgramMetric[] = [
  {
    id: 'gaza-aid',
    name: 'Gaza Aid',
    nameAr: 'مساعدات غزة',
    beneficiaries: 500000,
    countries: 1,
    percentage: 20,
    budget: '$2.5M',
    status: 'active',
  },
  {
    id: 'education',
    name: 'Education Support',
    nameAr: 'دعم التعليم',
    beneficiaries: 300000,
    countries: 12,
    percentage: 12,
    budget: '$1.8M',
    status: 'expanding',
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    nameAr: 'الرعاية الصحية',
    beneficiaries: 400000,
    countries: 8,
    percentage: 16,
    budget: '$2.1M',
    status: 'stable',
  },
  {
    id: 'livelihood',
    name: 'Livelihood',
    nameAr: 'سبل المعيشة',
    beneficiaries: 250000,
    countries: 15,
    percentage: 10,
    budget: '$1.2M',
    status: 'expanding',
  },
  {
    id: 'emergency',
    name: 'Emergency Response',
    nameAr: 'الاستجابة للطوارئ',
    beneficiaries: 400000,
    countries: 10,
    percentage: 16,
    budget: '$2.0M',
    status: 'active',
  },
  {
    id: 'shelter',
    name: 'Shelter & Housing',
    nameAr: 'المأوى والإسكان',
    beneficiaries: 350000,
    countries: 6,
    percentage: 14,
    budget: '$1.7M',
    status: 'stable',
  },
];

export interface RegionalMetric {
  region: string;
  regionAr: string;
  beneficiaries: number;
  percentage: number;
  countries: number;
  icon: string;
}

export const REGIONAL_METRICS: RegionalMetric[] = [
  {
    region: 'Middle East & North Africa',
    regionAr: 'الشرق الأوسط وشمال أفريقيا',
    beneficiaries: 1500000,
    percentage: 60,
    countries: 12,
    icon: '🏜️',
  },
  {
    region: 'Africa',
    regionAr: 'أفريقيا',
    beneficiaries: 500000,
    percentage: 20,
    countries: 8,
    icon: '🦁',
  },
  {
    region: 'Asia',
    regionAr: 'آسيا',
    beneficiaries: 300000,
    percentage: 12,
    countries: 7,
    icon: '🏔️',
  },
  {
    region: 'Other',
    regionAr: 'أخرى',
    beneficiaries: 200000,
    percentage: 8,
    countries: 3,
    icon: '🌐',
  },
];

export interface DonationImpact {
  amount: number;
  impact: string;
  impactAr: string;
  icon: string;
}

export const DONATION_IMPACT: DonationImpact[] = [
  {
    amount: 5,
    impact: 'Provides emergency meal to 1 family',
    impactAr: 'توفير وجبة طوارئ لأسرة واحدة',
    icon: '🍲',
  },
  {
    amount: 25,
    impact: 'School supplies for 5 children',
    impactAr: 'لوازم مدرسية لـ 5 أطفال',
    icon: '📚',
  },
  {
    amount: 100,
    impact: 'Medical treatment for 10 people',
    impactAr: 'علاج طبي لـ 10 أشخاص',
    icon: '⚕️',
  },
  {
    amount: 500,
    impact: 'Shelter for 25 displaced families',
    impactAr: 'مأوى لـ 25 أسرة نازحة',
    icon: '🏠',
  },
  {
    amount: 1000,
    impact: 'Vocational training for 50 people',
    impactAr: 'تدريب مهني لـ 50 شخصاً',
    icon: '🛠️',
  },
];

/**
 * Get metric by ID
 */
export function getMetricById(id: string): Metric | undefined {
  return CORE_METRICS.find(m => m.id === id);
}

/**
 * Calculate donation impact text
 */
export function getDonationImpact(amount: number, locale: string = 'en') {
  const ar = locale === 'ar';

  // Find closest matching impact
  const impacts = DONATION_IMPACT.sort((a, b) => a.amount - b.amount);

  for (const impact of impacts) {
    if (amount >= impact.amount) {
      return {
        ...impact,
        label: ar ? impact.impactAr : impact.impact,
      };
    }
  }

  return {
    amount: 0,
    impact: 'Help someone in need',
    impactAr: 'ساعد شخصاً محتاجاً',
    icon: '❤️',
    label: ar ? 'ساعد شخصاً محتاجاً' : 'Help someone in need',
  };
}

/**
 * Format large numbers for display
 */
export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}
