'use client';

import Link from "next/link";
import { useParams } from "next/navigation";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "donate" | "gold";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  type = "button",
}: ButtonProps) {
  const baseStyles = "font-semibold transition inline-block rounded-md tracking-[2px] duration-400 uppercase text-sm";
  const variants = {
    primary: "bg-[#0a1428] text-white hover:bg-[#142850] shadow-elegant hover:shadow-premium",
    secondary: "bg-[#142850] text-white hover:bg-[#0a1428] shadow-elegant hover:shadow-premium",
    donate: "bg-[#a8312f] text-white hover:bg-[#8b2f2d] shadow-premium hover:shadow-luxury transform hover:scale-105 font-bold",
    gold: "bg-[#d4af37] text-[#0a1428] hover:bg-[#e8c547] shadow-premium hover:shadow-luxury transform hover:scale-105 font-bold",
    outline: "border-2 border-[#0a1428] text-[#0a1428] hover:bg-[#f9f7f4] hover:border-[#142850] shadow-elegant",
  };
  const sizes = {
    sm: "px-8 py-2.5 text-xs",
    md: "px-12 py-3.5 text-sm",
    lg: "px-16 py-5 text-base",
  };

  const buttonClass = `${baseStyles} ${variants[variant]} ${sizes[size]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

  const params = useParams<{ locale?: string }>();
  const locale = params?.locale === "ar" ? "ar" : "en";
  const base = `/${locale}`;
  const localizedHref =
    href && href.startsWith("/") && !href.startsWith(`${base}/`) && href !== base
      ? `${base}${href}`
      : href;

  if (localizedHref) {
    return (
      <Link href={localizedHref} className={buttonClass}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={buttonClass}>
      {children}
    </button>
  );
}
