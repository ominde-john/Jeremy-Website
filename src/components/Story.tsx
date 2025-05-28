
import React from 'react';
import { GraduationCap, Code, Target, Heart, Sparkles, Coffee } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Story = () => {
  const beliefs = ["Continuous Innovation", "Clean Code Architecture", "Knowledge Sharing", "Tech Leadership"];
  
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Professional Programmer",
      description: "Experienced software developer specializing in full-stack solutions and data science applications"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Kenya Tech Innovator",
      description: "Contributing to Kenya's growing technology sector through innovative solutions and mentorship"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Computer Science Expert",
      description: "Advanced expertise in algorithms, system design, and modern development methodologies"
    }
  ];

  const qAndA = [
    {
      question: "Programming philosophy:",
      answer: "Scalable solutions, best practices, real-world impact"
    },
    {
      question: "Mission in Kenya:",
      answer: "Advancing local tech talent and building world-class solutions"
    },
    {
      question: "Daily motivation:",
      answer: "Creating efficient code, solving complex problems, mentoring others"
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
            <Card className="bg-slate-800/70 border border-slate-600 hover:border-sky-500/50 transition-all duration-300 hover-lift">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-slate-100">
                  <Sparkles className="w-6 h-6 text-sky-400" />
                  My Professional Journey:
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  I'm Jeremy Bravoge, a professional programmer from Kenya with expertise in 
                  full-stack development and data science. My passion lies in creating robust, 
                  scalable solutions that solve real-world problems and drive innovation.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  From enterprise applications to cutting-edge machine learning projects, I'm 
                  committed to excellence in software engineering while contributing to Kenya's 
                  growing technology ecosystem.
                </p>
              </CardContent>
            </Card>

            {/* Core Values */}
            <Card className="bg-slate-800/70 border border-slate-600 hover:border-emerald-500/50 transition-all duration-300 hover-lift mt-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-100">
                  <Heart className="w-6 h-6 text-emerald-400" />
                  Professional Values:
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

            {/* Professional Image with enhanced face positioning */}
            <div className="mt-8 rounded-2xl overflow-hidden">
              <img 
                src="/lovable-uploads/3b16d71c-8ad7-4291-b828-3e8a086ae883.png"
                alt="Jeremy Bravoge - Professional Developer"
                className="w-full h-64 object-cover rounded-2xl border border-slate-600"
                style={{
                  objectPosition: 'center top 15%',
                  filter: 'contrast(1.2) saturate(1.1) brightness(1.05)'
                }}
              />
            </div>
          </div>

          {/* Career Highlights */}
          <div className="animate-scale-in">
            <h3 className="text-2xl font-bold mb-6 text-slate-100">Professional Highlights:</h3>
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="bg-slate-800/70 border border-slate-600 hover:border-sky-500/50 transition-all duration-300 hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-sky-500 to-emerald-500 p-3 rounded-xl">
                        <div className="text-slate-900">
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

            {/* Additional Professional Image with enhanced face positioning */}
            <div className="mt-8 rounded-2xl overflow-hidden">
              <img 
                src="/lovable-uploads/4ec08e36-c43e-4a24-8740-e14a82bb927b.png"
                alt="Jeremy Bravoge - Technology Focus"
                className="w-full h-64 object-cover rounded-2xl border border-slate-600"
                style={{
                  objectPosition: 'center top 20%',
                  filter: 'contrast(1.2) saturate(1.1) brightness(1.05)'
                }}
              />
            </div>
          </div>
        </div>

        {/* Professional Q&A */}
        <div className="mt-16 animate-fade-in">
          <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2 text-slate-100">
            <Coffee className="w-6 h-6 text-emerald-400" />
            Professional Insights:
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {qAndA.map((item, index) => (
              <Card key={index} className="bg-slate-800/70 border border-slate-600 hover:border-purple-500/50 transition-all duration-300 hover-lift">
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
