import type { Metadata } from "next";
import type { ReactNode } from "react";
import { IpPortfolio } from "@/components/shared/IpPortfolio";
import { Reveal } from "@/components/shared/Reveal";
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

function AccentText({ text, phrases }: { text: string; phrases: readonly string[] }) {
  const escaped = phrases.map((phrase) => phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const pattern = new RegExp(`(${escaped.join("|")})`, "g");

  return text.split(pattern).map((part, index) => phrases.includes(part)
    ? <span className={styles.accentText} key={`${part}-${index}`}>{part}</span>
    : part);
}

function Spectrum() {
  return (
    <div className={styles.spectrum} role="img" aria-label="Data sovereignty spectrum from one hundred, Newnal AIOS, to zero, Private Phone">
      <div className={`${styles.spectrumEndpoint} ${styles.spectrumLeft}`}>
        <span className={styles.spectrumNumber}>100</span>
        <i aria-hidden="true" />
        <strong>Newnal AIOS</strong>
        <small>ACTIVE SOVEREIGNTY</small>
      </div>
      <div className={styles.spectrumFoundation}>
        <span>(foundation)</span>
        <strong>Newnal</strong>
      </div>
      <div className={`${styles.spectrumEndpoint} ${styles.spectrumRight}`}>
        <span className={styles.spectrumNumber}>0</span>
        <i aria-hidden="true" />
        <strong>Private Phone</strong>
        <small>DEFENSIVE SOVEREIGNTY</small>
      </div>
    </div>
  );
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

function StepIcon({ index }: { index: number }) {
  const common = { className: styles.stepIcon, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.4 };

  if (index === 0) return <svg {...common} aria-hidden="true"><path d="M12 3v11m0 0 4-4m-4 4-4-4M5 18.5h14" /></svg>;
  if (index === 1) return <svg {...common} aria-hidden="true"><path d="M14 5h5v14h-5M11 8l4 4-4 4m4-4H5" /></svg>;
  if (index === 2) return <svg {...common} aria-hidden="true"><circle cx="8" cy="12" r="3" /><path d="m10.5 10.5 7-7m-2 2 2 2m-4 0 2 2" /></svg>;
  if (index === 3) return <svg {...common} aria-hidden="true"><circle cx="12" cy="12" r="8" /><path d="m8.5 12 2.3 2.3 4.8-5" /></svg>;
  return <svg {...common} aria-hidden="true"><rect x="3" y="6" width="18" height="12" rx="1.5" /><path d="M3 10h18m3 5h4" /></svg>;
}

function Lines({ text }: { text: string }) {
  return text.split("\n").map((line, index) => <span key={`${line}-${index}`}>{line}</span>);
}

function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className={styles.lowerTitle}>{children}</h2>;
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
              <p><Lines text={c.era.body} /></p>
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
              <SectionTitle>{c.problem.title}</SectionTitle>
              <p className={styles.shortLead}>{c.problem.intro}</p>
              <blockquote>{c.problem.callout}</blockquote>
              <p className={styles.problemConclusion}><Lines text={c.problem.conclusion} /></p>
              <p>Not, &quot;{c.problem.q1}&quot;</p>
              <p>But, <span className={styles.accentText}>&quot;{c.problem.q2}&quot;</span></p>
            </Reveal>
          </div>
        </section>

        <section className={styles.myAi}>
          <div className={styles.aiosContainer}>
            <Reveal className={styles.centeredSection}>
              <SectionTitle>{c.myAi.title}</SectionTitle>
              <p>{c.myAi.intro}</p>
              <p className={styles.accentText}>{c.myAi.question}</p>
              <p>{c.myAi.bridge}</p>
            </Reveal>
            <div className={styles.principles}>
              {c.myAi.principles.map((principle, index) => (
                <Reveal key={principle} delay={index * 80}>
                  <article>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{principle}</h3>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal className={styles.myAiClosing}>
              <p><AccentText text={c.myAi.conclusion} phrases={["My AI"]} /></p>
              <p><AccentText text={c.myAi.final} phrases={["your own AI"]} /></p>
            </Reveal>
          </div>
        </section>

        <section className={styles.agent}>
          <div className={styles.aiosContainer}>
            <Reveal className={styles.centeredSection}>
              <SectionTitle>{c.agent.title}</SectionTitle>
              <p>{c.agent.beforeLabel}</p>
            </Reveal>
            <div className={styles.stepCards}>
              {c.agent.before.map((step, index) => (
                <Reveal key={step} delay={index * 60}>
                  <article>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <StepIcon index={index} />
                    <p>{step}</p>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal><p className={styles.reverseLead}><AccentText text={c.agent.afterLabel} phrases={["Reverse Login"]} /></p></Reveal>
            <div className={styles.reverseCards}>
              {c.agent.after.map((step, index) => (
                <Reveal key={step} delay={index * 80}>
                  <article>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{step}</p>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal className={styles.agentClosing}>
              <p><AccentText text={c.agent.closing} phrases={["Agent Place"]} /></p>
              <blockquote>{c.agent.callout}</blockquote>
            </Reveal>
          </div>
        </section>
      </div>

      <section className={`${styles.ip} section`}>
        <div className="container"><Reveal><p className="eyebrow">EVIDENCE</p><h2>{c.ip.title}</h2><div className={styles.ipDownloads}>{c.ip.documents.map((document) => <a key={document.href} href={document.href} target="_blank" rel="noopener">{document.label} ↗</a>)}</div></Reveal><Reveal><IpPortfolio tiles={c.ip.tiles} whitepaperLinks={whitepaperLinks} /></Reveal></div>
      </section>
    </main>
  );
}
