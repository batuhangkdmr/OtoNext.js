/**
 * Google Analytics 4 (GA4) Integration
 * https://analytics.google.com
 */

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// Page view tracking
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Event tracking
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// E-commerce events
export const trackProductView = (product: {
  id: number;
  name: string;
  category?: string;
}) => {
  event({
    action: 'view_item',
    category: 'ecommerce',
    label: product.name,
    value: product.id,
  });
};

export const trackProductClick = (product: {
  id: number;
  name: string;
}) => {
  event({
    action: 'select_item',
    category: 'ecommerce',
    label: product.name,
    value: product.id,
  });
};

export const trackSearch = (searchTerm: string) => {
  event({
    action: 'search',
    category: 'engagement',
    label: searchTerm,
  });
};

export const trackWhatsAppClick = (productName?: string) => {
  event({
    action: 'whatsapp_click',
    category: 'engagement',
    label: productName || 'general',
  });
};

export const trackCategoryView = (categoryName: string) => {
  event({
    action: 'view_category',
    category: 'navigation',
    label: categoryName,
  });
};

// Type definitions for gtag
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
  }
}

