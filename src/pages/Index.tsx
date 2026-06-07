import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Gallery } from '@/components/Gallery';
import { Menu } from '@/components/Menu';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { SplashScreen } from '@/components/SplashScreen';

const Divider = () => (
  <div className="gold-divider mx-auto w-4/5 max-w-3xl" />
);

const Index = () => {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {!splashDone && (
        <SplashScreen onComplete={() => setSplashDone(true)} />
      )}
      <Navbar />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Gallery />
      <Divider />
      <Menu />
      <Divider />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;