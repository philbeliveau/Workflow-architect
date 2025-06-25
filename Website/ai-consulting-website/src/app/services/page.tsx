import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import ServicesHero from '@/components/sections/services/ServicesHero';
import ServiceDetailCards from '@/components/sections/services/ServiceDetailCards';
import ProcessTimeline from '@/components/sections/services/ProcessTimeline';
import ToolsIntegration from '@/components/sections/services/ToolsIntegration';
import GuaranteeSection from '@/components/sections/services/GuaranteeSection';

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        <ServicesHero />
        <ServiceDetailCards />
        <ProcessTimeline />
        <ToolsIntegration />
        <GuaranteeSection />
      </main>
      
      <Footer />
    </div>
  );
}