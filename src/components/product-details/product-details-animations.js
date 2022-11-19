export const countController = {
  increase: {
    boxShadow: `0 0 0 0px rgba(34, 204, 136, 0.7), 0 0 0 4px rgba(34, 204, 136, 0)`,
  },
  decrease: {
    boxShadow: `0 0 0 0px rgba(255, 0, 85, 0.7), 0 0 0 4px rgba(255, 0, 85, 0)`,
  },
};

export const increaseWhileTap = {
  boxShadow: `0 0 0 0px rgba(34, 204, 136, 1), 0 0 0 12px rgba(34, 204, 136, 0)`,
  scale: "0.9",
  transition: {
    boxShadow: {
      duration: 0.2,
      from: `0 0 0 0px rgba(34, 204, 136, 0.7), 0 0 0 4px rgba(34, 204, 136, 1)`,
    },
    scale: {
      duration: 0.5,
    },
  },
};
export const decreaseWhileTap = {
  boxShadow: `0 0 0 0px rgba(255, 0, 85, 1), 0 0 0 12px rgba(255, 0, 85, 0)`,
  scale: "0.9",
  transition: {
    boxShadow: {
      duration: 0.2,
      from: `0 0 0 0px rgba(255, 0, 85, 0.7), 0 0 0 4px rgba(255, 0, 85, 1)`,
    },
    scale: {
      duration: 0.5,
    },
  },
};
