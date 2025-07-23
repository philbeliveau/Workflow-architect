'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Code, Brain, Rocket, Users, Award, BookOpen } from 'lucide-react';

const AboutSection: React.FC = () => {
  const skills = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Intelligence Artificielle",
      description: "Développement et déploiement de solutions IA avancées"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Développement Full-Stack",
      description: "Expertise technique complète du frontend au backend"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Innovation Technologique",
      description: "Veille et implémentation des dernières technologies"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Leadership Technique",
      description: "Direction d'équipes et gestion de projets complexes"
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-5 h-5" />,
      title: "Expert en IA",
      description: "5 ans d'expérience en développement IA"
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Formateur & Consultant",
      description: "Formation d'équipes sur les technologies modernes"
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      title: "Entrepreneur Tech",
      description: "Fondateur de solutions innovantes"
    }
  ];

  return (
    <section className="py-20 bg-primary-800 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="grid grid-cols-16 gap-2 h-full p-4">
          {Array.from({ length: 256 }, (_, i) => (
            <div 
              key={i} 
              className="bg-accent-purple rounded-sm animate-pulse" 
              style={{
                animationDelay: `${i * 0.02}s`,
                animationDuration: '4s'
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-h1 font-bold text-text-primary mb-4">
            Rencontrez Philippe Béliveau
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Fondateur de contexteDev, expert en intelligence artificielle et développement logiciel.
            Passionné par la démocratisation de l'accès aux technologies avancées.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo and Bio */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative mb-8 inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-purple to-accent-gray rounded-2xl blur-lg opacity-20"></div>
              <Image
                src="/philippe-beliveau.png"
                alt="Philippe Béliveau"
                width={300}
                height={300}
                className="relative w-64 h-64 object-cover rounded-2xl shadow-2xl mx-auto lg:mx-0"
              />
            </div>
            
            <h3 className="text-h2 font-bold text-text-primary mb-4">
              Philippe Béliveau
            </h3>
            <p className="text-accent-purple font-semibold mb-4">
              Fondateur & Expert IA
            </p>
            
            <div className="text-text-secondary leading-relaxed space-y-4">
              <p>
                Avec 5 ans d'expérience dans le développement logiciel et 
                l'intelligence artificielle, Philippe a accompagné des dizaines d'entreprises 
                dans leur transformation numérique.
              </p>
              <p>
                Sa mission ? Rendre les technologies avancées accessibles à tous, des startups 
                aux grandes entreprises, en démystifiant l'IA et en créant des solutions concrètes 
                qui génèrent de la valeur dès le premier jour.
              </p>
              <p>
                Expert technique avec une vision business pour des résultats mesurables.
              </p>
            </div>
          </motion.div>

          {/* Skills and Achievements */}
          <div className="space-y-8">
            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-h3 font-bold text-text-primary mb-6">
                Domaines d'expertise
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="p-4 bg-primary-900/50 border border-primary-700 rounded-xl hover:border-accent-purple/50 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-accent-purple/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="text-accent-purple">
                          {skill.icon}
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-text-primary mb-1 text-sm">
                          {skill.title}
                        </h5>
                        <p className="text-text-muted text-xs leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-h3 font-bold text-text-primary mb-6">
                Accomplissements clés
              </h4>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-accent-gray/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-accent-gray">
                        {achievement.icon}
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-text-primary text-sm">
                        {achievement.title}
                      </h5>
                      <p className="text-text-muted text-xs">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quote */}
            <motion.div
              className="bg-gradient-to-r from-accent-purple/10 to-accent-gray/10 border border-accent-purple/20 rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <blockquote className="text-text-secondary italic leading-relaxed">
                "Mon objectif est simple : que chaque développeur et chaque dirigeant puisse 
                exploiter la puissance de l'IA sans se perdre dans la complexité technique. 
                La technologie doit servir vos objectifs, pas l'inverse."
              </blockquote>
              <div className="mt-4 text-right">
                <cite className="text-accent-purple font-semibold not-italic">
                  — Philippe Béliveau
                </cite>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;