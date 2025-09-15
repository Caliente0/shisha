// Shared animation configurations for consistent, smooth animations across the site

export const animationVariants = {
  // Fade in from bottom with smooth easing
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { 
      duration: 0.6
    }
  },

  // Fade in from bottom with slight delay
  fadeInUpDelayed: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { 
      duration: 0.6, 
      delay: 0.2
    }
  },

  // Scale in with fade
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { 
      duration: 0.5
    }
  },

  // Staggered children animation
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  },

  // Staggered item animation
  staggerItem: {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5
      }
    }
  },

  // Smooth slide in from left
  slideInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { 
      duration: 0.5
    }
  },

  // Smooth slide in from right
  slideInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { 
      duration: 0.5
    }
  },

  // Hero title animation
  heroTitle: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { 
      duration: 0.8
    }
  },

  // Hero subtitle animation
  heroSubtitle: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { 
      duration: 0.8, 
      delay: 0.2
    }
  },

  // Hero buttons animation
  heroButtons: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { 
      duration: 0.8, 
      delay: 0.4
    }
  },

  // Scroll indicator animation
  scrollIndicator: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { 
      duration: 1, 
      delay: 1
    }
  },

  // Mobile menu animation
  mobileMenu: {
    initial: { opacity: 0, height: 0 },
    animate: { 
      opacity: 1, 
      height: 'auto',
      transition: { 
        duration: 0.3
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { 
        duration: 0.3
      }
    }
  },

  // Lightbox animation
  lightbox: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 }
  },

  // Lightbox content animation
  lightboxContent: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
    transition: { duration: 0.3 }
  }
};

// Common viewport settings
export const viewportSettings = {
  once: true,
  margin: "-100px"
};

// Stagger delays for multiple items
export const getStaggerDelay = (index: number, baseDelay: number = 0.1) => index * baseDelay;
