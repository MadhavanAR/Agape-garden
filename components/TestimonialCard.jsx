import React from 'react';

function TestimonialCard() {
  return (
    <div className="flex gap-2.5 self-stretch px-10 py-14 bg-pink-50 rounded-3xl border-2 border-pink-400 border-solid shadow-sm max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/88112ef91c0ad888cf6bce013bc894e85a75d5e36ebfa2e46f0b016cf819aaea?apiKey=6e8a6127015d45199b071b5b69920048&" 
        alt="Opening quote" 
        className="shrink-0 self-start mt-14 aspect-[1.03] w-[37px] max-md:mt-10" 
      />
      <div className="flex flex-col grow shrink-0 items-center basis-0 w-fit max-md:max-w-full">
        <h3 className="text-2xl font-bold text-neutral-700">Arjun b</h3>
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/74d8861d6da96d5fd7946de075a27c9b5c557b4b7ac01afcec3fc8c3edbdeb4c?apiKey=6e8a6127015d45199b071b5b69920048&" 
          alt="5-star rating" 
          className="mt-1.5 max-w-full aspect-[6.25] w-[152px]" 
        />
        <div className="flex gap-3.5 items-start self-stretch mt-12 text-xl tracking-wide leading-7 text-black max-md:flex-wrap max-md:mt-10">
          <p className="flex-auto self-start max-md:max-w-full">
            Agape Garden has been a fantastic choice for our son. He loves going to school every day, thanks to the caring teachers and caregivers. We've seen great improvements in his social skills, activities, and academics. Huge thanks to all the teachers, especially Angel Priya, Amala and Anita for their exceptional dedication.
          </p>
          <img 
            loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/79d4c7940e86ba8954b6eb31448d03d0a9473b03debb4aff01267d26a1bb7367?apiKey=6e8a6127015d45199b071b5b69920048&" 
            alt="Closing quote" 
            className="shrink-0 self-end mt-32 aspect-[1.03] w-[37px] max-md:mt-10" 
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;