import React from "react";
import image from "../assets/Rectangle-1.png";
import Template from "./reUsable/section";
const Checkout = () => {
  return (
    <Template
      h4={"Checkout"}
      h2={
        <>
          When you done check out <br />
          and get it delivered.
        </>
      }
      p={
        <>
          When you done check out and get it <br />
          delivered with ease.
        </>
      }
      image={image}
    />
  );
};

export default Checkout;
