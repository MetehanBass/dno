import React from "react";
import Navbar from "components/shared/navbar";
import Footer from "components/shared/footer";
import CartButton from "components/shared/cart/cart-button";
import { motion } from "framer-motion";
import { Sidebar } from "components/shared/cart/sidebar";
import ProductDetail from "components/product-details";

const ProductDetails = () => {
  const [sideBar, setSideBar] = React.useState(false);

  return (
    <>
      <motion.div animate={sideBar ? "open" : "closed"}>
        <Sidebar {...{ sideBar, setSideBar }} />

        <motion.div
          animate={{ opacity: sideBar ? 0.5 : 1 }}
          transition={{ type: "spring", bounce: 0, duration: 0.4 }}
        >
          <div className="relative">
            <CartButton {...{ sideBar, setSideBar }} />
            <Navbar />
            <ProductDetail />
            <Footer />
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ProductDetails;
