import { Metric } from "web-vitals";

const reportWebVitals = (onMetric?: (metric: Metric) => void) => {
  if (onMetric && onMetric instanceof Function) {
    import("web-vitals").then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
      onCLS(onMetric);
      onINP(onMetric);
      onFCP(onMetric);
      onLCP(onMetric);
      onTTFB(onMetric);
    });
  }
};

export default reportWebVitals;
