import Navigation from '@/components/sections/Navigation';
import ServicesHero from '@/components/sections/services/ServicesHero';
import ServiceDetailCards from '@/components/sections/services/ServiceDetailCards';
import ProcessTimeline from '@/components/sections/services/ProcessTimeline';
import ToolsIntegration from '@/components/sections/services/ToolsIntegration';
import GuaranteeSection from '@/components/sections/services/GuaranteeSection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/sections/Footer';

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <ServicesHero />
        <ServiceDetailCards />
        <ProcessTimeline />
        <ToolsIntegration />
        <GuaranteeSection />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
}

export const metadata = {
  title: "Services - contexteDev",
  description: "Nos services d'implémentation IA : audit, développement, formation et support. Solutions sur mesure pour votre transformation.",
};