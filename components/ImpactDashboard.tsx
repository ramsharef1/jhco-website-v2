'use client';

import { useState } from 'react';
import { CORE_METRICS, PROGRAM_METRICS, REGIONAL_METRICS, DONATION_IMPACT, getDonationImpact, formatNumber } from '@/lib/metricsData';
import type { Locale } from '@/lib/i18n';

interface MetricCardProps {
  metric: (typeof CORE_METRICS)[0];
  locale: Locale;
}

function MetricCard({ metric, locale }: MetricCardProps) {
  const ar = locale === 'ar';
  const label = ar ? metric.labelAr : metric.label;
  const description = ar ? metric.descriptionAr : metric.description;

  return (
    <div className="bg-white border border-[#e8e4db] rounded-lg p-8 shadow-elegant hover:shadow-premium transition">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <span className="text-sm text-[#a89830] font-semibold uppercase tracking-[1px]">
            {label}
          </span>
          <div className="mt-4">
            <div className="text-4xl font-bold text-[#0a1428]">
              {formatNumber(metric.value)}
              <span className="ml-2 text-[#d4af37]">{metric.unit}</span>
            </div>
            {metric.trend && (
              <span className="inline-block mt-2 text-sm text-green-600 font-semibold">
                ↑ {metric.trend}% this year
              </span>
            )}
          </div>
          <p className="text-sm text-[#6b6b6b] mt-4">{description}</p>
        </div>
        <div className="text-5xl ml-6">{metric.icon}</div>
      </div>
    </div>
  );
}

interface DonationCalculatorProps {
  locale: Locale;
}

function DonationCalculator({ locale }: DonationCalculatorProps) {
  const [amount, setAmount] = useState(25);
  const ar = locale === 'ar';
  const impact = getDonationImpact(amount, locale);

  const quickAmounts = [5, 25, 100, 500, 1000];

  return (
    <div className="bg-gradient-to-br from-[#0a1428] to-[#142850] text-white rounded-lg p-12">
      <h3 className="text-2xl font-bold mb-8">
        {ar ? 'حاسبة أثر التبرع' : 'Donation Impact Calculator'}
      </h3>

      <div className="space-y-8">
        {/* Amount Input */}
        <div>
          <label className="block text-sm font-semibold mb-4">
            {ar ? 'أدخل المبلغ:' : 'Enter Amount:'}
          </label>
          <div className="flex gap-2">
            <span className="text-2xl font-bold">{ar ? 'د.ا' : '$'}</span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="flex-1 px-4 py-3 rounded text-[#0a1428] text-lg font-bold"
            />
          </div>
        </div>

        {/* Quick Amounts */}
        <div>
          <label className="block text-xs font-semibold mb-3 uppercase opacity-75">
            {ar ? 'المبالغ السريعة:' : 'Quick Amounts:'}
          </label>
          <div className="grid grid-cols-5 gap-2">
            {quickAmounts.map(quickAmount => (
              <button
                key={quickAmount}
                onClick={() => setAmount(quickAmount)}
                className={`py-2 rounded font-semibold text-sm transition ${
                  amount === quickAmount
                    ? 'bg-[#d4af37] text-[#0a1428]'
                    : 'bg-[#142850] hover:bg-[#d4af37] hover:text-[#0a1428]'
                }`}
              >
                ${quickAmount}
              </button>
            ))}
          </div>
        </div>

        {/* Impact Display */}
        <div className="bg-[#142850] rounded-lg p-8 border border-[#d4af37]">
          <p className="text-sm opacity-75 mb-2">
            {ar ? 'تبرعك بمبلغ' : 'Your donation of'} ${amount}
          </p>
          <div className="flex items-center gap-4">
            <span className="text-5xl">{impact.icon}</span>
            <div>
              <p className="text-lg font-semibold">{impact.label}</p>
              <p className="text-xs opacity-75 mt-1">
                {ar ? 'سيحدث فرقاً حقيقياً' : 'Makes a real difference'}
              </p>
            </div>
          </div>
        </div>

        {/* Donate Button */}
        <button className="w-full py-4 bg-[#d4af37] text-[#0a1428] font-bold rounded-lg hover:bg-[#e8c547] transition">
          {ar ? 'تبرع الآن' : 'Donate Now'}
        </button>
      </div>
    </div>
  );
}

interface ProgramBreakdownProps {
  locale: Locale;
}

function ProgramBreakdown({ locale }: ProgramBreakdownProps) {
  const ar = locale === 'ar';

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-[#0a1428]">
        {ar ? 'توزيع البرامج' : 'Program Distribution'}
      </h3>
      {PROGRAM_METRICS.map(program => (
        <div key={program.id} className="bg-white border border-[#e8e4db] rounded-lg p-6">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-[#0a1428]">
              {ar ? program.nameAr : program.name}
            </h4>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
              program.status === 'active' ? 'bg-green-100 text-green-700' :
              program.status === 'expanding' ? 'bg-blue-100 text-blue-700' :
              'bg-gray-100 text-gray-700'
            }`}>
              {ar
                ? (program.status === 'active' ? 'نشط' : program.status === 'expanding' ? 'يتوسع' : 'مستقر')
                : (program.status === 'active' ? 'Active' : program.status === 'expanding' ? 'Expanding' : 'Stable')}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="bg-[#f3f4f6] rounded-full h-2 mb-4 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#a89830] to-[#d4af37]"
              style={{ width: `${program.percentage}%` }}
            />
          </div>

          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <span className="text-[#6b6b6b]">
                {ar ? 'المستفيدون:' : 'Beneficiaries:'}
              </span>
              <p className="font-semibold text-[#0a1428]">
                {formatNumber(program.beneficiaries)}
              </p>
            </div>
            <div>
              <span className="text-[#6b6b6b]">
                {ar ? 'الدول:' : 'Countries:'}
              </span>
              <p className="font-semibold text-[#0a1428]">{program.countries}</p>
            </div>
            <div>
              <span className="text-[#6b6b6b]">
                {ar ? 'الميزانية:' : 'Budget:'}
              </span>
              <p className="font-semibold text-[#0a1428]">{program.budget}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

interface RegionalReachProps {
  locale: Locale;
}

function RegionalReach({ locale }: RegionalReachProps) {
  const ar = locale === 'ar';

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-[#0a1428]">
        {ar ? 'الوصول الإقليمي' : 'Regional Reach'}
      </h3>
      {REGIONAL_METRICS.map((region, index) => (
        <div key={index} className="bg-white border border-[#e8e4db] rounded-lg p-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">{region.icon}</span>
            <div className="flex-1">
              <h4 className="font-semibold text-[#0a1428]">
                {ar ? region.regionAr : region.region}
              </h4>
              <p className="text-sm text-[#6b6b6b]">
                {region.countries} {ar ? 'دولة' : 'countries'}
              </p>
            </div>
            <span className="text-2xl font-bold text-[#a89830]">{region.percentage}%</span>
          </div>

          {/* Progress Bar */}
          <div className="bg-[#f3f4f6] rounded-full h-3 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#d4af37] to-[#a89830]"
              style={{ width: `${region.percentage}%` }}
            />
          </div>

          <p className="text-xs text-[#6b6b6b] mt-3">
            {formatNumber(region.beneficiaries)} {ar ? 'مستفيد' : 'beneficiaries'}
          </p>
        </div>
      ))}
    </div>
  );
}

interface ImpactDashboardProps {
  locale: Locale;
}

export default function ImpactDashboard({ locale }: ImpactDashboardProps) {
  const ar = locale === 'ar';

  return (
    <div className="space-y-16">
      {/* Core Metrics Grid */}
      <section>
        <h2 className="text-3xl font-bold text-[#0a1428] mb-8">
          {ar ? 'إحصائيات التأثير الرئيسية' : 'Key Impact Metrics'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_METRICS.map(metric => (
            <MetricCard key={metric.id} metric={metric} locale={locale} />
          ))}
        </div>
      </section>

      {/* Donation Calculator */}
      <section>
        <DonationCalculator locale={locale} />
      </section>

      {/* Programs & Regions */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ProgramBreakdown locale={locale} />
        <RegionalReach locale={locale} />
      </section>
    </div>
  );
}
