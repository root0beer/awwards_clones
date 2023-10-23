import React from "react";
import styles from "./CursorT.module.scss";
import { useRef } from "react";

const CursorT = () => {
  const img = useRef();

  const managMouseMove = () => {

  };
  
  return (
    <div className={styles.container}>
      <div onMouseMove={(e) => {managMouseMove(e)}} className={styles.body}>
        <img ref={img} src="smiley.svg"></img>
      </div>
    </div>
  );
};

export default CursorT;
