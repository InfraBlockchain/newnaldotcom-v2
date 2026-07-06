import { RoadmapContent } from "@/content/homepage";
import { SectionShell } from "./section-shell";
import styles from "./roadmap-section.module.css";

type RoadmapSectionProps = {
  content: RoadmapContent;
};

export function RoadmapSection({ content }: RoadmapSectionProps) {
  return (
    <SectionShell
      id={content.id}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    >
      <div className={styles.list}>
        {content.items.map((item) => (
          <article key={item.phase} className={styles.item}>
            <div className={styles.phase}>{item.phase}</div>
            <div className={styles.body}>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemDescription}>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
