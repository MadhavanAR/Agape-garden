import React from 'react';
import WelcomeSection from './WelcomeSection';
import HeroImage from './HeroImage';

function Hero() {
  return (
    <section className="mt-16 w-full max-w-[1149px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <WelcomeSection />
        <HeroImage />
      </div>
    </section>
  );
}

export default Hero;