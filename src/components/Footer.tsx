import { Instagram, Facebook, MessageCircle, Clock, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();



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
                  (Monday Closed)
              </p>
            </div>

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
              Crafted with passion by HexaDev Team.
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