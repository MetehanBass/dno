import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import Navbar from "./components/shared/navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>
);
