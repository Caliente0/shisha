import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Smoke Overlay */}
      <div className="smoke-overlay"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-up">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 glow-gold leading-tight">
          Ignite the Night
          <br />
          <span className="text-4xl md:text-6xl lg:text-7xl">at Caliente</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-text-secondary mb-4 font-body">
          Premium shishas • Signature cocktails • Golden nights
        </p>
        
        <p className="text-lg text-text-muted mb-8 font-body italic">
          Gold warmth • Golden nights
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => scrollToSection('#gallery')}
            size="lg"
            className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold px-8 py-3 text-lg hover-glow transition-all duration-300"
          >
            View Gallery
          </Button>
          
          <Button
            onClick={() => scrollToSection('#contact')}
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-3 text-lg hover-glow transition-all duration-300"
          >
            Contact Us
          </Button>
        </div>
        
        {/* Ember Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full shadow-ember animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary-glow rounded-full shadow-ember animate-pulse opacity-40 delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-primary rounded-full shadow-ember animate-pulse opacity-50 delay-2000"></div>
      </div>
    </section>
  );
};

export default Hero;