import React from 'react';

function WelcomeSection() {
  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col self-stretch px-5 pt-3.5 pb-px my-auto font-semibold text-black max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-3.5 items-start text-xl leading-[70px] max-md:flex-wrap">
          <img 
            loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/273c5af97b5d5d0744d9f7ae8f16956920aa6ef1bf0f7f20558724289bb60d8a?apiKey=6e8a6127015d45199b071b5b69920048&" 
            alt="" 
            className="shrink-0 border-2 border-black border-solid aspect-[1.03] fill-sky-300 stroke-[2px] stroke-black w-[31px]" 
          />
          <div className="flex-auto mt-3.5 max-md:max-w-full">
            Welcome to Agape Garden Play School
          </div>
        </div>
        <h1 className="mt-6 text-5xl leading-[70px] max-md:max-w-full max-md:text-4xl max-md:leading-[65px]">
          Build A Foundation <br /> For A Lifetime of Learning
        </h1>
        <button className="flex gap-5 px-5 py-2.5 mt-9 max-w-full text-xl font-medium leading-9 bg-pink-400 rounded-sm border-2 border-black border-solid w-[328px]">
          <span className="flex-auto my-auto">Know Who We Are</span>
          <img 
            loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9bd3668be1596c7076dcb32ffaebadbf8b6434dec052a30014fb50eb4aea5a81?apiKey=6e8a6127015d45199b071b5b69920048&" 
            alt="" 
            className="shrink-0 border border-solid aspect-square border-stone-950 rounded-[1000px] w-[33px]" 
          />
        </button>
        <div className="flex gap-3 mt-24 max-md:flex-wrap max-md:mt-10">
          <img 
            loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/03aac24c9739d1249a1def5f8b5e9c54da3de7067319aaacdc7eed952ad470ab?apiKey=6e8a6127015d45199b071b5b69920048&" 
            alt="" 
            className="shrink-0 my-auto max-w-full border border-black border-solid aspect-[2.38] rounded-[547.112px] w-[109px]" 
          />
          <div className="flex-auto self-start text-6xl text-center max-md:text-4xl">
            350+
          </div>
          <div className="flex-auto text-3xl">Happy and Engaged Kids</div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSection;