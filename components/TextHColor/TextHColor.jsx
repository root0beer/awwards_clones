import React from "react";
import styles from "./TextHColor.module.scss";
import gsap from "gsap";

const PROJECTS = [
  {
    title: "New York",
    color: "#F06318",
  },
  {
    title: "San Francisco",
    color: "#DCF018",
  },
  {
    title: "Nashville",
    color: "#8C0CF0",
  },
  {
    title: "Houston",
    color: "#F0183C",
  },
  {
    title: "New Orleans",
    color: "#F0BA18",
  },
  {
    title: "Oklahoma City",
    color: "#0C34F0",
  },
  {
    title: "Detroit",
    color: "#0CBCF0",
  },
  {
    title: "Indianapolis",
    color: "#91F018",
  },
];

const TextHColor = () => {
  const manageMouseEnter = (e, color) => {
    gsap.to(e.target, { backgroundColor: color, translateY: "-2vw", duration: 0.3 });
  };

  const manageMouseLeave = (e, color) => {
    gsap.to(e.target, {
      backgroundColor: "white",
      translateY: "0vw",
      duration: 0.3,
      delay: 0.1,
    });
  };
  return (
    <div className={styles.main}>
      {PROJECTS.map((project, index) => {
        return (
          <div
            onMouseEnter={(e) => {
              manageMouseEnter(e, project.color);
            }}
            onMouseLeave={(e) => {
              manageMouseLeave(e, project.color);
            }}
            key={index}
          >
            <p>{project.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TextHColor;
