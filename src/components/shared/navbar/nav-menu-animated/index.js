import React, { useState, useEffect } from "react";
import { motion, useCycle } from "framer-motion";
import {
  slideHorizontalAnimation,
  slideVerticalAnimation,
  userDropdownVariants,
  accountLinksVariants,
} from "./nav-menu-animations";
import { leftMenu, rightMenu } from "./menuData";

const NavMenuAnimated = ({ isOpen, top }) => {
  const [isLeftMenu, toggleMenu] = useCycle(true, false);

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const leftMenuHeight = (leftMenu.length + 1) * 67;
  const rightMenuHeight = (rightMenu.length + 1) * 55;
  const height = isLeftMenu ? leftMenuHeight : rightMenuHeight;
  return (
    <>
      {windowSize.innerWidth > 640 ? (
        <motion.div
          className={`user-dropdown absolute top-12 w-28 rounded-md ${
            top ? "bg-white/90" : "bg-black/80"
          }`}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.1 }}
          variants={userDropdownVariants}
        >
          <motion.div
            className="py-4 pl-4 text-base flex flex-col gap-2 "
            animate={isOpen ? "open" : "closed"}
            variants={accountLinksVariants}
          >
            <motion.div transition={{ duration: 0.3 }}>Giriş Yap</motion.div>
            <motion.div
              animate={isOpen ? "open" : "closed"}
              transition={{ duration: 0.4 }}
              variants={accountLinksVariants}
            >
              Kayıt Ol
            </motion.div>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          className={`dropdown-container ${
            top ? "bg-white/90" : "bg-black/80"
          }`}
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
      )}
    </>
  );
};

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

export default NavMenuAnimated;
