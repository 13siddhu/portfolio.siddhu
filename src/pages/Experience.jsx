import React from 'react';

function Experience() {
  const experiences = [
    {
      company: 'Sharkdom',
      role: 'Software Development Engineer Intern',
      duration: 'May 2026 - Present',
      location: 'Remote',
      bullets: [
        'Frontend Optimization: Optimizing a high-performance Next.js application to improve rendering speed, responsiveness, and frontend performance.',
        'API Integration: Integrating scalable backend APIs with frontend modules while implementing efficient state management and error handling.',
        'Caching & Scalability: Reducing redundant API calls using Redis caching and request optimization strategies to improve application efficiency.',
        'Agile Collaboration: Worked closely with cross-functional teams using Git/GitHub to deliver robust software features in an iterative workflow.',
      ]
    },
    {
      company: 'LucidLedger',
      role: 'Full Stack Developer Intern',
      duration: 'Feb 2026 - April 2026',
      location: 'Remote',
      bullets: [
        'Tokenized eKYC Platform: Built full-stack modules for a secure SaaS-based tokenized eKYC platform enabling reusable identity verification workflows.',
        'Backend Engineering: Developed RESTful APIs and microservices using Spring Boot and Node.js for secure onboarding systems.',
        'Frontend Development: Built responsive React.js interfaces for optimized remote-first digital KYC workflows.',
        'System Architecture: Designed robust data models and optimized API endpoints, reducing latency for critical identity verification processes.',
      ]
    },
    {
      company: 'COSMIC365',
      role: 'Software Engineering Intern',
      duration: 'Feb 2024 - Aug 2024',
      location: 'Remote',
      bullets: [
        'Full Stack Development: Built scalable software modules using React.js and Node.js, reducing page load times by 30%.',
        'API Architecture: Designed RESTful APIs and optimized middleware logic, improving server response time by 40%.',
        'Database Optimization: Enhanced PostgreSQL/MySQL query performance through indexing, achieving nearly 2x faster retrieval speed.',
      ]
    },
  ];

  return (
    <section className="min-h-screen pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Page Title & Resume Button */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-20 animate-fade-in-up relative">
          <h1 className="text-5xl lg:text-7xl font-black text-center sm:text-left bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Experience
            <div className="absolute -bottom-6 left-1/2 sm:left-0 transform -translate-x-1/2 sm:translate-x-0 w-32 h-1.5 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full"></div>
          </h1>
          
          <a 
            href="/siddhartha_cv.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-12 sm:mt-0 relative px-8 py-3 font-bold text-white rounded-full bg-slate-900 border border-indigo-500/50 hover:border-pink-500 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all duration-300 group overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              View Resume
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </a>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-indigo-500 before:via-purple-500 before:to-pink-500 before:opacity-30">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active animate-fade-in-up" style={{ animationDelay: `${idx * 200}ms` }}>
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-indigo-500 text-slate-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 transition-transform duration-300 group-hover:scale-125 group-hover:bg-pink-500">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] relative backdrop-blur-xl bg-slate-900/40 border border-indigo-500/20 rounded-3xl p-6 lg:p-8 overflow-hidden transition-all duration-500 hover:scale-105 hover:border-indigo-500/60 hover:shadow-2xl hover:shadow-indigo-500/30">
                {/* Background Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/5 to-transparent animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                      {exp.role}
                    </h3>
                    <div className="text-lg text-indigo-400 font-semibold mt-1 flex items-center justify-between">
                      <span>{exp.company}</span>
                      <span className="text-sm text-slate-400 px-3 py-1 bg-slate-800 rounded-full border border-indigo-500/30">{exp.location}</span>
                    </div>
                    <span className="text-sm text-slate-300 mt-2 font-mono bg-slate-800/50 inline-block w-max px-2 py-1 rounded">
                      {exp.duration}
                    </span>
                  </div>
                  
                  <ul className="space-y-3 mt-6">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start text-slate-300 text-sm md:text-base group/item hover:text-white transition-colors duration-300">
                        <span className="mr-3 text-indigo-500 mt-1">▹</span>
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
