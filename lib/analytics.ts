// Analytics tracking utility — use throughout the app to log meaningful events

export type EventCategory =
  | 'donation'
  | 'volunteer'
  | 'partnership'
  | 'engagement'
  | 'search'
  | 'conversion'
  | 'error';

export interface AnalyticsEvent {
  category: EventCategory;
  action: string;
  label?: string;
  value?: number;
  properties?: Record<string, string | number | boolean>;
}

export function trackEvent(event: AnalyticsEvent) {
  if (typeof window === 'undefined') return;

  const { category, action, label, value, properties } = event;

  // Send to Google Analytics
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
      ...properties,
    });
  }

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Analytics] ${category}: ${action}`, { label, value, properties });
  }
}

// Common tracking functions for easy use
export const analytics = {
  // Donation tracking
  donationStarted: (amount?: number, method?: string) =>
    trackEvent({
      category: 'donation',
      action: 'donate_started',
      label: method,
      value: amount,
      properties: { timestamp: new Date().toISOString() },
    }),

  donationCompleted: (amount: number, method: string) =>
    trackEvent({
      category: 'donation',
      action: 'donate_completed',
      label: method,
      value: amount,
      properties: {
        timestamp: new Date().toISOString(),
        conversion: true,
      },
    }),

  // Volunteer tracking
  volunteerSignupStarted: () =>
    trackEvent({
      category: 'volunteer',
      action: 'volunteer_signup_started',
      properties: { timestamp: new Date().toISOString() },
    }),

  volunteerSignupCompleted: (programType?: string) =>
    trackEvent({
      category: 'volunteer',
      action: 'volunteer_signup_completed',
      label: programType,
      properties: {
        timestamp: new Date().toISOString(),
        conversion: true,
      },
    }),

  // Partnership tracking
  partnershipInquiry: (tier?: string) =>
    trackEvent({
      category: 'partnership',
      action: 'partnership_inquiry',
      label: tier,
      properties: { timestamp: new Date().toISOString() },
    }),

  // Engagement tracking
  resourceDownload: (resourceType: string, title: string) =>
    trackEvent({
      category: 'engagement',
      action: 'resource_download',
      label: resourceType,
      value: 1,
      properties: { resource_title: title },
    }),

  pageRead: (pagePath: string, timeSpent: number) =>
    trackEvent({
      category: 'engagement',
      action: 'page_read',
      label: pagePath,
      value: Math.round(timeSpent / 1000), // Convert to seconds
    }),

  videoPlayed: (videoTitle: string) =>
    trackEvent({
      category: 'engagement',
      action: 'video_played',
      label: videoTitle,
    }),

  // Search tracking
  siteSearch: (query: string, resultsCount: number) =>
    trackEvent({
      category: 'search',
      action: 'site_search',
      label: query,
      value: resultsCount,
    }),

  // Error tracking
  pageError: (errorMessage: string, errorCode?: string) =>
    trackEvent({
      category: 'error',
      action: 'page_error',
      label: errorCode,
      properties: { error_message: errorMessage },
    }),

  // Custom conversion tracking
  conversion: (conversionType: string, value?: number) =>
    trackEvent({
      category: 'conversion',
      action: conversionType,
      value,
      properties: {
        timestamp: new Date().toISOString(),
        is_conversion: true,
      },
    }),
};

// Declare gtag global for TypeScript
declare global {
  interface Window {
    gtag?: (command: string, ...args: any[]) => void;
    dataLayer?: any[];
  }
}
