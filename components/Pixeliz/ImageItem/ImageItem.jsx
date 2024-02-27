"use client"
import React, { useState, useEffect, useRef } from "react";
import styles from "./ImageItem.module.scss";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const ImageItem = ({ src, src10 }) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const canvas = useRef(null);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    //lazy loading
    if (inView && dimensions.height > 0) {
      const image = document.createElement("img");
      image.onload = () => {
        setTimeout(() => {
          animate(image);
        }, 150);
      };
      image.src = src;
    }
  }, [inView, dimensions]);
  const drawImage = (image) => {
    const ctx = canvas.current.getContext("2d", { willReadFrequently: true });
    ctx.drawImage(image, 0, 0, dimensions.width, dimensions.height);
  };

  const animate = (image, size = 20) => {
    drawImage(image);
    if (size < 5) return;

    const w = dimensions.width;
    const h = dimensions.height;
    const ctx = canvas.current.getContext("2d", { willReadFrequently: true });
    const pixelArr = ctx.getImageData(0, 0, w, h).data;
    for (let y = 0; y < h; y += size) {
      for (let x = 0; x < w; x += size) {
        let pos = (x + y * w) * 4;
        ctx.fillStyle =
          "rgba(" +
          pixelArr[pos] +
          "," +
          pixelArr[pos + 1] +
          "," +
          pixelArr[pos + 2] +
          "," +
          pixelArr[pos + 3] +
          ")";
        ctx.fillRect(x, y, size, size);
      }
    }

    setTimeout(() => {
      animate(image, size/2);
    }, 150);
  };
  return (
    <div className={styles.imageContainer}>
      <Image
        ref={ref}
        src={src10}
        alt={src10 + "image"}
        width={0}
        height={0}
        priority={true}
        onLoadingComplete={(e) => {
          setDimensions({ width: e.width, height: e.height });
        }}
      />
      <canvas
        ref={canvas}
        width={dimensions.width}
        height={dimensions.height}
      ></canvas>
    </div>
  );
};

export default ImageItem;
