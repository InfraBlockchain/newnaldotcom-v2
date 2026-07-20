import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";
import { ufoContent } from "@/content/ufo";
import styles from "./UfoPowerGauge.module.css";

export function UfoPowerGauge() {
  const { powerGauge } = ufoContent;
  const images = [
    { src: "/images/ufo/power-run-bonus.png", alt: "Runner receiving a power bonus" },
    { src: "/images/ufo/power-run-together.png", alt: "Friends running together" },
    { src: "/images/ufo/power-run-bump.png", alt: "Two runners bumping their UFO devices" },
  ];

  return (
    <section className={styles.section} aria-label="UFO Power Gauge">
      <div className="ufo-container">
        <Reveal className={styles.header}>
          <h2 className={styles.title}>{powerGauge.title}</h2>
          <p className={styles.lead}>{powerGauge.lead}</p>
        </Reveal>
        <div className={styles.cards}>
          {powerGauge.cards.map((card, index) => (
            <Reveal key={card.num} as="article" className={styles.card} delay={index * 80}>
              <div className={styles.imageCard}>
                <Image src={images[index].src} alt={images[index].alt} fill sizes="(max-width: 767px) 100vw, 50vw" />
              </div>
              <div className={styles.cardBody}>
                <p className={styles.cardNum}>{card.num}</p>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardText}>{card.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
