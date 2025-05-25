
import React from 'react';
import { Heart, Coffee, Plane } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo */}
          <div className="text-3xl font-dancing font-bold text-gradient mb-6">
            Sunset Chaser Chronicles
          </div>

          {/* Quote */}
          <blockquote className="text-xl italic mb-8 max-w-2xl mx-auto text-gray-300">
            "Life is either a daring adventure or nothing at all."
            <br />
            <cite className="text-sm not-italic text-gray-400">- Helen Keller</cite>
          </blockquote>

          {/* Fun Icons */}
          <div className="flex justify-center gap-8 mb-8">
            <div className="flex items-center gap-2 text-sunset-coral">
              <Coffee className="w-5 h-5" />
              <span className="text-sm">Fueled by coffee</span>
            </div>
            <div className="flex items-center gap-2 text-sunset-peach">
              <Plane className="w-5 h-5" />
              <span className="text-sm">Powered by wanderlust</span>
            </div>
            <div className="flex items-center gap-2 text-sunset-golden">
              <Heart className="w-5 h-5" />
              <span className="text-sm">Made with love</span>
            </div>
          </div>

          {/* Easter Egg Hint */}
          <div className="text-sm text-gray-400 mb-8">
            <p>🎁 Hidden Easter Egg: Press ↑ ↑ ↓ to reveal a surprise!</p>
            <p className="mt-2">🍕 Pro tip: Hover over things for delightful surprises</p>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400">
              © 2024 Sunset Chaser Chronicles. Made with ❤️ and way too much coffee.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Currently chasing sunsets in [Current Location] 🌅
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
