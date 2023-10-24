import React from "react";
import styles from "./CursorT.module.scss";
import { useRef } from "react";

const CursorT = () => {
  const img = useRef();
  const body = useRef();

  const managMouseMove = (e) => {
    const { clientX, clientY } = e;
    const bodyBound = body.current.getBoundingClientRect();
    const x = clientX - bodyBound.x;
    const y = clientY - bodyBound.y;
    img.current.style.top = y + "px";
    img.current.style.left = x + "px";
    draw(x, y);
  };

  const draw = (x, y) => {
    const div = document.createElement("div");
    div.classList.add(styles["circle"]);
    div.style.top = y + "px";
    div.style.left = x + "px";
    body.current.append(div);
    if (body.current.childNodes.length > 25) {
      erase();
    } else {
      setTimeout(() => {
        erase();
      }, 1500);
    }
  };

  const erase = () => {
    const childNodes = body.current.childNodes;
    if (childNodes.length > 1) {
      body.current.removeChild(childNodes[1]);
    }
  };

  return (
    <div className={styles.container}>
      <div
        ref={body}
        onMouseMove={(e) => {
          managMouseMove(e);
        }}
        className={styles.body}
      >
        <img ref={img} src="smiley.svg"></img>
      </div>
    </div>
  );
};

export default CursorT;
