import React, { useState } from 'react';
import { GraduationCap, Code, Target, Heart, Sparkles, Coffee, Award, Zap, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import ScrollReveal from '@/components/ScrollReveal';

const Story = () => {
  const [activeHighlight, setActiveHighlight] = useState(0);
  
  const beliefs = [
    { text: "Continuous Innovation", icon: <Zap className="w-4 h-4" /> },
    { text: "Clean Code Architecture", icon: <Code className="w-4 h-4" /> },
    { text: "Knowledge Sharing", icon: <Heart className="w-4 h-4" /> },
    { text: "Tech Leadership", icon: <Award className="w-4 h-4" /> }
  ];
  
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Professional Programmer",
      description: "Experienced software developer specializing in full-stack solutions and data science applications",
      gradient: "from-blue-500 via-cyan-500 to-teal-500"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Kenya Tech Innovator",
      description: "Contributing to Kenya's growing technology sector through innovative solutions and mentorship",
      gradient: "from-emerald-500 via-green-500 to-teal-500"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Computer Science Expert",
      description: "Advanced expertise in algorithms, system design, and modern development methodologies",
      gradient: "from-purple-500 via-pink-500 to-rose-500"
    }
  ];

  const qAndA = [
    {
      question: "Programming philosophy:",
      answer: "Scalable solutions, best practices, real-world impact",
      icon: <Code className="w-5 h-5" />
    },
    {
      question: "Mission in Kenya:",
      answer: "Advancing local tech talent and building world-class solutions",
      icon: <Target className="w-5 h-5" />
    },
    {
      question: "Daily motivation:",
      answer: "Creating efficient code, solving complex problems, mentoring others",
      icon: <TrendingUp className="w-5 h-5" />
    }
  ];

  return (
    <section id="story" className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-sky-500/20 to-emerald-500/20 rounded-full border border-sky-500/30 backdrop-blur-sm">
                <Sparkles className="w-5 h-5 text-sky-400 animate-pulse" />
                <span className="text-sm font-semibold text-sky-300 tracking-wide uppercase">Professional Profile</span>
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-sky-200 to-emerald-200 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-sky-500 via-emerald-500 to-purple-500 rounded-full"></div>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Bio Summary */}
            <ScrollReveal direction="left">
              <Card className="group bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-700 hover:border-sky-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-sky-500/10 backdrop-blur-sm overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-emerald-500 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      My Professional Journey
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-lg text-slate-300 leading-relaxed">
                      I'm <span className="font-semibold text-sky-400">Jeremy Bravoge</span>, a professional programmer from Kenya with expertise in 
                      full-stack development and data science. My passion lies in creating <span className="font-semibold text-emerald-400">robust, 
                      scalable solutions</span> that solve real-world problems and drive innovation.
                    </p>
                    <p className="text-lg text-slate-300 leading-relaxed">
                      From enterprise applications to cutting-edge machine learning projects, I'm 
                      committed to excellence in software engineering while contributing to Kenya's 
                      growing technology ecosystem.
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-sm text-slate-400">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 border-2 border-slate-800"></div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 border-2 border-slate-800"></div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 border-2 border-slate-800"></div>
                    </div>
                    <span className="font-medium">Full-Stack • Data Science • Innovation</span>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Core Values */}
            <ScrollReveal direction="left" delay={100}>
              <Card className="group bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-700 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 backdrop-blur-sm overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      Professional Values
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {beliefs.map((belief, index) => (
                      <div
                        key={index}
                        className="group/badge relative overflow-hidden bg-gradient-to-br from-sky-500/10 to-emerald-500/10 border border-sky-500/30 px-4 py-3 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-emerald-500/20 translate-x-[-100%] group-hover/badge:translate-x-[100%] transition-transform duration-700"></div>
                        <div className="relative z-10 flex items-center gap-2">
                          <div className="text-sky-400">{belief.icon}</div>
                          <span className="font-semibold text-slate-200 text-sm">{belief.text}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Professional Image 1 - Better positioned */}
            
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Career Highlights */}
            <ScrollReveal direction="right">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-emerald-400" />
                <h3 className="text-3xl font-bold text-white">Professional Highlights</h3>
              </div>
            </ScrollReveal>
            
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <ScrollReveal key={index} direction="right" delay={index * 100}>
                  <Card 
                    className="group bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-700 hover:border-transparent transition-all duration-500 cursor-pointer overflow-hidden relative"
                    onMouseEnter={() => setActiveHighlight(index)}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${highlight.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    <div className={`absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-r ${highlight.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`}></div>
                    
                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-start gap-4">
                        <div className={`relative bg-gradient-to-br ${highlight.gradient} p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                          <div className="text-white">
                            {highlight.icon}
                          </div>
                          <div className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500`}></div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-xl mb-2 text-white group-hover:text-sky-300 transition-colors duration-300">
                            {highlight.title}
                          </h4>
                          <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                            {highlight.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>

            
          </div>
        </div>

        {/* Professional Q&A */}
        <div className="mt-20">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-purple-500/20 rounded-full border border-emerald-500/30 backdrop-blur-sm mb-4">
                <Coffee className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-semibold text-emerald-300 tracking-wide uppercase">Quick Insights</span>
              </div>
              <h3 className="text-3xl font-bold text-white">
                Professional Insights
              </h3>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-6">
            {qAndA.map((item, index) => (
              <ScrollReveal key={index} direction="scale" delay={index * 100}>
                <Card className="group bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-700 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 overflow-hidden relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-8 text-center relative z-10 flex flex-col h-full justify-between">
                    <div>
                      <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <div className="text-white">{item.icon}</div>
                      </div>
                      <h4 className="font-bold text-slate-200 mb-4 text-lg">{item.question}</h4>
                    </div>
                    <p className="text-sky-400 font-medium text-base leading-relaxed">{item.answer}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Story;