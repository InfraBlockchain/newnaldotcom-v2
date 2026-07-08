"use client";

import { useEffect, useRef, useState } from "react";
import type { FigureContent } from "@/content/aios";
import { DIAGRAM_COMPONENTS } from "@/components/diagrams";
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

  return (
    <figure
      ref={figureRef}
      className={styles.figure}
      aria-label={`${figure.type}: ${figure.label}`}
    >
      {isLoaded && DiagramComponent ? (
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
