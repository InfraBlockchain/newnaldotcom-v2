import type { Metadata } from "next";
import { CrossNavigation } from "@/components/sections/cross-navigation";
import { DeviceTabs } from "@/components/sections/device-tabs";
import { devicesContent } from "@/content/devices";
import styles from "../detail-page.module.css";

export const metadata: Metadata = {
  title: "Newnal aios Devices | Newnal opt-2",
  description: "YALI, ILLI and UFO devices product page.",
};

export default function DevicesPage() {
  const yaliSections = devicesContent.sections.slice(0, 3);
  const illiSections = devicesContent.sections.slice(3, 6);
  const ufoSections = devicesContent.sections.slice(6);

  return (
    <main className={styles.main}>
      <header className={`${styles.hero} ${styles.mutedHero}`}>
        <div className={styles.heroInner}>
          <p className={styles.kicker}>Newnal product</p>
          <h1>{devicesContent.title}</h1>
          <p>{devicesContent.description}</p>
        </div>
      </header>
      <DeviceTabs
        tabs={[
          { id: "yali", label: "YALI", sections: yaliSections, toneOrder: ["muted", "light"] },
          { id: "illi", label: "ILLI", sections: illiSections, toneOrder: ["light", "muted"] },
          { id: "ufo", label: "UFO", sections: ufoSections, toneOrder: ["muted", "light"] },
        ]}
      />
      <CrossNavigation />
    </main>
  );
}
