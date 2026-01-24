import React from 'react';
import { Link } from 'react-router-dom';
import Hero3D from '../components/Hero3D';
import SkillsParticles from '../components/SkillsParticles';

function Home() {
  return (
    <section className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Hero Content */}
            <div className="space-y-8 animate-fade-in-up">
              <h1 className="text-5xl lg:text-7xl font-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight animate-gradient">
                Hi, I'm Siddhartha
              </h1>
              
              <p className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Full Stack Developer | React Specialist | Problem Solver
              </p>
              
              <p className="text-lg lg:text-xl text-slate-300 leading-relaxed">
                I build modern web applications with React, Node.js, and cutting-edge technologies.
                Passionate about creating efficient, scalable solutions.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/projects"
                  className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/50"
                >
                  <span className="relative z-10">View My Work</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </Link>
                
                <Link 
                  to="/contact"
                  className="group relative px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-white font-bold rounded-2xl border-2 border-indigo-500/50 overflow-hidden transition-all duration-300 hover:scale-105 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/30"
                >
                  <span className="relative z-10">Get In Touch</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex justify-center lg:justify-end animate-fade-in-up animation-delay-300 h-[500px] w-full cursor-pointer">
               <Hero3D />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="relative backdrop-blur-xl bg-slate-900/30 rounded-3xl border border-indigo-500/20 p-8 lg:p-16 overflow-hidden">
          {/* Animated Background Shimmer */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent animate-shimmer"></div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-center bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent mb-12 relative">
            Featured Projects
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full"></div>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {/* Project Card 1 */}
            <div className="group relative backdrop-blur-lg bg-slate-800/50 rounded-2xl p-8 border border-indigo-500/20 overflow-hidden transition-all duration-500 hover:scale-105 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/30 animate-fade-in-up">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors relative z-10">
                Wyre
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed relative z-10">
                A full-stack ecommerce platform with product catalog, shopping cart, and order management.
              </p>
              <a 
                href="https://wyre-pi.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-indigo-400 font-semibold group-hover:text-pink-400 transition-colors relative z-10"
              >
                Live Link 
                <span className="transform group-hover:translate-x-2 transition-transform">→</span>
              </a>
            </div>

            {/* Project Card 2 */}
            <div className="group relative backdrop-blur-lg bg-slate-800/50 rounded-2xl p-8 border border-indigo-500/20 overflow-hidden transition-all duration-500 hover:scale-105 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/30 animate-fade-in-up animation-delay-200">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors relative z-10">
                VirtuSync
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed relative z-10">
                Real-time video calling and chat application built with modern web technologies.
              </p>
              <a 
                href="https://virtusync.onrender.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-indigo-400 font-semibold group-hover:text-pink-400 transition-colors relative z-10"
              >
                Live Link 
                <span className="transform group-hover:translate-x-2 transition-transform">→</span>
              </a>
            </div>

            {/* Project Card 3 */}
            <div className="group relative backdrop-blur-lg bg-slate-800/50 rounded-2xl p-8 border border-indigo-500/20 overflow-hidden transition-all duration-500 hover:scale-105 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/30 animate-fade-in-up animation-delay-400">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors relative z-10">
                EasyServ
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed relative z-10">
                Service booking platform with integrated payment and notification system.
              </p>
              <a 
                href="https://easyserv.netlify.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-indigo-400 font-semibold group-hover:text-pink-400 transition-colors relative z-10"
              >
                Live Link 
                <span className="transform group-hover:translate-x-2 transition-transform">→</span>
              </a>
            </div>
          </div>

          <div className="text-center mt-12 relative z-10">
            <Link 
              to="/projects"
              className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm text-white font-bold rounded-2xl border-2 border-indigo-500/50 transition-all duration-300 hover:scale-105 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/30"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <h2 className="text-4xl lg:text-5xl font-black text-center bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent mb-16 relative">
          Skills & Technologies
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full"></div>
        </h2>
        <SkillsParticles />
      </div>
    </section>
  );
}

export default Home;