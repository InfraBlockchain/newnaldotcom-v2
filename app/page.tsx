import Image from "next/image";
import Link from "next/link";
import { homeV2Content as c } from "@/content/home-v2";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main id="main-content" className={styles.home} data-page="home">
      <section className={styles.hero} aria-labelledby="home-title">
        <div className={styles.heroCopy}>
          <h1 id="home-title">AI 시대의 <span>운영체제를 만듭니다.</span></h1>
          <div className={styles.heroLead}>
            {c.hero.lead.map((line) => <p key={line}>{line}</p>)}
          </div>
          <div className={styles.heroBody}>
            {c.hero.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <Link className={styles.primaryAction} href="#data-sovereignty">
            Newnal aios 소개 보기 <span aria-hidden="true">↓</span>
          </Link>
        </div>
        <p className={styles.heroNote}>{c.hero.subtext}</p>
      </section>

      <section id="data-sovereignty" className={styles.sovereignty} aria-labelledby="sovereignty-title">
        <div className={styles.sectionIntro}>
          <p className={styles.sectionLabel}>{c.sovereignty.eyebrow}</p>
          <h2 id="sovereignty-title">{c.sovereignty.title}</h2>
        </div>
        <div className={styles.sovereigntyContent}>
          <div className={styles.bodyCopy}>
            {c.sovereignty.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <p className={styles.sectionSummary}>{c.sovereignty.subtext}</p>
          <div className={styles.choiceGrid}>
            {c.sovereignty.choices.map((choice) => (
              <article key={choice.title} className={styles.choice}>
                <h3>{choice.title}</h3>
                <p>{choice.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.why} aria-labelledby="why-title">
        <div className={styles.whyHeader}>
          <p className={styles.sectionLabel}>{c.why.eyebrow}</p>
          <h2 id="why-title">{c.why.title}</h2>
        </div>
        <div className={styles.eraLine} aria-hidden="true">
          <span>PC</span>
          <i />
          <span>Mobile</span>
          <i />
          <strong>AI</strong>
        </div>
        <div className={styles.whyContent}>
          <div className={styles.bodyCopy}>
            {c.why.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <p className={styles.whySummary}>{c.why.subtext}</p>
        </div>
      </section>

      <section className={styles.pillars} aria-labelledby="pillars-title">
        <div className={styles.sectionIntro}>
          <p className={styles.sectionLabel}>{c.pillars.eyebrow}</p>
          <h2 id="pillars-title">{c.pillars.title}</h2>
          <p className={styles.pillarIntro}>{c.pillars.intro}</p>
        </div>
        <div className={styles.pillarGrid}>
          {c.pillars.items.map((pillar) => (
            <article key={pillar.title} className={styles.pillar}>
              <p className={styles.pillarNumber}>{pillar.number}</p>
              <h3>{pillar.title}</h3>
              <p className={styles.pillarSummary}>{pillar.summary}</p>
              <p className={styles.pillarBody}>{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.architecture} aria-labelledby="architecture-title">
        <div className={styles.architectureCopy}>
          <p className={styles.sectionLabel}>{c.architecture.eyebrow}</p>
          <h2 id="architecture-title">{c.architecture.title}</h2>
          <div className={styles.bodyCopy}>
            {c.architecture.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <p className={styles.continuity}>{c.architecture.statement}</p>
        </div>
        <div className={styles.diagram}>
          <Image
            src="/images/aios/os-architecture.png"
            alt="기존 모바일 운영체제에 Newnal AI 컴퓨팅 계층을 더하는 구조"
            fill
            sizes="(max-width: 767px) 100vw, 58vw"
          />
        </div>
        <div className={styles.proof}>
          <p>{c.architecture.subtext}</p>
          <ul>
            {c.architecture.proof.map((point) => <li key={point}>{point}</li>)}
          </ul>
        </div>
      </section>

      <section className={styles.projects} aria-labelledby="projects-title">
        <div className={styles.sectionIntro}>
          <p className={styles.sectionLabel}>{c.projects.eyebrow}</p>
          <h2 id="projects-title">{c.projects.title}</h2>
        </div>
        <div className={styles.projectGrid}>
          {c.projects.items.map((project) => (
            <Link key={project.title} className={styles.project} href={project.href}>
              <div className={styles.projectCopy}>
                <h3>{project.title}</h3>
                <p>{project.body}</p>
                <span className={styles.projectArrow} aria-hidden="true">↗</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.company} aria-labelledby="company-title">
        <div>
          <p className={styles.sectionLabel}>{c.company.eyebrow}</p>
          <h2 id="company-title">{c.company.title}</h2>
        </div>
        <div className={styles.companyCopy}>
          <div className={styles.bodyCopy}>
            {c.company.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className={styles.companySubtext}>
            {c.company.subtext.map((line) => <p key={line}>{line}</p>)}
          </div>
          <div className={styles.companyActions}>
            {c.company.actions.map((action, index) => (
              <a
                key={action.label}
                className={index === 0 ? styles.companyActionPrimary : styles.companyAction}
                href={`mailto:contact@newnal.com?subject=${encodeURIComponent(action.subject)}`}
              >
                {action.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
