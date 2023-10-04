import React from "react";
import {
  Checkout,
  Download,
  Explore,
  Footer,
  HeroSection,
  Navbar,
  Works,
} from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Works />
      <Explore />
      <Checkout />
      <Download />
      <Footer />
    </>
  );
};

export default App;
