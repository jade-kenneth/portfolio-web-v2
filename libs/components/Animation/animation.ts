export const box1 = {
  hidden: {
    opacity: 0,

    scale: 0,
  },
  visible: {
    opacity: 1,
    originX: 0,
    scale: 1,
    transition: {
      duration: 1,
    },
  },

  exit: {
    opacity: 0,
    y: "150px",
    transition: {
      duration: 0.8,
    },
  },
};
export const container = {
  visible: {
    transition: {
      //higher mass means moves slower
      mass: 0.1,
      //strnght of the opposing force
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
};
