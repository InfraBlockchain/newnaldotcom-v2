import type { Metadata } from "next";
import { UfoCinematic } from "@/components/ufo/sections/UfoCinematic";
import { UfoDarkShowcase } from "@/components/ufo/sections/UfoDarkShowcase";
import { UfoEditorialBand } from "@/components/ufo/sections/UfoEditorialBand";
import { UfoHero } from "@/components/ufo/sections/UfoHero";
import { UfoPowerGauge } from "@/components/ufo/sections/UfoPowerGauge";
import { UfoSignalGuide } from "@/components/ufo/sections/UfoSignalGuide";
import { UfoSpecTable } from "@/components/ufo/sections/UfoSpecTable";
import { ufoContent } from "@/content/ufo";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "UFO",
  description: ufoContent.hero.lead,
};

export default function UfoPage() {
  return (
    <main id="main-content" className={styles.page} data-theme="ufo">
      <UfoHero />
      <UfoDarkShowcase />
      <UfoEditorialBand />
      <UfoCinematic />
      <UfoPowerGauge />
      <UfoSignalGuide />
      <UfoSpecTable />
    </main>
  );
}
