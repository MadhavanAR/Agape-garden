import React from 'react';

function HeroImage() {
  return (
    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c87c9276203fa81c2d89a6f0af1cb66a3310e9183ad758e80462298285c739bc?apiKey=6e8a6127015d45199b071b5b69920048&" 
        alt="Children playing and learning at Agape Garden Play School" 
        className="grow w-full aspect-[1.25] max-md:max-w-full" 
      />
    </div>
  );
}

export default HeroImage;