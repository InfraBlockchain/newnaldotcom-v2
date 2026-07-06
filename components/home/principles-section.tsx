import { PrinciplesContent } from "@/content/homepage";
import { SectionShell } from "./section-shell";
import styles from "./principles-section.module.css";

type PrinciplesSectionProps = {
  content: PrinciplesContent;
};

export function PrinciplesSection({ content }: PrinciplesSectionProps) {
  return (
    <SectionShell
      id={content.id}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    >
      <div className={styles.grid}>
        {content.items.map((item) => (
          <article key={item.title} className={styles.card}>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDescription}>{item.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
