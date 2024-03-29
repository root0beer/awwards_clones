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
          <Link className={styles.link} href="/cursortrailing">
            2) Cursor trailing
          </Link>
          <Link className={styles.link} href="/pixelization">
            3) Pixelization loading effect
          </Link>
          <Link className={styles.link} href="/textmask">
            4) Appearing text from mask
          </Link>
          <Link className={styles.link} href="/texthcolor">
            5) Text hover effect, colorful
          </Link>
          <Link className={styles.link} href="/curvedmenu">
            6) Curved Menu
          </Link>
          <Link className={styles.link} href="/mousemovegalery">
            7) Mouse move galery
          </Link>
          <Link className={styles.link} href="/squarecursor">
            8) Pixel Cursor Effect
          </Link>
          <Link className={styles.link} href="/motiongallery">
            9) Gallery Project
          </Link>
          <Link className={styles.link} href="/textgradient">
            10) Scroll Text Gradient Opacity
          </Link>
          <Link className={styles.link} href="/infinitetext">
            11) Infinite Text Move on Scroll
          </Link>
          <Link className={styles.link} href="/dispelhover">
            12) Dispel Hover Effect
          </Link>
          {/* <Link className={styles.link} href="/smoothscroll">
            13) Smooth Scroll Landing Page
          </Link> */}
          <Link className={styles.link} href="/navmenu">
            13) Navigation Menu
          </Link>
          <Link className={styles.link} href="/interactivegallery">
            14) Interactive Gallery
          </Link>
          <Link className={styles.link} href="/floatingimages">
            15) Floating Images Gallery
          </Link>
          <Link className={styles.link} href="/portland">
            15) Portfolio Landing Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
