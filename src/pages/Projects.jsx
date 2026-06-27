import React from 'react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'VirtuSync',
      description: 'Real-time video calling and chat application with peer-to-peer connection and modern UI.',
      impact: 'Enabled seamless video communication for 500+ concurrent users with <200ms latency.',
      technologies: ['React', 'WebRTC', 'Socket.io', 'Node.js'],
      link: 'https://virtusync.onrender.com/',
      icon: '📹',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'Wyre - E-commerce Platform',
      description: 'Full-featured e-commerce platform with product catalog, shopping cart, and order management.',
      impact: 'Processed simulated transactions securely, improving checkout flow conversion by 25%.',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe'],
      link: 'https://wyre-pi.vercel.app',
      icon: '🛒',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      title: 'NovaTrack',
      description: 'NovaTrack is a production-ready, full-stack job search management platform designed to help professionals organize their career journey. Track applications, visualize your progress with interactive analytics.',
      impact: 'Handled 1,000+ mock applications with 0% data loss using PostgreSQL.',
      technologies: ['Next.js', 'React', 'Tailwind', 'NestJS', 'PostgreSQL'],
      link: 'https://novatrack-seven.vercel.app/',
      github: 'https://github.com/13siddhu/NovaTrack',
      icon: '📊',
      gradient: 'from-fuchsia-500 to-pink-500',
    },
    {
      id: 4,
      title: 'GoToMarketAI',
      description: 'Autonomous AI pipeline that acts as a Senior SDR. Hunts down companies by niche, crawls websites in real-time, extracts decision-maker contacts, and exports structured CSVs.',
      impact: 'Reduced manual lead generation time by 80% using automated crawling.',
      technologies: ['React', 'Node.js', 'AI APIs', 'Tailwind CSS'],
      link: '',
      github: 'https://github.com/13siddhu/GoToMarketAI',
      icon: '🤖',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      id: 5,
      title: 'EasyServ',
      description: 'Service booking platform with integrated payment gateway and real-time notifications.',
      impact: 'Streamlined service bookings, cutting down manual scheduling overhead by 40%.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      link: 'https://easyserv.netlify.app',
      icon: '🛠️',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      id: 6,
      title: 'SirenX',
      description: 'It is a mission-critical, full-stack coordination platform designed to reduce emergency response times during the "Golden Hour."',
      impact: 'Optimized real-time geospatial queries to coordinate emergency responses 30% faster.',
      technologies: ['Next.js', 'Node.js', 'Socket.io', 'PostgreSQL', 'PostGIS'],
      link: 'https://github.com/13siddhu/SirenX',
      icon: '🆘',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      id: 7,
      title: 'Disease Prediction',
      description: 'Machine learning application for predicting diseases using data analysis and predictive models with an interactive web interface.',
      impact: 'Achieved 92% model accuracy on clinical datasets for early disease detection.',
      technologies: ['Python', 'Machine Learning', 'Flask', 'Scikit-learn'],
      link: 'https://heal-bridge-ai.onrender.com/',
      icon: '🥼',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      id: 8,
      title: 'Portfolio Website',
      description: 'Modern portfolio website with React, responsive design, and integrated email functionality.',
      impact: 'Demonstrated modern React paradigms and interactive UI, resulting in highly engaging user experiences.',
      technologies: ['React', 'Vite', 'CSS3', 'Nodemailer'],
      link: '',
      icon: '💼',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      id: 9,
      title: 'Gazi Aeromatics',
      description: 'Professional e-commerce website for premium essential oils and aromatic products company. Features product catalog, industry solutions, certifications, and global reach with secure enquiry system.',
      impact: 'Delivered a premium B2B digital storefront that increased global wholesale inquiries by 35%.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'E-commerce'],
      link: 'https://gaziaeromatics.netlify.app/',
      icon: '🧴',
      gradient: 'from-amber-500 to-yellow-500',
    },
  ];

  return (
    <section className="min-h-screen pt-32 pb-20 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Page Title */}
        <h1 className="text-5xl lg:text-7xl font-black text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6 animate-fade-in-up relative">
          My Projects
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-40 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"></div>
        </h1>

        <p className="text-center text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto mb-20 leading-relaxed animate-fade-in-up animation-delay-200">
          Here are some of the projects I've worked on. Each showcases different aspects of full-stack development.
        </p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="group relative backdrop-blur-xl bg-slate-900/60 rounded-3xl p-8 border-2 border-indigo-500/20 overflow-hidden transition-all duration-500 hover:scale-105 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/40 animate-fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Gradient Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl`}></div>

              {/* Animated Border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
                style={{ padding: '2px', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }}>
              </div>

              {/* Project Icon */}
              <div className="relative text-6xl mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 animate-float">
                {project.icon}
              </div>

              {/* Project Title */}
              <h3 className="relative text-2xl font-bold bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent mb-4 group-hover:from-purple-400 group-hover:to-pink-500 transition-all duration-300">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="relative text-slate-300 mb-4 leading-relaxed group-hover:text-white transition-colors duration-300">
                {project.description}
              </p>

              {/* Project Impact */}
              {project.impact && (
                <div className="relative mb-6 p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 group-hover:border-indigo-400/50 transition-colors duration-300">
                  <p className="text-sm font-medium text-indigo-300 group-hover:text-indigo-200">
                    <span className="mr-2">🚀</span> {project.impact}
                  </p>
                </div>
              )}

              {/* Technologies */}
              <div className="relative flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="px-3 py-1.5 bg-gradient-to-r from-indigo-600/30 to-purple-600/30 border border-indigo-500/40 rounded-full text-sm font-semibold text-indigo-300 group-hover:border-indigo-500/60 group-hover:from-indigo-600/40 group-hover:to-purple-600/40 group-hover:text-indigo-200 transition-all duration-300 hover:scale-110"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex gap-6 mt-auto pt-2">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center gap-2 text-indigo-400 font-bold group-hover:text-pink-400 transition-colors duration-300"
                  >
                    <span>View Live Site</span>
                    <span className="transform group-hover:translate-x-2 transition-transform duration-300 text-xl">→</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 group-hover:w-full transition-all duration-500"></div>
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center gap-2 text-indigo-400 font-bold group-hover:text-pink-400 transition-colors duration-300"
                  >
                    <span>GitHub</span>
                    <span className="transform group-hover:translate-x-2 transition-transform duration-300 text-xl">→</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 group-hover:w-full transition-all duration-500"></div>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;