import { PhilosophyContent } from "@/content/homepage";
import { SectionShell } from "./section-shell";
import styles from "./philosophy-section.module.css";

type PhilosophySectionProps = {
  content: PhilosophyContent;
};

export function PhilosophySection({ content }: PhilosophySectionProps) {
  return (
    <SectionShell id={content.id} eyebrow={content.eyebrow} title={content.title}>
      <div className={styles.grid}>
        <div className={styles.statementCard}>
          <p className={styles.statement}>{content.statement}</p>
        </div>
        <div className={styles.paragraphs}>
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
