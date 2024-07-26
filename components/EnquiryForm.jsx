import React from 'react';

const EnquiryForm = () => {
  return (
    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      <form className="flex flex-col grow justify-center p-12 w-full text-base leading-7 bg-white rounded-xl border-2 border-pink-400 border-solid text-zinc-500 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <h3 className="text-2xl font-semibold leading-6 text-pink-400 max-md:max-w-full">
          Enquire Now
        </h3>
        <input
          type="text"
          placeholder="Name"
          className="px-5 py-3.5 mt-6 max-w-full whitespace-nowrap bg-white rounded-xl border border-pink-400 border-solid text-slate-900 w-[222px]"
        />
        <input
          type="email"
          placeholder="Email"
          className="px-5 py-5 mt-5 whitespace-nowrap rounded-xl border border-solid bg-stone-50 border-zinc-500 max-md:max-w-full"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="px-5 py-5 mt-5 rounded-xl border border-solid bg-stone-50 border-zinc-500 max-md:max-w-full"
        />
        <input
          type="text"
          placeholder="Pincode"
          className="px-5 py-5 mt-5 whitespace-nowrap rounded-xl border border-solid bg-stone-50 border-zinc-500 max-md:max-w-full"
        />
        <button type="submit" className="px-16 py-2.5 mt-10 text-lg font-semibold text-white whitespace-nowrap bg-pink-400 rounded-3xl max-md:px-5 max-md:max-w-full">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EnquiryForm;