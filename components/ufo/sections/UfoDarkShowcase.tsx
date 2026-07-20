import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";
import { ufoContent } from "@/content/ufo";
import styles from "./UfoDarkShowcase.module.css";

export function UfoDarkShowcase() {
  const { showcase } = ufoContent;

  return (
    <section className={styles.showcase}>
      <Reveal className={styles.header}>
        <h2>{showcase.title}</h2>
        <div className={styles.lead}>
          {showcase.lead.map((line) => <p key={line}>{line}</p>)}
        </div>
      </Reveal>

      <div className={styles.grid}>
        <div className={styles.mounts}>
          {showcase.mounts.map((mount, index) => (
            <Reveal key={mount.num} as="article" className={`${styles.mount} ${mount.image ? styles.mountWithImage : ""}`} delay={index * 60}>
              {mount.image && <Image className={styles.mountImage} src={mount.image} alt={mount.title} fill sizes="(max-width: 900px) 50vw, 30vw" />}
              <h3>{mount.title}</h3>
              <p>{mount.text}</p>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
