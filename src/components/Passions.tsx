
import React from 'react';
import { ChefHat, Camera, Palette, Music, Book, Plane, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Passions = () => {
  const hobbies = [
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: "Cooking",
      description: "Best dish: Homemade pasta with truffle oil. Worst: Attempted soufflé (it was pancake-flat). Currently obsessing over fermentation!",
      color: "bg-sunset-coral"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Photography",
      description: "Golden hour enthusiast and street photography lover. My camera roll is 90% sunsets and food shots (no shame).",
      color: "bg-sunset-peach"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative Side",
      description: "Weekend watercolor sessions, terrible guitar playing, and writing poetry that makes my friends cringe beautifully.",
      color: "bg-sunset-golden"
    }
  ];

  const obsessions = [
    "Learning Italian (ciao bella!)",
    "Fermenting hot sauce",
    "Binging The Bear (again)",
    "Sustainable travel hacks",
    "Vintage film cameras"
  ];

  const bucketList = [
    {
      icon: <Book className="w-5 h-5" />,
      item: "Write a children's book"
    },
    {
      icon: <Plane className="w-5 h-5" />,
      item: "Visit every national park"
    },
    {
      icon: <Music className="w-5 h-5" />,
      item: "Dance in the rain in every continent"
    },
    {
      icon: <Target className="w-5 h-5" />,
      item: "Master the art of sourdough"
    },
    {
      icon: <Camera className="w-5 h-5" />,
      item: "Capture the Northern Lights"
    }
  ];

  return (
    <section id="passions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            🔥 Passions & Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The things that make my soul happy and keep me up way too late
          </p>
        </div>

        {/* Hobbies */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Hobbies:</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {hobbies.map((hobby, index) => (
              <Card key={index} className="hover-lift group">
                <CardHeader className="text-center">
                  <div className={`${hobby.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                    {hobby.icon}
                  </div>
                  <CardTitle className="text-xl">{hobby.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{hobby.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Current Obsessions */}
          <Card className="hover-lift animate-slide-in-left">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                Current Obsessions:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {obsessions.map((obsession, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-sunset-coral/5 rounded-lg hover:bg-sunset-coral/10 transition-colors duration-300">
                    <div className="w-2 h-2 bg-sunset-coral rounded-full"></div>
                    <span className="text-gray-700">{obsession}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Bucket List */}
          <Card className="hover-lift animate-scale-in">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <span className="text-2xl">🪣</span>
                Bucket List:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {bucketList.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 border border-gray-200 rounded-lg hover:border-sunset-coral hover:bg-sunset-coral/5 transition-all duration-300 group">
                    <div className="text-sunset-coral group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <span className="text-gray-700 group-hover:text-gray-900">{item.item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Passions;
