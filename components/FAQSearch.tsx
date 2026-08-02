'use client';

import { useState, useMemo } from 'react';

const faqData = [
  {
    id: 1,
    category: 'Donations',
    question: 'How are my donations used?',
    answer: '92% of donations go directly to programs. 65% for emergency aid, 15% for education, 12% for healthcare, 8% for operations. We publish detailed annual reports showing every dollar spent.',
  },
  {
    id: 2,
    category: 'Donations',
    question: 'Can I designate my donation to a specific program?',
    answer: 'Yes! When you donate, you can choose to support a specific program. We will send you monthly updates on how your contribution is making an impact in that area.',
  },
  {
    id: 3,
    category: 'Tax',
    question: 'Are donations tax-deductible?',
    answer: 'Yes, JHCO is a registered 501(c)(3) nonprofit. All donations are fully tax-deductible. We will send you a receipt for your records.',
  },
  {
    id: 4,
    category: 'Tax',
    question: 'How do I file taxes for my donation?',
    answer: 'Keep the receipt we send after each donation. Use it when itemizing deductions on Schedule A of your tax return. Contact your tax advisor for specific guidance.',
  },
  {
    id: 5,
    category: 'Volunteering',
    question: 'Can I volunteer with JHCO?',
    answer: 'Absolutely! We have opportunities for both in-person and remote volunteering. Check our Volunteer Opportunities page to see current openings and apply.',
  },
  {
    id: 6,
    category: 'Volunteering',
    question: 'What volunteer positions are available?',
    answer: 'We have roles in fields operations, healthcare, education, administration, fundraising, and social media. Positions are available across our 30+ countries.',
  },
  {
    id: 7,
    category: 'Partnerships',
    question: 'Can my company partner with JHCO?',
    answer: 'Yes! We work with corporations for cause marketing, employee volunteering, and CSR programs. Contact our partnerships team at partnerships@jhco.org.jo',
  },
  {
    id: 8,
    category: 'Recurring',
    question: 'How do I set up recurring donations?',
    answer: 'After making your first donation, you can opt into auto-recurring donations. Choose monthly, quarterly, or annual frequency. You can modify or cancel anytime.',
  },
  {
    id: 9,
    category: 'Impact',
    question: 'How do you measure impact?',
    answer: 'We track quantitative metrics (beneficiaries served, outcomes) and qualitative feedback (beneficiary stories). We use third-party evaluation and publish results annually.',
  },
  {
    id: 10,
    category: 'Transparency',
    question: 'How transparent is JHCO about finances?',
    answer: 'Very. We publish annual audited financial statements, detailed program reports, and impact data. Visit our Financial Transparency hub to see all documents.',
  },
];

export default function FAQSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (!searchTerm.trim()) return faqData;
    const lower = searchTerm.toLowerCase();
    return faqData.filter(
      (faq) =>
        faq.question.toLowerCase().includes(lower) ||
        faq.answer.toLowerCase().includes(lower) ||
        faq.category.toLowerCase().includes(lower)
    );
  }, [searchTerm]);

  const categories = ['All', ...new Set(faqData.map((f) => f.category))];

  return (
    <div className="bg-cream-luxury py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-marcellus text-navy-deep mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Find answers to common questions about our work</p>
        </div>

        {/* Search */}
        <div className="mb-8 relative">
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-4 border-2 border-gold-primary/30 rounded-lg focus:border-gold-primary focus:outline-none text-lg"
          />
          <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
        </div>

        {/* Results Info */}
        {searchTerm && (
          <p className="text-gray-600 mb-6">Found {filtered.length} result{filtered.length !== 1 ? 's' : ''}</p>
        )}

        {/* FAQs */}
        <div className="space-y-3 bg-white rounded-lg shadow-elegant p-1">
          {filtered.length > 0 ? (
            filtered.map((faq) => (
              <div key={faq.id} className="border border-border-light rounded-lg">
                <button
                  onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                  className="w-full text-left px-6 py-5 hover:bg-cream-luxury/50 transition flex items-center justify-between"
                >
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-wider text-gold-primary font-semibold mb-2">{faq.category}</p>
                    <p className="text-lg font-semibold text-navy-deep">{faq.question}</p>
                  </div>
                  <span className="text-2xl text-gold-primary ml-4 flex-shrink-0">
                    {expandedId === faq.id ? '−' : '+'}
                  </span>
                </button>

                {expandedId === faq.id && (
                  <div className="px-6 py-5 bg-cream-luxury/30 border-t border-border-light">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No results found for "{searchTerm}"</p>
              <p className="text-gray-500 text-sm mt-2">Try different keywords or browse all FAQs</p>
            </div>
          )}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 bg-navy-deep rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-marcellus mb-3">Didn't find what you're looking for?</h3>
          <p className="text-gray-300 mb-6">Contact us directly for personalized assistance</p>
          <button className="bg-gold-primary hover:bg-gold-light text-navy-deep font-bold px-8 py-3 rounded-lg transition">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}
