import React from 'react';
import styles from "./MouseMoveGalery.module.scss";

const MouseMoveGalery = () => {
  return (
    <main className={styles.main}>
        {
            [...Array(19).keys()].map((_, index) => {
                return <img key={index} src={`/cursorgalery/`}></img>
            })
        }
    </main>
  )
}

export default MouseMoveGalery