import React, { useRef, useEffect } from "react";
import styles from "./TextMask.module.scss";
import { useInView, motion } from "framer-motion";

const phrases = [
  "It is a long established fact",
  "that a reader will be distracted",
  "by the readable content of a page",
  "when looking at this layout",
];

const PieceText = ({ phrases }) => {
  const animate = {
    initial: { y: "100%" },
    open: (i) => ({
      y: "0%",
      transition: { duration: 0.75, delay: i * 0.2, ease: [0.33, 1, 0.68, 1] },
    }),
  };
  const body = useRef(null);
  const isInView = useInView(body, { once: true, margin: "-10%" });

  return (
    <div ref={body} className={styles.body}>
      {phrases.map((phrase, index) => {
        return (
          <div key={index} className={styles.linemask}>
            <motion.p
              custom={index}
              variants={animate}
              initial="initial"
              animate={isInView ? "open" : ""}
            >
              {phrase}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
};

const TextMask = () => {
  return (
    <div className={styles.main}>
      <PieceText phrases={phrases} />
      <PieceText phrases={phrases} />
      <PieceText phrases={phrases} />
      <PieceText phrases={phrases} />
    </div>
  );
};

export default TextMask;
