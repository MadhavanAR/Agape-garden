import React from 'react';
import StepItem from './StepItem';

const steps = [
  {
    number: 1,
    description: 'Complete and submit the inquiry form with your details.',
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1fe453eab8f31d10b329ae8b64885c07de41713fdcb5f71e9eafd182164b754d?apiKey=6e8a6127015d45199b071b5b69920048&&apiKey=6e8a6127015d45199b071b5b69920048'
  },
  {
    number: 2,
    description: 'We will assist you in scheduling a visit to Agape Garden Play School.',
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/364c8f3fbeff5ac72ddc517f34ed3cd3468e9e8736736521c5be081273340b32?apiKey=6e8a6127015d45199b071b5b69920048&&apiKey=6e8a6127015d45199b071b5b69920048'
  },
  {
    number: 3,
    description: 'Explore our campus and connect with our educators.',
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/03e57a63a4954833cdab049a02ccacf0fc4956e505db3328a6d68a13baee63cc?apiKey=6e8a6127015d45199b071b5b69920048&&apiKey=6e8a6127015d45199b071b5b69920048'
  },
  {
    number: 4,
    description: 'Enroll your child and become a part of our nurturing community.',
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/66dc49e9d94ebe9e9d590f9becf5ca4e6ff5d87317bd1948163f70e1890eb834?apiKey=6e8a6127015d45199b071b5b69920048&&apiKey=6e8a6127015d45199b071b5b69920048'
  }
];

function EnquirySteps() {
  return (
    <section className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
      {steps.map((step, index) => (
        <StepItem
          key={step.number}
          number={step.number}
          description={step.description}
          imageSrc={step.imageSrc}
          className={index > 0 ? 'mt-20 max-md:mt-10' : ''}
        />
      ))}
    </section>
  );
}

export default EnquirySteps;