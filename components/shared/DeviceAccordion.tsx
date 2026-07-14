"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import styles from "./DeviceAccordion.module.css";

const slides = [
  { id: "yali", name: "YALI", src: "/images/devices/slide-yali.png", alt: "YALI AI Artist Companion", href: "/devices/yali" },
  { id: "illi", name: "ILLI", src: "/images/devices/slide-illi.png", alt: "ILLI AI Companion", href: undefined },
  { id: "ufo", name: "UFO", src: "/images/devices/slide-ufo.png", alt: "UFO Real-World Adventure Device", href: undefined },
] as const;

export function DeviceAccordion() {
  const [active, setActive] = useState(0);
  const slide = slides[active];
  const controlsClassName = `${styles.controls} ${
    slide.id === "yali" ? styles.controlsYali : slide.id === "illi" ? styles.controlsIlli : styles.controlsUfo
  }`;

  const selectSlide = useCallback((index: number) => {
    setActive(index);
  }, []);

  const advanceSlide = useCallback(() => {
    setActive((current) => (current + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timer = window.setTimeout(advanceSlide, 6000);
    return () => window.clearTimeout(timer);
  }, [active, advanceSlide]);

  return (
    <div className={styles.slideshow}>
      <Image key={slide.id} src={slide.src} alt={slide.alt} fill priority sizes="100vw" />
      {slide.href && (
        <Link className={styles.exploreLink} href={slide.href}>
          Explore YALI
        </Link>
      )}
      <nav className={controlsClassName} aria-label="Choose a companion device">
        {slides.map((item, index) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={active === index}
            aria-label={`Show ${item.name}`}
            onClick={() => selectSlide(index)}
          />
        ))}
        <span aria-hidden="true" />
      </nav>
    </div>
  );
}
