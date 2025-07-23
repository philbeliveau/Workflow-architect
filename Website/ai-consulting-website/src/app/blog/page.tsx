import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import { BookOpen, Clock, Users, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function BlogPage() {
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
                Blog contexteDev
              </h1>
            </div>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Insights, guides pratiques et actualités sur l'IA, le développement logiciel 
              et la transformation numérique.
            </p>
          </div>

          {/* Featured Case Study */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary-800/50 rounded-2xl border border-primary-700 overflow-hidden">
              {/* Header */}
              <div className="p-8 border-b border-primary-700">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent-purple/20 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-accent-purple" />
                  </div>
                  <div>
                    <span className="text-accent-purple text-sm font-medium">Étude de Cas</span>
                    <h2 className="text-h2 font-bold text-text-primary">
                      Développeuse Indépendante Full-Stack
                    </h2>
                  </div>
                </div>
                <p className="text-lg text-text-secondary">
                  Comment gérer 2 projets clients en parallèle avec 60+ heures par semaine sans burnout
                </p>
              </div>

              {/* Content Preview */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Challenge */}
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-3">Le Défi</h3>
                    <ul className="space-y-2 text-text-secondary">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-accent-purple rounded-full mt-2 flex-shrink-0"></div>
                        <span>Startup FinTech : 40h/semaine React/Node.js</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-accent-purple rounded-full mt-2 flex-shrink-0"></div>
                        <span>E-commerce B2B : 25h/semaine microservices</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-accent-purple rounded-full mt-2 flex-shrink-0"></div>
                        <span>65h/semaine + admin = risque de burnout</span>
                      </li>
                    </ul>
                  </div>

                  {/* Solution */}
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-3">La Solution</h3>
                    <ul className="space-y-2 text-text-secondary">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-accent-green rounded-full mt-2 flex-shrink-0"></div>
                        <span>Time-boxing par domaines techniques</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-accent-green rounded-full mt-2 flex-shrink-0"></div>
                        <span>Architecture de workflow parallèle</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-accent-green rounded-full mt-2 flex-shrink-0"></div>
                        <span>Communication client structurée</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Results */}
                <div className="bg-primary-900/50 rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-accent-green" />
                    Résultats Mesurés
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent-green mb-1">-9%</div>
                      <div className="text-sm text-text-secondary">Heures travaillées</div>
                      <div className="text-xs text-text-secondary">62h vs 68h/semaine</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent-green mb-1">+35%</div>
                      <div className="text-sm text-text-secondary">Qualité du code</div>
                      <div className="text-xs text-text-secondary">8.4/10 vs 6.2/10</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent-green mb-1">94%</div>
                      <div className="text-sm text-text-secondary">Respect des délais</div>
                      <div className="text-xs text-text-secondary">vs 70% avant</div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="primary" href="/book-demo" className="flex-1">
                    Discuter de votre situation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" href="mailto:contact@contextedev.ca" className="flex-1">
                    <Clock className="mr-2 h-4 w-4" />
                    Consultation rapide
                  </Button>
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
  title: "Blog - contexteDev",
  description: "Articles et insights sur l'IA, le développement logiciel et la transformation numérique par les experts de contexteDev.",
};