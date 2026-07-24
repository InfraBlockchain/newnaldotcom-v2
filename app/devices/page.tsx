import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Reveal } from "@/components/shared/Reveal";
import { devicesContent as c } from "@/content/devices";
import { devicesFontClassName } from "./fonts";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Companion Devices",
  description: c.hero.rhythm.join(" "),
};

export default function DevicesPage() {
  return (
    <main id="main-content" className={`${styles.page} ${devicesFontClassName}`}>
      <section className={styles.hero} aria-labelledby="devices-title">
        <Reveal className={styles.heroCopy}>
          <h1 id="devices-title">
            {c.hero.heading.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p>
            {c.hero.rhythm.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>
          <p className={styles.heroClosing}>{c.hero.closing}</p>
        </Reveal>
      </section>

      <section className={styles.paths} aria-label="Companion device lineup">
        {c.slides.map((slide, index) => (
          <Reveal key={slide.id} delay={index * 80} className={styles.pathReveal}>
            <Link className={styles.card} href={slide.href} data-slide={slide.id}>
              <Image
                className={styles.cardImage}
                src={slide.image}
                alt=""
                fill
                sizes="(max-width: 900px) 86vw, 25vw"
                priority={index === 0}
              />
              <span className={styles.cardLabel}>
                {slide.name}
                <small className={styles.cardLabelSub}>Powered by Newnal aios</small>
              </span>
              <span className={styles.arrow} aria-hidden="true">
                <ChevronRightIcon />
              </span>
            </Link>
          </Reveal>
        ))}
      </section>
    </main>
  );
}
