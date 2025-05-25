
import React, { useState } from 'react';
import { Code, Laptop, Users, Award } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects', emoji: '🌟' },
    { id: 'web', name: 'Web Dev', emoji: '🌐' },
    { id: 'data', name: 'Data Science', emoji: '📊' },
    { id: 'personal', name: 'Personal', emoji: '🎯' },
    { id: 'learning', name: 'Learning', emoji: '📚' }
  ];

  const galleryItems = [
    {
      id: 1,
      src: "/lovable-uploads/977cbd89-2b52-4943-a787-83f575e4cd01.png",
      category: 'personal',
      caption: "Journey through Computer Science - from algorithms to real-world applications",
      alt: "Learning journey",
      title: "CS Learning Path"
    },
    {
      id: 2,
      src: "/lovable-uploads/87cfc6cf-0ce0-4065-ba66-93274fa708bc.png",
      category: 'learning',
      caption: "Coding sessions and problem-solving marathons",
      alt: "Coding session",
      title: "Development Environment"
    },
    {
      id: 3,
      src: "/lovable-uploads/66af1b0a-31fe-41d2-b09b-091a1471d669.png",
      category: 'web',
      caption: "Building responsive web applications with modern frameworks",
      alt: "Web development",
      title: "Web Projects"
    },
    {
      id: 4,
      src: "/lovable-uploads/3b16d71c-8ad7-4291-b828-3e8a086ae883.png",
      category: 'data',
      caption: "Data visualization and analytics projects",
      alt: "Data analysis",
      title: "Data Science Work"
    },
    {
      id: 5,
      src: "/lovable-uploads/4ec08e36-c43e-4a24-8740-e14a82bb927b.png",
      category: 'personal',
      caption: "Exploring new technologies and frameworks",
      alt: "Tech exploration",
      title: "Tech Exploration"
    },
    {
      id: 6,
      src: "/lovable-uploads/c2bcaa9b-eff1-4d61-be89-2651b313aba7.png",
      category: 'learning',
      caption: "Collaborative learning and team projects",
      alt: "Team collaboration",
      title: "Team Projects"
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            🚀 Projects & Work
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A showcase of my development journey, projects, and technical achievements
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 border ${
                selectedCategory === category.id
                  ? 'bg-sky-500 text-white border-sky-500 shadow-lg scale-105'
                  : 'bg-slate-700 text-slate-300 border-slate-600 hover:bg-slate-600 hover-scale'
              }`}
            >
              <span className="mr-2">{category.emoji}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover-lift animate-scale-in bg-slate-700 border border-slate-600"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Project Info Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-slate-200 border border-slate-600">
                {categories.find(cat => cat.id === item.category)?.emoji}
                {categories.find(cat => cat.id === item.category)?.name}
              </div>

              {/* Tech Stack Indicator */}
              <div className="absolute top-4 right-4 flex gap-1">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Highlights */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-8 max-w-4xl mx-auto border border-slate-700">
            <h3 className="text-xl font-bold mb-6 text-slate-100">Development Milestones:</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <Code className="w-8 h-8 text-sky-400" />
                <div>
                  <h4 className="font-semibold text-slate-100">500+ Hours</h4>
                  <p className="text-sm text-slate-400">Coding Practice</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Laptop className="w-8 h-8 text-emerald-400" />
                <div>
                  <h4 className="font-semibold text-slate-100">10+ Projects</h4>
                  <p className="text-sm text-slate-400">Completed</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-purple-400" />
                <div>
                  <h4 className="font-semibold text-slate-100">CS Student</h4>
                  <p className="text-sm text-slate-400">Current Status</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
