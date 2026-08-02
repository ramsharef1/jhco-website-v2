'use client';

import { useState } from 'react';

export default function FinancialTransparency() {
  const [selectedYear, setSelectedYear] = useState(2026);

  const budgetBreakdown = [
    { category: 'Direct Aid (Food, Medicine, Shelter)', percentage: 65, amount: '$6.5M', color: 'bg-gold-primary' },
    { category: 'Education Programs', percentage: 15, amount: '$1.5M', color: 'bg-navy-deep' },
    { category: 'Healthcare Initiatives', percentage: 12, amount: '$1.2M', color: 'bg-red-charity' },
    { category: 'Operations & Admin', percentage: 8, amount: '$800K', color: 'bg-gray-medium' },
  ];

  const certifications = [
    { name: 'ISO 9001:2015', icon: '✓', status: 'Certified' },
    { name: 'GiveWell Recommended', icon: '⭐', status: 'Approved' },
    { name: 'Charity Navigator 4/4 Stars', icon: '⭐', status: 'Rated' },
    { name: 'PCI-DSS Compliant', icon: '🔒', status: 'Verified' },
  ];

  return (
    <div className="bg-cream-luxury py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-marcellus text-navy-deep mb-4">Financial Transparency</h2>
          <p className="text-xl text-gray-600">We believe in openness. See exactly where your donations go.</p>
        </div>

        {/* Budget Breakdown */}
        <div className="bg-white rounded-lg shadow-elegant p-12 mb-12">
          <h3 className="text-2xl font-marcellus text-navy-deep mb-8">Where Your Money Goes</h3>
          <div className="space-y-6">
            {budgetBreakdown.map((item, idx) => (
              <div key={idx}>
                <div className="flex items-end justify-between mb-2">
                  <p className="font-semibold text-navy-deep">{item.category}</p>
                  <p className="text-gold-primary font-bold">{item.percentage}% ({item.amount})</p>
                </div>
                <div className="w-full bg-gray-light/20 rounded-full h-3">
                  <div className={`${item.color} h-3 rounded-full transition-all duration-500`} style={{ width: `${item.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg p-8 shadow-elegant text-center">
            <p className="text-5xl font-marcellus text-gold-primary mb-2">$10M</p>
            <p className="text-gray-600 text-sm">Annual Budget</p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-elegant text-center">
            <p className="text-5xl font-marcellus text-navy-deep mb-2">2.5M+</p>
            <p className="text-gray-600 text-sm">Beneficiaries Served</p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-elegant text-center">
            <p className="text-5xl font-marcellus text-red-charity mb-2">92%</p>
            <p className="text-gray-600 text-sm">Funds to Programs</p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-elegant text-center">
            <p className="text-5xl font-marcellus text-navy-medium mb-2">30+</p>
            <p className="text-gray-600 text-sm">Countries Active</p>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-lg shadow-elegant p-12 mb-12">
          <h3 className="text-2xl font-marcellus text-navy-deep mb-8">Trust & Accreditations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="border-2 border-gold-primary/30 rounded-lg p-6 text-center hover:border-gold-primary transition">
                <div className="text-4xl mb-3">{cert.icon}</div>
                <p className="font-semibold text-navy-deep mb-1">{cert.name}</p>
                <p className="text-sm text-gold-primary">{cert.status}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Reports */}
        <div className="bg-navy-deep rounded-lg p-12 text-white">
          <h3 className="text-2xl font-marcellus mb-8">Annual Reports & Audits</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-6 bg-navy-royal/50 rounded-lg hover:bg-navy-royal transition cursor-pointer">
              <div>
                <p className="font-semibold mb-1">2025 Annual Report</p>
                <p className="text-gray-400 text-sm">Comprehensive financial and impact overview</p>
              </div>
              <span className="text-gold-primary">→</span>
            </div>
            <div className="flex items-center justify-between p-6 bg-navy-royal/50 rounded-lg hover:bg-navy-royal transition cursor-pointer">
              <div>
                <p className="font-semibold mb-1">2025 Audit Report</p>
                <p className="text-gray-400 text-sm">Independent third-party verification</p>
              </div>
              <span className="text-gold-primary">→</span>
            </div>
            <div className="flex items-center justify-between p-6 bg-navy-royal/50 rounded-lg hover:bg-navy-royal transition cursor-pointer">
              <div>
                <p className="font-semibold mb-1">Impact Measurement Framework</p>
                <p className="text-gray-400 text-sm">How we measure and verify outcomes</p>
              </div>
              <span className="text-gold-primary">→</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
