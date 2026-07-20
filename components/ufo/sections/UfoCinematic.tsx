import { Reveal } from "@/components/shared/Reveal";
import { ufoContent } from "@/content/ufo";
import styles from "./UfoCinematic.module.css";

export function UfoCinematic() {
  const { cinematic } = ufoContent;

  return (
    <section className={styles.section} aria-label="UFO Cinematic">
      <div className={styles.cinema}>
        <Reveal as="div" className={styles.cinemaCopy}>
          <h2 className={styles.title}>{cinematic.title}</h2>
          <div className={styles.body}>
            {cinematic.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </Reveal>
      </div>

      <div className="ufo-container">
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
