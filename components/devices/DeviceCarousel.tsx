"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { DeviceSlide } from "@/content/devices";
import styles from "./DeviceCarousel.module.css";

type DeviceCarouselProps = {
  slides: readonly DeviceSlide[];
};

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function DeviceCarousel({ slides }: DeviceCarouselProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);
  const dragRef = useRef({ dragging: false, startX: 0, startScrollLeft: 0, moved: false });
  const rafRef = useRef<number | null>(null);
  const pendingDeltaRef = useRef<number | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!mostVisible) return;
        const index = slideRefs.current.findIndex((node) => node === mostVisible.target);
        if (index !== -1) setActive(index);
      },
      { root: track, threshold: [0.5, 0.75, 1] },
    );

    slideRefs.current.forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, [slides.length]);

  // Cancel any in-flight rAF-batched scroll update on unmount.
  useEffect(() => {
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const scrollToIndex = useCallback((index: number) => {
    const node = slideRefs.current[index];
    if (!node) return;
    node.scrollIntoView({
      behavior: prefersReducedMotion() ? "auto" : "smooth",
      inline: "center",
      block: "nearest",
    });
  }, []);

  const handlePointerDown = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || event.pointerType === "touch") return;
    dragRef.current = { dragging: true, startX: event.clientX, startScrollLeft: track.scrollLeft, moved: false };
  }, []);

  const handlePointerMove = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    const drag = dragRef.current;
    if (!track || !drag.dragging) return;
    const delta = event.clientX - drag.startX;
    if (!drag.moved && Math.abs(delta) > 3) {
      drag.moved = true;
      // Only capture the pointer once we know this is a drag, so a plain
      // click (e.g. on the YALI card link) is left to fire natively.
      try {
        track.setPointerCapture(event.pointerId);
      } catch {
        // Some environments (e.g. synthetic pointer events) may reject capture; dragging still works without it.
      }
    }
    if (!drag.moved) return;

    // Batch scrollLeft writes to one per animation frame for smoother dragging.
    pendingDeltaRef.current = delta;
    if (rafRef.current === null) {
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const currentTrack = trackRef.current;
        if (currentTrack && pendingDeltaRef.current !== null) {
          currentTrack.scrollLeft = dragRef.current.startScrollLeft - pendingDeltaRef.current;
        }
      });
    }
  }, []);

  const endDrag = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (track && dragRef.current.moved) {
      try {
        track.releasePointerCapture(event.pointerId);
      } catch {
        // pointer capture may already be released; ignore.
      }
    }
    dragRef.current.dragging = false;
  }, []);

  const handleCardClick = useCallback((event: React.MouseEvent) => {
    if (dragRef.current.moved) event.preventDefault();
  }, []);

  const activeSlide = slides[active];
  const isFirst = active === 0;
  const isLast = active === slides.length - 1;

  return (
    <div className={styles.wrap}>
      <div className={styles.intro} aria-live="polite">
        <div key={activeSlide.id} className={styles.introInner}>
          <h2 className={styles.introHeading}>{activeSlide.heading}</h2>
          <p className={styles.introBody}>{activeSlide.body}</p>
          <p className={styles.introTagline}>{activeSlide.tagline}</p>
        </div>
      </div>

      <div className={styles.trackWrap}>
        <button
          type="button"
          className={`${styles.navButton} ${styles.navPrev}`}
          aria-label="Previous slide"
          disabled={isFirst}
          onClick={() => scrollToIndex(active - 1)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M12.5 4.5 6.5 10l6 5.5" stroke="var(--fg-text, #19191c)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div
          className={styles.track}
          ref={trackRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onPointerCancel={endDrag}
          onDragStart={(event) => event.preventDefault()}
          aria-label="Companion devices"
        >
          {slides.map((slide, index) => {
            const content = (
              <>
                <Image
                  src={slide.image}
                  alt={slide.name}
                  fill
                  priority={index === 0}
                  draggable={false}
                  sizes="(max-width: 767px) 88vw, 1123px"
                  className={styles.cardImage}
                />
                <span className={styles.cardLabel}>{slide.name}</span>
              </>
            );

            return (
              <div
                key={slide.id}
                ref={(node) => {
                  slideRefs.current[index] = node;
                }}
                className={styles.slide}
              >
                {slide.href ? (
                  <Link href={slide.href} className={styles.card} onClick={handleCardClick}>
                    {content}
                  </Link>
                ) : (
                  <div className={styles.card}>{content}</div>
                )}
              </div>
            );
          })}
        </div>

        <button
          type="button"
          className={`${styles.navButton} ${styles.navNext}`}
          aria-label="Next slide"
          disabled={isLast}
          onClick={() => scrollToIndex(active + 1)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M7.5 4.5 13.5 10l-6 5.5" stroke="var(--fg-text, #19191c)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className={styles.dots}>
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            className={`${styles.dot} ${index === active ? styles.dotActive : ""}`}
            aria-label={`Slide ${index + 1}: ${slide.heading}`}
            aria-pressed={index === active}
            onClick={() => scrollToIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
