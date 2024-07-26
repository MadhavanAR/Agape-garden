import React from 'react';
import VideoTourContent from './VideoTourContent';

function VideoTour() {
  return (
    <section className="flex overflow-hidden relative flex-col justify-center items-center self-stretch px-16 py-20 mt-20 w-full text-center min-h-[971px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5329a94bc1fc3b351b3171cf391b905763c214bfec5ea7cc9f06cf27d7ab9db9?apiKey=6e8a6127015d45199b071b5b69920048&&apiKey=6e8a6127015d45199b071b5b69920048" alt="" className="object-cover absolute inset-0 size-full" />
      <VideoTourContent />
    </section>
  );
}

export default VideoTour;