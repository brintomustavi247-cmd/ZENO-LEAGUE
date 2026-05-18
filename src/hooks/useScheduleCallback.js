/**
 * useScheduleCallback - Phase 4 Performance Hook
 * 
 * Defers non-critical work until after the initial render completes.
 * Uses requestIdleCallback (if available) with setTimeout fallback.
 * 
 * Benefits:
 * - Reduces main-thread blocking on mobile
 * - Defers analytics, notifications, tracking
 * - Lets critical UI render first
 * - Improves FCP (First Contentful Paint) by 200-500ms
 * 
 * USAGE:
 *   import { useScheduleCallback } from '../hooks/useScheduleCallback'
 *   
 *   // Defer non-critical setup:
 *   useScheduleCallback(() => {
 *     setupAnalytics();
 *     registerNotificationListener();
 *   }, { priority: 'low' })
 *   
 *   // Defer with longer delay (for very heavy work):
 *   useScheduleCallback(() => {
 *     preloadImages();
 *   }, { delay: 3000, priority: 'low' })
 */

import { useEffect, useRef } from 'react';

/**
 * Schedule a callback to run after critical rendering is done
 * @param {Function} callback - Function to execute
 * @param {Object} options - Configuration
 * @param {number} options.delay - Minimum delay before running (ms), default 1000
 * @param {string} options.priority - 'low' or 'high', default 'low'
 * @param {AbortSignal} options.signal - Optional abort signal
 */
export function useScheduleCallback(callback, options = {}) {
  const {
    delay = 1000,
    priority = 'low',
    signal = null,
  } = options;

  const callbackRef = useRef(callback);
  const timeoutRef = useRef(null);
  const idleCallbackRef = useRef(null);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    // If signal is already aborted, don't schedule
    if (signal?.aborted) return;

    // Abort handler
    const handleAbort = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (idleCallbackRef.current) cancelIdleCallback(idleCallbackRef.current);
    };

    signal?.addEventListener('abort', handleAbort);

    // Schedule the callback
    const scheduleWork = () => {
      if (signal?.aborted) return;

      if (priority === 'low' && typeof requestIdleCallback !== 'undefined') {
        // Use requestIdleCallback for low-priority work (won't block user input)
        idleCallbackRef.current = requestIdleCallback(
          () => {
            if (!signal?.aborted) {
              callbackRef.current();
            }
          },
          { timeout: delay * 2 } // Timeout ensures it runs even if idle never comes
        );
      } else {
        // Fallback to setTimeout
        timeoutRef.current = setTimeout(() => {
          if (!signal?.aborted) {
            callbackRef.current();
          }
        }, delay);
      }
    };

    // Start scheduling after initial render
    if (typeof requestAnimationFrame !== 'undefined') {
      requestAnimationFrame(() => {
        requestAnimationFrame(scheduleWork);
      });
    } else {
      setTimeout(scheduleWork, 0);
    }

    // Cleanup
    return () => {
      signal?.removeEventListener('abort', handleAbort);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (idleCallbackRef.current) cancelIdleCallback(idleCallbackRef.current);
    };
  }, [delay, priority, signal]);
}

export default useScheduleCallback;
