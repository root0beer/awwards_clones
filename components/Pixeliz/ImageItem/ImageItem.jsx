import React, { useState } from "react";
import styles from "./ImageItem.module.scss";
import Image from "next/image";

const ImageItem = ({ src, src10 }) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  return (
    <div className={styles.imageContainer}>
      <Image
        src={src10}
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
