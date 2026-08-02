'use client';

import { useState, useEffect } from 'react';

const tickers = [
  { label: 'Families Helped Today', value: 342, icon: '👨‍👩‍👧‍👦', increment: 8 },
  { label: 'Children in School', value: 5847, icon: '📚', increment: 12 },
  { label: 'Meals Distributed', value: 12584, icon: '🍽️', increment: 45 },
  { label: 'Medical Consultations', value: 892, icon: '⚕️', increment: 3 },
];

export default function LiveImpactTicker() {
  const [displayValues, setDisplayValues] = useState(tickers.map(t => t.value));

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayValues(prev =>
        prev.map((val, idx) => val + tickers[idx].increment)
      );
    }, 4000); // Update every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-navy-deep to-navy-royal py-12">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-gold-primary text-sm uppercase tracking-wider mb-8 font-semibold">
          ⚡ Live Impact Metrics
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {tickers.map((ticker, idx) => (
            <div key={idx} className="text-center text-white">
              <div className="text-4xl mb-3">{ticker.icon}</div>
              <p className="text-3xl md:text-4xl font-marcellus text-gold-primary mb-1 font-bold">
                {displayValues[idx].toLocaleString()}
              </p>
              <p className="text-sm text-gray-300">{ticker.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
