import React, {useEffect} from 'react';
import styles from "./SmoothScroll.module.scss";

const SmoothScroll = () => {

    useEffect(() => {
        (
            async () => {
                const LocomotiveScroll = (await import("locomotive-scroll")).default;
                const locomotiveScroll = new LocomotiveScroll();
            }
        )
    }, []);

  return (
    <div className={styles.main}>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
};

export default SmoothScroll;