import React from 'react';
import { Shield, Network, Code, Cloud } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Shield,
      title: 'Cybersécurité',
      color: 'from-red-500 to-orange-500',
      skills: [
        {
          name: 'Analyse et Détection',
          description: 'Maîtrise des méthodologies d\'attaque et interprétation des menaces de sécurité',
          level: 85
        },
        {
          name: 'Outils Spécialisés',
          description: 'Expérience pratique avec Wireshark, Burp Suite, et plateformes comme TryHackMe',
          level: 80
        },
        {
          name: 'Pentesting & Veille',
          description: 'Formation eJPT en cours et veille technologique constante sur les menaces émergentes',
          level: 75
        }
      ]
    },
    {
      icon: Network,
      title: 'Réseaux & Systèmes',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        {
          name: 'Fondamentaux Réseau',
          description: 'Maîtrise du modèle OSI et expérience avec Cisco Packet Tracer',
          level: 90
        },
        {
          name: 'Administration Serveur',
          description: 'Configuration serveurs Web, DNS, DHCP et virtualisation VMware',
          level: 85
        },
        {
          name: 'Certification CCNA',
          description: 'Suivi actif des cours CCNA pour approfondir les compétences réseau',
          level: 70
        }
      ]
    },
    {
      icon: Code,
      title: 'Développement',
      color: 'from-green-500 to-emerald-500',
      skills: [
        {
          name: 'Langages & Backend',
          description: 'Python, C, JavaScript, HTML/CSS et développement backend avec Node.js',
          level: 80
        },
        {
          name: 'Bases de Données',
          description: 'Notions solides en SQL et création de sites avec WordPress',
          level: 70
        },
        {
          name: 'Automatisation',
          description: 'Développement d\'outils Python pour la veille technologique en cybersécurité',
          level: 75
        }
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud & Blockchain',
      color: 'from-purple-500 to-pink-500',
      skills: [
        {
          name: 'Technologies Cloud',
          description: 'Compréhension des différents types de cloud et utilisation pratique de VPS',
          level: 75
        },
        {
          name: 'Blockchain & DeFi',
          description: 'Connaissance de la technologie blockchain et de la finance décentralisée',
          level: 65
        },
        {
          name: 'Smart Contracts',
          description: 'Notions en développement Solidity pour les contrats intelligents',
          level: 60
        }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
            Mes Compétences
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-emerald-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Un ensemble de compétences techniques développées à travers des projets concrets et une formation continue
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                      <span className="text-sky-400 font-medium">{skill.level}%</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{skill.description}</p>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;