import React, { useState } from "react";
import styles from "./GetChars.module.scss";

const GetChars = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  const getChars = (element) => {
    let chars = [];
    const word = element.props.children;
    word
      .toString()
      .split("")
      .forEach((char, i) => {
        chars.push(<span key={char + i}>{char}</span>);
      });
    return chars;
  };

  const manageMouseEnter = () => {
    setIsActive(true);
  };

  const manageMouseLeave = () => {
    setIsActive(false);
  };

  return (
    <div
      className={styles.line}
      onMouseEnter={() => {
        manageMouseEnter();
      }}
      onMouseLeave={() => {
        manageMouseLeave();
      }}
    >
      {getChars(children)}
    </div>
  );
};

export default GetChars;
