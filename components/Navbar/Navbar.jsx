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
          // dont forget to put the slash before the image path because on other pages it might not register the asset
          src={"/arrowback.svg"}
          alt={"arrowback"}
          width={100}
          height={50}
        />
        <p className={styles.back}>menu</p>
      </Link>
      <Link href={"/"} className={styles.navtitle}>
        <h1 className={styles.navtitle}>Awwards Tutorials</h1>
      </Link>
    </div>
  );
};

export default Navbar;
