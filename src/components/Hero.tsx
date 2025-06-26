import React, { useState, useEffect } from 'react';
import { ChevronDown, Terminal, Lock, Code } from 'lucide-react';

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = [
    'Spécialiste en Cybersécurité',
    'Développeur orienté Pentesting',
    'Expert en Administration Réseau',
    'Passionné de Sécurité Informatique'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23334155%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Terminal className="absolute top-20 left-10 h-8 w-8 text-sky-400/20 animate-float" />
        <Lock className="absolute top-32 right-20 h-6 w-6 text-emerald-400/20 animate-float-delayed" />
        <Code className="absolute bottom-32 left-20 h-7 w-7 text-sky-400/20 animate-float" />
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-sky-200 to-emerald-200 bg-clip-text text-transparent">
            Ahmed Fadil Nchare
          </h1>
          
          <div className="h-20 mb-8 flex items-center justify-center">
            <h2 className="text-2xl md:text-3xl text-slate-300 font-light">
              <span className="inline-block animate-fade-in-out" key={currentTitle}>
                {titles[currentTitle]}
              </span>
            </h2>
          </div>

          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionné par la cybersécurité et le développement, je transforme les défis numériques 
            en solutions sécurisées et innovantes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToAbout}
              className="px-8 py-4 bg-gradient-to-r from-sky-500 to-emerald-500 text-white rounded-lg font-semibold hover:from-sky-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Découvrir mon parcours
            </button>
            <a
              href="#contact"
              className="px-8 py-4 border border-sky-400 text-sky-400 rounded-lg font-semibold hover:bg-sky-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
            >
              Me contacter
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-slate-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;