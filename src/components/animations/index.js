import { motion } from "framer-motion";

export function FadeInAnimation({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

export function HoverBounceAnimation({ children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
    >
      {children}
    </motion.div>
  );
}

export function HoverAnimation({ children }) {
  // createArr(2, 1, 5) == [5, 1].length = 2
  // createArr(3, 1, 2) == [2, 1, 2].length = 3
  const createArr = (length, low, high) =>
    [...new Array(length)].map((val, idx) => (idx % 2 == 0 ? high : low));
  return (
    <motion.div
      animate={{
        y: createArr(3, 1, 2),
      }}
      transition={{ repeat: Infinity, repeatDelay: 0 }}
    >
      {children}
    </motion.div>
  );
}
