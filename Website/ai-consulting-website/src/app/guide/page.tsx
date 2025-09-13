'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header with Logo */}
      <header className="fixed top-0 left-0 w-full bg-black border-b border-gray-800 z-50 py-4">
        <div className="container mx-auto px-6">
          <div className="flex justify-center">
            <h1 className="text-xl font-bold text-white tracking-wider">NEWCODE</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-gray-800 pt-20">
        {/* Background with gradient and pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-block bg-gray-800 border border-gray-600 text-white px-6 py-2 rounded text-sm font-semibold mb-8">
                ✨ Nouveau Guide Disponible
              </div>
              
              {/* Main Headline */}
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-white italic font-light">
                  Le Guide newcode
                </span>
                <br />
                <span className="text-white">Maîtriser la Programmation</span>
                <br />
                <span className="text-gray-400 text-4xl lg:text-5xl font-normal">
                  par Spécifications
                </span>
              </h1>
              
              {/* Value Proposition */}
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Le guide complet pour maîtriser la programmation par spécifications. 
                Apprenez les méthodes modernes de développement logiciel structuré et efficace.
              </p>
              
              {/* Social Proof */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-sm text-gray-500">Développeurs formés</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">92%</div>
                  <div className="text-sm text-gray-500">Taux de satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">4.8/5</div>
                  <div className="text-sm text-gray-500">Note moyenne</div>
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="text-center lg:text-left">
                <a 
                  href="https://buy.stripe.com/eVqaEY5AXd0A9upbhEeEo00" 
                  className="inline-flex items-center gap-3 bg-gray-800 hover:bg-gray-700 border-2 border-gray-600 hover:border-white text-white px-8 py-4 rounded text-lg font-semibold transition-all duration-300"
                >
                  Obtenir le Guide Maintenant
                  <ArrowRight className="w-5 h-5" />
                </a>
                <p className="text-sm text-gray-500 mt-4">💰 Garantie satisfait ou remboursé 30 jours</p>
              </div>
            </div>
            
            {/* Hero Visual */}
            <div className="flex justify-center">
              <div className="relative w-80 h-96 animate-pulse">
                <div className="w-full h-full bg-black border border-gray-600 rounded shadow-2xl flex flex-col items-start justify-start text-left p-8">
                  <div className="text-2xl font-light italic text-white mb-6">
                    Le Guide newcode
                  </div>
                  <div className="text-lg text-white mb-12 leading-relaxed">
                    Maîtriser la Programmation par Spécifications
                  </div>
                  <div className="text-base text-gray-400 italic absolute bottom-8 left-8">
                    par l&apos;équipe newcode
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Vous développez, mais vous ressentez ces défis ?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Que vous soyez développeur, analyste ou gestionnaire, vous cherchez des méthodes professionnelles pour fiabiliser votre développement
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-12">
            {/* Problem Side */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white text-center mb-8">❌ Les défis actuels</h3>
              
              {[
                {
                  icon: "⚠️",
                  title: "Projets complexes difficiles à gérer",
                  desc: "Plus votre code grandit, plus il devient instable"
                },
                {
                  icon: "🤔",
                  title: "Pas de méthode claire avec l'IA",
                  desc: "Claude Code existe, mais personne ne vous montre comment l'utiliser professionnellement"
                },
                {
                  icon: "🔄",
                  title: "Code non fiabilisé",
                  desc: "Vous codez sans savoir si vos agents sont optimaux"
                },
                {
                  icon: "📈",
                  title: "Nouvelle génération de programmation",
                  desc: "L'industrie évolue, mais vous n'avez pas les clés"
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-6 bg-gray-800 rounded border border-gray-700 hover:bg-gray-750 hover:border-white transition-all">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-300 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Arrow */}
            <div className="flex justify-center items-center py-12">
              <div className="w-16 h-16 bg-gray-800 border-2 border-white rounded-full flex items-center justify-center animate-pulse">
                <span className="text-2xl text-white">→</span>
              </div>
            </div>
            
            {/* Solution Side */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white text-center mb-8">✅ Notre solution</h3>
              
              {[
                {
                  icon: "🎯",
                  title: "Méthodes professionnelles",
                  desc: "Des approches éprouvées pour structurer vos projets complexes"
                },
                {
                  icon: "🤖",
                  title: "Maîtrise de Claude Code",
                  desc: "Guide complet pour utiliser Claude Code comme un expert"
                },
                {
                  icon: "🛡️",
                  title: "Agents fiabilisés",
                  desc: "Techniques pour optimiser et sécuriser vos agents IA"
                },
                {
                  icon: "🚀",
                  title: "Programmation nouvelle génération",
                  desc: "Les clés pour dominer l'avenir du développement"
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-6 bg-gray-800 rounded border border-gray-700 hover:bg-gray-750 hover:border-white transition-all">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-300 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Value Proposition */}
          <div className="text-center p-8 bg-black border-2 border-white rounded max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ce guide vous offre une valeur énorme</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Passez à la nouvelle génération de programmation avec des méthodes que personne d'autre ne vous montre. Transformez votre approche du développement dès aujourd'hui.
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 bg-gradient-to-b from-background-dark-alt to-background-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-text-light to-primary-blue bg-clip-text text-transparent mb-6">
              Ce que vous allez apprendre
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Un parcours complet de la théorie aux applications pratiques
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🧠",
                title: "Fondements Théoriques",
                description: "Comprenez les principes de base de la programmation agentic et l'intelligence artificielle appliquée au développement.",
                features: ["Architecture des agents intelligents", "Patterns de communication", "Orchestration multi-agents"]
              },
              {
                icon: "⚡",
                title: "Implémentation Pratique",
                description: "Apprenez à créer vos propres agents avec des exemples de code concrets et des projets hands-on.",
                features: ["Développement d'agents personnalisés", "Intégration API et services", "Tests et débogage"]
              },
              {
                icon: "🚀",
                title: "Production & Scale",
                description: "Déployez vos agents en production avec les meilleures pratiques pour la performance et la fiabilité.",
                features: ["Déploiement cloud-native", "Monitoring et observabilité", "Optimisation des performances"]
              },
              {
                icon: "💼",
                title: "Cas d'Usage Métier",
                description: "Découvrez comment appliquer la programmation agentic dans des contextes professionnels réels.",
                features: ["Automatisation des workflows", "Assistance au développement", "Optimisation des processus"]
              }
            ].map((card, index) => (
              <div key={index} className="bg-gradient-to-b from-background-light-grey to-background-accent-grey p-8 rounded-2xl border border-primary-blue/20 hover:border-primary-blue/50 transition-all duration-300 hover:scale-105 group">
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold text-text-light mb-4 group-hover:text-primary-blue transition-colors">
                  {card.title}
                </h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {card.description}
                </p>
                <ul className="space-y-2">
                  {card.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="text-primary-blue font-bold mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Table of Contents Preview */}
      <section className="py-20 bg-background-dark">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <div className="text-center lg:text-left mb-12">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-text-light to-primary-blue bg-clip-text text-transparent mb-6">
                  Contenu du Guide
                </h2>
                <p className="text-xl text-text-secondary">
                  14 chapitres complets, 200+ pages d&apos;expertise
                </p>
              </div>
              
              <div className="space-y-8">
                {[
                  {
                    title: "🎯 Partie I : Fondamentaux",
                    chapters: [
                      { num: "01", title: "Introduction à la Programmation Agentic" },
                      { num: "02", title: "Architecture des Agents Intelligents" },
                      { num: "03", title: "Patterns de Communication" }
                    ]
                  },
                  {
                    title: "⚙️ Partie II : Développement",
                    chapters: [
                      { num: "04", title: "Création d'Agents Personnalisés" },
                      { num: "05", title: "Orchestration Multi-Agents" },
                      { num: "06", title: "Intégrations et APIs" }
                    ]
                  },
                  {
                    title: "🚀 Partie III : Production",
                    chapters: [
                      { num: "07", title: "Déploiement et Scaling" },
                      { num: "08", title: "Monitoring et Observabilité" }
                    ]
                  }
                ].map((section, index) => (
                  <div key={index} className="mb-8">
                    <h3 className="text-xl font-bold text-primary-blue mb-4">{section.title}</h3>
                    <div className="space-y-2">
                      {section.chapters.map((chapter, idx) => (
                        <div key={idx} className="flex items-center gap-4 p-3 bg-background-accent-grey/30 rounded-lg hover:bg-primary-blue/10 transition-colors">
                          <span className="bg-gradient-to-r from-primary-blue to-accent-red text-white px-3 py-1 rounded-full text-sm font-semibold min-w-12 text-center">
                            {chapter.num}
                          </span>
                          <span className="text-text-light font-medium flex-1">
                            {chapter.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="relative mb-8">
                <div className="w-48 h-60 bg-gradient-to-br from-text-light to-background-light-grey rounded-lg shadow-2xl transform rotate-3"></div>
                <div className="w-48 h-60 bg-gradient-to-br from-text-light to-background-light-grey rounded-lg shadow-2xl absolute top-2 left-2 transform -rotate-2"></div>
                <div className="w-48 h-60 bg-gradient-to-br from-text-light to-background-light-grey rounded-lg shadow-2xl absolute top-4 left-4"></div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { num: "200+", label: "Pages" },
                  { num: "50+", label: "Exemples" },
                  { num: "20+", label: "Projets" }
                ].map((stat, index) => (
                  <div key={index}>
                    <div className="text-2xl font-bold text-primary-blue">{stat.num}</div>
                    <div className="text-sm text-text-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-20 bg-gradient-to-b from-background-dark-alt to-background-dark">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="text-center">
              <Image
                src="/philippe-beliveau.png"
                alt="Philippe Béliveau"
                width={200}
                height={200}
                className="rounded-full mx-auto border-4 border-primary-blue shadow-2xl"
              />
            </div>
            
            <div className="lg:col-span-2">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-text-light to-primary-blue bg-clip-text text-transparent mb-6">
                  À propos de l&apos;auteur
                </h2>
                <p className="text-xl text-text-secondary mb-8">
                  Expert reconnu en programmation agentic
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-text-light mb-2">Philippe Béliveau</h3>
                <p className="text-primary-blue font-semibold mb-4">Fondateur de New Code & Expert IA</p>
                
                <p className="text-text-secondary mb-6 leading-relaxed">
                  Avec plus de 15 ans d&apos;expérience en développement logiciel et 5 ans de spécialisation en IA, 
                  Philippe a accompagné des centaines d&apos;entreprises dans leur transformation numérique avec les agents intelligents.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { icon: "🏆", text: "15+ ans d'expérience" },
                    { icon: "👨‍🏫", text: "500+ développeurs formés" },
                    { icon: "🚀", text: "100+ projets IA" }
                  ].map((cred, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="text-xl">{cred.icon}</span>
                      <span className="text-text-secondary">{cred.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-text-light to-primary-blue bg-clip-text text-transparent mb-6">
              Ce que disent nos lecteurs
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Des retours authentiques de développeurs qui ont transformé leur approche
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                stars: 5,
                quote: "Ce guide m'a fait économiser des mois de recherche. Les concepts sont expliqués clairement et les exemples pratiques sont directement applicables dans mes projets.",
                author: "Marie Dubois",
                role: "Lead Developer chez TechStart"
              },
              {
                stars: 5,
                quote: "Enfin un guide qui va au-delà de la théorie ! J'ai pu implémenter mes premiers agents en suivant les instructions étape par étape.",
                author: "Thomas Martin",
                role: "Full-Stack Developer"
              },
              {
                stars: 5,
                quote: "La section sur le déploiement en production est exceptionnelle. J'ai pu lancer mon premier système d'agents avec confiance.",
                author: "Sarah Johnson",
                role: "DevOps Engineer"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-b from-background-light-grey to-background-accent-grey p-8 rounded-2xl border border-primary-blue/20 hover:border-primary-blue/50 transition-all duration-300">
                <div className="text-yellow-400 text-xl mb-4">
                  {"⭐".repeat(testimonial.stars)}
                </div>
                <blockquote className="text-text-light mb-6 leading-relaxed italic">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <cite className="not-italic">
                  <div className="font-semibold text-primary-blue">{testimonial.author}</div>
                  <div className="text-sm text-text-muted">{testimonial.role}</div>
                </cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-background-dark-alt to-background-dark">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-center lg:text-left mb-12">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-text-light to-primary-blue bg-clip-text text-transparent mb-6">
                  Investissement dans votre carrière
                </h2>
                <p className="text-xl text-text-secondary">
                  Un guide complet au prix d&apos;une formation courte
                </p>
              </div>
              
              <div className="space-y-4 mb-8">
                {[
                  { label: "Formation en présentiel", price: "2,500€+", strike: true },
                  { label: "Cours en ligne", price: "500€+", strike: true },
                  { label: "Ce guide complet", price: "14€", highlight: true }
                ].map((item, index) => (
                  <div key={index} className={`flex justify-between items-center p-4 rounded-lg ${
                    item.highlight ? 'bg-gradient-to-r from-primary-blue/20 to-accent-red/20 border-2 border-primary-blue' : 
                    item.strike ? 'bg-background-accent-grey/30 opacity-60' : 'bg-background-accent-grey/30'
                  }`}>
                    <span className={`${item.strike ? 'line-through' : ''} text-text-secondary`}>
                      {item.label}
                    </span>
                    <span className={`font-bold ${item.highlight ? 'text-primary-blue text-xl' : 'text-text-light'} ${item.strike ? 'line-through' : ''}`}>
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-3">
                {[
                  "Accès à vie aux mises à jour",
                  "200+ pages de contenu expert",
                  "Exemples de code téléchargeables",
                  "Support par email inclus"
                ].map((prop, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-primary-blue font-bold">✅</span>
                    <span className="text-text-secondary">{prop}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-b from-background-light-grey to-background-accent-grey p-8 rounded-3xl border-2 border-primary-blue shadow-2xl max-w-md mx-auto">
                <div className="bg-gradient-to-r from-accent-red to-primary-blue text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 inline-block">
                  Offre Limitée
                </div>
                
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-2xl font-semibold text-primary-blue">€</span>
                  <span className="text-6xl font-bold text-white">14</span>
                </div>
                <div className="text-text-muted mb-8">Paiement unique</div>
                
                <div className="space-y-4 text-left mb-8">
                  {[
                    "📖 Guide complet (200+ pages)",
                    "💻 Exemples de code",
                    "🎯 20+ projets pratiques",
                    "🔄 Mises à jour à vie",
                    "📧 Support email"
                  ].map((feature, index) => (
                    <div key={index} className="text-text-secondary">
                      {feature}
                    </div>
                  ))}
                </div>
                
                <a 
                  href="https://buy.stripe.com/eVqaEY5AXd0A9upbhEeEo00" 
                  className="block w-full bg-gradient-to-r from-accent-red to-primary-blue text-white py-4 px-6 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl mb-4"
                >
                  Acheter Maintenant
                  <ArrowRight className="inline w-5 h-5 ml-2" />
                </a>
                
                <div className="flex items-center justify-center gap-2 text-sm text-text-muted">
                  <span>🛡️</span>
                  <span>Garantie 30 jours satisfait ou remboursé</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-blue to-accent-red">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à maîtriser la programmation agentic ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Rejoignez les centaines de développeurs qui transforment déjà leur approche du code avec l&apos;IA
          </p>
          
          <div className="mb-8">
            <span className="bg-white/20 text-white px-6 py-3 rounded-full text-lg font-semibold backdrop-blur-sm">
              ⏰ Offre limitée dans le temps
            </span>
          </div>
          
          <a 
            href="https://buy.stripe.com/eVqaEY5AXd0A9upbhEeEo00" 
            className="inline-flex items-center gap-3 bg-white text-primary-blue px-10 py-5 rounded-full text-xl font-bold hover:scale-105 transition-transform duration-300 shadow-2xl hover:shadow-3xl"
          >
            Obtenir le Guide Maintenant - 14€
            <ArrowRight className="w-6 h-6" />
          </a>
          
          <p className="text-white/80 mt-6">💰 Garantie satisfait ou remboursé 30 jours</p>
        </div>
      </section>
    </div>
  );
}