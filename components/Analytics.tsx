'use client';

import { useEffect, useState } from "react";
import Script from "next/script";
import { COOKIE_CONSENT_KEY, COOKIE_CONSENT_EVENT } from "./CookieConsent";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

// Loads Google Analytics only after the visitor accepts cookies, and only
// if NEXT_PUBLIC_GA_ID is configured. Nothing loads until both are true.
export default function Analytics() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(COOKIE_CONSENT_KEY) === "accepted") {
      setConsented(true);
    }
    const onConsent = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      setConsented(detail === "accepted");
    };
    window.addEventListener(COOKIE_CONSENT_EVENT, onConsent);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, onConsent);
  }, []);

  if (!GA_ID || !consented) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
