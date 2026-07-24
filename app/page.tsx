import Link from "next/link";
import { homeContent } from "@/content/home";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main id="main-content" className={styles.home}>
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
          {homeContent.paths.map((path) => (
            <Link key={path.href} className={`${styles.card} ${styles[path.id]}`} href={path.href}>
              <h2>{path.title}</h2>
              {"subtitle" in path ? <p>{path.subtitle}</p> : null}
            </Link>
          ))}
        </nav>
      </section>
    </main>
  );
}
