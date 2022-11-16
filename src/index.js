import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import Navbar from "./components/shared/navbar";
import Hero from "./components/hero";
import Showcase from "./components/showcase";
import Footer from "./components/shared/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="custom-hero-background h-screen">
      <Navbar />
      <Hero />
    </div>
    <Showcase />
    <Footer />
  </React.StrictMode>
);
