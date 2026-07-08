import type { Metadata } from "next";
import Link from "next/link";
import { FigurePlaceholder } from "@/components/sections/figure-placeholder";
import { siteContent } from "@/content/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Newnal opt-2",
  description: "Hub-and-detail Newnal product website variant.",
};

export default function OptTwoHubPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero} aria-labelledby="opt-2-title">
        <div className={styles.heroInner}>
          <p className={styles.kicker}>Newnal product architecture</p>
          <h1 id="opt-2-title">ONE ARCHITECTURE. COMPLETE DATA SOVEREIGNTY</h1>
          <p>From 100% open to absolute zero.</p>
        </div>
      </section>

      <section className={styles.cards} aria-label="Product menu">
        <div className={styles.cardsInner}>
          {siteContent.hubCards.map((card) => (
            <article className={styles.card} key={card.href}>
              <FigurePlaceholder
                figure={{
                  label: card.figureLabel,
                  type: "image",
                }}
              />
              <div className={styles.cardCopy}>
                <h2>{card.title}</h2>
                <p>{card.summary}</p>
                <Link href={card.href}>Explore →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
