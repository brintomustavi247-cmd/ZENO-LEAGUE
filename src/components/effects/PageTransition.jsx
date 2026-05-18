import { motion, AnimatePresence } from 'framer-motion';

// Lighter variants for better performance
const pageVariants = {
  initial: {
    opacity: 0,
    y: 12, // Reduced from 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25, // Faster: was 0.4
      ease: [0.25, 0.46, 0.45, 0.94], // Simpler easing
    }
  },
  exit: {
    opacity: 0,
    y: -8, // Reduced from -20
    transition: {
      duration: 0.2, // Faster: was 0.3
    }
  },
};

const PageTransition = ({ children }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{
          width: '100%',
          minHeight: '100%',
          display: 'block',
          position: 'relative',
          backgroundColor: 'transparent', /* ✅ CRITICAL */
          border: 'none',                 /* ✅ CRITICAL */
          willChange: 'transform, opacity', /* GPU acceleration hint */
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;