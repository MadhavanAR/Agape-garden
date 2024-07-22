"use client"

import React, { useState } from 'react';

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-3">
      <button 
        className="flex gap-5 justify-between w-full px-2.5 py-2 text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="my-auto max-md:max-w-full">{question}</span>
        <img 
          loading="lazy" 
          src={isOpen ? "https://cdn.builder.io/api/v1/image/assets/TEMP/597bbde282fa0055dcf493b3a617431d22fd07219ab267fbbf3479f0c13d72ea?apiKey=6e8a6127015d45199b071b5b69920048&" : "https://cdn.builder.io/api/v1/image/assets/TEMP/1af54ece5838d35e1b8eecee24ac4d3f6d59396914e85244245f2f3a5835a375?apiKey=6e8a6127015d45199b071b5b69920048&"}
          alt={isOpen ? "Close" : "Open"}
          className="shrink-0 aspect-[0.97] w-[30px]" 
        />
      </button>
      {isOpen && (
        <p className="mt-2 font-medium text-justify text-pink-400 max-md:max-w-full">
          {answer}
        </p>
      )}
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7d615bc6f125c2ce065d2f61bf5c6448ed043e1e910b2bff7d8f057928b4f97?apiKey=6e8a6127015d45199b071b5b69920048&" 
        alt="" 
        className="mt-2.5 w-full border-2 border-rose-300 border-solid stroke-[2px] stroke-rose-300 max-md:max-w-full" 
      />
    </div>
  );
}

export default FAQItem;