import * as React from "react";
import { motion } from "framer-motion";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "redux/reducers/cartSlice";
import { useDispatch } from "react-redux";
import "./styles.scss";
import watch from "assets/showcase-watch.jpg";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

export const MenuItem = ({ name, quantity, price, id, i }) => {
  const dispatch = useDispatch();

  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  const style = { borderBottom: `2px solid #212121` };

  return (
    <>
      <div>
        <button
          onClick={() => dispatch(removeItem(id))}
          className=" text-white flex  items-center gap-1"
        >
          <IoCloseSharp className="flex justify-center" />{" "}
          <p className="text-xs">Sepetten Kaldır</p>
        </button>
      </div>
      <motion.li className="flex gap-4 items-center py-1" variants={variants}>
        <motion.div className="cart-product-img">
          <img src={watch} alt="DNO-NECKLACE" />
        </motion.div>
        <div className="">
          <div className="cart-product-name text-xs w-40 truncate">{name}ƒ</div>
          <div className="flex justify-between">
            <div className="cart-product-price text-xs">{price} ₺</div>
            <div className="cart-product-amount text-xs">{quantity} Adet</div>
          </div>
        </div>
        <div className="flex flex-col pr-4 gap-2 text-2xl">
          <motion.div
            onClick={() => dispatch(incrementQuantity(id))}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.5 }}
          >
            <AiOutlinePlusCircle />
          </motion.div>
          <motion.div
            onClick={() => dispatch(decrementQuantity(id))}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.8 }}
          >
            <AiOutlineMinusCircle />
          </motion.div>
        </div>
      </motion.li>
      <div style={style} className="w-full mx-auto "></div>
    </>
  );
};
