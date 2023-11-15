import React from 'react';
import styles from "./Modal.module.scss";
import Image from 'next/image';

const Modal = ({projects, modal}) => {
  return (
    <div className={styles.modalContainer}>
        <div className={styles.modalSlider}>
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
    </div>
  )
};

export default Modal;