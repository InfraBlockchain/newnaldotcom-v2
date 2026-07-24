import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { onniContent as c } from "@/content/onni";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "ONNI",
  description: c.hero.lead,
};

export default function OnniPage() {
  return (
    <main id="main-content" className={styles.page} data-theme="onni">
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <Reveal className={styles.heroCopy}>
            <p className={styles.eyebrow}>{c.hero.eyebrow}</p>
            <h1>{c.hero.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h1>
            <p>{c.hero.lead}</p>
            <p className={styles.heroDetail}>{c.hero.detail}</p>
          </Reveal>
          <Reveal className={styles.heroImage}>
            <Image
              src="/images/figma/devices-card-onni.png"
              alt="ONNI family AI companion in a child's room"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 48vw"
            />
          </Reveal>
        </div>
      </section>

      <section className={styles.features}>
        <div className="container">
          <Reveal className={styles.sectionHead}>
            <p className={styles.eyebrow}>{c.features.eyebrow}</p>
            <h2>{c.features.title}</h2>
            <p>{c.features.lead}</p>
          </Reveal>
          <div className={styles.featureGrid}>
            {c.features.cards.map((card, index) => (
              <Reveal key={card.number} delay={index * 80}>
                <article className={styles.featureCard}>
                  <span>{card.number}</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.family}>
        <div className={`container ${styles.familyGrid}`}>
          <Reveal className={styles.familyCopy}>
            <p className={styles.eyebrow}>{c.family.eyebrow}</p>
            <h2>{c.family.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h2>
            <blockquote>{c.family.quote}</blockquote>
          </Reveal>
          <div className={styles.principles}>
            {c.family.principles.map(([title, text], index) => (
              <Reveal key={title} delay={index * 80}>
                <article>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.spec}>
        <div className={`container ${styles.specGrid}`}>
          <Reveal className={styles.specHead}>
            <p className={styles.eyebrow}>{c.spec.eyebrow}</p>
            <h2>{c.spec.title}</h2>
            <Link className={styles.backLink} href="/devices">Explore all companions <span aria-hidden="true">→</span></Link>
          </Reveal>
          <Reveal className={styles.specTable}>
            {c.spec.rows.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <p>{value}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </main>
  );
}
