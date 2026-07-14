"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import styles from "./DeviceAccordion.module.css";

const slides = [
  { id: "yali", name: "YALI", src: "/images/devices/hero-yali.png", alt: "YALI AI Artist Companion", href: "/devices/yali" },
  { id: "illi", name: "ILLI", src: "/images/devices/hero-illi.png", alt: "ILLI AI Companion", href: undefined },
  { id: "ufo", name: "UFO", src: "/images/devices/hero-ufo.png", alt: "UFO Real-World Adventure Device", href: undefined },
] as const;

export function DeviceAccordion() {
  const [active, setActive] = useState(0);

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
      {slides.map((slide, index) => {
        const isActive = active === index;
        return (
          <section key={slide.id} className={`${styles.panel} ${isActive ? styles.active : ""}`}>
            <Image src={slide.src} alt={isActive ? slide.alt : ""} fill priority={index === 0} sizes="(max-width: 767px) 100vw, 85vw" />
            <button
              className={styles.panelButton}
              type="button"
              aria-pressed={isActive}
              aria-label={`Show ${slide.name}`}
              onClick={() => setActive(index)}
            />
            <span className={styles.panelLabel} aria-hidden="true">{slide.name}</span>
            {isActive && <div key={slide.id} className={styles.progress} aria-hidden="true" />}
            {isActive && slide.href && <Link className={styles.exploreLink} href={slide.href}>Explore YALI</Link>}
          </section>
        );
      })}
      <section className={`${styles.panel} ${styles.upcoming}`} aria-label="ONNI, coming soon">
        <span className={styles.panelLabel}>ONNI</span>
        <span className={styles.comingSoon}>COMING SOON</span>
      </section>
    </div>
  );
}
