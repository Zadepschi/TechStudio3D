import ReactGA from "react-ga4";

let initialized = false;

export function initAnalytics() {
  if (initialized) return;

  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (!measurementId) return;

  ReactGA.initialize(measurementId);
  initialized = true;
}

export function trackPageView(path) {
  if (!initialized) return;

  ReactGA.send({
    hitType: "pageview",
    page: path,
  });
}