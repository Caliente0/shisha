import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface MenuItem {
  name: string;
  tag: string;
  price: string;
  desc: string;
}

interface MenuData {
  highlights: MenuItem[];
}

export const Menu = () => {
  const [menuData, setMenuData] = useState<MenuData>({ highlights: [] });
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="small-caps mb-6">Menu Highlights</p>
            <h2 className="heading-secondary text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 xs:mb-8">
              Premium
              <br />
              <span className="text-gold-light">Selections</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8 md:gap-10">
          {menuData.highlights.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="premium-card hover-lift p-4 xs:p-6 sm:p-8"
            >
              {/* Tag and Price */}
              <div className="flex justify-between items-start mb-6">
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  item.tag === 'Signature' ? 'gold-metallic text-black' :
                  item.tag === 'New' ? 'bg-emerald-600 text-white' :
                  item.tag === 'Premium' ? 'bg-amber-700 text-white' :
                  item.tag === 'Popular' ? 'bg-rose-600 text-white' :
                  item.tag === 'Classic' ? 'bg-slate-600 text-white' :
                  'gold-metallic text-black'
                }`}>
                  {item.tag}
                </span>
                <div className="gold-coin w-10 h-10 rounded-full flex items-center justify-center">
                  <span className="text-black font-heading font-bold text-base">
                    {item.price.replace('€', '')}
                  </span>
                </div>
              </div>

              {/* Name */}
              <h3 className="heading-secondary text-xl xs:text-2xl md:text-3xl mb-3 xs:mb-4 group-hover:text-gold-light transition-colors">
                {item.name}
              </h3>

              {/* Description */}
              <p className="body-primary text-sm xs:text-base md:text-lg leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-10 xs:mt-12 sm:mt-16 md:mt-20"
        >
          <p className="body-primary mb-6 xs:mb-8 text-lg xs:text-xl">
            Ready to experience our premium selection?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 xs:px-8 sm:px-10 py-3 xs:py-4 sm:py-5 gold-metallic text-black hover-lift font-semibold text-base xs:text-lg sm:text-xl rounded-full transition-all duration-300 min-h-[48px] min-w-[160px] xs:min-w-[180px] sm:min-w-[200px]"
          >
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
};