import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { HomeHero } from "@/components/home/HomeHero";
import { ProductLabel } from "@/components/home/ProductLabel";
import { ScrollIndicator } from "@/components/home/ScrollIndicator";
import { homeBody } from "@/components/home/fonts";
import { homeContent } from "@/content/home";
import styles from "./page.module.css";

const SECTIONS = [
  { id: "home-hero", label: "Intro" },
  { id: "home-paths", label: "Products" },
];

export default function HomePage() {
  return (
    <main id="main-content" className={`${styles.home} ${homeBody.variable}`}>
      <div className={styles.scrollRoot}>
        <HomeHero optionOneArtwork id="home-hero" />
        <section id="home-paths" className={styles.pathsSection} aria-label="Explore Newnal products">
          <div className={styles.paths}>
            {homeContent.paths.map((path) => (
              <Link key={path.href} className={`${styles.card} ${styles[path.id]}`} href={path.href}>
                <span className={styles.imageLayer} aria-hidden="true">
                  <Image
                    src={path.hoverImage}
                    alt=""
                    fill
                    sizes="(max-width: 767px) 100vw, 55vw"
                  />
                </span>
                <span className={styles.cardCopy}>
                  <span className={styles.statement}>
                    {path.statement.map((line) => <span key={line}>{line}</span>)}
                  </span>
                  <h2 className={styles.cardLabel}>
                    <ProductLabel label={path.cardLabel} wordmark />
                  </h2>
                </span>
                <span className={styles.chevron} aria-hidden="true">
                  <ArrowUpRightIcon />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <ScrollIndicator sections={SECTIONS} />
    </main>
  );
}
