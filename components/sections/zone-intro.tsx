import styles from "./zone-intro.module.css";

type ZoneIntroProps = {
  kicker: string;
  title: string;
  description: string;
  tone: "light" | "dark" | "muted";
};

export function ZoneIntro({ kicker, title, description, tone }: ZoneIntroProps) {
  return (
    <div className={`${styles.zoneIntro} ${styles[tone]}`}>
      <div className={styles.inner}>
        <p>{kicker}</p>
        <h2>{title}</h2>
        <span>{description}</span>
      </div>
    </div>
  );
}
