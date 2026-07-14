import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EmphasizedText } from "@/components/shared/EmphasizedText";
import { Reveal } from "@/components/shared/Reveal";
import { ScrollRail } from "@/components/shared/ScrollRail";
import { YaliSubnav } from "@/components/shared/YaliSubnav";
import { yaliContent as c } from "@/content/yali";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "YALI", description: c.hero.lead };

function ChapterHead({ eyebrow,title,lead,center=false }: {eyebrow:string;title:string;lead:string;center?:boolean}) { return <Reveal className={`${styles.chapterHead} ${center?styles.center:""}`}><p className="eyebrow">{eyebrow}</p><h2>{title}</h2><p>{lead}</p></Reveal>; }

export default function YaliPage(){
  return <main id="main-content" className={styles.page} data-theme="yali">
    <YaliSubnav />
    <section className={styles.hero}>
      <div className="container"><Reveal className={styles.heroHead}><p className={styles.productEyebrow}><i/>{c.hero.eyebrow}</p><h1><EmphasizedText text={c.hero.title} emphasis={c.hero.emphasis} /></h1><p>{c.hero.lead}</p></Reveal>
        <div className={styles.heroMedia}><div className={styles.negatives}>{c.hero.negatives.map((x,i)=><Reveal key={x} delay={i*80}><p>{x}</p></Reveal>)}<Reveal delay={240}><strong>{c.hero.closing}</strong></Reveal></div><Reveal className={styles.videoWrap}><div className={styles.aura}/>{/* TODO(asset): Encode the supplied hero footage with an H.264-capable tool and generate its poster. */}<div className={styles.video}><Image src="/images/yali-hero.png" alt="YALI promotional video still" fill priority sizes="(max-width: 767px) 100vw, 60vw"/><div className={styles.videoShade}/><button type="button" disabled aria-label="Play video (coming soon)"><span/></button></div></Reveal></div>
      </div>
    </section>

    <section id="chapter-1" className={`${styles.dark} ${styles.personalized}`}><div className="container"><ChapterHead eyebrow={c.personalized.eyebrow} title={c.personalized.title} lead={c.personalized.lead} center/><div className={styles.personalizedGrid}><div className={styles.proofs}>{c.personalized.proofs.map(([num,unit,title,text],i)=><Reveal key={num} delay={i*80}><article><div><strong>{num}</strong><span>{unit}</span></div><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div><Reveal className={styles.deviceVignette}><div className={styles.screen}><p className={styles.vignetteTime}>{c.personalized.vignette.time}</p><p className={styles.message}>{c.personalized.vignette.message}</p><div className={styles.wave}>{Array.from({length:30}).map((_,i)=><i key={i}/>)}</div><span>{c.personalized.vignette.playing}</span><strong>{c.personalized.vignette.track}</strong></div></Reveal></div></div></section>

    <section className="section"><div className="container"><ChapterHead eyebrow={c.philosophy.eyebrow} title={c.philosophy.title} lead={c.philosophy.lead} center/><Reveal className={styles.venn}>
      <svg viewBox="0 0 900 610" role="img" aria-label="Venn diagram of Personal Companion, Artist Universe, and Fan Memory forming Newnal YALI"><circle cx="350" cy="245" r="210"/><circle cx="550" cy="245" r="210"/><circle cx="450" cy="395" r="210"/></svg>
      {c.philosophy.circles.map(([title,text],i)=><div key={title} className={styles[`vennText${i+1}`]}><span aria-hidden="true">○</span><h3>{title}</h3><p>{text}</p></div>)}<strong>NEWNAL YALI</strong>
    </Reveal></div></section>

    <section id="chapter-2" className={`${styles.everyday} section`}><div className="container"><div className={styles.everydayHead}><ChapterHead eyebrow={c.everyday.eyebrow} title={c.everyday.title} lead=""/><Reveal><blockquote>{c.everyday.quote}</blockquote><p>{c.everyday.support}</p></Reveal></div><ScrollRail className={styles.timeline}>{c.everyday.tiles.map((tile,i)=><Reveal key={tile.title} className={`${styles.moment} ${i%2?styles.reverse:""}`}><div className={styles.momentCopy}><span>{tile.time}</span><h3>{tile.title}</h3><p>{tile.description}</p></div><div className={styles.momentImage}><Image src={tile.image} alt={tile.scene} fill sizes="(max-width: 767px) 100vw, 50vw"/></div></Reveal>)}</ScrollRail></div></section>

    <section id="chapter-3" className={styles.moments}><div className={styles.concert}><Image src="/images/yali-concert.png" alt="Crowd with raised hands in blue-purple stadium light" fill sizes="100vw"/><div className={styles.concertShade}/><div className={styles.lights}>{Array.from({length:18}).map((_,i)=><i key={i}/>)}</div><ChapterHead eyebrow={c.moments.eyebrow} title={c.moments.title} lead={c.moments.lead} center/></div><div className={styles.darkCards}><div className="container"><div className={styles.momentCards}>{c.moments.cards.map((card,i)=><Reveal key={card.title} delay={i*80}><article><div className={styles.cardImage}><Image src={card.image} alt={card.scene} fill sizes="(max-width: 767px) 100vw, 33vw"/></div><div><h3>{card.title}</h3><p>{card.description}</p></div></article></Reveal>)}</div></div></div></section>

    <section id="chapter-4" className={`${styles.spec} section`}><div className="container"><Reveal><p className="eyebrow">SPEC</p><h2>{c.spec.title}</h2></Reveal><div className={styles.specGrid}><Reveal className={styles.specTable}>{c.spec.rows.map(([label,value])=><div key={label}><span>{label}</span><p>{value}</p></div>)}</Reveal><Reveal className={styles.deviceRender}><Image src="/images/yali-device.png" alt="YALI circular companion device render" fill sizes="(max-width: 767px) 100vw, 40vw"/></Reveal></div><Reveal className={styles.closing}><div><a className="button buttonPrimary" href="mailto:contact@newnal.com?subject=Get%20YALI">Get YALI</a><Link className="button buttonSecondary" href="/aios">How AIOS works</Link></div><p>Powered by Newnal aios.</p></Reveal></div></section>
  </main>;
}
