'use client';

import { useState } from 'react';
import type { Locale } from '@/lib/i18n';

interface ContactFormProps {
  locale: Locale;
}

export default function ContactForm({ locale }: ContactFormProps) {
  const ar = locale === 'ar';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    type: 'general',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // TODO: Send to email/CRM
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, locale }),
      });

      if (response.ok) {
        setMessage(ar ? 'شكراً! سنرد عليك قريباً.' : 'Thank you! We\'ll get back to you soon.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '', type: 'general' });
      }
    } catch (error) {
      setMessage(ar ? 'خطأ في الإرسال' : 'Error sending message');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-[#0a1428] mb-2">
            {ar ? 'الاسم' : 'Name'}
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
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
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-[#e8e4db] rounded-lg focus:border-[#d4af37] focus:outline-none"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#0a1428] mb-2">
          {ar ? 'الموضوع' : 'Subject'}
        </label>
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-[#e8e4db] rounded-lg focus:border-[#d4af37] focus:outline-none"
        >
          <option value="general">{ar ? 'استفسار عام' : 'General Inquiry'}</option>
          <option value="partnership">{ar ? 'طلب شراكة' : 'Partnership Request'}</option>
          <option value="volunteer">{ar ? 'تطوع' : 'Volunteering'}</option>
          <option value="donation">{ar ? 'الدعم المالي' : 'Donation'}</option>
          <option value="other">{ar ? 'أخرى' : 'Other'}</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#0a1428] mb-2">
          {ar ? 'الرسالة' : 'Message'}
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="w-full px-4 py-2 border border-[#e8e4db] rounded-lg focus:border-[#d4af37] focus:outline-none"
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-[#a8312f] text-white font-bold rounded-lg hover:bg-[#8b2f2d] transition disabled:opacity-50"
      >
        {loading ? (ar ? 'جاري الإرسال...' : 'Sending...') : (ar ? 'أرسل الرسالة' : 'Send Message')}
      </button>

      {message && (
        <div className={`p-4 rounded-lg text-center ${message.includes('Thank') || message.includes('شكراً') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {message}
        </div>
      )}
    </form>
  );
}
