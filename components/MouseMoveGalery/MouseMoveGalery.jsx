import React, {useRef} from 'react';
import styles from "./MouseMoveGalery.module.scss";

const MouseMoveGalery = () => {
    
    let currentIndex = 0;
    let collection = [];

    const manageMouseMove = (e) => {
        const { clientX, clientY } = e;
        mouseMove(clientX, clientY);
    };

    const mouseMove = (x, y) => {
        const targetImage = collection[currentIndex].current;
        targetImage.style.display = "block";
        targetImage.style.left = x + "px";
        targetImage.style.top = y + "px";
        currentIndex++;
    };

  return (
    <main onMouseMove={(e) => {manageMouseMove(e)}} className={styles.main}>
        {
            [...Array(19).keys()].map((_, index) => {
                const ref = useRef(null);
                collection.push(ref);
                return <img ref={ref} key={index} src={`/cursorgalery/${index}.jpg`}></img>
            })
        }
    </main>
  )
}

export default MouseMoveGalery