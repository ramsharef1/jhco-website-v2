'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { analytics } from '@/lib/analytics';

// Enhanced analytics tracking: scroll depth, time on page, click tracking
export default function AnalyticsEnhanced() {
  const pathname = usePathname();
  const pageStartTimeRef = useRef<number>(Date.now());
  const scrollTrackedRef = useRef<Set<number>>(new Set());

  // Track time spent on page
  useEffect(() => {
    pageStartTimeRef.current = Date.now();
    scrollTrackedRef.current.clear();

    return () => {
      const timeSpent = Date.now() - pageStartTimeRef.current;
      if (timeSpent > 1000) {
        // Only track if spent more than 1 second
        analytics.pageRead(pathname, timeSpent);
      }
    };
  }, [pathname]);

  // Track scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );

      // Track at 25%, 50%, 75%, 100%
      [25, 50, 75, 100].forEach((threshold) => {
        if (scrollPercent >= threshold && !scrollTrackedRef.current.has(threshold)) {
          scrollTrackedRef.current.add(threshold);
          if (window.gtag) {
            window.gtag('event', 'scroll_depth', {
              event_category: 'engagement',
              scroll_depth: `${threshold}%`,
              page_path: pathname,
            });
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Track outbound links
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target || !target.href) return;

      const url = new URL(target.href);
      const isExternal = url.hostname !== window.location.hostname;

      if (isExternal) {
        if (window.gtag) {
          window.gtag('event', 'click', {
            event_category: 'engagement',
            event_label: 'outbound_link',
            value: url.href,
          });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
}
