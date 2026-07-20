import Image from "next/image";
import Link from "next/link";
import { HomeHero } from "@/components/home/HomeHero";
import { ProductLabel } from "@/components/home/ProductLabel";
import { homeBody } from "@/components/home/fonts";
import { homeContent } from "@/content/home";
import styles from "./page.module.css";

const bannerArtwork = {
  aios: "/images/home/door/opt1-aios-card.png",
  devices: "/images/home/door/opt2-companion-banner.png",
  private: "/images/home/door/opt1-private-phone-card.png",
} as const;

export default function HomeOptionTwoPage() {
  return (
    <main id="main-content" className={`${styles.home} ${homeBody.variable}`}>
      <HomeHero optionTwoArtwork />
      <section className={styles.banners} aria-label="Explore Newnal products">
        {homeContent.paths.map((path, index) => (
          <Link key={path.href} className={`${styles.banner} ${styles[path.id]}`} href={path.href}>
            <span className={styles.imageLayer} aria-hidden="true">
              <Image
                src={bannerArtwork[path.id]}
                alt=""
                fill
                sizes="100vw"
                priority={index === 0}
              />
            </span>
            <span className={styles.bannerCopy}>
              <h2 className={styles.productName}>
                <ProductLabel label={path.bannerLabel} />
              </h2>
              <span className={styles.statement}>
                {path.statement.map((line) => <span key={line}>{line}</span>)}
              </span>
            </span>
            <span className={styles.learnMore}>{homeContent.learnMore}</span>
          </Link>
        ))}
      </section>
    </main>
  );
}
