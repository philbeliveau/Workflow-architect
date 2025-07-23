import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import { Shield } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-8 h-8 text-accent-purple" />
            <h1 className="text-h1 font-bold text-text-primary">
              Politique de Confidentialité
            </h1>
          </div>

          <div className="prose prose-lg text-text-secondary space-y-8">
            <section>
              <h2 className="text-h2 font-semibold text-text-primary mb-4">
                Protection de vos données
              </h2>
              <p className="leading-relaxed">
                Chez contexteDev, nous prenons la protection de vos données personnelles très au sérieux. 
                Cette politique explique comment nous collectons, utilisons et protégeons vos informations.
              </p>
            </section>

            <section>
              <h2 className="text-h2 font-semibold text-text-primary mb-4">
                Collecte des données
              </h2>
              <p className="leading-relaxed">
                Nous collectons uniquement les informations nécessaires pour vous fournir nos services : 
                nom, email, entreprise et détails du projet lors de nos échanges.
              </p>
            </section>

            <section>
              <h2 className="text-h2 font-semibold text-text-primary mb-4">
                Utilisation des données
              </h2>
              <p className="leading-relaxed">
                Vos données sont utilisées exclusivement pour vous contacter concernant votre projet 
                et vous fournir nos services. Nous ne vendons jamais vos informations à des tiers.
              </p>
            </section>

            <section>
              <h2 className="text-h2 font-semibold text-text-primary mb-4">
                Contact
              </h2>
              <p className="leading-relaxed">
                Pour toute question concernant cette politique de confidentialité, 
                contactez-nous à : <a href="mailto:contact@contextedev.com" className="text-accent-purple hover:underline">contact@contextedev.com</a>
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
  title: "Politique de Confidentialité - contexteDev",
  description: "Notre engagement pour la protection de vos données personnelles et notre politique de confidentialité.",
};