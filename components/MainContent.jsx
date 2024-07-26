import React from 'react';
import Header from './Header';
import Hero from './Hero';
import EarlyEducationSection from './EarlyEducationSection';
import FeaturesSection from './FeaturesSection';
import VideoTour from './VideoTour';
import TestimonialSection from './TestimonialSection';
import FAQSection from './FAQSection';
import GallerySection from './GallerySection';
import AdmissionEnquiry from './AdmissionEnquiry';
import Footer from './Footer';


function MainContent() {
  return (
    <div className="flex flex-col items-center bg-pink-50">
      <Header />
      <div className="self-stretch w-full bg-black border-2 border-black border-solid min-h-[2px] max-md:max-w-full" />
      <Hero />
      <EarlyEducationSection />
      <FeaturesSection />
      <VideoTour/>
      <TestimonialSection />
      <GallerySection />
      <FAQSection />
      <AdmissionEnquiry/>
      <Footer />
    </div>
  );
}

export default MainContent;