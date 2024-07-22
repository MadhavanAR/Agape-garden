import React from 'react';

function EarlyEducationCard() {
  return (
    <div className="flex flex-col pb-5 mt-16 text-black bg-sky-300 leading-[128%] rounded-[30px] max-md:mt-10 max-md:mr-0.5 max-md:max-w-full relative">
      <div className="flex flex-col px-8 py-8 bg-white border-4 border-black border-solid rounded-[40px] max-md:px-5 max-md:max-w-full">
        <h3 className="text-3xl font-semibold text-justify max-md:max-w-full">
          The Benefits of Early Education
        </h3>
        <p className="mt-10 text-2xl leading-8 text-ellipsis max-md:mr-1.5 max-md:max-w-full">
          High quality early childhood education and care gives children the best start in life. It provides important opportunities to learn and develop. Early childhood education and care can help your child make friends, develop independence, and learn new routines.
        </p>
        <div className="flex gap-5 justify-end items-center px-0.5 mt-14 text-xl font-medium max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="relative">
            <svg
              className="absolute top-[-40px] left-[-50px] z-10"
              width="79"
              height="79"
              viewBox="0 0 79 79"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38.9372 40.6382C38.2789 40.4736 37.744 40.3776 37.2228 40.1993C31.9562 38.4163 27.2655 35.5498 22.8081 32.2856C22.2869 31.9015 21.7931 31.4215 21.464 30.8866C21.2857 30.5986 21.3131 30.0226 21.4914 29.6934C21.6286 29.4465 22.1635 29.2682 22.4652 29.3231C23.0412 29.4191 23.631 29.6248 24.1522 29.9128C27.5947 31.8055 31.0235 33.712 34.4386 35.6458C35.7142 36.3727 36.976 37.1408 38.2378 37.8951C38.6629 38.142 39.0744 38.4163 39.4584 38.7043C39.8973 39.0198 40.1579 39.4998 39.8699 39.9798C39.6779 40.2953 39.5407 40.6382 38.9372 40.6382Z"
                fill="black"
              />
              <path
                d="M59.3597 21.2176C59.25 21.876 59.1677 22.644 59.0032 23.3846C58.3448 26.306 57.6865 29.2273 57.0007 32.135C56.8499 32.7659 56.5893 33.3831 56.2875 33.9454C55.8898 34.6997 55.3275 34.9603 54.7103 34.8369C54.0931 34.7135 53.7091 34.2197 53.6953 33.3556C53.6816 32.7659 53.6953 32.135 53.8325 31.5727C54.7651 27.8832 55.7252 24.1938 56.699 20.5181C56.8087 20.1067 57.0007 19.6815 57.275 19.3661C57.9471 18.5706 59.0031 18.8175 59.2637 19.8324C59.3597 20.2301 59.3186 20.6827 59.3597 21.2176Z"
                fill="black"
              />
              <path
                d="M22.5888 59.7575C21.9442 59.7026 21.2996 59.5654 20.6687 59.4009C20.1064 59.25 19.7086 58.866 19.6538 58.2488C19.6126 57.7276 20.1338 57.1653 20.8196 57.083C21.7385 56.9733 22.6711 56.8772 23.5901 56.9184C26.3605 57.0418 29.1447 57.2201 31.9152 57.4121C32.8342 57.4807 33.7531 57.6042 34.672 57.755C34.9874 57.8099 35.3166 57.9196 35.5635 58.0979C36.263 58.5779 36.2081 59.4557 35.4538 59.7986C35.0286 59.9906 34.5074 60.0729 34.0411 60.0729C32.505 60.1415 24.8656 59.9358 22.5888 59.7575Z"
                fill="black"
              />
            </svg>
            <button className="relative flex items-center justify-center px-5 py-3 bg-blue-500 text-white border-black border-solid border-[3px] rounded-full max-md:pl-5">
              Read more
            </button>
          </div>
        </div>
      </div>
      {/* New SVG positioned at the left-bottom side */}
      <svg
        className="absolute bottom-[60px] left-[30px] z-10"
        width="58"
        height="58"
        viewBox="0 0 58 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_7_64)">
          <mask id="mask0_7_64" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="58" height="58">
            <path d="M58 0H0V58H58V0Z" fill="white"/>
          </mask>
          <g mask="url(#mask0_7_64)">
            <path d="M2 27V2H27V27H2ZM31 31H56V56H31V31Z" fill="#89E3FF" stroke="black" strokeWidth="4"/>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_7_64">
            <rect width="58" height="58" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default EarlyEducationCard;

