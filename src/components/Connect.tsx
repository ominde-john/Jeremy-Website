import React from 'react';
import { Instagram, Music, BookOpen, Mail, MessageCircle, Send, Twitter } from 'lucide-react';
import { FaFacebook, FaTiktok } from 'react-icons/fa';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Connect = () => {
  const socials = [
    {
      platform: 'Instagram',
      handle: '@Jeremybravoge',
      description: 'Daily journey & tech updates',
      icon: <Instagram className="w-6 h-6" />,
      color: 'bg-gradient-to-r from-purple-500 to-pink-500',
      emoji: '📸',
      url: 'https://instagram.com/Jeremybravoge'
    },
    {
      platform: 'Twitter',
      handle: '@Jeremybravoge',
      description: 'Tech thoughts & updates',
      icon: <Twitter className="w-6 h-6" />,
      color: 'bg-blue-500',
      emoji: '🐦',
      url: 'https://twitter.com/Jeremybravoge'
    },
    {
      platform: 'TikTok',
      handle: '@Jeremybravoge',
      description: 'Fun tech & learning content',
      icon: <FaTiktok className="w-6 h-6" />,
      color: 'bg-black',
      emoji: '🎵',
      url: 'https://tiktok.com/@Jeremybravoge'
    },
    {
      platform: 'Facebook',
      handle: '@Jeremybravoge',
      description: 'Connect & networking',
      icon: <FaFacebook className="w-6 h-6" />,
      color: 'bg-blue-600',
      emoji: '👥',
      url: 'https://facebook.com/Jeremybravoge'
    }
  ];

  const contactMethods = [
    {
      title: 'Send a message',
      description: 'Let\'s talk about tech, learning, or life',
      icon: <MessageCircle className="w-8 h-8" />,
      action: 'Start a conversation'
    },
    {
      title: 'Collaboration',
      description: 'Interested in working together?',
      icon: <Send className="w-8 h-8" />,
      action: 'Let\'s collaborate'
    },
    {
      title: 'Mentorship',
      description: 'Share knowledge and learn together',
      icon: <Mail className="w-8 h-8" />,
      action: 'Connect with me'
    }
  ];

  return (
    <section id="connect" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            💌 Connect with Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's connect and share our journey in tech, learning, and growth!
          </p>
        </div>

        {/* Social Media */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Find me on:</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socials.map((social, index) => (
              <Card key={index} className="hover-lift group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <a href={social.url} target="_blank" rel="noopener noreferrer" className="block">
                    <div className={`${social.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                      {social.icon}
                    </div>
                    <h4 className="font-bold text-lg mb-2 flex items-center justify-center gap-2">
                      <span>{social.emoji}</span>
                      {social.platform}
                    </h4>
                    <p className="text-ocean-blue font-medium mb-2">{social.handle}</p>
                    <p className="text-gray-600 text-sm italic">"{social.description}"</p>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Methods */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Get in touch:</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="hover-lift group">
                <CardHeader className="text-center">
                  <div className="bg-ocean-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-ocean-blue group-hover:bg-ocean-blue group-hover:text-white transition-all duration-300">
                    {method.icon}
                  </div>
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <Button variant="outline" className="hover:bg-ocean-blue hover:text-white hover:border-ocean-blue transition-all duration-300">
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <Card className="hover-lift max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl flex items-center justify-center gap-2">
              <span className="text-2xl">📧</span>
              Let's Connect:
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg mb-6 text-gray-600">
              Whether you want to discuss tech, share learning resources, or just say hi - I'm always open to meaningful conversations.
            </p>
            <div className="bg-ocean-blue/10 rounded-lg p-6 inline-block">
              <p className="font-mono text-ocean-blue font-medium">
                Follow @Jeremybravoge across all platforms<br />
                for the latest updates and insights
              </p>
            </div>
            <p className="text-sm text-gray-500 mt-4 italic">
              Pro tip: Tag me in your tech projects - I love seeing what others are building!
            </p>
          </CardContent>
        </Card>

        {/* Fun Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="ocean-gradient rounded-2xl p-8 text-white max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to connect?</h3>
            <p className="text-lg mb-6">
              Whether you want to share tech insights, discuss learning paths, or collaborate on projects - let's make it happen!
            </p>
            <Button 
              size="lg" 
              className="bg-white text-ocean-blue hover:bg-gray-100 font-semibold px-8 py-3 rounded-full hover-scale"
            >
              Let's build something amazing! 🚀
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
