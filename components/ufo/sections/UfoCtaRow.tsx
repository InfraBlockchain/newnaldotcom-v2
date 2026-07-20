import { Reveal } from "@/components/shared/Reveal";
import { ufoContent } from "@/content/ufo";
import styles from "./UfoCtaRow.module.css";

export function UfoCtaRow() {
  const { cta } = ufoContent;

  return (
    <section className={styles.section} aria-label="UFO CTA Row">
      <div className="ufo-container">
        <Reveal as="div" className={styles.row}>
          <a className={styles.primary} href="mailto:contact@newnal.com?subject=Get%20UFO">
            {cta.primary}
          </a>
          <a className={styles.secondary} href="#main-content">
            {cta.secondary}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
