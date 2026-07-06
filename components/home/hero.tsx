import { HeroContent } from "@/content/homepage";
import styles from "./hero.module.css";

type HeroProps = {
  content: HeroContent;
};

export function Hero({ content }: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>{content.eyebrow}</span>
          <h1 className={styles.title}>{content.title}</h1>
          <p className={styles.description}>{content.description}</p>
          <div className={styles.actions}>
            <a href="#philosophy" className={styles.primaryAction}>
              {content.primaryCta}
            </a>
            <a href="#roadmap" className={styles.secondaryAction}>
              {content.secondaryCta}
            </a>
          </div>
        </div>
        <div className={styles.visualPanel}>
          <div className={styles.card}>
            <span className={styles.cardLabel}>LAB NOTE</span>
            <p className={styles.supportingText}>{content.supportingText}</p>
            <div className={styles.signalList}>
              <div className={styles.signalItem}>
                <span className={styles.signalDotSunset} />
                <span className={styles.signalText}>Placeholder Product Surface</span>
              </div>
              <div className={styles.signalItem}>
                <span className={styles.signalDotDusk} />
                <span className={styles.signalText}>Placeholder System Layer</span>
              </div>
              <div className={styles.signalItem}>
                <span className={styles.signalDotBreeze} />
                <span className={styles.signalText}>Placeholder Interaction Model</span>
              </div>
            </div>
            <a href="#system" className={styles.cardAction}>
              Read Draft
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
