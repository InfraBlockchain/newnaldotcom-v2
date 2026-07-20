import Image from "next/image";
import type { ReactNode } from "react";
import { Reveal } from "@/components/shared/Reveal";
import { homeContent } from "@/content/home";
import styles from "./HomeHero.module.css";

type HomeHeroProps = {
  children?: ReactNode;
  optionOneArtwork?: boolean;
};

export function HomeHero({ children, optionOneArtwork = false }: HomeHeroProps) {
  return (
    <section
      className={`${styles.hero} ${optionOneArtwork ? styles.optionOne : ""}`}
      aria-labelledby="home-title"
    >
      {optionOneArtwork ? (
        <span className={styles.artwork} aria-hidden="true">
          <Image
            src="/images/home/door/aios-ribbon.png"
            alt=""
            width={1024}
            height={1024}
            priority
          />
        </span>
      ) : null}
      <Reveal className={styles.copy}>
        <h1 id="home-title">
          {homeContent.hero.title.map((line) => <span key={line}>{line}</span>)}
        </h1>
        <p>
          {homeContent.hero.sub.map((line) => <span key={line}>{line}</span>)}
        </p>
      </Reveal>
      {children}
    </section>
  );
}
