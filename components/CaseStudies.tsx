'use client';

import { useState } from 'react';

const caseStudies = [
  {
    id: 1,
    title: 'From Refugee Camp to University',
    beneficiary: 'Fatima, Syria',
    category: 'Education',
    image: '/media/case-study-1.jpg',
    beforeAfter: {
      before: 'Living in refugee camp, no access to education',
      after: 'Enrolled in university, scholarship winner',
    },
    timeline: [
      { date: '2020', event: 'Arrived at camp, age 15' },
      { date: '2021', event: 'Joined JHCO education program' },
      { date: '2023', event: 'Completed secondary education' },
      { date: '2026', event: 'Enrolled in engineering program' },
    ],
    impact: '1 life transformed, inspiring 50+ other girls to pursue education',
    donation: '$5,000 covers education for 1 student per year',
  },
  {
    id: 2,
    title: 'Healthcare Access in Rural Yemen',
    beneficiary: 'Al-Hodeidah Village',
    category: 'Healthcare',
    image: '/media/case-study-2.jpg',
    beforeAfter: {
      before: '0 clinics, 50km to nearest hospital',
      after: 'Mobile clinic serves 500 patients/month',
    },
    timeline: [
      { date: '2023', event: 'Assessed healthcare needs' },
      { date: '2024', event: 'Mobile clinic launched' },
      { date: '2025', event: 'Trained 5 local health workers' },
      { date: '2026', event: 'Expanded to 3 villages, 1,500 patients served' },
    ],
    impact: '1,500 patients treated, maternal mortality reduced 40%',
    donation: '$10,000 funds mobile clinic for 6 months',
  },
  {
    id: 3,
    title: 'Food Security & Livelihoods Program',
    beneficiary: 'Somalia Rural Communities',
    category: 'Emergency Aid',
    image: '/media/case-study-3.jpg',
    beforeAfter: {
      before: 'Drought, 80% livestock loss, extreme hunger',
      after: 'Irrigation project, stable crops, 300 jobs created',
    },
    timeline: [
      { date: '2024', event: 'Emergency food distribution' },
      { date: '2025', event: 'Irrigation infrastructure built' },
      { date: '2026', event: 'First harvest: 45 tons, 300 jobs' },
      { date: '2027', event: 'Projected: self-sufficient community' },
    ],
    impact: '3,000 people food-secure, 300 permanent livelihoods',
    donation: '$50,000 funds 1 village program for 2 years',
  },
];

export default function CaseStudies() {
  const [selectedStudy, setSelectedStudy] = useState(caseStudies[0]);

  return (
    <div className="bg-cream-luxury py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-marcellus text-navy-deep mb-4">Stories of Change</h2>
          <p className="text-xl text-gray-600">See the real impact of donations through detailed case studies</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Case Study List */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {caseStudies.map((study) => (
                <button
                  key={study.id}
                  onClick={() => setSelectedStudy(study)}
                  className={`w-full text-left p-6 rounded-lg border-2 transition ${
                    selectedStudy.id === study.id
                      ? 'border-gold-primary bg-gold-primary/5'
                      : 'border-border-light hover:border-gold-primary/30'
                  }`}
                >
                  <p className="text-sm uppercase tracking-wider text-gold-primary mb-1">{study.category}</p>
                  <p className="font-semibold text-navy-deep">{study.title}</p>
                  <p className="text-sm text-gray-600 mt-1">{study.beneficiary}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Case Study Detail */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-elegant p-8 md:p-12">
            <div className="mb-8">
              <p className="text-sm uppercase tracking-wider text-gold-primary mb-2 font-semibold">{selectedStudy.category}</p>
              <h3 className="text-3xl font-marcellus text-navy-deep mb-2">{selectedStudy.title}</h3>
              <p className="text-lg text-gray-600">{selectedStudy.beneficiary}</p>
            </div>

            {/* Before/After */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-red-charity/10 border-l-4 border-red-charity p-6 rounded">
                <p className="text-sm font-semibold text-red-charity uppercase mb-2">Before</p>
                <p className="text-gray-700">{selectedStudy.beforeAfter.before}</p>
              </div>
              <div className="bg-green-500/10 border-l-4 border-green-500 p-6 rounded">
                <p className="text-sm font-semibold text-green-600 uppercase mb-2">After</p>
                <p className="text-gray-700">{selectedStudy.beforeAfter.after}</p>
              </div>
            </div>

            {/* Timeline */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-navy-deep mb-4">Timeline</h4>
              <div className="space-y-3">
                {selectedStudy.timeline.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gold-primary text-white text-sm font-bold">
                        {idx + 1}
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-gold-primary">{item.date}</p>
                      <p className="text-gray-600">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact & CTA */}
            <div className="bg-navy-deep/5 border border-navy-deep/10 rounded-lg p-6">
              <p className="text-sm uppercase tracking-wider text-navy-deep font-semibold mb-2">Measurable Impact</p>
              <p className="font-semibold text-navy-deep mb-4">{selectedStudy.impact}</p>
              <p className="text-gray-600 text-sm mb-0">{selectedStudy.donation}</p>
            </div>

            <button className="mt-6 w-full bg-gold-primary hover:bg-gold-light text-navy-deep font-bold px-6 py-4 rounded-lg transition">
              Support This Program
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
