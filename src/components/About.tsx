import { motion } from 'framer-motion';
import { Wine, Flame, Sofa } from 'lucide-react';

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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="small-caps mb-4 sm:mb-6">About Caliente</p>
            <h2 className="heading-secondary text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 xs:mb-6 sm:mb-8 leading-tight">
              Where Luxury Meets
              <br />
              <span className="text-gold-light">Tradition</span>
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="body-primary text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed px-2"
          >
            Step into a world where marble elegance meets golden warmth. 
            Caliente offers an unparalleled shisha lounge experience, blending 
            premium hookah culture with sophisticated cocktail craftsmanship.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
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
        </div>
      </div>
    </section>
  );
};