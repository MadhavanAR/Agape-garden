import React from 'react';
import TestimonialCard from './TestimonialCard';

function TestimonialSection() {
  return (
    <section className="mt-24 max-w-[1006px] mx-auto text-center">
      <h2 className="text-5xl font-semibold text-center text-pink-400 max-md:mt-10 max-md:text-4xl">
        Parents <span className="text-pink-400">Speak</span>
      </h2>
      <p className="mt-11 text-2xl font-medium text-center text-black w-[770px] max-md:mt-10 max-md:max-w-full mx-auto">
        Read what parents love about our play school and how it positively impacts their children's growth!
      </p>
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/772a8b1ccee666ff466b17201cf28c685ec2b227f81a25eeece9ade71a95a893?apiKey=6e8a6127015d45199b071b5b69920048&" 
        alt="" 
        className="z-10 mt-20 max-w-full rounded-full aspect-square w-[102px] max-md:mt-10 mx-auto" 
      />
      <div className="flex gap-5 justify-between items-center px-5 w-full text-center max-md:flex-wrap max-md:max-w-full">
        <button aria-label="Previous testimonial" className="shrink-0 self-stretch my-auto w-8 aspect-square">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/535f3595265beece2ccbbc3fe7aa0b8aca8a381bcae9f3ec818d77bb7eee272c?apiKey=6e8a6127015d45199b071b5b69920048&" alt="" className="w-full h-full" />
        </button>
        <TestimonialCard />
        <button aria-label="Next testimonial" className="shrink-0 self-stretch my-auto w-8 aspect-square">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/88de10c28ac639572213696d79ce399a5a4acea4bef2cd059becf0fcf313c548?apiKey=6e8a6127015d45199b071b5b69920048&" alt="" className="w-full h-full" />
        </button>
      </div>
    </section>
  );
}

export default TestimonialSection;