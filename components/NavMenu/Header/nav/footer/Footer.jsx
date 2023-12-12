import React from "react";
import styles from "./Footer.module.scss";
import { translate } from "../../anim";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <ul>
        <motion.li
          custom={[0.2, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span>Made By:</span>Studio Lumio
        </motion.li>
      </ul>

      <ul>
        <motion.li
          custom={[0.2, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span>Typography:</span>Google Fonts
        </motion.li>
      </ul>

      <ul>
        <motion.li
          custom={[0.2, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span>Images:</span>FREEPIK, ENVATO
        </motion.li>
      </ul>

      <ul>
        <motion.li
          custom={[0.2, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          Privacy Policy
        </motion.li>
        <motion.li
          custom={[0.2, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          Terms and Conditions
        </motion.li>
      </ul>
    </div>
  );
};

export default Footer;
