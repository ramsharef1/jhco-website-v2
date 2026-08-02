'use client';

import { useEffect } from 'react';
import { measureLCP, measureCLS, measureINP, measureNavigationTiming, reportWebVitals } from '@/lib/performance';

/**
 * Automatically monitors Core Web Vitals and reports them
 * Add this component to your layout to track performance
 */
export default function WebVitalsMonitor() {
  useEffect(() => {
    // Measure LCP (Largest Contentful Paint)
    measureLCP(reportWebVitals);

    // Measure CLS (Cumulative Layout Shift)
    measureCLS(reportWebVitals);

    // Measure INP (Interaction to Next Paint)
    measureINP(reportWebVitals);

    // Measure navigation timing after page load
    window.addEventListener('load', () => {
      setTimeout(measureNavigationTiming, 0);
    });
  }, []);

  return null;
}
