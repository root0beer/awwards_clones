import React from "react";
import styles from "./TextMask.module.scss";

const phrases = [
  "It is a long established fact",
  "that a reader will be distracted",
  "by the readable content of a page",
  "when looking at this layout",
];

const PieceText = () => {
  return (
    <div className={styles.body}>
      {phrases.map((phrase, index) => {
        return (
          <div key={index} className={styles.linemask}>
            <p>{phrase}</p>
          </div>
        );
      })}
    </div>
  );
};

const TextMask = () => {
  return (
    <div className={styles.main}>
      <PieceText />
      <PieceText />
      <PieceText />
      <PieceText />
    </div>
  );
};

export default TextMask;
