import React from "react";

import { AiOutlineUser } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { MdMenu } from "react-icons/md";
const Navbar = () => {
  return (
    <div className="navbar-container h-20 flex md:justify-around justify-between md:px-0 px-4 items-center text-white">
      <div className="">
        <h3 className="text-4xl">DNO</h3>
      </div>
      <div className="md:flex hidden lg:text-base text-sm justify-between gap-6 ">
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
      <div className="flex items-center gap-6">
        <div className="navbar-cart-total flex items-center gap-3 rounded-md text-white px-4 py-2">
          <BsCart2 className="md:text-3xl" />
          <p className="md:text-lg text-sm font-semibold ">31.31 ₺</p>
        </div>
        <div className="text-3xl">
          <AiOutlineUser className="md:flex hidden" />
          <MdMenu className="md:hidden flex" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
