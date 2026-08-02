'use client';

import { useState } from 'react';
import type { Locale } from '@/lib/i18n';

interface ZakatCalculatorProps {
  locale: Locale;
}

export default function ZakatCalculator({ locale }: ZakatCalculatorProps) {
  const ar = locale === 'ar';
  const [wealth, setWealth] = useState('0');
  const zakatRate = 0.025; // 2.5%
  const zakatAmount = parseFloat(wealth) * zakatRate;

  return (
    <div className="max-w-md mx-auto p-8 bg-gradient-to-br from-[#f9f7f4] to-[#f3f4f6] rounded-lg border border-[#d4af37]">
      <h3 className="text-2xl font-bold text-[#0a1428] mb-2">
        {ar ? 'حاسبة الزكاة' : 'Zakat Calculator'}
      </h3>
      <p className="text-sm text-[#6b6b6b] mb-8">
        {ar ? 'احسب الزكاة المستحقة على ثروتك' : 'Calculate your obligatory Zakat'}
      </p>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-[#0a1428] mb-2">
            {ar ? 'إجمالي الثروة' : 'Total Wealth'}
          </label>
          <div className="flex gap-2">
            <span className="text-2xl font-bold">$</span>
            <input
              type="number"
              value={wealth}
              onChange={(e) => setWealth(e.target.value)}
              className="flex-1 px-4 py-2 border border-[#e8e4db] rounded-lg focus:border-[#d4af37] focus:outline-none"
            />
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg border-2 border-[#d4af37]">
          <p className="text-sm text-[#6b6b6b] mb-2">
            {ar ? 'الزكاة المستحقة (2.5%)' : 'Zakat Due (2.5%)'}
          </p>
          <div className="text-4xl font-bold text-[#a89830]">
            ${zakatAmount.toFixed(2)}
          </div>
        </div>

        <div className="text-xs text-[#6b6b6b] space-y-2">
          <p>✓ {ar ? 'تحسب على الثروة النقية بعد الالتزامات' : 'Calculated on net wealth after liabilities'}</p>
          <p>✓ {ar ? 'يجب أن تكون الثروة بحد أدنى من النصاب' : 'Wealth must exceed the Nisab threshold'}</p>
          <p>✓ {ar ? 'الزكاة فريضة إسلامية مهمة' : 'Zakat is an obligatory Islamic pillar'}</p>
        </div>

        <a
          href="#donate"
          className="block w-full py-3 bg-[#a8312f] text-white font-bold text-center rounded-lg hover:bg-[#8b2f2d] transition"
        >
          {ar ? 'تبرع بالزكاة' : 'Donate Zakat'}
        </a>
      </div>
    </div>
  );
}
