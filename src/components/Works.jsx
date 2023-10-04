import React from "react";
import image from "../assets/Rectangle.png";
import Template from "./reUsable/section";
const Works = () => {
  return (
    <Template
      isTitle={true}
      h4={"Create an account"}
      h2={
        <>
          Create/login to an existing <br /> account to get started
        </>
      }
      p={
        <>
          An account is created with your email and <br /> a desired password
        </>
      }
      image={image}
    />
  );
};

export default Works;
