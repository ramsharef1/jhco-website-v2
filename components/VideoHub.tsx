'use client';

import { useState } from 'react';

const videos = [
  {
    id: 1,
    title: 'Field Operations Tour - Yemen',
    category: 'Operations',
    duration: '8:42',
    views: '12.5K',
    thumbnail: '/media/video-1.jpg',
    description: 'See how our teams operate in challenging environments',
  },
  {
    id: 2,
    title: 'Beneficiary Story - Layla\'s Journey',
    category: 'Stories',
    duration: '6:15',
    views: '28.3K',
    thumbnail: '/media/video-2.jpg',
    description: 'From refugee to healthcare worker - Layla\'s inspiring story',
  },
  {
    id: 3,
    title: 'Behind the Scenes - Aid Distribution',
    category: 'Operations',
    duration: '5:30',
    views: '8.9K',
    thumbnail: '/media/video-3.jpg',
    description: 'Watch emergency food aid being distributed to families in need',
  },
  {
    id: 4,
    title: 'Meet Our Team Leaders',
    category: 'Team',
    duration: '12:05',
    views: '5.2K',
    thumbnail: '/media/video-4.jpg',
    description: 'Hear from team leaders working in 30+ countries',
  },
  {
    id: 5,
    title: 'Education Program Impact',
    category: 'Impact',
    duration: '7:20',
    views: '15.8K',
    thumbnail: '/media/video-5.jpg',
    description: 'How education programs transform lives in refugee camps',
  },
  {
    id: 6,
    title: 'Your Donation Impact - Monthly Update',
    category: 'Impact',
    duration: '4:45',
    views: '22.1K',
    thumbnail: '/media/video-6.jpg',
    description: 'See exactly how donations made this month helped communities',
  },
];

const categories = ['All Videos', 'Stories', 'Operations', 'Impact', 'Team'];

export default function VideoHub() {
  const [selectedCategory, setSelectedCategory] = useState('All Videos');
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  const filtered = selectedCategory === 'All Videos'
    ? videos
    : videos.filter(v => v.category === selectedCategory.slice(0, -1)); // Remove 's'

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-marcellus text-navy-deep mb-4">Video Stories</h2>
          <p className="text-xl text-gray-600">Watch real stories of impact from around the world</p>
        </div>

        {/* Featured Video Player */}
        <div className="mb-12 bg-navy-deep rounded-lg overflow-hidden aspect-video flex items-center justify-center">
          <div className="text-center text-white">
            <div className="text-6xl mb-4">▶</div>
            <p className="text-xl">{selectedVideo.title}</p>
            <p className="text-sm text-gray-300 mt-2">{selectedVideo.duration}</p>
          </div>
        </div>

        {/* Video Info */}
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-marcellus text-navy-deep mb-2">{selectedVideo.title}</h3>
            <p className="text-gray-600">{selectedVideo.description}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600 mb-2">{selectedVideo.views} views</p>
            <button className="bg-gold-primary hover:bg-gold-light text-navy-deep font-bold px-6 py-3 rounded-lg transition">
              Subscribe to Updates
            </button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                selectedCategory === cat
                  ? 'bg-gold-primary text-navy-deep'
                  : 'bg-cream-luxury text-navy-deep border-2 border-gold-primary/30 hover:border-gold-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((video) => (
            <button
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className={`text-left group rounded-lg overflow-hidden border-2 transition ${
                selectedVideo.id === video.id
                  ? 'border-gold-primary'
                  : 'border-border-light hover:border-gold-primary'
              }`}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-navy-deep flex items-center justify-center text-white text-4xl group-hover:bg-navy-royal transition">
                ▶
                <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-xs text-white">
                  {video.duration}
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <p className="text-xs uppercase tracking-wider text-gold-primary font-semibold mb-2">{video.category}</p>
                <h4 className="font-semibold text-navy-deep mb-2 group-hover:text-gold-primary transition">{video.title}</h4>
                <p className="text-sm text-gray-600 line-clamp-2">{video.description}</p>
                <p className="text-xs text-gray-500 mt-3">{video.views} views</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
