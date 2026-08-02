/**
 * Web Vitals and Performance Monitoring
 * Tracks Core Web Vitals (LCP, FID, CLS) for performance monitoring
 */

export interface WebVitalMetric {
  name: string;
  value: number;
  unit: string;
  rating: 'good' | 'needs-improvement' | 'poor';
  timestamp: number;
}

// Core Web Vitals thresholds (2024 standards)
export const VITALS_THRESHOLDS = {
  LCP: { good: 2500, needsImprovement: 4000 }, // Largest Contentful Paint
  FID: { good: 100, needsImprovement: 300 }, // First Input Delay
  INP: { good: 200, needsImprovement: 500 }, // Interaction to Next Paint (replaces FID)
  CLS: { good: 0.1, needsImprovement: 0.25 }, // Cumulative Layout Shift
  TTFB: { good: 800, needsImprovement: 1800 }, // Time to First Byte
};

export function getRating(
  metricName: string,
  value: number
): 'good' | 'needs-improvement' | 'poor' {
  const threshold = VITALS_THRESHOLDS[metricName as keyof typeof VITALS_THRESHOLDS];
  if (!threshold) return 'poor';

  if (value <= threshold.good) return 'good';
  if (value <= threshold.needsImprovement) return 'needs-improvement';
  return 'poor';
}

export function reportWebVitals(metric: WebVitalMetric) {
  // Send to analytics
  if (window.gtag) {
    window.gtag('event', 'web_vitals', {
      event_category: 'web_vitals',
      event_label: metric.name,
      value: Math.round(metric.value),
      metric_rating: metric.rating,
    });
  }

  // Log in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Web Vitals] ${metric.name}: ${metric.value.toFixed(2)}${metric.unit} (${metric.rating})`);
  }
}

// Measure Navigation Timing
export function measureNavigationTiming() {
  if (typeof window === 'undefined' || !window.performance) return;

  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  if (!navigation) return;

  const metrics = {
    TTFB: navigation.responseStart - navigation.fetchStart,
    DNS: navigation.domainLookupEnd - navigation.domainLookupStart,
    TCP: navigation.connectEnd - navigation.connectStart,
    Request: navigation.responseStart - navigation.requestStart,
    Response: navigation.responseEnd - navigation.responseStart,
    DOMInteractive: navigation.domInteractive - navigation.fetchStart,
    DOMComplete: navigation.domComplete - navigation.fetchStart,
  };

  Object.entries(metrics).forEach(([name, value]) => {
    if (window.gtag) {
      window.gtag('event', 'page_timing', {
        event_category: 'performance',
        timing_name: name,
        value: Math.round(value),
      });
    }
  });

  return metrics;
}

// Measure Largest Contentful Paint
export function measureLCP(callback: (lcp: WebVitalMetric) => void) {
  if (typeof window === 'undefined') return;

  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as any;

      const metric: WebVitalMetric = {
        name: 'LCP',
        value: lastEntry.renderTime || lastEntry.loadTime,
        unit: 'ms',
        rating: getRating('LCP', lastEntry.renderTime || lastEntry.loadTime),
        timestamp: Date.now(),
      };

      callback(metric);
    });

    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  } catch (e) {
    console.warn('LCP measurement not supported', e);
  }
}

// Measure Cumulative Layout Shift
export function measureCLS(callback: (cls: WebVitalMetric) => void) {
  if (typeof window === 'undefined') return;

  let clsValue = 0;

  try {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
          callback({
            name: 'CLS',
            value: clsValue,
            unit: '',
            rating: getRating('CLS', clsValue),
            timestamp: Date.now(),
          });
        }
      }
    });

    observer.observe({ entryTypes: ['layout-shift'] });
  } catch (e) {
    console.warn('CLS measurement not supported', e);
  }
}

// Measure First Input Delay / Interaction to Next Paint
export function measureINP(callback: (inp: WebVitalMetric) => void) {
  if (typeof window === 'undefined') return;

  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as any;

      const metric: WebVitalMetric = {
        name: 'INP',
        value: lastEntry.processingDuration,
        unit: 'ms',
        rating: getRating('INP', lastEntry.processingDuration),
        timestamp: Date.now(),
      };

      callback(metric);
    });

    observer.observe({ entryTypes: ['first-input', 'interaction'] });
  } catch (e) {
    console.warn('INP measurement not supported', e);
  }
}

// Performance benchmarks
export const PERFORMANCE_BENCHMARKS = {
  lighthouse: {
    performance: 90,
    accessibility: 90,
    bestPractices: 90,
    seo: 95,
  },
  pageLoad: {
    target: '< 3 seconds',
    threshold: 3000, // ms
  },
  firstContentfulPaint: {
    target: '< 1.8 seconds',
    threshold: 1800, // ms
  },
  largestContentfulPaint: {
    target: '< 2.5 seconds',
    threshold: 2500, // ms
  },
  cumulativeLayoutShift: {
    target: '< 0.1',
    threshold: 0.1,
  },
};
