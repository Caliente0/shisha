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

interface MenuCategory {
  name: string;
  items: MenuItem[];
}

interface MenuData {
  categories: MenuCategory[];
}

export const MenuPage = () => {
  const [menuData, setMenuData] = useState<MenuData>({ categories: [] });
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
            <h1 className="heading-secondary text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 xs:mb-8 leading-tight">
              Full
              <br />
              <span className="text-gold-light">Menu</span>
            </h1>
            <p className="body-primary text-lg xs:text-xl max-w-3xl mx-auto mb-8 xs:mb-10">
              Discover our complete selection of premium shishas, signature cocktails, and exquisite dishes
            </p>
          </motion.div>

          {/* Menu Navigation */}
          <motion.div
            {...animationVariants.fadeInUpDelayed}
            whileInView={animationVariants.fadeInUpDelayed.animate}
            viewport={viewportSettings}
            className="flex flex-wrap justify-center gap-3 xs:gap-4 sm:gap-6 mb-12 xs:mb-16 md:mb-20"
          >
            {menuData.categories.map((category, index) => (
              <button
                key={category.name}
                onClick={() => {
                  const element = document.getElementById(`category-${index}`);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="px-4 xs:px-6 py-2 xs:py-3 bg-black/40 backdrop-blur-sm border border-gold-light/30 text-gold-light hover:bg-gold-light/10 hover:border-gold-light hover:text-gold transition-all duration-300 rounded-full text-sm xs:text-base font-medium min-w-[100px] xs:min-w-[120px]"
              >
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="relative py-8 xs:py-10 sm:py-12 md:py-16 lg:py-section">
        <div className="absolute inset-0 bg-ink/40" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          {menuData.categories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              id={`category-${categoryIndex}`}
              {...animationVariants.fadeInUp}
              whileInView={animationVariants.fadeInUp.animate}
              viewport={viewportSettings}
              transition={{ delay: getStaggerDelay(categoryIndex, 0.2) }}
              className="mb-16 xs:mb-20 md:mb-24"
            >
              {/* Category Header */}
              <div className="text-center mb-12 xs:mb-16 md:mb-20">
                <h2 className="heading-secondary text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-gold-light mb-4">
                  {category.name}
                </h2>
                <div className="w-32 h-0.5 bg-gold-light mx-auto"></div>
              </div>

              {/* Category Items */}
              <motion.div 
                className="max-w-4xl mx-auto"
                variants={animationVariants.staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={viewportSettings}
              >
                <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 xs:p-8 sm:p-10 md:p-12 border border-gold-light/20">
                  {category.items.map((item, index) => (
                    <motion.div
                      key={item.name}
                      variants={animationVariants.staggerItem}
                      transition={{ delay: getStaggerDelay(index, 0.05) }}
                      className="flex justify-between items-start py-4 xs:py-5 sm:py-6 border-b border-gold-light/10 last:border-b-0"
                    >
                      {/* Left side - Name and Description */}
                      <div className="flex-1 pr-4">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="heading-secondary text-lg xs:text-xl md:text-2xl text-gold-light">
                            {item.name}
                          </h3>
                          {item.tag && (
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
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
                          )}
                        </div>
                        <p className="body-primary text-sm xs:text-base leading-relaxed text-gray-300">
                          {item.desc}
                        </p>
                      </div>

                      {/* Right side - Price */}
                      <div className="flex-shrink-0">
                        <span className="text-gold-light font-semibold text-lg xs:text-xl md:text-2xl">
                          {item.price}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
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
