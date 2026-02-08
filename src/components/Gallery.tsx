import React, { useState } from 'react';
import { Heart, Eye, Folder, Star, Briefcase } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('work');

  const categories = [
    { id: 'work', name: 'Work', icon: Briefcase },
    { id: 'collections', name: 'Collections', icon: Folder },
    { id: 'liked', name: 'Liked Shots', icon: Heart }
  ];

  const portfolioItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      title: "School Management System",
      tags: "React + Node + PostgreSQL",
      likes: 245,
      views: 1832,
      category: 'work',
      company: 'teksoft.co.ke'
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
      title: "MPESA Donation Platform",
      tags: "Laravel / React",
      likes: 189,
      views: 1456,
      category: 'work',
      company: 'teksoft.co.ke'
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      title: "WordPress Admin Customizations",
      tags: "WordPress",
      likes: 132,
      views: 987,
      category: 'work',
      company: 'teksoft.co.ke'
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      title: "Flutter UI Prototypes",
      tags: "Flutter / Dart",
      likes: 278,
      views: 2134,
      category: 'work',
      company: 'teksoft.co.ke'
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop",
      title: "YouTube Media Editing",
      tags: "Video Production",
      likes: 156,
      views: 1123,
      category: 'work',
      company: 'teksoft.co.ke'
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
      title: "IoT Learning Projects",
      tags: "Arduino / Sensors",
      likes: 98,
      views: 756,
      category: 'work',
      company: 'teksoft.co.ke'
    }
  ];

  // Collections data - organized project groupings
  const collections = [
    {
      id: 1,
      name: "Web Development Projects",
      description: "Full-stack web applications built with modern frameworks",
      count: 8,
      thumbnail: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop",
      category: 'collections'
    },
    {
      id: 2,
      name: "Mobile Apps",
      description: "Cross-platform mobile solutions using Flutter and React Native",
      count: 5,
      thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      category: 'collections'
    },
    {
      id: 3,
      name: "Data Science & Analytics",
      description: "Machine learning models and data visualization dashboards",
      count: 12,
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      category: 'collections'
    },
    {
      id: 4,
      name: "UI/UX Design",
      description: "Interface designs and user experience projects",
      count: 15,
      thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
      category: 'collections'
    },
    {
      id: 5,
      name: "E-commerce Solutions",
      description: "Online stores and payment integration systems",
      count: 6,
      thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      category: 'collections'
    },
    {
      id: 6,
      name: "API & Backend",
      description: "RESTful APIs, microservices, and server infrastructure",
      count: 10,
      thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      category: 'collections'
    }
  ];

  // Liked shots - inspiration and favorite designs
  const likedShots = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
      title: "Modern Dashboard Design",
      author: "Design Inspiration",
      likes: 1204,
      views: 15420,
      category: 'liked'
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=600&fit=crop",
      title: "Minimalist Mobile UI",
      author: "UI Patterns",
      likes: 892,
      views: 12300,
      category: 'liked'
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop",
      title: "Gradient Color Schemes",
      author: "Color Theory",
      likes: 2156,
      views: 28900,
      category: 'liked'
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop",
      title: "3D Animation Concepts",
      author: "Motion Design",
      likes: 1876,
      views: 23400,
      category: 'liked'
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&h=600&fit=crop",
      title: "E-commerce UX Flow",
      author: "UX Research",
      likes: 945,
      views: 11200,
      category: 'liked'
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
      title: "Dark Mode Interfaces",
      author: "Interface Design",
      likes: 1523,
      views: 19800,
      category: 'liked'
    }
  ];

  const filteredItems = selectedCategory === 'work' 
    ? portfolioItems 
    : selectedCategory === 'collections'
    ? collections
    : likedShots;

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header with teksoft.co.ke branding */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white mb-1">teksoft.co.ke</h1>
              <p className="text-sm text-gray-400">Software Development & Tech Solutions</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <Briefcase className="w-4 h-4" />
              <span>Founder & Lead Developer</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-8">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`py-4 px-2 text-sm font-medium transition-colors relative flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'text-white'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                  {selectedCategory === category.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Work Portfolio Grid */}
        {selectedCategory === 'work' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative bg-gray-800 rounded-xl overflow-hidden mb-4 aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                    <div className="flex items-center gap-2 text-white">
                      <Heart className="w-5 h-5" />
                      <span className="text-sm font-medium">{item.likes}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                      <Eye className="w-5 h-5" />
                      <span className="text-sm font-medium">{item.views}</span>
                    </div>
                  </div>

                  {/* Company Badge */}
                  <div className="absolute top-3 right-3 bg-blue-600 px-2 py-1 rounded text-xs font-medium text-white">
                    {item.company}
                  </div>
                </div>

                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-white mb-1 truncate group-hover:text-pink-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-400 truncate">{item.tags}</p>
                  </div>
                  
                  <div className="hidden lg:flex items-center gap-3 text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5" />
                      <span>{item.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" />
                      <span>{item.views}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Collections Grid */}
        {selectedCategory === 'collections' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <div key={collection.id} className="group cursor-pointer">
                <div className="relative bg-gray-800 rounded-xl overflow-hidden mb-4 aspect-[4/3]">
                  <img
                    src={collection.thumbnail}
                    alt={collection.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Folder className="w-5 h-5 text-blue-400" />
                        <span className="text-sm font-medium text-white">{collection.count} projects</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {collection.name}
                  </h3>
                  <p className="text-xs text-gray-400 line-clamp-2">{collection.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Liked Shots Grid */}
        {selectedCategory === 'liked' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {likedShots.map((shot) => (
              <div key={shot.id} className="group cursor-pointer">
                <div className="relative bg-gray-800 rounded-xl overflow-hidden mb-4 aspect-[4/3]">
                  <img
                    src={shot.image}
                    alt={shot.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                    <div className="flex items-center gap-2 text-white">
                      <Heart className="w-5 h-5 fill-red-500 text-red-500" />
                      <span className="text-sm font-medium">{shot.likes}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                      <Eye className="w-5 h-5" />
                      <span className="text-sm font-medium">{shot.views}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-white mb-1 truncate group-hover:text-pink-400 transition-colors">
                      {shot.title}
                    </h3>
                    <p className="text-xs text-gray-400 truncate">by {shot.author}</p>
                  </div>
                  
                  <div className="hidden lg:flex items-center gap-3 text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5" />
                      <span>{shot.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" />
                      <span>{shot.views}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;