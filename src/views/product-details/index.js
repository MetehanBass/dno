import React from "react";
import Navbar from "components/shared/navbar";
import Footer from "components/shared/footer";
import ProductDetail from "components/product-details";

const ProductDetails = () => {
  return (
    <>
      <Navbar />
      <ProductDetail />
      <Footer />
    </>
  );
};

export default ProductDetails;
