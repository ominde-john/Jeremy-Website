
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, User, Heart, BookOpen, Lightbulb, Coffee } from 'lucide-react';

const Journal = () => {
  const journalEntries = [
    {
      id: 1,
      title: "Starting My Computer Science Journey",
      date: "2024-01-15",
      category: "Education",
      excerpt: "Today marks the beginning of an exciting new chapter. After completing Form Four, I've decided to pursue Computer Science...",
      content: "The decision wasn't easy, but I've always been fascinated by how technology shapes our world. From mobile apps to websites, everything seems to run on code, and I want to be part of creating that future.",
      tags: ["education", "goals", "technology"],
      readTime: "3 min read"
    },
    {
      id: 2,
      title: "Learning Python: My First Programming Language",
      date: "2024-02-10",
      category: "Learning",
      excerpt: "Diving into Python has been both challenging and rewarding. Here's what I've discovered so far...",
      content: "Python's syntax is surprisingly readable, which makes it perfect for beginners like me. I've been working through basic concepts like variables, loops, and functions. Each small victory feels huge!",
      tags: ["python", "programming", "learning"],
      readTime: "5 min read"
    },
    {
      id: 3,
      title: "Building My First Web Project",
      date: "2024-03-05",
      category: "Projects",
      excerpt: "Nothing beats the feeling of seeing your code come to life in a web browser. Here's the story of my first project...",
      content: "It was just a simple calculator, but seeing it work in the browser was magical. The combination of HTML, CSS, and JavaScript opened up a whole new world of possibilities.",
      tags: ["projects", "web development", "milestone"],
      readTime: "4 min read"
    },
    {
      id: 4,
      title: "Reflections on Growth and Learning",
      date: "2024-03-20",
      category: "Reflection",
      excerpt: "Looking back at the past few months, I'm amazed at how much I've grown. Here are some thoughts on the journey...",
      content: "The imposter syndrome is real, but so is the progress. Every error message is a learning opportunity, and every solved problem builds confidence. The tech community has been incredibly supportive.",
      tags: ["growth", "reflection", "community"],
      readTime: "6 min read"
    }
  ];

  const categories = [
    { name: "All", count: journalEntries.length, color: "bg-gray-500" },
    { name: "Education", count: 1, color: "bg-teal-500" },
    { name: "Learning", count: 1, color: "bg-blue-500" },
    { name: "Projects", count: 1, color: "bg-purple-500" },
    { name: "Reflection", count: 1, color: "bg-pink-500" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="journal-gradient py-20 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              📝 My Learning Journal
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              Documenting my journey through computer science, one entry at a time
            </p>
            <div className="flex items-center justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                <span>{journalEntries.length} entries</span>
              </div>
              <div className="flex items-center gap-2">
                <Coffee className="w-5 h-5" />
                <span>Weekly updates</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                <span>Authentic thoughts</span>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8 text-center">Browse by Category</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                >
                  <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                  <span className="font-medium">{category.name}</span>
                  <span className="text-sm text-gray-500">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Journal Entries */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {journalEntries.map((entry, index) => (
                <Card key={entry.id} className="hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-pink-100 p-2 rounded-lg">
                        <User className="w-5 h-5 text-pink-600" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(entry.date).toLocaleDateString()}</span>
                          <span>•</span>
                          <span>{entry.readTime}</span>
                        </div>
                        <div className="inline-block bg-pink-100 text-pink-700 px-2 py-1 rounded text-xs font-medium mt-1">
                          {entry.category}
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-xl hover:text-pink-600 transition-colors cursor-pointer">
                      {entry.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{entry.excerpt}</p>
                    <p className="text-gray-700 mb-4 italic">"{entry.content}"</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {entry.tags.map((tag, i) => (
                        <span key={i} className="bg-pink-50 text-pink-600 px-2 py-1 rounded text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <button className="text-pink-600 font-medium hover:text-pink-700 transition-colors">
                      Read full entry →
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-pink-50 rounded-2xl p-8">
              <Lightbulb className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Stay Updated</h2>
              <p className="text-lg text-gray-600 mb-6">
                Get notified when I publish new entries about my learning journey, tech discoveries, and personal growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <button className="bg-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-pink-700 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                No spam, just genuine updates about my journey. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Journal;
