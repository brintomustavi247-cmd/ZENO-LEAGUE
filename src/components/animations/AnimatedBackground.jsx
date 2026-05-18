// src/components/animations/AnimatedBackground.jsx - Phase 4 Mobile Optimized

import React, { useMemo } from 'react';
import useReducedMotion from '../../hooks/useReducedMotion';
import usePerformanceTier from '../../hooks/usePerformanceTier';
import ANIMATION from '../../utils/animationConfig';
import './animated-background.css';

/**
 * Animated Background Component - Phase 4 Mobile Optimized
 * 
 * Performance Features:
 * - Auto-detects device capability (low/med/high)
 * - LOW-TIER: Returns children ONLY (no background, no particles, no animations)
 * - MEDIUM-TIER: Reduced particles (8), grid overlay disabled, simple gradients
 * - HIGH-TIER: Full animations (16 particles, grid overlay, complex gradients)
 * - Respects prefers-reduced-motion
 * - React.memo prevents unnecessary re-renders
 */
const AnimatedBackground = ({ children }) => {
  const prefersReducedMotion = useReducedMotion();
  const performanceTier = usePerformanceTier();

  // Calculate particle count based on device capability
  const particleCount = useMemo(() => {
    switch (performanceTier) {
      case 'medium': return 8;      // Reduced from 12 for mobile
      case 'high': return 16;       // Full particles for desktop
      default: return 0;
    }
  }, [performanceTier]);

  // Generate particle elements (memoized)
  const particles = useMemo(() => {
    if (particleCount === 0) return null;
    
    return Array.from({ length: particleCount }, (_, i) => (
      <div 
        key={i} 
        className={`particle particle-${i % 8}`}
        style={{
          animationDelay: `${(i * 1.5)}s`,
          left: `${5 + (i * 12)}%`, 
        }}
      />
    ));
  }, [particleCount]);

  // If user requests reduced motion or device is low-tier, render children only.
  // Note: Hooks (useMemo) are still called above to keep hook order stable
  // across renders and avoid the "Rendered fewer hooks than expected" error.
  if (performanceTier === 'low' || prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <div className="arena-background-container">
      {/* Grid overlay - disabled on medium tier mobile */}
      {performanceTier === 'high' && (
        <div className="grid-overlay"></div>
      )}
      
      {/* Particles */}
      {particles && (
        <div className="particles" data-tier={performanceTier}>
          {particles}
        </div>
      )}
      
      {/* Content - NOT wrapped, direct sibling */}
      {children}
    </div>
  );
};

// Wrap in React.memo to prevent re-renders unless props change
export default React.memo(AnimatedBackground);
