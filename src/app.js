import * as React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "utils/ScrollToTop";
import Homepage from "views/homepage";
import ProductDetails from "views/product-details";

export default function App() {
  return (
    <div>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Homepage />}>
            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          </Route>
          <Route path="/product-details" element={<ProductDetails />} />
        </Routes>
      </ScrollToTop>
    </div>
  );
}
