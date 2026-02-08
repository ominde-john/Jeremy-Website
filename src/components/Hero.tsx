import React, { useState, useEffect } from 'react';
import { Twitter, Instagram, Globe, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const linkRoutes: Record<string, string> = {
  'About Me': '/story',
  'Skills': '/passions',
  'Projects': '/gallery',
  'Education': '/education',
  'Journal': '/journal',
  'Contact': '/connect',
};

// Array of different titles that will continuously type
const titles = [
  "Computer Science Student / Developer / Programmer",
  "Full Stack Developer / Problem Solver",
  "Creative Programmer / Tech Enthusiast",
  "Code Architect / Innovation Driver",
];

// Array of images for the carousel (replace with your actual image paths)
const carouselImages = [
  "/lovable-uploads/614b8cfd-ac6a-4138-b81f-62fa85e36130.png",
  "/lovable-uploads/Gemini_Generated_Image_z48o7cz48o7cz48o.png", // Replace with your second image
  "/lovable-uploads/Gemini_Generated_Image_o2r78ko2r78ko2r7.png", // Replace with your third image
  "/lovable-uploads/Gemini_Generated_Image_nnkeoannkeoannke.png", // Replace with your fourth image
];

const Hero = () => {
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Continuous typing effect
  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    const typingSpeed = isDeleting ? 30 : 80;
    const pauseTime = isDeleting ? 500 : 2500;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (displayedTitle.length < currentTitle.length) {
          setDisplayedTitle(currentTitle.slice(0, displayedTitle.length + 1));
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting backward
        if (displayedTitle.length > 0) {
          setDisplayedTitle(currentTitle.slice(0, displayedTitle.length - 1));
        } else {
          // Finished deleting, move to next title
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedTitle, isDeleting, currentTitleIndex]);

  // Auto-scrolling image carousel
  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(imageTimer);
  }, []);

  return (
    // Main hero container with ocean gradient background
    <section className="min-h-screen flex items-center justify-center ocean-gradient relative overflow-hidden">
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-sky-400/10 rounded-full blur-xl animate-float"
            style={{
              width: Math.random() * 100 + 500 + 'px',
              height: Math.random() * 100 + 500 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 10 + 10 + 's',
            }}
          />
        ))}
      </div>

      {/* Main content container with proper spacing and centering */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Professional introduction text */}
          <div className="text-left lg:pr-8">
            {/* Greeting text with styling */}
            <p className="text-lg text-sky-400 mb-4 font-medium">Hey, I'm</p>
            
            {/* Main name with large, bold styling - ALWAYS VISIBLE */}
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
              Jeremy<br />
              Bravoge
            </h1>
            
            {/* Professional title/description with continuous typing effect */}
            <div className="mb-8 min-h-[32px]">
              <p className="text-xl text-slate-300 relative">
                {displayedTitle}
                <span className="inline-block w-0.5 h-6 bg-sky-400 ml-1 animate-blink"></span>
              </p>
            </div>
            
            {/* Social media links row */}
            <div className="flex gap-4 mb-8">
              {/* Twitter link with hover effects */}
              <a
                href="https://twitter.com/Jeremybravoge"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-slate-800/50 hover:bg-sky-500/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105 border border-slate-700 hover:border-sky-500/50 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-400/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <Twitter className="w-5 h-5 text-sky-400 relative z-10" />
              </a>
              
              {/* Instagram link with hover effects */}
              <a
                href="https://instagram.com/Jeremybravoge"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-slate-800/50 hover:bg-pink-500/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105 border border-slate-700 hover:border-pink-500/50 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-400/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <Instagram className="w-5 h-5 text-pink-400 relative z-10" />
              </a>
              
              {/* Website/portfolio link with hover effects */}
              <a
                href="https://facebook.com/Jeremybravoge"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-slate-800/50 hover:bg-blue-500/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105 border border-slate-700 hover:border-blue-500/50 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <Globe className="w-5 h-5 text-blue-400 relative z-10" />
              </a>
            </div>

            {/* Navigation buttons for different sections */}
            <div className="flex flex-wrap gap-3">
              {Object.entries(linkRoutes).map(([label, path]) => (
                <Link
                  key={label}
                  to={path}
                  className="group bg-slate-800/30 hover:bg-slate-700/50 backdrop-blur-md px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 border border-slate-700 hover:border-sky-500/50 text-slate-200 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-500/0 via-sky-500/20 to-sky-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <span className="relative z-10 flex items-center gap-1">
                    {label}
                    <Sparkles className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right side - Professional photo with auto-scrolling carousel */}
          <div className="flex justify-center lg:justify-end">
            {/* Main profile image container with modern styling */}
            <div className="relative">
              {/* Rotating gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500 via-emerald-500 to-purple-500 rounded-3xl blur-xl opacity-30 animate-spin-slow"></div>
              
              {/* Profile image container with carousel */}
              <div className="relative bg-gradient-to-br from-sky-500/20 to-emerald-500/20 rounded-3xl p-8 backdrop-blur-sm border border-sky-500/30">
                <div className="relative overflow-hidden rounded-2xl w-80 h-96 lg:w-96 lg:h-[28rem]">
                  {/* Auto-scrolling image carousel */}
                  {carouselImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                        index === currentImageIndex
                          ? 'opacity-100 scale-100'
                          : 'opacity-0 scale-110'
                      }`}
                    >
                      <img 
                        src={image}
                        alt={`Jeremy Bravoge - Professional Developer ${index + 1}`}
                        className="w-full h-full object-cover object-top shadow-2xl"
                        style={{
                          // Enhanced contrast and positioning to highlight the face
                          filter: 'contrast(1.2) saturate(1.1) brightness(1.05)',
                          // Better positioning to ensure face visibility
                          objectPosition: 'center top 20%'
                        }}
                      />
                    </div>
                  ))}
                  
                  {/* Carousel navigation indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                    {carouselImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex
                            ? 'bg-sky-400 w-8'
                            : 'bg-slate-400/50 hover:bg-slate-300'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                  
                  {/* Reduced overlay gradient to ensure face visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 to-transparent rounded-2xl pointer-events-none"></div>
                </div>
              </div>
              
              {/* Decorative floating elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-sky-500/20 rounded-full blur-xl animate-pulse-glow"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-emerald-500/20 rounded-full blur-xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
              
              {/* Professional accent border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-emerald-500/30 rounded-3xl -z-10"></div>
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

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-15px) translateX(5px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes blink {
          0%, 49% {
            opacity: 1;
          }
          50%, 100% {
            opacity: 0;
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.1);
          }
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-blink {
          animation: blink 1s step-end infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;