
import React from 'react';
import { Code, Database, Globe, Cpu, Twitter, Instagram } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center ocean-gradient relative overflow-hidden">
      {/* Floating decorative code elements for visual appeal */}
      <div className="absolute top-20 left-10 animate-float">
        <Code className="text-sky-300/30 w-8 h-8" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <Database className="text-emerald-300/30 w-6 h-6" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <Cpu className="text-purple-300/30 w-7 h-7" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Introduction and Code Block */}
          <div className="text-slate-100 animate-fade-in">
            {/* Main greeting and name section */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="font-dancing text-gradient">Jambo!</span>
              <br />
              <span className="font-inter">I'm Jeremy Bravoge</span>
            </h1>
            
            {/* Code-style introduction block */}
            <div className="text-xl md:text-2xl mb-8 space-y-2 bg-slate-800/40 backdrop-blur-md rounded-xl p-6 border border-slate-700">
              <div className="code-accent font-mono">const developer = {'{'}</div>
              <div className="ml-4 text-slate-300">
                <span className="variable-accent">name</span>: <span className="string-accent">"Jeremy Bravoge"</span>,
              </div>
              <div className="ml-4 text-slate-300">
                <span className="variable-accent">role</span>: <span className="string-accent">"Professional Programmer"</span>,
              </div>
              <div className="ml-4 text-slate-300">
                <span className="variable-accent">location</span>: <span className="string-accent">"Kenya 🇰🇪"</span>,
              </div>
              <div className="ml-4 text-slate-300">
                <span className="variable-accent">passion</span>: <span className="string-accent">"Technology & Innovation"</span>
              </div>
              <div className="code-accent font-mono">{'};'}</div>
            </div>

            {/* Social media links section */}
            <div className="flex justify-start gap-4 mb-6">
              {/* Twitter/X social link */}
              <a
                href="https://twitter.com/Jeremybravoge"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800/50 hover:bg-sky-500/20 rounded-lg flex items-center justify-center transition-all duration-300 hover-scale border border-slate-700 hover:border-sky-500/50"
              >
                <Twitter className="w-5 h-5 text-sky-400" />
              </a>
              
              {/* Instagram social link */}
              <a
                href="https://instagram.com/Jeremybravoge"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800/50 hover:bg-pink-500/20 rounded-lg flex items-center justify-center transition-all duration-300 hover-scale border border-slate-700 hover:border-pink-500/50"
              >
                <Instagram className="w-5 h-5 text-pink-400" />
              </a>
              
              {/* Facebook/Website social link */}
              <a
                href="https://facebook.com/Jeremybravoge"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800/50 hover:bg-blue-500/20 rounded-lg flex items-center justify-center transition-all duration-300 hover-scale border border-slate-700 hover:border-blue-500/50"
              >
                <Globe className="w-5 h-5 text-blue-400" />
              </a>
              
              {/* TikTok social link */}
              <a
                href="https://tiktok.com/@Jeremybravoge"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800/50 hover:bg-red-500/20 rounded-lg flex items-center justify-center transition-all duration-300 hover-scale border border-slate-700 hover:border-red-500/50"
              >
                <span className="text-red-400 font-bold text-sm">TT</span>
              </a>
            </div>

            {/* Navigation links to different sections */}
            <div className="flex flex-wrap gap-3">
              {['About Me', 'Skills', 'Projects', 'Education', 'Journal', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/[\s]/g, '').replace('aboutme', 'story').replace('contact', 'connect')}`}
                  className="bg-slate-800/30 hover:bg-slate-700/50 backdrop-blur-md px-4 py-2 rounded-full font-medium transition-all duration-300 hover-scale border border-slate-700 hover:border-sky-500/50 text-slate-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Profile Photos Gallery */}
          <div className="animate-scale-in">
            {/* Profile image gallery with clean backgrounds */}
            <div className="grid grid-cols-2 gap-4">
              
              {/* Main profile image - spans two columns for prominence */}
              <div className="col-span-2 relative rounded-2xl overflow-hidden shadow-2xl hover-scale border-2 border-sky-500/30">
                <img 
                  src="/lovable-uploads/91619897-a337-4ef8-868f-6e441a4ef09d.png"
                  alt="Jeremy Bravoge - Professional Developer Profile"
                  className="w-full h-64 object-cover object-center"
                />
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                {/* Profile information overlay */}
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-slate-100 font-bold">Jeremy Bravoge</h3>
                  <p className="text-sky-400 text-sm">Professional Programmer from Kenya</p>
                </div>
              </div>
              
              {/* Secondary profile image - left bottom */}
              <div className="relative rounded-xl overflow-hidden shadow-lg hover-scale border border-slate-600">
                <img 
                  src="/lovable-uploads/bcd9482d-5dec-4e1a-8a8f-988c4129dda3.png"
                  alt="Jeremy Bravoge - Tech Professional"
                  className="w-full h-32 object-cover object-center"
                />
                {/* Subtle overlay for consistency */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
              
              {/* Secondary profile image - right bottom */}
              <div className="relative rounded-xl overflow-hidden shadow-lg hover-scale border border-slate-600">
                <img 
                  src="/lovable-uploads/4ec08e36-c43e-4a24-8740-e14a82bb927b.png"
                  alt="Jeremy Bravoge - Software Developer"
                  className="w-full h-32 object-cover object-center"
                />
                {/* Subtle overlay for consistency */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator at bottom center */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-300/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-300/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
