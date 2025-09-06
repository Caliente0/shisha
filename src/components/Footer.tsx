import { Instagram, Facebook, MessageCircle, Clock, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Instagram,
      href: "#",
      label: "Instagram"
    },
    {
      icon: Facebook,
      href: "#",
      label: "Facebook"
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/3575555555?text=Hello%20Caliente",
      label: "WhatsApp"
    }
  ];

  return (
    <footer className="relative py-16 border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-heading font-bold glow-gold mb-4">
              Caliente
            </h3>
            <p className="text-text-secondary font-body mb-4">
              Premium shishas • Signature cocktails
            </p>
            <p className="text-text-muted font-body italic">
              Gold warmth • Golden nights
            </p>
          </div>

          {/* Hours & Location */}
          <div className="text-center">
            <div className="glass rounded-lg p-6 mb-4">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-primary font-heading font-semibold">
                  Opening Hours
                </span>
              </div>
              <p className="text-text-secondary font-body">
                Daily 17:00 – 02:00
              </p>
            </div>

            <div className="flex items-center justify-center space-x-2 text-text-secondary">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="font-body text-sm">
                Riviera Ave 21, City Center
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-heading font-semibold text-primary mb-4">
              Connect With Us
            </h4>
            <div className="flex justify-center md:justify-end space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary hover:text-primary-glow hover-glow transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            
            <a
              href="tel:+35755555555"
              className="inline-flex items-center space-x-2 text-primary hover:text-primary-glow transition-colors duration-300 font-body"
            >
              <span>+357 55 555 555</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary/10 text-center">
          <p className="text-text-muted font-body text-sm">
            © {currentYear} Caliente Shisha • Lounge • Bar. All rights reserved.
          </p>
          <div className="mt-2 flex items-center justify-center space-x-2">
            <div className="w-1 h-1 bg-primary rounded-full opacity-60"></div>
            <span className="text-xs text-text-muted font-body">
              Crafted with passion
            </span>
            <div className="w-1 h-1 bg-primary rounded-full opacity-60"></div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-8 left-8 w-2 h-2 bg-primary rounded-full shadow-ember animate-pulse opacity-40"></div>
      <div className="absolute bottom-8 right-8 w-1.5 h-1.5 bg-primary-glow rounded-full shadow-ember animate-pulse opacity-30 delay-1000"></div>
    </footer>
  );
};

export default Footer;