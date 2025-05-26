
import React from 'react';
import { Twitter, Instagram, Globe } from 'lucide-react';

const Hero = () => {
  return (
    // Main hero container with ocean gradient background
    <section className="min-h-screen flex items-center justify-center ocean-gradient relative overflow-hidden">
      
      {/* Main content container with proper spacing and centering */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Professional introduction text */}
          <div className="text-left lg:pr-8">
            {/* Greeting text with styling */}
            <p className="text-lg text-sky-400 mb-4 font-medium">Hey, I'm</p>
            
            {/* Main name with large, bold styling */}
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
              Jeremy<br />
              Bravoge
            </h1>
            
            {/* Professional title/description */}
            <p className="text-xl text-slate-300 mb-8">
              Computer Science Student / Developer / Programmer
            </p>
            
            {/* Social media links row */}
            <div className="flex gap-4 mb-8">
              {/* Twitter link with hover effects */}
              <a
                href="https://twitter.com/Jeremybravoge"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800/50 hover:bg-sky-500/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105 border border-slate-700 hover:border-sky-500/50"
              >
                <Twitter className="w-5 h-5 text-sky-400" />
              </a>
              
              {/* Instagram link with hover effects */}
              <a
                href="https://instagram.com/Jeremybravoge"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800/50 hover:bg-pink-500/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105 border border-slate-700 hover:border-pink-500/50"
              >
                <Instagram className="w-5 h-5 text-pink-400" />
              </a>
              
              {/* Website/portfolio link with hover effects */}
              <a
                href="https://facebook.com/Jeremybravoge"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800/50 hover:bg-blue-500/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105 border border-slate-700 hover:border-blue-500/50"
              >
                <Globe className="w-5 h-5 text-blue-400" />
              </a>
            </div>

            {/* Navigation buttons for different sections */}
            <div className="flex flex-wrap gap-3">
              {['About Me', 'Skills', 'Projects', 'Education', 'Journal', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/[\s]/g, '').replace('aboutme', 'story').replace('contact', 'connect')}`}
                  className="bg-slate-800/30 hover:bg-slate-700/50 backdrop-blur-md px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 border border-slate-700 hover:border-sky-500/50 text-slate-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Right side - Single professional photo */}
          <div className="flex justify-center lg:justify-end">
            {/* Main profile image container with styling */}
            <div className="relative">
              {/* Profile image with proper sizing and styling */}
              <img 
                src="/lovable-uploads/91619897-a337-4ef8-868f-6e441a4ef09d.png"
                alt="Jeremy Bravoge - Professional Developer"
                className="w-80 h-96 lg:w-96 lg:h-[28rem] object-cover object-center rounded-2xl shadow-2xl border-2 border-sky-500/40"
              />
              
              {/* Subtle overlay for professional look */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-2xl"></div>
              
              {/* Decorative accent border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-emerald-500/30 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator at bottom */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-300/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-300/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
