import React from 'react';
import styles from "./Pixeliz.module.scss";
import ImageItem from './ImageItem/ImageItem';

const Pixeliz = () => {
  return (
    <div className={styles.container}>
        <main className={styles.main}>
            {
                [...Array(7).keys()].map((_, index) => {
                    return <ImageItem src={`/images/${index}.png`} src10={`/images/${index}_small.png`}/>
                }
            )}
        </main>
    </div>
  )
};

export default Pixeliz;