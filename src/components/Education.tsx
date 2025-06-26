import React from 'react';
import { GraduationCap, BookOpen, Award, Target } from 'lucide-react';

const Education = () => {
  const formations = [
    {
      title: 'Brevet de Technicien Supérieur (BTS)',
      subtitle: 'Réseaux et Sécurité',
      institution: 'IUGET',
      period: 'En cours - Obtention prévue en 2025',
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500',
      description: 'Formation approfondie en administration réseau, sécurité informatique et gestion d\'infrastructures. Acquisition de compétences techniques solides et d\'une vision globale des enjeux de cybersécurité.'
    }
  ];

  const certifications = [
    {
      title: 'Formation eJPT',
      subtitle: 'Pentesting et Tests d\'intrusion',
      status: 'En cours',
      icon: Target,
      color: 'from-red-500 to-orange-500',
      description: 'Spécialisation en pentesting avec apprentissage des techniques d\'exploitation éthique et d\'évaluation de sécurité des systèmes informatiques.'
    },
    {
      title: 'Cours CCNA',
      subtitle: 'Cisco Certified Network Associate',
      status: 'En cours',
      icon: Award,
      color: 'from-green-500 to-emerald-500',
      description: 'Approfondissement des connaissances en réseaux Cisco, routage, commutation et sécurité réseau pour une expertise technique renforcée.'
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
            Formation
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-emerald-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Un parcours de formation structuré et un apprentissage continu pour rester à la pointe des technologies
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Formation Principale */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <GraduationCap className="h-6 w-6 text-sky-400 mr-3" />
              Formation Académique
            </h3>
            
            {formations.map((formation, index) => (
              <div
                key={index}
                className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${formation.color} mr-6 flex-shrink-0`}>
                    <formation.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">{formation.title}</h4>
                        <p className="text-lg text-sky-400 font-medium">{formation.subtitle}</p>
                      </div>
                      <div className="mt-2 md:mt-0 text-right">
                        <p className="text-emerald-400 font-semibold">{formation.institution}</p>
                        <p className="text-slate-400 text-sm">{formation.period}</p>
                      </div>
                    </div>
                    
                    <p className="text-slate-300 leading-relaxed">{formation.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Apprentissage Continu */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <BookOpen className="h-6 w-6 text-emerald-400 mr-3" />
              Apprentissage Continu
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-start mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${cert.color} mr-4 flex-shrink-0`}>
                      <cert.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-bold text-white">{cert.title}</h4>
                        <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-medium">
                          {cert.status}
                        </span>
                      </div>
                      <p className="text-sky-400 font-medium text-sm mb-3">{cert.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-400 text-sm leading-relaxed">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Citation */}
          <div className="mt-16 text-center">
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 max-w-3xl mx-auto">
              <blockquote className="text-xl text-slate-300 italic mb-4 leading-relaxed">
                "L'apprentissage est un processus continu dans le domaine de la cybersécurité. 
                Chaque nouvelle compétence acquise renforce ma capacité à protéger et sécuriser 
                les systèmes informatiques."
              </blockquote>
              <cite className="text-sky-400 font-semibold">— Ahmed Fadil Nchare</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;