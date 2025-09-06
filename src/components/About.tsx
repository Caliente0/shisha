import { Flame, Wine, Armchair } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Flame,
      title: "Premium Shishas",
      description: "Authentic flavors crafted with the finest tobacco and premium coals for an unparalleled experience."
    },
    {
      icon: Wine,
      title: "Signature Cocktails", 
      description: "Expertly mixed drinks with premium spirits, creating perfect harmony with our shisha offerings."
    },
    {
      icon: Armchair,
      title: "Lounge Comfort",
      description: "Luxurious seating and ambient atmosphere designed for relaxation and memorable nights."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold glow-gold mb-6">
            Experience Caliente
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed font-body">
            Step into a world of vibrant energy, smooth shisha, and unforgettable nights. 
            At Caliente Lounge & Shisha Bar, every detail is designed to set the perfect mood 
            — from our handcrafted cocktails to our flavorful shisha blends.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass rounded-lg p-8 text-center hover-glow transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-heading font-semibold text-primary mb-4">
                {feature.title}
              </h3>
              
              <p className="text-text-secondary leading-relaxed font-body">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;