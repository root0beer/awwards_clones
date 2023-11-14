import React from "react";
import styles from "./SquareCursor.module.scss";

const SquareCursor = () => {

    const getBlocks = () => {
        const blockSize = window.innerWidth * 0.02;
        const nbOfBlocks = Math.ceil(window.innerHeight / blockSize);
        return [...Array(nbOfBlocks).keys()].map((_, index) => {
            return <div key={`b_${index}`} className={styles.block}></div>
        })
    };

  return (
    <main className={styles.main}>
      <div className={styles.body}>
        <p>We specialize in turning space into complexe shapes</p>
      </div>
      <div className={styles.grid}>
        {[...Array(50).keys()].map((_, index) => {
          return <div key={index} className={styles.column}>
            {
                getBlocks()
            }
          </div>;
        })}
      </div>
    </main>
  );
};

export default SquareCursor;
