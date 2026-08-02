// Google Analytics 4 Integration
export function trackEvent(
  eventName: string,
  eventData?: Record<string, any>
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, eventData);
  }
}

export function trackDonation(amount: number, currency: string = 'USD') {
  trackEvent('donation', {
    value: amount,
    currency,
    transaction_id: Math.random().toString(36).substring(7),
  });
}

export function trackVolunteerSignup(role: string) {
  trackEvent('volunteer_signup', {
    role,
  });
}

export function trackFormSubmission(formType: string) {
  trackEvent('form_submit', {
    form_type: formType,
  });
}

export function trackPageView(pagePath: string, pageTitle: string) {
  trackEvent('page_view', {
    page_path: pagePath,
    page_title: pageTitle,
  });
}

export function trackSearch(searchQuery: string, resultsCount: number) {
  trackEvent('search', {
    search_term: searchQuery,
    results_count: resultsCount,
  });
}

export function trackOutboundClick(url: string) {
  trackEvent('outbound_click', {
    link_url: url,
  });
}

export function trackConversion(conversionType: string, value?: number) {
  trackEvent('conversion', {
    conversion_type: conversionType,
    value,
  });
}
