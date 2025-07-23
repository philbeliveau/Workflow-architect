import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import { FileText } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="w-8 h-8 text-accent-purple" />
            <h1 className="text-h1 font-bold text-text-primary">
              Conditions Générales d'Utilisation
            </h1>
          </div>

          <div className="prose prose-lg text-text-secondary space-y-8">
            <section>
              <h2 className="text-h2 font-semibold text-text-primary mb-4">
                Conditions d'utilisation
              </h2>
              <p className="leading-relaxed">
                En utilisant les services de contexteDev, vous acceptez les présentes conditions générales d'utilisation.
              </p>
            </section>

            <section>
              <h2 className="text-h2 font-semibold text-text-primary mb-4">
                Services proposés
              </h2>
              <p className="leading-relaxed">
                contexteDev propose des services de conseil et développement en intelligence artificielle, 
                ainsi que des solutions d'automatisation pour entreprises.
              </p>
            </section>

            <section>
              <h2 className="text-h2 font-semibold text-text-primary mb-4">
                Contact
              </h2>
              <p className="leading-relaxed">
                Pour toute question, contactez-nous à : 
                <a href="mailto:contact@contextedev.com" className="text-accent-purple hover:underline ml-1">
                  contact@contextedev.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export const metadata = {
  title: "Conditions Générales - contexteDev",
  description: "Conditions générales d'utilisation des services contexteDev.",
};