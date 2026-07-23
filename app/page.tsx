import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { homeContent } from "@/content/home";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main id="main-content" className={styles.home}>
      <section className={styles.hero} aria-labelledby="home-title">
        <div className={styles.heroInner}>
          <Reveal className={styles.heroCopy}>
            <h1 id="home-title">
              {homeContent.hero.title.map((line, lineIndex) => (
                <span key={lineIndex} className={styles.titleLine}>
                  {line.map((segment) => (
                    <span
                      key={segment.text}
                      className={"accent" in segment ? styles.accent : undefined}
                    >
                      {segment.text}
                    </span>
                  ))}
                </span>
              ))}
            </h1>
          </Reveal>
        </div>
        <div className={styles.heroFoot}>
          <p>One intelligence, seamlessly present.</p>
          <a href="#products">Discover Newnal <span aria-hidden="true">↓</span></a>
        </div>
      </section>
      <section id="products" className={styles.paths} aria-labelledby="products-title">
        <h2 id="products-title" className="srOnly">Explore Newnal products</h2>
        <div className={styles.pathGrid}>
          {homeContent.paths.map((path, index) => (
            <Reveal key={path.href} delay={index * 80} className={styles.pathReveal}>
              <Link className={`${styles.card} ${styles[path.tone]}`} href={path.href}>
                <span className={styles.index}>0{index + 1}</span>
                <h3>{path.title}</h3>
                <p>{path.description.map((line) => <span key={line}>{line}</span>)}</p>
                <span className={styles.arrow} aria-hidden="true">→</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
