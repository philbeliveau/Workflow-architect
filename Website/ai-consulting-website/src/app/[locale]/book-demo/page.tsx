import Navigation from '@/components/sections/Navigation';
import BookingHero from '@/components/sections/booking/BookingHero';
import BookingForm from '@/components/sections/booking/BookingForm';
import WhatToExpect from '@/components/sections/booking/WhatToExpect';
import ContactAlternatives from '@/components/sections/booking/ContactAlternatives';
import Footer from '@/components/sections/Footer';
import { Metadata } from 'next';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params;
  
  if (locale === 'en') {
    return {
      title: "Book a Demo - NEWCODE",
      description: "Book your free assessment and discover how AI can transform your processes. Personalized audit included.",
    };
  }
  
  return {
    title: "Réserver une démo - NEWCODE",
    description: "Réservez votre évaluation gratuite et découvrez comment l'IA peut transformer vos processus. Audit personnalisé inclus.",
  };
}

export default function BookDemoPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <BookingHero />
        <div className="py-20 bg-primary-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              <BookingForm />
              <div className="space-y-8">
                <WhatToExpect />
                <ContactAlternatives />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}