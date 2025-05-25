
import React from 'react';
import { MapPin, GraduationCap, Compass, Heart, Sparkles, Coffee } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Story = () => {
  const beliefs = ["Kindness", "Taking the scenic route", "Imperfect action"];
  
  const highlights = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Born in [Place]",
      description: "Fun fact about your birthplace or childhood"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "College",
      description: "Major + weirdest class you ever took"
    },
    {
      icon: <Compass className="w-6 h-6" />,
      title: "Turning point",
      description: "That big life decision that changed everything"
    }
  ];

  const qAndA = [
    {
      question: "Fictional character I'd be:",
      answer: "Hermione Granger (organized chaos)"
    },
    {
      question: "Spirit animal:",
      answer: "Golden retriever because eternal optimism"
    },
    {
      question: "Unreasonably happy about:",
      answer: "Fresh notebooks, smell of rain, perfect coffee foam art"
    }
  ];

  return (
    <section id="story" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            📖 My Story
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* TL;DR */}
          <div className="animate-slide-in-left">
            <Card className="hover-lift">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-sunset-coral" />
                  TL;DR:
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Started as a [profession] in [place], realized life's too short for bad coffee and boring routines. 
                  Now I'm building a location-independent lifestyle while chasing sunsets and collecting stories. 
                  Currently based in [current location] but my heart belongs to the road.
                </p>
              </CardContent>
            </Card>

            {/* I Believe In */}
            <Card className="hover-lift mt-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Heart className="w-6 h-6 text-sunset-coral" />
                  I Believe In:
                </h3>
                <div className="flex flex-wrap gap-3">
                  {beliefs.map((belief, index) => (
                    <span
                      key={index}
                      className="bg-sunset-coral/10 text-sunset-coral px-4 py-2 rounded-full font-medium hover-scale"
                    >
                      {belief}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Life Highlights */}
          <div className="animate-scale-in">
            <h3 className="text-2xl font-bold mb-6">Life Highlights:</h3>
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-sunset-coral/10 p-3 rounded-full">
                        <div className="text-sunset-coral">
                          {highlight.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">{highlight.title}</h4>
                        <p className="text-gray-600">{highlight.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Q&A Section */}
        <div className="mt-16 animate-fade-in">
          <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
            <Coffee className="w-6 h-6 text-sunset-coral" />
            Q&A:
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {qAndA.map((item, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-gray-800 mb-3">{item.question}</h4>
                  <p className="text-sunset-coral font-medium">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
