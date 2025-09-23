import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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

export const Menu = () => {
  const [menuData, setMenuData] = useState<MenuData>({ categories: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/menu.json')
      .then(res => res.json())
      .then(data => {
        // Show only the first 3 categories for the main page preview
        const previewCategories = data.categories.slice(0, 3);
        setMenuData({ categories: previewCategories });
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load menu:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section id="menu" className="relative py-8 xs:py-10 sm:py-12 md:py-16 lg:py-section">
        <div className="absolute inset-0 bg-ink/40" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gold-light"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="menu" className="relative py-8 xs:py-10 sm:py-12 md:py-16 lg:py-section">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-ink/40" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 xs:mb-12 sm:mb-16 md:mb-20">
          <motion.div
            {...animationVariants.fadeInUp}
            whileInView={animationVariants.fadeInUp.animate}
            viewport={viewportSettings}
          >
            <p className="small-caps mb-6">Our Menu</p>
            <h2 className="heading-secondary text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 xs:mb-8">
              Premium
              <br />
              <span className="text-gold-light">Experience</span>
            </h2>
          </motion.div>
        </div>

        {/* Menu Categories */}
        {menuData.categories.map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            {...animationVariants.fadeInUp}
            whileInView={animationVariants.fadeInUp.animate}
            viewport={viewportSettings}
            transition={{ delay: getStaggerDelay(categoryIndex, 0.2) }}
            className="mb-12 xs:mb-16 md:mb-20"
          >
            {/* Category Header */}
            <div className="text-center mb-8 xs:mb-10 sm:mb-12">
              <h3 className="heading-secondary text-xl xs:text-2xl sm:text-3xl md:text-4xl text-gold-light mb-2">
                {category.name}
              </h3>
              <div className="w-24 h-0.5 bg-gold-light mx-auto"></div>
            </div>

            {/* Category Items */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8 md:gap-10"
              variants={animationVariants.staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={viewportSettings}
            >
              {category.items.slice(0, 3).map((item, index) => (
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

                  </div>

                  {/* Content */}
                  <div className="p-4 xs:p-6 sm:p-8">
                    {/* Name */}
                    <h4 className="heading-secondary text-lg xs:text-xl md:text-2xl mb-3 xs:mb-4 group-hover:text-gold-light transition-colors">
                      {item.name}
                    </h4>

                    {/* Description */}
                    <p className="body-primary text-sm xs:text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}

        {/* Call to action */}
        <motion.div
          {...animationVariants.fadeInUpDelayed}
          whileInView={animationVariants.fadeInUpDelayed.animate}
          viewport={viewportSettings}
          className="text-center mt-10 xs:mt-12 sm:mt-16 md:mt-20"
        >
          <p className="body-primary mb-6 xs:mb-8 text-lg xs:text-xl">
            Ready to see our complete menu?
          </p>
          <button
            onClick={() => window.location.href = '/menu'}
            className="px-6 xs:px-8 sm:px-10 py-3 xs:py-4 sm:py-5 gold-metallic text-black hover-lift font-semibold text-base xs:text-lg sm:text-xl rounded-full transition-all duration-300 min-h-[48px] min-w-[160px] xs:min-w-[180px] sm:min-w-[200px]"
          >
            Open Full Menu
          </button>
        </motion.div>
      </div>
    </section>
  );
};