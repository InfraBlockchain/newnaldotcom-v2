"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

const THUMB_WIDTH = 120;

export function Spectrum() {
  const [value, setValue] = useState(50);
  const [trackWidth, setTrackWidth] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const activeStrength = value / 100;
  const defensiveStrength = (100 - value) / 100;
  const activeOpacity = 0.55 + activeStrength * 0.45;
  const defensiveOpacity = 0.55 + defensiveStrength * 0.45;
  const activeFontSize = 15 + activeStrength * 8;
  const defensiveFontSize = 15 + defensiveStrength * 8;

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const update = () => setTrackWidth(el.clientWidth);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // native range thumbs inset by half their width so they never overflow the track;
  // the decorative capsule has to follow the same math or it drifts from the real hit target near 0/100.
  const usableWidth = Math.max(trackWidth - THUMB_WIDTH, 0);
  const handlePx = THUMB_WIDTH / 2 + (value / 100) * usableWidth;

  return (
    <div className={styles.spectrum} role="group" aria-label="Data sovereignty spectrum from Private Phone at 0 to Newnal aios at 100">
      <p className={styles.spectrumHeading}>Data Sovereignty</p>

      <span className={styles.spectrumNumSide} data-side="left">0</span>
      <span className={styles.spectrumNumSide} data-side="right">100</span>

      <div className={`${styles.spectrumEndpoint} ${styles.spectrumLeft}`} style={{ opacity: defensiveOpacity }}>
        <strong style={{ fontSize: `${defensiveFontSize}px` }}>Private Phone</strong>
        <small>DEFENSIVE SOVEREIGNTY</small>
      </div>

      <div className={styles.trackPill}>
        <div className={styles.trackFill} style={{ width: `${handlePx}px` }} />
      </div>

      <div className={styles.thumbTrack} ref={trackRef}>
        <input
          className={styles.spectrumSlider}
          type="range"
          min={0}
          max={100}
          step={1}
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
          aria-label="Data utilization from 0 (Private Phone) to 100 (Newnal aios)"
        />
        <div className={styles.lens} style={{ left: `${handlePx}px` }}>
          <span>Newnal</span>
        </div>
      </div>

      <div className={`${styles.spectrumEndpoint} ${styles.spectrumRight}`} style={{ opacity: activeOpacity }}>
        <strong style={{ fontSize: `${activeFontSize}px` }}>Newnal aios</strong>
        <small>ACTIVE SOVEREIGNTY</small>
      </div>
    </div>
  );
}
