import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { HomeHero } from "@/components/home/HomeHero";
import { homeContent } from "@/content/home";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main id="main-content" className={styles.home}>
      <HomeHero
        splitLayout
        titleLines={homeContent.heroV3.title}
      >
        <div className={styles.accordion} aria-label="Explore Newnal products">
          {homeContent.accordionPaths.map((path, index) => (
            <Link key={path.href} className={`${styles.row} ${styles[path.id]}`} href={path.href}>
              <span className={styles.rowImage} aria-hidden="true">
                <Image
                  src={path.image}
                  alt=""
                  fill
                  sizes="(max-width: 900px) 100vw, 620px"
                  priority={index === 0}
                />
              </span>
              <span className={styles.rowCopy}>
                <span className={styles.rowTitle}>
                  {path.title.map((line) => <span key={line}>{line}</span>)}
                </span>
                <span className={styles.rowSubtitle}>
                  <span>
                    {path.subtitle.map((line) => <span key={line}>{line}</span>)}
                  </span>
                </span>
              </span>
              <span className={styles.rowArrow} aria-hidden="true">
                <ArrowUpRightIcon />
              </span>
            </Link>
          ))}
        </div>
      </HomeHero>
    </main>
  );
}
