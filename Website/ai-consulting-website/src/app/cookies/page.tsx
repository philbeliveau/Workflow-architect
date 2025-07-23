import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import { Cookie } from 'lucide-react';

export default function CookiesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <Cookie className="w-8 h-8 text-accent-purple" />
            <h1 className="text-h1 font-bold text-text-primary">
              Politique des Cookies
            </h1>
          </div>

          <div className="prose prose-lg text-text-secondary space-y-8">
            <section>
              <h2 className="text-h2 font-semibold text-text-primary mb-4">
                Utilisation des cookies
              </h2>
              <p className="leading-relaxed">
                Notre site utilise des cookies essentiels pour assurer son bon fonctionnement 
                et améliorer votre expérience utilisateur.
              </p>
            </section>

            <section>
              <h2 className="text-h2 font-semibold text-text-primary mb-4">
                Types de cookies
              </h2>
              <p className="leading-relaxed">
                Nous utilisons uniquement des cookies techniques nécessaires au fonctionnement du site. 
                Aucun cookie de tracking ou publicitaire n'est utilisé.
              </p>
            </section>

            <section>
              <h2 className="text-h2 font-semibold text-text-primary mb-4">
                Gestion des cookies
              </h2>
              <p className="leading-relaxed">
                Vous pouvez configurer votre navigateur pour refuser les cookies, 
                mais cela pourrait affecter certaines fonctionnalités du site.
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
  title: "Politique des Cookies - contexteDev",
  description: "Information sur l'utilisation des cookies sur le site contexteDev.",
};