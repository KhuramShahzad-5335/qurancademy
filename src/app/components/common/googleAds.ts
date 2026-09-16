const contactConversionId = "AW-18438605125/GWkQCKruyvkcEMWSm9hE";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function reportContactConversion() {
  if (typeof window.gtag !== "function") return;

  window.gtag("event", "conversion", {
    send_to: contactConversionId,
  });
}
