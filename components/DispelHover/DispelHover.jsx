import React from "react";
import styles from "./DispelHover.module.scss";
import GetChars from "./GetChars/GetChars";

const DispelHover = () => {
  return (
    <main className={styles.main}>
      <div className={styles.body}>
        <div className={styles.line}>
          <p>Nathan</p>
          <p>Smith</p>
        </div>
        <div className={styles.line}>
          <p>Design</p>
          <p>&</p>
        </div>
        <div className={styles.line}>
          <p>Art</p>
          <p>Direction</p>
        </div>
        <GetChars>
          <div className={styles.line}>
            <p>+44759871028</p>
          </div>
        </GetChars>
        <GetChars>
          <div className={styles.line}>
            <p>→Email</p>
          </div>
        </GetChars>
        <GetChars>
          <div className={styles.line}>
            <p>→Insta</p>
          </div>
        </GetChars>
      </div>
    </main>
  );
};

export default DispelHover;
