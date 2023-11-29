import React, { useEffect } from "react";
import styles from "./SmoothScroll.module.scss";
import Intro from "./Intro/Intro";
import Navbar from "../Navbar/Navbar";

const SmoothScroll = () => {
  useEffect(() => {
    async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    };
  }, []);

  return (
    <div className={styles.main}>
      <Navbar />
      <Intro />
      <div></div>
      <div></div>
    </div>
  );
};

export default SmoothScroll;
