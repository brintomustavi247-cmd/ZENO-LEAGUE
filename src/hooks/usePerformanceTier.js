// src/hooks/usePerformanceTier.js

import { useState, useEffect } from 'react';

/**
 * Performance tier detection
 * Returns: 'low' | 'medium' | 'high'
 * 
 * Low: Disable heavy animations, reduce particle count
 * Medium: Standard animations
 * High: Full effects enabled
 */
const usePerformanceTier = () => {
  const [tier, setTier] = useState('medium');

  useEffect(() => {
    const detectPerformance = () => {
      // Check hardware concurrency (CPU cores)
      const cores = navigator.hardwareConcurrency || 4;
      
      // Check device memory (if available)
      const memory = navigator.deviceMemory || 4; // GB
      
      // Check connection speed (if available)
      const connection = navigator.connection?.effectiveType; // '4g', '3g', etc.
      
      // Scoring system
      let score = 0;
      
      if (cores >= 8) score += 3;
      else if (cores >= 4) score += 2;
      else score += 1;
      
      if (memory >= 8) score += 3;
      else if (memory >= 4) score += 2;
      else score += 1;
      
      if (!connection || connection === '4g') score += 2;
      else if (connection === '3g') score += 1;
      
      // Determine tier
      if (score >= 6) return 'high';
      if (score >= 4) return 'medium';
      return 'low';
    };

    const detectedTier = detectPerformance();
    setTier(detectedTier);

    // Log for debugging (remove in production)
    console.log(`[Performance] Detected tier: ${detectedTier}`);
  }, []);

  return tier;
};

export default usePerformanceTier;
