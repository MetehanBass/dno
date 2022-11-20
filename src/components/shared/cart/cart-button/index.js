import React from "react";
import { BsCart2 } from "react-icons/bs";

const CartButton = ({
  sideBar,
  setSideBar,
  getTotalPrice,
  getTotalQuantity,
}) => {
  return (
    <button
      className="right-10 bottom-10 z-10 fixed"
      onClick={() => setSideBar(!sideBar)}
    >
      <div className="cart-total flex items-center gap-3 rounded-md text-white px-4 py-2">
        <div>
          <BsCart2 className="lg:text-4xl" />
        </div>
        <div className="">
          <p className="lg:text-lg text-sm font-semibold ">
            {getTotalPrice() || 0} ₺
          </p>
          <p className="float-right text-xs">{getTotalQuantity() || 0} Ürün</p>
        </div>
      </div>
    </button>
  );
};

export default CartButton;
