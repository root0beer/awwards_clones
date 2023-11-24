import React, {useRef} from "react";
import styles from "./DispelHover.module.scss";
import GetChars from "./GetChars/GetChars";

const DispelHover = () => {
    const background = useRef(null);

    const setBackground = (value) => {
        background.current.style.opacity = value ? 0.8 : 0;
    };

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
        <GetChars setBackground={setBackground}>
            <p>+44759871028</p>
        </GetChars>
        <GetChars setBackground={setBackground}>
            <p>→Email</p>
        </GetChars>
        <GetChars setBackground={setBackground}>
            <p>→Insta</p>
        </GetChars>
      </div>
      <div ref={background} className={styles.background}></div>
    </main>
  );
};

export default DispelHover;
