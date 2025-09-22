import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black/90 py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Logo */}
          <h3 className="font-heading font-bold text-2xl md:text-3xl text-gold-light mb-4">
            Caliente
          </h3>
          
          {/* Tagline */}
          <p className="body-primary mb-6 max-w-md mx-auto">
            Where luxury meets tradition. Premium shishas, signature cocktails, golden nights.
          </p>
          
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8 text-sm">
            {['Home', 'About', 'Gallery', 'Menu', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const element = document.getElementById(item.toLowerCase());
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-white/60 hover:text-gold-light transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
          
          {/* Divider */}
          <div className="w-24 h-px bg-gold-light/30 mx-auto mb-6" />
          
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-6 text-sm body-primary">
            <span>Daily 17:00 – 02:00</span>
            <span className="hidden sm:block">•</span>
            <span>+357 55 555 555</span>
            <span className="hidden sm:block">•</span>
            <span>Constantias 11, Paphos 8041</span>
            <span className="hidden sm:block">•</span>
            <span>
    <div>
      Created by{" "}
      <a
        href="https://hexadev-web.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "blue", fontWeight: "bold" }}
      >
        HexaDev
      </a>{" "}
      Team
    </div>
            </span>
          </div>
          
          {/* Copyright */}
          <p className="text-white/40 text-xs">
            © {currentYear} Caliente Lounge. All rights reserved.

          </p>
        </motion.div>
      </div>
    </footer>
  );
};