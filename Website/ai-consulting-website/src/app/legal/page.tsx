import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import { Scale } from 'lucide-react';

export default function LegalPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <Scale className="w-8 h-8 text-accent-purple" />
            <h1 className="text-h1 font-bold text-text-primary">
              Mentions Légales
            </h1>
          </div>

          <div className="prose prose-lg text-text-secondary space-y-8">
            <section>
              <h2 className="text-h2 font-semibold text-text-primary mb-4">
                Éditeur du site
              </h2>
              <div className="leading-relaxed">
                <p><strong>contexteDev</strong></p>
                <p>Représenté par Philippe Béliveau</p>
                <p>Email : <a href="mailto:contact@contextedev.com" className="text-accent-purple hover:underline">contact@contextedev.com</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-h2 font-semibold text-text-primary mb-4">
                Hébergement
              </h2>
              <p className="leading-relaxed">
                Ce site est hébergé par Vercel Inc.<br />
                440 N Barranca Ave #4133<br />
                Covina, CA 91723, États-Unis
              </p>
            </section>

            <section>
              <h2 className="text-h2 font-semibold text-text-primary mb-4">
                Propriété intellectuelle
              </h2>
              <p className="leading-relaxed">
                L'ensemble de ce site relève de la législation française et internationale 
                sur le droit d'auteur et la propriété intellectuelle.
              </p>
            </section>

            <section>
              <h2 className="text-h2 font-semibold text-text-primary mb-4">
                Contact
              </h2>
              <p className="leading-relaxed">
                Pour toute question concernant ces mentions légales : 
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
  title: "Mentions Légales - contexteDev",
  description: "Mentions légales et informations sur l'éditeur du site contexteDev.",
};