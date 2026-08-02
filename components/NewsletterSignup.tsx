'use client';

import { useState } from 'react';
import type { Locale } from '@/lib/i18n';

interface NewsletterSignupProps {
  locale: Locale;
  variant?: 'inline' | 'card' | 'footer';
}

export default function NewsletterSignup({ locale, variant = 'card' }: NewsletterSignupProps) {
  const ar = locale === 'ar';
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // TODO: Integrate with Mailchimp/Sendgrid
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, locale }),
      });

      if (response.ok) {
        setMessage(ar ? 'تم الاشتراك بنجاح!' : 'Successfully subscribed!');
        setEmail('');
        setTimeout(() => setMessage(''), 3000);
      } else {
        setMessage(ar ? 'حدث خطأ. حاول مرة أخرى.' : 'Error. Please try again.');
      }
    } catch (error) {
      setMessage(ar ? 'خطأ في الاتصال' : 'Connection error');
    } finally {
      setLoading(false);
    }
  };

  if (variant === 'inline') {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={ar ? 'البريد الإلكتروني' : 'Your email'}
          className="flex-1 px-4 py-2 rounded-lg text-sm focus:outline-none"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-[#d4af37] text-[#0a1428] font-bold rounded-lg hover:bg-[#e8c547] transition disabled:opacity-50"
        >
          {ar ? 'اشترك' : 'Subscribe'}
        </button>
      </form>
    );
  }

  return (
    <div className="max-w-md mx-auto p-8 bg-gradient-to-r from-[#0a1428] to-[#142850] text-white rounded-lg">
      <h3 className="text-2xl font-bold mb-2">
        {ar ? 'البقاء على اطلاع' : 'Stay Updated'}
      </h3>
      <p className="text-gray-300 mb-6 text-sm">
        {ar ? 'احصل على آخر الأخبار والتحديثات مباشرة إلى صندوقك' : 'Get the latest news delivered to your inbox'}
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={ar ? 'البريد الإلكتروني' : 'Your email'}
          className="w-full px-4 py-3 rounded-lg text-[#0a1428] focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-[#d4af37] text-[#0a1428] font-bold rounded-lg hover:bg-[#e8c547] transition disabled:opacity-50"
        >
          {loading ? (ar ? 'جاري...' : 'Subscribing...') : (ar ? 'اشترك' : 'Subscribe')}
        </button>
      </form>

      {message && (
        <p className={`mt-3 text-sm text-center ${message.includes('success') || message.includes('نجاح') ? 'text-green-300' : 'text-red-300'}`}>
          {message}
        </p>
      )}
    </div>
  );
}
