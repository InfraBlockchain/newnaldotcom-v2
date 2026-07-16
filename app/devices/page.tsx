import type { Metadata } from "next";
import Image from "next/image";
import { DeviceCarousel } from "@/components/devices/DeviceCarousel";
import { devicesContent as c } from "@/content/devices";
import { devicesFontClassName } from "./fonts";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Companion Devices",
  description: c.hero.rhythm.join(" "),
};

export default function DevicesPage() {
  return (
    <main id="main-content" className={devicesFontClassName}>
      <section className={styles.hero}>
        <Image
          src="/images/figma/devices-hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={styles.heroCopy}>
          <h1 className={styles.heroHeading}>
            {c.hero.heading.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className={styles.heroRhythm}>
            {c.hero.rhythm.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>
          <p className={styles.heroClosing}>{c.hero.closing}</p>
        </div>
      </section>

      <section className={styles.intro} aria-label="Companion device lineup">
        <DeviceCarousel slides={c.slides} />
      </section>
    </main>
  );
}
