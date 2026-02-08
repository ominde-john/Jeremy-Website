import React, { useState, useEffect, useRef } from 'react';
import { Twitter, Instagram, Globe, Sparkles, ArrowRight, Code, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const linkRoutes: Record<string, string> = {
  'About Me': '/story',
  'Skills': '/passions',
  'Projects': '/gallery',
  'Education': '/education',
  'Collaborations': '/collaborations',
  'Contact': '/connect',
};

const titles = [
  "Computer Science Student",
  "Full Stack Developer",
  "Creative Programmer",
  "Code Architect",
  "Innovation Driver",
];

const carouselImages = [
  "/lovable-uploads/614b8cfd-ac6a-4138-b81f-62fa85e36130.png",
  "/lovable-uploads/Gemini_Generated_Image_z48o7cz48o7cz48o.png",
  "/lovable-uploads/Gemini_Generated_Image_o2r78ko2r78ko2r7.png",
  "/lovable-uploads/Gemini_Generated_Image_nnkeoannkeoannke.png",
];

// Particle system for dynamic background
const ParticleSystem = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${particle.opacity})`;
        ctx.fill();

        // Draw connections
        particles.slice(i + 1).forEach(particle2 => {
          const dx = particle.x - particle2.x;
          const dy = particle.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.15 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />;
};

const Hero = () => {
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  // Entrance animation
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Typing effect
  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    const typingSpeed = isDeleting ? 30 : 80;
    const pauseTime = isDeleting ? 500 : 2500;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedTitle.length < currentTitle.length) {
          setDisplayedTitle(currentTitle.slice(0, displayedTitle.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayedTitle.length > 0) {
          setDisplayedTitle(currentTitle.slice(0, displayedTitle.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedTitle, isDeleting, currentTitleIndex]);

  // Auto-scrolling carousel
  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(imageTimer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      
      {/* Animated particle system */}
      <ParticleSystem />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-20 animate-blob"
          style={{
            background: 'linear-gradient(45deg, #06b6d4, #3b82f6)',
            left: '10%',
            top: '20%',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
        <div 
          className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000"
          style={{
            background: 'linear-gradient(45deg, #8b5cf6, #ec4899)',
            right: '10%',
            bottom: '20%',
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
        <div 
          className="absolute w-[450px] h-[450px] rounded-full blur-3xl opacity-20 animate-blob animation-delay-4000"
          style={{
            background: 'linear-gradient(45deg, #10b981, #06b6d4)',
            left: '50%',
            top: '50%',
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `
          linear-gradient(rgba(56, 189, 248, 0.5) 1px, transparent 1px),
          linear-gradient(90deg, rgba(56, 189, 248, 0.5) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
      }} />

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left side - Text content */}
          <div className={`text-left lg:pr-8 space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            
            {/* Greeting badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 backdrop-blur-sm animate-fade-in-down">
              <div className="w-2 h-2 rounded-full bg-sky-400 animate-pulse-ring" />
              <span className="text-sm text-sky-300 font-medium">Available for collaboration</span>
            </div>
            
            {/* Main heading with gradient text */}
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-white animate-gradient-x">
                  Jeremy
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400 animate-gradient-x-reverse">
                  Bravoge
                </span>
              </h1>
            </div>
            
            {/* Typing animation with enhanced styling */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-sky-400 to-emerald-400 rounded-full animate-pulse-glow" />
              <p className="text-2xl lg:text-3xl text-slate-300 font-light pl-8 min-h-[40px] flex items-center">
                {displayedTitle}
                <span className="inline-block w-1 h-7 bg-sky-400 ml-2 animate-blink shadow-lg shadow-sky-400/50" />
              </p>
            </div>

            {/* Enhanced description */}
            <p className="text-lg text-slate-400 leading-relaxed max-w-xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Crafting digital experiences through innovative code. Passionate about creating solutions that make a difference.
            </p>
            
            {/* Stats display */}
            <div className="flex gap-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="group">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
                  10+
                </div>
                <div className="text-sm text-slate-400 group-hover:text-sky-400 transition-colors">Projects</div>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-slate-700 to-transparent" />
              <div className="group">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-300">
                  3+
                </div>
                <div className="text-sm text-slate-400 group-hover:text-emerald-400 transition-colors">Collaborations</div>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-slate-700 to-transparent" />
              <div className="group">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
                  100%
                </div>
                <div className="text-sm text-slate-400 group-hover:text-purple-400 transition-colors">Dedicated</div>
              </div>
            </div>
            
            {/* Social media with enhanced hover effects */}
            <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <a
                href="https://twitter.com/Jeremybravoge"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-14 h-14 flex items-center justify-center overflow-hidden rounded-xl bg-slate-800/50 border border-slate-700 hover:border-sky-400/50 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-sky-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500/0 via-sky-500/30 to-sky-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <Twitter className="w-6 h-6 text-slate-400 group-hover:text-sky-400 transition-colors relative z-10" />
              </a>
              
              <a
                href="https://instagram.com/sys.deve"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-14 h-14 flex items-center justify-center overflow-hidden rounded-xl bg-slate-800/50 border border-slate-700 hover:border-pink-400/50 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-pink-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-500/30 to-pink-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <Instagram className="w-6 h-6 text-slate-400 group-hover:text-pink-400 transition-colors relative z-10" />
              </a>
              
              <a
                href="https://www.facebook.com/profile.php?id=100094417877954"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-14 h-14 flex items-center justify-center overflow-hidden rounded-xl bg-slate-800/50 border border-slate-700 hover:border-blue-400/50 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-blue-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <Globe className="w-6 h-6 text-slate-400 group-hover:text-blue-400 transition-colors relative z-10" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <Link
                to="/gallery"
                className="group relative px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  View Projects
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link
                to="/connect"
                className="group relative px-8 py-4 bg-slate-800/50 border border-slate-700 hover:border-sky-400/50 rounded-xl font-semibold text-slate-200 overflow-hidden transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Get In Touch
                </span>
              </Link>
            </div>

            {/* Navigation pills */}
            <div className="flex flex-wrap gap-2 pt-4 animate-fade-in" style={{ animationDelay: '1.1s' }}>
              {Object.entries(linkRoutes).map(([label, path], index) => (
                <Link
                  key={label}
                  to={path}
                  className="group relative px-4 py-2 bg-slate-800/30 hover:bg-slate-700/50 backdrop-blur-sm rounded-full text-sm font-medium text-slate-300 hover:text-white border border-slate-700/50 hover:border-sky-500/50 transition-all duration-300 overflow-hidden"
                  style={{ animationDelay: `${1.1 + index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-500/0 via-sky-500/10 to-sky-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <span className="relative flex items-center gap-1.5">
                    {label}
                    <Code className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right side - Enhanced image carousel */}
          <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="relative">
              
              {/* Animated ring backdrop */}
              <div className="absolute inset-0 -m-8">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500 opacity-20 blur-3xl animate-spin-slow" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-sky-500 opacity-20 blur-3xl animate-spin-slow-reverse" />
              </div>

              {/* Image container with 3D effect */}
              <div 
                className="relative group"
                style={{
                  transform: `perspective(1000px) rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg)`,
                  transition: 'transform 0.3s ease-out',
                }}
              >
                {/* Glowing border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500 rounded-3xl opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-300 animate-gradient-rotate" />
                
                {/* Main image frame */}
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-2 backdrop-blur-xl border border-slate-700/50">
                  <div className="relative overflow-hidden rounded-2xl w-96 h-96 lg:w-[28rem] lg:h-[32rem] bg-slate-900">
                    
                    {/* Image carousel */}
                    {carouselImages.map((image, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                          index === currentImageIndex
                            ? 'opacity-100 scale-100 blur-0'
                            : 'opacity-0 scale-110 blur-sm'
                        }`}
                      >
                        <img 
                          src={image}
                          alt={`Jeremy Bravoge - Professional Developer ${index + 1}`}
                          className="w-full h-full object-cover object-top"
                          style={{
                            filter: 'contrast(1.1) saturate(1.15) brightness(1.05)',
                            objectPosition: 'center top 20%'
                          }}
                        />
                      </div>
                    ))}
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Animated scan line effect */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                      <div className="h-full w-full bg-gradient-to-b from-transparent via-sky-400/30 to-transparent animate-scan-line" />
                    </div>

                    {/* Carousel indicators */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20 bg-slate-900/50 backdrop-blur-sm px-4 py-2 rounded-full">
                      {carouselImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`transition-all duration-300 rounded-full ${
                            index === currentImageIndex
                              ? 'bg-sky-400 w-8 h-2'
                              : 'bg-slate-500/50 hover:bg-slate-400 w-2 h-2'
                          }`}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>

                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-sky-400/50 rounded-tl-2xl" />
                    <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-emerald-400/50 rounded-br-2xl" />
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-sky-500/30 to-transparent rounded-full blur-xl animate-float" />
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-emerald-500/30 to-transparent rounded-full blur-xl animate-float-delayed" />
                
                {/* Decorative tech badge */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-gradient-to-r from-slate-800 to-slate-900 rounded-full border border-sky-500/30 backdrop-blur-sm flex items-center gap-2 shadow-xl">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-ring" />
                  <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">
                    Open to Work
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="w-8 h-12 border-2 border-sky-400/50 rounded-full flex justify-center p-2 backdrop-blur-sm bg-slate-900/20">
          <div className="w-1.5 h-3 bg-gradient-to-b from-sky-400 to-transparent rounded-full animate-scroll-indicator" />
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes gradient-x-reverse {
          0%, 100% { background-position: 100% 50%; }
          50% { background-position: 0% 50%; }
        }

        @keyframes gradient-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }

        @keyframes pulse-ring {
          0% { box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(56, 189, 248, 0); }
          100% { box-shadow: 0 0 0 0 rgba(56, 189, 248, 0); }
        }

        @keyframes scan-line {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) translateX(-50%); }
          50% { transform: translateY(-10px) translateX(-50%); }
        }

        @keyframes scroll-indicator {
          0% { opacity: 0; transform: translateY(0); }
          50% { opacity: 1; }
          100% { opacity: 0; transform: translateY(10px); }
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .animate-gradient-x-reverse {
          background-size: 200% 200%;
          animation: gradient-x-reverse 3s ease infinite;
        }

        .animate-gradient-rotate {
          animation: gradient-rotate 8s linear infinite;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 15s linear infinite;
        }

        .animate-blink {
          animation: blink 1s step-end infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-pulse-ring {
          animation: pulse-ring 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
        }

        .animate-scan-line {
          animation: scan-line 8s linear infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out forwards;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-scroll-indicator {
          animation: scroll-indicator 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;