import React, {useRef} from 'react';
import styles from "./Description.module.scss";
import { motion, useInView } from 'framer-motion';
import { slideup, opacity } from './anim';

const Description = () => {
    const container = useRef(null);
    const isInView = useInView(container);
    const phrase = "Helping brands to stand out in the digital era. Together we will set the new status quo."
  return (
    <div ref={container} className={styles.description}>
        <div className={styles.body}>
            <p>
                {
                    phrase.split(" ").map((word, index) => {
                        return <span key={index} className={styles.mask}><motion.span key={index} variants={slideup} custom={index} animate={isInView ? "open" : "closed"}>{word}</motion.span></span>
                    })
                }
            </p>
            <motion.p variants={opacity} initial="initial" animate={isInView ? "open" : "closed"}>The combination of my passion for design, code & interaction positions me in a unique place.</motion.p>
            <div data-scroll data-scroll-speed={0.1}>
                <div className={styles.button }>
                    <p>About me</p>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Description;