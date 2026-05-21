'use client'

import { useState } from "react";
import Image from "next/image";
import styles from "./slider.module.css";

export default function SimpleSlider({ images: propImages = [], image }) {
  const images = propImages.length > 0 ? propImages : [image].filter(Boolean);
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className={styles.slider}>

      {/* Main image */}
      <div className={styles.imageWrap}>
        <Image
          src={images[current]}
          alt={`Slide ${current + 1}`}
          fill
          className={styles.image}
          sizes="(max-width: 900px) 100vw, 50vw"
        />

        {/* Prev / Next */}
        {images.length > 1 && (
          <>
            <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prev} aria-label="Ảnh trước">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={next} aria-label="Ảnh tiếp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </>
        )}

        {/* Counter badge */}
        {images.length > 1 && (
          <span className={styles.counter}>{current + 1} / {images.length}</span>
        )}
      </div>

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className={styles.thumbRow}>
          {images.map((src, i) => (
            <button
              key={i}
              className={`${styles.thumb} ${i === current ? styles.thumbActive : ""}`}
              onClick={() => setCurrent(i)}
              aria-label={`Xem ảnh ${i + 1}`}
            >
              <Image
                src={src}
                alt={`Thumbnail ${i + 1}`}
                fill
                className={styles.thumbImg}
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}