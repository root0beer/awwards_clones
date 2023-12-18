import React, { useState, useLayoutEffect, useRef } from "react";
import styles from "./Header.module.scss";
import { AnimatePresence } from "framer-motion";
import Nav from "./nav/Nav";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const burger = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(burger.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {gsap.to(burger.current, {scale: 1, duration: 0.25, ease: "power1.out"})},
        onEnterBack: () => {gsap.to(burger.current, {scale: 1, duration: 0.25, ease: "power1.out"})},
      }
    })
  }, []);

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <p className={styles.copyright}> &copy;</p>
        <div className={styles.name}>
            <p className={styles.codeBy}>Code by</p>
            <p className={styles.tatiana}>Tatiana</p>
            <p className={styles.halka}>Halka</p>
        </div>
      </div>

      <div className={styles.nav}>
        <div className={styles.el}>
          <p>Work</p>
          <div className={styles.indicator}></div>
        </div>
        <div className={styles.el}>
          <p>About</p>
          <div className={styles.indicator}></div>
        </div>
        <div className={styles.el}>
          <p>Contacts</p>
          <div className={styles.indicator}></div>
        </div>
      </div>

      <div ref={burger} className={styles.headerButtonContainer}>
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={`${styles.button}`}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
        </div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </div>
  );
};

export default Header;
