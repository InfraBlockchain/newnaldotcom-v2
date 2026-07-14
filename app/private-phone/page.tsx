import type { Metadata } from "next";
import Image from "next/image";
import { EmphasizedText } from "@/components/shared/EmphasizedText";
import { Reveal } from "@/components/shared/Reveal";
import { privatePhoneContent as c } from "@/content/privatePhone";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "Private Phone", description: c.hero.sub };

function ChapterHead({ eyebrow, title, lead }: { eyebrow: string; title: string; lead: string }) {
  return <Reveal className={styles.chapterHead}><p className={styles.eyebrow}>{eyebrow}</p><h2>{title}</h2><p>{lead}</p></Reveal>;
}

function PhoneSilhouette({ children, label }: { children?: React.ReactNode; label?: string }) {
  return <div className={styles.phone}>{label && <span className={styles.phoneLabel}>{label}</span>}<div className={styles.speaker} />{children}</div>;
}

function NumberChip({ children = "N-4712" }: { children?: React.ReactNode }) { return <span className={styles.numberChip}>{children}</span>; }

function StepDiagram({ step }: { step: number }) {
  return (
    <div className={styles.stepVisual} aria-hidden="true">
      <span className={styles.stepNumber}>{String(step + 1).padStart(2, "0")}</span>
      <div className={styles.stepDiagram}>
        {step === 0 && <><i className={styles.diagramPhone} /><i className={styles.diagramArrow}>→</i><span className={styles.diagramNumber}>Newnal<br />Number</span><span className={styles.diagramDots}>· · ·</span></>}
        {step === 1 && <><i className={styles.diagramPhone} /><span className={styles.diagramNumber}>Newnal<br />Number</span><i className={styles.diagramArrow}>→</i><i className={styles.diagramPhone} /></>}
        {step === 2 && <><i className={styles.diagramPhone} /><i className={styles.diagramLine} /><i className={styles.diagramLock}>⌑</i><i className={styles.diagramLine} /><i className={styles.diagramPhone} /></>}
      </div>
    </div>
  );
}

export default function PrivatePhonePage() {
  const wires = [["689-RWN-4948", "Family"], ["812-VTW-7304", "Client"], ["733-HXR-5706", "Doctor"], ["659-NWH-5096", "Friend"], ["252-ZHE-6967", "Coworker"]];
  return <main id="main-content" className={styles.page} data-theme="private">
    <section className={styles.hero}>
      <div className={styles.grid} />
      <div className={styles.heroDevice}><div className={styles.orbitA} /><div className={styles.orbitB} /><Image className={styles.heroPhone} src="/images/private/hero-phone.png" alt="" width={443} height={725} priority /></div>
      {c.numbers.map((number, i) => <span key={number} className={`${styles.floatChip} ${styles[`chip${i + 1}`]}`}>{number}</span>)}
      <Reveal className={styles.heroCopy}><p className={styles.eyebrow}>{c.hero.eyebrow}</p><h1><EmphasizedText text={c.hero.title} emphasis={c.hero.emphasis} /></h1><p className={styles.heroSub}>{c.hero.sub}</p><p>{c.hero.audience}</p><a className={styles.brochureCta} href={c.hero.brochureHref} target="_blank" rel="noopener">{c.hero.cta}</a></Reveal>
    </section>

    <section className={styles.section}><div className={styles.container}><ChapterHead {...c.protects} /><div className={styles.protectList}>{c.protects.items.map(([title, text], i) => <Reveal key={title} delay={i * 80}><article><span>{String(i + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p><svg viewBox="0 0 72 72" aria-hidden="true"><circle cx="36" cy="36" r="25"/><path d="M25 37l7 7 15-17"/></svg></article></Reveal>)}</div></div></section>

    <section className={`${styles.section} ${styles.panelSection}`}><div className={styles.container}><div className={styles.worksHead}><ChapterHead {...c.works} /></div><div className={styles.steps}>{c.works.steps.map(([title,text],i) => <Reveal key={title} delay={i*80}><article><StepDiagram step={i} /><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div><Reveal><p className={styles.displayClosing}>{c.works.closing}</p></Reveal></div></section>

    <section className={`${styles.section} ${styles.leakSection}`}><div className={styles.container}><ChapterHead {...c.leak} /><div className={styles.leakPhones}>{[c.leak.a,c.leak.b].map((device,di) => <Reveal key={device.label} delay={di*120}><div className={`${styles.leakDevice} ${di === 0 ? styles.editedDevice : styles.originalDevice}`}><p className={styles.eyebrow}>{device.label}</p><PhoneSilhouette>{device.messages.map((message,mi) => <p key={message} className={`${styles.bubble} ${mi===1 ? di === 0 ? styles.changed : styles.original : ""}`}>{message}</p>)}<p className={styles.leakCaption}>{device.caption}</p></PhoneSilhouette></div></Reveal>)}</div><Reveal><p className={styles.displayClosing}>{c.leak.closing}</p></Reveal></div></section>

    <section className={`${styles.section} ${styles.panelSection}`}><div className={styles.container}><ChapterHead {...c.inbox} /><Reveal className={styles.networks}><div className={styles.hub}><p className={styles.eyebrow}>TRADITIONAL — ONE SHARED HUB</p><div className={styles.hubDiagram}><svg className={styles.hubConnections} viewBox="0 0 600 420" aria-hidden="true"><line x1="300" y1="210" x2="300" y2="48" /><line x1="300" y1="210" x2="520" y2="120" /><line x1="300" y1="210" x2="505" y2="342" /><line x1="300" y1="210" x2="100" y2="342" /><line x1="300" y1="210" x2="78" y2="120" /><line x1="300" y1="210" x2="410" y2="32" /><line x1="300" y1="210" x2="570" y2="225" /><line x1="300" y1="210" x2="395" y2="392" /><line x1="300" y1="210" x2="205" y2="392" /><line x1="300" y1="210" x2="30" y2="225" /></svg><span className={styles.you}>You</span>{["Family","Ad","Spam","Unknown","Friend"].map((x,i)=><span key={x} className={i>0&&i<4?styles.unwanted:""}>{x}</span>)}</div><p>One line, everyone sits on it.</p></div><div className={styles.wires}><p className={styles.eyebrow}>NEWNAL — SEPARATE PRIVATE WIRES</p><div className={styles.wireHeader}><span>YOU</span><span>PRIVATE NUMBER</span><span>CONTACT</span></div>{wires.map(([n,name])=><div className={styles.wire} key={n}><span>You</span><NumberChip>{n}</NumberChip><span>→ {name}</span></div>)}<p>Five wires. Five numbers. Nothing shared.</p></div></Reveal></div></section>

    <section className={styles.section}><div className={styles.container}><ChapterHead {...c.contacts} /><Reveal className={styles.contactFlow}><div className={`${styles.contactParty} ${styles.owner}`}><p className={styles.eyebrow}>PRIVATE PHONE OWNER</p><PhoneSilhouette><span className={styles.ownerMark}>N</span><small className={styles.phoneAction}>GENERATE NUMBER</small><NumberChip>123-ABC-5678</NumberChip></PhoneSilhouette><p>Your Private Phone mints a unique number for one contact.</p></div><div className={styles.encrypted}><p className={styles.eyebrow}>ENCRYPTED 1:1 CONNECTION</p><div className={styles.connectionVisual}><i className={styles.connectionLine} /><span className={styles.lock}>⌾</span><NumberChip>123-ABC-5678</NumberChip></div><p>Share directly. No number swap.</p></div><div className={`${styles.contactParty} ${styles.freeApp}`}><p className={styles.eyebrow}>FREE APP USER</p><PhoneSilhouette><span className={styles.appIcon}>N</span><small className={styles.appName}>Newnal</small><small className={styles.phoneAction}>ENTER NUMBER</small><NumberChip>123-ABC-5678</NumberChip><button type="button">Join</button></PhoneSilhouette><p>They install the free app, enter the number, and connect.</p></div></Reveal><Reveal><p className={styles.contactSummary}>{c.contacts.summary}</p></Reveal></div></section>

    <section className={styles.section}><div className={styles.container}><ChapterHead {...c.compare} /><Reveal className={styles.tableWrap}><table><thead><tr><th>PROTECTION</th><th>NEWNAL PRIVATE PHONE</th><th>FREE CONNECTION APP</th></tr></thead><tbody>{c.compare.rows.map(([label,phone,app])=><tr key={label}><th>{label}</th><td className={styles.yes}>{phone === "yes" ? "✓" : "✗"}</td><td className={app === "yes" ? styles.yes : app === "tbd" ? styles.tbd : styles.no}>{app === "yes" ? "✓" : app === "no" ? "✗" : <span aria-label="Support status to be confirmed">TBD</span>}</td></tr>)}</tbody></table></Reveal></div></section>

    <section className={styles.section}><div className={styles.container}><ChapterHead eyebrow={c.foundation.eyebrow} title={c.foundation.title} lead={c.foundation.lead} /><div className={styles.proofs}>{c.foundation.proofs.map(([num,label,sub],i)=><Reveal key={num} delay={i*80}><div><strong>{num}</strong><span>{label}</span><small>{sub}</small></div></Reveal>)}</div><Reveal className={styles.scale}><div><span className={styles.eyebrow}>PROOF OF SCALE</span><p>{c.foundation.scale}</p></div><Image className={styles.coovLogo} src="/images/private/coov-logo.png" alt="COOV" width={235} height={57} /></Reveal><p className={styles.credit}>{c.foundation.credit}</p>
      <Reveal className={styles.interlude}><span>· INTERLUDE ·</span><h3>TWO DEVICES · ONE PRIVATE LINE</h3><div><PhoneSilhouette /><NumberChip /><PhoneSilhouette /></div></Reveal>
      <Reveal><p className={styles.eyebrow}>PRICING</p><h2>Own it, then live with it.</h2></Reveal><div className={styles.pricing}>{c.foundation.prices.map(([name,type,price,desc,note],i)=><Reveal key={name} delay={i*80}><article><span className={styles.eyebrow}>{name}</span><p>{type}</p><strong>{price}</strong><p>{desc}</p><small>{note}</small></article></Reveal>)}</div><a className={styles.inquiry} href="mailto:contact@newnal.com">Enterprise inquiries → contact@newnal.com</a></div></section>
  </main>;
}
