'use client';

import { useState } from 'react';
import PartnerLogo from './PartnerLogo';
import type { Locale } from '@/lib/i18n';
import { FEATURED_PARTNERS, getTierById, calculatePartnerROI } from '@/lib/partnerData';

interface PartnerDashboardProps {
  locale: Locale;
}

export default function PartnerDashboard({ locale }: PartnerDashboardProps) {
  const ar = locale === 'ar';
  const [selectedTab, setSelectedTab] = useState<'overview' | 'roi' | 'toolkit' | 'support'>(
    'overview'
  );

  const tabs = [
    { id: 'overview', label: ar ? 'نظرة عامة' : 'Overview', icon: '📊' },
    { id: 'roi', label: ar ? 'حاسبة العائد' : 'ROI Calculator', icon: '💰' },
    { id: 'toolkit', label: ar ? 'مجموعة الأدوات' : 'Toolkit', icon: '🎨' },
    { id: 'support', label: ar ? 'الدعم' : 'Support', icon: '💬' },
  ];

  return (
    <div className="space-y-8">
      {/* Tab Navigation */}
      <div className="border-b border-[#e8e4db]">
        <div className="flex overflow-x-auto gap-1">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id as any)}
              className={`px-6 py-4 font-semibold transition border-b-2 whitespace-nowrap ${
                selectedTab === tab.id
                  ? 'text-[#a89830] border-[#d4af37]'
                  : 'text-[#6b6b6b] border-transparent hover:text-[#0a1428]'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div>
        {selectedTab === 'overview' && <OverviewTab ar={ar} />}
        {selectedTab === 'roi' && <ROITab ar={ar} />}
        {selectedTab === 'toolkit' && <ToolkitTab ar={ar} />}
        {selectedTab === 'support' && <SupportTab ar={ar} />}
      </div>
    </div>
  );
}

interface TabProps {
  ar: boolean;
}

function OverviewTab({ ar }: TabProps) {
  return (
    <div className="space-y-8">
      {/* Partnership Statistics */}
      <div>
        <h3 className="text-2xl font-bold text-[#0a1428] mb-6">
          {ar ? 'إحصائيات الشراكة' : 'Partnership Statistics'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              label: ar ? 'إجمالي الشركاء' : 'Total Partners',
              value: FEATURED_PARTNERS.length,
              icon: '🤝',
            },
            {
              label: ar ? 'تبرعات مجمعة' : 'Total Donations Generated',
              value: '$' + Math.round(FEATURED_PARTNERS.reduce((sum, p) => sum + p.roiData.donationsGenerated, 0) / 1000) + 'K',
              icon: '💰',
            },
            {
              label: ar ? 'متطوعون مجندون' : 'Volunteers Recruited',
              value: FEATURED_PARTNERS.reduce((sum, p) => sum + p.roiData.volunteersRecruited, 0),
              icon: '👥',
            },
            {
              label: ar ? 'الوصول الإجمالي' : 'Total Reach',
              value: Math.round(FEATURED_PARTNERS.reduce((sum, p) => sum + p.roiData.outreach, 0) / 1000) + 'K',
              icon: '🌍',
            },
          ].map((stat, index) => (
            <div key={index} className="bg-[#f9f7f4] rounded-lg p-6 border border-[#e8e4db]">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm text-[#6b6b6b] font-semibold uppercase">
                    {stat.label}
                  </span>
                  <p className="text-3xl font-bold text-[#0a1428] mt-3">{stat.value}</p>
                </div>
                <span className="text-4xl">{stat.icon}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Active Partners */}
      <div>
        <h3 className="text-2xl font-bold text-[#0a1428] mb-6">
          {ar ? 'الشركاء النشطون' : 'Active Partners'}
        </h3>
        <div className="space-y-4">
          {FEATURED_PARTNERS.map(partner => (
            <div
              key={partner.id}
              className="bg-white border border-[#e8e4db] rounded-lg p-6 hover:shadow-elegant transition"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <PartnerLogo
                      src={partner.logo}
                      alt={partner.name}
                      className="w-12 h-12 rounded"
                    />
                    <div>
                      <h4 className="font-bold text-[#0a1428]">{partner.name}</h4>
                      <p className="text-xs text-[#a89830]">
                        {partner.country} • {partner.industry}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-[#6b6b6b]">{partner.description}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="inline-block px-3 py-1 bg-[#d4af37] text-[#0a1428] text-xs font-bold rounded-full capitalize">
                    {partner.tier}
                  </span>
                  <p className="text-xs text-[#a89830] mt-3">
                    📊 ${(partner.roiData.donationsGenerated / 1000).toFixed(0)}K raised
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ROITab({ ar }: TabProps) {
  const [investment, setInvestment] = useState(50000);
  const [timeframe, setTimeframe] = useState<'annual' | 'quarterly' | 'lifetime'>('annual');
  const roi = calculatePartnerROI(investment, timeframe);

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-[#0a1428] to-[#142850] text-white rounded-lg p-12">
        <h3 className="text-2xl font-bold mb-8">
          {ar ? 'حاسبة العائد على الاستثمار' : 'ROI Calculator'}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-3">
                {ar ? 'مبلغ الاستثمار السنوي' : 'Annual Investment Amount'}
              </label>
              <div className="flex gap-2 mb-4">
                <span className="text-2xl font-bold">$</span>
                <input
                  type="number"
                  value={investment}
                  onChange={e => setInvestment(Number(e.target.value))}
                  className="flex-1 px-4 py-3 rounded text-[#0a1428] text-lg font-bold"
                />
              </div>

              {/* Quick Amounts */}
              <div className="grid grid-cols-2 gap-2">
                {[25000, 50000, 100000, 250000].map(amount => (
                  <button
                    key={amount}
                    onClick={() => setInvestment(amount)}
                    className={`py-2 rounded font-semibold text-sm transition ${
                      investment === amount
                        ? 'bg-[#d4af37] text-[#0a1428]'
                        : 'bg-[#142850] hover:bg-[#d4af37] hover:text-[#0a1428]'
                    }`}
                  >
                    ${(amount / 1000).toFixed(0)}K
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-3">
                {ar ? 'الإطار الزمني' : 'Timeframe'}
              </label>
              <select
                value={timeframe}
                onChange={e => setTimeframe(e.target.value as any)}
                className="w-full px-4 py-3 rounded text-[#0a1428]"
              >
                <option value="quarterly">{ar ? 'ربع سنوي' : 'Quarterly'}</option>
                <option value="annual">{ar ? 'سنوي' : 'Annual'}</option>
                <option value="lifetime">{ar ? 'مدى الحياة' : 'Lifetime (3-year)'}</option>
              </select>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-4">
            {roi.projectedDonations && (
              <>
                <div className="bg-[#142850] rounded-lg p-6">
                  <p className="text-sm opacity-75 mb-2">
                    {ar ? 'المتوقع' : 'Projected Donations'} (3:1 multiplier)
                  </p>
                  <p className="text-4xl font-bold text-[#d4af37]">
                    ${(roi.projectedDonations / 1000).toFixed(0)}K
                  </p>
                  <p className="text-xs opacity-75 mt-2">
                    {ar ? 'ROI' : 'ROI'}: <span className="text-[#d4af37]">+{roi.roi?.percentage}%</span>
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#142850] rounded-lg p-4">
                    <p className="text-xs opacity-75 mb-2">{ar ? 'متطوعون' : 'Volunteers'}</p>
                    <p className="text-2xl font-bold text-[#d4af37]">{roi.projectedVolunteers || 0}</p>
                  </div>
                  <div className="bg-[#142850] rounded-lg p-4">
                    <p className="text-xs opacity-75 mb-2">{ar ? 'الوصول' : 'Reach'}</p>
                    <p className="text-2xl font-bold text-[#d4af37]">
                      {roi.projectedReach ? (roi.projectedReach / 1000).toFixed(0) : '0'}K
                    </p>
                  </div>
                </div>

                <div className="bg-[#142850] rounded-lg p-6 border border-[#d4af37]">
                  <p className="text-sm opacity-75 mb-4">{ar ? 'التأثير' : 'Impact'}</p>
                  <div className="space-y-2 text-sm">
                    <p>
                      👨‍👩‍👧‍👦 {roi.impact?.familiesServed.toLocaleString()}
                      {ar ? ' عائلة تُخدم' : ' families served'}
                    </p>
                    <p>
                      📚 {roi.impact?.childrenEducated.toLocaleString()}
                      {ar ? ' طالب تعليم' : ' children educated'}
                    </p>
                    <p>
                      ⚕️ {roi.impact?.patientsAided.toLocaleString()}
                      {ar ? ' مريض مساعد' : ' patients aided'}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ToolkitTab({ ar }: TabProps) {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            name: ar ? 'مجموعة الشعار' : 'Logo Kit',
            icon: '🎨',
            description: ar ? 'الشعارات والمتغيرات بصيغ متعددة' : 'Logos and variants in multiple formats',
          },
          {
            name: ar ? 'قوالب التصميم' : 'Design Templates',
            icon: '📐',
            description: ar ? 'قوالب مخصصة للتسويق والوسائط الاجتماعية' : 'Customizable templates for marketing and social media',
          },
          {
            name: ar ? 'دليل العلامات التجارية' : 'Brand Guidelines',
            icon: '📋',
            description: ar ? 'معايير الألوان والطباعة والاستخدام' : 'Color palette, typography and usage guidelines',
          },
          {
            name: ar ? 'مواد مشاركة الوسائط الاجتماعية' : 'Social Media Assets',
            icon: '📱',
            description: ar ? 'صور وفيديوهات وجداول زمنية محسّنة' : 'Optimized images, videos and posting schedules',
          },
        ].map((item, index) => (
          <a
            key={index}
            href="#"
            className="bg-white border border-[#e8e4db] rounded-lg p-8 hover:shadow-elegant hover:border-[#d4af37] transition"
          >
            <div className="text-5xl mb-4">{item.icon}</div>
            <h4 className="font-bold text-[#0a1428] mb-2 text-lg">{item.name}</h4>
            <p className="text-[#6b6b6b] mb-6">{item.description}</p>
            <span className="text-[#a89830] font-semibold inline-flex items-center gap-2">
              {ar ? 'تحميل' : 'Download'} →
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

function SupportTab({ ar }: TabProps) {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: ar ? 'الدعم عبر البريد الإلكتروني' : 'Email Support',
            icon: '📧',
            description: ar ? 'حصل على إجابات في غضون 24 ساعة' : 'Get answers within 24 hours',
            contact: 'partners@jhco.org.jo',
          },
          {
            title: ar ? 'الدعم الهاتفي' : 'Phone Support',
            icon: '☎️',
            description: ar ? 'اتصل بفريق الشراكات لدينا' : 'Call our partnership team',
            contact: '+962-6-XXXXXXX',
          },
          {
            title: ar ? 'الدعم المباشر' : 'Live Chat',
            icon: '💬',
            description: ar ? 'تحدث مع فريق الدعم الآن' : 'Chat with our support team now',
            contact: ar ? 'اتصل بنا' : 'Start Chat',
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-[#f9f7f4] rounded-lg p-8 border border-[#e8e4db] hover:shadow-elegant transition"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h4 className="font-bold text-[#0a1428] mb-2">{item.title}</h4>
            <p className="text-[#6b6b6b] mb-4">{item.description}</p>
            <a
              href={
                item.icon === '📧'
                  ? `mailto:${item.contact}`
                  : item.icon === '☎️'
                    ? `tel:${item.contact}`
                    : '#'
              }
              className="text-[#a89830] font-semibold hover:text-[#d4af37] transition"
            >
              {item.contact}
            </a>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <div>
        <h3 className="text-2xl font-bold text-[#0a1428] mb-6">
          {ar ? 'الأسئلة الشائعة' : 'FAQ'}
        </h3>
        <div className="space-y-4">
          {[
            {
              q: ar ? 'كيف أبدأ الشراكة مع JHCO؟' : 'How do I start a partnership with JHCO?',
              a: ar
                ? 'استكمل نموذج الطلب وسيتصل بك فريقنا للمناقشة والإعداد.'
                : 'Complete our partnership inquiry form and our team will discuss options with you.',
            },
            {
              q: ar ? 'كيف يتم تتبع ROI؟' : 'How is ROI tracked?',
              a: ar
                ? 'نوفر تقارير شهرية وفصلية مفصلة تتتبع التبرعات والمتطوعين والوصول.'
                : 'We provide detailed monthly and quarterly reports tracking donations, volunteers and reach.',
            },
            {
              q: ar ? 'ماذا يشمل الدعم المخصص؟' : 'What does dedicated support include?',
              a: ar
                ? 'مدير شريك مخصص، اجتماعات استراتيجية، وحل مشاكل الأولويات.'
                : 'A dedicated partner manager, strategic meetings, and priority issue resolution.',
            },
          ].map((item, index) => (
            <div key={index} className="bg-white border border-[#e8e4db] rounded-lg p-6">
              <h5 className="font-bold text-[#0a1428] mb-3">{item.q}</h5>
              <p className="text-[#6b6b6b]">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
