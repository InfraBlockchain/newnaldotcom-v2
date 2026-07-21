import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";
import { ufoContent } from "@/content/ufo";
import styles from "./UfoSpecTable.module.css";

export function UfoSpecTable() {
  const { spec } = ufoContent;

  return (
    <section className={styles.section} aria-label="UFO Spec Table">
      <div className="ufo-container">
        <Reveal className={styles.heading}>
          <p className={styles.label}>{spec.label}</p>
          <h2 className={styles.title}>{spec.title}</h2>
        </Reveal>
        <div className={styles.specGrid}>
          <Reveal className={styles.specTable}>
            <dl className={styles.rows}>
            {spec.rows.map(([label, value]) => (
              <div className={styles.row} key={label}>
                <dt className={styles.rowLabel}>{label}</dt>
                <dd className={styles.rowValue}>{value}</dd>
              </div>
            ))}
            </dl>
          </Reveal>
          <Reveal className={styles.deviceRender} delay={100}>
            <Image src="/images/ufo/spec-device.png" alt="UFO adventure device" fill sizes="(max-width: 767px) 100vw, 40vw" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
