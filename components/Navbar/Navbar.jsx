import React from "react";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.navbarWrapper}>
      <Link href={"/"} className={styles.backBlock}>
        <Image
          className={styles.arrow}
          src={"arrowback.svg"}
          alt={"arrowback"}
          width={100}
          height={50}
        />
        <p className={styles.back}>menu</p>
      </Link>
      <h1 className={styles.navtitle}>Awwards Tutorials</h1>
    </div>
  );
};

export default Navbar;
