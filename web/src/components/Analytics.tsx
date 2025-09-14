"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackPageView } from "@/lib/analytics";

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    // Track page views
    trackPageView(pathname);
  }, [pathname]);

  // Google Analytics script (only load in production with consent)
  useEffect(() => {
    const loadGoogleAnalytics = () => {
      if (process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_GA_ID) {
        // Check if Cookiebot consent is given for statistics cookies
        if (typeof window !== 'undefined' && window.Cookiebot?.consent?.statistics) {
          // Load Google Analytics script
          const script = document.createElement("script");
          script.async = true;
          script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
          document.head.appendChild(script);

          // Initialize dataLayer and gtag function
          window.dataLayer = window.dataLayer || [];
          function gtag(...args: unknown[]) {
            window.dataLayer.push(args);
          }
          window.gtag = gtag;
          
          // Configure Google Analytics
          gtag("js", new Date());
          gtag("config", process.env.NEXT_PUBLIC_GA_ID);
        }
      }
    };

    // Load GA immediately if consent is already given
    loadGoogleAnalytics();

    // Listen for Cookiebot consent changes
    if (typeof window !== 'undefined') {
      window.addEventListener('CookiebotOnAccept', loadGoogleAnalytics);
      window.addEventListener('CookiebotOnDecline', () => {
        // Clear Google Analytics if consent is withdrawn
        if (window.gtag) {
          window.gtag('consent', 'update', {
            'analytics_storage': 'denied'
          });
        }
      });
    }

    // Cleanup event listeners
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('CookiebotOnAccept', loadGoogleAnalytics);
        window.removeEventListener('CookiebotOnDecline', () => {});
      }
    };
  }, []);

  return null;
}

// Declare global types for TypeScript
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    Cookiebot?: {
      consent: {
        statistics: boolean;
        marketing: boolean;
        preferences: boolean;
        necessary: boolean;
      };
      show: () => void;
      hide: () => void;
      renew: () => void;
    };
  }
}
