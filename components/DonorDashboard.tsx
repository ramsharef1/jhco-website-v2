'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Donation {
  id: string;
  date: string;
  amount: number;
  program: string;
  impact: string;
  receipt: string;
}

export default function DonorDashboard() {
  const [donations, setDonations] = useState<Donation[]>([
    { id: '1', date: '2026-07-20', amount: 100, program: 'Education', impact: '2 children in school for 1 month', receipt: '/receipts/1.pdf' },
    { id: '2', date: '2026-06-15', amount: 250, program: 'Healthcare', impact: '50 medical consultations', receipt: '/receipts/2.pdf' },
    { id: '3', date: '2026-05-10', amount: 500, program: 'Emergency Aid', impact: '20 families received emergency food', receipt: '/receipts/3.pdf' },
  ]);

  const totalDonated = donations.reduce((sum, d) => sum + d.amount, 0);
  const totalImpact = donations.length;

  return (
    <div className="bg-white min-h-screen py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-marcellus text-navy-deep mb-3">Your Impact</h1>
        <p className="text-gray-600 mb-12">Track your donations and the lives you've changed</p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-gold-light/10 to-gold-primary/5 border border-gold-primary/20 rounded-lg p-8">
            <p className="text-gray-600 text-sm uppercase tracking-wider mb-2">Total Donated</p>
            <p className="text-4xl font-marcellus text-gold-primary mb-2">${totalDonated}</p>
            <p className="text-gray-500 text-sm">Since joining JHCO</p>
          </div>

          <div className="bg-gradient-to-br from-navy-royal/10 to-navy-deep/5 border border-navy-deep/20 rounded-lg p-8">
            <p className="text-gray-600 text-sm uppercase tracking-wider mb-2">Donations</p>
            <p className="text-4xl font-marcellus text-navy-deep mb-2">{totalImpact}</p>
            <p className="text-gray-500 text-sm">Contributions made</p>
          </div>

          <div className="bg-gradient-to-br from-red-charity/10 to-red-charity/5 border border-red-charity/20 rounded-lg p-8">
            <p className="text-gray-600 text-sm uppercase tracking-wider mb-2">Tax Deductible</p>
            <p className="text-4xl font-marcellus text-red-charity mb-2">${totalDonated}</p>
            <p className="text-gray-500 text-sm">Estimated deduction</p>
          </div>
        </div>

        {/* Donation History */}
        <div className="bg-gradient-to-br from-cream-luxury to-ivory border border-border-light rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-marcellus text-navy-deep mb-6">Donation History</h2>
          <div className="space-y-4">
            {donations.map((donation) => (
              <div key={donation.id} className="flex items-center justify-between p-6 bg-white rounded-lg border border-border-light hover:border-gold-primary/30 transition">
                <div>
                  <p className="font-semibold text-navy-deep">{donation.program}</p>
                  <p className="text-sm text-gray-600">{donation.date} • {donation.impact}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-marcellus text-gold-primary">${donation.amount}</p>
                  <button className="text-sm text-navy-deep hover:text-gold-primary transition mt-2">Download Receipt</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-navy-deep to-navy-royal rounded-lg p-12 text-center">
          <h3 className="text-2xl font-marcellus text-white mb-4">Continue Your Impact</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">Set up recurring donations and we'll send you monthly impact reports showing exactly how your contribution changes lives.</p>
          <button className="bg-gold-primary hover:bg-gold-light text-navy-deep font-bold px-8 py-4 rounded-lg transition">
            Set Up Recurring Donation
          </button>
        </div>
      </div>
    </div>
  );
}
