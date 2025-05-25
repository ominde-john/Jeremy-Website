
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import Passions from '@/components/Passions';
import Gallery from '@/components/Gallery';
import Connect from '@/components/Connect';
import Footer from '@/components/Footer';

const Index = () => {
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
