import React from 'react';
import Hero from '../components/sections/Hero';
import TrustBar from '../components/sections/TrustBar';
import HowItWorks from '../components/sections/HowItWorks';
import ServicesDirectory from '../components/sections/ServicesDirectory';
import PreparationGuide from '../components/sections/PreparationGuide';
import BookingFlow from '../components/sections/BookingFlow';
import FAQ from '../components/sections/FAQ';
import LocationBento from '../components/sections/LocationBento';
import ContactCTA from '../components/sections/ContactCTA';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <TrustBar />
      <HowItWorks />
      <ServicesDirectory />
      <PreparationGuide />
      <BookingFlow />
      <FAQ />
      <LocationBento />
      <ContactCTA />
    </div>
  );
}