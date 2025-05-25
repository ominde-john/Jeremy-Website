
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Award, BookOpen, Users, Trophy, Calendar } from 'lucide-react';

const Education = () => {
  const educationTimeline = [
    {
      year: "2018-2022",
      institution: "University Name",
      degree: "Bachelor's in Computer Science",
      location: "City, Country",
      description: "Focused on software development and digital innovation. Graduated Summa Cum Laude.",
      achievements: ["Dean's List (4 semesters)", "President of Coding Club", "Hackathon Winner"],
      image: "/lovable-uploads/66af1b0a-31fe-41d2-b09b-091a1471d669.png"
    },
    {
      year: "2014-2018",
      institution: "Central High School",
      degree: "High School Diploma",
      location: "Hometown, Country",
      description: "Active in debate team, student government, and varsity soccer. Discovered my passion for technology.",
      achievements: ["Valedictorian", "National Honor Society", "State Debate Champion"],
      image: "/lovable-uploads/87cfc6cf-0ce0-4065-ba66-93274fa708bc.png"
    }
  ];

  const skills = [
    { name: "Programming", level: 90, icon: <BookOpen className="w-5 h-5" /> },
    { name: "Leadership", level: 85, icon: <Users className="w-5 h-5" /> },
    { name: "Problem Solving", level: 95, icon: <Trophy className="w-5 h-5" /> },
    { name: "Communication", level: 88, icon: <Award className="w-5 h-5" /> }
  ];

  const projects = [
    {
      title: "Campus Food Delivery App",
      description: "Built a full-stack application that connected students with local restaurants",
      tech: ["React", "Node.js", "MongoDB"],
      outcome: "Used by 2000+ students"
    },
    {
      title: "Mental Health Awareness Campaign",
      description: "Led a university-wide initiative to promote mental health resources",
      tech: ["Social Media", "Event Planning", "Community Outreach"],
      outcome: "Reached 15,000+ students"
    },
    {
      title: "Coding Bootcamp for Kids",
      description: "Organized free programming classes for local elementary students",
      tech: ["Teaching", "Curriculum Design", "Python"],
      outcome: "Taught 50+ children"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="forest-gradient py-20 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              🎓 Education Journey
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              From curious student to lifelong learner
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
                        <div className="flex items-center gap-2 text-forest-green mb-2">
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
                            <Trophy className="w-4 h-4 text-forest-green" />
                            Key Achievements:
                          </h4>
                          <ul className="space-y-1">
                            {edu.achievements.map((achievement, i) => (
                              <li key={i} className="text-gray-600 flex items-center gap-2">
                                <div className="w-2 h-2 bg-forest-green rounded-full"></div>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="lg:w-1/2 flex justify-center">
                    <div className="bg-forest-green/10 p-8 rounded-full">
                      <GraduationCap className="w-16 h-16 text-forest-green" />
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
                      <div className="bg-forest-green/10 p-2 rounded-lg">
                        <div className="text-forest-green">
                          {skill.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold">{skill.name}</h3>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                      <div 
                        className="bg-forest-green h-3 rounded-full transition-all duration-1000"
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
            <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Notable Projects</h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="hover-lift animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="bg-forest-green/10 text-forest-green px-2 py-1 rounded text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-forest-green/5 p-3 rounded-lg">
                      <p className="text-forest-green font-medium text-sm">{project.outcome}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-20 bg-forest-green/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <blockquote className="text-2xl md:text-3xl italic mb-8 text-gray-700">
              "Education is not preparation for life; education is life itself."
            </blockquote>
            <cite className="text-lg text-gray-500">- John Dewey</cite>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Education;
