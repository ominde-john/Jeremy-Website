
import React from 'react';
import { Instagram, Music, BookOpen, Mail, MessageCircle, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Connect = () => {
  const socials = [
    {
      platform: 'Instagram',
      handle: '@sunsetChaser',
      description: 'For daily nonsense',
      icon: <Instagram className="w-6 h-6" />,
      color: 'bg-gradient-to-r from-purple-500 to-pink-500',
      emoji: '📸'
    },
    {
      platform: 'Spotify',
      handle: 'SunsetVibes',
      description: "'90s hip-hop forever",
      icon: <Music className="w-6 h-6" />,
      color: 'bg-green-500',
      emoji: '🎵'
    },
    {
      platform: 'Goodreads',
      handle: 'BookwormNomad',
      description: "Let's argue about books",
      icon: <BookOpen className="w-6 h-6" />,
      color: 'bg-amber-600',
      emoji: '📚'
    }
  ];

  const contactMethods = [
    {
      title: 'Send a meme',
      description: 'Because life is too short for serious emails',
      icon: <MessageCircle className="w-8 h-8" />,
      action: 'Share a laugh'
    },
    {
      title: 'Voice note',
      description: 'I love hearing accents and stories',
      icon: <Send className="w-8 h-8" />,
      action: 'Record a message'
    },
    {
      title: 'Dad joke',
      description: 'The worse, the better honestly',
      icon: <Mail className="w-8 h-8" />,
      action: 'Tell me a joke'
    }
  ];

  return (
    <section id="connect" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            💌 Connect
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's be friends! I promise I'm more interesting than my terrible dad jokes suggest
          </p>
        </div>

        {/* Social Media */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Find me on:</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {socials.map((social, index) => (
              <Card key={index} className="hover-lift group cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className={`${social.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                    {social.icon}
                  </div>
                  <h4 className="font-bold text-xl mb-2 flex items-center justify-center gap-2">
                    <span>{social.emoji}</span>
                    {social.platform}
                  </h4>
                  <p className="text-sunset-coral font-medium mb-2">{social.handle}</p>
                  <p className="text-gray-600 text-sm italic">"{social.description}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Methods */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Contact me:</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="hover-lift group">
                <CardHeader className="text-center">
                  <div className="bg-sunset-coral/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-sunset-coral group-hover:bg-sunset-coral group-hover:text-white transition-all duration-300">
                    {method.icon}
                  </div>
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <Button variant="outline" className="hover:bg-sunset-coral hover:text-white hover:border-sunset-coral transition-all duration-300">
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Pen Pal Club */}
        <Card className="hover-lift max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl flex items-center justify-center gap-2">
              <span className="text-2xl">✉️</span>
              Pen Pal Club:
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg mb-6 text-gray-600">
              Want to write actual letters? There's something magical about handwritten notes in our digital world.
            </p>
            <div className="bg-sunset-coral/10 rounded-lg p-6 inline-block">
              <p className="font-mono text-sunset-coral font-medium">
                PO Box 123<br />
                Your City, State 12345<br />
                Country
              </p>
            </div>
            <p className="text-sm text-gray-500 mt-4 italic">
              Pro tip: Include a polaroid or local postcard - I collect them!
            </p>
          </CardContent>
        </Card>

        {/* Fun Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="sunset-gradient rounded-2xl p-8 text-white max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to connect?</h3>
            <p className="text-lg mb-6">
              Whether you want to share travel tips, swap book recommendations, or just say hi - I'm all ears!
            </p>
            <Button 
              size="lg" 
              className="bg-white text-sunset-coral hover:bg-gray-100 font-semibold px-8 py-3 rounded-full hover-scale"
            >
              Let's be friends! 👋
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
