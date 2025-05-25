
import React, { useState } from 'react';
import { Images } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', emoji: '🌟' },
    { id: 'travel', name: 'Travel', emoji: '🌍' },
    { id: 'food', name: 'Food Adventures', emoji: '🍽️' },
    { id: 'daily', name: 'Daily Life', emoji: '☕' },
    { id: 'creative', name: 'Creative Works', emoji: '🎨' }
  ];

  const galleryItems = [
    {
      id: 1,
      src: "/lovable-uploads/977cbd89-2b52-4943-a787-83f575e4cd01.png",
      category: 'travel',
      caption: "This is me trying to surf in Portugal. I lasted 3 minutes.",
      alt: "Travel adventure"
    },
    {
      id: 2,
      src: "/lovable-uploads/87cfc6cf-0ce0-4065-ba66-93274fa708bc.png",
      category: 'daily',
      caption: "Golden hour vibes in the city",
      alt: "Daily life moment"
    },
    {
      id: 3,
      src: "/lovable-uploads/66af1b0a-31fe-41d2-b09b-091a1471d669.png",
      category: 'travel',
      caption: "Exploring urban landscapes and finding beauty everywhere",
      alt: "Urban exploration"
    },
    {
      id: 4,
      src: "/lovable-uploads/3b16d71c-8ad7-4291-b828-3e8a086ae883.png",
      category: 'daily',
      caption: "Just another Tuesday with a view",
      alt: "Casual moment"
    },
    {
      id: 5,
      src: "/lovable-uploads/4ec08e36-c43e-4a24-8740-e14a82bb927b.png",
      category: 'travel',
      caption: "When the city becomes your playground",
      alt: "City exploration"
    },
    {
      id: 6,
      src: "/lovable-uploads/c2bcaa9b-eff1-4d61-be89-2651b313aba7.png",
      category: 'daily',
      caption: "Candid moments are the best moments",
      alt: "Candid photo"
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            🌍 Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Life in pictures - the good, the messy, and the beautifully imperfect
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-ocean-blue text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover-scale'
              }`}
            >
              <span className="mr-2">{category.emoji}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white text-sm leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                {categories.find(cat => cat.id === item.category)?.emoji}
                {categories.find(cat => cat.id === item.category)?.name}
              </div>
            </div>
          ))}
        </div>

        {/* Fun Caption Examples */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-ocean-blue/10 to-forest-green/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Fun Caption Style:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <p className="text-gray-600 italic">"This is me trying to surf in Portugal. I lasted 3 minutes."</p>
              <p className="text-gray-600 italic">"When you order 'local specialty' and have no idea what you're eating."</p>
              <p className="text-gray-600 italic">"5 AM sunrise hike was worth it (barely)."</p>
              <p className="text-gray-600 italic">"That time I accidentally ordered sheep brain in Morocco."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
