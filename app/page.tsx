import Link from "next/link";
import Image from "next/image";
import { EmphasizedText } from "@/components/shared/EmphasizedText";
import { Reveal } from "@/components/shared/Reveal";
import { homeContent } from "@/content/home";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main id="main-content" className={styles.home}>
      <section className={styles.hero} aria-labelledby="home-title">
        <Reveal className={styles.heroCopy}>
          <h1 id="home-title"><EmphasizedText text={homeContent.hero.title} emphasis={homeContent.hero.emphasis} /></h1>
          <p>{homeContent.hero.sub.map((line) => <span key={line}>{line}</span>)}</p>
        </Reveal>
      </section>
      <section className={styles.paths} aria-label="Explore Newnal products">
        {homeContent.paths.map((path, index) => (
          <Reveal key={path.href} delay={index * 80} className={styles.pathReveal}>
            <Link className={`${styles.card} ${styles[path.tone]}`} href={path.href}>
              <div><h2>{path.title}</h2><p>{path.description.map((line) => <span key={line}>{line}</span>)}</p></div>
              {path.tone === "private" && (
                <Image
                  className={styles.privatePhone}
                  src="/images/home/private-phone-card.png"
                  alt=""
                  width={1573}
                  height={2066}
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
              )}
              {path.tone === "devices" && (
                <Image
                  className={styles.companionDevice}
                  src="/images/home/companion-device-card.png"
                  alt=""
                  width={639}
                  height={415}
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
              )}
              <span className={styles.arrow} aria-hidden="true">→</span>
            </Link>
          </Reveal>
        ))}
      </section>
    </main>
  );
}
