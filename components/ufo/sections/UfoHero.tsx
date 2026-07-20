import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";
import { PlayIcon } from "@heroicons/react/24/solid";
import { ufoContent } from "@/content/ufo";
import styles from "./UfoHero.module.css";

export function UfoHero() {
  const { hero } = ufoContent;

  return (
    <section className={styles.hero}>
      <div className={styles.intro}>
        <h1 className={styles.title}>{hero.title}</h1>
        <div className={styles.leadBlock}>
          <p>{hero.lead}</p>
          <p className={styles.leadLines}>
            {hero.leadLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>
        </div>
      </div>

      <Reveal className={styles.cardReveal} delay={80}>
        <div className={styles.heroCard}>
          <Image
            className={styles.heroImage}
            src="/images/devices/hero-ufo.png"
            alt="UFO wearable companion resting on a treasure card"
            fill
            priority
            sizes="(max-width: 767px) calc(100vw - 40px), min(100vw - 96px, 1280px)"
          />
          <div className={styles.imageOverlay} aria-hidden="true" />
          <div className={styles.cardCopy}>
            <p className={styles.cardLabel}>{hero.photo.label}</p>
            <p className={styles.cardCaption}>{hero.photo.caption}</p>
          </div>
          <div className={styles.filmChip}>
            <PlayIcon aria-hidden="true" />
            <span>{hero.photo.chip}</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
