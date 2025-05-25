
import React from 'react';
import { Code, Database, Globe, Cpu, Twitter, Instagram } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center ocean-gradient relative overflow-hidden">
      {/* Floating code elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Code className="text-sky-300/30 w-8 h-8" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <Database className="text-emerald-300/30 w-6 h-6" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <Cpu className="text-purple-300/30 w-7 h-7" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-100">
        <div className="animate-fade-in">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="font-dancing text-gradient">Hello World,</span>
              <br />
              <span className="font-inter">I'm Jeremy Bravoge</span>
            </h1>
            
            <div className="text-xl md:text-2xl mb-6 space-y-2">
              <div className="code-accent font-mono">const developer = {'{'}</div>
              <div className="ml-4 text-slate-300">
                <span className="variable-accent">name</span>: <span className="string-accent">"Jeremy Bravoge"</span>,
              </div>
              <div className="ml-4 text-slate-300">
                <span className="variable-accent">status</span>: <span className="string-accent">"Form Four Graduate"</span>,
              </div>
              <div className="ml-4 text-slate-300">
                <span className="variable-accent">studying</span>: <span className="string-accent">"Computer Science"</span>,
              </div>
              <div className="ml-4 text-slate-300">
                <span className="variable-accent">passion</span>: <span className="string-accent">"Technology & Innovation"</span>
              </div>
              <div className="code-accent font-mono">{'};'}</div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-12 rounded-2xl overflow-hidden shadow-2xl hover-scale border-2 border-sky-500/30">
            <img 
              src="/lovable-uploads/6d3101b3-1600-4d3d-8d90-fa8587d41bad.png"
              alt="Jeremy Bravoge"
              className="w-full h-full object-cover object-center scale-110"
              style={{ objectPosition: 'center 20%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
          </div>

          {/* Skills Summary */}
          <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 max-w-4xl mx-auto mb-12 border border-slate-700">
            <h3 className="text-xl font-semibold mb-6 text-gradient">Current Focus Areas:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Programming</h4>
                  <p className="text-sm text-slate-400">Python, JavaScript</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Data Science</h4>
                  <p className="text-sm text-slate-400">Analytics & ML</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Web Development</h4>
                  <p className="text-sm text-slate-400">React, Node.js</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
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

          {/* Quick Navigation */}
          <div className="flex flex-wrap gap-4 justify-center">
            {['About Me', 'Skills', 'Projects', 'Education', 'Journal', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/[\s]/g, '').replace('aboutme', 'story').replace('contact', 'connect')}`}
                className="bg-slate-800/30 hover:bg-slate-700/50 backdrop-blur-md px-6 py-3 rounded-full font-medium transition-all duration-300 hover-scale border border-slate-700 hover:border-sky-500/50"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-300/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-300/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
