import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
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
      </Reveal>
      {!hasArtwork ? (
        <div className={styles.scrollRow}>
          <span className={styles.scrollHint} aria-hidden="true">
            <span>scroll</span>
            <ArrowDownIcon />
          </span>
        </div>
      ) : null}
      {children}
    </section>
  );
}
