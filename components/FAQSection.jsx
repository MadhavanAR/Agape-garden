import React from 'react';
import FAQItem from './FAQItem';

const faqItems = [
  {
    question: "What educational approach does Agape Garden follow?",
    answer: "At Agape Garden, we embrace a holistic educational approach that combines play-based learning with structured activities. Our curriculum is designed to foster independence, creativity, and critical thinking skills."
  },
  {
    question: "What age group does Agape Garden cater to?",
    answer: ""
  },
  {
    question: "How are teachers selected and trained at Agape Garden?",
    answer: ""
  },
  {
    question: "What sets Agape Garden apart from other preschools?",
    answer: ""
  }
];

function FAQSection() {
  return (
    <section className="flex overflow-hidden relative flex-col justify-center items-center self-stretch px-16 py-20 mt-24 w-full text-xl font-semibold tracking-tight text-black min-h-[802px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a9800db783e3a0e415c3c0ab8cae43bb0c64a8ecb3f87f50ae8718ed280a85d?apiKey=6e8a6127015d45199b071b5b69920048&" 
        alt="Background for FAQ section" 
        className="object-cover absolute inset-0 size-full" 
      />
      <div className="relative flex flex-col mt-9 mb-12 max-w-full w-[871px] max-md:mb-10">
        <h2 className="self-center text-5xl tracking-wider text-center text-pink-400 leading-[88px] max-md:max-w-full max-md:text-4xl max-md:leading-[82px]">
          Frequently Asked <span className="text-pink-400">Questions</span>
        </h2>
        {faqItems.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
}

export default FAQSection;