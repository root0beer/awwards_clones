import React from 'react';
import styles from "./TextGradient.module.scss";

const TextGradient = () => {

    const phrase = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."

    const splitWords = () => {
        let body = [];
        phrase.split(" ").forEach((word, index) => {
            const letters = splitLetters(word);
            body.push(<p key={`word_${index}`}>{letters}</p>)
        });
        return body;
    };

    const splitLetters = (word) => {
        let letters = [];
        word.split("").forEach((letter, index) => {
            letters.push(<span key={`letter_${index}`}>{letter}</span>);
        });
        return letters;
    };

  return (
    <main className={styles.main}>
        <div className={styles.body}>
            {
                splitWords()
            }
        </div>
    </main>
  )
};

export default TextGradient;