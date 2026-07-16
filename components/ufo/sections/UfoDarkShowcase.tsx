import { Reveal } from "@/components/shared/Reveal";
import { ufoContent } from "@/content/ufo";
import styles from "./UfoDarkShowcase.module.css";

export function UfoDarkShowcase() {
  const { showcase } = ufoContent;

  return (
    <section className={styles.showcase}>
      <Reveal className={styles.header}>
        <p className={styles.eyebrow}>
          <span className={styles.dot} aria-hidden="true" />
          {showcase.eyebrow}
        </p>
        <h2>{showcase.title}</h2>
        <p className={styles.lead}>
          {showcase.lead.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>
      </Reveal>

      <div className={styles.grid}>
        <div className={styles.mounts}>
          {showcase.mounts.map((mount, index) => (
            <Reveal key={mount.num} as="article" className={styles.mount} delay={index * 60}>
              <div className={styles.mountMeta}>
                <span className={styles.mountNum}>{mount.num}</span>
                <span className={styles.mountTag}>{mount.tag}</span>
              </div>
              <h3>{mount.title}</h3>
              <p>{mount.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.panel} delay={120}>
          <div className={styles.signalCard}>
            <p className={styles.panelAccentLabel}>{showcase.panel.signal.label}</p>
            <p className={styles.signalSub}>{showcase.panel.signal.sub}</p>
            <p className={styles.signalText}>{showcase.panel.signal.text}</p>
          </div>

          <div className={styles.modeCard}>
            <div className={styles.modeIcon} aria-hidden="true">
              <span />
            </div>
            <div>
              <p className={styles.panelLabel}>{showcase.panel.mode.label}</p>
              <p className={styles.modeText}>{showcase.panel.mode.text}</p>
            </div>
          </div>

          <div className={styles.todayCard}>
            <p className={styles.panelLabel}>{showcase.panel.today.label}</p>
            <div className={styles.swatches} aria-hidden="true">
              {showcase.panel.today.swatches.map((swatch) => (
                <span key={swatch} style={{ backgroundColor: swatch }} />
              ))}
            </div>
            <blockquote>{showcase.panel.today.quote}</blockquote>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
