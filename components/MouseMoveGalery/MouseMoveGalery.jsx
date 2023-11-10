import React, { useRef } from "react";
import styles from "./MouseMoveGalery.module.scss";

const MouseMoveGalery = () => {
  let currentIndex = 0;
  let collection = [];
  let step = 0;
  let maxImages = 3;
  let mbofImages = 0;

  const manageMouseMove = (e) => {
    const { clientX, clientY, movementX, movementY } = e;

    step += Math.abs(movementX) + Math.abs(movementY);

    //if it passes 150 step
    if (step >= 150 * currentIndex) {
      mouseMove(clientX, clientY);

      if (mbofImages == maxImages) {
        removeImage();
      };
    }
  };

  const removeImage = () => {
    const images = getImages();
    images[0].style.dispay = "none";
    mbofImages--;
  };

  const mouseMove = (x, y) => {
    const targetImage = collection[currentIndex].current;
    targetImage.style.display = "block";
    targetImage.style.left = x + "px";
    targetImage.style.top = y + "px";
    currentIndex++;
    mbofImages++;
  };

  const getImages = () => {
    let images = [];
    const indexOfFirstImage = currentIndex - mbofImages;
    for (let i = indexOfFirstImage; i < currentIndex; i++) {
        images.push(collection[i].current);
    };
    return images;
};

  return (
    <main
      onMouseMove={(e) => {
        manageMouseMove(e);
      }}
      className={styles.main}
    >
      {[...Array(19).keys()].map((_, index) => {
        const ref = useRef(null);
        collection.push(ref);
        return (
          <img ref={ref} key={index} src={`/cursorgalery/${index}.jpg`}></img>
        );
      })}
    </main>
  );
};

export default MouseMoveGalery;
