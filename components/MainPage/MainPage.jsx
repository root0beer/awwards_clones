import React from "react";
import styles from "./MainPage.module.scss";
import Link from "next/link";

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1 className={styles.title}>Awwwards tutorials</h1>
        <div className={styles.linksblock}>
          <Link className={styles.link} href="/3dperspective">
            1) 3D perspective text animation
          </Link>
          <Link className={styles.link} href="/3dperspective">
            2
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
