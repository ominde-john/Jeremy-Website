
import React from 'react';
import { GraduationCap, Code, Target, Heart, Sparkles, Coffee } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Story = () => {
  const beliefs = ["Continuous Learning", "Problem Solving", "Innovation", "Collaboration"];
  
  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Form Four Graduate",
      description: "Successfully completed secondary education with focus on mathematics and sciences, building foundation for tech career"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Computer Science Journey",
      description: "Currently pursuing Computer Science degree, specializing in software development and data analysis"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Tech Enthusiast",
      description: "Passionate about emerging technologies, always eager to learn new programming languages and frameworks"
    }
  ];

  const qAndA = [
    {
      question: "Programming philosophy:",
      answer: "Clean code, continuous learning, solve real problems"
    },
    {
      question: "Inspiration:",
      answer: "Making technology accessible and impactful for everyone"
    },
    {
      question: "Daily motivation:",
      answer: "Building solutions, learning something new, contributing to open source"
    }
  ];

  return (
    <section id="story" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            👨‍💻 About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Summary */}
          <div className="animate-slide-in-left">
            <Card className="skill-card hover-lift">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-slate-100">
                  <Sparkles className="w-6 h-6 text-sky-400" />
                  My Journey:
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  I'm Jeremy Bravoge, a Form Four graduate currently pursuing Computer Science with a passion for 
                  technology and innovation. My journey started with curiosity about how things work, and now 
                  I'm dedicated to building solutions that make a difference.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  From algorithms to real-world applications, I'm constantly learning and pushing myself to 
                  grow as a developer while contributing to the tech community.
                </p>
              </CardContent>
            </Card>

            {/* Core Values */}
            <Card className="skill-card hover-lift mt-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-100">
                  <Heart className="w-6 h-6 text-emerald-400" />
                  I Believe In:
                </h3>
                <div className="flex flex-wrap gap-3">
                  {beliefs.map((belief, index) => (
                    <span
                      key={index}
                      className="bg-sky-500/20 text-sky-300 border border-sky-500/30 px-4 py-2 rounded-full font-medium hover-scale transition-all duration-300"
                    >
                      {belief}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Career Highlights */}
          <div className="animate-scale-in">
            <h3 className="text-2xl font-bold mb-6 text-slate-100">Career Highlights:</h3>
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="skill-card hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-sky-500 to-emerald-500 p-3 rounded-xl">
                        <div className="text-white">
                          {highlight.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2 text-slate-100">{highlight.title}</h4>
                        <p className="text-slate-400">{highlight.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Personal Q&A */}
        <div className="mt-16 animate-fade-in">
          <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2 text-slate-100">
            <Coffee className="w-6 h-6 text-emerald-400" />
            Developer Insights:
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {qAndA.map((item, index) => (
              <Card key={index} className="skill-card hover-lift">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-slate-200 mb-3">{item.question}</h4>
                  <p className="text-sky-400 font-medium">{item.answer}</p>
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
