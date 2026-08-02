'use client';

import { useEffect } from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

// Client-side error boundary for catching React errors
export default function ErrorBoundary({ children, fallback }: ErrorBoundaryProps) {
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      console.error('Global error caught:', event.error);
      // Sentry integration will be added after @sentry/nextjs is installed
      // Sentry.captureException(event.error);
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error('Unhandled promise rejection:', event.reason);
      // Sentry integration will be added after @sentry/nextjs is installed
      // Sentry.captureException(event.reason);
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  return <>{children}</>;
}
