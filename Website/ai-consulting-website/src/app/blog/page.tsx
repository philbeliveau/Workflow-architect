import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';
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

          {/* Coming Soon */}
          <div className="max-w-2xl mx-auto text-center bg-primary-800/50 rounded-2xl p-12 border border-primary-700">
            <Calendar className="w-16 h-16 text-accent-purple mx-auto mb-6" />
            <h2 className="text-h2 font-bold text-text-primary mb-4">
              Bientôt disponible
            </h2>
            <p className="text-text-secondary mb-8 leading-relaxed">
              Notre blog arrive prochainement avec des articles approfondis sur l'IA, 
              des tutoriels techniques et des analyses de tendances. 
              En attendant, n'hésitez pas à nous contacter directement.
            </p>
            <Button variant="primary" href="/book-demo">
              Parlons de votre projet
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
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