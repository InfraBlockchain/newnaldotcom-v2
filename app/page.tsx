import Link from "next/link";
import { EmphasizedText } from "@/components/shared/EmphasizedText";
import { Reveal } from "@/components/shared/Reveal";
import { homeContent } from "@/content/home";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main id="main-content">
      <section className={styles.hero} aria-labelledby="home-title">
        {/* TODO(asset): Replace the brand key visual placeholder when the approved image is provided. */}
        <div className={styles.heroVisual} role="img" aria-label="Placeholder for Newnal brand key visual">
          <span>PHOTO · brand key visual</span>
        </div>
        <div className={styles.overlay} />
        <Reveal className={styles.heroCopy}>
          <h1 id="home-title"><EmphasizedText text={homeContent.hero.title} emphasis={homeContent.hero.emphasis} /></h1>
          <Link href="/aios">{homeContent.hero.cta}</Link>
        </Reveal>
      </section>
      <section className={styles.paths} aria-label="Explore Newnal products">
        {homeContent.paths.map((path, index) => (
          <Reveal key={path.href} delay={index * 80} className={styles.pathReveal}>
            <Link className={`${styles.card} ${styles[path.tone]}`} href={path.href}>
              <div><h2>{path.title}</h2><p>{path.description}</p></div>
              <span className={styles.arrow} aria-hidden="true">→</span>
            </Link>
          </Reveal>
        ))}
      </section>
    </main>
  );
}
