'use client';

import Link from 'next/link';
import { analytics } from '@/lib/analytics';

interface AnalyticsDonateButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

export default function AnalyticsDonateButton({
  href,
  children,
  className,
  ariaLabel,
}: AnalyticsDonateButtonProps) {
  const handleClick = () => {
    analytics.donationStarted();
  };

  return (
    <Link href={href} className={className} aria-label={ariaLabel} onClick={handleClick}>
      {children}
    </Link>
  );
}
