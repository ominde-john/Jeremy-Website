import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Terminal, User, BookOpen, Camera, MessageCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', icon: <Terminal className="w-4 h-4" /> },
    { name: 'About', href: '/story', icon: <User className="w-4 h-4" /> },
    { name: 'Skills', href: '/passions', icon: <Code className="w-4 h-4" /> },
    { name: 'Projects', href: '/gallery', icon: <Camera className="w-4 h-4" /> },
    { name: 'Education', href: '/education', icon: <BookOpen className="w-4 h-4" /> },
    { name: 'Journal', href: '/journal', icon: <MessageCircle className="w-4 h-4" /> },
    { name: 'Contact', href: '/connect', icon: <MessageCircle className="w-4 h-4" /> },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    
    const sectionPaths = ['/story', '/passions', '/gallery', '/education', '/journal', '/connect'];
    if (sectionPaths.includes(href) && location.pathname === '/') {
      const elementId = href.substring(1);
      const element = document.getElementById(elementId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else if (href === '/' && location.pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  // Check if current path matches nav item
  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    
    // For section links on home page
    if (location.pathname === '/' && ['/story', '/passions', '/gallery', '/education', '/journal', '/connect'].includes(href)) {
      return false; // We'll handle scrollspy separately if needed
    }
    
    return location.pathname === href;
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800/50 shadow-lg' 
        : 'bg-slate-900/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group"
            onClick={() => handleNavClick('/')}
          >
            <div className="w-9 h-9 bg-gradient-to-br from-sky-500 to-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <Code className="w-4 h-4 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
                Jeremy Bravoge
              </h1>
              <p className="text-xs text-slate-400">CS Student</p>
            </div>
          </Link>

          {/* Desktop Navigation - Improved */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive(item.href)
                    ? 'text-white bg-slate-800/80'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <span className={`${isActive(item.href) ? 'text-sky-400' : 'text-slate-400'}`}>
                  {item.icon}
                </span>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Menu - Improved */}
        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-xl">
              <div className="px-4 py-3 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive(item.href)
                        ? 'text-white bg-slate-800'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    <span className={`${isActive(item.href) ? 'text-sky-400' : 'text-slate-400'}`}>
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;