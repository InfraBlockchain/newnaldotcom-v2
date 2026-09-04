import Image from "next/image";
import { ScrollToSovereignty } from "@/components/home/ScrollToSovereignty";
import { homeV2Content as c } from "@/content/home-v2";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main id="main-content" className={styles.home} data-page="home">
      <section className={styles.hero} aria-labelledby="home-title">
        <div className={styles.heroCopy}>
          <h1 id="home-title">{c.hero.title}</h1>
          <div className={styles.heroBody}>
            {c.hero.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <ScrollToSovereignty className={styles.primaryAction} />
        </div>
      </section>

      <section id="data-sovereignty" className={`${styles.section} ${styles.devices}`} aria-labelledby="devices-title">
        <div className={styles.sectionHeading}>
          <h2 id="devices-title">{c.devices.title}</h2>
        </div>
        <div className={styles.scenarioGrid}>
          {c.devices.scenarios.map((scenario) => (
            <article key={scenario.title} className={styles.scenarioCard}>
              <Image className={styles.scenarioImage} src={scenario.image} alt={scenario.title} fill sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 33vw" />
              <div className={styles.scenarioMeta}>
                <h3>{scenario.title}</h3>
              </div>
            </article>
          ))}
        </div>
        <p className={styles.sectionClosing}>{c.devices.closing}</p>
      </section>

      <section className={`${styles.section} ${styles.aios}`} aria-labelledby="aios-title">
        <div className={styles.sectionHeading}>
          <h2 id="aios-title">{c.aios.title}</h2>
        </div>
        <p className={styles.leadCopy}>{c.aios.body}</p>
        <div className={styles.pillarGrid}>
          {c.aios.pillars.map((pillar, index) => (
            <article key={pillar.title} className={styles.pillar}>
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.manufacturing}`} aria-labelledby="manufacturing-title">
        <div className={styles.splitSection}>
          <h2 id="manufacturing-title">{c.manufacturing.title}</h2>
          <div className={styles.bodyCopy}>
            {c.manufacturing.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.security}`} aria-labelledby="security-title">
        <div className={styles.splitSection}>
          <h2 id="security-title">{c.security.title}</h2>
          <div className={styles.bodyCopy}>
            {c.security.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.proof}`} aria-labelledby="proof-title">
        <div className={styles.sectionHeading}>
          <h2 id="proof-title">{c.proof.title}</h2>
        </div>
        <dl className={styles.metricGrid}>
          {c.proof.metrics.map((metric) => (
            <div key={metric.label}>
              <dt>{metric.value}</dt>
              <dd>{metric.label}</dd>
            </div>
          ))}
        </dl>
        <p className={styles.proofCopy}>{c.proof.body}</p>
      </section>

      <section className={`${styles.section} ${styles.partnership}`} aria-labelledby="partnership-title">
        <div className={styles.sectionHeading}>
          <h2 id="partnership-title">{c.partnership.title}</h2>
        </div>
        <p className={styles.leadCopy}>{c.partnership.introduction}</p>
        <div className={styles.responsibilityTable} role="table" aria-label="파트너와 뉴날의 역할">
          <div className={styles.tableHead} role="row">
            <span role="columnheader">파트너</span>
            <span role="columnheader">뉴날</span>
          </div>
          {c.partnership.responsibilities.map((responsibility) => (
            <div key={responsibility.partner} className={styles.tableRow} role="row">
              <span role="cell">{responsibility.partner}</span>
              <span role="cell">{responsibility.newnal}</span>
            </div>
          ))}
        </div>
        <p className={styles.partnershipCopy}>{c.partnership.body}</p>
        <h3 className={styles.formHeading}>{c.partnership.closing}</h3>
        <div className={styles.formTable} role="table" aria-label="협력 형태">
          <div className={styles.tableHead} role="row">
            <span role="columnheader">협력 형태</span>
            <span role="columnheader">이런 기업과 함께합니다</span>
          </div>
          {c.partnership.forms.map((form) => (
            <div key={form.form} className={styles.tableRow} role="row">
              <span role="cell">{form.form}</span>
              <span role="cell">{form.target}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.company}`} aria-labelledby="company-title">
        <div className={styles.splitSection}>
          <h2 id="company-title">{c.company.title}</h2>
          <p className={styles.bodyCopy}>{c.company.body}</p>
        </div>
      </section>

      <section className={`${styles.contact} ${styles.section}`} aria-labelledby="contact-title">
        <div>
          <h2 id="contact-title">{c.contact.label}</h2>
          <a href={`mailto:${c.contact.email}`} className={styles.email}>{c.contact.email} <span aria-hidden="true">↗</span></a>
        </div>
        <p>{c.contact.closing}</p>
      </section>
    </main>
  );
}
