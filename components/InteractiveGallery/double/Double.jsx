import React, {useRef} from "react";
import styles from "./Double.module.scss";
import Image from "next/image";

const Double = ({ projects }) => {

    const firstImage = useRef(null);
    const secondImage = useRef(null);

    const manageMouseMove = (e) => {
        const { clientX } = e;
        const xPercent = (clientX / window.innerWidth) * 100;

        firstImage.current.style.width = 66.66 - (xPercent * 0.33) + "%";
        secondImage.current.style.width = 33.33 + (xPercent * 0.33) + "%";
    };

  return (
    <div onMouseMove={(e) => {manageMouseMove(e)}} className={styles.double}>
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
