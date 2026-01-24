import React from 'react';

function About() {
  const stats = [
    { number: '15+', label: 'Projects Completed' },
    { number: '2+', label: 'Years Experience' },
    { number: '10+', label: 'Technologies' },
    { number: '100%', label: 'Dedicated' },
  ];

  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science',
      year: '2023 - 2027',
    },
    {
      degree: 'Web Development Bootcamp',
      field: 'Full Stack Development',
      year: '2024',
    },
  ];

  const whatIDo = [
    'Build responsive, user-friendly web applications',
    'Design scalable backend systems and APIs',
    'Optimize performance and improve code quality',
    'Mentor and collaborate with other developers',
  ];

  return (
    <section className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Page Title */}
        <h1 className="text-5xl lg:text-7xl font-black text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-20 animate-fade-in-up relative">
          About Me
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full"></div>
        </h1>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* About Text - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-12">
            {/* Who I Am */}
            <div className="group animate-fade-in-up">
              <h2 className="relative text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent mb-6 pl-6">
                Who I Am
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed pl-6">
                I'm a full-stack developer passionate about creating efficient, scalable web applications. 
                With expertise in React, Node.js, and modern web technologies, I transform ideas into 
                functional digital solutions.
              </p>
            </div>

            {/* My Journey */}
            <div className="group animate-fade-in-up animation-delay-200">
              <h2 className="relative text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent mb-6 pl-6">
                My Journey
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed pl-6">
                Starting my career with a focus on frontend development, I quickly expanded into backend 
                technologies. Today, I work across the full stack, bringing a holistic perspective to every 
                project I undertake.
              </p>
            </div>

            {/* What I Do */}
            <div className="group animate-fade-in-up animation-delay-300">
              <h2 className="relative text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent mb-6 pl-6">
                What I Do
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
              </h2>
              <ul className="space-y-4 pl-6">
                {whatIDo.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-4 text-lg text-slate-300 group/item hover:text-white transition-all duration-300 hover:translate-x-2"
                  >
                    <span className="text-2xl text-indigo-500 group-hover/item:text-pink-500 group-hover/item:scale-125 transition-all duration-300">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Beyond Code */}
            <div className="group animate-fade-in-up animation-delay-400">
              <h2 className="relative text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent mb-6 pl-6">
                Beyond Code
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed pl-6">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
                or helping others in the developer community. I believe in continuous learning and sharing 
                knowledge.
              </p>
            </div>
          </div>

          {/* Stats Cards - Takes 1 column */}
          <div className="space-y-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="group relative backdrop-blur-xl bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border-2 border-indigo-500/30 rounded-2xl p-8 text-center transition-all duration-500 hover:scale-105 hover:border-indigo-500/60 hover:shadow-2xl hover:shadow-indigo-500/40 animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                
                <h3 className="relative text-5xl lg:text-6xl font-black bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </h3>
                <p className="relative text-lg font-semibold text-slate-300 group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="relative backdrop-blur-xl bg-slate-900/40 border border-indigo-500/20 rounded-3xl p-12 lg:p-16 overflow-hidden animate-fade-in-up animation-delay-500">
          {/* Background Shimmer */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent animate-shimmer"></div>
          
          <h2 className="relative text-4xl font-bold text-center bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent mb-12">
            Education & Certifications
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full"></div>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 relative z-10">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="group relative backdrop-blur-lg bg-slate-800/50 rounded-2xl p-8 border border-indigo-500/30 transition-all duration-500 hover:scale-105 hover:border-indigo-500/60 hover:shadow-xl hover:shadow-indigo-500/30"
              >
                {/* Top Border Animation */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                  {edu.degree}
                </h3>
                <p className="text-slate-300 mb-4 text-lg">
                  {edu.field}
                </p>
                <span className="inline-block px-4 py-2 bg-indigo-600/20 border border-indigo-500/40 rounded-lg text-indigo-400 font-bold group-hover:bg-indigo-600/30 group-hover:border-indigo-500/60 group-hover:scale-105 transition-all duration-300">
                  {edu.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;