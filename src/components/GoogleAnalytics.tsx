"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

const GOOGLE_ADS_ID = "AW-728967972";
const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || "G-VE7V9FQS1W";
const STORAGE_KEY = "wens-cookie-consent";
const CONSENT_EVENT = "wens-cookie-consent-updated";

interface CookiePreferences {
  analytics: boolean;
  marketing: boolean;
}

const DEFAULT_PREFERENCES: CookiePreferences = {
  analytics: false,
  marketing: false,
};

function readStoredPreferences(): CookiePreferences {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return DEFAULT_PREFERENCES;

    const parsed = JSON.parse(stored) as Partial<CookiePreferences>;
    return {
      analytics: parsed.analytics === true,
      marketing: parsed.marketing === true,
    };
  } catch {
    return DEFAULT_PREFERENCES;
  }
}

/**
 * Consent Mode v2 — "always load, default denied".
 * The Google tag (GA4 + Google Ads) loads on every page so that conversions
 * still send cookieless modelling pings for visitors who haven't consented.
 * No cookies are set until the visitor grants analytics/marketing consent.
 */
export default function GoogleAnalytics() {
  const pathname = usePathname();
  const [preferences, setPreferences] =
    useState<CookiePreferences>(DEFAULT_PREFERENCES);
  const [tagReady, setTagReady] = useState(false);

  useEffect(() => {
    const initialPreferencesFrame = window.requestAnimationFrame(() => {
      setPreferences(readStoredPreferences());
    });

    const handleConsentUpdate = (event: Event) => {
      const detail = (event as CustomEvent<CookiePreferences>).detail;
      setPreferences({
        analytics: detail?.analytics === true,
        marketing: detail?.marketing === true,
      });
    };

    window.addEventListener(CONSENT_EVENT, handleConsentUpdate);
    return () => {
      window.cancelAnimationFrame(initialPreferencesFrame);
      window.removeEventListener(CONSENT_EVENT, handleConsentUpdate);
    };
  }, []);

  const analyticsEnabled = preferences.analytics;
  const marketingEnabled = preferences.marketing;

  // Push consent state to Google whenever it changes (and once the tag is ready).
  useEffect(() => {
    if (!tagReady || !window.gtag) return;

    window.gtag("consent", "update", {
      analytics_storage: analyticsEnabled ? "granted" : "denied",
      ad_storage: marketingEnabled ? "granted" : "denied",
      ad_user_data: marketingEnabled ? "granted" : "denied",
      ad_personalization: marketingEnabled ? "granted" : "denied",
    });
  }, [analyticsEnabled, marketingEnabled, tagReady]);

  // Manual GA4 page_view on route change, only when analytics is granted.
  useEffect(() => {
    if (!tagReady || !analyticsEnabled || !window.gtag) return;

    window.gtag("event", "page_view", {
      send_to: GA_MEASUREMENT_ID,
      page_title: document.title,
      page_location: window.location.href,
      page_path: `${pathname}${window.location.search}`,
    });
  }, [analyticsEnabled, pathname, tagReady]);

  return (
    <>
      <Script id="google-consent" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
          // Default: everything denied until the visitor consents (Consent Mode v2).
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            wait_for_update: 500
          });
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
          gtag('config', '${GOOGLE_ADS_ID}');
        `}
      </Script>
      <Script
        id="google-tag"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
        onLoad={() => setTagReady(true)}
        onReady={() => setTagReady(true)}
      />
    </>
  );
}

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}
