import type { Metadata } from "next";
import { ContentSection } from "@/components/sections/content-section";
import { CrossNavigation } from "@/components/sections/cross-navigation";
import { aiosContent } from "@/content/aios";
import styles from "../detail-page.module.css";

export const metadata: Metadata = {
  title: "Newnal aios | Newnal opt-2",
  description: "Newnal aios product page.",
};

export default function AiosPage() {
  return (
    <main className={styles.main}>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.kicker}>Newnal product</p>
          <h1>{aiosContent.title}</h1>
          <p>{aiosContent.description}</p>
        </div>
      </header>
      {aiosContent.sections.map((section, index) => (
        <ContentSection
          key={section.id}
          priorityFigure={index === 0}
          section={section}
          tone={index % 2 === 0 ? "light" : "muted"}
        />
      ))}
      <CrossNavigation />
    </main>
  );
}
