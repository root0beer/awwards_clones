import React from "react";
import styles from "./Body.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { translate, blur } from "../../anim";

const Body = ({ links, selectedLink, setSelectedLink }) => {
  const getChar = (title) => {
    let chars = [];
    title.split("").forEach((char, index) => {
      chars.push(
        <motion.span
          custom={[index * 0.02, (title.length - index) * 0.01]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          key={`c_${index}`}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };
  return (
    <div className={styles.body}>
      {links.map((link, index) => {
        const { title, href } = link;
        return (
          <Link
            href={href}
            key={`l_${index}`}
            onMouseOver={() => {
              setSelectedLink({ isActive: true, index });
            }}
            onMouseLeave={() => {
              setSelectedLink({ isActive: false, index });
            }}
          >
            <motion.p variants={blur} initial="initial" animate={selectedLink.isActive && selectedLink.index != index ? "open" : "closed"}>{getChar(title)}</motion.p>
          </Link>
        );
      })}
    </div>
  );
};

export default Body;
