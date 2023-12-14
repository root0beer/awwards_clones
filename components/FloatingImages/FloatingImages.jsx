import React, {useRef} from "react";
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

  const manageMouseMove = (e) => {
    const {movementX, movementY} = e;
    gsap.set(plane1.current, {x: `+=${movementX * speed}`, y: `+=${movementY * speed}`});
    gsap.set(plane2.current, {x: `+=${movementX * speed * 0.5}`, y: `+=${movementY * speed * 0.5}`});
    gsap.set(plane3.current, {x: `+=${movementX * speed * 0.25}`, y: `+=${movementY * speed * 0.25}`});
  };

  return (
    <div className={styles.content}>
      <main onMouseMove={(e) => {manageMouseMove(e)}} className={styles.main}>
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
