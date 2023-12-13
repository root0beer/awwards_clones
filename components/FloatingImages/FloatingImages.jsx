import React from "react";
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

const FloatingImages = () => {
  return (
    <div className={styles.content}>
      <main className={styles.main}>
        <div className={styles.plane}>
          <Image src={Floating4} alt="image" width={250} />
          <Image src={Floating6} alt="image" width={250} />
          <Image src={Floating8} alt="image" width={228} />
        </div>
        <div className={styles.plane}>
          <Image src={Floating1} alt="image" width={300} />
          <Image src={Floating2} alt="image" width={300} />
          <Image src={Floating3} alt="image" width={300} />
        </div>
        <div className={styles.plane}>
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
