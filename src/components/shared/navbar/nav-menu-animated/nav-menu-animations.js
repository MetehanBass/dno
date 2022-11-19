export const slideVerticalAnimation = {
  open: {
    rotateX: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      mass: 0.8,
      type: "spring",
    },
    display: "block",
  },
  close: {
    rotateX: -15,
    y: -320,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

export const slideHorizontalAnimation = {
  left: {
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
  right: {
    x: -250,
    transition: {
      duration: 0.3,
    },
  },
};

export const accountLinksVariants = {
  transition: { opacity: { duration: 0.3 } },
  open: { opacity: 1, x: "0" },
  closed: { opacity: 0, x: "-50px" },
};
export const userDropdownVariants = {
  open: { opacity: 1, height: "auto" },
  closed: { opacity: 0, height: "0px" },
};
