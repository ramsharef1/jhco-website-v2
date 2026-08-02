/**
 * Mobile optimization utilities and components
 * Touch-friendly, performance-optimized for mobile devices
 */

import { ReactNode } from 'react';

// Mobile-safe touch target sizes (minimum 48x48px per WCAG)
export const TOUCH_TARGET_SIZE = 48;

interface MobileButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
  disabled?: boolean;
}

export function MobileButton({
  children,
  onClick,
  className = '',
  ariaLabel,
  disabled = false,
}: MobileButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`
        min-w-[48px] min-h-[48px]
        flex items-center justify-center
        active:scale-95 transition-transform
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
    >
      {children}
    </button>
  );
}

interface MobileContainerProps {
  children: ReactNode;
  className?: string;
  safeAreaPadding?: boolean;
}

export function MobileContainer({
  children,
  className = '',
  safeAreaPadding = true,
}: MobileContainerProps) {
  return (
    <div
      className={`
        w-full
        ${safeAreaPadding ? 'px-4 md:px-6' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

// Mobile-optimized link component with proper touch targets
interface MobileLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}

export function MobileLink({
  href,
  children,
  className = '',
  external = false,
}: MobileLinkProps) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`
        inline-block
        min-h-[48px]
        flex items-center
        focus:outline-none focus:ring-2 focus:ring-[#d4af37]
        ${className}
      `}
    >
      {children}
    </a>
  );
}

// Viewport meta configuration
export const MOBILE_VIEWPORT_CONFIG = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 5.0,
  minimumScale: 1.0,
  userScalable: 'yes',
  viewportFit: 'cover',
};
