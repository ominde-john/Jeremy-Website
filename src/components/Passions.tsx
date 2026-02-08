import React from 'react';
import { 
  Code, Database, Globe, Smartphone, Cloud, Zap,
  Cpu, GitBranch, Server, Layout, Terminal, Layers
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Layout,
      color: "bg-blue-600",
      skills: [
        { name: "React.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Next.js", level: 85 }
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "bg-emerald-600",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python/Django", level: 85 },
        { name: "PostgreSQL", level: 88 },
        { name: "RESTful APIs", level: 92 }
      ]
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "bg-purple-600",
      skills: [
        { name: "React Native", level: 85 },
        { name: "Flutter", level: 80 },
        { name: "iOS/Android", level: 82 },
        { name: "App Deployment", level: 88 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "bg-orange-600",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Docker", level: 88 },
        { name: "CI/CD", level: 82 },
        { name: "Linux", level: 90 }
      ]
    }
  ];

  const technologies = [
    { name: "React", icon: Code, color: "text-blue-400" },
    { name: "Node.js", icon: Terminal, color: "text-emerald-400" },
    { name: "TypeScript", icon: Code, color: "text-blue-400" },
    { name: "Python", icon: Code, color: "text-yellow-400" },
    { name: "PostgreSQL", icon: Database, color: "text-blue-400" },
    { name: "MongoDB", icon: Database, color: "text-emerald-400" },
    { name: "AWS", icon: Cloud, color: "text-orange-400" },
    { name: "Docker", icon: Layers, color: "text-blue-400" },
    { name: "Git", icon: GitBranch, color: "text-orange-400" },
    { name: "Next.js", icon: Globe, color: "text-white" },
    { name: "Tailwind", icon: Zap, color: "text-cyan-400" },
    { name: "GraphQL", icon: Cpu, color: "text-pink-400" }
  ];

  const expertise = [
    {
      title: "Full-Stack Development",
      description: "End-to-end web application development with modern frameworks and best practices",
      icon: Globe
    },
    {
      title: "API Development",
      description: "RESTful and GraphQL APIs designed for scalability and performance",
      icon: Server
    },
    {
      title: "Database Design",
      description: "Efficient database architecture for SQL and NoSQL systems",
      icon: Database
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure deployment and management",
      icon: Cloud
    },
    {
      title: "Mobile Apps",
      description: "Cross-platform mobile applications with native performance",
      icon: Smartphone
    },
    {
      title: "DevOps & CI/CD",
      description: "Automated deployment pipelines and infrastructure as code",
      icon: Cpu
    }
  ];

  return (
    <div id="passions" className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-3">Skills & Expertise</h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Comprehensive technical skills built through years of professional development and continuous learning
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Expertise Areas */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8">Core Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-600 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-700 transition-colors">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Skill Categories with Progress Bars */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8">Technical Proficiency</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800 rounded-xl p-8 border border-gray-700"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                          <span className="text-sm text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${category.color.replace('bg-', 'bg-gradient-to-r from-')} to-${category.color.split('-')[1]}-500`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technologies Grid */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8">Technologies & Tools</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-gray-600 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex flex-col items-center gap-2">
                    <Icon className={`w-8 h-8 ${tech.color} group-hover:scale-110 transition-transform`} />
                    <span className="text-sm font-medium text-gray-300 text-center">{tech.name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Professional Highlights */}
        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6">Professional Highlights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">2</div>
              <div className="text-sm text-gray-400">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">5</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">3</div>
              <div className="text-sm text-gray-400">Happy Clients</div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-700 text-center">
            <p className="text-gray-400 mb-4">
              Passionate about building scalable solutions and mentoring the next generation of developers in Kenya
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <span className="px-4 py-2 bg-gray-700 rounded-full text-sm text-gray-300">Full-Stack Development</span>
              <span className="px-4 py-2 bg-gray-700 rounded-full text-sm text-gray-300">Team Leadership</span>
              <span className="px-4 py-2 bg-gray-700 rounded-full text-sm text-gray-300">Agile Methodologies</span>
              <span className="px-4 py-2 bg-gray-700 rounded-full text-sm text-gray-300">Code Review</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-white mb-4">Interested in working together?</h3>
          <a
            href="#connect"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Skills;