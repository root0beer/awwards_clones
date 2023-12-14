import React, { useRef } from "react";
import styles from "./FloatingImages.module.scss";
import {
  Floating1,
  Floating2,
  Floating3,
  Floating4,
  Floating5,
  Floating6,
  Floating7,
  Floating8,
} from "./data";
import Image from "next/image";
import gsap from "gsap";

const FloatingImages = () => {
  const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);
  const speed = 0.1;
  let xForce = 0;
  let yForce = 0;
  let requestAnimationFrameId = null;
  const easing = 0.08;

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e;
    xForce = movementX * speed;
    yForce = movementY * speed;

    if (!requestAnimationFrameId) {
      requestAnimationFrameId = window.requestAnimationFrame(animate);
    }
  };

  const linterp = (start, end, amount) => start * (1 - amount) + end * amount;

  const animate = () => {
    xForce = linterp(xForce, 0, easing);
    yForce = linterp(yForce, 0, easing);
    gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` });
    gsap.set(plane2.current, {
      x: `+=${xForce * 0.5}`,
      y: `+=${yForce * 0.5}`,
    });
    gsap.set(plane3.current, {
      x: `+=${xForce * 0.25}`,
      y: `+=${yForce * 0.25}`,
    });
    //the end value in the linear interp function is never 0 so it never ends thats why:
    if (Math.abs(xForce) < 0.01) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;
    //then we run animate only when
    if (xForce > 0 || yForce > 0) {
      window.requestAnimationFrame(animate);
    } else {
      window.cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    };
  };

  return (
    <div className={styles.content}>
      <main
        onMouseMove={(e) => {
          manageMouseMove(e);
        }}
        className={styles.main}
      >
        <div ref={plane1} className={styles.plane}>
          <Image src={Floating4} alt="image" width={250} />
          <Image src={Floating6} alt="image" width={250} />
          <Image src={Floating8} alt="image" width={228} />
        </div>
        <div ref={plane2} className={styles.plane}>
          <Image src={Floating1} alt="image" width={300} />
          <Image src={Floating2} alt="image" width={300} />
          <Image src={Floating3} alt="image" width={300} />
        </div>
        <div ref={plane3} className={styles.plane}>
          <Image src={Floating5} alt="image" width={200} />
          <Image src={Floating7} alt="image" width={200} />
        </div>
        <div className={styles.description}>
          <h1>Floating Images Gallery</h1>
          <p>Made with Next.js and GSAP</p>
        </div>
      </main>
    </div>
  );
};

export default FloatingImages;
