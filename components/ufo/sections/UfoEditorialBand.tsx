import { Reveal } from "@/components/shared/Reveal";
import { ufoContent } from "@/content/ufo";
import styles from "./UfoEditorialBand.module.css";

export function UfoEditorialBand() {
  const { editorial } = ufoContent;
  const [snapCard, week4Card, realWorldCard, searchFlowCard] = editorial.cards;

  return (
    <section className={styles.section} aria-label="UFO Editorial Band">
      <div className="ufo-container">
        <div className={styles.stack}>
          <Reveal as="header" className={styles.header}>
            <div className={styles.headerLead}>
              <p className={styles.eyebrow}>{editorial.eyebrow}</p>
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
                <div className={styles.mediaBadgeCard}>
                  <p className={styles.mediaBadgeLabel}>{snapCard.media.badge}</p>
                  <p className={styles.mediaBadgeCaption}>{snapCard.media.caption}</p>
                </div>
              </div>
              <div className={styles.body}>
                <p className={styles.cardLabel}>{snapCard.label}</p>
                <h3 className={styles.cardTitle}>{snapCard.title}</h3>
                <p className={styles.cardText}>{snapCard.body}</p>
              </div>
            </Reveal>
            <Reveal as="article" delay={80} className={`${styles.card} ${styles.narrow}`}>
              <div className={`${styles.media} ${styles.mediaWeek4}`}>
                <p className={styles.mediaLabelMint}>{week4Card.media.badge}</p>
                <p className={styles.mediaCaptionMuted}>{week4Card.media.caption}</p>
                <p className={styles.mediaSerif}>{week4Card.media.editorial}</p>
              </div>
              <div className={styles.body}>
                <p className={styles.cardLabel}>{week4Card.label}</p>
                <h3 className={styles.cardTitle}>{week4Card.title}</h3>
                <p className={styles.cardText}>{week4Card.body}</p>
              </div>
            </Reveal>
          </div>

          <div className={styles.row}>
            <Reveal as="article" className={`${styles.card} ${styles.narrow}`}>
              <div className={`${styles.media} ${styles.mediaRealWorld}`}>
                <p className={styles.mediaLabelDeep}>{realWorldCard.media.badge}</p>
                <div className={styles.swatches} aria-hidden="true">
                  {realWorldCard.media.swatches.map((color) => (
                    <span key={color} className={styles.swatch} style={{ background: color }} />
                  ))}
                </div>
              </div>
              <div className={styles.body}>
                <p className={styles.cardLabel}>{realWorldCard.label}</p>
                <h3 className={styles.cardTitle}>{realWorldCard.title}</h3>
                <p className={styles.cardText}>{realWorldCard.body}</p>
              </div>
            </Reveal>
            <Reveal as="article" delay={80} className={`${styles.card} ${styles.wide}`}>
              <div className={`${styles.media} ${styles.mediaSearchFlow}`}>
                <p className={styles.mediaLabelMint}>{searchFlowCard.media.badge}</p>
                <p className={styles.mediaCaptionLight}>{searchFlowCard.media.caption}</p>
                {searchFlowCard.media.equalizer && (
                  <div className={styles.equalizer} aria-hidden="true">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                )}
              </div>
              <div className={styles.body}>
                <p className={styles.cardLabel}>{searchFlowCard.label}</p>
                <h3 className={styles.cardTitle}>{searchFlowCard.title}</h3>
                <p className={styles.cardText}>{searchFlowCard.body}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
