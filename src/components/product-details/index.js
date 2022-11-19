import React from "react";
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
  return (
    <div className="pt-24 bg-[#f5f5f5]">
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
            <div className="product-name text-2xl">
              Çelik Kaplama Alex de Souza Kolyesi Çelik Kaplama Alex de Souza
              Kolyesi
            </div>
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
                <p className="text-3xl font-semibold">31,31 ₺</p>
              </div>
            </div>
            <div className="product-description">
              <p className="text-sm">
                <span className="font-bold ">DNOCAT</span> çelik kolye ise tüm
                bu klasik olmanın dışına çıkmış ve farklı modeller tasarlayarak
                modern insanın gerek günlük yaşamı gerek iş hayatında rahatlıkla
                kullanabileceği modelleri aynı tasarımlarla bileştirmeyi hedef
                almıştır. Çalıştığı modellerin pürüzsüzlüğü, geometrik
                şekillerin tercihi bazen cam ve mine kullanımı ince ve kıl diye
                tabir edilen çelik zincirlerin kullanımı
                <span className="font-bold "> DNOCAT</span> çelik kolye’de
                zarafetin önünü açmıştır.
              </p>
            </div>
            <div className="add-to-cart flex items-center gap-6">
              <div className="product-count flex gap-2">
                <motion.div
                  className="rounded-full text-red-500 text-[24px]"
                  variants={countController}
                  animate="decrease"
                  whileHover={{ scale: 1.1 }}
                  whileTap={decreaseWhileTap}
                >
                  <AiOutlineMinusCircle />
                </motion.div>
                <div>
                  <p className="font-medium">1 Adet</p>
                </div>
                <motion.div
                  className="rounded-full text-green-500 text-2xl"
                  variants={countController}
                  animate="increase"
                  whileTap={increaseWhileTap}
                >
                  <AiOutlinePlusCircle />
                </motion.div>
              </div>
              <motion.button
                className="add-to-cart-button flex items-center gap-2 font-medium px-3 py-1 text-white rounded-md"
                whileHover={{ scale: 1.1 }}
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