import type { CSSProperties } from "react";
import { Reveal } from "@/components/shared/Reveal";
import { ufoContent } from "@/content/ufo";
import styles from "./UfoSignalGuide.module.css";

const ZONE_CLASS = [styles.zonePulse, styles.zoneGlow, styles.zoneStrobe];

export function UfoSignalGuide() {
  const { signalGuide } = ufoContent;

  return (
    <section className={styles.section} aria-label="UFO Signal Guide">
      <div className="ufo-container">
        <Reveal className={styles.header}>
          <p className={styles.eyebrow}>{signalGuide.eyebrow}</p>
          <h2 className={styles.title}>{signalGuide.title}</h2>
          <div className={styles.body}>
            {signalGuide.body.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </Reveal>
        <div className={styles.zones}>
          {signalGuide.zones.map((zone, index) => (
            <Reveal key={zone.distance} as="div" className={styles.zone} delay={index * 100}>
              <span
                className={`${styles.led} ${ZONE_CLASS[index] ?? ""}`}
                style={{ "--zone-color": zone.color } as CSSProperties}
                aria-hidden="true"
              />
              <p className={styles.distance}>{zone.distance}</p>
              <p className={styles.label} style={{ color: zone.color }}>
                {zone.label}
              </p>
              <p className={styles.text}>{zone.text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal as="p" className={styles.closing} delay={200}>
          {signalGuide.closing}
        </Reveal>
      </div>
    </section>
  );
}
