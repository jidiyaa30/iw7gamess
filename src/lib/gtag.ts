export const GA_ID = "G-W8KW1K0N2E";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export function trackEvent(action: string, params?: Record<string, string>) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, params);
  }
}

export function trackCTAClick(location: string) {
  trackEvent("cta_click", {
    event_category: "engagement",
    event_label: location,
    link_url: "https://share-rxapq9cajg.iw7.io/web/share/index.html?ic=AD0C06E0&ts=1783232220&m=2&lang=en&id=1",
  });
}

export function trackExternalLink(url: string, location: string) {
  trackEvent("external_link_click", {
    event_category: "outbound",
    event_label: location,
    link_url: url,
  });
}

export function trackNavClick(page: string) {
  trackEvent("navigation_click", {
    event_category: "navigation",
    event_label: page,
  });
}
