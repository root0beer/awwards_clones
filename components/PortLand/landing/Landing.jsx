import React, {useRef, useEffect} from 'react';
import styles from "./Landing.module.scss";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';

const Landing = () => {
    const firstText = useRef(null);
    const secondText = useRef(null);
    const slider = useRef(null);
    let xPercent = 0;
    let direction = -1;


    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        window.requestAnimationFrame(animation);
        
        gsap.to(slider.current, {
            scrollTrigger: {
                //document element means start from the top of the page
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                scrub: true,
                onUpdate: e => direction = e.direction * -1,
            },
            x: "-300px",
        });
    }, []);

    const animation = () => {
        if (xPercent <= -100) {
            xPercent = 0;
        };
        if (xPercent > 0) {
            xPercent = -100;
        }
        gsap.set(firstText.current, {xPercent: xPercent});
        gsap.set(secondText.current, {xPercent: xPercent});
        xPercent += 0.25 * direction;
        window.requestAnimationFrame(animation);
    };

  return (
    <main className={styles.main}>
        <Image
        src={"/profilePic.jpg"}
        alt={"infimage"}
        width={960}
        height={1200}
        />
        <div className={styles.sliderContainer}>
            <div ref={slider} className={styles.slider}>
                <p ref={firstText}>Full-Stack Developer -</p>
                <p ref={secondText}>Full-Stack Developer -</p>
            </div>
        </div>
    </main>
  )
};

export default Landing;