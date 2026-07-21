import Image from "next/image";
import type { ReactNode } from "react";
import { Reveal } from "@/components/shared/Reveal";
import { homeContent } from "@/content/home";
import styles from "./HomeHero.module.css";

type HomeHeroProps = {
  children?: ReactNode;
  id?: string;
  optionOneArtwork?: boolean;
  optionTwoArtwork?: boolean;
};

export function HomeHero({
  children,
  id,
  optionOneArtwork = false,
  optionTwoArtwork = false,
}: HomeHeroProps) {
  const hasArtwork = optionOneArtwork || optionTwoArtwork;
  const variantClass = optionOneArtwork
    ? styles.optionOne
    : optionTwoArtwork
      ? styles.optionTwo
      : "";

  return (
    <section
      id={id}
      className={`${styles.hero} ${variantClass}`}
      aria-labelledby="home-title"
    >
      {hasArtwork ? (
        <span className={styles.artwork} aria-hidden="true">
          <Image
            src={optionOneArtwork ? "/images/home/door/v3-hero-bg.png" : "/images/home/door/aios-ribbon.png"}
            alt=""
            width={1200}
            height={675}
            priority
          />
        </span>
      ) : null}
      <Reveal className={styles.copy}>
        <h1 id="home-title">
          {[homeContent.hero.title].map((line) => <span key={line}>{line}</span>)}
        </h1>
        <p>
          {[homeContent.hero.sub].map((line) => <span key={line}>{line}</span>)}
        </p>
      </Reveal>
      {children}
    </section>
  );
}
