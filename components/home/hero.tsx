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
          <div className={styles.orbit} />
          <div className={styles.deviceFrame}>
            <div className={styles.deviceCore}>
              <span className={styles.deviceLabel}>AI-Native Draft</span>
              <p className={styles.supportingText}>{content.supportingText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
