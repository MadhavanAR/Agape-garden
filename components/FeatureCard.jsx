import React from 'react';

function FeatureCard({ icon, title, description, borderColor, bgColor }) {
  return (
    <div
      className="flex flex-col items-center p-6 bg-pink-50 rounded-3xl border-2 border-solid max-md:mt-6"
      style={{
        borderColor: `var(--${borderColor})`,
        width: '265px',
        height: '311px',
        borderRadius: '20px', // Adjust border radius as needed
        boxShadow: '0 0 0 2px rgba(219, 39, 119, 0.6)', // dark pink shadow effect
      }}
    >
      <div
        className="flex flex-col justify-center p-2 rounded-full border-2 border-dashed stroke-[2px] w-[83px]"
        style={{ borderColor: `var(--${borderColor})` }}
      >
        <div
          className={`flex justify-center items-center w-full rounded-full h-[70px] bg-${bgColor}`}
        >
          <img loading="lazy" src={icon} alt="" className="w-10 h-10" />
        </div>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-center text-black">
        {title}
      </h3>
      <p className="mt-4 text-lg text-center text-neutral-600">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;