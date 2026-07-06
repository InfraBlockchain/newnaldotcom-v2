import { ClosingContent } from "@/content/homepage";
import styles from "./closing-section.module.css";

type ClosingSectionProps = {
  content: ClosingContent;
};

export function ClosingSection({ content }: ClosingSectionProps) {
  return (
    <section id={content.id} className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.eyebrow}>{content.eyebrow}</span>
        <h2 className={styles.title}>{content.title}</h2>
        <p className={styles.description}>{content.description}</p>
        <a href="#" className={styles.action}>
          {content.ctaLabel}
        </a>
      </div>
    </section>
  );
}
