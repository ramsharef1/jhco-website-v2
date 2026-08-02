'use client';

import { useState } from 'react';

interface PartnerLogoProps {
  src: string;
  alt: string;
  className?: string;
}

export default function PartnerLogo({ src, alt, className = '' }: PartnerLogoProps) {
  const [error, setError] = useState(false);

  if (error) {
    return null;
  }

  return <img src={src} alt={alt} className={className} onError={() => setError(true)} />;
}
