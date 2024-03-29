import { AnimatePresence, motion } from "framer-motion";
import { MenuItem } from "./cart-products";
import "./styles.scss";
import { IoCloseSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import Textfield from "components/shared/inputs/textfield";

export function Sidebar({
  sideBar = false,
  setSideBar = () => {},
  getTotalQuantity,
  getTotalPrice,
}) {
  const cart = useSelector((state) => state.rootState.cart);
  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  return (
    <AnimatePresence>
      {sideBar && (
        <>
          <motion.div
            initial={{ x: "100%" }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="cart-sidebar z-[1] fixed text-white shadow-lg top-0 right-0 w-full max-w-sm h-screen p-5"
          >
            <div className="flex">
              <button
                onClick={() => setSideBar((sideBar) => !sideBar)}
                className="bg-white text-black h-8 w-8 block mb-2 rounded-full"
              >
                <IoCloseSharp className="flex justify-center text-3xl" />
              </button>
              <p className=" flex-1 text-center text-3xl font-bold">SEPET</p>
            </div>
            <div className="flex flex-col justify-start gap-3 ">
              <div className="cart-product-wrapper mt-8 ">
                <motion.ul
                  variants={variants}
                  layoutScroll
                  className="flex flex-col gap-2 max-h-[475px] overflow-y-auto"
                >
                  {cart.cart &&
                    cart.cart.map((item, i) => (
                      <MenuItem
                        i={i}
                        key={i}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                      />
                    ))}
                </motion.ul>
              </div>
              <div className="flex justify-between px-2 items-center">
                <div>
                  <div className="text-xl font-bold">
                    {getTotalPrice() || 0} ₺
                  </div>
                  <div className="text-xs">
                    {getTotalQuantity() || 0} Adet Ürün Sepette
                  </div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <button className="border p-2 rounded">Sepeti Onayla</button>
                </motion.div>
              </div>
              <div className="flex justify-between px-2 items-center ">
                <div>
                  <Textfield placeholder="KAMPANYA KODU" maxLen={6} />
                </div>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <button className="border p-2 w-32 rounded">
                    Kodu Uygula
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.2 }}
            onClick={() => setSideBar((sideBar) => !sideBar)}
            className="bg-transparent px-5 fixed h-full w-full flex items-center justify-center top-0 left-0"
          /> */}
        </>
      )}
    </AnimatePresence>
  );
}
