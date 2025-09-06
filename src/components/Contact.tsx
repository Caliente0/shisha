import { Phone, MapPin, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+357 55 555 555",
      action: () => window.open("tel:+35755555555", "_self")
    },
    {
      icon: MapPin,
      label: "Address", 
      value: "Constantias 11, Paphos 8041",
      action: () => window.open("https://maps.app.goo.gl/TUmtna2tsh2KAvPE7?g_st=ipc")
    },
    {
      icon: Clock,
      label: "Hours",
      value: "Daily 17:00 – 02:00",
      action: null
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/caliente_shisha_loungebar?igsh=M2x1eGkyZng4dGRz",
      color: "hover:text-pink-400"
    },
    {
      icon: Facebook, 
      label: "Facebook",
      href: "https://www.facebook.com/share/1BFHCWgG97/?mibextid=wwXIfr",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold glow-gold mb-6">
            Visit Caliente
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto font-body">
            Unwind, connect, and enjoy shisha, drinks, and good vibes — the perfect place to make every night special.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-up">
            {contactInfo.map((item, index) => (
              <div
                key={item.label}
                className="glass rounded-lg p-6 hover-glow transition-all duration-300 cursor-pointer"
                onClick={item.action || undefined}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary font-heading">
                      {item.label}
                    </h3>
                    <p className="text-text-secondary font-body">
                      {item.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="glass rounded-lg p-6">
              <h3 className="text-xl font-heading font-semibold text-primary mb-4">
                Connect With Us
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary transition-all duration-300 hover:scale-110 ${social.color}`}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map & Action Buttons */}
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            {/* Map Placeholder */}
            <div className="glass rounded-lg overflow-hidden h-64 relative">
              <div className="absolute inset-0 bg-gradient-card flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-text-secondary font-body">
                    Constantias 11, Paphos 8041
                  </p>
                </div>
              </div>
            </div>

            <Button
              onClick={() => window.open("https://maps.app.goo.gl/TUmtna2tsh2KAvPE7?g_st=ipc", "_blank")}
              variant="outline"
              className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold py-3 hover-glow transition-all duration-300"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Open in Maps
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;