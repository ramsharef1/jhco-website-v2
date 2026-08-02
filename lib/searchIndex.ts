import { programs, news } from "./mockData";

export interface SearchItem {
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  href: string;
}

// Static pages not derived from mockData — titles/descriptions kept short
// and matched to each page's actual Hero content.
const staticPages: SearchItem[] = [
  { title: "About JHCO", titleAr: "عن الهيئة", description: "Who we are and what we do", descriptionAr: "من نحن وماذا نفعل", href: "/about" },
  { title: "Mission & Vision", titleAr: "رسالتنا ورؤيتنا", description: "Our mission, vision, and strategic goals", descriptionAr: "رسالتنا ورؤيتنا وأهدافنا الاستراتيجية", href: "/about/mission" },
  { title: "Our Values", titleAr: "قيمنا", description: "The principles that govern our work", descriptionAr: "المبادئ التي تحكم عملنا", href: "/about/values" },
  { title: "Our Journey", titleAr: "مسيرتنا", description: "Our history since 1985", descriptionAr: "مسيرتنا منذ عام 1985", href: "/about/history" },
  { title: "Leadership", titleAr: "قيادتنا", description: "Board of Trustees and Secretary Generals", descriptionAr: "مجلس الأمناء والأمناء العامون", href: "/about/team" },
  { title: "Royal Patronage", titleAr: "الرعاية الملكية", description: "Our Hashemite lineage and patronage", descriptionAr: "امتدادنا الهاشمي والرعاية الملكية", href: "/royal-patronage" },
  { title: "Our Programs", titleAr: "برامجنا", description: "All humanitarian programs", descriptionAr: "جميع برامجنا الإنسانية", href: "/programs" },
  { title: "Where We Work", titleAr: "أين نعمل", description: "Our presence in 36 countries", descriptionAr: "حضورنا في 36 دولة", href: "/where-we-work" },
  { title: "News", titleAr: "الأخبار", description: "Latest updates and headlines", descriptionAr: "آخر المستجدات والأخبار", href: "/news" },
  { title: "Contact Us", titleAr: "اتصل بنا", description: "Reach our team", descriptionAr: "تواصلوا مع فريقنا", href: "/contact" },
  { title: "Make a Donation", titleAr: "تبرّع", description: "Support our humanitarian work", descriptionAr: "ادعموا عملنا الإنساني", href: "/get-involved/donate" },
  { title: "Volunteer With Us", titleAr: "تطوّع معنا", description: "Join our volunteer network", descriptionAr: "انضموا إلى شبكة متطوعينا", href: "/get-involved/volunteer" },
  { title: "Partnerships", titleAr: "الشراكات", description: "Our local and international partners", descriptionAr: "شركاؤنا المحليون والدوليون", href: "/get-involved/partner" },
  { title: "Transparency", titleAr: "الشفافية", description: "Our commitment to transparency", descriptionAr: "التزامنا بالشفافية", href: "/transparency" },
  { title: "Measuring Impact", titleAr: "قياس الأثر", description: "Official statistics and reports", descriptionAr: "الإحصائيات والتقارير الرسمية", href: "/transparency/impact" },
  { title: "Financial Disclosure", titleAr: "الإفصاح المالي", description: "How we manage resources", descriptionAr: "كيف ندير الموارد", href: "/transparency/financials" },
  { title: "Governance & Accountability", titleAr: "الحوكمة والمساءلة", description: "Our institutional framework", descriptionAr: "إطارنا المؤسسي", href: "/accountability" },
  { title: "FAQ", titleAr: "الأسئلة الشائعة", description: "Answers to common questions", descriptionAr: "إجابات على الأسئلة الشائعة", href: "/faq" },
  // New Resources section
  { title: "Donor Guide", titleAr: "دليل المانح", description: "Complete guide for donors", descriptionAr: "دليل شامل للمانحين", href: "/resources/donor-guide" },
  { title: "Volunteer Guide", titleAr: "دليل المتطوع", description: "How to become a volunteer", descriptionAr: "كيف تصبح متطوعاً", href: "/resources/volunteer-guide" },
  { title: "Humanitarian Principles", titleAr: "المبادئ الإنسانية", description: "Our core humanitarian values", descriptionAr: "قيمنا الإنسانية الأساسية", href: "/resources/humanitarian-principles" },
  { title: "Partnership Opportunities", titleAr: "فرص الشراكة", description: "How to partner with JHCO", descriptionAr: "كيفية الشراكة مع الهيئة", href: "/resources/partnership-opportunities" },
  { title: "Emergency Preparedness", titleAr: "التأهب للطوارئ", description: "Crisis response and readiness", descriptionAr: "الاستعداد والاستجابة للأزمات", href: "/resources/emergency-preparedness" },
  // New About section
  { title: "Leadership Team", titleAr: "فريق القيادة", description: "Our organizational leadership", descriptionAr: "قيادتنا التنظيمية", href: "/about/leadership-team" },
  { title: "Strategic Vision", titleAr: "رؤيتنا الاستراتيجية", description: "Our 5-year strategic plan", descriptionAr: "خطتنا الاستراتيجية لمدة 5 سنوات", href: "/about/strategic-vision" },
  { title: "Annual Report", titleAr: "التقرير السنوي", description: "Yearly performance and impact", descriptionAr: "الأداء والأثر السنوي", href: "/about/annual-report" },
  { title: "Organizational History", titleAr: "التاريخ التنظيمي", description: "Our journey from 1985 to today", descriptionAr: "رحلتنا من 1985 إلى الآن", href: "/about/our-history" },
  // New Support section
  { title: "Financial Reports", titleAr: "التقارير المالية", description: "Audited financial statements", descriptionAr: "البيانات المالية المدققة", href: "/support/financial-reports" },
  { title: "Governance Structure", titleAr: "هيكل الحوكمة", description: "Board and management structure", descriptionAr: "هيكل المجلس والإدارة", href: "/support/governance" },
  { title: "Program Efficiency", titleAr: "كفاءة البرنامج", description: "Performance metrics and ROI", descriptionAr: "مقاييس الأداء والعائد", href: "/support/program-efficiency" },
  { title: "Awards & Recognition", titleAr: "الجوائز والتكريمات", description: "Our awards and certifications", descriptionAr: "جوائزنا وشهاداتنا", href: "/support/awards-recognition" },
  { title: "Media Coverage", titleAr: "التغطية الإعلامية", description: "Press mentions and features", descriptionAr: "الذكرات والمقالات الصحفية", href: "/support/media-coverage" },
];

export function getSearchIndex(): SearchItem[] {
  const programItems: SearchItem[] = programs.map((p) => ({
    title: p.name,
    titleAr: p.nameAr,
    description: p.description,
    descriptionAr: p.descriptionAr,
    href: `/programs/${p.slug}`,
  }));

  const newsItems: SearchItem[] = news.map((n) => ({
    title: n.title,
    titleAr: n.titleAr,
    description: n.excerpt,
    descriptionAr: n.excerptAr,
    href: `/news/${n.slug}`,
  }));

  return [...staticPages, ...programItems, ...newsItems];
}
