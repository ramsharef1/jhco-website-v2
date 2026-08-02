import { analytics } from './analytics';

// Sentry will be initialized after @sentry/nextjs is installed
// For now, provide stub functions that work without it

let Sentry: any = null;

try {
  // Try to load Sentry if installed
  require('@sentry/nextjs');
} catch (e) {
  // Sentry not installed yet - use stub
}

export type ErrorSeverity = 'fatal' | 'error' | 'warning' | 'info';

export interface ErrorContext {
  userId?: string;
  userEmail?: string;
  url?: string;
  userAgent?: string;
  [key: string]: any;
}

/**
 * Capture and track errors
 */
export function captureError(
  error: Error | string,
  context?: ErrorContext,
  severity: ErrorSeverity = 'error'
) {
  const isProduction = process.env.NODE_ENV === 'production';

  // Log to console in development
  if (!isProduction) {
    console.error('[Error Tracking]', error, context);
  }

  if (Sentry) {
    if (typeof error === 'string') {
      Sentry.captureMessage(error, severity);
    } else {
      Sentry.captureException(error, { level: severity });
    }

    if (context) {
      Sentry.setContext('custom', context);
    }
  }

  // Track as analytics event
  if (error instanceof Error) {
    analytics.pageError(error.message, error.name);
  }
}

/**
 * Capture API errors
 */
export function captureApiError(
  endpoint: string,
  statusCode: number,
  errorMessage: string,
  context?: ErrorContext
) {
  captureError(
    new Error(`API Error: ${endpoint} (${statusCode}): ${errorMessage}`),
    {
      ...context,
      endpoint,
      statusCode,
    },
    statusCode >= 500 ? 'error' : 'warning'
  );
}

/**
 * Capture form validation errors
 */
export function captureFormError(formName: string, fieldErrors: Record<string, string>) {
  captureError(
    new Error(`Form validation failed: ${formName}`),
    {
      form_name: formName,
      field_errors: fieldErrors,
    },
    'warning'
  );
}

/**
 * Capture payment errors
 */
export function capturePaymentError(
  provider: string,
  errorCode: string,
  errorMessage: string
) {
  captureError(
    new Error(`Payment Error: ${provider} (${errorCode}): ${errorMessage}`),
    {
      payment_provider: provider,
      error_code: errorCode,
    },
    'error'
  );
}

/**
 * Set user context for error tracking
 */
export function setErrorContext(userId: string, userEmail?: string) {
  if (Sentry) {
    Sentry.setUser({
      id: userId,
      email: userEmail,
    });
  }
}

/**
 * Clear user context on logout
 */
export function clearErrorContext() {
  if (Sentry) {
    Sentry.setUser(null);
  }
}

/**
 * Add breadcrumb for better error context
 */
export function addBreadcrumb(
  message: string,
  category: string = 'default',
  level: 'fatal' | 'error' | 'warning' | 'info' | 'debug' = 'info'
) {
  if (Sentry) {
    Sentry.addBreadcrumb({
      message,
      category,
      level,
      timestamp: Date.now() / 1000,
    });
  }
}
