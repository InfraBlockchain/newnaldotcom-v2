import { Reveal } from "@/components/shared/Reveal";
import { ufoContent } from "@/content/ufo";
import styles from "./UfoCreator.module.css";

export function UfoCreator() {
  const { creator } = ufoContent;

  return (
    <section className={styles.section} aria-label="UFO Creator">
      <div className="ufo-container">
        <Reveal className={styles.header}>
          <p className={styles.eyebrow}>{creator.eyebrow}</p>
          <h2 className={styles.title}>{creator.title}</h2>
          <div className={styles.body}>
            {creator.body.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </Reveal>
        <Reveal as="div" className={styles.examples} delay={80}>
          {creator.examples.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </Reveal>
        <Reveal as="p" className={styles.closing} delay={160}>
          {creator.closing}
        </Reveal>
      </div>
    </section>
  );
}
