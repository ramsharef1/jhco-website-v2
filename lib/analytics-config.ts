// Analytics configuration and setup instructions

export const ANALYTICS_CONFIG = {
  // Google Analytics 4
  GA4: {
    enabled: !!process.env.NEXT_PUBLIC_GA_ID,
    measurementId: process.env.NEXT_PUBLIC_GA_ID,
    documentation: 'https://analytics.google.com',
    setup: [
      '1. Go to https://analytics.google.com',
      '2. Create a new GA4 property for jhco.org.jo',
      '3. Add web data stream',
      '4. Copy Measurement ID (G-XXXXXXXXXX)',
      '5. Set NEXT_PUBLIC_GA_ID environment variable',
      '6. Deploy to activate',
    ],
  },

  // Google Search Console
  GSC: {
    enabled: false,
    domain: 'jhco.org.jo',
    documentation: 'https://search.google.com/search-console',
    setup: [
      '1. Go to https://search.google.com/search-console',
      '2. Add property: jhco.org.jo',
      '3. Verify ownership (add HTML file / DNS record)',
      '4. Submit XML sitemap: /sitemap.xml',
      '5. Monitor search analytics',
      '6. Fix crawl errors & coverage issues',
    ],
  },

  // Google Tag Manager (optional enhancement)
  GTM: {
    enabled: false,
    containerId: process.env.NEXT_PUBLIC_GTM_ID,
    documentation: 'https://tagmanager.google.com',
    setup: [
      '1. Create GTM account at https://tagmanager.google.com',
      '2. Create web container for jhco.org.jo',
      '3. Add GA4 tag to container',
      '4. Create conversion tracking tags',
      '5. Copy Container ID (GTM-XXXXXXXX)',
      '6. Set NEXT_PUBLIC_GTM_ID environment variable',
    ],
  },

  // Sentry Error Tracking (next task)
  SENTRY: {
    enabled: false,
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    documentation: 'https://sentry.io',
    setup: [
      '1. Create account at https://sentry.io',
      '2. Create project: Next.js (javascript)',
      '3. Copy DSN URL',
      '4. Set NEXT_PUBLIC_SENTRY_DSN environment variable',
      '5. Install @sentry/nextjs package',
      '6. Configure sentry.client.config.ts & sentry.server.config.ts',
    ],
  },
};

// Custom events tracked by the system
export const TRACKED_EVENTS = {
  donation: ['started', 'completed', 'failed', 'cancelled'],
  volunteer: ['signup_started', 'signup_completed', 'profile_completed'],
  partnership: ['inquiry', 'tier_selected', 'form_submitted'],
  engagement: ['resource_download', 'page_read', 'video_played'],
  search: ['site_search', 'no_results', 'filter_applied'],
  conversion: ['contact_form', 'newsletter_signup', 'event_registration'],
  error: ['page_error', 'form_error', 'api_error'],
};

// Conversion tracking funnels
export const CONVERSION_FUNNELS = {
  donation: ['homepage_visit', 'donate_click', 'form_open', 'form_complete', 'payment_success'],
  volunteer: ['homepage_visit', 'volunteer_click', 'signup_open', 'form_complete', 'confirmation'],
  partnership: ['about_visit', 'partnership_click', 'inquiry_form_open', 'inquiry_submit', 'follow_up_call'],
};

// Implementation checklist
export const IMPLEMENTATION_CHECKLIST = [
  {
    task: 'Set Google Analytics Measurement ID',
    status: process.env.NEXT_PUBLIC_GA_ID ? '✅ Complete' : '❌ Pending',
    action: 'Contact client for GA4 Measurement ID',
  },
  {
    task: 'Implement custom event tracking',
    status: '✅ Complete (lib/analytics.ts)',
    action: 'Events ready to use via analytics.* functions',
  },
  {
    task: 'Add enhanced analytics component',
    status: '✅ Complete (AnalyticsEnhanced.tsx)',
    action: 'Tracks scroll, time on page, outbound links',
  },
  {
    task: 'Verify tracking on live site',
    status: '❌ Pending',
    action: 'Deploy & test with Google Analytics Debugger',
  },
  {
    task: 'Set up Google Search Console',
    status: '❌ Pending',
    action: 'Verify domain & submit sitemap',
  },
  {
    task: 'Create conversion tracking funnels',
    status: '❌ Pending',
    action: 'Set up in Google Analytics 4',
  },
  {
    task: 'Set up Sentry error tracking',
    status: '❌ Pending',
    action: 'Next phase - create Sentry account',
  },
];
