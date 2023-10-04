import React from "react";

const Download = () => {
  return (
    <section className="bg_image h-[500px] text-center">
      <div className="mx-auto flex flex-col justify-center items-center h-full container ">
        <h1 className="text-main text-5xl font-bold tracking-wide mb-4 max-md:text-4xl max-sm:text-[32px]">
          Download the app now.
        </h1>
        <p className="text-main font-semibold text-lg md:tracking-wider mb-7 max-md:text-[16px] max-md:mb-4">
          Available on your favorite store. Start your premium experience now
        </p>
        <div className="flex gap-10">
          <button className="text-main font-bold bg-secondary px-7 py-3 rounded-lg max-md:px-5 max-md:py-2 max-md:rounded-md">
            Playstore
          </button>
          <button className="text-main font-bold bg-transparent px-7 py-3 rounded-lg border-[3px] max-md:px-5 max-md:py-2 max-md:rounded-md">
            App Store
          </button>
        </div>
      </div>
    </section>
  );
};

export default Download;
