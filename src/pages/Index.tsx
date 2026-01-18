
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import Passions from '@/components/Passions';
import Gallery from '@/components/Gallery';
import Connect from '@/components/Connect';
import Footer from '@/components/Footer';

interface IndexProps {
  scrollTo?: string;
}

const Index = ({ scrollTo }: IndexProps) => {
  useEffect(() => {
    if (scrollTo) {
      // Small delay to ensure the DOM is fully rendered
      const timer = setTimeout(() => {
        const element = document.getElementById(scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [scrollTo]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Story />
      <Passions />
      <Gallery />
      <Connect />
      <Footer />
    </div>
  );
};

export default Index;
