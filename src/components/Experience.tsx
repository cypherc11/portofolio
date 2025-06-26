import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
            Expérience Professionnelle
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-emerald-400 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-400 to-emerald-400"></div>

            <div className="relative">
              {/* Experience Item */}
              <div className="flex items-start mb-12">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-full flex items-center justify-center relative z-10">
                  <Briefcase className="h-8 w-8 text-white" />
                </div>
                
                <div className="ml-8 bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2 md:mb-0">
                      Stagiaire Académique en Cybersécurité
                    </h3>
                    <div className="flex items-center text-sky-400 font-medium">
                      <Calendar className="h-4 w-4 mr-2" />
                      Août - Septembre 2024
                    </div>
                  </div>

                  <div className="flex items-center text-slate-400 mb-6">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="font-semibold text-emerald-400">Cyberzone</span>
                  </div>

                  <p className="text-slate-300 leading-relaxed mb-6">
                    Participation active à des missions de cybersécurité et d'administration dans un 
                    environnement professionnel dédié à la sécurité informatique. Cette première 
                    expérience concrète m'a permis d'appliquer mes connaissances théoriques dans 
                    des situations réelles et de développer une compréhension approfondie des 
                    enjeux de sécurité en entreprise.
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-white">Missions principales :</h4>
                    <ul className="space-y-2 text-slate-300">
                      <li className="flex items-start">
                        <span className="text-sky-400 mr-2 mt-1">•</span>
                        Assistance dans l'analyse de vulnérabilités et l\'évaluation des risques de sécurité
                      </li>
                      <li className="flex items-start">
                        <span className="text-sky-400 mr-2 mt-1">•</span>
                        Participation à la configuration et sécurisation d'infrastructures réseau
                      </li>
                      <li className="flex items-start">
                        <span className="text-sky-400 mr-2 mt-1">•</span>
                        Collaboration à des projets de surveillance et monitoring de sécurité
                      </li>
                      <li className="flex items-start">
                        <span className="text-sky-400 mr-2 mt-1">•</span>
                        Apprentissage des bonnes pratiques de sécurité en environnement professionnel
                      </li>
                    </ul>
                  </div>

                  <div className="mt-6 pt-6 border-t border-slate-700">
                    <h4 className="text-lg font-semibold text-white mb-3">Compétences développées :</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Analyse de vulnérabilités', 'Sécurisation réseau', 'Monitoring', 'Travail en équipe', 'Environnement professionnel'].map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm border border-slate-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;