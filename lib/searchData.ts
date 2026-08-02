/**
 * Advanced Search System
 * Faceted search, filters, and analytics
 */

export interface SearchFilter {
  id: string;
  key: string;
  label: string;
  labelAr: string;
  type: 'checkbox' | 'range' | 'select';
  options?: Array<{
    value: string;
    label: string;
    labelAr: string;
    count: number;
  }>;
  min?: number;
  max?: number;
}

export interface SearchResult {
  id: string;
  type: 'page' | 'news' | 'resource' | 'opportunity' | 'program';
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  url: string;
  icon: string;
  category?: string;
  date?: string;
  relevance: number;
}

// Content categories for faceted search
export const SEARCH_CATEGORIES = [
  { value: 'news', label: 'News & Updates', labelAr: 'الأخبار والتحديثات', icon: '📰' },
  { value: 'programs', label: 'Programs', labelAr: 'البرامج', icon: '🎯' },
  { value: 'opportunities', label: 'Volunteer Opportunities', labelAr: 'فرص التطوع', icon: '🤝' },
  { value: 'resources', label: 'Resources', labelAr: 'الموارد', icon: '📚' },
  { value: 'pages', label: 'Pages', labelAr: 'الصفحات', icon: '📄' },
];

// Global filters applicable to all searches
export const GLOBAL_SEARCH_FILTERS: SearchFilter[] = [
  {
    id: 'category',
    key: 'category',
    label: 'Category',
    labelAr: 'الفئة',
    type: 'checkbox',
    options: [
      { value: 'news', label: 'News & Updates', labelAr: 'الأخبار والتحديثات', count: 24 },
      { value: 'programs', label: 'Programs', labelAr: 'البرامج', count: 15 },
      { value: 'opportunities', label: 'Opportunities', labelAr: 'الفرص', count: 12 },
      { value: 'resources', label: 'Resources', labelAr: 'الموارد', count: 18 },
      { value: 'pages', label: 'Pages', labelAr: 'الصفحات', count: 20 },
    ],
  },
  {
    id: 'date_range',
    key: 'dateRange',
    label: 'Date Range',
    labelAr: 'نطاق التاريخ',
    type: 'select',
    options: [
      { value: 'week', label: 'Past Week', labelAr: 'الأسبوع الماضي', count: 8 },
      { value: 'month', label: 'Past Month', labelAr: 'الشهر الماضي', count: 32 },
      { value: 'quarter', label: 'Past 3 Months', labelAr: 'آخر 3 أشهر', count: 56 },
      { value: 'year', label: 'Past Year', labelAr: 'السنة الماضية', count: 89 },
    ],
  },
  {
    id: 'language',
    key: 'language',
    label: 'Language',
    labelAr: 'اللغة',
    type: 'checkbox',
    options: [
      { value: 'ar', label: 'Arabic', labelAr: 'العربية', count: 67 },
      { value: 'en', label: 'English', labelAr: 'الإنجليزية', count: 78 },
    ],
  },
];

// Content-specific filters
export const PROGRAM_SEARCH_FILTERS: SearchFilter[] = [
  {
    id: 'region',
    key: 'region',
    label: 'Region',
    labelAr: 'المنطقة',
    type: 'checkbox',
    options: [
      { value: 'middle-east', label: 'Middle East', labelAr: 'الشرق الأوسط', count: 12 },
      { value: 'north-africa', label: 'North Africa', labelAr: 'شمال أفريقيا', count: 8 },
      { value: 'sub-saharan', label: 'Sub-Saharan Africa', labelAr: 'أفريقيا جنوب الصحراء', count: 5 },
      { value: 'asia', label: 'Asia', labelAr: 'آسيا', count: 6 },
    ],
  },
  {
    id: 'status',
    key: 'status',
    label: 'Program Status',
    labelAr: 'حالة البرنامج',
    type: 'checkbox',
    options: [
      { value: 'active', label: 'Active', labelAr: 'نشط', count: 18 },
      { value: 'expanding', label: 'Expanding', labelAr: 'يتوسع', count: 9 },
      { value: 'stable', label: 'Stable', labelAr: 'مستقر', count: 7 },
    ],
  },
];

export const OPPORTUNITY_SEARCH_FILTERS: SearchFilter[] = [
  {
    id: 'type',
    key: 'type',
    label: 'Work Type',
    labelAr: 'نوع العمل',
    type: 'checkbox',
    options: [
      { value: 'field', label: 'Field', labelAr: 'ميداني', count: 7 },
      { value: 'remote', label: 'Remote', labelAr: 'عن بعد', count: 4 },
      { value: 'hybrid', label: 'Hybrid', labelAr: 'مختلط', count: 2 },
    ],
  },
  {
    id: 'commitment',
    key: 'commitment',
    label: 'Time Commitment',
    labelAr: 'الالتزام الزمني',
    type: 'checkbox',
    options: [
      { value: 'part-time', label: 'Part-time (< 20h/week)', labelAr: 'بدوام جزئي', count: 5 },
      { value: 'full-time', label: 'Full-time (40h/week)', labelAr: 'بدوام كامل', count: 6 },
      { value: 'flexible', label: 'Flexible', labelAr: 'مرن', count: 2 },
    ],
  },
];

// Mock search results for demo
export const MOCK_SEARCH_RESULTS: SearchResult[] = [
  {
    id: '1',
    type: 'opportunity',
    title: 'Field Coordinator - Gaza Operations',
    titleAr: 'منسق ميداني - عمليات غزة',
    description: 'Lead humanitarian coordination in Gaza. Manage supply distribution and volunteer teams.',
    descriptionAr: 'قيادة التنسيق الإنساني في غزة. إدارة توزيع المساعدات وفرق المتطوعين.',
    url: '/volunteer-opportunities/field-coordinator-gaza',
    icon: '🚨',
    category: 'opportunities',
    relevance: 0.98,
  },
  {
    id: '2',
    type: 'program',
    title: 'Crisis Response & Emergency Aid',
    titleAr: 'الاستجابة للأزمات والمساعدات الطوارئ',
    description: 'Supporting vulnerable populations in crisis zones across 15 countries.',
    descriptionAr: 'دعم السكان الضعفاء في مناطق الأزمات عبر 15 دولة.',
    url: '/programs/crisis-response',
    icon: '🆘',
    category: 'programs',
    date: '2024-01-15',
    relevance: 0.92,
  },
  {
    id: '3',
    type: 'news',
    title: 'Gaza Relief Campaign Reaches 100K Families',
    titleAr: 'حملة إغاثة غزة تصل إلى 100K أسرة',
    description: 'In January 2024, our Gaza relief operations served 100,000 families with food and medical aid.',
    descriptionAr: 'في يناير 2024، خدمت عملياتنا الإغاثية في غزة 100 ألف أسرة بالغذاء والمساعدات الطبية.',
    url: '/news/gaza-relief-100k',
    icon: '📰',
    category: 'news',
    date: '2024-01-20',
    relevance: 0.88,
  },
  {
    id: '4',
    type: 'resource',
    title: 'Crisis Response Toolkit',
    titleAr: 'مجموعة أدوات الاستجابة للأزمات',
    description: 'A comprehensive guide for emergency response coordination and volunteer management.',
    descriptionAr: 'دليل شامل لتنسيق الاستجابة الطوارئ وإدارة المتطوعين.',
    url: '/resources/crisis-response-toolkit',
    icon: '📚',
    category: 'resources',
    relevance: 0.85,
  },
  {
    id: '5',
    type: 'page',
    title: 'Emergency Appeal',
    titleAr: 'نداء الطوارئ',
    description: 'Current emergency situations where we need immediate support and volunteer help.',
    descriptionAr: 'حالات الطوارئ الحالية حيث نحتاج إلى الدعم الفوري والمساعدة المتطوعين.',
    url: '/get-involved/emergency-appeal',
    icon: '⚠️',
    category: 'pages',
    relevance: 0.82,
  },
];

// Search suggestions for typeahead
export const SEARCH_SUGGESTIONS = [
  // Popular queries
  { text: 'volunteer opportunities', textAr: 'فرص التطوع', category: 'suggestions', frequency: 245 },
  { text: 'donate', textAr: 'تبرع', category: 'suggestions', frequency: 198 },
  { text: 'Gaza relief', textAr: 'إغاثة غزة', category: 'suggestions', frequency: 178 },
  { text: 'education programs', textAr: 'برامج التعليم', category: 'suggestions', frequency: 156 },
  { text: 'medical services', textAr: 'الخدمات الطبية', category: 'suggestions', frequency: 142 },
  { text: 'partner with JHCO', textAr: 'شراكة مع JHCO', category: 'suggestions', frequency: 128 },
  { text: 'financial reports', textAr: 'التقارير المالية', category: 'suggestions', frequency: 115 },
  { text: 'job opportunities', textAr: 'فرص العمل', category: 'suggestions', frequency: 98 },
];

// Analytics tracking for search behavior
export interface SearchAnalytics {
  query: string;
  filters: Record<string, string | string[]>;
  resultCount: number;
  clickedResult?: {
    id: string;
    position: number;
    dwell_time_ms: number;
  };
  timestamp: Date;
  session_id: string;
}

/**
 * Helper: Filter search results by facets
 */
export function filterResults(
  results: SearchResult[],
  filters: Record<string, string | string[]>
): SearchResult[] {
  return results.filter(result => {
    for (const [key, value] of Object.entries(filters)) {
      const values = Array.isArray(value) ? value : [value];

      if (key === 'category' && !values.includes(result.category || '')) {
        return false;
      }
      if (key === 'type' && result.type && !values.includes(result.type)) {
        return false;
      }
    }
    return true;
  });
}

/**
 * Helper: Score results by relevance + date recency
 */
export function rankResults(results: SearchResult[]): SearchResult[] {
  return [...results].sort((a, b) => {
    let scoreA = a.relevance;
    let scoreB = b.relevance;

    // Boost recent results slightly
    if (a.date && b.date) {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      const dayDiff = (dateB - dateA) / (1000 * 60 * 60 * 24);
      scoreB += Math.min(dayDiff / 365 * 0.1, 0.1); // Up to 10% boost for recency
    }

    return scoreB - scoreA;
  });
}

/**
 * Helper: Get filter suggestions based on current results
 */
export function getFilterSuggestions(results: SearchResult[]): Record<string, number> {
  const suggestions: Record<string, number> = {};

  results.forEach(result => {
    if (result.category) {
      suggestions[result.category] = (suggestions[result.category] || 0) + 1;
    }
  });

  return suggestions;
}
