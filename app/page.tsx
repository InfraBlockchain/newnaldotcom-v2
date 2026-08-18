import Image from "next/image";
import Link from "next/link";
import { homeContent } from "@/content/home";
import styles from "./page.module.css";

const productDetails = {
  aios: "A personal operating system where your data and intelligence stay yours.",
  devices: "Companions designed for the people, places, and moments that matter.",
  private: "A phone number that lets you decide what stays private.",
} as const;

export default function HomePage() {
  return (
    <main id="main-content" className={styles.home} data-page="home">
      <section className={styles.hero} aria-labelledby="home-title">
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>Newnal aios</p>
          <h1 id="home-title">
            The new AI
            <span>computing era.</span>
          </h1>
          <p className={styles.heroLead}>
            Newnal aios leads the way with intelligence that belongs to you.
          </p>
          <Link className={styles.primaryAction} href="/aios">
            Explore Newnal aios <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className={styles.heroArtwork}>
          <Image
            src="/images/home/door/v3-hero-bg.png"
            alt="An abstract flowing form representing connected intelligence"
            fill
            priority
            sizes="(max-width: 767px) 100vw, 62vw"
          />
        </div>
        <p className={styles.heroNote}>Personal intelligence. Under your control.</p>
      </section>

      <section className={styles.belief} aria-labelledby="belief-title">
        <p className={styles.sectionLabel}>A different starting point</p>
        <div className={styles.beliefStatement}>
          <h2 id="belief-title">
            Your data is not a resource to extract.
            <span>It is the context for a life only you can define.</span>
          </h2>
          <p>
            Newnal aios connects your data and AI across every device, while keeping ownership where it belongs.
          </p>
        </div>
      </section>

      <section className={styles.catalog} aria-labelledby="catalog-title">
        <div className={styles.catalogHeading}>
          <p className={styles.sectionLabel}>The Newnal system</p>
          <h2 id="catalog-title">One intelligence. Three ways in.</h2>
        </div>
        <nav className={styles.productGrid} aria-label="Explore Newnal products">
          {homeContent.paths.map((path) => (
            <Link key={path.id} className={`${styles.product} ${styles[path.id]}`} href={path.href}>
              <Image
                className={styles.productImage}
                src={path.image}
                alt=""
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 34vw"
              />
              <span className={styles.productShade} aria-hidden="true" />
              <span className={styles.productMeta}>
                <span>{path.title}</span>
                <span className={styles.productArrow} aria-hidden="true">↗</span>
              </span>
              <span className={styles.productCopy}>
                <strong>{path.id === "aios" ? "Newnal aios" : path.title}</strong>
                <span>{productDetails[path.id]}</span>
              </span>
            </Link>
          ))}
        </nav>
      </section>

      <section className={styles.companions} aria-labelledby="companions-title">
        <div className={styles.companionVisual}>
          <Image
            src="/images/devices/hero-companions.png"
            alt="The Newnal companion device family"
            fill
            sizes="(max-width: 767px) 100vw, 58vw"
          />
        </div>
        <div className={styles.companionCopy}>
          <p className={styles.sectionLabel}>Companion devices</p>
          <h2 id="companions-title">Made for the lives you actually live.</h2>
          <div className={styles.audience}>
            <p>For the artist you love.</p>
            <p>For the family you care for.</p>
            <p>For the world waiting outside.</p>
            <p>For the little ones you raise.</p>
          </div>
          <Link className={styles.textAction} href="/devices">
            Meet the companions <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className={styles.closing} aria-labelledby="closing-title">
        <p className={styles.sectionLabel}>Built around you</p>
        <h2 id="closing-title">A more personal future starts with what you choose to keep.</h2>
        <Link className={styles.closingAction} href="/private-phone">
          Discover Private Phone <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}
