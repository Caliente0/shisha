import { motion } from 'framer-motion';
import { animationVariants, viewportSettings } from '@/lib/animations';

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 marble-bg" />
      
      {/* Gold grain overlay */}
      <div className="absolute inset-0 marble-grain" />
      
      {/* Vignette Overlay */}
      <div className="absolute inset-0 vignette-overlay" />
      
      {/* Legibility Overlay */}
      <div className="absolute inset-0 legibility-overlay" />
      
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full pt-16 xs:pt-20 sm:pt-0">
        <motion.div
          {...animationVariants.heroTitle}
          whileInView={animationVariants.heroTitle.animate}
          viewport={viewportSettings}
          className="mb-4 xs:mb-6 sm:mb-8"
        >
          <h1 className="heading-primary text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-3 xs:mb-4 sm:mb-6 leading-tight text-center">
            Caliente Lounge & Shisha Bar.
          </h1>
        </motion.div>
        
        <motion.p
          {...animationVariants.heroSubtitle}
          whileInView={animationVariants.heroSubtitle.animate}
          viewport={viewportSettings}
          className="body-primary text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 xs:mb-8 sm:mb-10 max-w-4xl mx-auto font-medium text-center px-2"
        >
          Premium shishas, signature cocktails, Bold flavors.
        </motion.p>
        
        <motion.div
          {...animationVariants.heroButtons}
          whileInView={animationVariants.heroButtons.animate}
          viewport={viewportSettings}
          className="flex flex-col xs:flex-row gap-3 xs:gap-4 sm:gap-6 justify-center items-center w-full"
        >
          <button
            onClick={() => scrollToSection('gallery')}
            className="w-full xs:w-auto px-4 xs:px-6 sm:px-8 py-3 xs:py-4 sm:py-5 bg-transparent border-2 border-gold-light text-gold-light hover-lift gold-glow-subtle font-semibold text-sm xs:text-base sm:text-lg rounded-full transition-all duration-300 min-h-[44px] xs:min-h-[48px] max-w-[280px] xs:max-w-none"
          >
            View Gallery
          </button>
          
          <button
            onClick={() => scrollToSection('menu')}
            className="w-full xs:w-auto px-4 xs:px-6 sm:px-8 py-3 xs:py-4 sm:py-5 gold-metallic text-black hover-lift font-semibold text-sm xs:text-base sm:text-lg rounded-full transition-all duration-300 min-h-[44px] xs:min-h-[48px] max-w-[280px] xs:max-w-none"
          >
            View Menu
          </button>
        </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        {...animationVariants.scrollIndicator}
        whileInView={animationVariants.scrollIndicator.animate}
        viewport={viewportSettings}
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