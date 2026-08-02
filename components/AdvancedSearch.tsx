'use client';

import { useState, useCallback, useMemo } from 'react';
import type { Locale } from '@/lib/i18n';
import {
  GLOBAL_SEARCH_FILTERS,
  PROGRAM_SEARCH_FILTERS,
  OPPORTUNITY_SEARCH_FILTERS,
  MOCK_SEARCH_RESULTS,
  SEARCH_SUGGESTIONS,
  filterResults,
  rankResults,
  getFilterSuggestions,
} from '@/lib/searchData';

interface AdvancedSearchProps {
  locale: Locale;
  defaultCategory?: string;
}

export default function AdvancedSearch({ locale, defaultCategory = 'all' }: AdvancedSearchProps) {
  const ar = locale === 'ar';
  const [query, setQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({});
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);

  // Get category-specific filters
  const categoryFilters = useMemo(() => {
    const base = [...GLOBAL_SEARCH_FILTERS];
    if (selectedCategory === 'programs') return [...base, ...PROGRAM_SEARCH_FILTERS];
    if (selectedCategory === 'opportunities') return [...base, ...OPPORTUNITY_SEARCH_FILTERS];
    return base;
  }, [selectedCategory]);

  // Filter and rank results
  const results = useMemo(() => {
    let filtered = MOCK_SEARCH_RESULTS;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(r => r.category === selectedCategory);
    }

    // Filter by active filters
    filtered = filterResults(filtered, activeFilters);

    // Filter by query (simple text match)
    if (query) {
      const q = query.toLowerCase();
      filtered = filtered.filter(
        r =>
          r.title.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q) ||
          r.titleAr.includes(query)
      );
    }

    return rankResults(filtered);
  }, [query, selectedCategory, activeFilters]);

  const handleFilterChange = useCallback((filterId: string, value: string, checked: boolean) => {
    setActiveFilters(prev => {
      const current = prev[filterId] || [];
      if (checked) {
        return { ...prev, [filterId]: [...current, value] };
      } else {
        return { ...prev, [filterId]: current.filter(v => v !== value) };
      }
    });
  }, []);

  const clearFilters = useCallback(() => {
    setActiveFilters({});
  }, []);

  const filteredSuggestions = query
    ? SEARCH_SUGGESTIONS.filter(s =>
        s.text.toLowerCase().includes(query.toLowerCase()) ||
        s.textAr.includes(query)
      )
    : SEARCH_SUGGESTIONS.slice(0, 5);

  return (
    <div className="space-y-8">
      {/* Search Bar */}
      <div className="relative">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <input
              type="text"
              value={query}
              onChange={e => {
                setQuery(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              placeholder={ar ? 'ابحث عن البرامج والفرص والموارد...' : 'Search programs, opportunities, resources...'}
              className="w-full px-6 py-4 border-2 border-[#e8e4db] rounded-lg focus:border-[#d4af37] focus:outline-none text-lg"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl">🔍</span>
          </div>
        </div>

        {/* Search Suggestions Dropdown */}
        {showSuggestions && query && filteredSuggestions.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-[#e8e4db] rounded-lg shadow-lg z-50">
            {filteredSuggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => {
                  setQuery(suggestion.text);
                  setShowSuggestions(false);
                }}
                className="w-full px-6 py-3 text-left hover:bg-[#f9f7f4] border-b border-[#e8e4db] last:border-0 transition"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[#0a1428]">{ar ? suggestion.textAr : suggestion.text}</span>
                  <span className="text-xs text-[#a89830]">{suggestion.frequency} searches</span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Category Filter */}
          <div className="bg-[#f9f7f4] rounded-lg p-6 border border-[#e8e4db]">
            <h3 className="font-bold text-[#0a1428] mb-4">
              {ar ? 'الفئة' : 'Category'}
            </h3>
            <div className="space-y-3">
              {[
                { value: 'all', label: ar ? 'الكل' : 'All' },
                { value: 'news', label: ar ? 'الأخبار' : 'News' },
                { value: 'programs', label: ar ? 'البرامج' : 'Programs' },
                { value: 'opportunities', label: ar ? 'الفرص' : 'Opportunities' },
                { value: 'resources', label: ar ? 'الموارد' : 'Resources' },
              ].map(cat => (
                <label key={cat.value} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    value={cat.value}
                    checked={selectedCategory === cat.value}
                    onChange={e => setSelectedCategory(e.target.value)}
                    className="w-4 h-4 accent-[#d4af37]"
                  />
                  <span className="text-[#3d3d3d]">{cat.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Dynamic Filters */}
          {categoryFilters.map(filter => (
            <div
              key={filter.id}
              className="bg-[#f9f7f4] rounded-lg p-6 border border-[#e8e4db]"
            >
              <h4 className="font-bold text-[#0a1428] mb-4">
                {ar ? filter.labelAr : filter.label}
              </h4>

              {filter.type === 'checkbox' && filter.options && (
                <div className="space-y-3">
                  {filter.options.map(option => (
                    <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={(activeFilters[filter.id] || []).includes(option.value)}
                        onChange={e =>
                          handleFilterChange(filter.id, option.value, e.target.checked)
                        }
                        className="w-4 h-4 accent-[#d4af37]"
                      />
                      <div className="flex-1">
                        <span className="text-[#3d3d3d]">
                          {ar ? option.labelAr : option.label}
                        </span>
                        <span className="text-xs text-[#a89830] ml-2">({option.count})</span>
                      </div>
                    </label>
                  ))}
                </div>
              )}

              {filter.type === 'select' && filter.options && (
                <select
                  value={(activeFilters[filter.id] || [])[0] || ''}
                  onChange={e =>
                    handleFilterChange(filter.id, e.target.value, e.target.value !== '')
                  }
                  className="w-full px-3 py-2 border border-[#e8e4db] rounded text-[#0a1428]"
                >
                  <option value="">{ar ? 'اختر...' : 'Select...'}</option>
                  {filter.options.map(option => (
                    <option key={option.value} value={option.value}>
                      {ar ? option.labelAr : option.label}
                    </option>
                  ))}
                </select>
              )}
            </div>
          ))}

          {/* Clear Filters */}
          {Object.keys(activeFilters).length > 0 && (
            <button
              onClick={clearFilters}
              className="w-full px-4 py-2 bg-white text-[#a89830] border border-[#d4af37] rounded-lg hover:bg-[#f3f4f6] transition font-semibold"
            >
              {ar ? 'مسح المرشحات' : 'Clear Filters'}
            </button>
          )}
        </div>

        {/* Search Results */}
        <div className="lg:col-span-3">
          {/* Results Header */}
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-[#0a1428]">
              {ar ? 'نتائج البحث' : 'Search Results'}
            </h2>
            <span className="text-[#6b6b6b]">
              {results.length} {ar ? 'نتيجة' : 'results'}
            </span>
          </div>

          {results.length > 0 ? (
            <div className="space-y-4">
              {results.map((result, index) => (
                <a
                  key={result.id}
                  href={result.url}
                  className="block p-6 bg-white border border-[#e8e4db] rounded-lg hover:border-[#d4af37] hover:shadow-elegant transition"
                >
                  <div className="flex gap-4">
                    <span className="text-3xl flex-shrink-0">{result.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-lg font-bold text-[#0a1428] hover:text-[#a89830] transition">
                          {ar ? result.titleAr : result.title}
                        </h3>
                        <span className="text-xs bg-[#f9f7f4] text-[#6b6b6b] px-3 py-1 rounded flex-shrink-0">
                          {result.type}
                        </span>
                      </div>
                      <p className="text-[#6b6b6b] mb-3">
                        {ar ? result.descriptionAr : result.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-[#a89830]">
                        {result.date && (
                          <span>
                            📅 {new Date(result.date).toLocaleDateString(ar ? 'ar-JO' : 'en-US')}
                          </span>
                        )}
                        <span>
                          ⭐ {Math.round(result.relevance * 100)}% {ar ? 'صلة' : 'match'}
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <span className="text-5xl mb-4">🔍</span>
              <h3 className="text-xl font-bold text-[#0a1428] mb-2">
                {ar ? 'لم تُعثر على نتائج' : 'No Results Found'}
              </h3>
              <p className="text-[#6b6b6b]">
                {ar
                  ? 'جرب تغيير معاييرك البحث أو تعديل المرشحات'
                  : 'Try adjusting your search terms or filters'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
