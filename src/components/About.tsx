import { motion } from 'framer-motion';
import { Wine, Flame, Sofa } from 'lucide-react';
import { animationVariants, viewportSettings, getStaggerDelay } from '@/lib/animations';

const features = [
  {
    icon: Flame,
    title: 'Premium Shishas',
    description: 'Expertly crafted hookah experiences with the finest tobacco blends and pristine equipment.'
  },
  {
    icon: Wine,
    title: 'Signature Cocktails',
    description: 'Handcrafted cocktails using premium spirits and fresh ingredients, perfectly paired with your shisha.'
  },
  {
    icon: Sofa,
    title: 'Lounge Comfort',
    description: 'Luxurious marble and gold interiors designed for ultimate relaxation and sophisticated nights.'
  }
];

export const About = () => {
  return (
    <section id="about" className="relative py-8 xs:py-10 sm:py-12 md:py-16 lg:py-section">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-ink/40" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 xs:mb-10 sm:mb-14 md:mb-20">
          <motion.div
            {...animationVariants.fadeInUp}
            whileInView={animationVariants.fadeInUp.animate}
            viewport={viewportSettings}
          >
            <p className="small-caps mb-4 sm:mb-6">About Caliente</p>
            <h2 className="heading-secondary text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 xs:mb-6 sm:mb-8 leading-tight">
              The Heart of Flavor & Atmosphere
              <br />
            </h2>
          </motion.div>
          
          <motion.p
            {...animationVariants.fadeInUpDelayed}
            whileInView={animationVariants.fadeInUpDelayed.animate}
            viewport={viewportSettings}
            className="body-primary text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed px-2"
          >
            At Caliente Lounge & Shisha Bar, we bring together great vibes, unique flavors, and unforgettable nights. 
            Our lounge is designed to be a place where friends gather, conversations flow, and the atmosphere keeps you coming back.
            We specialize in premium shisha, crafted cocktails, and a menu that blends comfort with creativity. Whether you’re here to relax after 
            a long day, celebrate with friends, or enjoy live entertainment, Caliente is the spot for you!
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8 md:gap-10 lg:gap-12"
          variants={animationVariants.staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportSettings}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={animationVariants.staggerItem}
              transition={{ delay: getStaggerDelay(index, 0.2) }}
              className="premium-card hover-lift p-4 xs:p-6 sm:p-8 md:p-10 text-center"
            >
              <div className="text-gold-light mb-6">
                <feature.icon size={48} className="mx-auto" />
              </div>
              
              <h3 className="heading-secondary text-lg xs:text-xl sm:text-2xl md:text-3xl mb-3 xs:mb-4 sm:mb-6">
                {feature.title}
              </h3>
              
              <p className="body-primary text-sm xs:text-base sm:text-lg leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};