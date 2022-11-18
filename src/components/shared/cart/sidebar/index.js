import { AnimatePresence, motion } from "framer-motion";
import { MenuItem } from "./cart-products";
import "./styles.scss";
import { IoCloseSharp } from "react-icons/io5";

export function Sidebar({ sideBar = false, setSideBar = () => {} }) {
  const itemIds = [0, 1, 2, 3, 4, 5, 6];
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
            <button
              onClick={() => setSideBar((sideBar) => !sideBar)}
              className="bg-white text-black h-8 w-8 block mb-2 rounded-full"
            >
              <IoCloseSharp className="flex justify-center text-3xl" />
            </button>
            <p className="text-center text-3xl font-bold">SEPET</p>
            <div className="cart-product-wrapper mt-10">
              <motion.ul
                variants={variants}
                layoutScroll
                className="flex flex-col gap-2 max-h-[475px] overflow-y-auto"
              >
                {itemIds.map((i) => (
                  <MenuItem i={i} key={i} />
                ))}
              </motion.ul>
            </div>
            <div className="flex justify-between px-2 mt-6 items-center">
              <div className="text-xl font-bold">131,31 ₺</div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <button className="bg-[#06d602] p-2 rounded">
                  Sepeti Onayla
                </button>
              </motion.div>
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
