"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./YaliSubnav.module.css";

const chapters = [
  ["chapter-1", "01"], ["chapter-2", "02"], ["chapter-3", "03"], ["chapter-4", "04"],
] as const;

const devices = {
  YALI: { href: "/devices/yali", tagline: "AI Artist Companion" },
  ILLI: { href: "/devices/illi", tagline: "AI Companion for the Golden Generation" },
  ONNI: { href: "/devices/onni", tagline: "Family AI Companion" },
} as const;

type DeviceName = keyof typeof devices;

export function YaliSubnav({ device }: { device: DeviceName }) {
  const [chapter, setChapter] = useState<(typeof chapters)[number][1]>(chapters[0][1]);

  useEffect(() => {
    const update = () => {
      let next: (typeof chapters)[number][1] = chapters[0][1];
      for (const [id, label] of chapters) {
        const node = document.getElementById(id);
        if (node && node.getBoundingClientRect().top <= window.innerHeight * .42) next = label;
      }
      setChapter(next);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);

  return <nav className={styles.nav} aria-label={`${device} page navigation`}>
    <div className={styles.inner}>
      <div className={styles.brand}><strong>{device}</strong><span>· {devices[device].tagline}</span></div>
      <div className={styles.chapterLinks} aria-label="Page chapters">
        {chapters.map(([id, label]) => <a key={id} className={chapter === label ? styles.current : ""} href={`#${id}`} aria-current={chapter === label ? "step" : undefined}>{label}</a>)}
      </div>
      <div className={styles.actions}>
        <div className={styles.switcher} aria-label="Companion device pages">
          {Object.entries(devices).map(([name, details]) => name === device
            ? <strong key={name} aria-current="page">{name}</strong>
            : <Link key={name} href={details.href}>{name}</Link>)}
          <Link href="/devices/ufo">UFO</Link>
        </div>
        <a href={`mailto:contact@newnal.com?subject=Get%20${device}`}>Get {device}</a>
      </div>
    </div>
  </nav>;
}
