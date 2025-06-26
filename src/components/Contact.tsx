import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, User } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Le formulaire sera soumis automatiquement par FormSubmit.co
    // Pas besoin de logique JavaScript supplémentaire
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'cypherc11@gmail.com',
      link: 'mailto:cypherc11@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+237 697 995 579',
      link: 'tel:+237697995579',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Localisation',
      value: 'Cameroun',
      link: '#',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
            Parlons de votre prochain projet !
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-emerald-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Je suis toujours ouvert à de nouvelles opportunités et collaborations. 
            N'hésitez pas à me contacter pour discuter de vos projets en cybersécurité.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Informations de contact */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <MessageSquare className="h-6 w-6 text-sky-400 mr-3" />
                  Restons en contact
                </h3>
                <p className="text-slate-300 leading-relaxed mb-8">
                  Que vous ayez un projet de sécurisation, besoin d'une expertise en pentesting, 
                  ou simplement envie d'échanger sur les dernières tendances en cybersécurité, 
                  je serais ravi de vous aider.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center p-4 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105 group"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                      <p className="text-slate-400 group-hover:text-sky-400 transition-colors duration-200">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Disponibilité */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <User className="h-5 w-5 text-emerald-400 mr-2" />
                  Disponibilité
                </h4>
                <p className="text-slate-300 mb-4">
                  Actuellement ouvert aux opportunités de stage, projets freelance 
                  et collaborations dans le domaine de la cybersécurité.
                </p>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-emerald-400 font-medium">Disponible pour nouveaux projets</span>
                </div>
              </div>
            </div>

            {/* Formulaire de contact avec FormSubmit.co */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Envoyez-moi un message</h3>
              
              <form 
                action="https://formsubmit.co/cypherc11@gmail.com" 
                method="POST"
                className="space-y-6"
              >
                {/* Configuration FormSubmit.co */}
                <input type="hidden" name="_subject" value="Nouveau message depuis le portfolio" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value={`${window.location.origin}#contact`} />
                <input type="hidden" name="_autoresponse" value="Merci pour votre message ! Je vous répondrai dans les plus brefs délais." />

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors duration-200"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors duration-200"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors duration-200"
                    placeholder="Sujet de votre message"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors duration-200 resize-none"
                    placeholder="Décrivez votre projet ou votre message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-sky-500 to-emerald-500 text-white rounded-lg font-semibold hover:from-sky-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Envoyer le message
                </button>

                <p className="text-xs text-slate-500 text-center">
                  En soumettant ce formulaire, vous acceptez d'être contacté concernant votre demande.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-slate-700/50 text-center">
          <p className="text-slate-400">
            © 2024 Ahmed Fadil Nchare. Conçu avec passion pour la cybersécurité.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;