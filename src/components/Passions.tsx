
import React from 'react';
import { Code, Database, Globe, Smartphone, Brain, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Passions = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Programming",
      description: "Expert in Python for backend systems, JavaScript for dynamic frontends, and React for modern web applications. Specialized in building scalable solutions.",
      color: "from-sky-500 to-cyan-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Science & ML",
      description: "Advanced machine learning implementations, data visualization with modern tools, and predictive analytics for business intelligence.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Enterprise Web Solutions",
      description: "Building responsive, performant web applications with React, Node.js, and cloud infrastructure. Focus on user experience and scalability.",
      color: "from-purple-500 to-violet-500"
    }
  ];

  const currentFocus = [
    "Advanced Python frameworks",
    "Machine Learning deployment",
    "React ecosystem mastery",
    "Cloud architecture design",
    "API development & optimization"
  ];

  const goals = [
    {
      icon: <Brain className="w-5 h-5" />,
      item: "Lead AI/ML project implementations"
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      item: "Develop cross-platform applications"
    },
    {
      icon: <Target className="w-5 h-5" />,
      item: "Mentor upcoming Kenyan developers"
    },
    {
      icon: <Database className="w-5 h-5" />,
      item: "Architect enterprise cloud solutions"
    },
    {
      icon: <Code className="w-5 h-5" />,
      item: "Expand tech innovation in Kenya"
    }
  ];

  return (
    <section id="passions" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            💻 Professional Expertise
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Transforming ideas into robust code solutions and driving innovation in Kenya's tech landscape
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-slate-100">Core Technical Competencies:</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card key={index} className="bg-slate-800/70 border border-slate-600 hover:border-sky-500/50 transition-all duration-300 hover-lift group">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center mx-auto mb-4 text-slate-900 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {skill.icon}
                  </div>
                  <CardTitle className="text-xl text-slate-100">{skill.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 leading-relaxed">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Current Focus */}
          <Card className="bg-slate-800/70 border border-slate-600 hover:border-sky-500/50 transition-all duration-300 hover-lift animate-slide-in-left">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2 text-slate-100">
                <span className="text-2xl">🎯</span>
                Current Professional Focus:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {currentFocus.map((focus, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-sky-500/10 rounded-lg hover:bg-sky-500/20 transition-colors duration-300 border border-sky-500/20">
                    <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                    <span className="text-slate-300">{focus}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Career Goals */}
          <Card className="bg-slate-800/70 border border-slate-600 hover:border-emerald-500/50 transition-all duration-300 hover-lift animate-scale-in">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2 text-slate-100">
                <span className="text-2xl">🚀</span>
                Professional Goals:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {goals.map((goal, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 border border-slate-600 rounded-lg hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300 group">
                    <div className="text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                      {goal.icon}
                    </div>
                    <span className="text-slate-300 group-hover:text-slate-100">{goal.item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tech Stack */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-800/70 to-slate-700/70 rounded-2xl p-8 max-w-4xl mx-auto border border-slate-600">
            <h3 className="text-xl font-bold mb-6 text-slate-100">Professional Tech Stack:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-slate-800/70 p-4 rounded-lg border border-slate-600">
                <h4 className="font-semibold text-sky-400 mb-2">Languages</h4>
                <p className="text-sm text-slate-400">Python, JavaScript, TypeScript</p>
              </div>
              <div className="bg-slate-800/70 p-4 rounded-lg border border-slate-600">
                <h4 className="font-semibold text-emerald-400 mb-2">Frameworks</h4>
                <p className="text-sm text-slate-400">React, Node.js, Django</p>
              </div>
              <div className="bg-slate-800/70 p-4 rounded-lg border border-slate-600">
                <h4 className="font-semibold text-purple-400 mb-2">Tools</h4>
                <p className="text-sm text-slate-400">Git, Docker, AWS</p>
              </div>
              <div className="bg-slate-800/70 p-4 rounded-lg border border-slate-600">
                <h4 className="font-semibold text-pink-400 mb-2">Databases</h4>
                <p className="text-sm text-slate-400">PostgreSQL, MongoDB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Passions;
