
import React from 'react';
import { Coffee, Heart, Camera, Map } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center ocean-gradient relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Coffee className="text-white/30 w-8 h-8" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <Camera className="text-white/30 w-6 h-6" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <Map className="text-white/30 w-7 h-7" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="font-dancing">Hey there,</span>
            <br />
            <span className="font-inter">I'm Jeremy Bravoge!</span>
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-8 text-lg md:text-xl">
            <span className="flex items-center gap-2">
              <Map className="w-5 h-5" />
              Form Four Graduate
            </span>
            <span>•</span>
            <span className="flex items-center gap-2">
              <Coffee className="w-5 h-5" />
              Computer Science Student
            </span>
            <span>•</span>
            <span className="flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Tech Enthusiast
            </span>
          </div>

          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Building a future in technology while sharing my journey of learning, growth, and discovery.
          </p>

          {/* Profile Image Placeholder */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-12 rounded-full overflow-hidden shadow-2xl hover-scale">
            <img 
              src="/lovable-uploads/6d3101b3-1600-4d3d-8d90-fa8587d41bad.png"
              alt="Jeremy Bravoge"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          {/* Quick Status */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-2xl mx-auto mb-12">
            <h3 className="text-xl font-semibold mb-4">What I'm into right now:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              <div className="flex items-center gap-3">
                <span className="text-2xl">💻</span>
                <span>Learning Python</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📖</span>
                <span>CS Fundamentals</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎯</span>
                <span>Building Projects</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-4 justify-center">
            {['My Story', 'Passions', 'Gallery', 'Education', 'Journal', "Let's Chat"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/['s\s]/g, '').replace('lets', 'connect')}`}
                className="bg-white/20 backdrop-blur-md hover:bg-white/30 px-6 py-3 rounded-full font-medium transition-all duration-300 hover-scale"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
