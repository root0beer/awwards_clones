import React from "react";
import styles from "./SquareCursor.module.scss";

const SquareCursor = () => {
  return (
    <main className={styles.main}>
      <div className={styles.body}>
        <p>We specialize in turning space into complexe shapes</p>
      </div>
      <div className={styles.grid}>
        {[...Array(20).keys()].map((_, index) => {
          return <div key={index} className={styles.column}></div>;
        })}
      </div>
    </main>
  );
};

export default SquareCursor;
