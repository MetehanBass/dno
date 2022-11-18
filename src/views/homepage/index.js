import React from "react";
import Navbar from "components/shared/navbar";
import Hero from "components/hero";
import Showcase from "components/showcase";
import Footer from "components/shared/footer";
import CartButton from "components/shared/cart/cart-button";

const Homepage = () => {

  return (
    <>
      <div className="relative">
        <CartButton />
        <Navbar />
        <Hero />
        <Showcase />
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
