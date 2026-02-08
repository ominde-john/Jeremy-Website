import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Linkedin, Github, Twitter, Mail, Briefcase, Award, TrendingUp, Network } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const Collaborations = () => {
  const collaborators = [
    {
      id: 1,
      name: "John Ominde",
      role: "Chief Technology Officer",
      company: "Teksoft",
      image: "https://www.teksoft.co.ke/assets/john-ominde-CkKgcyW1.jpg",
      project: "Teksoft Platform Development",
      description: "Full-stack Data Engineer with expertise in Python, SQL, React, Node.js, and cloud technologies. John leads all technical initiatives and platform development.",
      skills: ["Python", "SQL", "React", "Node.js", "Cloud Tech"],
      linkedin: "#",
      github: "#",
      testimonial: "Exceptional technical leadership and innovative approach to solving complex problems."
    },
    {
      id: 2,
      name: "Isaac Prinsze",
      role: "Community Manager",
      company: "Teksoft",
      image: "https://www.teksoft.co.ke/assets/isaac-BI14mDId.jpg",
      project: "Community Engagement & Growth",
      description: "Passionate about connecting people and fostering meaningful relationships within the organization. Drives community initiatives across Africa.",
      skills: ["Community Building", "Networking", "Engagement"],
      linkedin: "#",
      github: "#",
      testimonial: "Creates an inclusive environment where everyone feels valued and connected."
    },
    {
      id: 3,
      name: "Evans Richard",
      role: "Engineering Lead",
      company: "Teksoft",
      image: "https://www.teksoft.co.ke/assets/evanschuchu-2mUI4Uta.jpg",
      project: "Technical Architecture & Development",
      description: "Leads engineering initiatives and technical implementation. Focused on building scalable solutions and mentoring developers.",
      skills: ["Software Engineering", "Architecture", "Mentorship"],
      linkedin: "#",
      github: "#",
      testimonial: "Strong technical expertise combined with excellent mentorship skills."
    }
  ];

  const networkingEvents = [
    {
      title: "Teksoft Community",
      date: "Ongoing",
      type: "Organization",
      description: "Active member of Teksoft community, collaborating with the leadership team to empower developers across Africa.",
      icon: Users,
      color: "text-blue-400"
    },
    {
      title: "Developer Meetup Kenya",
      date: "Ongoing",
      type: "Community",
      description: "Regular attendee and contributor to monthly developer meetups, sharing knowledge on web development.",
      icon: Network,
      color: "text-purple-400"
    },
    {
      title: "GitHub Open Source",
      date: "Ongoing",
      type: "Platform",
      description: "Active contributor to open-source projects, collaborating with developers worldwide.",
      icon: Github,
      color: "text-green-400"
    },
    {
      title: "LinkedIn Professional Network",
      date: "Ongoing",
      type: "Online",
      description: "Engaged in professional discussions and knowledge sharing, connecting with tech professionals.",
      icon: Linkedin,
      color: "text-cyan-400"
    }
  ];

  const achievements = [
    {
      title: "Teksoft Collaboration",
      description: "Working with a talented team of innovators",
      icon: Briefcase
    },
    {
      title: "3+ Team Members",
      description: "Collaborated across different roles and expertise",
      icon: Users
    },
    {
      title: "Community Driven",
      description: "Part of empowering developers across Africa",
      icon: Award
    },
    {
      title: "Growing Network",
      description: "Building meaningful professional connections",
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 py-20 text-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Collaborations & Network
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed font-light">
                Collaborating with the Teksoft team and building meaningful connections in the tech community
              </p>
              <div className="flex items-center justify-center gap-8 text-lg flex-wrap">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <achievement.icon className="w-5 h-5 text-purple-400" />
                    <span>{achievement.title}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((stat, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="bg-slate-700/50 border-slate-600 text-center hover-lift">
                    <CardContent className="pt-6">
                      <stat.icon className="w-10 h-10 text-purple-400 mx-auto mb-3" />
                      <h3 className="text-2xl font-bold text-slate-100 mb-2">{stat.title}</h3>
                      <p className="text-sm text-slate-400">{stat.description}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Collaborators Section */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-4xl font-bold mb-4 text-center text-slate-100">
                People I've Collaborated With
              </h2>
              <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
                The talented Teksoft leadership team I've had the privilege to work with. Each collaboration has been instrumental in my growth as a developer.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {collaborators.map((person, index) => (
                <ScrollReveal key={person.id} direction="up" delay={index * 100}>
                  <Card className="hover-lift bg-slate-800 border-slate-600 h-full">
                    <CardHeader>
                      <div className="flex items-start gap-4 mb-4">
                        <img
                          src={person.image}
                          alt={person.name}
                          className="w-16 h-16 rounded-full border-2 border-purple-500"
                        />
                        <div className="flex-1">
                          <CardTitle className="text-lg text-slate-100 mb-1">
                            {person.name}
                          </CardTitle>
                          <p className="text-sm text-purple-400 font-medium">{person.role}</p>
                          <p className="text-xs text-slate-400">{person.company}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-slate-300 mb-2">Project</h4>
                        <p className="text-sm text-purple-400 font-medium mb-2">{person.project}</p>
                        <p className="text-sm text-slate-400">{person.description}</p>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-slate-300 mb-2">Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {person.skills.map((skill, i) => (
                            <span key={i} className="bg-slate-700 text-slate-300 px-2 py-1 rounded text-xs border border-slate-600">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4 p-3 bg-slate-700/50 rounded-lg border border-slate-600">
                        <p className="text-xs text-slate-300 italic">"{person.testimonial}"</p>
                      </div>

                      <div className="flex gap-3 pt-3 border-t border-slate-700">
                        {person.linkedin && (
                          <a href={person.linkedin} className="text-slate-400 hover:text-blue-400 transition-colors">
                            <Linkedin className="w-5 h-5" />
                          </a>
                        )}
                        {person.github && (
                          <a href={person.github} className="text-slate-400 hover:text-purple-400 transition-colors">
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                        {person.twitter && (
                          <a href={person.twitter} className="text-slate-400 hover:text-cyan-400 transition-colors">
                            <Twitter className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Networking Activities */}
        <section className="py-20 bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-4xl font-bold mb-4 text-center text-slate-100">
                Networking & Community Engagement
              </h2>
              <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
                Active participation in tech communities and events to expand my network and share knowledge
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-6">
              {networkingEvents.map((event, index) => (
                <ScrollReveal key={index} direction="up" delay={index * 100}>
                  <Card className="hover-lift bg-slate-700/50 border-slate-600">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="bg-purple-500/20 p-3 rounded-lg border border-purple-500/30">
                          <event.icon className={`w-6 h-6 ${event.color}`} />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl text-slate-100 mb-2">
                            {event.title}
                          </CardTitle>
                          <div className="flex items-center gap-3 text-sm">
                            <span className="text-slate-400">{event.date}</span>
                            <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs border border-purple-500/30">
                              {event.type}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-300">{event.description}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <div className="bg-gradient-to-br from-purple-900/50 to-slate-800/50 rounded-2xl p-12 border border-purple-500/30">
                <Users className="w-16 h-16 text-purple-400 mx-auto mb-6" />
                <h2 className="text-4xl font-bold mb-4 text-slate-100">Let's Collaborate</h2>
                <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                  I'm always open to new collaborations, networking opportunities, and innovative projects. 
                  Let's connect and create something amazing together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:your.email@example.com"
                    className="inline-flex items-center gap-2 bg-purple-600 text-slate-100 px-8 py-4 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    Get In Touch
                  </a>
                  <a
                    href="https://linkedin.com/in/Jeremybravoge"
                    className="inline-flex items-center gap-2 bg-slate-700 text-slate-100 px-8 py-4 rounded-lg font-medium hover:bg-slate-600 transition-colors border border-slate-600"
                  >
                    <Linkedin className="w-5 h-5" />
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Collaborations;