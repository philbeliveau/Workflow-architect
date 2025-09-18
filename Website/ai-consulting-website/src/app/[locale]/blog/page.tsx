import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import { BookOpen, Code, Brain, ArrowRight, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function BlogPage() {
  const techBlogs = [
    {
      id: 'bmad-methodology',
      title: 'BMAD Method: Structured AI-Driven Development',
      excerpt: 'Discover the complete workflow that transforms project ideas into production-ready applications through intelligent agent collaboration and structured planning.',
      date: '2025-01-18',
      readTime: '12 min',
      category: 'Methodology',
      tags: ['AI', 'Development', 'Methodology', 'Agents'],
      featured: true,
      context: {
        challenge: 'Transform chaotic project starts into structured, agent-driven workflows',
        solution: 'BMAD method with 6 specialized agents and human-in-the-loop processing',
        results: ['85% faster planning', '100% structured output', '6+ specialized agents working together']
      }
    },
    {
      id: 'gayed-trading-signals-swarm',
      title: 'Comment j\'ai Transformé 5 Papiers Académiques en Signaux de Trading Automatisés en 4 Heures',
      excerpt: 'Imaginez-vous devant une pile de 5 papiers académiques de Michael Gayed sur les signaux de trading, une analyse de 47 pages par Manus AI, et la mission d\'implémenter tout ça en code fonctionnel. Normalement, ça prendrait des semaines à une équipe. Moi ? 4 heures.',
      date: '2025-01-10',
      readTime: '15 min',
      category: 'FinTech & Trading',
      tags: ['Trading', 'Swarms', 'FinTech', 'Signals'],
      featured: false,
      context: {
        challenge: 'Implémenter 5 signaux financiers complexes de Michael Gayed',
        solution: 'Swarm de 8 agents IA spécialisés travaillant en parallèle',
        results: ['4h de développement vs 3 semaines équipe', '93.8% précision moyenne', '99.97% uptime production']
      }
    },
    {
      id: 'claude-alignment-techniques',
      title: 'Comment J\'ai Contraint Claude : Techniques d\'Alignement et Persistance des Contraintes',
      excerpt: 'Quand j\'ai commencé à travailler avec Claude sur l\'extraction de données personnelles (PII), j\'ai rapidement découvert un problème majeur : Claude avait tendance à prendre des raccourcis.',
      date: '2025-01-15',
      readTime: '12 min',
      category: 'IA & Développement',
      tags: ['Claude', 'PII', 'Alignement', 'Architecture'],
      featured: false,
      context: {
        challenge: 'Claude prenait des raccourcis dans l\'extraction de données personnelles',
        solution: 'Architecture de contraintes avec CLAUDE.md et mémoire persistante',
        results: ['+66.6% performance vs version non-alignée', '100% conformité fonctionnelle', '0% erreur production 6 mois']
      }
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <BookOpen className="w-8 h-8 text-accent-purple" />
              <h1 className="text-h1 font-bold text-text-primary">
                NEWCODE Blog
              </h1>
            </div>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Insights, methodologies, and deep dives into agentic programming, 
              AI-driven development, and modern software engineering practices.
            </p>
          </div>

          {/* Featured Technical Articles Side by Side */}
          <div className="max-w-7xl mx-auto mb-16">
            <div className="grid lg:grid-cols-2 gap-8">
              {techBlogs.map(blog => (
                <div key={blog.id} className="bg-primary-800/50 rounded-2xl border border-primary-700 overflow-hidden">
                  {/* Header */}
                  <div className="p-6 border-b border-primary-700">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-accent-purple/20 rounded-lg flex items-center justify-center">
                        <Brain className="w-5 h-5 text-accent-purple" />
                      </div>
                      <div>
                        <span className="text-accent-purple text-xs font-medium">{blog.category}</span>
                        <div className="flex items-center gap-2 text-xs text-text-secondary">
                          <span>{blog.date}</span>
                          <span>•</span>
                          <span>{blog.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <h2 className="text-xl font-bold text-text-primary mb-3 leading-tight">
                      {blog.title}
                    </h2>
                    <p className="text-sm text-text-secondary">
                      {blog.excerpt}
                    </p>
                  </div>

                  {/* Content Preview */}
                  <div className="p-6">
                    <div className="space-y-6">
                      {/* Challenge & Solution Context */}
                      <div>
                        <h3 className="text-sm font-semibold text-text-primary mb-2">Le Défi</h3>
                        <p className="text-text-secondary text-sm mb-3">{blog.context.challenge}</p>
                        
                        <h3 className="text-sm font-semibold text-text-primary mb-2">Ma Solution</h3>
                        <p className="text-text-secondary text-sm">{blog.context.solution}</p>
                      </div>

                      {/* Results */}
                      <div className="bg-primary-900/50 rounded-lg p-4">
                        <h3 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
                          <Code className="w-4 h-4 text-accent-green" />
                          Résultats Concrets
                        </h3>
                        <div className="space-y-2">
                          {blog.context.results.map((result, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <div className="w-1 h-1 bg-accent-green rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-xs text-text-secondary">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1">
                        {blog.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="bg-primary-700/50 text-text-secondary px-2 py-1 rounded text-xs">
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <Link href={`/blog/${blog.id}`}>
                        <Button variant="primary" size="sm" className="w-full">
                          Lire l'article
                          <ArrowRight className="ml-2 h-3 w-3" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Future Articles */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-h2 font-bold text-text-primary mb-8 text-center">
              Prochains Articles Techniques
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-primary-800/30 rounded-xl border border-primary-700 p-6 text-center">
                <div className="w-12 h-12 bg-accent-blue/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Code className="w-6 h-6 text-accent-blue" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  Architecture Microservices
                </h3>
                <p className="text-text-secondary text-sm">
                  Patterns avancés et optimisations performance
                </p>
                <div className="mt-4 text-xs text-accent-blue">
                  Bientôt disponible
                </div>
              </div>
              
              <div className="bg-primary-800/30 rounded-xl border border-primary-700 p-6 text-center">
                <div className="w-12 h-12 bg-accent-green/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-6 h-6 text-accent-green" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  LLM Engineering
                </h3>
                <p className="text-text-secondary text-sm">
                  Techniques avancées de prompt engineering
                </p>
                <div className="mt-4 text-xs text-accent-green">
                  Bientôt disponible
                </div>
              </div>
              
              <div className="bg-primary-800/30 rounded-xl border border-primary-700 p-6 text-center">
                <div className="w-12 h-12 bg-accent-purple/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-accent-purple" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  DevOps & IA
                </h3>
                <p className="text-text-secondary text-sm">
                  Intégration IA dans les pipelines CI/CD
                </p>
                <div className="mt-4 text-xs text-accent-purple">
                  Bientôt disponible
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export const metadata = {
  title: "Blog Technique - contexteDev",
  description: "Articles techniques approfondis sur l'IA, l'architecture logicielle et les solutions innovantes de développement par les experts de contexteDev.",
};