import React, { useState } from "react";
import styles from "./GetChars.module.scss";
import {motion} from "framer-motion";
import { disperse } from "../anim";

const GetChars = ({ children, setBackground }) => {
  const [isActive, setIsActive] = useState(false);

  const getChars = (element) => {
    let chars = [];
    const word = element.props.children;
    word
      .toString()
      .split("")
      .forEach((char, i) => {
        //dont forget to give an index to custom
        chars.push(<motion.span custom={i} variants={disperse} animate={isActive ? "open" : "closed"} key={char + i}>{char}</motion.span>);
      });
    return chars;
  };

  const manageMouseEnter = () => {
    setIsActive(true);
    setBackground(true);
  };

  const manageMouseLeave = () => {
    setIsActive(false);
    setBackground(false);
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
