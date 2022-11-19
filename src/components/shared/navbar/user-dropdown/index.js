import React from "react";
import { motion } from "framer-motion";
const UserDropdown = ({ isUserDropdownOpen, isTop }) => {
  const linkVariants = {
    transition: { opacity: { duration: 0.3 } },
    open: { opacity: 1, x: "0" },
    closed: { opacity: 0, x: "-50px" },
  };
  const variants = {
    open: { opacity: 1, height: "auto" },
    closed: { opacity: 0, height: "0px" },
  };

  return (
    <motion.div
      className={`user-dropdown absolute top-12 w-28 rounded-md ${
        isTop ? "bg-white/90" : "bg-black/80"
      }`}
      animate={isUserDropdownOpen ? "open" : "closed"}
      transition={{ duration: 0.1 }}
      variants={variants}
    >
      <motion.div
        className="py-4 pl-4 text-base flex flex-col gap-2 "
        animate={isUserDropdownOpen ? "open" : "closed"}
        variants={linkVariants}
      >
        <motion.div transition={{ duration: 0.3 }}>Giriş Yap</motion.div>
        <motion.div
          animate={isUserDropdownOpen ? "open" : "closed"}
          transition={{ duration: 0.4 }}
          variants={linkVariants}
        >
          Kayıt Ol
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default UserDropdown;
