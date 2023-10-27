import React, { useState } from "react";
import styles from "./CurvedMenu.module.scss";

const CurvedMenu = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div onClick={() => setIsActive(!isActive)} className={styles.button}>
        <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}>

        </div>
      </div>
    </>
  );
};

export default CurvedMenu;
