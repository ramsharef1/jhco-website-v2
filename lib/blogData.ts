/**
 * Blog categories and metadata
 * Extends news system with category organization
 */

export interface BlogCategory {
  id: string;
  slug: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  icon: string;
  color: string;
  keyword: string;
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    id: 'crisis-updates',
    slug: 'crisis-updates',
    name: 'Crisis Updates',
    nameAr: 'تحديثات الأزمات',
    description: 'Real-time updates from humanitarian crisis zones',
    descriptionAr: 'التحديثات المباشرة من مناطق الأزمات الإنسانية',
    icon: '🚨',
    color: '#a8312f',
    keyword: 'humanitarian crisis',
  },
  {
    id: 'success-stories',
    slug: 'success-stories',
    name: 'Success Stories',
    nameAr: 'قصص النجاح',
    description: 'Stories of lives transformed by our programs',
    descriptionAr: 'قصص الحياة التي تحولت من خلال برامجنا',
    icon: '⭐',
    color: '#d4af37',
    keyword: 'impact story',
  },
  {
    id: 'impact-reports',
    slug: 'impact-reports',
    name: 'Impact Reports',
    nameAr: 'تقارير الأثر',
    description: 'Data-driven insights into our humanitarian work',
    descriptionAr: 'رؤى مستندة إلى البيانات حول عملنا الإنساني',
    icon: '📊',
    color: '#142850',
    keyword: 'impact metrics',
  },
  {
    id: 'how-to-help',
    slug: 'how-to-help',
    name: 'How to Help',
    nameAr: 'كيف تساعد',
    description: 'Guides on donating, volunteering, and partnering',
    descriptionAr: 'أدلة التبرع والتطوع والشراكة',
    icon: '🤝',
    color: '#0a1428',
    keyword: 'donate volunteer',
  },
  {
    id: 'knowledge-hub',
    slug: 'knowledge-hub',
    name: 'Knowledge Hub',
    nameAr: 'مركز المعرفة',
    description: 'Educational content on humanitarian issues',
    descriptionAr: 'المحتوى التعليمي حول القضايا الإنسانية',
    icon: '📚',
    color: '#6b7280',
    keyword: 'humanitarian education',
  },
];

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  titleAr: string;
  excerpt: string;
  excerptAr: string;
  content: string;
  contentAr: string;
  category: string;
  author: string;
  date: Date;
  updatedAt?: Date;
  featured: boolean;
  imageUrl?: string;
  readTime: number;
  keywords: string[];
}

/**
 * Get category by slug
 */
export function getCategoryBySlug(slug: string): BlogCategory | undefined {
  return BLOG_CATEGORIES.find(c => c.slug === slug);
}

/**
 * Get all categories
 */
export function getAllCategories(): BlogCategory[] {
  return BLOG_CATEGORIES;
}

/**
 * Get category color by slug
 */
export function getCategoryColor(slug: string): string {
  const category = getCategoryBySlug(slug);
  return category?.color || '#0a1428';
}

/**
 * Get category icon by slug
 */
export function getCategoryIcon(slug: string): string {
  const category = getCategoryBySlug(slug);
  return category?.icon || '📰';
}

/**
 * Calculate read time in minutes
 */
export function calculateReadTime(content: string): number {
  const wordCount = content.split(/\s+/).length;
  const readTimeMinutes = Math.ceil(wordCount / 200); // 200 words per minute
  return Math.max(1, readTimeMinutes);
}
