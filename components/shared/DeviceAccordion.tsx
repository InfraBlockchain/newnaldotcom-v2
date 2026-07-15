"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./DeviceAccordion.module.css";

const devices = [
  { id: "yali", name: "YALI", src: "/images/figma/devices-card-yali.png", alt: "YALI artist companion device" },
  { id: "illi", name: "ILLI", src: "/images/figma/devices-card-illi.png", alt: "ILLI companion device in a family home" },
  { id: "ufo", name: "UFO", src: "/images/figma/devices-card-ufo.png", alt: "UFO adventure device used with a treasure card" },
] as const;

export function DeviceAccordion() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current;
    const card = cards?.children[active] as HTMLElement | undefined;
    if (cards && card) cards.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
  }, [active]);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % devices.length), 5000);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <div className={styles.showcase}>
      <div className={styles.intro}>
        <h2>K-POP Artist AI Companion, YALI</h2>
        <p>It brings the artist you love into your everyday moments through personalized greetings, recommendations, memories, and experiences.</p>
        <p>A daily companion built around the artist you love.</p>
      </div>
      <div ref={cardsRef} className={styles.cards} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        {devices.map((device) => (
          <article key={device.id} className={styles.card}>
            <Image src={device.src} alt={device.alt} fill sizes="(max-width: 767px) 84vw, 33vw" />
            <span>{device.name}</span>
          </article>
        ))}
      </div>
      <div className={styles.pager}>
        {devices.map((device, index) => <button key={device.id} className={active === index ? styles.activeDot : ""} type="button" aria-label={`Show ${device.name}`} aria-current={active === index} onClick={() => setActive(index)} />)}
      </div>
    </div>
  );
}
