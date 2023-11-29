import React from "react";
import styles from "./Intro.module.scss";
import Image from "next/image";

const Intro = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.backgroundImage}>
        <Image
          src={"/smoothscroll/background.jpeg"}
          fill={true}
          alt="background image"
        />
      </div>
      <div className={styles.introContainer}>
        <div className={styles.introImage}>
          <Image
            src={"/smoothscroll/intro.png"}
            fill={true}
            alt="background image2"
          />
        </div>
        <h1>Smooth Scroll</h1>
      </div>
    </div>
  );
};

export default Intro;
