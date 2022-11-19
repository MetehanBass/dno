import React, { useState, useEffect } from "react";
import "./styles.scss";
import logoBlack from "../../../assets/dnocat-black.png";
import logoWhite from "../../../assets/dnocat-white.png";
import { AiOutlineUser } from "react-icons/ai";
import { MdMenu } from "react-icons/md";
import { motion, useCycle } from "framer-motion";
import NavMenu from "./nav-menu";
import { MenuButton } from "./menu-button";
import NavMenuAnimated from "./nav-menu-animated";

const Navbar = () => {
  const [top, setTop] = useState(true);
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const [isOpen, toggleDropdown] = useCycle(false, true);

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 40 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <div
      className={`z-[2] navbar-container fixed top-0 left-0 h-24 flex md:justify-around justify-between w-full lg:px-0 px-4 items-center text-white ${
        top ? "bg-white/90" : "bg-black/80"
      }`}
    >
      <div
        className={`lg:flex hidden lg:text-sm text-xs justify-between gap-6 ${
          top ? "text-black" : "text-white"
        }`}
      >
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
      <motion.div
        className="navbar-logo lg:-ml-64 ml-0 max-h-24"
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <img className="h-16" src={top ? logoBlack : logoWhite} alt="DNO-CAT" />
      </motion.div>
      <div className="flex items-center sm:gap-6 gap-2">
        <div
          className={`text-3xl relative ${top ? "text-black" : "text-white"}`}
        >
          <AiOutlineUser
            className="lg:flex hidden cursor-pointer"
            onClick={() => setIsNavMenuOpen((isNavMenuOpen) => !isNavMenuOpen)}
          />

          <MenuButton top={top} onClick={toggleDropdown} isOpen={isOpen} />
          <NavMenuAnimated top={top} isOpen={isOpen} />

          {/* <MdMenu
            className="lg:hidden flex"
            onClick={() => setIsNavMenuOpen((isNavMenuOpen) => !isNavMenuOpen)}
          /> */}

          {/* <NavMenu isNavMenuOpen={isNavMenuOpen} isTop={top} /> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
