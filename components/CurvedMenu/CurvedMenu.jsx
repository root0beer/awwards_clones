import React, { useState } from "react";
import styles from "./CurvedMenu.module.scss";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { menuSlide } from "./anim";

const CurvedMenu = () => {
  const navItems = [
    {
      title: "Home",
      href: "/curvedmenu",
    },
    {
      title: "Work",
      href: "/curvedmenu/work",
    },
    {
      title: "About",
      href: "/curvedmenu/about",
    },
    {
      title: "Contact",
      href: "/curvedmenu/contact",
    },
  ];

  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div onClick={() => setIsActive(!isActive)} className={styles.button}>
        <div
          className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}
        ></div>
      </div>
      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            variants={menuSlide}
            animate="enter"
            exit="exit"
            initial="initial"
            className={styles.menu}
          >
            <div className={styles.body}>
              <div className={styles.nav}>
                <div className={styles.header}>
                  <p>Navigation</p>
                </div>
                {navItems.map((item, index) => {
                  return <Link href={item.href}>{item.title}</Link>;
                })}
              </div>
            </div>
            <div className={styles.footer}>
              <a>Awwards</a>
              <a>Instagram</a>
              <a>Dribble</a>
              <a>LinkedIn</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CurvedMenu;
