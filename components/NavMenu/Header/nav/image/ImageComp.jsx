import React from "react";
import styles from "./ImageComp.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import { opacity } from "../../anim";

const ImageComp = ({ src, isActive }) => {
  return (
    <motion.div
      className={styles.imageContainer}
      variants={opacity}
      animate={isActive ? "open" : "closed"}
    >
      <Image 
        src={`/navblur/${src}`} 
        fill={true} 
        alt="image" 
      />
    </motion.div>
  );
};

export default ImageComp;
