import React from 'react';

function GalleryGrid() {
  return (
    <div className="mt-24 w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[68%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow max-md:mt-8 max-md:max-w-full">
            <div className="max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <img 
                    loading="lazy" 
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/15ffcafb2e2309150e061cc4530ca355b6f63c39b2cb40ed2c89822a220d342b?apiKey=6e8a6127015d45199b071b5b69920048&" 
                    alt="Gallery image 1" 
                    className="grow w-full aspect-[1.33] max-md:mt-8" 
                  />
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <img 
                    loading="lazy" 
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6c7699489fc0d8b0a7191f28b35d5e88d300fce8200044d0dbda9ac67583b8b?apiKey=6e8a6127015d45199b071b5b69920048&" 
                    alt="Gallery image 2" 
                    className="grow w-full aspect-[1.33] max-md:mt-8" 
                  />
                </div>
              </div>
            </div>
            <div className="mt-7 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow max-md:mt-8">
                    <img 
                      loading="lazy" 
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e4750e727fac14d32e80ceb9b07d17ed351f9cad2b372ffbb46a64a07c49d35?apiKey=6e8a6127015d45199b071b5b69920048&" 
                      alt="Gallery image 3" 
                      className="w-full aspect-[1.52]" 
                    />
                    <img 
                      loading="lazy" 
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3c2397a63aa05a320c00163aaf8582c380789c4e7fbfe968046bc4957d6d1a1?apiKey=6e8a6127015d45199b071b5b69920048&" 
                      alt="Gallery image 4" 
                      className="mt-8 w-full aspect-[1.59]" 
                    />
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow max-md:mt-8">
                    <img 
                      loading="lazy" 
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/97c6f15233a69fb6b361d8bf997a96bf6465b5ea2f4ed17dd3082f68f7a0a663?apiKey=6e8a6127015d45199b071b5b69920048&" 
                      alt="Gallery image 5" 
                      className="w-full aspect-[1.25]" 
                    />
                    <img 
                      loading="lazy" 
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c323c4c457e1a36c9d81d503ec886945776e776c59ee24b4d4220d1a147cc5da?apiKey=6e8a6127015d45199b071b5b69920048&" 
                      alt="Gallery image 6"
                      className="mt-8 w-full aspect-[2.04]" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col max-md:mt-8">
            <img 
              loading="lazy" 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9f184d3afbd905d2399e9ecb2d16b00335500f2d9301c80418026e42bbe1f9a?apiKey=6e8a6127015d45199b071b5b69920048&" 
              alt="Gallery image 7" 
              className="w-full aspect-[2.27]" 
            />
            <img 
              loading="lazy" 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f52e0c1e76459b06776a8b457efe078c494a11eb433e4d66f75717f1b37faeae?apiKey=6e8a6127015d45199b071b5b69920048&" 
              alt="Gallery image 8" 
              className="mt-8 w-full aspect-[1.69]" 
            />
            <img 
              loading="lazy" 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/49932f26c422d5d22a754c0e7d180ecda6c92f2bd7187c3840ac52eed8df8b3a?apiKey=6e8a6127015d45199b071b5b69920048&" 
              alt="Gallery image 9" 
              className="mt-8 w-full aspect-[1.01]" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryGrid;