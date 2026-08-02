'use client';

import { useState } from 'react';
import type { Locale } from '@/lib/i18n';

interface PartnershipFormProps {
  locale: Locale;
}

export default function PartnershipForm({ locale }: PartnershipFormProps) {
  const ar = locale === 'ar';
  const [formData, setFormData] = useState({
    organizationName: '',
    contactName: '',
    email: '',
    phone: '',
    sector: '',
    partnershopType: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/partnership', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          organizationName: '',
          contactName: '',
          email: '',
          phone: '',
          sector: '',
          partnershopType: '',
          message: '',
        });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Partnership form error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg border-2 border-[#d4af37]">
      <h3 className="text-2xl font-bold text-[#0a1428] mb-2">
        {ar ? 'لنشارك في المستقبل' : 'Let\'s Partner Together'}
      </h3>
      <p className="text-[#6b6b6b] mb-8">
        {ar ? 'أخبرنا عن اهتماماتك في الشراكة' : 'Tell us about your partnership interests'}
      </p>

      {submitted && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          {ar ? 'سنتواصل معك قريبًا!' : 'We\'ll be in touch soon!'}
        </div>
      )}

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-[#0a1428] mb-2">
              {ar ? 'اسم المنظمة' : 'Organization Name'}
            </label>
            <input
              type="text"
              name="organizationName"
              value={formData.organizationName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-[#e8e4db] rounded-lg focus:border-[#d4af37] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#0a1428] mb-2">
              {ar ? 'اسم المسؤول' : 'Contact Person'}
            </label>
            <input
              type="text"
              name="contactName"
              value={formData.contactName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-[#e8e4db] rounded-lg focus:border-[#d4af37] focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-[#0a1428] mb-2">
              {ar ? 'البريد الإلكتروني' : 'Email Address'}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-[#e8e4db] rounded-lg focus:border-[#d4af37] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#0a1428] mb-2">
              {ar ? 'رقم الهاتف' : 'Phone Number'}
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-[#e8e4db] rounded-lg focus:border-[#d4af37] focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#0a1428] mb-2">
            {ar ? 'القطاع' : 'Sector'}
          </label>
          <select
            name="sector"
            value={formData.sector}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-[#e8e4db] rounded-lg focus:border-[#d4af37] focus:outline-none"
          >
            <option value="">{ar ? 'اختر القطاع' : 'Select sector'}</option>
            <option value="corporate">{ar ? 'شركات' : 'Corporate'}</option>
            <option value="ngos">{ar ? 'منظمات غير حكومية' : 'NGOs'}</option>
            <option value="government">{ar ? 'حكومي' : 'Government'}</option>
            <option value="academic">{ar ? 'أكاديمي' : 'Academic'}</option>
            <option value="other">{ar ? 'آخر' : 'Other'}</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#0a1428] mb-2">
            {ar ? 'نوع الشراكة' : 'Partnership Type'}
          </label>
          <select
            name="partnershopType"
            value={formData.partnershopType}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-[#e8e4db] rounded-lg focus:border-[#d4af37] focus:outline-none"
          >
            <option value="">{ar ? 'اختر النوع' : 'Select type'}</option>
            <option value="funding">{ar ? 'تمويل' : 'Funding'}</option>
            <option value="program">{ar ? 'برنامج' : 'Program Partnership'}</option>
            <option value="advocacy">{ar ? 'دعوة' : 'Advocacy'}</option>
            <option value="knowledge">{ar ? 'معرفة' : 'Knowledge Sharing'}</option>
            <option value="services">{ar ? 'خدمات' : 'In-kind Services'}</option>
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
            rows={4}
            className="w-full px-4 py-2 border border-[#e8e4db] rounded-lg focus:border-[#d4af37] focus:outline-none"
            placeholder={ar ? 'أخبرنا عن رؤيتك...' : 'Tell us about your vision...'}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-[#d4af37] text-[#0a1428] font-bold rounded-lg hover:bg-[#e8c547] transition disabled:opacity-50"
        >
          {loading ? (ar ? 'جاري الإرسال...' : 'Submitting...') : (ar ? 'أرسل الاستعلام' : 'Send Inquiry')}
        </button>
      </div>
    </form>
  );
}
