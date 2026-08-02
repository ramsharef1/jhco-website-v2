'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { Locale } from '@/lib/i18n';
import { MEDIA_LIBRARY, MEDIA_CATEGORIES, type MediaItem } from '@/lib/mediaData';

interface MediaGalleryProps {
  locale: Locale;
  categoryId?: string;
}

export default function MediaGallery({ locale, categoryId }: MediaGalleryProps) {
  const ar = locale === 'ar';
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryId || 'all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxItem, setLightboxItem] = useState<MediaItem | null>(null);

  const filteredMedia =
    selectedCategory === 'all'
      ? MEDIA_LIBRARY
      : MEDIA_LIBRARY.filter(item => item.category === selectedCategory);

  const handleOpenLightbox = (item: MediaItem) => {
    setLightboxItem(item);
    setLightboxOpen(true);
  };

  return (
    <>
      {/* Category Filter */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-[#0a1428]">
            {ar ? 'الفئات' : 'Categories'}
          </h2>
          <span className="text-sm text-[#6b6b6b]">
            {filteredMedia.length} {ar ? 'عناصر' : 'items'}
          </span>
        </div>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              selectedCategory === 'all'
                ? 'bg-[#d4af37] text-[#0a1428]'
                : 'bg-[#f9f7f4] text-[#0a1428] border border-[#e8e4db] hover:border-[#d4af37]'
            }`}
          >
            {ar ? 'الكل' : 'All'}
          </button>

          {MEDIA_CATEGORIES.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2 ${
                selectedCategory === category.id
                  ? 'bg-[#d4af37] text-[#0a1428]'
                  : 'bg-[#f9f7f4] text-[#0a1428] border border-[#e8e4db] hover:border-[#d4af37]'
              }`}
            >
              <span>{category.icon}</span>
              {ar ? category.nameAr : category.name}
              <span className="text-xs opacity-75">({category.itemCount})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {filteredMedia.map(item => (
          <div
            key={item.id}
            className="group bg-white rounded-lg overflow-hidden shadow-elegant hover:shadow-premium transition cursor-pointer border border-[#e8e4db] hover:border-[#d4af37]"
            onClick={() => handleOpenLightbox(item)}
          >
            {/* Thumbnail */}
            <div className="relative h-64 bg-[#f3f4f6] overflow-hidden">
              <img
                src={item.thumbnail}
                alt={ar ? item.titleAr : item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition"
              />
              {/* Type Badge */}
              <div className="absolute top-4 right-4 bg-[#d4af37] text-[#0a1428] px-3 py-1 rounded-full text-xs font-bold">
                {item.type === 'video' ? '▶️ Video' : '📷 Photo'}
              </div>

              {/* Download Badge */}
              {item.downloadable && (
                <div className="absolute bottom-4 left-4 bg-white text-[#0a1428] px-3 py-1 rounded-full text-xs font-bold">
                  ⬇️ {ar ? 'تحميل' : 'Download'}
                </div>
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition opacity-0 group-hover:opacity-100 flex items-center justify-center">
                <span className="text-white text-4xl">👁️</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="font-bold text-[#0a1428] mb-2 group-hover:text-[#a89830] transition line-clamp-2">
                {ar ? item.titleAr : item.title}
              </h3>
              <p className="text-sm text-[#6b6b6b] mb-4 line-clamp-2">
                {ar ? item.descriptionAr : item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {(ar ? item.tagsAr : item.tags).slice(0, 2).map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-[#f9f7f4] text-[#a89830] px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Date */}
              <div className="text-xs text-[#6b6b6b]">
                📅 {new Date(item.date).toLocaleDateString(ar ? 'ar-JO' : 'en-US')}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && lightboxItem && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <div className="bg-white rounded-lg overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="sticky top-0 right-0 w-full text-right p-4 bg-[#f9f7f4] border-b border-[#e8e4db] text-2xl text-[#a89830] hover:text-[#0a1428] transition"
            >
              ✕
            </button>

            {/* Media */}
            <div className="bg-black flex items-center justify-center min-h-[400px]">
              {lightboxItem.type === 'video' ? (
                <iframe
                  src={lightboxItem.url}
                  className="w-full h-[400px]"
                  allowFullScreen
                  title={lightboxItem.title}
                />
              ) : (
                <img
                  src={lightboxItem.url}
                  alt={ar ? lightboxItem.titleAr : lightboxItem.title}
                  className="max-w-full max-h-[500px]"
                />
              )}
            </div>

            {/* Details */}
            <div className="p-8 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-[#0a1428] mb-2">
                  {ar ? lightboxItem.titleAr : lightboxItem.title}
                </h2>
                <p className="text-[#6b6b6b] leading-relaxed mb-4">
                  {ar ? lightboxItem.descriptionAr : lightboxItem.description}
                </p>
                {lightboxItem.credits && (
                  <p className="text-sm text-[#a89830] italic">📷 {lightboxItem.credits}</p>
                )}
              </div>

              {/* Metadata */}
              <div className="grid grid-cols-2 gap-4 py-4 border-y border-[#e8e4db]">
                <div>
                  <span className="text-xs text-[#6b6b6b] uppercase font-bold">
                    {ar ? 'التاريخ' : 'Date'}
                  </span>
                  <p className="text-[#0a1428] font-semibold mt-1">
                    {new Date(lightboxItem.date).toLocaleDateString(ar ? 'ar-JO' : 'en-US')}
                  </p>
                </div>
                <div>
                  <span className="text-xs text-[#6b6b6b] uppercase font-bold">
                    {ar ? 'النوع' : 'Type'}
                  </span>
                  <p className="text-[#0a1428] font-semibold mt-1">
                    {lightboxItem.type === 'video' ? '🎬 Video' : '📷 Photo'}
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div>
                <span className="text-xs text-[#6b6b6b] uppercase font-bold block mb-3">
                  {ar ? 'الكلمات' : 'Tags'}
                </span>
                <div className="flex flex-wrap gap-2">
                  {(ar ? lightboxItem.tagsAr : lightboxItem.tags).map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#f9f7f4] text-[#a89830] px-4 py-2 rounded-lg border border-[#e8e4db]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Download Button */}
              {lightboxItem.downloadable && (
                <div className="pt-4">
                  <a
                    href={lightboxItem.url}
                    download
                    className="inline-block px-8 py-3 bg-[#d4af37] text-[#0a1428] font-bold rounded-lg hover:bg-[#e8c547] transition"
                  >
                    ⬇️ {ar ? 'تحميل الصورة الأصلية' : 'Download Original'}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
