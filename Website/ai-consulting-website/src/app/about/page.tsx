import Navigation from '@/components/sections/Navigation';
import AboutSection from '@/components/sections/AboutSection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/sections/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        <AboutSection />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
}

export const metadata = {
  title: "À propos - contexteDev",
  description: "Découvrez Philippe Béliveau, fondateur de contexteDev. Expert en IA et développement logiciel, passionné par la démocratisation technologique.",
};