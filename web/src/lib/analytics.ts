// Analytics and performance monitoring utilities
// This file provides a foundation for adding analytics tracking

export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

// Google Analytics 4 integration (optional)
export const trackEvent = (event: AnalyticsEvent) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
    });
  }
};

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || '', {
      page_path: url,
    });
  }
};

// Track contact form submissions
export const trackContactForm = (success: boolean) => {
  trackEvent({
    action: success ? 'form_submit_success' : 'form_submit_error',
    category: 'engagement',
    label: 'contact_form',
  });
};

// Track theme changes
export const trackThemeChange = (theme: string) => {
  trackEvent({
    action: 'theme_change',
    category: 'preferences',
    label: theme,
  });
};

// Track gallery interactions
export const trackGalleryInteraction = (action: string, itemId: string) => {
  trackEvent({
    action: `gallery_${action}`,
    category: 'engagement',
    label: itemId,
  });
};

// Track blog interactions
export const trackBlogInteraction = (action: string, postId?: string) => {
  trackEvent({
    action: `blog_${action}`,
    category: 'engagement',
    label: postId,
  });
};

// Performance monitoring
export const trackPerformance = (metric: string, value: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'timing_complete', {
      name: metric,
      value: Math.round(value),
    });
  }
};

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}
