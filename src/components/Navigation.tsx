
import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Terminal, User, BookOpen, Camera, MessageCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', icon: <Terminal className="w-4 h-4" /> },
    { name: 'About', href: '/#story', icon: <User className="w-4 h-4" /> },
    { name: 'Skills', href: '/#passions', icon: <Code className="w-4 h-4" /> },
    { name: 'Projects', href: '/#gallery', icon: <Camera className="w-4 h-4" /> },
    { name: 'Education', href: '/education', icon: <BookOpen className="w-4 h-4" /> },
    { name: 'Journal', href: '/journal', icon: <MessageCircle className="w-4 h-4" /> },
    { name: 'Contact', href: '/#connect', icon: <MessageCircle className="w-4 h-4" /> },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    
    if (href.startsWith('/#') && location.pathname === '/') {
      const elementId = href.substring(2);
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-emerald-500 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gradient">Jeremy Bravoge</h1>
              <p className="text-xs text-slate-400">Computer Science Student</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              item.href.startsWith('/#') ? (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-300 hover:text-sky-400 hover:bg-slate-800/50 transition-all duration-300 font-medium"
                >
                  {item.icon}
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-300 hover:text-sky-400 hover:bg-slate-800/50 transition-all duration-300 font-medium"
                >
                  {item.icon}
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden p-2 text-slate-300 hover:text-sky-400"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-md rounded-lg mt-2 p-4 border border-slate-700 animate-fade-in">
            {navItems.map((item) => (
              item.href.startsWith('/#') ? (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="flex items-center gap-3 py-3 text-slate-300 hover:text-sky-400 transition-colors duration-300 font-medium"
                >
                  {item.icon}
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 py-3 text-slate-300 hover:text-sky-400 transition-colors duration-300 font-medium"
                >
                  {item.icon}
                  {item.name}
                </Link>
              )
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
