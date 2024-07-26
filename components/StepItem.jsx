import React from 'react';

function StepItem({ number, description, imageSrc, className }) {
  return (
    <div className={`flex gap-5 ${className} max-md:flex-wrap`}>
      <div className="flex overflow-hidden relative flex-col self-start px-7 py-5 mt-1 text-base font-black text-white whitespace-nowrap aspect-[1.6] w-[77px] max-md:px-5">
        <img loading="lazy" src={imageSrc} alt="" className="object-cover absolute inset-0 size-full" />
        {number}
      </div>
      <div className="flex-auto text-2xl font-medium text-pink-600">
        {description.split('<br />').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index < description.split('<br />').length - 1 && <br />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default StepItem;