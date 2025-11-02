import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { animationVariants, viewportSettings, getStaggerDelay } from '@/lib/animations';

interface MenuItem {
  name: string;
  tag: string;
  price: string;
  desc: string;
  image: string;
}

interface MenuSubsection {
  name: string;
  items: MenuItem[];
}

interface MenuSection {
  name: string;
  subsections: MenuSubsection[];
}

interface MenuData {
  sections: MenuSection[];
}

export const MenuPage = () => {
  const [menuData, setMenuData] = useState<MenuData>({ sections: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/menu.json')
      .then(res => res.json())
      .then(data => {
        setMenuData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load menu:', err);
        setLoading(false);
      });
  }, []);

  const goBack = () => {
    window.history.back();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gold-light"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="relative py-8 xs:py-10 sm:py-12 md:py-16 lg:py-section">
        <div className="absolute inset-0 marble-bg" />
        <div className="absolute inset-0 legibility-overlay" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.button
            onClick={goBack}
            className="flex items-center gap-2 text-gold-light hover:text-gold transition-colors mb-8"
            {...animationVariants.slideInLeft}
          >
            <ArrowLeft size={20} />
            <span className="text-sm font-medium">Back to Home</span>
          </motion.button>

          {/* Page Title */}
          <motion.div
            {...animationVariants.fadeInUp}
            whileInView={animationVariants.fadeInUp.animate}
            viewport={viewportSettings}
            className="text-center mb-8 xs:mb-10 sm:mb-12"
          >
            <p className="small-caps mb-6">Complete Menu</p>
            <h1 className="heading-secondary text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 xs:mb-8 leading-normal">
              Full
              <br />
              <span className="text-gold-light">Menu</span>
            </h1>
            <p className="body-primary text-lg xs:text-xl max-w-3xl mx-auto mb-8 xs:mb-10">
              Discover our complete selection of premium shishas, signature cocktails, and exquisite dishes
            </p>
          </motion.div>

          {/* Menu Navigation - Main Sections */}
          <motion.div
            {...animationVariants.fadeInUpDelayed}
            whileInView={animationVariants.fadeInUpDelayed.animate}
            viewport={viewportSettings}
            className="flex flex-wrap justify-center gap-3 xs:gap-4 sm:gap-6 mb-12 xs:mb-16 md:mb-20"
          >
            {menuData.sections.map((section, index) => (
              <button
                key={section.name}
                onClick={() => {
                  const element = document.getElementById(`section-${index}`);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="px-4 xs:px-6 py-2 xs:py-3 bg-black/40 backdrop-blur-sm border border-gold-light/30 text-gold-light hover:bg-gold-light/10 hover:border-gold-light hover:text-gold transition-all duration-300 rounded-full text-sm xs:text-base font-medium min-w-[100px] xs:min-w-[120px]"
              >
                {section.name}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="relative py-8 xs:py-10 sm:py-12 md:py-16 lg:py-section">
        <div className="absolute inset-0 bg-ink/40" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          {menuData.sections.map((section, sectionIndex) => (
            <motion.div
              key={section.name}
              id={`section-${sectionIndex}`}
              {...animationVariants.fadeInUp}
              whileInView={animationVariants.fadeInUp.animate}
              viewport={viewportSettings}
              transition={{ delay: getStaggerDelay(sectionIndex, 0.2) }}
              className="mb-16 xs:mb-20 md:mb-28"
            >
              {/* Section Container with Background */}
              <div className="relative bg-black/30 backdrop-blur-sm rounded-3xl border border-gold-light/20 p-6 xs:p-8 sm:p-10 md:p-12 lg:p-16 mb-8">
                {/* Section Header */}
                <div className="text-center mb-10 xs:mb-12 sm:mb-16 md:mb-20">
                  <h2 className="heading-secondary text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-gold-light mb-4">
                    {section.name}
                  </h2>
                  <div className="w-48 h-1 bg-gradient-to-r from-transparent via-gold-light to-transparent mx-auto"></div>
                </div>

                {/* Subsections */}
                {section.subsections.map((subsection, subsectionIndex) => (
                  <motion.div
                    key={subsection.name}
                    {...animationVariants.fadeInUp}
                    whileInView={animationVariants.fadeInUp.animate}
                    viewport={viewportSettings}
                    transition={{ delay: getStaggerDelay(subsectionIndex, 0.1) }}
                    className={`mb-16 xs:mb-20 md:mb-24 ${subsectionIndex !== section.subsections.length - 1 ? 'pb-16 xs:pb-20 md:pb-24 border-b border-gold-light/20' : ''}`}
                  >
                    {/* Subsection Header with Styling */}
                    <div className="mb-10 xs:mb-12 sm:mb-14 md:mb-16">
                      <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold-light/40 to-gold-light/40"></div>
                        <h3 className="heading-secondary text-xl xs:text-2xl sm:text-3xl md:text-4xl text-gold-light font-semibold whitespace-nowrap px-4">
                          {subsection.name}
                        </h3>
                        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gold-light/40 to-gold-light/40"></div>
                      </div>
                    </div>

                    {/* Subsection Items - Grid Layout */}
                    <motion.div 
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xs:gap-6 sm:gap-8 md:gap-10"
                      variants={animationVariants.staggerContainer}
                      initial="initial"
                      whileInView="animate"
                      viewport={viewportSettings}
                    >
                      {subsection.items.map((item, index) => (
                        <motion.div
                          key={item.name}
                          variants={animationVariants.staggerItem}
                          transition={{ delay: getStaggerDelay(index, 0.1) }}
                          className="premium-card hover-lift overflow-hidden group"
                        >
                          {/* Image */}
                          <div className="relative h-64 xs:h-72 sm:h-80 md:h-96 overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = '/placeholder.svg';
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            
                            {/* Tag */}
                            {item.tag && (
                              <div className="absolute top-4 left-4">
                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                  item.tag === 'Signature' ? 'gold-metallic text-black' :
                                  item.tag === 'New' ? 'bg-emerald-600 text-white' :
                                  item.tag === 'Premium' ? 'bg-amber-700 text-white' :
                                  item.tag === 'Popular' ? 'bg-rose-600 text-white' :
                                  item.tag === 'Classic' ? 'bg-slate-600 text-white' :
                                  item.tag === 'Exotic' ? 'bg-purple-600 text-white' :
                                  item.tag === 'Refreshing' ? 'bg-blue-600 text-white' :
                                  item.tag === 'Healthy' ? 'bg-green-600 text-white' :
                                  item.tag === 'Natural' ? 'bg-emerald-500 text-white' :
                                  item.tag === 'Pure' ? 'bg-gray-600 text-white' :
                                  item.tag === 'Boost' ? 'bg-orange-600 text-white' :
                                  'gold-metallic text-black'
                                }`}>
                                  {item.tag}
                                </span>
                              </div>
                            )}

                            {/* Price Badge */}
                            <div className="absolute top-4 right-4">
                              <span className="px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-sm text-gold-light font-semibold text-sm xs:text-base border border-gold-light/30">
                                {item.price}
                              </span>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-4 xs:p-6 sm:p-8">
                            {/* Name */}
                            <h3 className="heading-secondary text-lg xs:text-xl md:text-2xl mb-3 xs:mb-4 group-hover:text-gold-light transition-colors">
                              {item.name}
                            </h3>

                            {/* Description */}
                            {item.desc && (
                              <p className="body-primary text-sm xs:text-base leading-relaxed">
                                {item.desc}
                              </p>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="relative py-8 xs:py-10 sm:py-12 md:py-16 lg:py-section">
        <div className="absolute inset-0 marble-bg" />
        <div className="absolute inset-0 legibility-overlay" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...animationVariants.fadeInUp}
            whileInView={animationVariants.fadeInUp.animate}
            viewport={viewportSettings}
            className="text-center"
          >
            <h2 className="heading-secondary text-2xl xs:text-3xl sm:text-4xl md:text-5xl mb-6 xs:mb-8">
              Ready to Experience
              <br />
              <span className="text-gold-light">Our Menu?</span>
            </h2>
            <p className="body-primary text-lg xs:text-xl mb-8 xs:mb-10 max-w-3xl mx-auto">
              Contact us to make a reservation or ask about our current offerings
            </p>
            <button
              onClick={() => {
                window.location.href = '/#contact';
              }}
              className="px-8 xs:px-10 sm:px-12 py-4 xs:py-5 sm:py-6 gold-metallic text-black hover-lift font-semibold text-lg xs:text-xl sm:text-2xl rounded-full transition-all duration-300 min-h-[56px] xs:min-h-[64px] sm:min-h-[72px]"
            >
              Contact Us
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
