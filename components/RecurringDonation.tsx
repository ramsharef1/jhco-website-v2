'use client';

import { useState } from 'react';

const frequencyOptions = [
  { label: 'Monthly', value: 'monthly', savings: 'Save 8%' },
  { label: 'Quarterly', value: 'quarterly', savings: 'Save 5%' },
  { label: 'Annual', value: 'annual', savings: 'Save 12%' },
];

const donationAmounts = [10, 25, 50, 100, 250, 500];

export default function RecurringDonation() {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [selectedFrequency, setSelectedFrequency] = useState('monthly');
  const [customAmount, setCustomAmount] = useState('');
  const [autoRetry, setAutoRetry] = useState(true);
  const [monthlyImpact, setMonthlyImpact] = useState('');

  const displayAmount = customAmount || selectedAmount;
  const frequency = frequencyOptions.find(f => f.value === selectedFrequency);

  // Calculate impact based on amount
  const getImpact = (amount: number) => {
    if (amount >= 500) return 'Funds mobile clinic for 2 weeks';
    if (amount >= 250) return 'Healthcare for 500+ people';
    if (amount >= 100) return 'Feeds 1 family for a month';
    if (amount >= 50) return 'School supplies for 1 student for a year';
    return 'Provides meals for families in need';
  };

  return (
    <div className="bg-cream-luxury py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-marcellus text-navy-deep mb-4">Set Up Recurring Donation</h2>
          <p className="text-xl text-gray-600">Make a sustained impact every month</p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-lg shadow-elegant p-12">
          {/* Amount Selection */}
          <div className="mb-10">
            <label className="block text-sm font-semibold text-navy-deep mb-4 uppercase">Donation Amount</label>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {donationAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => {
                    setSelectedAmount(amount);
                    setCustomAmount('');
                  }}
                  className={`py-3 rounded-lg font-semibold transition ${
                    displayAmount === amount && !customAmount
                      ? 'bg-gold-primary text-navy-deep'
                      : 'bg-cream-luxury text-navy-deep border-2 border-gold-primary/30 hover:border-gold-primary'
                  }`}
                >
                  ${amount}
                </button>
              ))}
            </div>
            <div className="relative">
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 text-xl">$</span>
              <input
                type="number"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                placeholder="Or enter custom amount"
                className="w-full pl-8 pr-4 py-3 border-2 border-gold-primary/30 rounded-lg focus:border-gold-primary focus:outline-none"
              />
            </div>
          </div>

          {/* Frequency Selection */}
          <div className="mb-10 pb-10 border-b border-border-light">
            <label className="block text-sm font-semibold text-navy-deep mb-4 uppercase">Frequency</label>
            <div className="grid grid-cols-3 gap-4">
              {frequencyOptions.map((freq) => (
                <button
                  key={freq.value}
                  onClick={() => setSelectedFrequency(freq.value)}
                  className={`py-4 rounded-lg font-semibold transition ${
                    selectedFrequency === freq.value
                      ? 'bg-navy-deep text-white'
                      : 'bg-cream-luxury text-navy-deep border-2 border-navy-deep/30 hover:border-navy-deep'
                  }`}
                >
                  <p>{freq.label}</p>
                  <p className="text-xs font-normal text-gold-primary">{freq.savings}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Impact Preview */}
          <div className="mb-10 pb-10 border-b border-border-light bg-gold-primary/5 border-l-4 border-gold-primary p-6 rounded">
            <p className="text-sm uppercase tracking-wider text-gold-primary font-semibold mb-2">Your Monthly Impact</p>
            <p className="text-lg text-navy-deep font-semibold">{getImpact(Number(displayAmount))}</p>
            <p className="text-sm text-gray-600 mt-3">
              Over a year: {getImpact(Number(displayAmount) * 12)}
            </p>
          </div>

          {/* Auto-Retry Option */}
          <div className="mb-10 flex items-center gap-3">
            <input
              type="checkbox"
              id="autoRetry"
              checked={autoRetry}
              onChange={(e) => setAutoRetry(e.target.checked)}
              className="w-5 h-5 accent-gold-primary cursor-pointer"
            />
            <label htmlFor="autoRetry" className="text-gray-700 cursor-pointer">
              <p className="font-semibold text-navy-deep">Automatic Retry on Failed Payments</p>
              <p className="text-sm text-gray-600">If a payment fails, we'll retry it automatically (no additional fees)</p>
            </label>
          </div>

          {/* Summary */}
          <div className="bg-cream-luxury p-6 rounded-lg mb-8">
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-600">Monthly donation:</p>
              <p className="text-2xl font-marcellus text-gold-primary">${displayAmount}/month</p>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <p>Annual commitment:</p>
              <p className="font-semibold">${Number(displayAmount) * (selectedFrequency === 'monthly' ? 12 : selectedFrequency === 'quarterly' ? 4 : 1)}/year</p>
            </div>
          </div>

          {/* CTA */}
          <button className="w-full bg-gold-primary hover:bg-gold-light text-navy-deep font-bold py-4 rounded-lg transition mb-4 text-lg">
            Set Up Recurring Donation
          </button>

          <p className="text-xs text-gray-600 text-center">
            ✓ Cancel anytime • ✓ Secure payment processing • ✓ Monthly impact reports
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <p className="text-3xl mb-3">📧</p>
            <h4 className="font-semibold text-navy-deep mb-2">Monthly Updates</h4>
            <p className="text-sm text-gray-600">Receive stories and impact reports showing your donation's effect</p>
          </div>
          <div className="text-center">
            <p className="text-3xl mb-3">🏅</p>
            <h4 className="font-semibold text-navy-deep mb-2">Donor Recognition</h4>
            <p className="text-sm text-gray-600">Your name appears in our annual donor recognition unless you prefer anonymity</p>
          </div>
          <div className="text-center">
            <p className="text-3xl mb-3">💳</p>
            <h4 className="font-semibold text-navy-deep mb-2">Easy Management</h4>
            <p className="text-sm text-gray-600">Update payment method or pause anytime from your donor dashboard</p>
          </div>
        </div>
      </div>
    </div>
  );
}
