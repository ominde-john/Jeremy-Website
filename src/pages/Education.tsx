import React from 'react';
import { 
  GraduationCap, Award, BookOpen, Trophy, Calendar, 
  Code, Database, Globe, Smartphone, Youtube, 
  CheckCircle, Star, TrendingUp, Zap
} from 'lucide-react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation'

const Education = () => {
  const formalEducation = [
    {
      year: "2024 - Present",
      institution: "Kiambu Institute of Science and Technology",
      degree: "Bachelor's in Computer Science",
      location: "Kiambu, Kenya",
      status: "Currently Pursuing",
      description: "Comprehensive computer science education covering software development, algorithms, data structures, and modern technologies.",
      highlights: [
        "Full-Stack Development",
        "Database Management",
        "Web Technologies",
        "Software Engineering"
      ]
    },
    {
      year: "2020 - 2023",
      institution: "Ekwanda High School",
      degree: "Kenya Certificate of Secondary Education (KCSE)",
      location: "Kenya",
      status: "Completed",
      description: "Strong foundation in mathematics and sciences, which led to pursuing computer science at the tertiary level.",
      highlights: [
        "Mathematics Excellence",
        "Science Focus",
        "Problem Solving",
        "Analytical Thinking"
      ]
    }
  ];

  const onlineLearning = [
    {
      platform: "PLP Academy",
      year: "2022 - 2024",
      focus: "Software Development",
      icon: Code,
      color: "bg-blue-600",
      achievements: [
        "Completed comprehensive software engineering curriculum",
        "Built multiple real-world projects",
        "Learned industry best practices",
        "Gained hands-on coding experience"
      ],
      skills: ["Python", "JavaScript", "Web Development", "Problem Solving"]
    },
    {
      platform: "SoloLearn",
      year: "2022 - Present",
      focus: "Programming Fundamentals",
      icon: Smartphone,
      color: "bg-emerald-600",
      achievements: [
        "Completed multiple programming courses",
        "Earned certifications in Python, JavaScript, and SQL",
        "Active community participation",
        "Daily coding challenges"
      ],
      skills: ["Python", "JavaScript", "SQL", "HTML/CSS"]
    },
    {
      platform: "Udemy",
      year: "2022 - Present",
      focus: "Specialized Skills",
      icon: BookOpen,
      color: "bg-purple-600",
      achievements: [
        "Completed advanced development courses",
        "Learned modern frameworks and tools",
        "Project-based learning approach",
        "Industry-relevant skills"
      ],
      skills: ["React", "Node.js", "Full-Stack Development", "Cloud Computing"]
    },
    {
      platform: "YouTube",
      year: "2022 - Present",
      focus: "Continuous Learning",
      icon: Youtube,
      color: "bg-red-600",
      achievements: [
        "Following top tech educators and channels",
        "Learning latest technologies and trends",
        "Tutorial-based project development",
        "Staying updated with industry changes"
      ],
      skills: ["Web Dev Tutorials", "Tech Reviews", "Coding Tips", "Best Practices"]
    }
  ];

  const certifications = [
    {
      name: "Python Programming",
      issuer: "SoloLearn",
      year: "2023",
      icon: Trophy
    },
    {
      name: "JavaScript Fundamentals",
      issuer: "SoloLearn",
      year: "2023",
      icon: Trophy
    },
    {
      name: "SQL Database",
      issuer: "SoloLearn",
      year: "2023",
      icon: Trophy
    },
    {
      name: "Web Development",
      issuer: "PLP Academy",
      year: "2024",
      icon: Trophy
    }
  ];

  const skillsAcquired = [
    { category: "Frontend", skills: ["React", "JavaScript", "HTML/CSS", "Tailwind"], level: 90 },
    { category: "Backend", skills: ["Node.js", "Python", "Django", "APIs"], level: 85 },
    { category: "Database", skills: ["SQL", "PostgreSQL", "MongoDB"], level: 85 },
    { category: "Tools", skills: ["Git", "VS Code", "Docker", "Linux"], level: 88 }
  ];

  return (
    <div className="min-400-screen bg-gray-900">
      {/* Header */}
      <Navigation/>
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 rounded-full border border-blue-600/30 mb-4">
              <GraduationCap className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-semibold text-blue-400">Education & Learning</span>
            </div>
            <h1 className="text-4xl font-bold text-white mb-3">My Learning Journey</h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Continuous learning through formal education and online platforms
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Formal Education */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-blue-400" />
            Formal Education
          </h2>
          <div className="space-y-6">
            {formalEducation.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-blue-600 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-blue-400" />
                      <span className="text-blue-400 font-semibold">{edu.year}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        edu.status === 'Currently Pursuing' 
                          ? 'bg-green-600/20 text-green-400 border border-green-600/30' 
                          : 'bg-gray-700 text-gray-300'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">{edu.degree}</h3>
                    <p className="text-lg text-gray-400 mb-1">{edu.institution}</p>
                    <p className="text-sm text-gray-500">{edu.location}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{edu.description}</p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                  {edu.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-3 bg-gray-700/50 rounded-lg"
                    >
                      <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Online Learning Platforms */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <Globe className="w-6 h-6 text-emerald-400" />
            Online Learning Platforms
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {onlineLearning.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-emerald-600 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 ${platform.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">{platform.platform}</h3>
                      <p className="text-sm text-gray-400 mb-1">{platform.focus}</p>
                      <p className="text-xs text-gray-500">{platform.year}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Achievements:</h4>
                    <ul className="space-y-2">
                      {platform.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                          <Star className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Skills Learned:</h4>
                    <div className="flex flex-wrap gap-2">
                      {platform.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <Award className="w-6 h-6 text-yellow-400" />
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-yellow-600 transition-all duration-300 text-center"
                >
                  <Icon className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                  <h3 className="text-sm font-bold text-white mb-2">{cert.name}</h3>
                  <p className="text-xs text-gray-400 mb-1">{cert.issuer}</p>
                  <p className="text-xs text-gray-500">{cert.year}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Skills Acquired */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-purple-400" />
            Skills Acquired Through Learning
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skillsAcquired.map((skillSet, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-white">{skillSet.category}</h3>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-purple-400" />
                    <span className="text-sm font-semibold text-purple-400">{skillSet.level}%</span>
                  </div>
                </div>

                <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                  <div
                    className="bg-gradient-to-r from-purple-600 to-purple-400 h-2 rounded-full"
                    style={{ width: `${skillSet.level}%` }}
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {skillSet.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-purple-600/20 border border-purple-600/30 rounded-full text-xs text-purple-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Learning Philosophy */}
        <section>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700">
            <div className="max-w-3xl mx-auto text-center">
              <BookOpen className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-4">Continuous Learning</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                My approach to education combines formal academic training with self-directed online learning. 
                Through platforms like PLP Academy, SoloLearn, Udemy, and YouTube, I've been able to stay current 
                with the latest technologies and industry trends while building a strong theoretical foundation at 
                Kiambu Institute of Science and Technology.
              </p>
              <p className="text-gray-400 italic">
                "Education is not the learning of facts, but the training of the mind to think." - Albert Einstein
              </p>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    </div>
  );
};

export default Education;