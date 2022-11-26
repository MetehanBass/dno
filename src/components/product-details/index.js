import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "redux/reducers/cartSlice";
import "./styles.scss";
import { motion } from "framer-motion";
import {
  countController,
  decreaseWhileTap,
  increaseWhileTap,
} from "./product-details-animations";
import watch from "assets/showcase-watch.jpg";
import { BsStarFill, BsCart2 } from "react-icons/bs";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
const ProductDetail = () => {
  const { selectedProduct } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [itemCount, setItemCount] = React.useState(1);
  return (
    <div className="pt-20 bg-[#f5f5f5]">
      <div className="product-detail-wrapper w-full px-6 py-12 max-w-[1140px] mx-auto">
        <div className="breadcrumb">Anasayfa - Kolyeler - Spor</div>
        <div className="product-detail mt-10 grid sm:grid-cols-2 grid-cols-1 sm:gap-2 gap-10">
          <div className="product-img rounded-lg max-w-[480px] max-h-[480px] overflow-y-auto flex flex-row gap-6">
            <img
              src={watch}
              alt="product"
              className="aspect-square rounded-lg"
            />
            <img
              src={watch}
              alt="product"
              className="aspect-square rounded-lg"
            />
            <img
              src={watch}
              alt="product"
              className="aspect-square rounded-lg"
            />
          </div>
          <div className="product-info flex flex-col gap-6">
            <div className="product-name text-2xl">{selectedProduct.name}</div>
            <div className="product-rating flex justify-between items-center">
              <div className="flex gap-1">
                <BsStarFill className="text-orange-400" />
                <BsStarFill className="text-orange-400" />
                <BsStarFill className="text-orange-400" />
                <BsStarFill className="text-orange-400" />
                <BsStarFill />
              </div>
              <div>
                <p>Stokta var</p>
              </div>
            </div>
            <div className="product-price">
              <div className="flex gap-3">
                <div>
                  <p className="text-lg">
                    <s>34,55 ₺</s>
                  </p>
                </div>
                <div className="p-2 bg-red-600 text-white text-xs font-medium rounded-3xl">
                  %10 İndirim
                </div>
              </div>
              <div>
                <p className="text-3xl font-semibold">
                  {selectedProduct.price} ₺
                </p>
              </div>
            </div>
            <div className="product-description">
              <p className="text-sm">{selectedProduct.description}</p>
            </div>
            <div className="add-to-cart flex items-center gap-6">
              <div className="product-count flex gap-2">
                <motion.div
                  onClick={() => setItemCount(itemCount - 1)}
                  className="rounded-full text-[#212121] text-[24px]"
                  variants={countController}
                  animate="decrease"
                  whileTap={decreaseWhileTap}
                >
                  <AiOutlineMinusCircle />
                </motion.div>
                <div>
                  <p className="font-medium">{itemCount} Adet</p>
                </div>
                <motion.div
                  onClick={() => setItemCount(itemCount + 1)}
                  className="rounded-full text-[#212121]  text-2xl"
                  variants={countController}
                  animate="increase"
                  whileTap={increaseWhileTap}
                >
                  <AiOutlinePlusCircle />
                </motion.div>
              </div>
              <motion.button
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: selectedProduct.id,
                      name: selectedProduct.name,
                      price: selectedProduct.price,
                      quantity: itemCount,
                    })
                  )
                }
                className="add-to-cart-button flex items-center gap-2 font-medium px-3 py-1 text-white rounded-sm"
                whileHover={{
                  scale: 1.01,
                  backgroundColor: "transparent",
                  color: "black",
                }}
                whileTap={{ scale: 0.9 }}
              >
                <BsCart2 /> <p>Sepete Ekle</p>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
