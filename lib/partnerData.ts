/**
 * Partner Portal System
 * Co-branding, ROI calculators, tier-based access, partner management
 */

export type PartnerTier = 'bronze' | 'silver' | 'gold' | 'platinum';

export interface Partner {
  id: string;
  name: string;
  nameAr: string;
  logo: string;
  tier: PartnerTier;
  website?: string;
  joinDate: string;
  country: string;
  industry: string;
  description: string;
  descriptionAr: string;
  featured: boolean;
  roiData: {
    donationsGenerated: number;
    volunteersRecruited: number;
    outreach: number;
    impact: string;
    impactAr: string;
  };
}

export interface PartnerTierBenefits {
  tier: PartnerTier;
  name: string;
  nameAr: string;
  minAnnualContribution: number;
  benefits: string[];
  benefitsAr: string[];
  features: {
    dashboard: boolean;
    toolkit: boolean;
    cobranding: boolean;
    roiCalculator: boolean;
    eventAccess: boolean;
    dedicatedSupport: boolean;
    customReports: boolean;
    apiAccess: boolean;
  };
}

export interface BrandingAsset {
  id: string;
  name: string;
  nameAr: string;
  type: 'logo' | 'template' | 'guidelines' | 'social';
  url: string;
  format: string;
  size: string;
  description: string;
  descriptionAr: string;
  downloadable: boolean;
  editable: boolean;
}

export interface ROICalculation {
  partnerName: string;
  investmentAmount: number;
  timeframe: 'annual' | 'quarterly' | 'lifetime';
  projectedDonations: number;
  projectedVolunteers: number;
  projectedReach: number;
  impact: {
    familiesServed: number;
    childrenEducated: number;
    patientsAided: number;
  };
  roi: {
    percentage: number;
    dollarAmount: number;
  };
}

// Partner Tier Structure
export const PARTNER_TIERS: PartnerTierBenefits[] = [
  {
    tier: 'bronze',
    name: 'Bronze Partner',
    nameAr: 'شريك برونز',
    minAnnualContribution: 5000,
    benefits: [
      'Listed on partner page',
      'Basic co-branding materials',
      'Monthly partner newsletter',
      'Event invitations',
      'Tax documentation',
    ],
    benefitsAr: [
      'مدرج في صفحة الشركاء',
      'مواد تعاون أساسية',
      'رسالة أخبار شركاء شهرية',
      'دعوات الأحداث',
      'توثيق ضريبي',
    ],
    features: {
      dashboard: false,
      toolkit: true,
      cobranding: true,
      roiCalculator: false,
      eventAccess: true,
      dedicatedSupport: false,
      customReports: false,
      apiAccess: false,
    },
  },
  {
    tier: 'silver',
    name: 'Silver Partner',
    nameAr: 'شريك فضي',
    minAnnualContribution: 25000,
    benefits: [
      'Everything in Bronze',
      'Partner dashboard access',
      'Co-branding toolkit with customization',
      'Quarterly impact reports',
      'Dedicated partner manager',
      'Joint webinar opportunities',
    ],
    benefitsAr: [
      'كل شيء في برونز',
      'الوصول إلى لوحة تحكم الشركاء',
      'مجموعة تعاون مع التخصيص',
      'تقارير التأثير الفصلية',
      'مدير شريك مخصص',
      'فرص ندوة مشتركة',
    ],
    features: {
      dashboard: true,
      toolkit: true,
      cobranding: true,
      roiCalculator: true,
      eventAccess: true,
      dedicatedSupport: true,
      customReports: true,
      apiAccess: false,
    },
  },
  {
    tier: 'gold',
    name: 'Gold Partner',
    nameAr: 'شريك ذهبي',
    minAnnualContribution: 100000,
    benefits: [
      'Everything in Silver',
      'Premium logo placement',
      'Custom co-branding solutions',
      'Monthly impact reports',
      'Dedicated executive liaison',
      'Annual strategic planning meeting',
      'Co-branded marketing campaigns',
      'Data export capabilities',
    ],
    benefitsAr: [
      'كل شيء في الفضي',
      'موضع شعار متميز',
      'حلول تعاون مخصصة',
      'تقارير التأثير الشهرية',
      'اتصال تنفيذي مخصص',
      'اجتماع التخطيط الاستراتيجي السنوي',
      'حملات تعاون مشتركة العلامات التجارية',
      'قدرات تصدير البيانات',
    ],
    features: {
      dashboard: true,
      toolkit: true,
      cobranding: true,
      roiCalculator: true,
      eventAccess: true,
      dedicatedSupport: true,
      customReports: true,
      apiAccess: true,
    },
  },
  {
    tier: 'platinum',
    name: 'Platinum Partner',
    nameAr: 'شريك بلاتيني',
    minAnnualContribution: 250000,
    benefits: [
      'Everything in Gold',
      'Naming rights to programs/initiatives',
      'Board-level engagement opportunities',
      'Real-time dashboard access',
      'Custom API integration',
      'Dedicated technical team',
      'White-label solutions',
      'Strategic partnership development',
    ],
    benefitsAr: [
      'كل شيء في الذهبي',
      'حقوق التسمية للبرامج/المبادرات',
      'فرص الاشتراك على مستوى مجلس الإدارة',
      'الوصول إلى لوحة التحكم في الوقت الفعلي',
      'تكامل API مخصص',
      'فريق تقني مخصص',
      'حلول تسمية بيضاء',
      'تطوير الشراكة الاستراتيجية',
    ],
    features: {
      dashboard: true,
      toolkit: true,
      cobranding: true,
      roiCalculator: true,
      eventAccess: true,
      dedicatedSupport: true,
      customReports: true,
      apiAccess: true,
    },
  },
];

// Sample Partners
export const FEATURED_PARTNERS: Partner[] = [
  {
    id: 'partner-1',
    name: 'Global Health Initiative',
    nameAr: 'مبادرة الصحة العالمية',
    logo: '/partners/global-health-logo.png',
    tier: 'platinum',
    website: 'https://globalhealthinitiative.org',
    joinDate: '2022-01-15',
    country: 'USA',
    industry: 'Healthcare',
    description: 'Supporting medical programs and healthcare access across 15 countries',
    descriptionAr: 'دعم البرامج الطبية والحصول على الرعاية الصحية عبر 15 دولة',
    featured: true,
    roiData: {
      donationsGenerated: 1250000,
      volunteersRecruited: 485,
      outreach: 2500000,
      impact: 'Reached 100K+ patients with medical services',
      impactAr: 'وصل إلى 100K+ مريض بالخدمات الطبية',
    },
  },
  {
    id: 'partner-2',
    name: 'Education Without Borders',
    nameAr: 'التعليم بلا حدود',
    logo: '/partners/education-logo.png',
    tier: 'gold',
    website: 'https://educationwithoutborders.org',
    joinDate: '2023-03-20',
    country: 'UK',
    industry: 'Education',
    description: 'Partnering to expand educational opportunities for refugee children',
    descriptionAr: 'شراكة لتوسيع الفرص التعليمية لأطفال اللاجئين',
    featured: true,
    roiData: {
      donationsGenerated: 750000,
      volunteersRecruited: 320,
      outreach: 1800000,
      impact: 'Sponsored education for 5K+ students',
      impactAr: 'رعاية التعليم لـ 5K+ طالب',
    },
  },
  {
    id: 'partner-3',
    name: 'Tech for Good Foundation',
    nameAr: 'مؤسسة التكنولوجيا للخير',
    logo: '/partners/tech-logo.png',
    tier: 'silver',
    website: 'https://techforgood.org',
    joinDate: '2023-06-10',
    country: 'Singapore',
    industry: 'Technology',
    description: 'Providing technology solutions and digital literacy training',
    descriptionAr: 'توفير حلول التكنولوجيا وتدريب القراءة الرقمية',
    featured: true,
    roiData: {
      donationsGenerated: 350000,
      volunteersRecruited: 180,
      outreach: 950000,
      impact: 'Trained 2K+ people in digital skills',
      impactAr: 'تدريب 2K+ شخص على المهارات الرقمية',
    },
  },
  {
    id: 'partner-4',
    name: 'Humanitarian Aid Network',
    nameAr: 'شبكة المساعدات الإنسانية',
    logo: '/partners/aid-network-logo.png',
    tier: 'bronze',
    joinDate: '2024-01-05',
    country: 'Canada',
    industry: 'Non-profit',
    description: 'Supporting emergency relief operations',
    descriptionAr: 'دعم عمليات الإغاثة الطارئة',
    featured: false,
    roiData: {
      donationsGenerated: 185000,
      volunteersRecruited: 95,
      outreach: 450000,
      impact: 'Assisted 25K+ families in crisis',
      impactAr: 'ساعد 25K+ عائلة في أزمة',
    },
  },
];

/**
 * Calculate ROI for partners
 */
export function calculatePartnerROI(
  investmentAmount: number,
  timeframe: 'annual' | 'quarterly' | 'lifetime' = 'annual'
): Partial<ROICalculation> {
  // ROI model: each $1 generates estimated $5-8 in charitable outcomes + $2-3 in volunteer value
  const multiplier = timeframe === 'annual' ? 1 : timeframe === 'quarterly' ? 0.25 : 3;
  const baseMultiplier = 6.5;

  const projectedDonations = Math.round(investmentAmount * baseMultiplier * multiplier);
  const projectedVolunteers = Math.round((investmentAmount / 250) * multiplier);
  const projectedReach = Math.round((investmentAmount / 0.15) * multiplier);

  // Impact calculations
  const donationPerFamily = 50;
  const donationPerStudent = 75;
  const donationPerPatient = 35;

  const familiesServed = Math.round(projectedDonations / donationPerFamily * 0.4);
  const childrenEducated = Math.round(projectedDonations / donationPerStudent * 0.35);
  const patientsAided = Math.round(projectedDonations / donationPerPatient * 0.25);

  // ROI calculation
  const roi = {
    percentage: Math.round((projectedDonations / investmentAmount - 1) * 100),
    dollarAmount: projectedDonations - investmentAmount,
  };

  return {
    projectedDonations,
    projectedVolunteers,
    projectedReach,
    impact: {
      familiesServed,
      childrenEducated,
      patientsAided,
    },
    roi,
  };
}

/**
 * Get tier by ID
 */
export function getTierById(tier: PartnerTier): PartnerTierBenefits | undefined {
  return PARTNER_TIERS.find(t => t.tier === tier);
}

/**
 * Get featured partners
 */
export function getFeaturedPartners(): Partner[] {
  return FEATURED_PARTNERS.filter(p => p.featured);
}

/**
 * Get partners by tier
 */
export function getPartnersByTier(tier: PartnerTier): Partner[] {
  return FEATURED_PARTNERS.filter(p => p.tier === tier);
}
