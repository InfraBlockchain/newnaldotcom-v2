import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { HomeHero } from "@/components/home/HomeHero";
import { ProductLabel } from "@/components/home/ProductLabel";
import { homeBody } from "@/components/home/fonts";
import { homeContent } from "@/content/home";
import styles from "./page.module.css";

const cardArtwork = {
  aios: "/images/home/door/opt1-aios-card.png",
  devices: "/images/home/door/opt1-companion-card.png",
  private: "/images/home/door/opt1-private-phone-card.png",
} as const;

export default function HomePage() {
  return (
    <main id="main-content" className={`${styles.home} ${homeBody.variable}`}>
      <HomeHero optionOneArtwork>
        <div className={styles.paths} aria-label="Explore Newnal products">
          {homeContent.paths.map((path, index) => (
            <Link key={path.href} className={`${styles.card} ${styles[path.id]}`} href={path.href}>
              <span className={styles.imageLayer} aria-hidden="true">
                <Image
                  src={cardArtwork[path.id]}
                  alt=""
                  fill
                  sizes="(max-width: 767px) 100vw, calc(100vw - 160px)"
                  priority={index === 0}
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
                <ChevronRightIcon />
              </span>
            </Link>
          ))}
        </div>
      </HomeHero>
    </main>
  );
}
