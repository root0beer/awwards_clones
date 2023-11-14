import React, { useRef } from "react";
import styles from "./MouseMoveGalery.module.scss";

const MouseMoveGalery = () => {
  let steps = 0;
  let currentIndex = 0;
  let nbOfImages = 0;
  let maxNumberOfImages = 8;
  let refs = [];

  const manageMouseMove = (e) => {
    const { clientX, clientY, movementX, movementY } = e;

    steps+= Math.abs(movementX) + Math.abs(movementY);

    if(steps >= currentIndex * 150){
      moveImage(clientX, clientY);

      if(nbOfImages == maxNumberOfImages){
        removeImage();
      }
    }
    
    if(currentIndex == refs.length){
      currentIndex = 0;
      steps = -150;
    }
  }

  const removeImage = () => {
    const images = getImages();
    //because i missed "L" in display maxnumber of images didnt work. 
    //take an L Tan ><
    images[0].style.display = "none";
    nbOfImages--;
  };

  const moveImage = (x, y) => {
    const currentImage = refs[currentIndex].current;
    currentImage.style.left = x + "px";
    currentImage.style.top = y + "px";
    currentImage.style.display = "block";
    currentIndex++;
    nbOfImages++;
    setZIndex()
  }

   const setZIndex = () => {
    const images = getImages();
    for(let i = 0 ; i < images.length ; i++){
      images[i].style.zIndex = i;
    }
  }

  const getImages = () => {
    let images = [];
    const indexOfFirstImage = currentIndex - nbOfImages;
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
