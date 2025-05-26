
import React from 'react';
import { Code, Database, Globe, Cpu, Twitter, Instagram } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center ocean-gradient relative overflow-hidden">
      {/* Floating decorative elements for visual depth */}
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
        <div className="text-center">
          
          {/* PRIMARY FOCUS: Professional Image Gallery */}
          <div className="mb-12 animate-scale-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              
              {/* Main Profile Image - Center Focus */}
              <div className="md:col-start-2 relative rounded-2xl overflow-hidden shadow-2xl hover-scale border-2 border-sky-500/40 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md">
                <img 
                  src="/lovable-uploads/91619897-a337-4ef8-868f-6e441a4ef09d.png"
                  alt="Jeremy Bravoge - Lead Developer"
                  className="w-full h-80 object-cover object-center"
                />
                {/* Professional overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                {/* Professional title overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-slate-100 font-bold text-xl mb-1">Jeremy Bravoge</h3>
                  <p className="text-sky-400 text-sm font-medium">Professional Developer</p>
                  <div className="w-12 h-0.5 bg-sky-500 mt-2"></div>
                </div>
              </div>
              
              {/* Secondary Profile Images - Supporting Focus */}
              <div className="md:col-start-1 md:row-start-1 relative rounded-xl overflow-hidden shadow-lg hover-scale border border-slate-600/50 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-md">
                <img 
                  src="/lovable-uploads/bcd9482d-5dec-4e1a-8a8f-988c4129dda3.png"
                  alt="Jeremy Bravoge - Tech Professional"
                  className="w-full h-80 object-cover object-center"
                />
                {/* Subtle professional overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-slate-300 text-sm font-medium">Tech Leader</span>
                </div>
              </div>
              
              <div className="md:col-start-3 md:row-start-1 relative rounded-xl overflow-hidden shadow-lg hover-scale border border-slate-600/50 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-md">
                <img 
                  src="/lovable-uploads/4ec08e36-c43e-4a24-8740-e14a82bb927b.png"
                  alt="Jeremy Bravoge - Software Developer"
                  className="w-full h-80 object-cover object-center"
                />
                {/* Subtle professional overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-slate-300 text-sm font-medium">Innovator</span>
                </div>
              </div>
            </div>
          </div>

          {/* SECONDARY: Minimal Professional Introduction */}
          <div className="animate-fade-in">
            {/* Clean greeting section */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-100">
              <span className="font-dancing text-gradient">Jambo!</span>
              <span className="font-inter block mt-2">I'm Jeremy Bravoge</span>
            </h1>
            
            {/* Professional tagline */}
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Professional Programmer from Kenya 🇰🇪
              <br />
              <span className="text-sky-400">Building Technology Solutions</span>
            </p>

            {/* Clean social media links */}
            <div className="flex justify-center gap-4 mb-8">
              <a
                href="https://twitter.com/Jeremybravoge"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800/50 hover:bg-sky-500/20 rounded-lg flex items-center justify-center transition-all duration-300 hover-scale border border-slate-700 hover:border-sky-500/50"
              >
                <Twitter className="w-5 h-5 text-sky-400" />
              </a>
              
              <a
                href="https://instagram.com/Jeremybravoge"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800/50 hover:bg-pink-500/20 rounded-lg flex items-center justify-center transition-all duration-300 hover-scale border border-slate-700 hover:border-pink-500/50"
              >
                <Instagram className="w-5 h-5 text-pink-400" />
              </a>
              
              <a
                href="https://facebook.com/Jeremybravoge"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800/50 hover:bg-blue-500/20 rounded-lg flex items-center justify-center transition-all duration-300 hover-scale border border-slate-700 hover:border-blue-500/50"
              >
                <Globe className="w-5 h-5 text-blue-400" />
              </a>
              
              <a
                href="https://tiktok.com/@Jeremybravoge"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800/50 hover:bg-red-500/20 rounded-lg flex items-center justify-center transition-all duration-300 hover-scale border border-slate-700 hover:border-red-500/50"
              >
                <span className="text-red-400 font-bold text-sm">TT</span>
              </a>
            </div>

            {/* Clean navigation links */}
            <div className="flex flex-wrap justify-center gap-3">
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
        </div>
      </div>

      {/* Clean scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-300/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-300/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
