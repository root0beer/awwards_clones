import React, { useRef } from "react";
import styles from "./MouseMoveGalery.module.scss";

const MouseMoveGalery = () => {
  let currentIndex = 0;
  let refs = [];
  let steps = 0;
  let maxNumberOfImages = 3;
  let nbofImages = 0;

  const manageMouseMove = (e) => {
    const { clientX, clientY, movementX, movementY } = e;

    steps += Math.abs(movementX) + Math.abs(movementY);

    //if it passes 150 steps
    if (steps >= currentIndex * 150) {
      mouseMove(clientX, clientY);

      if (nbofImages == maxNumberOfImages) {
        removeImage();
      };
    };

    //looping the images
    if (currentIndex == refs.length) {
        currentIndex = 0;
        steps = -150;
    };
  };

  const removeImage = () => {
    const images = getImages();
    images[0].style.dispay = "none";
    nbofImages--;
  };

  const mouseMove = (x, y) => {
    const targetImage = refs[currentIndex].current;
    targetImage.style.left = x + "px";
    targetImage.style.top = y + "px";
    targetImage.style.display = "block";
    currentIndex++;
    nbofImages++;
    
    resetZIndex(); 
  };

  const resetZIndex = () => {
    const images = getImages();
    for(let i = 0 ; i < images.length ; i++){
      images[i].style.zIndex = i;
    };
  };

  const getImages = () => {
    let images = [];
    const indexOfFirstImage = currentIndex - nbofImages;
    for (let i = indexOfFirstImage; i < currentIndex; i++) {
        let targetIndex = i;
        if (targetIndex <0) targetIndex +=refs.length;
        images.push(refs[targetIndex].current);
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
        refs.push(ref);
        return (
          <img ref={ref} key={index} src={`/cursorgalery/${index}.jpg`}></img>
        );
      })}
    </main>
  );
};

export default MouseMoveGalery;
