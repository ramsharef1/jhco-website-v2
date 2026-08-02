'use client';

import { useState } from 'react';

const metrics = [
  {
    amount: 5,
    impacts: [
      '1 meal for a family of 5',
      'Essential medical checkup',
      'School supply set',
    ],
    icon: '🎯',
  },
  {
    amount: 25,
    impacts: [
      '1 week of meals for 1 family',
      'Full medical consultation + medication',
      'Monthly school supplies',
    ],
    icon: '📈',
  },
  {
    amount: 50,
    impacts: [
      '1 month of food for 1 family',
      'Mobile clinic visit + treatment',
      '1 year of school supplies for 1 child',
    ],
    icon: '⭐',
  },
  {
    amount: 100,
    impacts: [
      '2 months of food for 2 families',
      '100 medical consultations',
      '2 students with year-long school support',
    ],
    icon: '🏆',
  },
  {
    amount: 250,
    impacts: [
      '6 months of food for 3 families',
      'Mobile clinic operations for 1 week',
      'Full semester education for 5 students',
    ],
    icon: '💎',
  },
  {
    amount: 500,
    impacts: [
      '1 year of food security for 5 families',
      'Mobile clinic for entire month',
      'Full year education for 10 students',
    ],
    icon: '👑',
  },
];

export default function SuccessMetrics() {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const selected = metrics.find(m => m.amount === selectedAmount);

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-marcellus text-navy-deep mb-4">Your Donation's Impact</h2>
          <p className="text-xl text-gray-600">See exactly how different donation amounts change lives</p>
        </div>

        {/* Amount Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {metrics.map((metric) => (
            <button
              key={metric.amount}
              onClick={() => setSelectedAmount(metric.amount)}
              className={`px-6 py-3 rounded-full font-bold transition text-lg ${
                selectedAmount === metric.amount
                  ? 'bg-gold-primary text-navy-deep'
                  : 'bg-cream-luxury text-navy-deep border-2 border-gold-primary/30 hover:border-gold-primary'
              }`}
            >
              ${metric.amount}
            </button>
          ))}
        </div>

        {/* Display Selected */}
        {selected && (
          <div className="bg-gradient-to-br from-navy-deep to-navy-royal text-white rounded-lg p-12 mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-lg text-gold-primary uppercase tracking-wider mb-2">Your Donation</p>
                <p className="text-6xl font-marcellus">${selected.amount}</p>
              </div>
              <div className="text-8xl">{selected.icon}</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {selected.impacts.map((impact, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm border border-gold-primary/30 rounded-lg p-6">
                  <div className="text-4xl mb-3">✓</div>
                  <p className="text-lg font-semibold">{impact}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Comparison Table */}
        <div className="mb-12">
          <h3 className="text-2xl font-marcellus text-navy-deep mb-6">Complete Impact Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-navy-deep text-white">
                  <th className="px-6 py-4 text-left">Donation Amount</th>
                  <th className="px-6 py-4 text-left">Lives Impacted</th>
                  <th className="px-6 py-4 text-left">Primary Impact</th>
                  <th className="px-6 py-4 text-left">Duration</th>
                </tr>
              </thead>
              <tbody>
                {metrics.map((metric, idx) => (
                  <tr
                    key={metric.amount}
                    className={`border-b border-border-light transition ${
                      selectedAmount === metric.amount ? 'bg-gold-primary/10' : 'hover:bg-cream-luxury'
                    }`}
                  >
                    <td className="px-6 py-4 font-bold text-gold-primary">${metric.amount}</td>
                    <td className="px-6 py-4">
                      {metric.amount <= 25
                        ? '1-5 people'
                        : metric.amount <= 100
                        ? '10-50 people'
                        : '50-200 people'}
                    </td>
                    <td className="px-6 py-4">{metric.impacts[0]}</td>
                    <td className="px-6 py-4 text-gray-600">
                      {metric.amount <= 25 ? 'One-time' : '1-3 months'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Why These Numbers Matter */}
        <div className="bg-cream-luxury rounded-lg p-12">
          <h3 className="text-2xl font-marcellus text-navy-deep mb-6">How We Calculate Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="font-semibold text-navy-deep mb-3">Local Partnerships</p>
              <p className="text-gray-700 text-sm">
                We partner with local organizations who know costs and needs. This keeps expenses low and impact high.
              </p>
            </div>
            <div>
              <p className="font-semibold text-navy-deep mb-3">Verified Data</p>
              <p className="text-gray-700 text-sm">
                Every impact metric is verified by our field teams and third-party auditors. No estimates or guesses.
              </p>
            </div>
            <div>
              <p className="font-semibold text-navy-deep mb-3">Actual Costs</p>
              <p className="text-gray-700 text-sm">
                Costs vary by region. Our metrics reflect real 2026 prices from Yemen, Somalia, and refugee camps.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-gold-primary hover:bg-gold-light text-navy-deep font-bold px-8 py-4 rounded-lg transition text-lg mb-4">
            Make Your Impact Today
          </button>
          <p className="text-gray-600">Every dollar makes a difference. Give now.</p>
        </div>
      </div>
    </div>
  );
}
