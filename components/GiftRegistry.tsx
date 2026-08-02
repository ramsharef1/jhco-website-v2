'use client';

import { useState } from 'react';

const giftOptions = [
  {
    id: 1,
    name: 'Birthday Gift - School Supplies',
    description: 'Provide a student with a full year of school supplies',
    price: 50,
    icon: '🎓',
    impact: 'Helps 1 child attend school for a full year',
  },
  {
    id: 2,
    name: 'Anniversary Gift - Family Food Package',
    description: 'Send emergency food to a displaced family for 1 month',
    price: 100,
    icon: '🍽️',
    impact: 'Feeds 1 family for 30 days',
  },
  {
    id: 3,
    name: 'Wedding Gift - Medical Care',
    description: 'Provide mobile clinic services to a remote village',
    price: 250,
    icon: '⚕️',
    impact: 'Healthcare for 500+ people for 1 month',
  },
  {
    id: 4,
    name: 'Holiday Gift - Water Well',
    description: 'Build clean water infrastructure for a community',
    price: 500,
    icon: '💧',
    impact: 'Clean water access for 1,000+ people',
  },
  {
    id: 5,
    name: 'Corporate Gift - Scholarship Program',
    description: 'Support a refugee student through university',
    price: 1000,
    icon: '📚',
    impact: 'Full scholarship for 1 student per year',
  },
  {
    id: 6,
    name: 'Legacy Gift - Skills Training Center',
    description: 'Build vocational training facility in rural area',
    price: 5000,
    icon: '🛠️',
    impact: 'Job skills for 500+ people annually',
  },
];

export default function GiftRegistry() {
  const [selectedGift, setSelectedGift] = useState<number | null>(null);
  const [recipientName, setRecipientName] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [message, setMessage] = useState('');

  const selected = selectedGift ? giftOptions.find(g => g.id === selectedGift) : null;

  return (
    <div className="bg-cream-luxury py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-marcellus text-navy-deep mb-4">Gift Registry</h2>
          <p className="text-xl text-gray-600">Give a meaningful gift that changes lives</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Gift Options */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {giftOptions.map((gift) => (
                <button
                  key={gift.id}
                  onClick={() => setSelectedGift(gift.id)}
                  className={`text-left p-6 rounded-lg border-2 transition ${
                    selectedGift === gift.id
                      ? 'border-gold-primary bg-gold-primary/5'
                      : 'border-border-light hover:border-gold-primary'
                  }`}
                >
                  <div className="text-5xl mb-3">{gift.icon}</div>
                  <h3 className="font-semibold text-navy-deep mb-2">{gift.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{gift.description}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-marcellus text-gold-primary">${gift.price}</p>
                    <span className="text-gold-primary">→</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Checkout */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-elegant p-8 sticky top-20">
              {selected ? (
                <>
                  <div className="mb-6 pb-6 border-b border-border-light">
                    <p className="text-sm text-gray-600 mb-2">Selected Gift</p>
                    <p className="text-2xl font-marcellus text-navy-deep mb-3">{selected.name}</p>
                    <p className="text-sm text-gray-600 mb-4">{selected.impact}</p>
                    <p className="text-4xl font-marcellus text-gold-primary">${selected.price}</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-navy-deep mb-2">Recipient Name</label>
                      <input
                        type="text"
                        value={recipientName}
                        onChange={(e) => setRecipientName(e.target.value)}
                        placeholder="Who is this gift for?"
                        className="w-full px-4 py-2 border border-border-light rounded-lg focus:border-gold-primary focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-navy-deep mb-2">Email Address</label>
                      <input
                        type="email"
                        value={recipientEmail}
                        onChange={(e) => setRecipientEmail(e.target.value)}
                        placeholder="Where to send gift notification"
                        className="w-full px-4 py-2 border border-border-light rounded-lg focus:border-gold-primary focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-navy-deep mb-2">Personal Message</label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Add a personal note..."
                        rows={4}
                        className="w-full px-4 py-2 border border-border-light rounded-lg focus:border-gold-primary focus:outline-none resize-none"
                      />
                    </div>
                  </div>

                  <button className="w-full bg-gold-primary hover:bg-gold-light text-navy-deep font-bold py-4 rounded-lg transition mb-3">
                    Continue to Payment
                  </button>

                  <p className="text-xs text-gray-600 text-center">
                    The recipient will receive a beautiful email with details about their gift impact.
                  </p>
                </>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-600 mb-3">Select a gift to get started</p>
                  <div className="text-4xl">🎁</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Why Gift Registry */}
        <div className="mt-16 bg-navy-deep text-white rounded-lg p-12">
          <h3 className="text-2xl font-marcellus mb-6">Why Choose Gift Registry?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-3xl mb-3">💝</p>
              <p className="font-semibold mb-2">Meaningful Impact</p>
              <p className="text-gray-300 text-sm">Your gift does real work immediately, not just collected donations.</p>
            </div>
            <div>
              <p className="text-3xl mb-3">📧</p>
              <p className="font-semibold mb-2">Beautiful Notification</p>
              <p className="text-gray-300 text-sm">Recipients get an elegant email explaining the impact of their gift.</p>
            </div>
            <div>
              <p className="text-3xl mb-3">📊</p>
              <p className="font-semibold mb-2">Track Impact</p>
              <p className="text-gray-300 text-sm">Receive monthly updates showing exactly how the gift is making a difference.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
