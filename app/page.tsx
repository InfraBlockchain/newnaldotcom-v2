import Image from "next/image";
import { CircleStackIcon, SparklesIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { ScrollToSovereignty } from "@/components/home/ScrollToSovereignty";
import { homeV2Content as c } from "@/content/home-v2";
import styles from "./page.module.css";

const pillarIcons = [CircleStackIcon, SparklesIcon, UserGroupIcon] as const;

export default function HomePage() {
  return (
    <main id="main-content" className={styles.home} data-page="home">
      <section className={styles.hero} aria-labelledby="home-title">
        <div className={styles.heroCopy}>
          <p className={styles.heroEyebrow}>Newnal aios / AI-native operating system</p>
          <h1 id="home-title">AI 시대의 <span>운영체제를 만듭니다.</span></h1>
          <div className={styles.heroLead}>
            {c.hero.lead.map((line) => <p key={line}>{line}</p>)}
          </div>
          <div className={styles.heroBody}>
            {c.hero.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <ScrollToSovereignty className={styles.primaryAction} />
        </div>
        <div className={styles.heroNote}>
          <p>{c.hero.subtext}</p>
        </div>
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
            {c.sovereignty.choices.map((choice, index) => (
              <article key={choice.title} className={styles.choice} data-choice={index}>
                <div className={styles.choiceVisual} aria-hidden="true"><i /><i /><i /></div>
                <p className={styles.choiceNumber}>0{index + 1}</p>
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
          <div className={`${styles.bodyCopy} ${styles.pillarOverview}`}>
            {c.pillars.main.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
        <div className={styles.pillarGrid}>
          {c.pillars.items.map((pillar, index) => {
            const Icon = pillarIcons[index] ?? CircleStackIcon;

            return (
              <article key={pillar.title} className={styles.pillar} data-pillar={index}>
                <div className={styles.pillarIcon} aria-hidden="true"><Icon /></div>
                <p className={styles.pillarNumber}>{pillar.number}</p>
                <h3>{pillar.title}</h3>
                <p className={styles.pillarSummary}>{pillar.summary}</p>
                <p className={styles.pillarBody}>{pillar.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className={styles.architecture} aria-labelledby="architecture-title">
        <div className={styles.architectureHeader}>
          <p className={styles.sectionLabel}>{c.architecture.eyebrow}</p>
          <h2 id="architecture-title">기존 시스템을 버리지 않고,<span>AI-native layer를 더합니다.</span></h2>
        </div>
        <div className={styles.architectureDetails}>
          <div className={styles.architectureCopy}>
          <div className={styles.bodyCopy}>
            {c.architecture.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <p className={styles.continuity}>{c.architecture.statement}</p>
          <p className={styles.architectureClosing}>{c.architecture.closing}</p>
          </div>
          <div className={styles.proof}>
            <p>{c.architecture.subtext}</p>
            <ul>
              {c.architecture.proof.map((point) => (
                <li key={point.value}>
                  <strong>{point.value}</strong>
                  <span>{point.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.partnerDevices} aria-labelledby="partner-devices-title">
        <div className={styles.partnerHeader}>
          <div>
            <p className={styles.sectionLabel}>{c.partnerDevices.eyebrow}</p>
            <h2 id="partner-devices-title">{c.partnerDevices.title}</h2>
          </div>
          <div className={styles.bodyCopy}>
            {c.partnerDevices.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
        <div className={styles.deviceExamples}>
          {c.partnerDevices.examples.map((device, index) => (
            <article key={device.title} className={styles.deviceExample}>
              <div className={styles.deviceCopy}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{device.title}</h3>
                <p>{device.body}</p>
              </div>
            </article>
          ))}
        </div>
        <div className={styles.partnerClosing}>
          {c.partnerDevices.subtext.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>

      <section className={styles.privatePhone} aria-labelledby="private-phone-title">
        <div className={styles.privateHeader}>
          <div>
            <p className={styles.sectionLabel}>{c.privatePhone.eyebrow}</p>
            <h2 id="private-phone-title">{c.privatePhone.title}</h2>
          </div>
          <div className={styles.bodyCopy}>
            {c.privatePhone.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
        <div className={styles.technologyList}>
          {c.privatePhone.technologies.map((technology) => (
            <article key={technology.number} className={styles.technology}>
              <p>{technology.number}</p>
              <h3>{technology.title}</h3>
              <span>{technology.body}</span>
            </article>
          ))}
        </div>
        <p className={styles.privateClosing}>{c.privatePhone.subtext}</p>
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

      <section className={styles.story} aria-labelledby="story-title">
        <div className={styles.storyHeader}>
          <h2 id="story-title">{c.story.title}</h2>
          <div className={styles.bodyCopy}>
            {c.story.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
        <div className={styles.storyDetails}>
          <div className={styles.storySubtext}>
            {c.story.subtext.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <ol className={styles.milestones}>
            {c.story.milestones.map((milestone) => (
              <li key={milestone.year}>
                <strong>{milestone.year}</strong>
                <span>{milestone.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.coovProof} aria-labelledby="coov-title">
        <div className={styles.coovHeader}>
          <p className={styles.sectionLabel}>COOV</p>
          <h2 id="coov-title">{c.coov.title}</h2>
        </div>
        <div className={styles.coovDetails}>
          <div className={styles.bodyCopy}>
            {c.coov.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <figure className={styles.coovDiagram}>
            <Image src={c.coov.image} alt="COOV blockchain-based COVID vaccine pass verification flow" width={760} height={514} sizes="(max-width: 767px) 100vw, 58vw" />
          </figure>
        </div>
      </section>
    </main>
  );
}
