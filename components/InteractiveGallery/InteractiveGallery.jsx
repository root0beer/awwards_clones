import React from "react";
import styles from "./InteractiveGallery.module.scss";
import { projects } from "./data";
import Double from "./double/Double";

const InteractiveGallery = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>
          We use design and technology to create brands and products that
          perform, delight and scale.
        </h1>
        <div className={styles.gallery}>
          <Double projects={[projects[0], projects[1]]} />
          <Double projects={[projects[2], projects[3]]} />
          <Double projects={[projects[4], projects[5]]} />
          <Double projects={[projects[6], projects[7]]} />
        </div>
      </main>
    </div>
  );
};

export default InteractiveGallery;
