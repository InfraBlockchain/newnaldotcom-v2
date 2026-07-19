import Image from "next/image";
import Link from "next/link";
import { HomeHero } from "@/components/home/HomeHero";
import { ProductLabel } from "@/components/home/ProductLabel";
import { homeBody } from "@/components/home/fonts";
import { homeContent } from "@/content/home";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main id="main-content" className={`${styles.home} ${homeBody.variable}`}>
      <HomeHero>
        <div className={styles.paths} aria-label="Explore Newnal products">
          {homeContent.paths.map((path) => (
            <Link key={path.href} className={`${styles.card} ${styles[path.id]}`} href={path.href}>
              <span className={styles.cardCopy}>
                <span className={styles.statement}>
                  {path.statement.map((line) => <span key={line}>{line}</span>)}
                </span>
                <h2 className={styles.cardLabel}>
                  <ProductLabel label={path.cardLabel} wordmark />
                </h2>
              </span>
              <span className={styles.chevron} aria-hidden="true">
                <Image src="/images/home/door/chevron.svg" alt="" width={42} height={42} />
              </span>
            </Link>
          ))}
        </div>
      </HomeHero>
    </main>
  );
}
