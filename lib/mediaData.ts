/**
 * Media Library System
 * Photos, videos, press kits, and downloadable assets
 */

export interface MediaItem {
  id: string;
  type: 'photo' | 'video';
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  thumbnail: string;
  url: string;
  category: string;
  tags: string[];
  tagsAr: string[];
  date: string;
  featured: boolean;
  downloadable: boolean;
  credits?: string;
}

export interface MediaCategory {
  id: string;
  name: string;
  nameAr: string;
  icon: string;
  description: string;
  descriptionAr: string;
  itemCount: number;
  featured: boolean;
}

export interface PressKit {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  items: Array<{
    name: string;
    nameAr: string;
    url: string;
    format: string;
    size: string;
  }>;
  updated: string;
}

// Media Categories
export const MEDIA_CATEGORIES: MediaCategory[] = [
  {
    id: 'impact',
    name: 'Impact Stories',
    nameAr: 'قصص التأثير',
    icon: '📸',
    description: 'Real stories from our humanitarian work',
    descriptionAr: 'قصص حقيقية من عملنا الإنساني',
    itemCount: 24,
    featured: true,
  },
  {
    id: 'programs',
    name: 'Program Photos',
    nameAr: 'صور البرامج',
    icon: '🎯',
    description: 'Visual documentation of our programs in action',
    descriptionAr: 'توثيق بصري لبرامجنا في العمل',
    itemCount: 18,
    featured: true,
  },
  {
    id: 'events',
    name: 'Events & Fundraising',
    nameAr: 'الأحداث والجمع',
    icon: '🎉',
    description: 'Coverage from our fundraising events and campaigns',
    descriptionAr: 'غطاء من أحداثنا الخيرية والحملات',
    itemCount: 15,
    featured: false,
  },
  {
    id: 'education',
    name: 'Education Initiative',
    nameAr: 'مبادرة التعليم',
    icon: '📚',
    description: 'Students, schools, and learning programs',
    descriptionAr: 'الطلاب والمدارس وبرامج التعلم',
    itemCount: 12,
    featured: false,
  },
  {
    id: 'medical',
    name: 'Medical & Health',
    nameAr: 'الطب والصحة',
    icon: '⚕️',
    description: 'Healthcare delivery and medical missions',
    descriptionAr: 'توصيل الرعاية الصحية والبعثات الطبية',
    itemCount: 9,
    featured: false,
  },
];

// Sample Media Library (in production, would be CMS-driven)
export const MEDIA_LIBRARY: MediaItem[] = [
  // Impact Stories
  {
    id: 'photo-1',
    type: 'photo',
    title: 'Gaza Family Receives Aid',
    titleAr: 'عائلة غزية تتلقى مساعدات',
    description: 'A family in Gaza receives emergency food aid during our winter relief campaign',
    descriptionAr: 'عائلة في غزة تتلقى مساعدات غذائية طارئة أثناء حملة الإغاثة الشتوية لدينا',
    thumbnail: '/media/thumb-gaza-family.jpg',
    url: '/media/full-gaza-family.jpg',
    category: 'impact',
    tags: ['Gaza', 'Emergency Relief', 'Family'],
    tagsAr: ['غزة', 'الإغاثة الطارئة', 'عائلة'],
    date: '2024-01-15',
    featured: true,
    downloadable: true,
    credits: 'Photo by JHCO Media Team',
  },
  {
    id: 'photo-2',
    type: 'photo',
    title: 'Healthcare Mobile Clinic',
    titleAr: 'عيادة صحية متنقلة',
    description: 'Dr. Hassan provides medical services at our mobile clinic in rural areas',
    descriptionAr: 'يقدم الدكتور حسن الخدمات الطبية في عيادتنا المتنقلة في المناطق الريفية',
    thumbnail: '/media/thumb-mobile-clinic.jpg',
    url: '/media/full-mobile-clinic.jpg',
    category: 'medical',
    tags: ['Healthcare', 'Mobile Clinic', 'Medical'],
    tagsAr: ['الرعاية الصحية', 'عيادة متنقلة', 'طبي'],
    date: '2024-01-10',
    featured: true,
    downloadable: true,
    credits: 'Photo by Dr. Sarah Ahmed',
  },
  {
    id: 'photo-3',
    type: 'photo',
    title: 'School Sponsorship Program',
    titleAr: 'برنامج رعاية المدارس',
    description: 'Students benefiting from our education sponsorship program',
    descriptionAr: 'الطلاب المستفيدون من برنامج رعاية التعليم لدينا',
    thumbnail: '/media/thumb-school.jpg',
    url: '/media/full-school.jpg',
    category: 'education',
    tags: ['Education', 'Students', 'School'],
    tagsAr: ['التعليم', 'الطلاب', 'مدرسة'],
    date: '2024-01-05',
    featured: true,
    downloadable: true,
    credits: 'Photo by Education Team',
  },
  {
    id: 'video-1',
    type: 'video',
    title: 'Impact Documentary 2024',
    titleAr: 'فيلم وثائقي التأثير 2024',
    description: 'Annual impact documentary showcasing our humanitarian work across 30 countries',
    descriptionAr: 'الفيلم الوثائقي السنوي للتأثير يعرض عملنا الإنساني عبر 30 دولة',
    thumbnail: '/media/thumb-documentary.jpg',
    url: 'https://youtube.com/embed/XXXXXXX',
    category: 'impact',
    tags: ['Documentary', 'Impact', 'Annual'],
    tagsAr: ['فيلم وثائقي', 'تأثير', 'سنوي'],
    date: '2024-01-20',
    featured: true,
    downloadable: false,
  },
  {
    id: 'photo-4',
    type: 'photo',
    title: 'Volunteer Team in Yemen',
    titleAr: 'فريق المتطوعين في اليمن',
    description: 'Our volunteer team delivering water supplies to a rural village',
    descriptionAr: 'فريق المتطوعين لدينا يسلم إمدادات المياه إلى قرية ريفية',
    thumbnail: '/media/thumb-yemen.jpg',
    url: '/media/full-yemen.jpg',
    category: 'programs',
    tags: ['Yemen', 'Volunteers', 'Water Supply'],
    tagsAr: ['اليمن', 'متطوعون', 'إمدادات المياه'],
    date: '2024-01-12',
    featured: false,
    downloadable: true,
    credits: 'Photo by Field Team',
  },
  {
    id: 'photo-5',
    type: 'photo',
    title: 'Annual Fundraiser Gala',
    titleAr: 'حفل الجمع السنوي',
    description: 'Supporters gather at our annual fundraiser to support our humanitarian mission',
    descriptionAr: 'يجتمع الداعمون في حفل جمع الأموال السنوي لدينا لدعم مهمتنا الإنسانية',
    thumbnail: '/media/thumb-gala.jpg',
    url: '/media/full-gala.jpg',
    category: 'events',
    tags: ['Event', 'Fundraiser', 'Annual'],
    tagsAr: ['حدث', 'جمع الأموال', 'سنوي'],
    date: '2023-12-15',
    featured: false,
    downloadable: true,
    credits: 'Photo by Event Photography',
  },
  {
    id: 'photo-6',
    type: 'photo',
    title: 'Emergency Response Team',
    titleAr: 'فريق الاستجابة الطارئة',
    description: 'JHCO emergency response team mobilizes for crisis support',
    descriptionAr: 'فريق الاستجابة الطارئة في JHCO يتحرك لتقديم دعم الأزمات',
    thumbnail: '/media/thumb-emergency.jpg',
    url: '/media/full-emergency.jpg',
    category: 'programs',
    tags: ['Emergency', 'Crisis', 'Response'],
    tagsAr: ['طارئ', 'أزمة', 'استجابة'],
    date: '2024-01-18',
    featured: false,
    downloadable: true,
  },
];

// Press Kits
export const PRESS_KITS: PressKit[] = [
  {
    id: 'kit-2024',
    title: 'JHCO Press Kit 2024',
    titleAr: 'مجموعة الصحافة JHCO 2024',
    description: 'Complete press kit with logos, facts, and media assets',
    descriptionAr: 'مجموعة صحافية كاملة مع الشعارات والحقائق والأصول الإعلامية',
    items: [
      {
        name: 'JHCO Logo - Full Color',
        nameAr: 'شعار JHCO - ألوان كاملة',
        url: '/press/logo-full-color.zip',
        format: 'ZIP',
        size: '2.4 MB',
      },
      {
        name: 'JHCO Logo - Black & White',
        nameAr: 'شعار JHCO - أسود وأبيض',
        url: '/press/logo-bw.zip',
        format: 'ZIP',
        size: '1.8 MB',
      },
      {
        name: 'Organization Fact Sheet',
        nameAr: 'ورقة حقائق المنظمة',
        url: '/press/fact-sheet.pdf',
        format: 'PDF',
        size: '1.2 MB',
      },
      {
        name: 'Executive Biography',
        nameAr: 'السيرة الذاتية للمدير',
        url: '/press/executive-bio.pdf',
        format: 'PDF',
        size: '0.8 MB',
      },
      {
        name: 'Program Overview',
        nameAr: 'نظرة عامة على البرنامج',
        url: '/press/programs-overview.pdf',
        format: 'PDF',
        size: '2.1 MB',
      },
      {
        name: 'Annual Impact Report 2023',
        nameAr: 'تقرير التأثير السنوي 2023',
        url: '/press/impact-report-2023.pdf',
        format: 'PDF',
        size: '5.3 MB',
      },
    ],
    updated: '2024-01-15',
  },
];

/**
 * Get featured media items
 */
export function getFeaturedMedia(limit: number = 6): MediaItem[] {
  return MEDIA_LIBRARY.filter(item => item.featured).slice(0, limit);
}

/**
 * Get media by category
 */
export function getMediaByCategory(categoryId: string): MediaItem[] {
  return MEDIA_LIBRARY.filter(item => item.category === categoryId);
}

/**
 * Get media by type
 */
export function getMediaByType(type: 'photo' | 'video'): MediaItem[] {
  return MEDIA_LIBRARY.filter(item => item.type === type);
}

/**
 * Search media by tag
 */
export function getMediaByTag(tag: string): MediaItem[] {
  return MEDIA_LIBRARY.filter(item => item.tags.includes(tag) || item.tagsAr.includes(tag));
}

/**
 * Get category by ID
 */
export function getCategoryById(categoryId: string): MediaCategory | undefined {
  return MEDIA_CATEGORIES.find(cat => cat.id === categoryId);
}
