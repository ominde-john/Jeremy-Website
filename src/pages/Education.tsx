
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Award, BookOpen, Users, Trophy, Calendar } from 'lucide-react';

const Education = () => {
  const educationTimeline = [
    {
      year: "2024-Present",
      institution: "University/College Name",
      degree: "Bachelor's in Computer Science",
      location: "City, Country",
      description: "Currently pursuing my passion for technology and software development. Focusing on programming fundamentals, data structures, and web development.",
      achievements: ["Outstanding Form Four Graduate", "Programming Club Member", "First Coding Project Completed"],
      image: "/lovable-uploads/66af1b0a-31fe-41d2-b09b-091a1471d669.png"
    },
    {
      year: "2020-2023",
      institution: "Secondary School Name",
      degree: "Form Four Certificate",
      location: "Tanzania",
      description: "Completed secondary education with excellent performance. Discovered my passion for mathematics and science, which led me to pursue computer science.",
      achievements: ["Form Four Graduate", "Mathematics Excellence Award", "Science Club President"],
      image: "/lovable-uploads/87cfc6cf-0ce0-4065-ba66-93274fa708bc.png"
    }
  ];

  const skills = [
    { name: "Programming", level: 75, icon: <BookOpen className="w-5 h-5" /> },
    { name: "Problem Solving", level: 85, icon: <Trophy className="w-5 h-5" /> },
    { name: "Leadership", level: 80, icon: <Users className="w-5 h-5" /> },
    { name: "Communication", level: 90, icon: <Award className="w-5 h-5" /> }
  ];

  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "Built this responsive website to showcase my journey and connect with others",
      tech: ["HTML", "CSS", "JavaScript", "React"],
      outcome: "Live website with social media integration"
    },
    {
      title: "Python Learning Projects",
      description: "Collection of small projects while learning Python programming fundamentals",
      tech: ["Python", "Problem Solving", "Algorithms"],
      outcome: "Completed 20+ coding exercises"
    },
    {
      title: "Form Four Academic Excellence",
      description: "Maintained high academic performance throughout secondary education",
      tech: ["Mathematics", "Science", "English", "Leadership"],
      outcome: "Graduated with honors"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="education-gradient py-20 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              🎓 My Education Journey
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              From Form Four graduate to Computer Science student - the path of continuous learning
            </p>
          </div>
        </section>

        {/* Education Timeline */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Academic Path</h2>
            
            <div className="space-y-12">
              {educationTimeline.map((edu, index) => (
                <div key={index} className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:w-1/2">
                    <Card className="hover-lift">
                      <div className="aspect-video overflow-hidden rounded-t-lg">
                        <img
                          src={edu.image}
                          alt={edu.institution}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex items-center gap-2 text-teal-600 mb-2">
                          <Calendar className="w-5 h-5" />
                          <span className="font-medium">{edu.year}</span>
                        </div>
                        <CardTitle className="text-2xl">{edu.institution}</CardTitle>
                        <p className="text-xl text-gray-600">{edu.degree}</p>
                        <p className="text-gray-500">{edu.location}</p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{edu.description}</p>
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <Trophy className="w-4 h-4 text-teal-600" />
                            Key Achievements:
                          </h4>
                          <ul className="space-y-1">
                            {edu.achievements.map((achievement, i) => (
                              <li key={i} className="text-gray-600 flex items-center gap-2">
                                <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="lg:w-1/2 flex justify-center">
                    <div className="bg-teal-100 p-8 rounded-full">
                      <GraduationCap className="w-16 h-16 text-teal-600" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Skills Developed</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <Card key={index} className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-teal-100 p-2 rounded-lg">
                        <div className="text-teal-600">
                          {skill.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold">{skill.name}</h3>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                      <div 
                        className="bg-teal-600 h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <p className="text-right text-sm text-gray-600">{skill.level}%</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Notable Projects & Achievements</h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="hover-lift animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Skills/Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="bg-teal-100 text-teal-700 px-2 py-1 rounded text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-teal-50 p-3 rounded-lg">
                      <p className="text-teal-700 font-medium text-sm">{project.outcome}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-20 bg-teal-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <blockquote className="text-2xl md:text-3xl italic mb-8 text-gray-700">
              "The beautiful thing about learning is that no one can take it away from you."
            </blockquote>
            <cite className="text-lg text-gray-500">- B.B. King</cite>
            <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
              This quote perfectly captures my approach to education. Every day is an opportunity to learn something new, whether it's a programming concept, a life lesson, or a different perspective.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Education;
