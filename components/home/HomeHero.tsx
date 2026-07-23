import Image from "next/image";
import type { ReactNode } from "react";
import { Reveal } from "@/components/shared/Reveal";
import { homeContent } from "@/content/home";
import styles from "./HomeHero.module.css";

type TitleLine = readonly {
  text: string;
  accent?: boolean;
}[];

type HomeHeroProps = {
  children?: ReactNode;
  optionOneArtwork?: boolean;
  optionTwoArtwork?: boolean;
  splitLayout?: boolean;
  titleLines?: readonly TitleLine[];
};

export function HomeHero({
  children,
  optionOneArtwork = false,
  optionTwoArtwork = false,
  splitLayout = false,
  titleLines = homeContent.hero.title,
}: HomeHeroProps) {
  const hasArtwork = optionOneArtwork || optionTwoArtwork;
  const variantClass = optionOneArtwork
    ? styles.optionOne
    : optionTwoArtwork
      ? styles.optionTwo
      : splitLayout
        ? styles.split
        : "";

  return (
    <section
      className={`${styles.hero} ${variantClass}`}
      aria-labelledby="home-title"
    >
      {hasArtwork ? (
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
          {titleLines.map((line, lineIndex) => (
            <span key={lineIndex} className={styles.titleLine}>
              {line.map((segment) => (
                <span
                  key={segment.text}
                  className={segment.accent ? styles.accent : undefined}
                >
                  {segment.text}
                </span>
              ))}
            </span>
          ))}
        </h1>
      </Reveal>
      {children}
    </section>
  );
}
