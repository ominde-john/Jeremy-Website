import React, { useState, useEffect } from 'react';
import { 
  Mail, Phone, MapPin, ChevronUp,
  Linkedin, Github, Twitter, Globe,
  Code, Briefcase, Award, TrendingUp
} from 'lucide-react';

const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear());
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Check scroll position for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const quickLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Collections', href: '#collections' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Web Development', href: '#services' },
    { name: 'Mobile Apps', href: '#services' },
    { name: 'Cloud Solutions', href: '#services' },
    { name: 'Tech Consulting', href: '#services' }
  ];

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com/in/yourprofile', 
      icon: Linkedin,
      handle: '@jeremybravoge'
    },
    { 
      name: 'GitHub', 
      href: 'https://github.com/yourprofile', 
      icon: Github,
      handle: '@jeremybravoge'
    },
    { 
      name: 'Twitter', 
      href: 'https://twitter.com/jeremybravoge', 
      icon: Twitter,
      handle: '@jeremybravoge'
    }
  ];

  const stats = [
    { icon: Briefcase, label: 'Projects Completed', value: '50+' },
    { icon: Award, label: 'Years Experience', value: '5+' },
    { icon: TrendingUp, label: 'Happy Clients', value: '30+' },
    { icon: Code, label: 'Lines of Code', value: '100K+' }
  ];

  return (
    <>
      <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
        {/* Stats Section */}
        <div className="bg-gray-800 border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">teksoft.co.ke</h2>
                <p className="text-blue-400 font-medium mb-4">Software Development & Tech Solutions</p>
                <p className="text-gray-400 leading-relaxed max-w-md">
                  Building innovative digital solutions for businesses across Kenya and beyond. 
                  Specializing in web development, mobile apps, and cloud infrastructure.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <a 
                  href="mailto:hello@teksoft.co.ke" 
                  className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">hello@teksoft.co.ke</span>
                </a>
                <a 
                  href="tel:+254700000000" 
                  className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+254 115 000 514</span>
                </a>
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Nairobi, Kenya</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                      title={social.name}
                    >
                      <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300">
                        <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Globe className="w-4 h-4" />
                <a 
                  href="https://teksoft.co.ke" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  www.teksoft.co.ke
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-gray-950 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              <div className="text-gray-400">
                © {currentYear} <span className="text-white font-medium">teksoft.co.ke</span>. All rights reserved.
              </div>
              
              <div className="flex items-center gap-6 text-gray-400">
                <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 z-50 group"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
          </button>
        )}
      </footer>
    </>
  );
};

export default Footer;