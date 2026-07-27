import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  ArrowDownTrayIcon,
  ArrowRightEndOnRectangleIcon,
  ArrowUpRightIcon,
  CheckCircleIcon,
  CircleStackIcon,
  CreditCardIcon,
  KeyIcon,
  PencilSquareIcon,
  Squares2X2Icon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { IpPortfolio } from "@/components/shared/IpPortfolio";
import { Reveal } from "@/components/shared/Reveal";
import { Spectrum } from "./Spectrum";
import { StepCarousel } from "./StepCarousel";
import { aiosContent as c } from "@/content/aios";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "Newnal aios", description: c.hero.sub.replace("\n", " ") };

const whitepaperLinks: Record<string, string> = {
  "Newnal Web3 ai Technical Whitepaper": "https://infrablockchain.net/documents/web3ai-newnal/Web3ai-Newnal-Tech-1-Web3-ai.pdf",
  "Newnal Web3 ai OS Technical Whitepaper": "https://infrablockchain.net/documents/web3ai-newnal/Web3ai-Newnal-Tech-2-Web3-ai-OS.pdf",
  "Newnal Web3 Telecom Technical Whitepaper": "https://infrablockchain.net/documents/web3ai-newnal/Web3ai-Newnal-Tech-3-Web3-Telecom.pdf",
  "Newnal ai Agent Place Technical Whitepaper": "https://infrablockchain.net/documents/web3ai-newnal/Web3ai-Newnal-Tech-4-Newnal-ai-Agent-Place.pdf",
  "Newnal InfraBlockchain Technical Whitepaper": "https://infrablockchain.net/documents/web3ai-newnal/Web3ai-Newnal-Tech-5-InfraBlockchain.pdf",
};

const eras = [
  ["1995", "Windows 95", "Personal Computing Era"],
  ["2007", "iOS", "Mobile Computing Era"],
  ["NOW", "Newnal AIOS", "AI Computing Era"],
] as const;

function SovereigntyText({ text }: { text: string }) {
  return text.split(/(Newnal AIOS|Newnal Private Phone|defensive sovereignty)/g).map((part, index) => {
    if (part === "defensive sovereignty") return <strong key={`${part}-${index}`}>{part}</strong>;
    if (part === "Newnal AIOS" || part === "Newnal Private Phone") return <span key={`${part}-${index}`}>{part}</span>;
    return part;
  });
}

function EraTimeline() {
  return (
    <div className={styles.timeline} role="img" aria-label="Operating system timeline from Windows 95 to iOS to Newnal AIOS">
      <div className={styles.timelineTrack} aria-hidden="true" />
      {eras.map(([year, os, era], index) => (
        <div className={`${styles.eraPoint} ${index === eras.length - 1 ? styles.current : ""}`} key={os}>
          <div className={styles.eraNode}>
            <span>{year}</span>
            <strong>{os}</strong>
          </div>
          <small>{era}</small>
        </div>
      ))}
    </div>
  );
}

const stepIcons = [ArrowDownTrayIcon, ArrowRightEndOnRectangleIcon, KeyIcon, CheckCircleIcon, CreditCardIcon] as const;

function StepIcon({ index }: { index: number }) {
  const Icon = stepIcons[index] ?? stepIcons[stepIcons.length - 1];
  return <Icon className={styles.stepIcon} aria-hidden="true" />;
}

function Lines({ text }: { text: string }) {
  return text.split("\n").map((line, index) => <span key={`${line}-${index}`}>{line}</span>);
}

function Paragraphs({ items }: { items: readonly string[] }) {
  return items.map((paragraph, index) => <p key={`${index}-${paragraph}`}><Lines text={paragraph} /></p>);
}

function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className={styles.lowerTitle}>{children}</h2>;
}

function PillarEyebrow({ children }: { children: ReactNode }) {
  return <p className={styles.pillarEyebrow}>{children}</p>;
}

const problemIcons = { silos: Squares2X2Icon, layer: CircleStackIcon, input: PencilSquareIcon, agent: UserGroupIcon } as const;

function ProblemIcon({ icon }: { icon: keyof typeof problemIcons }) {
  const Icon = problemIcons[icon];
  return <Icon className={styles.problemCardIcon} aria-hidden="true" />;
}

export default function AiosPage() {
  return (
    <main id="main-content" className={styles.page}>
      <section className={styles.hero}>
        <Reveal className={styles.heroInner}>
          <h1><Lines text={c.hero.title} /></h1>
          <p><Lines text={c.hero.sub} /></p>
        </Reveal>
      </section>

      <section className={styles.sovereignty}>
        <div className={styles.aiosContainer}>
          <Reveal><h2>{c.sovereignty.title}</h2></Reveal>
          <div className={styles.sovereigntyGrid}>
            <Reveal className={styles.sovereigntyCopy}>
              {c.sovereignty.paragraphs.map((paragraph) => <p key={paragraph}><SovereigntyText text={paragraph} /></p>)}
            </Reveal>
            <Reveal delay={80}><Spectrum /></Reveal>
          </div>
          <Reveal className={styles.bridge}>
            <p>{c.sovereignty.bridge}</p>
            <div className={styles.sovereigntyCards}>
              {c.sovereignty.cards.map(([title, text]) => (
                <article key={title}>
                  <span>{title}</span>
                  <h3>{text}</h3>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className={styles.era}>
        <div className={styles.aiosContainer}>
          <Reveal><h2>{c.era.title}</h2></Reveal>
          <div className={styles.eraGrid}>
            <Reveal className={styles.eraCopy}>
              <p>{c.era.subhead}</p>
              <Paragraphs items={c.era.paragraphs} />
              <p>{c.era.conclusion}</p>
            </Reveal>
            <Reveal delay={80}><EraTimeline /></Reveal>
          </div>
        </div>
      </section>

      <div className={styles.lowerSections}>
        <section className={styles.problem}>
          <div className={styles.aiosContainer}>
            <Reveal className={styles.centeredSection}>
              <SectionTitle>{c.structuralProblem.title}</SectionTitle>
              <Paragraphs items={c.structuralProblem.paragraphs} />
            </Reveal>
            <div className={styles.problemGrid}>
              {c.structuralProblem.cards.map((card, index) => (
                <Reveal key={card.title} delay={index * 70}>
                  <article>
                    <span className={styles.standardBadge}>{card.number}</span>
                    <ProblemIcon icon={card.icon} />
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.pillars}>
          <div className={styles.aiosContainer}>
            <Reveal className={styles.centeredSection}>
              <SectionTitle>{c.pillars.title}</SectionTitle>
              <Paragraphs items={c.pillars.paragraphs} />
            </Reveal>
            <Reveal delay={80}>
              <div className={styles.venn}>
                <div className={`${styles.vennCircle} ${styles.vennTop}`}><span>{c.pillars.items[0].name}</span></div>
                <div className={`${styles.vennCircle} ${styles.vennLeft}`}><span>{c.pillars.items[1].name}</span></div>
                <div className={`${styles.vennCircle} ${styles.vennRight}`}><span>{c.pillars.items[2].name}</span></div>
              </div>
            </Reveal>
            <div className={styles.pillarList}>
              {c.pillars.items.map((item, index) => (
                <Reveal key={item.name} delay={index * 70}>
                  <article>
                    <h3>{item.name}</h3>
                    <Paragraphs items={item.paragraphs} />
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal className={styles.centeredSection}><p className={styles.problemConclusion}>{c.pillars.closing}</p></Reveal>
          </div>
        </section>

        <section className={styles.myAi}>
          <div className={styles.aiosContainer}>
            <Reveal className={styles.centeredSection}>
              <PillarEyebrow>{c.myData.headline1}</PillarEyebrow>
              <SectionTitle>{c.myData.headline2}</SectionTitle>
              <Paragraphs items={c.myData.paragraphs} />
            </Reveal>
            <Reveal delay={60}>
              <div className={styles.formula}>
                <span className={styles.formulaBlock}>{c.myData.formula.left}</span>
                <span className={styles.formulaOp}>+</span>
                <span className={styles.formulaBlock}>{c.myData.formula.plus}</span>
                <span className={styles.formulaOp}>→</span>
                <span className={`${styles.formulaBlock} ${styles.formulaResult}`}>{c.myData.formula.result}</span>
              </div>
            </Reveal>
            <Reveal><p className={styles.reverseLead}>{c.myData.standardsLabel}</p></Reveal>
            <div className={styles.standardsRow}>
              {c.myData.standards.map((standard, index) => (
                <Reveal key={standard.name} delay={index * 70}>
                  <article>
                    <span className={styles.standardBadge}>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{standard.name}</h3>
                    <p>{standard.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.aiInterface}>
          <div className={styles.aiosContainer}>
            <Reveal className={styles.centeredSection}>
              <PillarEyebrow>{c.aiInterface.headline1}</PillarEyebrow>
              <SectionTitle>{c.aiInterface.headline2}</SectionTitle>
              <Paragraphs items={c.aiInterface.paragraphs} />
            </Reveal>
            <div className={styles.comparisonGrid}>
              <div className={styles.comparisonColumn}>
                <h3>{c.aiInterface.before.label}</h3>
                <ul>{c.aiInterface.before.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
              <div className={`${styles.comparisonColumn} ${styles.comparisonColumnAccent}`}>
                <h3>{c.aiInterface.after.label}</h3>
                <ul>{c.aiInterface.after.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.agent}>
          <div className={styles.aiosContainer}>
            <Reveal className={styles.centeredSection}>
              <PillarEyebrow>{c.agentPlace.headline1}</PillarEyebrow>
              <SectionTitle>{c.agentPlace.headline2}</SectionTitle>
              <p>{c.agentPlace.beforeLabel}</p>
            </Reveal>
            <StepCarousel count={c.agentPlace.before.length}>
              {c.agentPlace.before.map((step, index) => (
                <Reveal key={step} delay={index * 60}>
                  <article>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <StepIcon index={index} />
                    <p>{step}</p>
                  </article>
                </Reveal>
              ))}
            </StepCarousel>
            <Reveal><p className={styles.reverseLead}>{c.agentPlace.afterLabel}</p></Reveal>
            <div className={styles.reverseCards}>
              {c.agentPlace.after.map((step, index) => (
                <Reveal key={step} delay={index * 80}>
                  <article>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p><Lines text={step} /></p>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal className={styles.agentClosing}>
              <div className={styles.comparisonGrid}>
                <div className={styles.comparisonColumn}>
                  <h3>{c.agentPlace.comparison.before.label}</h3>
                  <ul>{c.agentPlace.comparison.before.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
                <div className={`${styles.comparisonColumn} ${styles.comparisonColumnAccent}`}>
                  <h3>{c.agentPlace.comparison.after.label}</h3>
                  <ul>{c.agentPlace.comparison.after.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className={styles.architecture}>
          <div className={styles.aiosContainer}>
            <Reveal className={styles.centeredSection}>
              <SectionTitle>{c.architecture.title}</SectionTitle>
              <Paragraphs items={c.architecture.paragraphs} />
            </Reveal>
            <Reveal delay={60}>
              <div className={styles.imagePlaceholder} aria-label="Agent Place Architecture diagram — coming soon">
                <span>Diagram coming soon</span>
              </div>
            </Reveal>
          </div>
        </section>

        <section className={styles.multiDevice}>
          <div className={styles.aiosContainer}>
            <Reveal className={styles.centeredSection}>
              <SectionTitle>{c.multiDevice.title}</SectionTitle>
              <Paragraphs items={c.multiDevice.paragraphs} />
            </Reveal>
            <div className={styles.deviceGrid}>
              {c.multiDevice.devices.map((device, index) => (
                <Reveal key={device.name} delay={index * 50}>
                  <article>
                    <div className={styles.imagePlaceholder} aria-label={`${device.name} image — coming soon`} />
                    <h3>{device.name}</h3>
                    <p>{device.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.coov}>
          <div className={styles.aiosContainer}>
            <Reveal className={styles.centeredSection}>
              <SectionTitle>{c.coov.title}</SectionTitle>
              <Paragraphs items={c.coov.paragraphs} />
            </Reveal>
            <Reveal delay={60}>
              <div className={styles.imagePlaceholder} aria-label="COOV diagram — coming soon">
                <span>Diagram coming soon</span>
              </div>
            </Reveal>
          </div>
        </section>
      </div>

      <section className={`${styles.founder} section`}>
        <div className="container">
          <Reveal className={styles.founderInner}>
            <h2>{c.founder.title}</h2>
            <div className={styles.founderSubtitle}><Paragraphs items={c.founder.paragraphs} /></div>
            <div className={`${styles.ipDownloads} ${styles.founderLinks}`}>
              {c.founder.links.map((link) => {
                const isAnchor = link.href.startsWith("#");
                return (
                  <a key={link.href} href={link.href} {...(!isAnchor && { target: "_blank", rel: "noopener" })}>
                    {link.label} <ArrowUpRightIcon aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <section className={`${styles.ip} section`} id="ip-whitepapers">
        <div className="container"><Reveal><p className="eyebrow">EVIDENCE</p><h2>{c.ip.title}</h2><div className={styles.ipDownloads}>{c.ip.documents.map((document) => <a key={document.href} href={document.href} target="_blank" rel="noopener">{document.label} <ArrowUpRightIcon aria-hidden="true" /></a>)}</div></Reveal><Reveal><IpPortfolio tiles={c.ip.tiles} whitepaperLinks={whitepaperLinks} /></Reveal></div>
      </section>
    </main>
  );
}
