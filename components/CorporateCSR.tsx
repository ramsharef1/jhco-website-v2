'use client';

import { useState } from 'react';

const corporatePrograms = [
  {
    id: 1,
    name: 'Employee Volunteer Program',
    description: 'Structured volunteering opportunities for your team',
    features: ['Custom project selection', 'Team coordination', 'Impact reports', 'Tax benefits'],
    icon: '👥',
  },
  {
    id: 2,
    name: 'Cause Marketing Partnership',
    description: 'Co-brand campaigns that build your reputation',
    features: ['Campaign design', 'Social media support', 'Press coverage', 'Brand recognition'],
    icon: '📢',
  },
  {
    id: 3,
    name: 'Corporate Matching Gifts',
    description: 'Amplify employee donations with company match',
    features: ['Donation matching', 'Tax optimization', 'Employee portal', 'Real-time tracking'],
    icon: '💰',
  },
  {
    id: 4,
    name: 'Custom Impact Program',
    description: 'Design a program aligned with your values',
    features: ['Dedicated program', 'Custom metrics', 'Quarterly reports', 'Leadership briefings'],
    icon: '🎯',
  },
];

const testimonials = [
  {
    company: 'TechCorp International',
    quote: 'Partnering with JHCO transformed our CSR strategy. Our employees love having a real impact.',
    contact: 'Sarah Chen, CSR Director',
  },
  {
    company: 'Global Industries Ltd',
    quote: 'The transparency and impact measurement is exceptional. This is real corporate responsibility.',
    contact: 'James Wilson, Sustainability Lead',
  },
  {
    company: 'Summit Consulting Group',
    quote: 'Our teams volunteered in Yemen. It was life-changing for both the beneficiaries and our staff.',
    contact: 'Maria Rodriguez, HR Manager',
  },
];

export default function CorporateCSR() {
  const [selectedProgram, setSelectedProgram] = useState(1);

  const selected = corporatePrograms.find(p => p.id === selectedProgram);

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-marcellus text-navy-deep mb-4">Corporate Partnerships</h2>
          <p className="text-xl text-gray-600">Build your CSR program with measurable impact</p>
        </div>

        {/* Programs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {corporatePrograms.map((program) => (
            <button
              key={program.id}
              onClick={() => setSelectedProgram(program.id)}
              className={`p-6 rounded-lg border-2 transition text-left ${
                selectedProgram === program.id
                  ? 'border-gold-primary bg-gold-primary/5'
                  : 'border-border-light hover:border-gold-primary'
              }`}
            >
              <div className="text-4xl mb-3">{program.icon}</div>
              <h3 className="font-semibold text-navy-deep text-sm">{program.name}</h3>
            </button>
          ))}
        </div>

        {/* Selected Program Detail */}
        {selected && (
          <div className="bg-cream-luxury rounded-lg p-12 mb-12">
            <div className="mb-8">
              <p className="text-5xl mb-4">{selected.icon}</p>
              <h3 className="text-3xl font-marcellus text-navy-deep mb-3">{selected.name}</h3>
              <p className="text-xl text-gray-600">{selected.description}</p>
            </div>

            <div>
              <h4 className="font-semibold text-navy-deep mb-4 uppercase">Key Features:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selected.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="text-gold-primary font-bold">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <button className="mt-8 bg-gold-primary hover:bg-gold-light text-navy-deep font-bold px-8 py-4 rounded-lg transition">
              Request More Information
            </button>
          </div>
        )}

        {/* Success Stories */}
        <div className="mb-12">
          <h3 className="text-2xl font-marcellus text-navy-deep mb-8">Corporate Partners Speak</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-gradient-to-br from-cream-luxury to-ivory border border-border-light rounded-lg p-8">
                <p className="text-5xl mb-4">⭐⭐⭐⭐⭐</p>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t border-border-light pt-4">
                  <p className="font-semibold text-navy-deep text-sm">{testimonial.contact}</p>
                  <p className="text-gray-600 text-xs">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Partner */}
        <div className="bg-navy-deep text-white rounded-lg p-12">
          <h3 className="text-2xl font-marcellus mb-8">Why Partner with JHCO?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <span className="text-gold-primary text-2xl">📊</span> Transparent Reporting
              </h4>
              <p className="text-gray-300">Real-time dashboards showing every dollar's impact with verified outcomes.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <span className="text-gold-primary text-2xl">🌍</span> Global Reach
              </h4>
              <p className="text-gray-300">Active in 30+ countries with established programs and trusted local partners.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <span className="text-gold-primary text-2xl">👥</span> Employee Engagement
              </h4>
              <p className="text-gray-300">Meaningful volunteering and giving opportunities that boost retention and morale.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <span className="text-gold-primary text-2xl">✓</span> Proven Track Record
              </h4>
              <p className="text-gray-300">20+ years of humanitarian work with 4/4 Charity Navigator rating.</p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Ready to make a corporate impact?</p>
          <button className="bg-gold-primary hover:bg-gold-light text-navy-deep font-bold px-8 py-4 rounded-lg transition">
            Contact Our Partnerships Team
          </button>
          <p className="text-sm text-gray-500 mt-3">partnerships@jhco.org.jo • +962-6-123-4567</p>
        </div>
      </div>
    </div>
  );
}
