import React from "react";
import hero from "../assets/heroimage.png";

const HeroSection = () => {
  return (
    <>
      <main className="w-full bg-slate-100 h-[82.9vh] bgHero mt-32 text-center">
        <div className="sm:container mx-auto flex justify-center flex-col h-full relative w-90%">
          <h5 className="font-bold text-main text-2xl mb-2 max-sm:mb-1 max-xl:text-[20px] max-lg:text-[18px]">
            Food app
          </h5>
          <h1 className="font-bold text-main text-6xl mb-3 max-sm:mb-2 leading-[1.3] max-xl:text-[50px] max-lg:text-[40px] max-md:text-[36px] max-sm:text-[30px] max-mob:text-[26px]">
            Why stay hungry when <br />
            you can order form Bella Onojie
          </h1>
          <p className="font-medium text-main text-[18px] mb-2 max-sm:mb-1 max-sm:text-[16px] max-mob:text-[15px]">
            Download the bella onoje’s food app now on
          </p>
          <div className="flex gap-5 justify-center mt-6">
            <button className="text-main font-bold px-12 py-3 max-sm:px-8 max-sm:py-2 bg-secondary rounded-full">
              Play Store
            </button>
            <button className="text-main font-bold px-12 py-3 max-sm:px-8 max-sm:py-2 bg-transparent border-[3px] rounded-full ">
              App Store
            </button>
          </div>
        </div>
      </main>
      <div className="flex justify-center md:mt-[-280px] md:mr-28 mx-auto w-full">
        <img src={hero} alt="hero" />
      </div>
    </>
  );
};

export default HeroSection;
