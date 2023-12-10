import React from "react";
import styles from "./Body.module.scss";
import Link from "next/link";

const Body = () => {
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
  return (
    <div className={styles.body}>
      {links.map((link, index) => {
        const { title, href } = link;
        return (
          <Link href={href} key={`l_${index}`}>
            <p>{title}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Body;
