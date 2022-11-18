import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import Navbar from "./components/shared/navbar";
import Hero from "./components/hero";
import Showcase from "./components/showcase";
import Footer from "./components/shared/footer";
import CartButton from "components/shared/cart/cart-button";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="relative">
      <CartButton />
    <Navbar />
    <Hero />
    <Showcase />
    <Footer />
    </div>
  </React.StrictMode>
);
