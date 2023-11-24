import React from 'react';
import styles from "./GetChars.module.scss";

const GetChars = ({children}) => {

    const Chars = (element) => {
        return <div></div>
    };

  return (
    <div className={styles.line}>
        {
        GetChars(children)
        }
    </div>
  )
};

export default GetChars;