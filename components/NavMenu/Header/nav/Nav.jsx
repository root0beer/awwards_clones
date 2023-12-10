import React from "react";
import styles from "./Nav.module.scss";
import { motion } from "framer-motion";
import { height } from "../anim";
import Body from "./body/Body";
import Image from "next/image";

const Nav = () => {
  return (
    <motion.div
      className={styles.nav}
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body />
          {/* <Footer/> */}
        </div>
        {/* {<Image />} */}
      </div>
    </motion.div>
  );
};

export default Nav;
