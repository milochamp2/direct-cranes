import React from "react";
import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, y = 40, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

// Masked line-by-line reveal. lines = array of strings.
export const MaskedLines = ({ lines, className = "", lineClassName = "", start = 0.1, stagger = 0.12 }) => (
  <div className={className}>
    {lines.map((line, i) => (
      <div key={i} className="overflow-hidden">
        <motion.div
          className={lineClassName}
          initial={{ y: "110%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1, delay: start + i * stagger, ease: [0.16, 1, 0.3, 1] }}
        >
          {line}
        </motion.div>
      </div>
    ))}
  </div>
);
