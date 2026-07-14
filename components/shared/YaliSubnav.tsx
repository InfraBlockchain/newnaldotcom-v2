"use client";

import { CSSProperties, useEffect, useState } from "react";
import styles from "./YaliSubnav.module.css";

const chapters = [
  ["chapter-1", "01 Personalized Fandom"], ["chapter-2", "02 Everyday Moments"], ["chapter-3", "03 Moments That Matter"], ["chapter-4", "04 The Device"],
] as const;

export function YaliSubnav() {
  const [progress, setProgress] = useState(0);
  const [chapter, setChapter] = useState<(typeof chapters)[number][1]>(chapters[0][1]);
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
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
  return <nav className={styles.nav} aria-label="YALI page navigation">
    <div className={styles.inner}><div className={styles.brand}><strong>YALI</strong><span>· AI Artist Companion</span></div><div className={styles.chapter}><svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="8"/><circle className={styles.progress} cx="10" cy="10" r="8" style={{"--progress":progress} as CSSProperties}/></svg><span>{chapter}</span></div><div className={styles.actions}><div className={styles.switcher}><b>YALI</b><span aria-disabled="true">ILLI</span><span aria-disabled="true">UFO</span></div><a href="mailto:contact@newnal.com?subject=Get%20YALI">Get YALI</a></div></div>
  </nav>;
}
