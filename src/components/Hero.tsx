import { motion } from 'framer-motion';
import { SmokeEffect } from './SmokeEffect';

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 xs:pt-24 sm:pt-0">
      <div className="absolute inset-0 marble-bg" />
      
      {/* Gold grain overlay */}
      <div className="absolute inset-0 marble-grain" />
      
      {/* Vignette Overlay */}
      <div className="absolute inset-0 vignette-overlay" />
      
      {/* Legibility Overlay */}
      <div className="absolute inset-0 legibility-overlay" />
      
      {/* Smoke Effect */}
      <SmokeEffect />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 xs:mb-8"
        >
          <h1 className="heading-primary text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 xs:mb-6 sm:mb-8 leading-tight sm:leading-none">
            Ignite the Night
            <br />
            at Caliente
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="body-primary text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-10 max-w-3xl mx-auto font-medium"
        >
          Premium shishas, signature cocktails, golden nights.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col xs:flex-row gap-4 sm:gap-6 justify-center items-center"
        >
          <button
            onClick={() => scrollToSection('gallery')}
            className="w-full xs:w-auto px-6 xs:px-8 sm:px-10 py-3 xs:py-4 sm:py-5 bg-transparent border-2 border-gold-light text-gold-light hover-lift gold-glow-subtle font-semibold text-base xs:text-lg sm:text-xl rounded-full transition-all duration-300 min-h-[48px] min-w-[160px] xs:min-w-[180px] sm:min-w-[200px]"
          >
            View Gallery
          </button>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full xs:w-auto px-6 xs:px-8 sm:px-10 py-3 xs:py-4 sm:py-5 gold-metallic text-black hover-lift font-semibold text-base xs:text-lg sm:text-xl rounded-full transition-all duration-300 min-h-[48px] min-w-[160px] xs:min-w-[180px] sm:min-w-[200px]"
          >
            Contact Us
          </button>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gold-light/50 rounded-full p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gold-light rounded-full mx-auto"
          />
        </div>
      </motion.div>
    </section>
  );
};