import React, { useEffect, useRef } from "react";
import styles from "./TextGradient.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TextGradient = () => {
  const phrase =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.";

  const refs = useRef([]);
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimations();
  }, []);

  const createAnimations = () => {
    gsap.to(refs.current, {
      opacity: 1,
      ease: "none",
      stagger: 0.1,
      scrollTrigger: {
        trigger: container.current,
        start: "top",
        end: `+=${window.innerHeight / 2}`,
        markers: true,
        //we want the animation to be directly linked w the scrollbar
        scrub: true,
      },
    });
  };

  const splitWords = () => {
    let body = [];
    phrase.split(" ").forEach((word, index) => {
      const letters = splitLetters(word);
      body.push(<p key={`word_${index}`}>{letters}</p>);
    });
    return body;
  };

  const splitLetters = (word) => {
    let letters = [];
    word.split("").forEach((letter, index) => {
      letters.push(
        <span
          ref={(el) => {
            refs.current.push(el);
          }}
          key={`letter_${index}`}
        >
          {letter}
        </span>
      );
    });
    return letters;
  };

  return (
    <div className={styles.wrapper}>
      <main ref={container} className={styles.main}>
        <div className={styles.body}>{splitWords()}</div>
      </main>
    </div>
  );
};

export default TextGradient;
