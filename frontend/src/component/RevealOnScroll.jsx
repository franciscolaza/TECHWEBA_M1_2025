import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

export const BounceStagger = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const items = Array.isArray(children) ? children : [children];

  return (
    <div ref={ref}>
      {items.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            delay: index * 0.25,
            type: "spring",
            stiffness: 120,
            damping: 20,
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
};
export const CardStagger = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const items = Array.isArray(children) ? children : [children];

  return (
    <div ref={ref}>
      {items.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{
            delay: index * 0.9,
            type: "spring",
            stiffness: 120,
            damping: 20,
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
};