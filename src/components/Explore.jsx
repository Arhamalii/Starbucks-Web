import React from "react";
import image from "../assets/explore.png";
import Template from "./reUsable/section";
const Explore = () => {
  return (
    <Template
      h4={"Explore varieties"}
      h2={
        <>
          Shop for your favorites <br />
          meal as e dey hot.
        </>
      }
      p={
        <>
          Shop for your favorite meals or drinks and <br />
          enjoy while doing it.
        </>
      }
      image={image}
      order={true}
    />
  );
};

export default Explore;
