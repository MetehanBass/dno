import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import ScrollToTop from "utils/ScrollToTop";
import Homepage from "views/homepage";
import ProductDetails from "views/product-details";
import CartButton from "components/shared/cart/cart-button";
import { motion } from "framer-motion";
import { Sidebar } from "components/shared/cart/sidebar";
export default function App() {
  const [sideBar, setSideBar] = React.useState(false);
  const cart = useSelector((state) => state.cart);

  const getTotalQuantity = () => {
    let total = 0;
    cart.cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };
  const getTotalPrice = () => {
    let totalPrice = 0;
    cart.cart.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice.toFixed(2);
  };
  return (
    <div>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <ScrollToTop>
        <motion.div animate={sideBar ? "open" : "closed"}>
          <Sidebar
            {...{ sideBar, setSideBar, getTotalQuantity, getTotalPrice }}
          />

          <motion.div
            animate={{ opacity: sideBar ? 0.5 : 1 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
          >
            <div className="relative">
              <CartButton
                {...{ sideBar, setSideBar, getTotalQuantity, getTotalPrice }}
              />
              <Routes>
                <Route path="/" element={<Homepage />}>
                  {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
                </Route>
                <Route path="/product-details" element={<ProductDetails />} />
              </Routes>
            </div>
          </motion.div>
        </motion.div>
      </ScrollToTop>
    </div>
  );
}
