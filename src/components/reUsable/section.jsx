import React from "react";

const Template = ({ isTitle, h4, h2, p, image, order }) => {
  return (
    <section className="h-auto max-md:container xl:px-[10%] sm:px-[6%] mx-auto max-mob:px-10">
      {isTitle ? (
        <h2 className="text-center text-4xl font-semibold text-headingColor max-md:mb-16">
          How the app works
        </h2>
      ) : (
        ""
      )}
      <div className="flex justify-start items-center flex-wrap max-md:justify-center">
        <div
          className={`${
            order && "order-2"
          } max-md:min-w-[350px] basis-1/2 max-md:order-2`}
        >
          <img src={image} />
        </div>
        <div className="max-md:min-w-[350px] basis-1/2 max-md:basis-full">
          <h4 className="text-secondary font-bold text-2xl mb-4 max-xl:text-[20px] max-lg:text-[15px]">
            {h4}{" "}
          </h4>
          <h2 className="text-primary font-bold text-[40px] mb-4  leading-[1.36] max-xl:text-[32px] max-lg:text-[24px]">
            {h2}
          </h2>
          <p className="text-[#737373] text-[17px] leading-7 tracking-wide max-xl:text-[15px] max-lg:text-[12px]">
            {p}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Template;
