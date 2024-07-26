import React from 'react';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c7846761cd8b4be5232e3aa89f52da8f8ff71921b0d6ac9a8970380167fb3a13?apiKey=6e8a6127015d45199b071b5b69920048&&apiKey=6e8a6127015d45199b071b5b69920048",
    title: "Vibrant Play Area",
    description: "A colorful and stimulating space for children to safely explore and play creatively and joyfully.",
    borderColor: "rose-300",
    bgColor: "rose-300"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/94e07f3b250b678509172f4ee96604f03a1563d22072bb7c246a08bcad83a895?apiKey=6e8a6127015d45199b071b5b69920048&&apiKey=6e8a6127015d45199b071b5b69920048",
    title: "Dedicated Caregivers",
    description: "Caregivers who nurture children with the care and attention of a family member.",
    borderColor: "sky-400",
    bgColor: "sky-400"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/78305e98828e6da81e61950321714eefb03a929ddb6ab28786b67e7550a9b277?apiKey=6e8a6127015d45199b071b5b69920048&",
    title: "Safe Environment",
    description: "A secure setting ensuring your child's safety, with non-toxic toys throughout.",
    borderColor: "green-600",
    bgColor: "green-600"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f36fb68fd7a558f6dcc89246c17bd006a08c8999e0b95d7be7a740ef66928194?apiKey=6e8a6127015d45199b071b5b69920048&",
    title: "Emphasis On Hygiene",
    description: "High standards of cleanliness and hygiene maintained at all times.",
    borderColor: "teal-300",
    bgColor: "teal-300"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d8c252b72385ad18bccdcc5d1df6cbd6b4fc66ffef7680c87422e20e68178ffb?apiKey=6e8a6127015d45199b071b5b69920048&",
    title: "Air Conditioned",
    description: "Comfortable, climate-controlled environment for all seasons.",
    borderColor: "sky-400",
    bgColor: "sky-400"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6d1be5716acdb333f7b5dea86f5f05e3159284569993cfea34762fa666b37359?apiKey=6e8a6127015d45199b071b5b69920048&",
    title: "Healthy Snacks",
    description: "Nutritious snacks provided to support your child's growth and health.",
    borderColor: "rose-400",
    bgColor: "rose-400"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d1ad5871a07b145543f24e8f0a84188f59f861b86daeea1e60486f2efd51135a?apiKey=6e8a6127015d45199b071b5b69920048&&apiKey=6e8a6127015d45199b071b5b69920048",
    title: "Transport Available",
    description: "Convenient transportation options for easy drop-off and pick-up.",
    borderColor: "orange-300",
    bgColor: "orange-300"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fea12686101d8a7247dfe48179580a5c55cd0c875b0a57ca3e1f21a22e7a874a?apiKey=6e8a6127015d45199b071b5b69920048&",
    title: "Annual Memory Book",
    description: "Yearly compilation of your child's cherished moments and achievements.",
    borderColor: "rose-300",
    bgColor: "rose-300"
  }
];

function FeaturesSection() {
  return (
    <section className="mt-20 max-w-[1135px] mx-auto">
      <h2 className="text-5xl font-semibold text-center max-md:mt-10 max-md:text-4xl">
        <span className="text-black">Agape</span> <span className="text-pink-400">Features</span>
      </h2>
      <p className="mt-11 text-2xl font-medium text-center text-black max-md:mt-10 max-md:max-w-full">
        See what makes Agape Garden Play School special <br /> with our unique features.
      </p>
      <div className="grid grid-cols-4 gap-5 mt-16 max-md:grid-cols-1">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;

