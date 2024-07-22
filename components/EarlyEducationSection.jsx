import React from "react";
import EarlyEducationCard from "./EarlyEducationCard";

function EarlyEducationSection() {
  return (
    <section className="flex justify-center items-center self-stretch px-16 py-20 mt-28 w-full bg-pink-400 rounded-[100px_100px_0px_0px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-0 mt-9 mb-5 w-full max-w-[1126px] max-md:flex-wrap max-md:max-w-full">
        <div className="z-10 flex-auto justify-center mt-2 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[61%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                <h2 className="text-5xl font-semibold text-white max-md:max-w-full max-md:text-4xl">
                  Why Early Education Matters
                </h2>
                <EarlyEducationCard />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/91ad26a774e50dd1667f157bbaa297d0bed279cf9c24c388c08eab037b8d5099?apiKey=6e8a6127015d45199b071b5b69920048&"
                className="grow mt-36 w-full aspect-[0.85] max-md:mt-10"
                alt=""
              />
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd6010c917ddb266278371d763fa886d94c7672436c833c44018ef5d1fcbdf4f?apiKey=6e8a6127015d45199b071b5b69920048&"
          alt=""
          className="shrink-0 self-start max-w-full aspect-square w-[114px]"
        />
      </div>
    </section>
  );
}

export default EarlyEducationSection;
