import React from 'react';

function FeatureCard({ icon, title, description, borderColor, bgColor }) {
  return (
    <div className="flex flex-col items-center px-6 py-9 w-full bg-pink-50 rounded-3xl border border-pink-400 border-solid max-md:px-5 max-md:mt-6">
      <div className="flex flex-col justify-center p-2 rounded-full border-2 border-dashed stroke-[2px] w-[83px]" style={{ borderColor: `var(--${borderColor})` }}>
        <div className={`flex justify-center items-center px-4 w-full rounded-full h-[70px] bg-${bgColor}`}>
          <img loading="lazy" src={icon} alt="" className="w-10 aspect-square" />
        </div>
      </div>
      <h3 className="mt-7 text-lg font-semibold text-center text-black">{title}</h3>
      <p className="self-stretch mt-6 text-lg text-center text-neutral-600">{description}</p>
    </div>
  );
}

export default FeatureCard;