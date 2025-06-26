import React, { useState } from 'react';
import { ExternalLink, Github, Search, Server, Users, Eye } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Outil de Veille Technologique en Cybersécurité',
      description: 'Développement d\'un outil Python pour automatiser la surveillance des nouvelles vulnérabilités et menaces, démontrant l\'initiative et les compétences en développement au service de la sécurité.',
      icon: Search,
      color: 'from-blue-500 to-cyan-500',
      skills: ['Python', 'Automatisation', 'Veille en cybersécurité', 'APIs', 'Data Analysis'],
      details: 'Cet outil surveille automatiquement les bases de données de vulnérabilités (CVE, NVD) et génère des rapports personnalisés. Il intègre des notifications en temps réel et une interface web pour la visualisation des données de sécurité.',
      achievements: [
        'Automatisation de la collecte de données de vulnérabilités',
        'Système de notification en temps réel',
        'Interface web responsive pour la visualisation',
        'Intégration de multiples sources de threat intelligence'
      ]
    },
    {
      title: 'Laboratoires de Pentesting',
      description: 'Approfondissement de la compréhension des mécanismes d\'attaque en relevant des défis sur TryHackMe et en exploitant des failles sur des machines virtuelles configurées personnellement.',
      icon: Eye,
      color: 'from-red-500 to-orange-500',
      skills: ['Pentesting', 'Exploitation de vulnérabilités', 'VMware', 'Analyse de systèmes', 'Kali Linux'],
      details: 'Configuration d\'un laboratoire de test complet avec différents systèmes d\'exploitation et services vulnérables. Pratique intensive du pentesting éthique avec documentation complète des techniques d\'exploitation.',
      achievements: [
        'Plus de 50 machines compromises sur TryHackMe',
        'Configuration de 10+ VMs avec vulnérabilités spécifiques',
        'Documentation détaillée des techniques d\'exploitation',
        'Développement de scripts personnalisés d\'automatisation'
      ]
    },
    {
      title: 'Déploiement d\'Infrastructures Serveur',
      description: 'Mise en place de serveurs Web, DNS, et DHCP. Ce projet a renforcé la compréhension de l\'architecture système et des points critiques à sécuriser.',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      skills: ['Administration système', 'DNS', 'DHCP', 'Serveurs Web', 'Active Directory', 'Sécurisation'],
      details: 'Déploiement complet d\'une infrastructure réseau sécurisée avec mise en place de services critiques, configuration de la sécurité réseau et mise en œuvre de bonnes pratiques d\'administration.',
      achievements: [
        'Configuration sécurisée de serveurs multi-services',
        'Mise en place de politiques de sécurité robustes',
        'Implémentation de monitoring et logging avancés',
        'Documentation complète de l\'architecture déployée'
      ]
    },
    {
      title: 'Fondation et Animation d\'un Club Informatique',
      description: 'Création d\'un espace pour le partage de connaissances, notamment sur les sujets de sécurité. Démonstration de leadership et d\'esprit d\'initiative dans la transmission des savoirs.',
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      skills: ['Leadership', 'Pédagogie', 'Organisation d\'événements', 'Communication', 'Management'],
      details: 'Création et animation d\'un club informatique universitaire axé sur la cybersécurité. Organisation d\'ateliers pratiques, de conférences et de défis techniques pour sensibiliser aux enjeux de sécurité.',
      achievements: [
        'Fondation d\'un club de 30+ membres actifs',
        'Organisation de 12 ateliers pratiques en cybersécurité',
        'Partenariats avec des entreprises locales du secteur',
        'Formation de 5 étudiants aux bases du pentesting'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
            Mes Projets
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-emerald-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Une sélection de projets qui illustrent mon expertise technique et ma passion pour la cybersécurité
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 overflow-hidden group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                <p className="text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.skills.slice(0, 3).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm border border-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                  {project.skills.length > 3 && (
                    <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm border border-slate-700">
                      +{project.skills.length - 3} autres
                    </span>
                  )}
                </div>

                <button className="text-sky-400 hover:text-sky-300 font-medium flex items-center transition-colors duration-200">
                  Voir les détails
                  <ExternalLink className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal pour les détails du projet */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-slate-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8 border-b border-slate-700">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${selectedProject.color} mr-4`}>
                      <selectedProject.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    ✕
                  </button>
                </div>
                
                <p className="text-slate-300 text-lg leading-relaxed">
                  {selectedProject.details}
                </p>
              </div>

              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Compétences Mises en Œuvre</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-2 bg-slate-700 text-slate-300 rounded-lg text-sm border border-slate-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Réalisations Clés</h4>
                    <ul className="space-y-2">
                      {selectedProject.achievements.map((achievement, index) => (
                        <li key={index} className="text-slate-300 flex items-start">
                          <span className="text-sky-400 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;