import Image from 'next/image';
import { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  objectFit?: 'contain' | 'cover' | 'fill';
  quality?: number;
}

/**
 * Optimized image component with:
 * - Automatic WebP conversion
 * - Responsive sizing
 * - Lazy loading (except priority images)
 * - Fallback handling
 * - AVIF support for newer browsers
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  objectFit = 'cover',
  quality = 85,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // Use placeholder while loading
  const placeholderSrc = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'%3E%3Crect fill='%23f3f4f6' width='1200' height='600'/%3E%3C/svg%3E`;

  return (
    <div className={`relative overflow-hidden ${className || ''}`}>
      <Image
        src={error ? placeholderSrc : src}
        alt={alt}
        width={width || 1200}
        height={height || 600}
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        quality={quality}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setError(true);
          setIsLoading(false);
        }}
        className={`w-full h-full transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          objectFit,
          objectPosition: 'center',
        }}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
    </div>
  );
}
