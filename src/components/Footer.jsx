import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Contact Info',
      items: [
        { text: 'Email: siddharthasingh.workspace@gmail.com', icon: '📧' },
        { text: 'Phone: +91 9598486555', icon: '📞' },
        { text: 'Location: India', icon: '📍' },
      ],
    },
    {
      title: 'Social Links',
      items: [
        { text: 'GitHub', href: 'https://github.com/13siddhu', icon: '🔗' },
        { text: 'LinkedIn', href: 'https://www.linkedin.com/in/siddhartha-singh-a46080286/', icon: '🔗' },
        { text: 'Twitter', href: 'https://x.com/13siddhu', icon: '🔗' },
      ],
    },
    {
      title: 'Quick Links',
      items: [
        { text: 'Home', path: '/' },
        { text: 'About', path: '/about' },
        { text: 'Projects', path: '/projects' },
        { text: 'Contact', path: '/contact' },
      ],
    },
  ];

  return (
    <footer className="relative mt-32 bg-gradient-to-b from-slate-900/90 to-slate-950/95 backdrop-blur-xl border-t-2 border-indigo-500/30 overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      {/* Animated Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-70"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        {/* Footer Content Grid */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-12">
          {footerSections.map((section, idx) => (
            <div
              key={idx}
              className="group space-y-6 animate-fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Section Title */}
              <h3 className="relative text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent pb-3">
                {section.title}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full group-hover:w-16 transition-all duration-500"></div>
              </h3>

              {/* Section Items */}
              <ul className="space-y-3">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3 group/item">
                    {item.icon && (
                      <span className="text-lg transform group-hover/item:scale-125 group-hover/item:rotate-12 transition-all duration-300">
                        {item.icon}
                      </span>
                    )}
                    
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative text-slate-300 hover:text-white transition-all duration-300 group-hover/item:translate-x-2 inline-block"
                      >
                        {item.text}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 group-hover/item:w-full transition-all duration-300"></span>
                      </a>
                    ) : item.path ? (
                      <Link
                        to={item.path}
                        className="relative text-slate-300 hover:text-white transition-all duration-300 group-hover/item:translate-x-2 inline-block"
                      >
                        {item.text}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 group-hover/item:w-full transition-all duration-300"></span>
                      </Link>
                    ) : (
                      <span className="text-slate-300 group-hover/item:text-white transition-colors duration-300">
                        {item.text}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="relative pt-8 border-t border-indigo-500/20">
          <div className="text-center">
            <p className="text-slate-400 font-semibold transition-all duration-300 hover:text-white hover:scale-105 inline-block">
              © {currentYear} Siddhartha. All rights reserved.
              <span className="inline-block ml-2 animate-pulse">✨</span>
            </p>
          </div>
        </div>
      </div>

      {/* Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shimmer pointer-events-none"></div>
    </footer>
  );
}

export default Footer;