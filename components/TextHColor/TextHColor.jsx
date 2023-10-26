import React from "react";
import styles from "./TextHColor.module.scss";

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
  return (
    <div className={styles.main}>
      {PROJECTS.map((project, index) => {
        return (
          <div key={index}>
            <p>{project.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TextHColor;
