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

export function HoverAnimation({ children, float }) {
  const createArr = (length, low, high) =>
    [...new Array(length)].map((val, idx) => (idx % 2 == 0 ? high : low));

    const y = float ? createArr(...float) : createArr(3, 1, 2)
  return (
    <motion.div
      animate={{
        y,
      }}
      transition={{ repeat: Infinity, repeatDelay: 0 }}
    >
      {children}
    </motion.div>
  );
}
