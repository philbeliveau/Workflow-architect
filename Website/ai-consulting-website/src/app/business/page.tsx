import Navigation from '@/components/sections/Navigation';
import BusinessHero from '@/components/sections/business/BusinessHero';
import BusinessSolutions from '@/components/sections/business/BusinessSolutions';
import NoCodeExamples from '@/components/sections/business/NoCodeExamples';
import BusinessBenefits from '@/components/sections/business/BusinessBenefits';
import BusinessCaseStudies from '@/components/sections/business/BusinessCaseStudies';
import BusinessCTA from '@/components/sections/business/BusinessCTA';
import Footer from '@/components/sections/Footer';

export default function BusinessPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <BusinessHero />
        <BusinessSolutions />
        <NoCodeExamples />
        <BusinessBenefits />
        <BusinessCaseStudies />
        <BusinessCTA />
      </main>
      
      <Footer />
    </div>
  );
}

export const metadata = {
  title: "Business - contexteDev",
  description: "Solutions métier sans code basées sur l'IA. Automatisez vos processus et gagnez en efficacité sans équipe technique.",
};