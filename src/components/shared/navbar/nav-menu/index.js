import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  accountLinksVariants,
  userDropdownVariants,
  navMenuSidebarVariants,
  navMenuSidebarLinksVariants,
} from "./nav-menu-animations";

const NavMenu = ({ isNavMenuOpen, isTop }) => {
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

  return (
    <>
      {windowSize.innerWidth > 640 ? (
        <motion.div
          className={`user-dropdown absolute top-12 w-28 rounded-md ${
            isTop ? "bg-white/90" : "bg-black/80"
          }`}
          animate={isNavMenuOpen ? "open" : "closed"}
          transition={{ duration: 0.1 }}
          variants={userDropdownVariants}
        >
          <motion.div
            className="py-4 pl-4 text-base flex flex-col gap-2 "
            animate={isNavMenuOpen ? "open" : "closed"}
            variants={accountLinksVariants}
          >
            <motion.div transition={{ duration: 0.3 }}>Giriş Yap</motion.div>
            <motion.div
              animate={isNavMenuOpen ? "open" : "closed"}
              transition={{ duration: 0.4 }}
              variants={accountLinksVariants}
            >
              Kayıt Ol
            </motion.div>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          className={`navMenu-dropdown absolute right-[-40px] w-48 rounded-md ${
            isTop ? "bg-white/90" : "bg-black/80"
          }`}
          animate={isNavMenuOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
          variants={navMenuSidebarVariants}
        >
          <motion.div>
            <p className="text-base pl-4 font-bold uppercase pt-2">
              Kategoriler
            </p>
          </motion.div>
          <motion.div
            className="py-4 pl-4 text-base flex flex-col gap-2 "
            animate={isNavMenuOpen ? "open" : "closed"}
            variants={navMenuSidebarLinksVariants}
          >
            <motion.div transition={{ duration: 0.3 }}>Tümü</motion.div>
            <motion.div
              animate={isNavMenuOpen ? "open" : "closed"}
              transition={{ duration: 0.35 }}
              variants={navMenuSidebarLinksVariants}
            >
              Kolyeler
            </motion.div>
            <motion.div
              animate={isNavMenuOpen ? "open" : "closed"}
              transition={{ duration: 0.4 }}
              variants={navMenuSidebarLinksVariants}
            >
              Bileklikler
            </motion.div>
            <motion.div
              animate={isNavMenuOpen ? "open" : "closed"}
              transition={{ duration: 0.45 }}
              variants={navMenuSidebarLinksVariants}
            >
              Küpeler
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
export default NavMenu;
