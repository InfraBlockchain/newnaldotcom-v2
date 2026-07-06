import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { ClosingSection } from "@/components/home/closing-section";
import { Hero } from "@/components/home/hero";
import { PhilosophySection } from "@/components/home/philosophy-section";
import { PrinciplesSection } from "@/components/home/principles-section";
import { RoadmapSection } from "@/components/home/roadmap-section";
import { SystemSection } from "@/components/home/system-section";
import { homepageContent } from "@/content/homepage";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.pageShell}>
      <Header brand={homepageContent.brand} navigation={homepageContent.navigation} />
      <main className={styles.main}>
        <Hero content={homepageContent.hero} />
        <PhilosophySection content={homepageContent.philosophy} />
        <PrinciplesSection content={homepageContent.principles} />
        <SystemSection content={homepageContent.system} />
        <RoadmapSection content={homepageContent.roadmap} />
        <ClosingSection content={homepageContent.closing} />
      </main>
      <Footer brand={homepageContent.brand} footerNote={homepageContent.footerNote} />
    </div>
  );
}
