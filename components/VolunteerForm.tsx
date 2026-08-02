'use client';

import { useState } from 'react';
import type { Locale } from '@/lib/i18n';

interface VolunteerFormProps {
  locale: Locale;
}

export default function VolunteerForm({ locale }: VolunteerFormProps) {
  const ar = locale === 'ar';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    role: '',
    availability: '',
    experience: '',
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
      const response = await fetch('/api/volunteer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', country: '', role: '', availability: '', experience: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Volunteer form error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-[#f9f7f4] p-8 rounded-lg border border-[#e8e4db]">
      <h3 className="text-2xl font-bold text-[#0a1428] mb-2">
        {ar ? 'انضم إلى فريقنا التطوعي' : 'Join Our Volunteer Team'}
      </h3>
      <p className="text-[#6b6b6b] mb-8">
        {ar ? 'شارك في عملنا الإنساني المهم' : 'Help us make a difference'}
      </p>

      {submitted && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          {ar ? 'تم استقبال طلبك بنجاح!' : 'Thank you for volunteering!'}
        </div>
      )}

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-[#0a1428] mb-2">
              {ar ? 'الاسم الكامل' : 'Full Name'}
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-[#e8e4db] rounded-lg focus:border-[#d4af37] focus:outline-none"
            />
          </div>

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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

          <div>
            <label className="block text-sm font-semibold text-[#0a1428] mb-2">
              {ar ? 'الدولة' : 'Country'}
            </label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-[#e8e4db] rounded-lg focus:border-[#d4af37] focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#0a1428] mb-2">
            {ar ? 'مجال التطوع المفضل' : 'Preferred Volunteer Role'}
          </label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-[#e8e4db] rounded-lg focus:border-[#d4af37] focus:outline-none"
          >
            <option value="">{ar ? 'اختر دورًا' : 'Select a role'}</option>
            <option value="healthcare">{ar ? 'الرعاية الصحية' : 'Healthcare'}</option>
            <option value="education">{ar ? 'التعليم' : 'Education'}</option>
            <option value="admin">{ar ? 'إداري' : 'Administrative'}</option>
            <option value="field">{ar ? 'عمل ميداني' : 'Field Work'}</option>
            <option value="fundraising">{ar ? 'جمع التبرعات' : 'Fundraising'}</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#0a1428] mb-2">
            {ar ? 'التوفر الزمني' : 'Availability'}
          </label>
          <select
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-[#e8e4db] rounded-lg focus:border-[#d4af37] focus:outline-none"
          >
            <option value="">{ar ? 'اختر التوفر' : 'Select availability'}</option>
            <option value="part-time">{ar ? 'دوام جزئي' : 'Part-time'}</option>
            <option value="weekends">{ar ? 'نهاية الأسبوع' : 'Weekends'}</option>
            <option value="flexible">{ar ? 'مرن' : 'Flexible'}</option>
            <option value="full-time">{ar ? 'دوام كامل' : 'Full-time'}</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#0a1428] mb-2">
            {ar ? 'الخبرة السابقة' : 'Previous Experience'}
          </label>
          <textarea
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border border-[#e8e4db] rounded-lg focus:border-[#d4af37] focus:outline-none"
            placeholder={ar ? 'حدثنا عن خبرتك...' : 'Tell us about your experience...'}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-[#a8312f] text-white font-bold rounded-lg hover:bg-[#8b2f2d] transition disabled:opacity-50"
        >
          {loading ? (ar ? 'جاري الإرسال...' : 'Submitting...') : (ar ? 'انضم الآن' : 'Join Now')}
        </button>
      </div>
    </form>
  );
}
