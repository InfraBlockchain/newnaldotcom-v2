import { Reveal } from "@/components/shared/Reveal";
import { ufoContent } from "@/content/ufo";
import styles from "./UfoCinematic.module.css";

export function UfoCinematic() {
  const { cinematic } = ufoContent;

  return (
    <section className={styles.section} aria-label="UFO Cinematic">
      <div className={styles.cinema}>
        <Reveal as="div" className={styles.cinemaCopy}>
          <p className={styles.eyebrow}>{cinematic.eyebrow}</p>
          <h2 className={styles.title}>{cinematic.title}</h2>
          <p className={styles.body}>{cinematic.body}</p>
        </Reveal>
      </div>

      <div className="ufo-container">
        <div className={styles.strip}>
          <div className={styles.stripProgress} aria-hidden="true">
            <span className={styles.stripSegment} />
            <span className={styles.stripSegment} />
            <span className={styles.stripSegment} />
            <span className={styles.stripSegmentActive} />
            <span className={styles.stripSegment} />
          </div>
          <p className={styles.stripCaption}>{cinematic.strip.caption}</p>
          <span className={styles.stripLink}>
            {cinematic.strip.link}
            <svg className={styles.stripArrow} viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>

        <div className={styles.cards}>
          {cinematic.cards.map((card, index) => (
            <Reveal as="article" key={card.num} delay={index * 80} className={styles.card}>
              <p className={styles.cardNum}>{card.num}</p>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardText}>{card.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
