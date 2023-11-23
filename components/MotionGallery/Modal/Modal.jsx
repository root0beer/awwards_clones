import React, {useEffect, useRef} from 'react';
import styles from "./Modal.module.scss";
import Image from 'next/image';
import {motion} from "framer-motion";
import gsap from "gsap";

const scaleAnimation = {
    initial: {scale: 0, x: "-50%", y: "-50%"},
    open: {scale: 1, x: "-50%", y: "-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
    closed: {scale: 0, x: "-50%", y: "-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
}

const Modal = ({projects, modal}) => {

    const {active, index} = modal;
    const container = useRef(null);

    useEffect(() => {
        const moveContainerX = gsap.quickTo(container.current, "left", {duration: 0.8, ease: "power3"});
        const moveContainerY = gsap.quickTo(container.current, "top", {duration: 0.8, ease: "power3"});
    
        window.addEventListener("mousemove", (e) => {
            const {clientX, clientY} = e;
            moveContainerX(clientX);
            moveContainerY(clientY);
        });
    }, []);

  return (
    <motion.div ref={container} variants={scaleAnimation} initial={"initial"} animate={active ? "open" : "closed"} className={styles.modalContainer}>
        <div style={{top: index * -100 + "%"}} className={styles.modalSlider}>
            {
                projects.map((project, index) => {
                    const {src, color} = project;
                    return <div key={`modal${index}`} style={{backgroundColor: color}} className={styles.modal}>
                        <Image 
                        src={`/motiongallery/${src}`}
                        width={300}
                        height={0}
                        alt={"image"}
                        />
                    </div>
                })
            }
        </div>
    </motion.div>
  )
};

export default Modal;