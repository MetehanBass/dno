import React, { useState, useEffect } from "react";
import logoBlack from "../../../assets/dnocat-black.png"
import logoWhite from "../../../assets/dnocat-white.png"
import { AiOutlineUser } from "react-icons/ai";
import { MdMenu } from "react-icons/md";
const Navbar = () => {
  const [top, setTop] = useState(true);
  

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 40 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <div className={`z-[2] navbar-container fixed top-0 left-0 h-24 flex md:justify-around justify-between w-full lg:px-0 px-4 items-center text-white ${top ? "bg-white/90" : "bg-black/80"}`}>
      <div className={`lg:flex hidden lg:text-sm text-xs justify-between gap-6 ${top ? "text-black" : "text-white"}`}>
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
      <div className="navbar-logo lg:-ml-64 ml-0 max-h-24">
        <img className="h-16" src={top ? logoBlack : logoWhite} alt="DNO-CAT"/>
      </div>
      <div className="flex items-center sm:gap-6 gap-2">
        <div className={`text-3xl ${top ? "text-black" : "text-white"}`}>
          <AiOutlineUser className="lg:flex hidden" />
          <MdMenu className="lg:hidden flex" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
