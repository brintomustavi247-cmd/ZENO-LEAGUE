import React, { useMemo } from 'react';
import useReducedMotion from '../../hooks/useReducedMotion';
import usePerformanceTier from '../../hooks/usePerformanceTier';
import ANIMATION from '../../utils/animationConfig';
import './AnimatedBackground.css';

/**
 * Animated Background Component - Phase 3 FIXED VERSION
 * 
 * CRITICAL FIX: Children NO LONGER render inside this component!
 * This component now renders ONLY the background layers.
 * Children must be rendered as SIBLINGS in parent.
 */
const AnimatedBackground = ({ children }) => {
  const prefersReducedMotion = useReducedMotion();
  const performanceTier = usePerformanceTier();

  // Calculate particle count based on device capability
  const particleCount = useMemo(() => {
    if (prefersReducedMotion) return 0;
    
    const { count } = ANIMATION.particles;
    switch (performanceTier) {
      case 'low': return Math.min(count.low, 6);   // Max 6 on low-end
      case 'medium': return Math.min(count.medium, 10); // Max 10 on mid
      case 'high': return Math.min(count.high, 14);   // Max 14 on high
      default: return 8;
    }
  }, [prefersReducedMotion, performanceTier]);

  // Generate particles (memoized)
  const particles = useMemo(() => {
    if (particleCount === 0) return null;
    
    return Array.from({ length: particleCount }, (_, i) => (
      <div 
        key={i} 
        className={`particle particle-${i % 8}`}
        style={{
          animationDelay: `${(i * 1.7)}s`,
          left: `${5 + (i * 11)}%`,
        }}
      />
    ));
  }, [particleCount]);

  // If reduced motion, show minimal static bg
  if (prefersReducedMotion) {
    return (
      <>
        <div className="arena-background arena-static" aria-hidden="true"></div>
        {children} {/* ✅ CHILDREN RENDER OUTSIDE FIXED CONTAINER */}
      </>
    );
  }

  return (
    <>
      {/* ✅ BACKGROUND LAYERS ONLY - Fixed position, won't affect layout */}
      <div className="arena-background" aria-hidden="true">
        {performanceTier !== 'low' && <div className="grid-overlay"></div>}
        
        {particles && (
          <div className="particles" data-tier={performanceTier}>
            {particles}
          </div>
        )}
        
        <div className="content-layer" aria-hidden="true"></div>
      </div>

      {/* ✅ CHILDREN RENDER HERE - Outside fixed container, normal layout flow restored! */}
      {children}
    </>
  );
};

export default React.memo(AnimatedBackground);