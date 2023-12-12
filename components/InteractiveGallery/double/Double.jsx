import React, { useRef } from "react";
import styles from "./Double.module.scss";
import Image from "next/image";

const Double = ({ projects, reversed }) => {
  const firstImage = useRef(null);
  const secondImage = useRef(null);
  let xPercent = reversed ? 100 : 0;
  let requestAnimationFrameid = null;
  let currentXPercent = reversed ? 100 : 0;
  let speed = 0.15;
  const manageMouseMove = (e) => {
    const { clientX } = e;
    xPercent = (clientX / window.innerWidth) * 100;

    if (!requestAnimationFrameid) {
      requestAnimationFrameid = window.requestAnimationFrame(animate);
    }
  };

  const animate = () => {
    const deltaXPercent = xPercent - currentXPercent;
    currentXPercent = currentXPercent + deltaXPercent * speed;
    const firstImagePercent = 66.66 - currentXPercent * 0.33;
    const secondImagePercent = 33.33 + currentXPercent * 0.33;
    firstImage.current.style.width = `${firstImagePercent}%`;
    secondImage.current.style.width = `${secondImagePercent}%`;

    if (Math.round(currentXPercent) == Math.round(xPercent)) {
      window.cancelAnimationFrame(requestAnimationFrameid);
      requestAnimationFrameid = null;
    } else {
      window.requestAnimationFrame(animate);
    }
  };

  return (
    <div
      onMouseMove={(e) => {
        manageMouseMove(e);
      }}
      className={styles.double}
    >
      <div ref={firstImage} className={styles.imageContainer}>
        <div className={styles.stretchyContainer}>
          <Image
            fill={true}
            alt={"image"}
            src={`/intergallery/${projects[0].src}`}
          />
        </div>
        <div className={styles.body}>
          <h3>{projects[0].name}</h3>
          <p>{projects[0].description}</p>
          <p>{projects[0].year}</p>
        </div>
      </div>

      <div ref={secondImage} className={styles.imageContainer}>
        <div className={styles.stretchyContainer}>
          <Image
            fill={true}
            alt={"image"}
            src={`/intergallery/${projects[1].src}`}
          />
        </div>
        <div className={styles.body}>
          <h3>{projects[1].name}</h3>
          <p>{projects[1].description}</p>
          <p>{projects[1].year}</p>
        </div>
      </div>
    </div>
  );
};

export default Double;
