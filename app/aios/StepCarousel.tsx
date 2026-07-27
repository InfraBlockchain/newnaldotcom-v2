"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

type StepCarouselProps = {
  children: ReactNode;
  count: number;
};

export function StepCarousel({ children, count }: StepCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const node = trackRef.current;
    if (!node) return;

    const onScroll = () => {
      const center = node.scrollLeft + node.clientWidth / 2;
      let closest = 0;
      let closestDistance = Infinity;
      Array.from(node.children).forEach((child, index) => {
        const el = child as HTMLElement;
        const elCenter = el.offsetLeft + el.offsetWidth / 2;
        const distance = Math.abs(elCenter - center);
        if (distance < closestDistance) {
          closestDistance = distance;
          closest = index;
        }
      });
      setActive(closest);
    };

    node.addEventListener("scroll", onScroll, { passive: true });
    return () => node.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (index: number) => {
    const node = trackRef.current;
    const child = node?.children[index] as HTMLElement | undefined;
    child?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  return (
    <>
      <div className={styles.stepCards} ref={trackRef}>
        {children}
      </div>
      <div className={styles.carouselDots} role="tablist" aria-label="Step carousel navigation">
        {Array.from({ length: count }, (_, index) => (
          <button
            key={index}
            type="button"
            role="tab"
            aria-selected={index === active}
            aria-label={`Go to step ${index + 1}`}
            className={`${styles.carouselDot} ${index === active ? styles.carouselDotActive : ""}`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </>
  );
}
