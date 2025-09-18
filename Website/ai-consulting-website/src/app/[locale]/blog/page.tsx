import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import { BookOpen, Code, Brain, ArrowRight, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function BlogPage() {
  const techBlogs = [
    {
      id: 'claude-alignment-techniques',
      title: 'Comment J\'ai Contraint Claude : Techniques d\'Alignement et Persistance des Contraintes',
      excerpt: 'Quand j\'ai commencé à travailler avec Claude sur l\'extraction de données personnelles (PII), j\'ai rapidement découvert un problème majeur : Claude avait tendance à prendre des raccourcis.',
      date: '2025-01-18',
      readTime: '12 min',
      category: 'IA & Développement',
      tags: ['Claude', 'PII', 'Alignement', 'Architecture'],
      featured: true,
      context: {
        challenge: 'Claude prenait des raccourcis dans l\'extraction de données personnelles',
        solution: 'Architecture de contraintes avec CLAUDE.md et mémoire persistante',
        results: ['+66.6% performance vs version non-alignée', '100% conformité fonctionnelle', '0% erreur production 6 mois']
      }
    },
    {
      id: 'sparc-methodology',
      title: 'SPARC : La Méthodologie qui Structure le Développement par IA',
      excerpt: 'Découvrez comment diviser intelligemment vos projets en étapes vérifiables pour obtenir des résultats fiables avec les agents IA. Une approche structurée en 5 phases.',
      date: '2025-01-18',
      readTime: '14 min',
      category: 'Methodology',
      tags: ['SPARC', 'AI', 'Development', 'Methodology'],
      featured: true,
      context: {
        challenge: 'Éviter les échecs dans le développement avec des agents IA',
        solution: 'Méthodologie SPARC en 5 phases : Spécification, Pseudocode, Architecture, Refinement, Code',
        results: ['3-5x plus rapide', 'Zéro ambiguïté', 'Résultats vérifiables']
      }
    },
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
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background-dark via-background-dark-alt to-background-dark">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary-blue/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-yellow/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-blue/10 rounded-full blur-3xl opacity-15 animate-pulse delay-2000"></div>
        </div>
        
        {/* Background grid pattern with squares */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-2 h-full p-4">
            {Array.from({ length: 144 }, (_, i) => (
              <div 
                key={i} 
                className="bg-text-secondary rounded-sm animate-pulse" 
                style={{
                  animationDelay: `${i * 0.05}s`,
                  animationDuration: '3s'
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10">
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
                <Link 
                  key={blog.id} 
                  href={`/blog/${blog.id}`}
                  className="group relative rounded-lg bg-background-dark-alt p-2 border border-gray-600 hover:border-primary-blue/50 transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:shadow-lg hover:shadow-primary-blue/20"
                >
                  {/* Terminal Header */}
                  <div className="relative flex text-center">
                    {/* Window Controls */}
                    <div className="flex pl-3.5 pt-3">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="-ml-0.5 mr-1.5 h-3 w-3 text-accent-red/20 group-hover:text-accent-red/40 transition-colors">
                        <circle r="12" cy="12" cx="12"></circle>
                      </svg>
                      <svg viewBox="0 0 24 24" fill="currentColor" className="-ml-0.75 mr-1.5 h-3 w-3 text-accent-yellow/20 group-hover:text-accent-yellow/40 transition-colors">
                        <circle r="12" cy="12" cx="12"></circle>
                      </svg>
                      <svg viewBox="0 0 24 24" fill="currentColor" className="-ml-0.75 mr-1.5 h-3 w-3 text-success-green/20 group-hover:text-success-green/40 transition-colors">
                        <circle r="12" cy="12" cx="12"></circle>
                      </svg>
                    </div>
                    {/* File Title */}
                    <span className="absolute inset-x-0 top-2 text-xs text-text-secondary group-hover:text-text-primary transition-colors">{blog.category}.tsx</span>
                  </div>
                  
                  {/* Terminal Content */}
                  <div className="mt-5 space-y-1.5 px-5 pb-10">
                    {/* Date and Read Time */}
                    <p className="font-mono text-xs font-normal tracking-wide text-accent-purple">
                      <span className="text-text-secondary">{"//"}</span> <span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-primary-blue/10 group-hover:before:bg-primary-blue/20 transition-all"><span className="relative text-primary-blue group-hover:text-primary-blue-light">{blog.date}</span></span> <span className="text-text-secondary">•</span> <span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-primary-blue/10 group-hover:before:bg-primary-blue/20 transition-all"><span className="relative text-primary-blue group-hover:text-primary-blue-light">{blog.readTime}</span></span>
                    </p>
                    
                    {/* Title as component */}
                    <p className="mt-4 font-mono text-xs font-normal tracking-wide text-accent-purple">
                      <span className="text-text-secondary">&lt;</span><span className="text-accent-red group-hover:text-accent-red-light transition-colors">ArticleTitle</span><span className="text-text-secondary">&gt;</span>
                    </p>
                    <p className="ml-3 font-mono text-xs font-normal leading-4 tracking-wide text-accent-purple">
                      <span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-primary-blue/10 group-hover:before:bg-primary-blue/20 transition-all"><span className="relative text-primary-blue group-hover:text-primary-blue-light">{blog.title}</span></span>
                    </p>
                    <p className="font-mono text-xs font-normal tracking-wide text-accent-purple">
                      <span className="text-text-secondary">&lt;/</span><span className="text-accent-red group-hover:text-accent-red-light transition-colors">ArticleTitle</span><span className="text-text-secondary">&gt;</span>
                    </p>
                    
                    {/* Excerpt as content */}
                    <p className="ml-3 font-mono text-xs font-normal leading-4 tracking-wide text-accent-purple">
                      <span className="text-text-secondary">&lt;</span><span className="text-accent-red group-hover:text-accent-red-light transition-colors">Description</span><span className="text-text-secondary">&gt;</span>
                    </p>
                    <p className="ml-6 font-mono text-xs font-normal leading-4 tracking-wide text-accent-purple">
                      <span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-primary-blue/10 group-hover:before:bg-primary-blue/20 transition-all"><span className="relative text-primary-blue group-hover:text-primary-blue-light">{blog.excerpt.slice(0, 80)}...</span></span>
                    </p>
                    <p className="ml-3 font-mono text-xs font-normal tracking-wide text-accent-purple">
                      <span className="text-text-secondary">&lt;/</span><span className="text-accent-red group-hover:text-accent-red-light transition-colors">Description</span><span className="text-text-secondary">&gt;</span>
                    </p>
                    
                    {/* Click indicator */}
                    <div className="mt-4 flex items-center justify-between">
                      <p className="font-mono text-xs text-text-secondary group-hover:text-primary-blue transition-colors">
                        {`// click to read →`}
                      </p>
                      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight className="w-3 h-3 text-primary-blue" />
                        <span className="font-mono text-xs text-primary-blue">read()</span>
                      </div>
                    </div>
                  </div>
                  
                </Link>

              ))}
            </div>
          </div>

          {/* Future Articles */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-h2 font-bold text-text-primary mb-8 text-center">
              Prochains Articles Techniques
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative rounded-lg bg-background-dark-alt p-2 border border-gray-600">
                {/* Terminal Header */}
                <div className="relative flex text-center">
                  <div className="flex pl-3.5 pt-3">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="-ml-0.5 mr-1.5 h-3 w-3 text-accent-red/20">
                      <circle r="12" cy="12" cx="12"></circle>
                    </svg>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="-ml-0.75 mr-1.5 h-3 w-3 text-accent-yellow/20">
                      <circle r="12" cy="12" cx="12"></circle>
                    </svg>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="-ml-0.75 mr-1.5 h-3 w-3 text-success-green/20">
                      <circle r="12" cy="12" cx="12"></circle>
                    </svg>
                  </div>
                  <span className="absolute inset-x-0 top-2 text-xs text-text-secondary">microservices.tsx</span>
                </div>
                <div className="mt-5 space-y-1.5 px-5 pb-10">
                  <p className="font-mono text-xs font-normal tracking-wide text-accent-purple">
                    <span className="text-text-secondary">&lt;</span><span className="text-accent-red">Article</span><span className="ml-2 text-accent-purple">status<span className="text-text-secondary">=</span><span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-primary-blue/10"><span className="relative text-primary-blue">"coming-soon"</span></span></span><span className="text-text-secondary">&gt;</span>
                  </p>
                  <p className="ml-3 font-mono text-xs font-normal tracking-wide text-accent-purple">
                    <span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-primary-blue/10"><span className="relative text-primary-blue">Architecture Microservices</span></span>
                  </p>
                  <p className="ml-3 font-mono text-xs font-normal leading-4 tracking-wide text-accent-purple">
                    <span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-primary-blue/10"><span className="relative text-primary-blue">Patterns avancés et optimisations</span></span>
                  </p>
                  <p className="font-mono text-xs font-normal tracking-wide text-accent-purple">
                    <span className="text-text-secondary">&lt;/</span><span className="text-accent-red">Article</span><span className="text-text-secondary">&gt;</span>
                  </p>
                </div>
              </div>
              
              <div className="relative rounded-lg bg-background-dark-alt p-2 border border-gray-600">
                <div className="relative flex text-center">
                  <div className="flex pl-3.5 pt-3">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="-ml-0.5 mr-1.5 h-3 w-3 text-accent-red/20">
                      <circle r="12" cy="12" cx="12"></circle>
                    </svg>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="-ml-0.75 mr-1.5 h-3 w-3 text-accent-yellow/20">
                      <circle r="12" cy="12" cx="12"></circle>
                    </svg>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="-ml-0.75 mr-1.5 h-3 w-3 text-success-green/20">
                      <circle r="12" cy="12" cx="12"></circle>
                    </svg>
                  </div>
                  <span className="absolute inset-x-0 top-2 text-xs text-text-secondary">llm-engineering.tsx</span>
                </div>
                <div className="mt-5 space-y-1.5 px-5 pb-10">
                  <p className="font-mono text-xs font-normal tracking-wide text-accent-purple">
                    <span className="text-text-secondary">&lt;</span><span className="text-accent-red">Article</span><span className="ml-2 text-accent-purple">status<span className="text-text-secondary">=</span><span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-primary-blue/10"><span className="relative text-primary-blue">"coming-soon"</span></span></span><span className="text-text-secondary">&gt;</span>
                  </p>
                  <p className="ml-3 font-mono text-xs font-normal tracking-wide text-accent-purple">
                    <span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-primary-blue/10"><span className="relative text-primary-blue">LLM Engineering</span></span>
                  </p>
                  <p className="ml-3 font-mono text-xs font-normal leading-4 tracking-wide text-accent-purple">
                    <span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-primary-blue/10"><span className="relative text-primary-blue">Techniques avancées de prompt engineering</span></span>
                  </p>
                  <p className="font-mono text-xs font-normal tracking-wide text-accent-purple">
                    <span className="text-text-secondary">&lt;/</span><span className="text-accent-red">Article</span><span className="text-text-secondary">&gt;</span>
                  </p>
                </div>
              </div>
              
              <div className="relative rounded-lg bg-background-dark-alt p-2 border border-gray-600">
                <div className="relative flex text-center">
                  <div className="flex pl-3.5 pt-3">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="-ml-0.5 mr-1.5 h-3 w-3 text-accent-red/20">
                      <circle r="12" cy="12" cx="12"></circle>
                    </svg>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="-ml-0.75 mr-1.5 h-3 w-3 text-accent-yellow/20">
                      <circle r="12" cy="12" cx="12"></circle>
                    </svg>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="-ml-0.75 mr-1.5 h-3 w-3 text-success-green/20">
                      <circle r="12" cy="12" cx="12"></circle>
                    </svg>
                  </div>
                  <span className="absolute inset-x-0 top-2 text-xs text-text-secondary">devops-ai.tsx</span>
                </div>
                <div className="mt-5 space-y-1.5 px-5 pb-10">
                  <p className="font-mono text-xs font-normal tracking-wide text-accent-purple">
                    <span className="text-text-secondary">&lt;</span><span className="text-accent-red">Article</span><span className="ml-2 text-accent-purple">status<span className="text-text-secondary">=</span><span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-primary-blue/10"><span className="relative text-primary-blue">"coming-soon"</span></span></span><span className="text-text-secondary">&gt;</span>
                  </p>
                  <p className="ml-3 font-mono text-xs font-normal tracking-wide text-accent-purple">
                    <span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-primary-blue/10"><span className="relative text-primary-blue">DevOps & IA</span></span>
                  </p>
                  <p className="ml-3 font-mono text-xs font-normal leading-4 tracking-wide text-accent-purple">
                    <span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-primary-blue/10"><span className="relative text-primary-blue">Intégration IA dans les pipelines CI/CD</span></span>
                  </p>
                  <p className="font-mono text-xs font-normal tracking-wide text-accent-purple">
                    <span className="text-text-secondary">&lt;/</span><span className="text-accent-red">Article</span><span className="text-text-secondary">&gt;</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      </div>
    </div>
  );
}

export const metadata = {
  title: "Blog Technique - contexteDev",
  description: "Articles techniques approfondis sur l'IA, l'architecture logicielle et les solutions innovantes de développement par les experts de contexteDev.",
};