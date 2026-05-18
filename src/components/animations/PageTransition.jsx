// src/components/animations/PageTransition.jsx

import React from 'react';
import useReducedMotion from '../../hooks/useReducedMotion';
import ANIMATION from '../../utils/animationConfig';

/**
 * PageTransition Component
 * Wraps page content with enter/exit animations
 * Uses CSS animations instead of heavy libraries for performance
 */
const PageTransition = ({ children, routeKey }) => {
  const prefersReducedMotion = useReducedMotion();

  // If user prefers reduced motion, skip animations entirely
  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <div
      key={routeKey}
      className="page-transition"
      style={{
        animation: `fadeInUp 0.4s cubic-bezier(0, 0, 0.2, 1) forwards`,
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </div>
  );
};

export default React.memo(PageTransition);
