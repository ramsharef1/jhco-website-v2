'use client';

import { useState } from 'react';
import type { Locale } from '@/lib/i18n';

interface ImpactCalculatorProps {
  locale: Locale;
}

export default function ImpactCalculator({ locale }: ImpactCalculatorProps) {
  const ar = locale === 'ar';
  const [amount, setAmount] = useState('25');

  const impacts = [
    { threshold: 5, ar: 'وجبة صحية', en: 'Healthy Meal', icon: '🍽️' },
    { threshold: 25, ar: 'مساعدة أسرة شهر', en: 'Monthly Family Assistance', icon: '👨‍👩‍👧‍👦' },
    { threshold: 50, ar: 'كتب دراسية', en: 'School Books & Supplies', icon: '📚' },
    { threshold: 100, ar: 'فحص طبي شامل', en: 'Medical Examination', icon: '⚕️' },
    { threshold: 250, ar: 'منحة دراسية شهر', en: 'Monthly Scholarship', icon: '🎓' },
    { threshold: 500, ar: 'دعم صحي شامل', en: 'Complete Healthcare Support', icon: '🏥' },
  ];

  const currentAmount = parseFloat(amount) || 0;
  const relevantImpact = impacts.filter(i => currentAmount >= i.threshold).pop();

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-lg border border-[#e8e4db]">
      <h3 className="text-2xl font-bold text-[#0a1428] mb-2">
        {ar ? 'حاسبة التأثير' : 'Impact Calculator'}
      </h3>
      <p className="text-sm text-[#6b6b6b] mb-8">
        {ar ? 'رؤية التأثير الحقيقي لتبرعك' : 'See the real impact of your donation'}
      </p>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-[#0a1428] mb-4">
            {ar ? 'مبلغ التبرع' : 'Donation Amount'}
          </label>
          <div className="flex gap-2 mb-4">
            <span className="text-2xl font-bold">$</span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="flex-1 px-4 py-2 border border-[#e8e4db] rounded-lg focus:border-[#d4af37] focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[5, 25, 50, 100, 250, 500].map((amt) => (
              <button
                key={amt}
                onClick={() => setAmount(amt.toString())}
                className={`py-2 rounded-lg text-xs font-bold transition ${
                  parseFloat(amount) === amt
                    ? 'bg-[#d4af37] text-[#0a1428]'
                    : 'bg-[#f3f4f6] text-[#0a1428] hover:bg-[#e8e4db]'
                }`}
              >
                ${amt}
              </button>
            ))}
          </div>
        </div>

        {relevantImpact && (
          <div className="p-6 bg-gradient-to-r from-[#0a1428] to-[#142850] text-white rounded-lg">
            <div className="text-5xl mb-3">{relevantImpact.icon}</div>
            <p className="text-sm opacity-75 mb-1">
              {ar ? 'تأثير تبرعك' : 'Your donation provides'}
            </p>
            <div className="text-2xl font-bold">
              {ar ? relevantImpact.ar : relevantImpact.en}
            </div>
          </div>
        )}

        <div className="space-y-2 text-sm text-[#6b6b6b]">
          {impacts.map((impact) => (
            <div key={impact.threshold} className="flex items-center gap-2">
              <span className={parseFloat(amount) >= impact.threshold ? '✓' : '○'}>
                {parseFloat(amount) >= impact.threshold ? '✓' : '○'}
              </span>
              <span>${impact.threshold} = {ar ? impact.ar : impact.en}</span>
            </div>
          ))}
        </div>

        <a
          href="#donate"
          className="block w-full py-3 bg-[#a8312f] text-white font-bold text-center rounded-lg hover:bg-[#8b2f2d] transition"
        >
          {ar ? 'تبرع الآن' : 'Donate Now'}
        </a>
      </div>
    </div>
  );
}
