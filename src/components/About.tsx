import React from 'react';
import { User, Target, TrendingUp, Cloud } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: User,
      title: 'Double Expertise',
      description: 'Administration réseau & Développement'
    },
    {
      icon: Target,
      title: 'Spécialisation',
      description: 'Pentesting & Cybersécurité'
    },
    {
      icon: TrendingUp,
      title: 'Apprentissage Continu',
      description: 'Veille technologique permanente'
    },
    {
      icon: Cloud,
      title: 'Cloud & VPS',
      description: 'Maîtrise des environnements virtualisés'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
              À Propos de Moi
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-emerald-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                Spécialiste passionné par la cybersécurité, je combine une solide expertise en 
                administration réseau et sécurité avec des compétences approfondies en développement. 
                Mon parcours reflète une ambition claire : devenir un expert en pentesting et 
                contribuer activement à la sécurisation du monde numérique.
              </p>
              
              <p className="text-lg text-slate-300 leading-relaxed">
                Ma démarche d'apprentissage continu me permet de rester à la pointe des technologies 
                de sécurité. J'ai développé une compréhension approfondie des environnements cloud 
                et une expérience pratique avec les VPS, me permettant d'appréhender les enjeux 
                de sécurité dans des architectures modernes et complexes.
              </p>

              <p className="text-lg text-slate-300 leading-relaxed">
                Chaque projet que j'entreprends est une opportunité d'approfondir mes connaissances 
                et de développer des solutions innovantes pour contrer les menaces émergentes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-700/50 p-6 rounded-lg backdrop-blur-sm border border-slate-600/50 hover:border-sky-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <item.icon className="h-10 w-10 text-sky-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;