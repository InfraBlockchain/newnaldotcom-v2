import { Reveal } from "@/components/shared/Reveal";
import { ufoContent } from "@/content/ufo";
import styles from "./UfoSpecTable.module.css";

export function UfoSpecTable() {
  const { spec } = ufoContent;

  return (
    <section className={styles.section} aria-label="UFO Spec Table">
      <div className="ufo-container">
        <Reveal as="div" className={styles.panel}>
          <p className={styles.label}>{spec.label}</p>
          <h2 className={styles.title}>{spec.title}</h2>
          <dl className={styles.rows}>
            {spec.rows.map(([label, value]) => (
              <div className={styles.row} key={label}>
                <dt className={styles.rowLabel}>{label}</dt>
                <dd className={styles.rowValue}>{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
