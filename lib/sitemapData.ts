/**
 * Comprehensive Sitemap with Topical Mapping
 * Organized by topics, programs, regions, and content types
 */

export interface SitemapNode {
  id: string;
  label: string;
  labelAr: string;
  path: string;
  type: 'category' | 'page' | 'archive';
  icon?: string;
  description?: string;
  descriptionAr?: string;
  children?: SitemapNode[];
  contentType?: 'landing' | 'article' | 'archive' | 'resource' | 'form';
  priority?: number;
}

// COMPREHENSIVE SITEMAP STRUCTURE
export const COMPLETE_SITEMAP: SitemapNode[] = [
  {
    id: 'home',
    label: 'Home',
    labelAr: 'الصفحة الرئيسية',
    path: '/',
    type: 'page',
    icon: '🏠',
    priority: 1.0,
  },

  // ============ PROGRAMS SECTION (Topical) ============
  {
    id: 'programs',
    label: 'Programs',
    labelAr: 'البرامج',
    path: '/programs',
    type: 'category',
    icon: '🎯',
    description: 'Our humanitarian initiatives across 30+ countries',
    descriptionAr: 'مبادراتنا الإنسانية عبر 30+ دولة',
    priority: 0.9,
    children: [
      // Crisis Response Topic
      {
        id: 'crisis-response',
        label: 'Crisis Response & Emergency Aid',
        labelAr: 'الاستجابة للأزمات والمساعدات الطوارئ',
        path: '/programs/crisis-response',
        type: 'category',
        icon: '🚨',
        priority: 0.95,
        children: [
          {
            id: 'gaza-relief',
            label: 'Gaza Relief Operations',
            labelAr: 'عمليات إغاثة غزة',
            path: '/programs/crisis-response/gaza-relief',
            type: 'page',
            contentType: 'landing',
            priority: 0.98,
          },
          {
            id: 'syria-refugee',
            label: 'Syria & Refugee Support',
            labelAr: 'دعم سوريا واللاجئين',
            path: '/programs/crisis-response/syria-refugee-support',
            type: 'page',
            contentType: 'landing',
          },
          {
            id: 'yemen-operations',
            label: 'Yemen Humanitarian Operations',
            labelAr: 'العمليات الإنسانية باليمن',
            path: '/programs/crisis-response/yemen-operations',
            type: 'page',
            contentType: 'landing',
          },
          {
            id: 'lebanon-support',
            label: 'Lebanon Emergency Support',
            labelAr: 'دعم الطوارئ في لبنان',
            path: '/programs/crisis-response/lebanon-support',
            type: 'page',
            contentType: 'landing',
          },
          {
            id: 'crisis-response-news',
            label: 'Crisis Updates & News',
            labelAr: 'تحديثات الأزمات والأخبار',
            path: '/programs/crisis-response/news',
            type: 'archive',
            contentType: 'archive',
          },
        ],
      },
      // Education Topic
      {
        id: 'education',
        label: 'Education & Youth Development',
        labelAr: 'التعليم وتطوير الشباب',
        path: '/programs/education',
        type: 'category',
        icon: '📚',
        priority: 0.9,
        children: [
          {
            id: 'school-sponsorship',
            label: 'School Sponsorship Program',
            labelAr: 'برنامج رعاية المدارس',
            path: '/programs/education/school-sponsorship',
            type: 'page',
            contentType: 'landing',
          },
          {
            id: 'teacher-training',
            label: 'Teacher Training & Development',
            labelAr: 'تدريب المعلمين والتطوير',
            path: '/programs/education/teacher-training',
            type: 'page',
            contentType: 'landing',
          },
          {
            id: 'refugee-education',
            label: 'Refugee Children Education',
            labelAr: 'تعليم أطفال اللاجئين',
            path: '/programs/education/refugee-education',
            type: 'page',
            contentType: 'landing',
          },
          {
            id: 'vocational-training',
            label: 'Vocational Skills Training',
            labelAr: 'تدريب المهارات المهنية',
            path: '/programs/education/vocational-training',
            type: 'page',
            contentType: 'landing',
          },
          {
            id: 'scholarship-recipients',
            label: 'Scholarship Recipients Stories',
            labelAr: 'قصص المستفيدين من المنح',
            path: '/programs/education/scholarship-stories',
            type: 'archive',
            contentType: 'archive',
          },
        ],
      },
      // Healthcare Topic
      {
        id: 'healthcare',
        label: 'Healthcare & Medical Services',
        labelAr: 'الرعاية الصحية والخدمات الطبية',
        path: '/programs/healthcare',
        type: 'category',
        icon: '⚕️',
        priority: 0.9,
        children: [
          {
            id: 'mobile-clinics',
            label: 'Mobile Health Clinics',
            labelAr: 'العيادات الصحية المتنقلة',
            path: '/programs/healthcare/mobile-clinics',
            type: 'page',
            contentType: 'landing',
          },
          {
            id: 'medical-missions',
            label: 'Medical Missions & Camps',
            labelAr: 'البعثات الطبية والمخيمات',
            path: '/programs/healthcare/medical-missions',
            type: 'page',
            contentType: 'landing',
          },
          {
            id: 'reproductive-health',
            label: 'Reproductive Health Services',
            labelAr: 'خدمات الصحة الإنجابية',
            path: '/programs/healthcare/reproductive-health',
            type: 'page',
            contentType: 'landing',
          },
          {
            id: 'disease-prevention',
            label: 'Disease Prevention Programs',
            labelAr: 'برامج الوقاية من الأمراض',
            path: '/programs/healthcare/disease-prevention',
            type: 'page',
            contentType: 'landing',
          },
          {
            id: 'mental-health',
            label: 'Mental Health & Trauma Support',
            labelAr: 'الصحة النفسية ودعم الصدمات',
            path: '/programs/healthcare/mental-health',
            type: 'page',
            contentType: 'landing',
          },
        ],
      },
      // Livelihood & Economic Topic
      {
        id: 'livelihoods',
        label: 'Livelihood & Economic Development',
        labelAr: 'الرزق والتنمية الاقتصادية',
        path: '/programs/livelihoods',
        type: 'category',
        icon: '💼',
        priority: 0.85,
        children: [
          {
            id: 'microfinance',
            label: 'Microfinance & Small Business',
            labelAr: 'التمويل الأصغر والأعمال الصغيرة',
            path: '/programs/livelihoods/microfinance',
            type: 'page',
            contentType: 'landing',
          },
          {
            id: 'job-creation',
            label: 'Job Creation Initiatives',
            labelAr: 'مبادرات خلق فرص العمل',
            path: '/programs/livelihoods/job-creation',
            type: 'page',
            contentType: 'landing',
          },
          {
            id: 'women-empowerment',
            label: 'Women Economic Empowerment',
            labelAr: 'تمكين المرأة اقتصادياً',
            path: '/programs/livelihoods/women-empowerment',
            type: 'page',
            contentType: 'landing',
          },
          {
            id: 'agricultural-support',
            label: 'Agricultural Support Programs',
            labelAr: 'برامج دعم الزراعة',
            path: '/programs/livelihoods/agricultural-support',
            type: 'page',
            contentType: 'landing',
          },
        ],
      },
      // Water & Sanitation Topic
      {
        id: 'wash',
        label: 'Water, Sanitation & Hygiene',
        labelAr: 'المياه والصرف الصحي والنظافة',
        path: '/programs/wash',
        type: 'category',
        icon: '💧',
        priority: 0.85,
        children: [
          {
            id: 'water-projects',
            label: 'Clean Water Projects',
            labelAr: 'مشاريع المياه النظيفة',
            path: '/programs/wash/water-projects',
            type: 'page',
            contentType: 'landing',
          },
          {
            id: 'sanitation-systems',
            label: 'Sanitation System Development',
            labelAr: 'تطوير أنظمة الصرف الصحي',
            path: '/programs/wash/sanitation-systems',
            type: 'page',
            contentType: 'landing',
          },
          {
            id: 'hygiene-education',
            label: 'Hygiene Education Campaigns',
            labelAr: 'حملات تثقيف النظافة',
            path: '/programs/wash/hygiene-education',
            type: 'page',
            contentType: 'landing',
          },
        ],
      },
    ],
  },

  // ============ ABOUT SECTION ============
  {
    id: 'about',
    label: 'About Us',
    labelAr: 'عن المنظمة',
    path: '/about',
    type: 'category',
    icon: 'ℹ️',
    priority: 0.85,
    children: [
      {
        id: 'mission-vision',
        label: 'Mission & Vision',
        labelAr: 'المهمة والرؤية',
        path: '/about/mission-vision',
        type: 'page',
        contentType: 'landing',
      },
      {
        id: 'history',
        label: 'Our History',
        labelAr: 'تاريخنا',
        path: '/about/history',
        type: 'page',
        contentType: 'article',
      },
      {
        id: 'team',
        label: 'Leadership Team',
        labelAr: 'فريق القيادة',
        path: '/about/leadership',
        type: 'page',
        contentType: 'landing',
      },
      {
        id: 'board-directors',
        label: 'Board of Directors',
        labelAr: 'مجلس الإدارة',
        path: '/about/board-of-directors',
        type: 'page',
        contentType: 'landing',
      },
      {
        id: 'organizational-values',
        label: 'Our Values & Principles',
        labelAr: 'قيمنا والمبادئ',
        path: '/about/values-principles',
        type: 'page',
        contentType: 'article',
      },
      {
        id: 'organizational-structure',
        label: 'Organizational Structure',
        labelAr: 'الهيكل التنظيمي',
        path: '/about/organizational-structure',
        type: 'page',
        contentType: 'landing',
      },
      {
        id: 'global-presence',
        label: 'Global Presence',
        labelAr: 'الوجود العالمي',
        path: '/about/global-presence',
        type: 'page',
        contentType: 'landing',
      },
    ],
  },

  // ============ IMPACT & RESULTS ============
  {
    id: 'impact',
    label: 'Our Impact',
    labelAr: 'تأثيرنا',
    path: '/impact',
    type: 'category',
    icon: '📊',
    priority: 0.9,
    children: [
      {
        id: 'impact-dashboard',
        label: 'Impact Dashboard',
        labelAr: 'لوحة قياس الأثر',
        path: '/impact-dashboard',
        type: 'page',
        contentType: 'landing',
      },
      {
        id: 'annual-reports',
        label: 'Annual Reports',
        labelAr: 'التقارير السنوية',
        path: '/impact/annual-reports',
        type: 'archive',
        contentType: 'archive',
      },
      {
        id: 'impact-stories',
        label: 'Beneficiary Stories',
        labelAr: 'قصص المستفيدين',
        path: '/impact/stories',
        type: 'archive',
        contentType: 'archive',
      },
      {
        id: 'research-publications',
        label: 'Research & Publications',
        labelAr: 'الأبحاث والمنشورات',
        path: '/impact/research-publications',
        type: 'archive',
        contentType: 'archive',
      },
      {
        id: 'case-studies',
        label: 'Program Case Studies',
        labelAr: 'دراسات الحالات برامجنا',
        path: '/impact/case-studies',
        type: 'archive',
        contentType: 'archive',
      },
    ],
  },

  // ============ GET INVOLVED ============
  {
    id: 'get-involved',
    label: 'Get Involved',
    labelAr: 'شارك معنا',
    path: '/get-involved',
    type: 'category',
    icon: '🤝',
    priority: 0.95,
    children: [
      {
        id: 'donate',
        label: 'Donate Now',
        labelAr: 'تبرع الآن',
        path: '/get-involved/donate',
        type: 'page',
        contentType: 'landing',
        priority: 0.98,
      },
      {
        id: 'volunteer',
        label: 'Become a Volunteer',
        labelAr: 'كن متطوعاً',
        path: '/get-involved/volunteer',
        type: 'page',
        contentType: 'form',
      },
      {
        id: 'corporate-partnership',
        label: 'Corporate Partnerships',
        labelAr: 'الشراكات المؤسسية',
        path: '/get-involved/corporate-partnerships',
        type: 'page',
        contentType: 'landing',
      },
      {
        id: 'fundraising',
        label: 'Fundraise for JHCO',
        labelAr: 'اجمع أموال من أجل JHCO',
        path: '/get-involved/fundraising',
        type: 'page',
        contentType: 'landing',
      },
      {
        id: 'subscribe-newsletter',
        label: 'Subscribe to Newsletter',
        labelAr: 'اشترك في النشرة الإخبارية',
        path: '/get-involved/newsletter-signup',
        type: 'page',
        contentType: 'form',
      },
    ],
  },

  // ============ NEWS & RESOURCES ============
  {
    id: 'news-resources',
    label: 'News & Resources',
    labelAr: 'الأخبار والموارد',
    path: '/news-resources',
    type: 'category',
    icon: '📰',
    priority: 0.8,
    children: [
      {
        id: 'blog',
        label: 'Blog',
        labelAr: 'المدونة',
        path: '/blog',
        type: 'archive',
        contentType: 'archive',
      },
      {
        id: 'press-releases',
        label: 'Press Releases',
        labelAr: 'بيانات صحفية',
        path: '/news-resources/press-releases',
        type: 'archive',
        contentType: 'archive',
      },
      {
        id: 'media-library',
        label: 'Media Library',
        labelAr: 'مكتبة الوسائط',
        path: '/media-library',
        type: 'page',
        contentType: 'landing',
      },
      {
        id: 'knowledge-hub',
        label: 'Knowledge Hub',
        labelAr: 'مركز المعرفة',
        path: '/knowledge-hub',
        type: 'category',
        children: [
          {
            id: 'guides',
            label: 'How-To Guides',
            labelAr: 'أدلة الإرشادات',
            path: '/knowledge-hub/guides',
            type: 'archive',
          },
          {
            id: 'faq',
            label: 'Frequently Asked Questions',
            labelAr: 'الأسئلة الشائعة',
            path: '/knowledge-hub/faq',
            type: 'archive',
          },
          {
            id: 'glossary',
            label: 'Terminology Glossary',
            labelAr: 'قاموس المصطلحات',
            path: '/knowledge-hub/glossary',
            type: 'page',
          },
          {
            id: 'resource-library',
            label: 'Resource Downloads',
            labelAr: 'تحميلات الموارد',
            path: '/knowledge-hub/resource-library',
            type: 'archive',
          },
        ],
      },
      {
        id: 'events',
        label: 'Events',
        labelAr: 'الأحداث',
        path: '/news-resources/events',
        type: 'archive',
        contentType: 'archive',
      },
    ],
  },

  // ============ REGIONAL SECTIONS ============
  {
    id: 'regions',
    label: 'By Region',
    labelAr: 'حسب المنطقة',
    path: '/regions',
    type: 'category',
    icon: '🌍',
    priority: 0.75,
    children: [
      {
        id: 'middle-east',
        label: 'Middle East',
        labelAr: 'الشرق الأوسط',
        path: '/regions/middle-east',
        type: 'page',
        children: [
          { id: 'palestine', label: 'Palestine', labelAr: 'فلسطين', path: '/regions/middle-east/palestine', type: 'page' },
          { id: 'jordan', label: 'Jordan', labelAr: 'الأردن', path: '/regions/middle-east/jordan', type: 'page' },
          { id: 'lebanon', label: 'Lebanon', labelAr: 'لبنان', path: '/regions/middle-east/lebanon', type: 'page' },
          { id: 'iraq', label: 'Iraq', labelAr: 'العراق', path: '/regions/middle-east/iraq', type: 'page' },
        ],
      },
      {
        id: 'north-africa',
        label: 'North Africa',
        labelAr: 'شمال أفريقيا',
        path: '/regions/north-africa',
        type: 'page',
        children: [
          { id: 'egypt', label: 'Egypt', labelAr: 'مصر', path: '/regions/north-africa/egypt', type: 'page' },
          { id: 'tunisia', label: 'Tunisia', labelAr: 'تونس', path: '/regions/north-africa/tunisia', type: 'page' },
          { id: 'morocco', label: 'Morocco', labelAr: 'المغرب', path: '/regions/north-africa/morocco', type: 'page' },
        ],
      },
      {
        id: 'sub-saharan',
        label: 'Sub-Saharan Africa',
        labelAr: 'أفريقيا جنوب الصحراء',
        path: '/regions/sub-saharan-africa',
        type: 'page',
      },
      {
        id: 'asia',
        label: 'Asia',
        labelAr: 'آسيا',
        path: '/regions/asia',
        type: 'page',
      },
    ],
  },

  // ============ SUPPORT & CONTACT ============
  {
    id: 'support',
    label: 'Support & Contact',
    labelAr: 'الدعم والتواصل',
    path: '/support',
    type: 'category',
    icon: '💬',
    priority: 0.8,
    children: [
      {
        id: 'contact',
        label: 'Contact Us',
        labelAr: 'اتصل بنا',
        path: '/contact',
        type: 'page',
        contentType: 'form',
        priority: 0.9,
      },
      {
        id: 'financial-reports',
        label: 'Financial Reports',
        labelAr: 'التقارير المالية',
        path: '/support/financial-reports',
        type: 'archive',
      },
      {
        id: 'transparency',
        label: 'Transparency & Accountability',
        labelAr: 'الشفافية والمساءلة',
        path: '/support/transparency-accountability',
        type: 'page',
      },
      {
        id: 'policies',
        label: 'Policies & Guidelines',
        labelAr: 'السياسات والإرشادات',
        path: '/support/policies',
        type: 'category',
        children: [
          { id: 'privacy-policy', label: 'Privacy Policy', labelAr: 'سياسة الخصوصية', path: '/support/policies/privacy', type: 'page' },
          { id: 'terms', label: 'Terms of Service', labelAr: 'شروط الخدمة', path: '/support/policies/terms', type: 'page' },
          { id: 'code-conduct', label: 'Code of Conduct', labelAr: 'قواعد السلوك', path: '/support/policies/code-of-conduct', type: 'page' },
        ],
      },
      {
        id: 'careers',
        label: 'Careers',
        labelAr: 'الوظائف',
        path: '/support/careers',
        type: 'archive',
      },
    ],
  },

  // ============ SPECIAL SECTIONS ============
  {
    id: 'special',
    label: 'Special Programs',
    labelAr: 'برامج خاصة',
    path: '/special-programs',
    type: 'category',
    icon: '⭐',
    priority: 0.8,
    children: [
      {
        id: 'emergency-appeal',
        label: 'Emergency Appeal',
        labelAr: 'نداء الطوارئ',
        path: '/special-programs/emergency-appeal',
        type: 'page',
        priority: 0.95,
      },
      {
        id: 'ramadan-campaign',
        label: 'Ramadan Campaign',
        labelAr: 'حملة رمضان',
        path: '/special-programs/ramadan-campaign',
        type: 'page',
      },
      {
        id: 'eid-giving',
        label: 'Eid Giving',
        labelAr: 'التبرع في العيد',
        path: '/special-programs/eid-giving',
        type: 'page',
      },
      {
        id: 'zakat-sadaqah',
        label: 'Zakat & Sadaqah',
        labelAr: 'الزكاة والصدقة',
        path: '/special-programs/zakat-sadaqah',
        type: 'page',
      },
    ],
  },

  // ============ ALREADY BUILT SECTIONS ============
  {
    id: 'volunteer-opportunities',
    label: 'Volunteer Opportunities',
    labelAr: 'فرص التطوع',
    path: '/volunteer-opportunities',
    type: 'page',
    icon: '👥',
    priority: 0.9,
  },
  {
    id: 'search',
    label: 'Search',
    labelAr: 'بحث',
    path: '/search',
    type: 'page',
    icon: '🔍',
    priority: 0.85,
  },
  {
    id: 'partner-portal',
    label: 'Partner Portal',
    labelAr: 'برنامج الشراكة',
    path: '/partner-portal',
    type: 'page',
    icon: '🤝',
    priority: 0.85,
  },
];

/**
 * Get all leaf pages (no children)
 */
export function getAllPages(nodes: SitemapNode[] = COMPLETE_SITEMAP): SitemapNode[] {
  const pages: SitemapNode[] = [];

  function traverse(node: SitemapNode) {
    if (!node.children || node.children.length === 0) {
      pages.push(node);
    } else {
      node.children.forEach(traverse);
    }
  }

  nodes.forEach(traverse);
  return pages;
}

/**
 * Get breadcrumb path for a page
 */
export function getBreadcrumbs(targetPath: string): SitemapNode[] {
  const breadcrumbs: SitemapNode[] = [];

  function traverse(node: SitemapNode, path: SitemapNode[]) {
    const currentPath = [...path, node];
    if (node.path === targetPath) {
      breadcrumbs.push(...currentPath);
      return true;
    }
    if (node.children) {
      for (const child of node.children) {
        if (traverse(child, currentPath)) return true;
      }
    }
    return false;
  }

  COMPLETE_SITEMAP.forEach(node => traverse(node, []));
  return breadcrumbs;
}

/**
 * Count total pages
 */
export function getTotalPageCount(): number {
  return getAllPages().length;
}
