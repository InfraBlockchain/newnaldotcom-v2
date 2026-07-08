"use client";

import { useEffect, useRef, useState } from "react";
import type { FigureContent } from "@/content/aios";
import { DIAGRAM_COMPONENTS } from "@/components/diagrams";
import { IMAGE_PATHS } from "@/components/images";
import styles from "./figure-placeholder.module.css";

type FigurePlaceholderProps = {
  figure: FigureContent;
  priority?: boolean;
};

export function FigurePlaceholder({ figure, priority = false }: FigurePlaceholderProps) {
  const figureRef = useRef<HTMLElement>(null);
  const [isLoaded, setIsLoaded] = useState(priority);

  useEffect(() => {
    if (isLoaded) return;
    const node = figureRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: "360px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [isLoaded]);

  const DiagramComponent = DIAGRAM_COMPONENTS[figure.label];
  const imagePath = IMAGE_PATHS[figure.label];

  return (
    <figure
      ref={figureRef}
      className={styles.figure}
      aria-label={`${figure.type}: ${figure.label}`}
    >
      {isLoaded && imagePath ? (
        <div className={styles.imageFrame}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imagePath} alt={figure.label} className={styles.image} />
          <div className={styles.playOverlay} aria-hidden="true">
            <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="36" cy="36" r="36" fill="rgba(0,0,0,0.46)" />
              <polygon points="29,22 54,36 29,50" fill="white" />
            </svg>
          </div>
        </div>
      ) : isLoaded && DiagramComponent ? (
        <div className={styles.diagramFrame}>
          <DiagramComponent />
        </div>
      ) : (
        <div className={styles.frame}>
          <span className={styles.type}>{figure.type}</span>
          <span className={styles.label}>
            {isLoaded ? figure.label : "Loading visual placeholder"}
          </span>
        </div>
      )}
    </figure>
  );
}
