import React from "react";
import styles from "./Wrapper.module.scss";
import Image from "next/image";

const Wrapper = (props) => {
  return (
    <>
      <div className={styles.wrapper}>{props.children}</div>
    </>
  );
};

export default Wrapper;
