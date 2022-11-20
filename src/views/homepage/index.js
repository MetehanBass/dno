import React from "react";
import Navbar from "components/shared/navbar";
import Hero from "components/hero";
import Showcase from "components/showcase";
import Footer from "components/shared/footer";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Showcase />
      <Footer />
    </>
  );
};

export default Homepage;
