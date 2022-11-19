import React from "react";
import { motion, useCycle } from "framer-motion";
import {
  slideHorizontalAnimation,
  slideVerticalAnimation,
} from "./nav-menu-animations";
import { leftMenu, rightMenu } from "./menuData";

const NavMenuAnimated = ({ isOpen, top }) => {
  const [isLeftMenu, toggleMenu] = useCycle(true, false);

  const leftMenuHeight = (leftMenu.length + 1) * 67;
  const rightMenuHeight = (rightMenu.length + 1) * 55;
  const height = isLeftMenu ? leftMenuHeight : rightMenuHeight;
  return (
    <>
      <motion.div
        className={`dropdown-container ${top ? "bg-white/90" : "bg-black/80"}`}
        style={{ height }}
        initial="close"
        animate={isOpen ? "open" : "close"}
        variants={slideVerticalAnimation}
      >
        <motion.div
          className="dropdown"
          initial="left"
          animate={isLeftMenu ? "left" : "right"}
          variants={slideHorizontalAnimation}
        >
          <motion.div className="menu menu-categories">
            <ul className="item-list mt-5">
              {leftMenu.map((text, i) => (
                <li onClick={toggleMenu} key={i} className="item">
                  {text}
                </li>
              ))}
            </ul>

            <div className="mt-3 pt-2 border-t-2 border-slate-600 w-[90%] mx-auto border-solid">
              <ul className="item-list">
                <li className="item">Giriş Yap</li>
                <li className="item">Kayıt Ol</li>
              </ul>
            </div>
          </motion.div>
          <motion.div className="menu menu-sizes">
            <p className="text-xl mt-5 text-center pb-5" onClick={toggleMenu}>
              Kategoriler
            </p>

            <ul className="item-list">
              {rightMenu.map((text, i) => (
                <li key={i} className="item">
                  {text}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default NavMenuAnimated;
