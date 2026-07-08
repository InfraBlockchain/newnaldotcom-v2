import Link from "next/link";
import { FigurePlaceholder } from "./figure-placeholder";
import { siteContent } from "@/content/site";
import styles from "./cross-navigation.module.css";

export function CrossNavigation() {
  return (
    <section className={styles.section} aria-label="Explore products">
      <div className={styles.inner}>
        {siteContent.hubCards.map((card) => (
          <article className={styles.card} key={card.href}>
            <FigurePlaceholder figure={{ label: card.figureLabel, type: "image" }} />
            <div className={styles.cardCopy}>
              <h2>{card.title}</h2>
              <p>{card.summary}</p>
              <Link href={card.href}>Explore →</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
