import type { Metadata } from "next";
import { ContentSection } from "@/components/sections/content-section";
import { ZoneIntro } from "@/components/sections/zone-intro";
import { BackToTop } from "@/components/site/back-to-top";
import { OptFooter } from "@/components/site/opt-footer";
import { VariantGnb } from "@/components/site/variant-gnb";
import { aiosContent } from "@/content/aios";
import { devicesContent } from "@/content/devices";
import { privatePhoneContent } from "@/content/private-phone";
import { siteContent } from "@/content/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Newnal opt-1",
  description: "One-page Newnal product landing variant.",
};

export default function OptOnePage() {
  const yaliSections = devicesContent.sections.slice(0, 3);
  const illiSections = devicesContent.sections.slice(3);

  return (
    <div className={styles.page} id="top">
      <VariantGnb
        brand={siteContent.brand}
        items={siteContent.menuItems}
        logoHref="#top"
        mode="anchor"
      />
      <main>
        <section className={styles.hero} aria-labelledby="opt-1-title">
          <div className={styles.heroInner}>
            <p className={styles.heroKicker}>Newnal product architecture</p>
            <h1 id="opt-1-title">ONE ARCHITECTURE. COMPLETE DATA SOVEREIGNTY</h1>
            <p>From 100% open to absolute zero.</p>
          </div>
        </section>

        <section id={aiosContent.anchorId} className={styles.zone}>
          <ZoneIntro
            description={aiosContent.description}
            kicker="Zone 1"
            title={aiosContent.title}
            tone="light"
          />
          {aiosContent.sections.map((section, index) => (
            <ContentSection
              key={section.id}
              priorityFigure={index === 0}
              section={section}
              tone={index % 2 === 0 ? "light" : "muted"}
            />
          ))}
        </section>

        <section id={privatePhoneContent.anchorId} className={styles.zone}>
          <ZoneIntro
            description={privatePhoneContent.description}
            kicker="Zone 2"
            title={privatePhoneContent.title}
            tone="dark"
          />
          {privatePhoneContent.sections.map((section, index) => (
            <ContentSection
              key={section.id}
              priorityFigure={index === 0}
              section={section}
              tone="dark"
            />
          ))}
        </section>

        <section id={devicesContent.anchorId} className={styles.zone}>
          <ZoneIntro
            description={devicesContent.description}
            kicker="Zone 3"
            title={devicesContent.title}
            tone="muted"
          />
          <div>
            <div className={styles.deviceLabel}>YALI</div>
            {yaliSections.map((section, index) => (
              <ContentSection
                key={section.id}
                priorityFigure={index === 0}
                section={section}
                tone={index % 2 === 0 ? "muted" : "light"}
              />
            ))}
          </div>
          <div>
            <div className={styles.deviceLabel}>ILLI</div>
            {illiSections.map((section, index) => (
              <ContentSection
                key={section.id}
                priorityFigure={index === 0}
                section={section}
                tone={index % 2 === 0 ? "light" : "muted"}
              />
            ))}
          </div>
        </section>
      </main>
      <OptFooter brand={siteContent.brand} note={siteContent.footerNote} />
      <BackToTop />
    </div>
  );
}
