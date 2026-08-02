'use client';

// Auth guard disabled - site is fully public
export default function AuthGuard({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
