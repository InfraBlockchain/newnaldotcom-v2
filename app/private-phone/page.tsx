import type { Metadata } from "next";
import Image from "next/image";
import { EmphasizedText } from "@/components/shared/EmphasizedText";
import { Reveal } from "@/components/shared/Reveal";
import { privatePhoneContent as c } from "@/content/privatePhone";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "Private Phone", description: c.hero.sub };

function ChapterHead({ title, lead }: { title: string; lead: string }) {
  return <Reveal className={styles.chapterHead}><h2>{title}</h2><p>{lead}</p></Reveal>;
}

function NumberChip({ children = "123-ABC-5678" }: { children?: React.ReactNode }) { return <span className={styles.numberChip}>{children}</span>; }

function ProtectIcon({ index }: { index: number }) {
  const common = { viewBox: "0 0 72 72", "aria-hidden": true as const };
  if (index === 0) return <svg {...common}><rect x="12" y="20" width="48" height="32" rx="4"/><circle cx="24" cy="34" r="4"/><line x1="36" y1="30" x2="52" y2="30"/><line x1="36" y1="36" x2="48" y2="36"/><line x1="18" y1="44" x2="52" y2="44"/></svg>;
  if (index === 1) return <svg {...common}><line x1="18" y1="36" x2="54" y2="36"/><circle cx="18" cy="36" r="3.5"/><circle cx="36" cy="36" r="3.5"/><circle cx="54" cy="36" r="3.5"/></svg>;
  if (index === 2) return <svg {...common}><line x1="20" y1="30" x2="20" y2="42"/><line x1="26" y1="22" x2="26" y2="50"/><line x1="32" y1="28" x2="32" y2="44"/><line x1="38" y1="18" x2="38" y2="54"/><line x1="44" y1="24" x2="44" y2="48"/><line x1="50" y1="30" x2="50" y2="42"/></svg>;
  return <svg {...common}><rect x="22" y="34" width="28" height="22" rx="3"/><path d="M27 34 v-6 a9 9 0 0 1 18 0 v6"/><circle cx="36" cy="45" r="1.8"/></svg>;
}

function StepDiagram({ step }: { step: number }) {
  const iconProps = { viewBox: "0 0 24 24", "aria-hidden": true as const, className: styles.diagramIcon };
  return (
    <div className={styles.stepVisual} aria-hidden="true">
      <span className={styles.stepNumber}>{String(step + 1).padStart(2, "0")}</span>
      <div className={styles.stepDiagram}>
        {step === 0 && <>
          <i className={styles.diagramPhone} />
          <svg {...iconProps}><path d="M12 4l1.4 4.6L18 10l-4.6 1.4L12 16l-1.4-4.6L6 10l4.6-1.4z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><circle cx="19" cy="5" r="1" fill="currentColor"/><circle cx="5" cy="18" r="1" fill="currentColor"/><circle cx="19" cy="18" r="1" fill="currentColor"/></svg>
          <span className={styles.diagramNumber}>Newnal<br />Number</span>
        </>}
        {step === 1 && <>
          <i className={styles.diagramPhone} />
          <span className={styles.diagramNumber}>Newnal<br />Number</span>
          <svg {...iconProps}><line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><polyline points="15 7 20 12 15 17" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <i className={styles.diagramPhone} />
        </>}
        {step === 2 && <>
          <i className={styles.diagramPhone} />
          <i className={styles.diagramLine} />
          <svg {...iconProps}><rect x="6" y="11" width="12" height="9" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M8.5 11V8a3.5 3.5 0 0 1 7 0v3" fill="none" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="15.2" r=".9" fill="currentColor"/></svg>
          <i className={styles.diagramLine} />
          <i className={styles.diagramPhone} />
        </>}
      </div>
    </div>
  );
}

function ConnectionFan() {
  return <svg className={styles.funnelLines} viewBox="0 0 100 240" preserveAspectRatio="none" aria-hidden="true">
    <line x1="0" y1="120" x2="100" y2="24" stroke="currentColor" strokeWidth="1" opacity=".5"/>
    <line x1="0" y1="120" x2="100" y2="72" stroke="currentColor" strokeWidth="1" opacity=".5"/>
    <line x1="0" y1="120" x2="100" y2="120" stroke="currentColor" strokeWidth="1" opacity=".5"/>
    <line x1="0" y1="120" x2="100" y2="168" stroke="currentColor" strokeWidth="1" opacity=".5"/>
    <line x1="0" y1="120" x2="100" y2="216" stroke="currentColor" strokeWidth="1" opacity=".5"/>
  </svg>;
}

export default function PrivatePhonePage() {
  const wires = [["689-RWN-4948", "Family"], ["812-VTW-7304", "Client"], ["733-HXR-5706", "Doctor"], ["659-NWH-5096", "Friend"], ["252-ZHE-6967", "Coworker"]];
  return <main id="main-content" className={styles.page} data-theme="private">
    <section className={styles.hero}>
      <Reveal className={styles.heroCopy}>
        <h1><EmphasizedText text={c.hero.title} emphasis={c.hero.emphasis} /></h1>
        <p className={styles.heroSub}>{c.hero.sub}</p>
        <p className={styles.heroAudience}>{c.hero.audience}</p>
      </Reveal>
      <div className={styles.heroDevice}>
        <div className={styles.grid} />
        <div className={styles.glow} />
        <div className={styles.orbitA} />
        <div className={styles.orbitB} />
        <Image className={styles.heroPhone} src="/images/private/hero-number-naming.png" alt="" width={846} height={1704} priority />
        {c.numbers.map((number, i) => <span key={number} className={`${styles.floatChip} ${styles[`chip${i + 1}`]}`}>{number}</span>)}
      </div>
      <Reveal className={styles.heroCtaWrap}>
        <a className={styles.brochureCta} href={c.hero.brochureHref} target="_blank" rel="noopener">{c.hero.cta}</a>
      </Reveal>
    </section>

    <section className={styles.section}><div className={styles.container}><ChapterHead {...c.protects} /><div className={styles.protectList}>{c.protects.items.map(([title, text], i) => <Reveal key={title} delay={i * 80}><article><span>{String(i + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p><ProtectIcon index={i} /></article></Reveal>)}</div></div></section>

    <section className={`${styles.section} ${styles.panelSection}`}><div className={styles.container}><div className={styles.worksHead}><ChapterHead {...c.works} /></div><div className={styles.steps}>{c.works.steps.map(([title,text],i) => <Reveal key={title} delay={i*80}><article><StepDiagram step={i} /><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div><Reveal><p className={styles.displayClosing}>{c.works.closing}</p></Reveal></div></section>

    <section className={`${styles.section} ${styles.leakSection}`}>
      <div className={styles.container}>
        <ChapterHead {...c.leak} />
        <div className={styles.leakPhones}>
          {[
            { label: "01 \u2014 TAP EDIT", src: "/images/private/edit-flow-1.png", alt: "Long-press menu with Edit on a sent message" },
            { label: "02 \u2014 REWRITE", src: "/images/private/edit-flow-2.png", alt: "Edit dialog rewriting the sent message" },
            { label: "03 \u2014 RECORD CHANGED", src: "/images/private/edit-flow-3.png", alt: "Conversation now showing the rewritten message" },
          ].map((device, di) => (
            <Reveal key={device.label} delay={di * 120}>
              <div className={styles.leakDevice}>
                <p className={styles.eyebrow}>{device.label}</p>
                <div className={styles.chatMockupFrame}>
                  <Image
                    className={styles.originalChatMockup}
                    src={device.src}
                    alt={device.alt}
                    width={846}
                    height={1704}
                    sizes="(max-width: 767px) 320px, 360px"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal><p className={styles.displayClosing}>{c.leak.closing.map((line) => <span key={line}>{line}</span>)}</p></Reveal>
      </div>
    </section>

    <section className={`${styles.section} ${styles.panelSection}`}><div className={styles.container}><ChapterHead {...c.inbox} /><Reveal className={styles.networks}>
      <article className={`${styles.comparisonCard} ${styles.hub}`}>
        <div className={styles.cardHeading}>
          <p className={styles.eyebrow}>TRADITIONAL — ONE SHARED LINE</p>
        </div>
        <div className={styles.sharedLineGraphic}>
          <div className={styles.receiverPhone}>
            <span className={styles.receiverLabel}>YOU</span>
            <i className={styles.diagramPhone} />
          </div>
          <i className={styles.phoneConnector} aria-hidden="true" />
          <div className={styles.sharedNumber}>
            <span className={styles.sharedNumberLabel}>ONE SHARED NUMBER</span>
            <NumberChip>010-1234-5678</NumberChip>
          </div>
          <ConnectionFan />
          <div className={styles.contactList}>
            {wires.map(([, name]) => <span key={name} className={styles.wireContact}>{name}</span>)}
          </div>
        </div>
        <p>One line, everyone reaches you — including ads and spam.</p>
      </article>
      <article className={`${styles.comparisonCard} ${styles.wires}`}>
        <div className={styles.cardHeading}>
          <p className={styles.eyebrow}>NEWNAL — SEPARATE PRIVATE LINES</p>
        </div>
        <div className={styles.sharedLineGraphic}>
          <div className={`${styles.receiverPhone} ${styles.safePhone}`}>
            <span className={styles.receiverLabel}>YOU</span>
            <i className={styles.diagramPhone} />
            <span className={styles.receiverNumber}>Newnal</span>
          </div>
          <ConnectionFan />
          <div className={styles.privateNumberList}>
            {wires.map(([num]) => <NumberChip key={num}>{num}</NumberChip>)}
          </div>
          <div className={styles.connectorList} aria-hidden="true">
            {wires.map(([num]) => <i key={num} className={styles.wireConnector} />)}
          </div>
          <div className={styles.contactList}>
            {wires.map(([, name]) => <span key={name} className={styles.wireContact}>{name}</span>)}
          </div>
        </div>
        <p>Five lines. Five numbers. Nothing shared.</p>
      </article>
    </Reveal></div></section>

    <section className={styles.section}>
      <div className={styles.container}>
        <ChapterHead {...c.contacts} />
        <Reveal className={styles.contactFlow}>
          <div className={`${styles.contactParty} ${styles.owner}`}>
            <p className={styles.eyebrow}>PRIVATE PHONE OWNER</p>
            <div className={styles.ownerMockup}>
              <Image
                className={styles.ownerScreen}
                src="/images/private/number-generation-keypad.png"
                alt="Private Phone number generation screen"
                width={846}
                height={1704}
                sizes="(max-width: 767px) 180px, 200px"
              />
            </div>
            <p>Your Private Phone mints a unique number for one contact.</p>
          </div>
          <div className={styles.encrypted}>
            <p className={styles.eyebrow}>ENCRYPTED 1:1 CONNECTION</p>
            <div className={styles.connectionVisual}>
              <i className={styles.connectionLine} />
              <span className={styles.lock}>⌾</span>
              <NumberChip>+1-235-RVQ-3779</NumberChip>
            </div>
            <p>Share directly. No number swap.</p>
          </div>
          <div className={`${styles.contactParty} ${styles.freeApp}`}>
            <p className={styles.eyebrow}>FREE APP USER</p>
            <div className={styles.freeAppMockup}>
              <Image
                className={styles.freeAppScreen}
                src="/images/private/number-naming-done.png"
                alt="Free Connection App New Contact screen for entering a private number"
                width={846}
                height={1704}
                sizes="(max-width: 767px) 180px, 200px"
              />
            </div>
            <p>They install the free app, enter the number, and connect.</p>
          </div>
        </Reveal>
        <Reveal><p className={styles.contactSummary}>{c.contacts.summary.map((line) => <span key={line}>{line}</span>)}</p></Reveal>
      </div>
    </section>

    <section className={`${styles.section} ${styles.compareSection}`}>
      <div className={styles.container}>
        <Reveal className={styles.compareHead}>
          <h2>{c.compare.title}</h2>
          <div className={styles.compareSubheads}>
            {c.compare.subheads.map((subhead, index) => <p key={subhead} className={index === 2 ? styles.compareDetail : ""}>{subhead}</p>)}
          </div>
        </Reveal>
        <Reveal className={styles.compareTableWrap}>
          <table>
            <thead>
              <tr><th>FEATURE</th><th>NEWNAL PRIVATE PHONE</th><th>FREE CONNECTION APP</th></tr>
            </thead>
            <tbody>
              {c.compare.rows.map((row) => (
                <tr key={row.feature}>
                  <th>
                    <span className={styles.featureName}>{row.feature}</span>
                    {row.detail && <span className={styles.featureDetail}>{row.detail}</span>}
                  </th>
                  <td>
                    <span className={row.phone.available ? styles.featureCheck : styles.featureUnavailable}>{row.phone.available ? "✓" : "-"}</span>
                    {row.phone.note && <span className={styles.featureNote}>{row.phone.note}</span>}
                  </td>
                  <td>
                    <span className={row.app.available ? styles.featureCheck : styles.featureUnavailable}>{row.app.available ? "✓" : "-"}</span>
                    {row.app.note && <span className={styles.featureNote}>{row.app.note}</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
        <Reveal><p className={styles.compareClosing}>{c.compare.closing}</p></Reveal>
      </div>
    </section>

    <section className={`${styles.section} ${styles.foundationSection}`}>
      <div className={styles.container}>
        <ChapterHead title={c.foundation.title} lead={c.foundation.lead} />
        <div className={styles.proofs}>
          {c.foundation.proofs.map(([num, label, sub], i) => (
            <Reveal key={num} delay={i * 80}><div><strong>{num}</strong><span>{label}</span><small>{sub}</small></div></Reveal>
          ))}
        </div>
        <Reveal className={styles.scale}>
          <div><span className={styles.eyebrow}>PROOF OF SCALE</span><p>{c.foundation.scale}</p></div>
          <Image className={styles.coovLogo} src="/images/private/coov-logo.png" alt="COOV" width={1000} height={263} />
        </Reveal>
        <p className={styles.credit}>{c.foundation.credit}</p>
        <Reveal className={styles.pricingHead}><p className={styles.eyebrow}>PRICING</p><h2>Own it, then live with it.</h2></Reveal>
        <div className={styles.pricing}>
          {c.foundation.prices.map(([name, type, price, desc, note], i) => (
            <Reveal key={name} delay={i * 80}>
              <article className={`${styles.pricingCard} ${styles[`pricingCard${i + 1}`]}`}>
                <span className={styles.eyebrow}>{name}</span>
                <p>{type}</p>
                <strong>{price}</strong>
                <p>{desc}</p>
                <small>{note}</small>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  </main>;
}
