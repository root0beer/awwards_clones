import React from 'react';
import styles from "./Description.module.scss";

const Description = () => {
    const phrase = "Helping brands to stand out in the digital era. Together we will set the new status quo."
  return (
    <div className={styles.description}>
        <div className={styles.body}>
            <p>
                {
                    phrase.split(" ").map((word, index) => {
                        return <span key={index} className={styles.mask}><span>{word}</span></span>
                    })
                }
            </p>
            <p>The combination of my passion for design, code & interaction positions me in a unique place.</p>
        </div>
    </div>
  )
};

export default Description;