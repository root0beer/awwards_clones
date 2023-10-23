import React, { useState, useEffect } from "react";
import styles from "./ImageItem.module.scss";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const ImageItem = ({ src, src10 }) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && dimensions.height > 0) {
        //animate
        console.log("true");
    }
  }, [inView]);

  return (
    <div className={styles.imageContainer}>
      <Image
        ref={ref}
        src={src10}
        alt={src10+"image"}
        width={0}
        height={0}
        priority={true}
        onLoadingComplete={(e) => {
          setDimensions({ width: e.width, height: e.height });
        }}
      />
      <canvas width={dimensions.width} height={dimensions.height}></canvas>
    </div>
  );
};

export default ImageItem;
