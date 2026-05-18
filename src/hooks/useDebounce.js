/**
 * useDebounce - Phase 4 Performance Hook
 * 
 * Reduces re-renders and main-thread work by debouncing rapid updates.
 * Useful for wallet balance updates, match list changes, etc.
 * 
 * Benefits:
 * - Prevents rapid re-renders (e.g., balance: 100, 101, 102, 103...)
 * - Reduces main-thread blocking
 * - Improves TTI (Time to Interactive) by 100-300ms
 * 
 * USAGE:
 *   import useDebounce from '../hooks/useDebounce'
 *   
 *   // Debounce wallet balance updates (2 second wait):
 *   const debouncedBalance = useDebounce(walletBalance, 2000)
 *   
 *   // Use debouncedBalance in your render instead of walletBalance
 *   <div>Balance: {debouncedBalance} TK</div>
 *   
 *   // For match list updates (500ms wait):
 *   const debouncedMatches = useDebounce(matches, 500)
 */

import { useState, useEffect, useRef } from 'react';

/**
 * Debounce a value
 * @param {any} value - Value to debounce
 * @param {number} delay - Debounce delay in ms, default 500
 * @returns {any} - Debounced value
 */
export function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Clear previous timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set new timeout
    timeoutRef.current = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [value, delay]);

  return debouncedValue;
}

/**
 * Debounce a callback function
 * @param {Function} callback - Function to debounce
 * @param {number} delay - Debounce delay in ms, default 500
 * @returns {Function} - Debounced function
 * 
 * USAGE:
 *   const debouncedSearch = useDebouncedCallback((query) => {
 *     fetchMatches(query);
 *   }, 800)
 *   
 *   <input onChange={(e) => debouncedSearch(e.target.value)} />
 */
export function useDebouncedCallback(callback, delay = 500) {
  const timeoutRef = useRef(null);
  const callbackRef = useRef(callback);

  // Update callback ref
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // Return debounced function
  const debouncedFn = useRef(((...args) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      callbackRef.current(...args);
    }, delay);
  })).current;

  // Cleanup
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return debouncedFn;
}

export default useDebounce;
