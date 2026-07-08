import type { Metadata } from "next";
import { ContentSection } from "@/components/sections/content-section";
import { CrossNavigation } from "@/components/sections/cross-navigation";
import { devicesContent } from "@/content/devices";
import styles from "../detail-page.module.css";

export const metadata: Metadata = {
  title: "Newnal aios Devices | Newnal opt-2",
  description: "YALI and ILLI devices product page.",
};

export default function DevicesPage() {
  const yaliSections = devicesContent.sections.slice(0, 3);
  const illiSections = devicesContent.sections.slice(3);

  return (
    <main className={styles.main}>
      <header className={`${styles.hero} ${styles.mutedHero}`}>
        <div className={styles.heroInner}>
          <p className={styles.kicker}>Newnal product</p>
          <h1>{devicesContent.title}</h1>
          <p>{devicesContent.description}</p>
        </div>
      </header>
      <nav className={styles.tabs} aria-label="Device sections">
        <a href="#yali">YALI</a>
        <a href="#illi">ILLI</a>
      </nav>
      <div className={styles.deviceGroup} id="yali">
        {yaliSections.map((section, index) => (
          <ContentSection
            key={section.id}
            priorityFigure={index === 0}
            section={section}
            tone={index % 2 === 0 ? "muted" : "light"}
          />
        ))}
      </div>
      <div className={styles.deviceGroup} id="illi">
        {illiSections.map((section, index) => (
          <ContentSection
            key={section.id}
            priorityFigure={index === 0}
            section={section}
            tone={index % 2 === 0 ? "light" : "muted"}
          />
        ))}
      </div>
      <CrossNavigation />
    </main>
  );
}
