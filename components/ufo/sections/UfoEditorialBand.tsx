import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";
import { ufoContent } from "@/content/ufo";
import styles from "./UfoEditorialBand.module.css";

export function UfoEditorialBand() {
  const { editorial } = ufoContent;
  const [snapCard, week4Card] = editorial.cards;
  const cardParagraphs = (body: string | readonly string[]) => typeof body === "string" ? [body] : body;

  return (
    <section className={styles.section} aria-label="UFO Editorial Band">
      <div className="ufo-container">
        <div className={styles.stack}>
          <Reveal as="header" className={styles.header}>
            <div className={styles.headerLead}>
              <h2 className={styles.title}>{editorial.title}</h2>
            </div>
            <div className={styles.headerAside}>
              <p className={styles.quote}>{editorial.quote}</p>
              <p className={styles.support}>{editorial.support}</p>
            </div>
          </Reveal>

          <div className={styles.row}>
            <Reveal as="article" className={`${styles.card} ${styles.wide}`}>
              <div className={`${styles.media} ${styles.mediaSnap}`}>
                <Image className={styles.mediaImage} src="/images/ufo/snap-round.png" alt="Runner using a phone to capture a Snap Round target" fill sizes="(max-width: 767px) 100vw, 60vw" />
              </div>
              <div className={styles.body}>
                <h3 className={styles.cardTitle}>{snapCard.title}</h3>
                <div className={styles.cardText}>
                  {cardParagraphs(snapCard.body).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </div>
            </Reveal>
            <Reveal as="article" delay={80} className={`${styles.card} ${styles.narrow}`}>
              <div className={`${styles.media} ${styles.mediaWeek4}`}>
                <Image className={styles.mediaImage} src="/images/ufo/treasure-card-round.png" alt="UFO device touching a Treasure Card" fill sizes="(max-width: 767px) 100vw, 40vw" />
              </div>
              <div className={styles.body}>
                <h3 className={styles.cardTitle}>{week4Card.title}</h3>
                <div className={styles.cardText}>
                  {cardParagraphs(week4Card.body).map((paragraph) => {
                    const colonIndex = paragraph.indexOf(":");

                    return (
                      <p key={paragraph}>
                        {colonIndex < 0 ? paragraph : (
                          <>
                            <span className={styles.medium}>{paragraph.slice(0, colonIndex + 1)}</span>
                            {paragraph.slice(colonIndex + 1)}
                          </>
                        )}
                      </p>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
