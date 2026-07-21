import type { CSSProperties } from "react";
import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";
import { ufoContent } from "@/content/ufo";
import styles from "./UfoSignalGuide.module.css";

const ZONE_CLASS = [styles.zonePulse, styles.zoneGlow, styles.zoneStrobe];
const ZONE_IMAGES = [
  { src: "/images/ufo/signal-blue.png", alt: "Runner receiving a blue UFO signal" },
  { src: "/images/ufo/signal-orange.png", alt: "Explorer receiving an orange UFO signal" },
  { src: "/images/ufo/signal-gold.png", alt: "Explorer receiving a gold UFO signal" },
];

export function UfoSignalGuide() {
  const { signalGuide } = ufoContent;

  return (
    <section className={styles.section} aria-label="UFO Signal Guide">
      <div className="ufo-container">
        <Reveal className={styles.header}>
          <h2 className={styles.title}>{signalGuide.title}</h2>
          <div className={styles.body}>
            <div className={styles.paragraph}>
              {signalGuide.body.slice(0, 2).map((line) => <p key={line}>{line}</p>)}
            </div>
            <div className={styles.paragraph}>
              {signalGuide.body.slice(2).map((line) => <p key={line}>{line}</p>)}
            </div>
            <p>{signalGuide.closing}</p>
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
              <div className={styles.zoneImage}>
                <Image src={ZONE_IMAGES[index].src} alt={ZONE_IMAGES[index].alt} fill sizes="(max-width: 767px) 100vw, 33vw" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
