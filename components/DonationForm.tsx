'use client';

import { useState } from 'react';
import type { Locale } from '@/lib/i18n';

interface DonationFormProps {
  locale: Locale;
}

export default function DonationForm({ locale }: DonationFormProps) {
  const ar = locale === 'ar';
  const [amount, setAmount] = useState('25');
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState('once');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const quickAmounts = [5, 25, 50, 100, 250, 500];
  const finalAmount = customAmount ? parseFloat(customAmount) : parseFloat(amount);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      // TODO: Integrate with Stripe/PayPal
      const response = await fetch('/api/donations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: finalAmount,
          frequency,
          donor: formData,
          locale,
        }),
      });

      if (response.ok) {
        setMessage(ar ? 'شكراً لتبرعك!' : 'Thank you for your donation!');
        setFormData({ name: '', email: '', phone: '' });
        setAmount('25');
        setCustomAmount('');
      } else {
        setMessage(ar ? 'حدث خطأ. يرجى المحاولة مرة أخرى.' : 'An error occurred. Please try again.');
      }
    } catch (error) {
      setMessage(ar ? 'خطأ في الاتصال' : 'Connection error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg border border-[#e8e4db]">
      <h2 className="text-3xl font-bold text-[#0a1428] mb-2">
        {ar ? 'تبرع الآن' : 'Make a Donation'}
      </h2>
      <p className="text-[#6b6b6b] mb-8">
        {ar ? 'تبرعك يصنع فرقاً حقيقياً' : 'Your donation makes a real difference'}
      </p>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Amount Selection */}
        <div>
          <label className="block text-sm font-semibold text-[#0a1428] mb-4">
            {ar ? 'اختر المبلغ' : 'Select Amount'}
          </label>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-4">
            {quickAmounts.map((amt) => (
              <button
                key={amt}
                type="button"
                onClick={() => { setAmount(amt.toString()); setCustomAmount(''); }}
                className={`py-3 rounded-lg font-bold transition ${
                  parseFloat(amount) === amt && !customAmount
                    ? 'bg-[#d4af37] text-[#0a1428]'
                    : 'bg-[#f3f4f6] text-[#0a1428] hover:bg-[#e8e4db]'
                }`}
              >
                ${amt}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <span className="text-2xl font-bold text-[#0a1428]">$</span>
            <input
              type="number"
              value={customAmount}
              onChange={(e) => { setCustomAmount(e.target.value); setAmount(e.target.value); }}
              placeholder={ar ? 'مبلغ مخصص' : 'Custom amount'}
              className="flex-1 px-4 py-3 border border-[#e8e4db] rounded-lg focus:border-[#d4af37] focus:outline-none"
            />
          </div>
        </div>

        {/* Frequency */}
        <div>
          <label className="block text-sm font-semibold text-[#0a1428] mb-4">
            {ar ? 'التكرار' : 'Frequency'}
          </label>
          <div className="flex gap-4">
            {[{ val: 'once', label: ar ? 'مرة واحدة' : 'One time' },
              { val: 'monthly', label: ar ? 'شهري' : 'Monthly' },
              { val: 'yearly', label: ar ? 'سنوي' : 'Yearly' }].map(f => (
              <label key={f.val} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="frequency"
                  value={f.val}
                  checked={frequency === f.val}
                  onChange={(e) => setFrequency(e.target.value)}
                  className="w-4 h-4 accent-[#d4af37]"
                />
                <span className="text-[#0a1428]">{f.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Donor Info */}
        <div className="space-y-4 p-6 bg-[#f9f7f4] rounded-lg">
          <div>
            <label className="block text-sm font-semibold text-[#0a1428] mb-2">
              {ar ? 'الاسم' : 'Full Name'}
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-[#e8e4db] rounded-lg focus:border-[#d4af37] focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#0a1428] mb-2">
              {ar ? 'البريد الإلكتروني' : 'Email'}
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 border border-[#e8e4db] rounded-lg focus:border-[#d4af37] focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#0a1428] mb-2">
              {ar ? 'رقم الهاتف' : 'Phone'}
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2 border border-[#e8e4db] rounded-lg focus:border-[#d4af37] focus:outline-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 bg-[#a8312f] text-white font-bold rounded-lg hover:bg-[#8b2f2d] transition disabled:opacity-50"
        >
          {loading ? (ar ? 'جاري المعالجة...' : 'Processing...') : (ar ? `تبرع بمبلغ $${finalAmount}` : `Donate $${finalAmount}`)}
        </button>

        {message && (
          <div className={`p-4 rounded-lg ${message.includes('Thank') || message.includes('شكراً') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {message}
          </div>
        )}
      </form>

      <p className="text-xs text-[#6b6b6b] text-center mt-6">
        {ar ? 'آمن 100٪ - معلوماتك محمية بالكامل' : '100% Secure - Your information is fully protected'}
      </p>
    </div>
  );
}
