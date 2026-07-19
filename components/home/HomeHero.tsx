import type { ReactNode } from "react";
import { Reveal } from "@/components/shared/Reveal";
import { homeContent } from "@/content/home";
import styles from "./HomeHero.module.css";

type HomeHeroProps = {
  children?: ReactNode;
};

export function HomeHero({ children }: HomeHeroProps) {
  return (
    <section className={styles.hero} aria-labelledby="home-title">
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
