import { ReactNode } from "react";
import styles from "./section-shell.module.css";

type SectionShellProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
}: SectionShellProps) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 className={styles.title}>{title}</h2>
          {description ? <p className={styles.description}>{description}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
