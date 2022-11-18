import React from "react";
import { BsCart2 } from "react-icons/bs";

const CartButton = () => {
  return (
    <div className="navbar-cart-total flex items-center gap-3  rounded-md text-white px-4 py-2 fixed right-10 bottom-10">
      <div>
        <BsCart2 className="lg:text-4xl" />
      </div>
      <div className="">
        <p className="lg:text-lg text-sm font-semibold ">31.31 ₺</p>
        <p className="float-right text-xs">1 Ürün</p>
      </div>
    </div>
  );
};

export default CartButton;
