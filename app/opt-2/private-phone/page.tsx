import type { Metadata } from "next";
import { ContentSection } from "@/components/sections/content-section";
import { CrossNavigation } from "@/components/sections/cross-navigation";
import { privatePhoneContent } from "@/content/private-phone";
import styles from "../detail-page.module.css";

export const metadata: Metadata = {
  title: "Private Phone | Newnal opt-2",
  description: "Newnal Private Phone product page.",
};

export default function PrivatePhonePage() {
  return (
    <main className={styles.main}>
      <header className={`${styles.hero} ${styles.darkHero}`}>
        <div className={styles.heroInner}>
          <p className={styles.kicker}>Newnal product</p>
          <h1>{privatePhoneContent.title}</h1>
          <p>{privatePhoneContent.description}</p>
        </div>
      </header>
      {privatePhoneContent.sections.map((section, index) => (
        <ContentSection
          key={section.id}
          priorityFigure={index === 0}
          section={section}
          tone="dark"
        />
      ))}
      <CrossNavigation />
    </main>
  );
}
