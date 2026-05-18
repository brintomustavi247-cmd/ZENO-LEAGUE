// src/utils/animationConfig.js

/**
 * ZENO LEAGUE Animation Configuration
 * Optimized for 60fps on low-end Android (2GB RAM)
 */

export const ANIMATION = {
  // Timing curves (optimized for smoothness)
  easing: {
    // Default spring physics (snappy but smooth)
    default: { type: 'spring', stiffness: 300, damping: 30 },
    
    // Gentle entrance (for modals/cards)
    gentle: { type: 'spring', stiffness: 200, damping: 25 },
    
    // Quick feedback (buttons/hovers)
    quick: { type: 'spring', stiffness: 400, damping: 35 },
    
    // Linear transitions (background elements)
    linear: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    
    // Easing presets (CSS-compatible)
    easeOut: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)', // overshoot effect
  },

  // Durations (in seconds) - keep SHORT for performance
  duration: {
    instant: 0.1,      // Micro-interactions (hover)
    fast: 0.2,         // Button clicks
    normal: 0.3,       // Card reveals
    slow: 0.5,         // Page transitions
    background: 20,    // Background loops (continuous)
  },

  // Particle system config
  particles: {
    count: {
      low: 15,     // Low-end devices (<3GB RAM)
      medium: 30,  // Mid-range (3-6GB RAM)
      high: 50,    // High-end (>6GB RAM)
    },
    size: { min: 2, max: 4 },        // Small = faster rendering
    speed: { min: 0.3, max: 0.8 },   // Slow = less jank
    opacity: { min: 0.1, max: 0.4 }, // Subtle visibility
  },

  // Background gradient orbs
  orbs: {
    count: 2,
    size: { min: 300, max: 500 },    // Viewport units
    blur: 80,                        // Heavy blur (GPU-friendly)
    speed: 25,                       // Seconds per cycle
    colors: [
      'rgba(0, 255, 255, 0.08)',    // Cyan
      'rgba(189, 0, 255, 0.06)',    // Purple
      'rgba(0, 255, 136, 0.05)',    // Green
    ],
  },

  // Skeleton loading shimmer
  skeleton: {
    baseColor: '#1a1f35',
    highlightColor: '#252b45',
    duration: 1.5,
    borderRadius: '8px',
  },

  // Page transition variants
  pageTransition: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
};

export default ANIMATION;
