import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import BookingHero from '@/components/sections/booking/BookingHero';
import BookingForm from '@/components/sections/booking/BookingForm';
import WhatToExpect from '@/components/sections/booking/WhatToExpect';
import ContactAlternatives from '@/components/sections/booking/ContactAlternatives';

export default function BookDemoPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        <BookingHero />
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-6 py-24">
          <BookingForm />
          <div className="space-y-12">
            <WhatToExpect />
            <ContactAlternatives />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}