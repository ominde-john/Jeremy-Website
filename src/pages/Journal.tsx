
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, BookOpen, Heart, Compass } from 'lucide-react';

const Journal = () => {
  const journalEntries = [
    {
      id: 1,
      title: "Why I Spent a Year Saying Yes to Everything",
      category: "Reflections",
      date: "March 15, 2024",
      excerpt: "It started with a simple challenge: say yes to every opportunity for one year. What I learned changed everything...",
      image: "/lovable-uploads/977cbd89-2b52-4943-a787-83f575e4cd01.png",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "The Art of Getting Lost in Portugal",
      category: "Adventures",
      date: "February 28, 2024",
      excerpt: "Sometimes the best discoveries happen when you throw away the map and follow your curiosity...",
      image: "/lovable-uploads/87cfc6cf-0ce0-4065-ba66-93274fa708bc.png",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "5 Books That Changed My Perspective",
      category: "Recommendations",
      date: "February 10, 2024",
      excerpt: "These reads didn't just entertain me—they shifted how I see the world and my place in it...",
      image: "/lovable-uploads/66af1b0a-31fe-41d2-b09b-091a1471d669.png",
      readTime: "6 min read"
    }
  ];

  const categories = [
    { name: "Reflections", icon: <Heart className="w-5 h-5" />, color: "ocean-blue" },
    { name: "Adventures", icon: <Compass className="w-5 h-5" />, color: "forest-green" },
    { name: "Recommendations", icon: <BookOpen className="w-5 h-5" />, color: "earth-brown" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="ocean-gradient py-20 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              ✍️ Journal
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              Thoughts, adventures, and lessons learned along the way
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <Card key={index} className="hover-lift text-center">
                  <CardContent className="p-8">
                    <div className={`bg-${category.color}/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <div className={`text-${category.color}`}>
                        {category.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold">{category.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Journal Entries */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {journalEntries.map((entry, index) => (
                <Card key={entry.id} className="hover-lift animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={entry.image}
                      alt={entry.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-ocean-blue/10 text-ocean-blue px-3 py-1 rounded-full text-sm font-medium">
                        {entry.category}
                      </span>
                      <span className="text-gray-500 text-sm flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {entry.date}
                      </span>
                    </div>
                    <CardTitle className="text-xl mb-2">{entry.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 leading-relaxed">{entry.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <button className="text-ocean-blue font-medium hover:underline">
                        Read More →
                      </button>
                      <span className="text-gray-400 text-sm">{entry.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-ocean-blue/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Stay in the Loop</h2>
            <p className="text-xl text-gray-600 mb-8">
              Get new stories and adventures delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ocean-blue focus:border-transparent"
              />
              <button className="bg-ocean-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-ocean-deep transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Journal;
