import React from 'react';
import VideoTourTitle from './VideoTourTitle';

function VideoTourContent() {
  return (
    <div className="flex relative flex-col items-center mt-6 mb-2.5 w-full max-w-[1140px] max-md:max-w-full">
      <VideoTourTitle />
      <p className="mt-8 text-2xl font-medium text-black w-[487px] max-md:max-w-full">
        Explore the charming and inviting spaces of our play school!
      </p>
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c83f5ddbcad485339590ecc785eb0e2cef21554ebb27c765f9345a99f6156cea?apiKey=6e8a6127015d45199b071b5b69920048&&apiKey=6e8a6127015d45199b071b5b69920048" 
        alt="Video tour of our play school" 
        className="self-stretch mt-10 w-full aspect-[2.04] max-md:max-w-full" 
      />
    </div>
  );
}

export default VideoTourContent;