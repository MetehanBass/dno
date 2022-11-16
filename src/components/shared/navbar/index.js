import React from "react";

import { AiOutlineUser } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { MdMenu } from "react-icons/md";
const Navbar = () => {
  return (
    <div className="navbar-container h-24 flex md:justify-around justify-between w-full lg:px-0 px-4 items-center text-white">
      <div className="lg:flex hidden lg:text-sm text-xs justify-between gap-6">
        <div>
          <p>Çok Satanlar</p>
        </div>
        <div>
          <p>Kolyeler</p>
        </div>
        <div>
          <p>Bileklikler</p>
        </div>
      </div>
      <div className="navbar-logo lg:-ml-28 ml-0">
        <h1 className="text-4xl">DNOCAT</h1>
      </div>
      <div className="flex items-center sm:gap-6 gap-2">
        <div className="navbar-cart-total flex items-center gap-3 rounded-md text-white px-4 py-2 h-10">
          <BsCart2 className="lg:text-3xl" />
          <p className="lg:text-lg text-sm font-semibold ">31.31 ₺</p>
        </div>
        <div className="text-3xl">
          <AiOutlineUser className="lg:flex hidden" />
          <MdMenu className="lg:hidden flex" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
