import { Reveal } from "@/components/shared/Reveal";
import { ufoContent } from "@/content/ufo";
import styles from "./UfoPowerGauge.module.css";

export function UfoPowerGauge() {
  const { powerGauge } = ufoContent;

  return (
    <section className={styles.section} aria-label="UFO Power Gauge">
      <div className="ufo-container">
        <Reveal className={styles.header}>
          <p className={styles.eyebrow}>{powerGauge.eyebrow}</p>
          <h2 className={styles.title}>{powerGauge.title}</h2>
          <p className={styles.lead}>{powerGauge.lead}</p>
        </Reveal>
        <div className={styles.cards}>
          {powerGauge.cards.map((card, index) => (
            <Reveal key={card.num} as="article" className={styles.card} delay={index * 80}>
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
