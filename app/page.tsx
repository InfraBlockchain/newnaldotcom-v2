import Link from "next/link";
import { homeContent } from "@/content/home";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main id="main-content" className={styles.home} data-page="home">
      <section className={styles.homeSection} aria-labelledby="home-title">
        <div className={styles.heading}>
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
        </div>
        <nav className={styles.productGrid} aria-label="Explore Newnal products">
          {homeContent.paths.map((path, index) => (
            <Link key={path.href} className={`${styles.card} ${styles[path.id]}`} href={path.href}>
              <span className={styles.cardNumber}>0{index + 1}</span>
              <span className={styles.cardGlow} aria-hidden="true" />
              <div className={styles.cardCopy}>
                <h2>{path.title}</h2>
                {"subtitle" in path ? <p>{path.subtitle}</p> : null}
                <p className={styles.cardStatement}>
                  {path.statement.map((line) => <span key={line}>{line}</span>)}
                </p>
              </div>
              <span className={styles.cardArrow} aria-hidden="true">↗</span>
            </Link>
          ))}
        </nav>
      </section>
    </main>
  );
}
