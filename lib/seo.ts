/**
 * SEO Utilities and Schema.org structured data generation
 */

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'organization';
  canonical?: string;
  robots?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

/**
 * Generate organization schema.org markup
 */
export function generateOrganizationSchema(locale: string = 'en') {
  const isArabic = locale === 'ar';

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: isArabic ? 'الهيئة الخيرية الأردنية الهاشمية' : 'Jordan Hashemite Charity Organization',
    alternateName: 'JHCO',
    url: 'https://jhco.org.jo',
    logo: 'https://jhco.org.jo/media/logo.webp',
    description: isArabic
      ? 'تقديم المساعدات الإنسانية والخدمات الخيرية في أكثر من 30 دولة'
      : 'Providing humanitarian aid and charitable services across 30+ countries',
    foundingDate: '1990-01-10',
    foundingLocation: 'Amman, Jordan',
    areaServed: [
      'Palestine',
      'Syria',
      'Yemen',
      'Gaza',
      'Lebanon',
      'Sudan',
      'Egypt',
      'Jordan',
      'Turkey',
      'Pakistan',
      'Bangladesh',
      'Kenya',
      'Afghanistan',
      'Somalia',
      'Iraq',
      'Libya',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: '+962-6-123-4567',
      email: 'info@jhco.org.jo',
      areaServed: 'JO',
    },
    sameAs: [
      'https://www.facebook.com/JHCO.JO',
      'https://twitter.com/_jhco',
      'https://www.instagram.com/_jhco',
      'https://www.youtube.com/channel/UCt-VuSTHrb3A-oCkzDfWgVw',
    ],
  };
}

/**
 * Generate article/news schema
 */
export function generateArticleSchema(
  title: string,
  description: string,
  imageUrl: string,
  publishedDate: Date,
  modifiedDate?: Date,
  authorName: string = 'JHCO'
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: title,
    description: description,
    image: imageUrl,
    datePublished: publishedDate.toISOString(),
    dateModified: (modifiedDate || publishedDate).toISOString(),
    author: {
      '@type': 'Organization',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: 'JHCO',
      logo: {
        '@type': 'ImageObject',
        url: 'https://jhco.org.jo/media/logo.webp',
      },
    },
  };
}

/**
 * Generate breadcrumb schema for navigation
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate FAQPage schema
 */
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * SEO best practices checklist
 */
export const SEO_CHECKLIST = {
  onPage: [
    '✅ Title tag (50-60 characters)',
    '✅ Meta description (150-160 characters)',
    '✅ H1 tag (one per page)',
    '✅ Image alt text (descriptive)',
    '✅ Internal links (3-5 per page)',
    '✅ URL structure (lowercase, hyphens)',
    '✅ Schema.org markup',
    '✅ Mobile responsive',
    '✅ Page speed optimized',
    '✅ Unique content (no duplicates)',
  ],
  technical: [
    '✅ XML sitemap (submitted to GSC)',
    '✅ Robots.txt configured',
    '✅ hreflang tags (ar/en)',
    '✅ Canonical tags',
    '✅ Open Graph tags',
    '✅ Twitter Card tags',
    '✅ Structured data (JSON-LD)',
    '✅ Core Web Vitals tracked',
    '✅ SSL/HTTPS enabled',
    '✅ No 404 errors',
  ],
  content: [
    '✅ Target keywords identified',
    '✅ Keyword density (1-2%)',
    '✅ Readability score (Flesch)',
    '✅ Content structure (H2, H3)',
    '✅ Meta description unique',
    '✅ Outbound links relevant',
    '✅ Internal linking strategy',
    '✅ Content length (300+ words)',
    '✅ Fresh content updates',
    '✅ No keyword stuffing',
  ],
};

/**
 * Target keywords by topic cluster
 */
export const TOPIC_KEYWORDS = {
  crisis_response: [
    'humanitarian crisis response',
    'Gaza aid',
    'Syria relief',
    'Yemen emergency',
    'disaster response',
    'emergency aid',
  ],
  programs: [
    'humanitarian programs',
    'charity programs',
    'NGO programs',
    'aid programs',
    'development projects',
    'community programs',
  ],
  donations: [
    'donate to charity',
    'humanitarian donation',
    'make a donation',
    'charitable giving',
    'donate online',
    'zakat donation',
  ],
  volunteer: [
    'volunteer opportunities',
    'humanitarian volunteering',
    'volunteer work',
    'volunteer abroad',
    'community volunteer',
    'virtual volunteering',
  ],
  transparency: [
    'charity transparency',
    'NGO accountability',
    'financial reports',
    'charity ratings',
    'nonprofit transparency',
  ],
};

/**
 * SEO optimization recommendations
 */
export const SEO_RECOMMENDATIONS = [
  {
    priority: 'High',
    task: 'Add schema.org markup to all pages',
    impact: 'Rich snippets in search results',
    effort: '10 hours',
  },
  {
    priority: 'High',
    task: 'Optimize title tags and meta descriptions',
    impact: 'Improved CTR from search results',
    effort: '8 hours',
  },
  {
    priority: 'High',
    task: 'Create internal linking strategy',
    impact: 'Better crawlability and topical authority',
    effort: '5 hours',
  },
  {
    priority: 'Medium',
    task: 'Build backlink profile',
    impact: 'Domain authority increase',
    effort: 'Ongoing',
  },
  {
    priority: 'Medium',
    task: 'Set up Google Search Console',
    impact: 'Monitor crawl errors and rankings',
    effort: '2 hours',
  },
  {
    priority: 'Medium',
    task: 'Create content calendar',
    impact: 'Consistent fresh content',
    effort: 'Ongoing',
  },
  {
    priority: 'Low',
    task: 'Implement breadcrumb navigation',
    impact: 'Improved UX and SERP appearance',
    effort: '3 hours',
  },
];
