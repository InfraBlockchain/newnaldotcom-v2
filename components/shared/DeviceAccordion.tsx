"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./DeviceAccordion.module.css";

const slides = [
  { id: "yali", name: "YALI", src: "/images/devices/slide-yali.png", alt: "YALI AI Artist Companion slide" },
  { id: "illi", name: "ILLI", src: "/images/devices/slide-illi.png", alt: "ILLI AI Companion slide" },
  { id: "ufo", name: "UFO", src: "/images/devices/slide-ufo.png", alt: "UFO Real-World Adventure Device slide" },
] as const;

export function DeviceAccordion() {
  const [active, setActive] = useState(0);
  const slide = slides[active];
  return <div className={styles.slideshow}>
    <Image key={slide.id} src={slide.src} alt={slide.alt} fill priority sizes="100vw" />
    <nav className={styles.controls} aria-label="Choose a companion device">
      {slides.map((item, index) => <button key={item.id} type="button" aria-pressed={active === index} onClick={() => setActive(index)}>{item.name}</button>)}
    </nav>
  </div>;
}
