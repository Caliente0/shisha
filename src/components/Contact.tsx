import { motion } from 'framer-motion';
import { Phone, MessageCircle, Clock, MapPin, Instagram, Facebook } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Call Us',
    content: '+357 55 555 555',
    action: 'tel:+3575555555',
    actionText: 'Tap to Call'
  },
  {
    icon: Clock,
    title: 'Opening Hours',
    content: 'Daily 17:00 – 02:00',
    action: null,
    actionText: null
  },
  {
    icon: MapPin,
    title: 'Location',
    content: 'Constantias 11, Paphos 8041',
    action: 'https://maps.app.goo.gl/X2c8TgfAVJ8zJzNbA?g_st=ipc',
    actionText: 'Open in Maps'
  }
];

const socialLinks = [
  {
    icon: Instagram,
    name: 'Instagram',
    url: 'https://www.instagram.com/caliente_shisha_loungebar?igsh=M2x1eGkyZng4dGRz',
    handle: '@caliente_shisha_loungebar'
  },
  {
    icon: Facebook,
    name: 'Facebook',
    url: 'https://www.facebook.com/share/16uNT6gZBt/?mibextid=wwXIfr',
    handle: 'Caliente Shisha Bar'
  }
];

export const Contact = () => {
  const handleContactAction = (action: string | null) => {
    if (action) {
      if (action.startsWith('tel:') || action.startsWith('https://wa.me/')) {
        window.location.href = action;
      } else {
        window.open(action, '_blank', 'noopener,noreferrer');
      }
    }
  };

  return (
    <section id="contact" className="relative py-8 xs:py-10 sm:py-12 md:py-16 lg:py-section">
      {/* Background with overlay */}
      <div className="absolute inset-0 marble-bg" />
      <div className="absolute inset-0 legibility-overlay" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="small-caps mb-4">Contact</p>
            <h2 className="heading-secondary text-2xl xs:text-3xl sm:text-4xl md:text-5xl mb-4 xs:mb-6 leading-tight">
              Join Us
              <br />
              <span className="text-gold-light">Tonight</span>
            </h2>
          </motion.div>
        </div>

        {/* Contact Cards */}
        <div className="flex justify-center mb-8 xs:mb-10 sm:mb-12 md:mb-16">
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-6 md:gap-8 max-w-4xl">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="premium-card text-center hover-lift p-3 xs:p-4 sm:p-6"
            >
              <div className="text-gold-light mb-4 flex justify-center">
                <item.icon size={32} />
              </div>
              
              <h3 className="heading-secondary text-base xs:text-lg md:text-xl mb-2">
                {item.title}
              </h3>
              
              <p className="body-primary text-xs xs:text-sm mb-3 xs:mb-4">
                {item.content}
              </p>
              
              {item.action && item.actionText && (
                <button
                  onClick={() => handleContactAction(item.action)}
                  className="px-3 xs:px-4 py-2 xs:py-2.5 bg-transparent border border-gold-light text-gold-light hover:bg-gold-light hover:text-black transition-all duration-300 rounded-lg text-xs xs:text-sm font-medium min-h-[44px] xs:min-h-[48px]"
                >
                  {item.actionText}
                </button>
              )}
            </motion.div>
          ))}
          </div>
        </div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="body-primary mb-4 xs:mb-6 text-base xs:text-lg">
            Follow us for the latest updates and events
          </p>
          
          <div className="flex flex-col xs:flex-row justify-center gap-3 xs:gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 xs:px-6 py-3 premium-card hover-lift transition-all duration-300 group min-h-[48px] w-full xs:w-auto justify-center xs:justify-start"
              >
                <social.icon 
                  size={24} 
                  className="text-gold-light group-hover:scale-110 transition-transform" 
                />
                <div className="text-left">
                  <div className="heading-secondary text-sm">
                    {social.name}
                  </div>
                  <div className="body-primary text-xs">
                    {social.handle}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};