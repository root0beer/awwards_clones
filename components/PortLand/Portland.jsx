import React, { useEffect } from "react";
import styles from "./Portland.module.scss";
import Landing from "./landing/Landing";
import MotionGallery from "../MotionGallery/MotionGallery";
import Header from "./header/Header";
import Description from "./description/Description";
import SlidingImages from "./slidingimages/SlidingImages";

const Portland = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main className={styles.main}>
      <Header />
      <Landing />
      <Description />
      <SlidingImages />
      {/* <MotionGallery /> */}
    </main>
  );
};

export default Portland;
