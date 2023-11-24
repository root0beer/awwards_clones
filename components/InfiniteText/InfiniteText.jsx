import React, {useEffect, useRef} from 'react';
import styles from "./InfiniteText.module.scss";
import Image from 'next/image';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all';

const InfiniteText = () => {

    const firstText = useRef(null);
    const secondText = useRef(null);
    const slider = useRef(null);
    let xPercent = 0;
    let direction = -1;


    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        requestAnimationFrame(animation);
        
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
        requestAnimationFrame(animation);
    };

  return (
    <main className={styles.main}>
        <Image
        src={"/inftext.jpg"}
        alt={"infimage"}
        fill={true}
        />
        <div className={styles.sliderContainer}>
            <div ref={slider} className={styles.slider}>
                <p ref={firstText}>Freelance Photographer -</p>
                <p ref={secondText}>Freelance Photographer -</p>
            </div>
        </div>
    </main>
  )
};

export default InfiniteText;