import React from 'react';

function VideoTourSection() {
  return (
    <section className="flex overflow-hidden relative flex-col justify-center items-center self-stretch px-16 py-20 mt-20 w-full text-center min-h-[971px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ca4762f7f5101b49073c3fec4d52288881650cb88390cd5ad6ddc6280cad932?apiKey=6e8a6127015d45199b071b5b69920048&" 
        alt="Background for video tour section" 
        className="object-cover absolute inset-0 size-full" 
      />
      <div className="flex relative flex-col items-center mt-6 mb-2.5 w-full max-w-[1140px] max-md:max-w-full">
        <div className="flex overflow-hidden relative flex-col justify-center items-start pt-5 pb-3 ml-24 max-w-full text-5xl font-semibold text-pink-400 aspect-[4] w-[280px] max-md:text-4xl">
          <img 
            loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/35d8dded54357e01b5b2e3ba641950a8174e900fe211409eca765502cde92c0e?apiKey=6e8a6127015d45199b071b5b69920048&" 
            alt="" 
            className="object-cover absolute inset-0 size-full" 
          />
          Take A <span className="text-pink-400">Video Tour</span>
        </div>
        <p className="mt-8 text-2xl font-medium text-black w-[487px] max-md:max-w-full">
          Explore the charming and inviting spaces of our play school!
        </p>
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca1f41dff178402fa241727d074382f05338ed4e8f7ece9deeb32c9970d2fb8f?apiKey=6e8a6127015d45199b071b5b69920048&" 
          alt="Video tour of Agape Garden Play School" 
          className="self-stretch mt-10 w-full aspect-[2.04] max-md:max-w-full" 
        />
      </div>
    </section>
  );
}

export default VideoTourSection;