/**
 * Performance Monitor - Phase 4 Real-time Metrics
 * 
 * Tracks critical web vitals and long tasks.
 * Helps identify performance bottlenecks on mobile.
 * 
 * USAGE:
 *   import { setupPerformanceMonitoring } from './utils/performanceMonitor'
 *   
 *   // In App.jsx useEffect:
 *   useEffect(() => {
 *     if (process.env.NODE_ENV === 'development') {
 *       setupPerformanceMonitoring();
 *     }
 *   }, [])
 */

export function setupPerformanceMonitoring() {
  // ═══ LONG TASK DETECTION ═══
  // Alerts when main thread is blocked >50ms
  if ('PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.warn(`⚠️ LONG TASK: ${(entry.duration).toFixed(0)}ms at ${new Date(entry.startTime).toLocaleTimeString()}`);
          
          // Log if exceeds 200ms (very problematic on mobile)
          if (entry.duration > 200) {
            console.error(`🚨 CRITICAL: Main thread blocked for ${entry.duration.toFixed(0)}ms!`);
          }
        }
      });
      observer.observe({ entryTypes: ['longtask', 'measure'] });
    } catch (e) {
      // Long Task API not available, skip
    }
  }

  // ═══ CORE WEB VITALS ═══
  // Track FCP, LCP, CLS, TTI
  if ('web-vital' in window || navigator.userAgent.includes('Chrome')) {
    // First Contentful Paint
    if ('PerformanceObserver' in window) {
      try {
        const fcpObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.name === 'first-contentful-paint') {
              console.log(`⏱️ FCP: ${entry.startTime.toFixed(0)}ms`);
            }
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });
      } catch (e) {
        // Skip if not available
      }
    }
  }

  // ═══ MEMORY USAGE ═══
  // Chrome/Edge only
  if (performance.memory && process.env.NODE_ENV === 'development') {
    const checkMemory = setInterval(() => {
      const memory = performance.memory;
      const used = (memory.usedJSHeapSize / 1048576).toFixed(1); // Convert to MB
      const limit = (memory.jsHeapSizeLimit / 1048576).toFixed(1);
      const percent = ((memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100).toFixed(0);
      
      if (percent > 85) {
        console.warn(`🧠 Memory: ${used}MB / ${limit}MB (${percent}%) - High usage!`);
      }
    }, 5000);

    return () => clearInterval(checkMemory);
  }
}

/**
 * Mark performance section
 * @param {string} label - Label for the section
 * @param {Function} fn - Function to measure
 * @returns {any} - Result of fn
 */
export function measurePerformance(label, fn) {
  if (process.env.NODE_ENV !== 'development') return fn();

  const start = performance.now();
  const result = fn();
  const duration = performance.now() - start;

  if (duration > 50) {
    console.warn(`⚠️ SLOW: ${label} took ${duration.toFixed(0)}ms`);
  } else if (process.env.DEBUG_PERF) {
    console.log(`✅ ${label}: ${duration.toFixed(1)}ms`);
  }

  return result;
}

/**
 * Create an async version of measurePerformance
 * @param {string} label - Label for the section
 * @param {Promise} promise - Promise to measure
 * @returns {Promise} - Result of promise
 */
export async function measurePerformanceAsync(label, promise) {
  if (process.env.NODE_ENV !== 'development') return promise;

  const start = performance.now();
  const result = await promise;
  const duration = performance.now() - start;

  if (duration > 100) {
    console.warn(`⚠️ SLOW ASYNC: ${label} took ${duration.toFixed(0)}ms`);
  } else if (process.env.DEBUG_PERF) {
    console.log(`✅ ${label}: ${duration.toFixed(1)}ms`);
  }

  return result;
}

/**
 * Report to analytics or monitoring service
 * @param {string} name - Metric name
 * @param {number} value - Metric value
 * @param {Object} context - Additional context
 */
export function reportMetric(name, value, context = {}) {
  // Send to your analytics service
  // Example: sendToAnalytics({ name, value, ...context })
  
  if (process.env.NODE_ENV === 'development') {
    console.log(`📊 Metric: ${name} = ${value}`, context);
  }
}
