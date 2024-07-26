import React from 'react';

function VideoTourTitle() {
  return (
    <div className="flex overflow-hidden relative flex-col pt-5 pb-3 ml-24 max-w-full text-5xl font-semibold text-pink-400 aspect-[4] w-[280px] max-md:text-4xl">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5c83736b912608e5d53caaa6476e094eef5357dbb5e9d57e6345eb70cc420b8?apiKey=6e8a6127015d45199b071b5b69920048&&apiKey=6e8a6127015d45199b071b5b69920048" alt="" className="object-cover absolute inset-0 size-full" />
      Take A <span className="text-pink-400">Video Tour</span>
    </div>
  );
}

export default VideoTourTitle;