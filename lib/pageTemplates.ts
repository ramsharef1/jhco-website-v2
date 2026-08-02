/**
 * Page Template Definitions
 * Reusable templates for different content types
 */

export interface PageTemplate {
  type: 'landing' | 'article' | 'archive' | 'resource' | 'form';
  sections: string[];
  layout: 'standard' | 'featured' | 'split' | 'card-grid';
}

export const LANDING_PAGE_TEMPLATE: PageTemplate = {
  type: 'landing',
  layout: 'featured',
  sections: [
    'hero',
    'overview',
    'statistics',
    'key-programs',
    'impact-highlights',
    'testimonials',
    'call-to-action',
  ],
};

export const ARTICLE_PAGE_TEMPLATE: PageTemplate = {
  type: 'article',
  layout: 'standard',
  sections: [
    'hero',
    'article-header',
    'table-of-contents',
    'content-sections',
    'related-articles',
    'sharing',
    'call-to-action',
  ],
};

export const ARCHIVE_PAGE_TEMPLATE: PageTemplate = {
  type: 'archive',
  layout: 'card-grid',
  sections: [
    'hero',
    'filters-search',
    'items-grid',
    'pagination',
    'related-categories',
  ],
};

export const FORM_PAGE_TEMPLATE: PageTemplate = {
  type: 'form',
  layout: 'split',
  sections: [
    'hero',
    'form-introduction',
    'form-fields',
    'submission-cta',
    'faq',
  ],
};

// ============ LANDING PAGE SECTIONS ============

export const HERO_SECTION = {
  ar: {
    title: 'عنوان الصفحة',
    subtitle: 'وصف فرعي قصير يوضح الغرض من هذه الصفحة والقيمة التي تقدمها.',
    backgroundImage: '/placeholder-hero-2560x720.jpg',
    cta: {
      text: 'ابدأ الآن',
      link: '#overview',
    },
  },
  en: {
    title: 'Page Title',
    subtitle: 'Brief subtitle explaining the purpose of this page and the value it provides.',
    backgroundImage: '/placeholder-hero-2560x720.jpg',
    cta: {
      text: 'Get Started',
      link: '#overview',
    },
  },
};

export const OVERVIEW_SECTION = {
  ar: {
    title: 'نظرة عامة',
    content: 'هذا هو قسم النظرة العامة. استبدل هذا النص بوصف تفصيلي لموضوع الصفحة. يمكنك إضافة محتوى غني بالمعلومات هنا.',
    image: '/placeholder-image-800x600.jpg',
  },
  en: {
    title: 'Overview',
    content: 'This is the overview section. Replace this text with detailed description of the page topic. You can add rich content here.',
    image: '/placeholder-image-800x600.jpg',
  },
};

export const STATISTICS_SECTION = {
  ar: {
    title: 'إحصائيات مهمة',
    stats: [
      { label: 'عنصر إحصائي', value: '5000+', icon: '📊' },
      { label: 'عنصر إحصائي', value: '30+', icon: '🌍' },
      { label: 'عنصر إحصائي', value: '100K+', icon: '👥' },
      { label: 'عنصر إحصائي', value: '2.5M+', icon: '💚' },
    ],
  },
  en: {
    title: 'Key Statistics',
    stats: [
      { label: 'Statistic Label', value: '5000+', icon: '📊' },
      { label: 'Statistic Label', value: '30+', icon: '🌍' },
      { label: 'Statistic Label', value: '100K+', icon: '👥' },
      { label: 'Statistic Label', value: '2.5M+', icon: '💚' },
    ],
  },
};

export const KEY_PROGRAMS_SECTION = {
  ar: {
    title: 'برامجنا الرئيسية',
    description: 'اكتشف المبادرات والبرامج الرئيسية التي تدعم عملنا الإنساني.',
    programs: [
      {
        title: 'عنوان البرنامج 1',
        icon: '🎯',
        description: 'وصف موجز للبرنامج الأول والفوائد الرئيسية.',
        link: '#',
      },
      {
        title: 'عنوان البرنامج 2',
        icon: '📚',
        description: 'وصف موجز للبرنامج الثاني والفوائد الرئيسية.',
        link: '#',
      },
      {
        title: 'عنوان البرنامج 3',
        icon: '⚕️',
        description: 'وصف موجز للبرنامج الثالث والفوائد الرئيسية.',
        link: '#',
      },
    ],
  },
  en: {
    title: 'Our Key Programs',
    description: 'Discover the main initiatives and programs supporting our humanitarian work.',
    programs: [
      {
        title: 'Program Title 1',
        icon: '🎯',
        description: 'Brief description of the first program and key benefits.',
        link: '#',
      },
      {
        title: 'Program Title 2',
        icon: '📚',
        description: 'Brief description of the second program and key benefits.',
        link: '#',
      },
      {
        title: 'Program Title 3',
        icon: '⚕️',
        description: 'Brief description of the third program and key benefits.',
        link: '#',
      },
    ],
  },
};

export const TESTIMONIALS_SECTION = {
  ar: {
    title: 'شهادات المستفيدين',
    testimonials: [
      {
        quote: 'قول مقتبس من أحد المستفيدين يوضح التأثير الإيجابي للبرنامج.',
        author: 'اسم المستفيد',
        role: 'الدور أو الموقع',
        image: '/placeholder-avatar-150x150.jpg',
      },
      {
        quote: 'قول مقتبس آخر يعكس تجربة حقيقية مع البرنامج.',
        author: 'اسم المستفيد',
        role: 'الدور أو الموقع',
        image: '/placeholder-avatar-150x150.jpg',
      },
      {
        quote: 'قول ثالث يشهد على فعالية وتأثير المبادرة.',
        author: 'اسم المستفيد',
        role: 'الدور أو الموقع',
        image: '/placeholder-avatar-150x150.jpg',
      },
    ],
  },
  en: {
    title: 'Beneficiary Testimonials',
    testimonials: [
      {
        quote: 'A meaningful quote from a beneficiary that illustrates the positive impact of the program.',
        author: 'Beneficiary Name',
        role: 'Role or Location',
        image: '/placeholder-avatar-150x150.jpg',
      },
      {
        quote: 'Another quote reflecting a real experience with the program.',
        author: 'Beneficiary Name',
        role: 'Role or Location',
        image: '/placeholder-avatar-150x150.jpg',
      },
      {
        quote: 'A third quote testifying to the effectiveness and impact of the initiative.',
        author: 'Beneficiary Name',
        role: 'Role or Location',
        image: '/placeholder-avatar-150x150.jpg',
      },
    ],
  },
};

// ============ ARTICLE PAGE SECTIONS ============

export const ARTICLE_CONTENT_SECTION = {
  ar: {
    title: 'عنوان المقالة',
    author: 'اسم الكاتب',
    date: '2024-01-15',
    readTime: '8 دقائق',
    featuredImage: '/placeholder-article-1200x600.jpg',
    sections: [
      {
        heading: 'القسم الأول',
        content: 'محتوى المقالة يبدأ هنا مع فقرات غنية بالمعلومات والبيانات ذات الصلة.',
      },
      {
        heading: 'القسم الثاني',
        content: 'المزيد من محتوى المقالة مع تفاصيل وأمثلة توضيحية.',
        image: '/placeholder-image-800x600.jpg',
      },
    ],
  },
  en: {
    title: 'Article Title',
    author: 'Author Name',
    date: '2024-01-15',
    readTime: '8 minutes',
    featuredImage: '/placeholder-article-1200x600.jpg',
    sections: [
      {
        heading: 'First Section',
        content: 'Article content starts here with information-rich paragraphs and relevant data.',
      },
      {
        heading: 'Second Section',
        content: 'More article content with details and illustrative examples.',
        image: '/placeholder-image-800x600.jpg',
      },
    ],
  },
};

// ============ FORM PAGE SECTIONS ============

export const FORM_TEMPLATE = {
  ar: {
    title: 'عنوان النموذج',
    introduction: 'شرح موجز حول ما يفعله النموذج ولماذا نحتاجه.',
    fields: [
      { label: 'الاسم الكامل', type: 'text', required: true },
      { label: 'البريد الإلكتروني', type: 'email', required: true },
      { label: 'رقم الهاتف', type: 'tel', required: false },
      { label: 'الرسالة', type: 'textarea', required: true },
    ],
    submitButton: 'إرسال',
    successMessage: 'شكراً لك على رسالتك. سنتواصل معك قريباً.',
  },
  en: {
    title: 'Form Title',
    introduction: 'Brief explanation of what the form does and why we need it.',
    fields: [
      { label: 'Full Name', type: 'text', required: true },
      { label: 'Email Address', type: 'email', required: true },
      { label: 'Phone Number', type: 'tel', required: false },
      { label: 'Message', type: 'textarea', required: true },
    ],
    submitButton: 'Submit',
    successMessage: 'Thank you for your message. We will be in touch soon.',
  },
};

// ============ PLACEHOLDER UTILITIES ============

export const PLACEHOLDER_IMAGES = {
  hero: '/placeholder-hero-2560x720.jpg',
  featured: '/placeholder-featured-1200x800.jpg',
  article: '/placeholder-article-1200x600.jpg',
  card: '/placeholder-card-400x300.jpg',
  avatar: '/placeholder-avatar-150x150.jpg',
  icon: '/placeholder-icon-100x100.svg',
};

export const COLORS = {
  primary: '#0a1428',
  accent: '#d4af37',
  secondary: '#a89830',
  light: '#f9f7f4',
  text: '#3d3d3d',
  textLight: '#6b6b6b',
};
