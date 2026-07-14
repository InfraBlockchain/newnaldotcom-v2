import type { Metadata } from "next";
import { EmphasizedText } from "@/components/shared/EmphasizedText";
import { IpPortfolio } from "@/components/shared/IpPortfolio";
import { Reveal } from "@/components/shared/Reveal";
import { aiosContent as c } from "@/content/aios";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "Newnal aios", description: c.hero.sub };

const whitepaperLinks: Record<string, string> = {
  "Newnal Web3 ai Technical Whitepaper": "https://infrablockchain.net/documents/web3ai-newnal/Web3ai-Newnal-Tech-1-Web3-ai.pdf",
  "Newnal Web3 ai OS Technical Whitepaper": "https://infrablockchain.net/documents/web3ai-newnal/Web3ai-Newnal-Tech-2-Web3-ai-OS.pdf",
  "Newnal ai Agent Place Technical Whitepaper": "https://infrablockchain.net/documents/web3ai-newnal/Web3ai-Newnal-Tech-4-Newnal-ai-Agent-Place.pdf",
};

function Spectrum() {
  return <div className={styles.spectrum} role="img" aria-label="Data sovereignty spectrum from zero, Private Phone, to one hundred, Newnal AIOS">
    <div className={styles.spectrumTop}><b>0</b><span>Newnal (foundation)</span><b>100</b></div>
    <div className={styles.axis}><i /><i /></div>
    <div className={styles.spectrumBottom}><div><strong>Private Phone</strong><span>DEFENSIVE SOVEREIGNTY</span></div><div><strong>Newnal AIOS</strong><span>ACTIVE SOVEREIGNTY</span></div></div>
  </div>;
}

function EraTimeline() {
  const eras = [["1995", "Windows 95", "Personal Computing Era"], ["2007", "iOS", "Mobile Computing Era"], ["NOW", "Newnal AIOS", "AI Computing Era"]];
  return <div className={styles.timeline} role="img" aria-label="Operating system timeline from Windows 95 to iOS to Newnal AIOS">
    <div className={styles.timelineLine} />
    {eras.map(([year, os, era], i) => <Reveal key={os} delay={i * 120} className={`${styles.eraPoint} ${i === 2 ? styles.current : ""}`}><div className={styles.eraNode}><span>{year}</span><strong>{os}</strong></div><small>{era}</small></Reveal>)}
  </div>;
}

export default function AiosPage() {
  return <main id="main-content" className={styles.page}>
    <section className={styles.hero}>
      <div className={styles.glowA} /><div className={styles.glowB} />
      <Reveal className={styles.heroInner}><h1><EmphasizedText text={c.hero.title} emphasis={c.hero.emphasis} /></h1><p>{c.hero.sub}</p></Reveal>
    </section>

    <section className="section">
      <div className="container">
        <div className={styles.sovereigntyGrid}>
          <Reveal><p className="eyebrow">DATA SOVEREIGNTY</p><h2>{c.sovereignty.title}</h2>{c.sovereignty.paragraphs.map((p) => <p key={p}>{p}</p>)}</Reveal>
          <Reveal delay={80}><Spectrum /></Reveal>
        </div>
        <Reveal className={styles.bridge}><p>{c.sovereignty.bridge}</p><div className={styles.sovereigntyCards}>{c.sovereignty.cards.map(([title, text]) => <article key={title}><span className="eyebrow">{title}</span><h3>{text}</h3></article>)}</div></Reveal>
      </div>
    </section>

    <section className={`${styles.era} section`}>
      <div className="container"><Reveal className={styles.sectionHead}><p className="eyebrow">THE OPERATING SYSTEM ERA</p><h2>{c.era.title}</h2><h3>{c.era.subhead}</h3><p>{c.era.body}</p><strong>{c.era.conclusion}</strong></Reveal><EraTimeline /></div>
    </section>

    <section className={`${styles.problem} section`}>
      <div className="container"><Reveal className={styles.narrow}><p className="eyebrow">THE PROBLEM</p><h2>{c.problem.title}</h2><p className={styles.lead}>{c.problem.intro}</p><blockquote>{c.problem.callout}</blockquote><p>{c.problem.conclusion}</p><p>Not, “{c.problem.q1}”</p><p>But,</p><p className={styles.turningPoint}>“{c.problem.q2}”</p></Reveal></div>
    </section>

    <section className={`${styles.myAi} section`}>
      <div className="container"><Reveal className={styles.sectionHead}><p className="eyebrow">THE ANSWER</p><h2>{c.myAi.title}</h2><p>{c.myAi.intro}</p><p className={styles.question}>{c.myAi.question}</p><p>{c.myAi.bridge}</p></Reveal>
        <div className={styles.principles}>{c.myAi.principles.map((p, i) => <Reveal key={p} delay={i * 80}><article><span>{String(i + 1).padStart(2, "0")}</span><h3>{p}</h3></article></Reveal>)}</div>
        <Reveal className={styles.myAiClosing}><p>{c.myAi.conclusion}</p><strong>{c.myAi.final}</strong></Reveal>
      </div>
    </section>

    <section className={`${styles.agent} section`}>
      <div className="container"><Reveal className={styles.sectionHead}><p className="eyebrow">AGENT PLACE</p><h2>{c.agent.title}</h2></Reveal>
        <div className={styles.reverseLogin}>
          <Reveal><div className={styles.before}><h3>{c.agent.beforeLabel}</h3>{c.agent.before.map((x, i) => <div key={x}><span>{String(i + 1).padStart(2, "0")}</span><p>{x}</p></div>)}</div></Reveal>
          <div className={styles.reverseArrow} aria-hidden="true">→</div>
          <Reveal delay={80}><div className={styles.after}><h3>{c.agent.afterLabel}</h3>{c.agent.after.map((x, i) => <div key={x}><span>{String(i + 1).padStart(2, "0")}</span><p>{x}</p></div>)}</div></Reveal>
        </div>
        <Reveal className={styles.agentClosing}><p>{c.agent.closing}</p><blockquote>{c.agent.callout}</blockquote></Reveal>
      </div>
    </section>

    <section className={`${styles.ip} section`}>
      <div className="container"><Reveal><p className="eyebrow">EVIDENCE</p><h2>{c.ip.title}</h2><div className={styles.ipDownloads}>{c.ip.documents.map((document) => <a key={document.href} href={document.href} target="_blank" rel="noopener">{document.label} ↗</a>)}</div></Reveal><Reveal><IpPortfolio tiles={c.ip.tiles} whitepaperLinks={whitepaperLinks} /></Reveal></div>
    </section>
  </main>;
}
