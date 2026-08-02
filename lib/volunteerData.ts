/**
 * Volunteer Program Data
 * Opportunities, success stories, and volunteer profiles
 */

export interface VolunteerOpportunity {
  id: string;
  slug: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  type: 'field' | 'remote' | 'hybrid';
  location: string;
  locationAr: string;
  skillsNeeded: string[];
  skillsNeededAr: string[];
  duration: string;
  durationAr: string;
  commitment: string;
  commitmentAr: string;
  impact: string;
  impactAr: string;
  icon: string;
  color: string;
  featured: boolean;
  openPositions: number;
}

export const VOLUNTEER_OPPORTUNITIES: VolunteerOpportunity[] = [
  {
    id: 'field-gaza',
    slug: 'field-coordinator-gaza',
    title: 'Field Coordinator - Gaza Operations',
    titleAr: 'منسق ميداني - عمليات غزة',
    description: 'Lead humanitarian coordination in Gaza. Manage supply distribution, volunteer teams, and local partnerships. Experience in crisis response required.',
    descriptionAr: 'قيادة التنسيق الإنساني في غزة. إدارة توزيع المساعدات وفرق المتطوعين والشراكات المحلية. مطلوب خبرة في الاستجابة للأزمات.',
    type: 'field',
    location: 'Gaza',
    locationAr: 'غزة',
    skillsNeeded: ['Leadership', 'Crisis Management', 'Arabic', 'Project Management'],
    skillsNeededAr: ['القيادة', 'إدارة الأزمات', 'اللغة العربية', 'إدارة المشاريع'],
    duration: '3-6 months',
    durationAr: '3-6 أشهر',
    commitment: '40 hours/week',
    commitmentAr: '40 ساعة/أسبوع',
    impact: 'Support 500K+ beneficiaries',
    impactAr: 'دعم 500K+ مستفيد',
    icon: '🚨',
    color: '#a8312f',
    featured: true,
    openPositions: 5,
  },
  {
    id: 'remote-data',
    slug: 'remote-data-analyst',
    title: 'Remote Data Analyst',
    titleAr: 'محلل بيانات عن بعد',
    description: 'Analyze impact metrics and create reports. Work with our data team to measure program effectiveness globally. Excel and Python skills helpful.',
    descriptionAr: 'تحليل مقاييس الأثر وإنشاء التقارير. العمل مع فريق البيانات لدينا لقياس فعالية البرنامج عالمياً.',
    type: 'remote',
    location: 'Remote',
    locationAr: 'عن بعد',
    skillsNeeded: ['Data Analysis', 'Excel', 'Python', 'Report Writing'],
    skillsNeededAr: ['تحليل البيانات', 'Excel', 'Python', 'كتابة التقارير'],
    duration: 'Flexible',
    durationAr: 'مرن',
    commitment: '10-15 hours/week',
    commitmentAr: '10-15 ساعة/أسبوع',
    impact: 'Measure impact for 2.5M lives',
    impactAr: 'قياس الأثر لـ 2.5 مليون شخص',
    icon: '📊',
    color: '#142850',
    featured: true,
    openPositions: 3,
  },
  {
    id: 'hybrid-education',
    slug: 'education-program-coordinator',
    title: 'Education Program Coordinator',
    titleAr: 'منسق برنامج التعليم',
    description: 'Coordinate education initiatives across 12 countries. Support teacher training, curriculum development, and student sponsorships.',
    descriptionAr: 'تنسيق المبادرات التعليمية عبر 12 دولة. دعم تدريب المعلمين وتطوير المناهج ورعاية الطلاب.',
    type: 'hybrid',
    location: 'Amman + Remote',
    locationAr: 'عمّان + عن بعد',
    skillsNeeded: ['Education', 'Program Management', 'Arabic', 'Communication'],
    skillsNeededAr: ['التعليم', 'إدارة البرامج', 'العربية', 'التواصل'],
    duration: '6-12 months',
    durationAr: '6-12 شهر',
    commitment: '25 hours/week',
    commitmentAr: '25 ساعة/أسبوع',
    impact: 'Help 300K+ students',
    impactAr: 'مساعدة 300K+ طالب',
    icon: '📚',
    color: '#0a1428',
    featured: true,
    openPositions: 2,
  },
  {
    id: 'field-medical',
    slug: 'medical-volunteer-practitioner',
    title: 'Medical Practitioner Volunteer',
    titleAr: 'متطوع طبيب',
    description: 'Provide medical services in field clinics. Mobile health assessments, emergency response, and preventive care in underserved areas.',
    descriptionAr: 'تقديم الخدمات الطبية في العيادات الميدانية. تقييمات الصحة المتنقلة والاستجابة للطوارئ والرعاية الوقائية.',
    type: 'field',
    location: 'Multiple locations',
    locationAr: 'عدة مواقع',
    skillsNeeded: ['Medical License', 'Crisis Response', 'Languages', 'Compassion'],
    skillsNeededAr: ['ترخيص طبي', 'استجابة الأزمات', 'لغات', 'التعاطف'],
    duration: '1-3 months',
    durationAr: '1-3 أشهر',
    commitment: 'Full-time',
    commitmentAr: 'بدوام كامل',
    impact: 'Treat 400K+ patients',
    impactAr: 'علاج 400K+ مريض',
    icon: '⚕️',
    color: '#d4af37',
    featured: false,
    openPositions: 4,
  },
  {
    id: 'remote-translator',
    slug: 'remote-arabic-english-translator',
    title: 'Arabic-English Translator',
    titleAr: 'مترجم عربي-إنجليزي',
    description: 'Translate communications, reports, and educational materials. Help bridge language gaps across our global operations.',
    descriptionAr: 'ترجمة المراسلات والتقارير والمواد التعليمية. ساعد في سد فجوات اللغة عبر عملياتنا العالمية.',
    type: 'remote',
    location: 'Remote',
    locationAr: 'عن بعد',
    skillsNeeded: ['Arabic Fluency', 'English Fluency', 'Translation', 'Cultural Sensitivity'],
    skillsNeededAr: ['إتقان العربية', 'إتقان الإنجليزية', 'الترجمة', 'الحساسية الثقافية'],
    duration: 'Ongoing',
    durationAr: 'مستمر',
    commitment: '5-10 hours/week',
    commitmentAr: '5-10 ساعات/أسبوع',
    impact: 'Enable 30+ country operations',
    impactAr: 'تمكين عمليات 30+ دولة',
    icon: '🌍',
    color: '#6b7280',
    featured: false,
    openPositions: 2,
  },
];

export interface VolunteerSuccessStory {
  id: string;
  slug: string;
  name: string;
  nameAr: string;
  role: string;
  roleAr: string;
  duration: string;
  story: string;
  storyAr: string;
  impact: string;
  impactAr: string;
  location: string;
  icon: string;
}

export const VOLUNTEER_SUCCESS_STORIES: VolunteerSuccessStory[] = [
  {
    id: 'story-1',
    slug: 'ahmed-gaza-coordinator',
    name: 'Ahmed Hassan',
    nameAr: 'أحمد حسن',
    role: 'Field Coordinator, Gaza',
    roleAr: 'منسق ميداني، غزة',
    duration: '8 months',
    story: 'Started as a local volunteer in Gaza, now coordinates 50+ volunteers. Has helped distribute aid to 100K families and training local youth in disaster response.',
    storyAr: 'بدأ كمتطوع محلي في غزة، الآن ينسق 50+ متطوع. ساعد في توزيع المساعدات لـ 100K أسرة وتدريب الشباب المحلي في الاستجابة للكوارث.',
    impact: '100K+ families served',
    impactAr: '100K+ أسرة خدمت',
    location: 'Gaza',
    icon: '🚨',
  },
  {
    id: 'story-2',
    slug: 'sarah-remote-teacher',
    name: 'Sarah Johnson',
    nameAr: 'سارة جونسون',
    role: 'Remote Education Volunteer',
    roleAr: 'متطوع تعليم عن بعد',
    duration: '6 months',
    story: 'Teaches English online to refugee children. Has impacted 50 students across 4 countries. Creates curriculum materials in her spare time.',
    storyAr: 'تعلم اللغة الإنجليزية عبر الإنترنت للأطفال اللاجئين. أثرت على 50 طالباً عبر 4 دول. تنشئ مواد المنهج في وقت فراغها.',
    impact: '50 students taught',
    impactAr: '50 طالب تم تدريسهم',
    location: 'Remote',
    icon: '📚',
  },
  {
    id: 'story-3',
    slug: 'maria-medical-volunteer',
    name: 'Dr. Maria Rodriguez',
    nameAr: 'د. ماريا رودريغيز',
    role: 'Medical Volunteer',
    roleAr: 'متطوع طبي',
    duration: '3 months',
    story: 'Provided medical services in Syrian refugee camps. Conducted 500+ patient assessments and trained local health workers on basic emergency response.',
    storyAr: 'قدمت الخدمات الطبية في مخيمات اللاجئين السوريين. أجرت 500+ تقييم مريض ودربت العاملين الصحيين المحليين على الاستجابة للطوارئ الأساسية.',
    impact: '500+ patients assessed',
    impactAr: '500+ مريض تم تقييمهم',
    location: 'Syria/Turkey',
    icon: '⚕️',
  },
];

export interface VolunteerProfile {
  id: string;
  name: string;
  role: string;
  hoursLogged: number;
  projectsCompleted: number;
  impact: string;
  joinDate: Date;
  badge: string;
}

export const SAMPLE_VOLUNTEER_PROFILES: VolunteerProfile[] = [
  {
    id: 'v1',
    name: 'Ahmed Hassan',
    role: 'Field Coordinator',
    hoursLogged: 480,
    projectsCompleted: 12,
    impact: 'Served 100K+ families',
    joinDate: new Date('2024-01-15'),
    badge: '⭐⭐⭐⭐⭐',
  },
  {
    id: 'v2',
    name: 'Sarah Johnson',
    role: 'Education Volunteer',
    hoursLogged: 120,
    projectsCompleted: 1,
    impact: 'Taught 50 students',
    joinDate: new Date('2024-06-01'),
    badge: '⭐⭐⭐⭐',
  },
];

/**
 * Get opportunity by slug
 */
export function getOpportunityBySlug(slug: string): VolunteerOpportunity | undefined {
  return VOLUNTEER_OPPORTUNITIES.find(o => o.slug === slug);
}

/**
 * Get featured opportunities
 */
export function getFeaturedOpportunities(): VolunteerOpportunity[] {
  return VOLUNTEER_OPPORTUNITIES.filter(o => o.featured);
}

/**
 * Get opportunities by type
 */
export function getOpportunitiesByType(type: string): VolunteerOpportunity[] {
  return VOLUNTEER_OPPORTUNITIES.filter(o => o.type === type);
}

/**
 * Calculate total open positions
 */
export function getTotalOpenPositions(): number {
  return VOLUNTEER_OPPORTUNITIES.reduce((sum, o) => sum + o.openPositions, 0);
}
