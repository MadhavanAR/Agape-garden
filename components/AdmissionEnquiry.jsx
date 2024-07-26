import React from 'react';
import EnquirySteps from './EnquirySteps';
import EnquiryForm from './EnquiryForm';

const AdmissionEnquiry = () => {
  return (
    <section className="mt-32 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-5xl font-semibold text-pink-400 max-md:max-w-full max-md:text-4xl">
        Admission<span className="text-pink-400"> Enquiry</span>
      </h2>
      <div className="mt-32 w-full max-w-[1138px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <EnquirySteps />
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
};

export default AdmissionEnquiry;