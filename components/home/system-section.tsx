import { SystemContent } from "@/content/homepage";
import { SectionShell } from "./section-shell";
import styles from "./system-section.module.css";

type SystemSectionProps = {
  content: SystemContent;
};

export function SystemSection({ content }: SystemSectionProps) {
  return (
    <SectionShell
      id={content.id}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    >
      <div className={styles.grid}>
        {content.blocks.map((block) => (
          <article key={block.title} className={styles.block}>
            <span className={styles.label}>{block.label}</span>
            <h3 className={styles.blockTitle}>{block.title}</h3>
            <p className={styles.blockDescription}>{block.description}</p>
            <ul className={styles.list}>
              {block.bullets.map((bullet) => (
                <li key={bullet} className={styles.listItem}>
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
