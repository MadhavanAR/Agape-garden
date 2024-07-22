import React from 'react';
import GalleryGrid from './GalleryGrid';

function GallerySection() {
  return (
    <section className="mt-28 max-w-[1140px] mx-auto">
      <h2 className="text-5xl font-semibold text-pink-400 leading-[81.6px] max-md:mt-10 max-md:text-4xl">
        Our<span className="text-pink-400"> Gallery</span>
      </h2>
      <GalleryGrid />
      <button className="flex gap-1.5 justify-center px-10 py-3.5 mt-16 text-base leading-4 text-center text-black bg-pink-400 border border-black border-solid shadow-sm rounded-[30px] max-md:px-5 max-md:mt-10 mx-auto">
        View More
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/90664839a43ffa2282136eac4b47ab22b5873c94b2055fabe564abf6a4ceb627?apiKey=6e8a6127015d45199b071b5b69920048&" 
          alt="" 
          className="shrink-0 my-auto aspect-square w-[9px]" 
        />
      </button>
    </section>
  );
}

export default GallerySection;