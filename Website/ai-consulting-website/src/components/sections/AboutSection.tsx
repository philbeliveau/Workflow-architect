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
            Rencontrez Notre Équipe d'Experts
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Une équipe d'experts passionnés par la démocratisation de l'accès aux technologies avancées.
            Ensemble, nous transformons la complexité technique en solutions pratiques.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Philippe Béliveau */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative mb-6 inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-purple to-accent-gray rounded-2xl blur-lg opacity-20"></div>
              <Image
                src="/philippe-beliveau.png"
                alt="Philippe Béliveau"
                width={200}
                height={200}
                className="relative w-48 h-48 object-cover rounded-2xl shadow-2xl mx-auto"
              />
            </div>
            
            <h3 className="text-h3 font-bold text-text-primary mb-2">
              Philippe Béliveau
            </h3>
            <p className="text-accent-purple font-semibold mb-4">
              Fondateur & Expert IA
            </p>
            
            <div className="text-text-secondary leading-relaxed text-sm">
              <p>
                Expert en développement IA et orchestration d'agents. 
                Spécialisé dans la transformation des processus complexes en solutions pratiques.
              </p>
            </div>
          </motion.div>

          {/* Partner 1 Placeholder */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative mb-6 inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-teal rounded-2xl blur-lg opacity-20"></div>
              <div className="relative w-48 h-48 bg-gradient-to-r from-accent-blue/20 to-accent-teal/20 rounded-2xl shadow-2xl mx-auto flex items-center justify-center border border-accent-blue/30">
                <Users className="w-16 h-16 text-accent-blue" />
              </div>
            </div>
            
            <h3 className="text-h3 font-bold text-text-primary mb-2">
              Partenaire Expert
            </h3>
            <p className="text-accent-blue font-semibold mb-4">
              Spécialiste Business & Stratégie
            </p>
            
            <div className="text-text-secondary leading-relaxed text-sm">
              <p>
                Expert en transformation digitale et accompagnement stratégique. 
                Spécialisé dans l'adoption d'IA pour les équipes non-techniques.
              </p>
            </div>
          </motion.div>

          {/* Partner 2 Placeholder */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative mb-6 inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-gray to-accent-purple rounded-2xl blur-lg opacity-20"></div>
              <div className="relative w-48 h-48 bg-gradient-to-r from-accent-gray/20 to-accent-purple/20 rounded-2xl shadow-2xl mx-auto flex items-center justify-center border border-accent-gray/30">
                <Code className="w-16 h-16 text-accent-gray" />
              </div>
            </div>
            
            <h3 className="text-h3 font-bold text-text-primary mb-2">
              Partenaire Technique
            </h3>
            <p className="text-accent-gray font-semibold mb-4">
              Architecte & DevOps Expert
            </p>
            
            <div className="text-text-secondary leading-relaxed text-sm">
              <p>
                Architecte logiciel et expert en infrastructure. 
                Spécialisé dans les déploiements IA à grande échelle et l'optimisation des performances.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Combined Skills and Achievements Section */}
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary-900/50 to-primary-800/50 border border-primary-700 rounded-3xl p-12">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Skills */}
              <div>
                <h4 className="text-h3 font-bold text-text-primary mb-8 text-center lg:text-left">
                  Domaines d'expertise
                </h4>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-12 h-12 bg-accent-purple/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <div className="text-accent-purple">
                          {skill.icon}
                        </div>
                      </div>
                      <div>
                        <h5 className="font-bold text-text-primary mb-2">
                          {skill.title}
                        </h5>
                        <p className="text-text-secondary text-sm leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="text-h3 font-bold text-text-primary mb-8 text-center lg:text-left">
                  Accomplissements clés
                </h4>
                <div className="space-y-6">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-12 h-12 bg-accent-gray/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <div className="text-accent-gray">
                          {achievement.icon}
                        </div>
                      </div>
                      <div>
                        <h5 className="font-bold text-text-primary mb-2">
                          {achievement.title}
                        </h5>
                        <p className="text-text-secondary text-sm leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quote Section */}
        <motion.div
          className="max-w-4xl mx-auto mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-accent-purple/10 to-accent-gray/10 border border-accent-purple/20 rounded-3xl p-8">
            <blockquote className="text-text-secondary italic leading-relaxed text-lg text-center">
              "Mon objectif est simple : que chaque développeur et chaque dirigeant puisse 
              exploiter la puissance de l'IA sans se perdre dans la complexité technique. 
              La technologie doit servir vos objectifs, pas l'inverse."
            </blockquote>
            <div className="mt-6 text-center">
              <cite className="text-accent-purple font-semibold not-italic text-lg">
                — Philippe Béliveau
              </cite>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center" style={{ display: 'none' }}>
          {/* Hidden old structure */}
          <div className="space-y-8">
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