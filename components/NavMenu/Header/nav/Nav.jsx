import React, { useState } from "react";
import styles from "./Nav.module.scss";
import { motion } from "framer-motion";
import { height } from "../anim";
import Body from "./body/Body";
import ImageComp from "./image/ImageComp";
import Footer from "./footer/Footer";

const Nav = () => {
  const links = [
    {
      title: "Home",
      href: "/",
      src: "home.png",
    },
    {
      title: "Shop",
      href: "/shop",
      src: "shop.png",
    },
    {
      title: "About Us",
      href: "/about",
      src: "home.png",
    },
    {
      title: "Lookbook",
      href: "/lookbook",
      src: "lookbook.png",
    },
    {
      title: "Contact",
      href: "/contact",
      src: "contact.png",
    },
  ];

  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  return (
    <motion.div
      className={styles.nav}
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />
          <Footer />
        </div>
        <ImageComp
          src={links[selectedLink.index].src}
          isActive={selectedLink.isActive}
        />
      </div>
    </motion.div>
  );
};

export default Nav;
