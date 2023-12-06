import React, { useLayoutEffect, useRef, useEffect } from "react";
import styles from "./Intro.module.scss";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const Intro = () => {

  // useLayoutEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const timeline = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: document.documentElement,
  //       start: "top",
  //       end: "+=500px",
  //       scrub: true,
  //       markers: true,
  //     },
  //   })
  // }, []);

  const containerRef = useRef(null);
  const { scroll } = useLocomotiveScroll({
    container: containerRef.current,
    // Add other Locomotive Scroll options if needed
  });

  useEffect(() => {
    if (scroll) {
      scroll.on("scroll", ScrollTrigger);
    }
  }, [scroll]);

  return (
    <div className={styles.intro} ref={containerRef}>
      <div className={styles.backgroundImage}>
        <Image
          src={"/smoothscroll/background.jpeg"}
          fill={true}
          alt="background image"
        />
      </div>
      <div className={styles.introContainer}>
        <div data-scroll data-scroll-speed="0.3" className={styles.introImage}>
          <Image
            src={"/smoothscroll/intro.png"}
            fill={true}
            alt="background image2"
          />
        </div>
        <h1 data-scroll data-scroll-speed="0.7" >Smooth Scroll</h1>
      </div>
    </div>
  );
};

export default Intro;
