import type { Metadata } from "next";
import { BookmarkIcon, MicrophoneIcon, UserIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { EmphasizedText } from "@/components/shared/EmphasizedText";
import { AutoPauseVideo } from "@/components/shared/AutoPauseVideo";
import { Reveal } from "@/components/shared/Reveal";
import { ScrollRail } from "@/components/shared/ScrollRail";
import { yaliContent as c } from "@/content/yali";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "YALI", description: c.hero.lead };

function ChapterHead({ title, lead, center = false }: {title:string;lead:string | readonly string[];center?:boolean}) {
  return (
    <Reveal className={`${styles.chapterHead} ${center ? styles.center : ""}`}>
      <h2>{title}</h2>
      {typeof lead === "string" ? <p>{lead}</p> : <div className={styles.chapterLead}>{lead.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>}
    </Reveal>
  );
}

const philosophyIcons = [UserIcon, MicrophoneIcon, BookmarkIcon] as const;

function PhilosophyIcon({ index }: { index: number }) {
  const Icon = philosophyIcons[index] ?? philosophyIcons[philosophyIcons.length - 1];
  return <Icon aria-hidden="true" />;
}

export default function YaliPage(){
  return <main id="main-content" className={styles.page} data-theme="yali">
    <section className={styles.hero}>
      <div className="container"><Reveal className={styles.heroHead}><h1><EmphasizedText text={c.hero.title} emphasis={c.hero.emphasis} /></h1><p>{c.hero.lead}</p><p>{c.hero.leadDetail}</p></Reveal>
        <Reveal className={styles.heroStatement}><div className={styles.negatives}><div className={styles.negativeLines}>{c.hero.negatives.map((line) => <p key={line}>{line}</p>)}</div></div><p className={styles.heroClosing}>{c.hero.closing}</p></Reveal>
      </div>
      <Reveal className={styles.heroFilm}><AutoPauseVideo className={styles.heroFilmVideo} src="/images/yali/hero-film.mp4" poster="/images/yali/figma-hero-wide.png" ariaLabel="YALI artist companion film" /></Reveal>
    </section>

    <section id="chapter-1" className={`${styles.dark} ${styles.personalized}`}><div className="container"><ChapterHead title={c.personalized.title} lead={c.personalized.lead} center/><div className={styles.personalizedGrid}><div className={styles.proofs}>{c.personalized.proofs.map(([num,unit,title,text],i)=><Reveal key={num} delay={i*80}><article><div><strong>{num}</strong><span>{unit}</span></div><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div><Reveal className={styles.deviceVignette}><div className={styles.screen}><p className={styles.vignetteTime}>{c.personalized.vignette.time}</p><p className={styles.message}>{c.personalized.vignette.message}</p><div className={styles.wave}>{Array.from({length:30}).map((_,i)=><i key={i}/>)}</div><span>{c.personalized.vignette.playing}</span><strong>{c.personalized.vignette.track}</strong></div></Reveal></div></div></section>

    <section className="section"><div className="container"><ChapterHead title={c.philosophy.title} lead={c.philosophy.lead} center/><Reveal className={styles.venn}>
      <svg viewBox="0 0 900 700" role="img" aria-label="Venn diagram of Personal Companion, Artist Universe, and Fan Memory forming Newnal YALI"><circle cx="290" cy="250" r="225"/><circle cx="610" cy="250" r="225"/><circle cx="450" cy="480" r="225"/></svg>
      {c.philosophy.circles.map(([title,items],i)=><div key={title} className={styles[`vennText${i+1}`]}><PhilosophyIcon index={i}/><h3>{title}</h3><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}<strong>YALI</strong>
    </Reveal><p className={styles.vennCaption}>Powered by Newnal</p></div></section>

    <section id="chapter-2" className={`${styles.everyday} section`}><div className="container"><div className={styles.everydayHead}><ChapterHead title={c.everyday.title} lead=""/><Reveal><blockquote>{c.everyday.quote}</blockquote><p>{c.everyday.support.map((line) => <span key={line}>{line}</span>)}</p></Reveal></div><ScrollRail className={styles.timeline}>{c.everyday.tiles.map((tile,i)=><Reveal key={tile.title} className={`${styles.moment} ${i%2?styles.reverse:""}`}><div className={styles.momentCopy}><span>{tile.time}</span><h3>{tile.title}</h3><p>{tile.description}</p></div><div className={styles.momentImage}><Image src={tile.image} alt={tile.scene} fill sizes="(max-width: 767px) 100vw, 50vw"/></div></Reveal>)}</ScrollRail></div></section>

    <section id="chapter-3" className={styles.moments}><div className={styles.concert}><Image src="/images/yali-concert.png" alt="Crowd with raised hands in blue-purple stadium light" fill sizes="100vw"/><div className={styles.concertShade}/><div className={styles.lights}>{Array.from({length:18}).map((_,i)=><i key={i}/>)}</div><ChapterHead title={c.moments.title} lead={c.moments.lead} center/></div><div className={styles.darkCards}><div className="container"><div className={styles.momentCards}>{c.moments.cards.map((card,i)=><Reveal key={card.title} delay={i*80}><article><div className={styles.cardImage}><Image src={card.image} alt={card.scene} fill sizes="(max-width: 767px) 100vw, 33vw"/></div><div><h3>{card.title}</h3><p>{card.description}</p></div></article></Reveal>)}</div></div></div></section>

    <section id="chapter-4" className={`${styles.spec} section`}><div className="container"><Reveal><p className="eyebrow">SPEC</p><h2>{c.spec.title}</h2></Reveal><div className={styles.specGrid}><Reveal className={styles.specTable}>{c.spec.rows.map(([label,value])=><div key={label}><span>{label}</span><p>{value}</p></div>)}</Reveal><Reveal className={styles.deviceRender}><Image src="/images/yali/spec-device.png" alt="YALI circular companion device" fill sizes="(max-width: 767px) 100vw, 40vw"/></Reveal></div></div></section>
  </main>;
}
