"use client";

import { useEffect, useState } from "react";
import styles from "./ScrollIndicator.module.css";

type Section = { id: string; label: string };

export function ScrollIndicator({ sections }: { sections: readonly Section[] }) {
  const [activeId, setActiveId] = useState(sections[0]?.id);

  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { threshold: [0.5] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className={styles.indicator} aria-label="Section navigation">
      {sections.map((section) => (
        <button
          key={section.id}
          type="button"
          className={`${styles.dot} ${section.id === activeId ? styles.active : ""}`}
          aria-label={section.label}
          aria-current={section.id === activeId}
          onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth", block: "start" })}
        />
      ))}
    </nav>
  );
}
