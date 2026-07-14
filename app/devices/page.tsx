import type { Metadata } from "next";
import { DeviceAccordion } from "@/components/shared/DeviceAccordion";
import { Reveal } from "@/components/shared/Reveal";
import { devicesContent as c } from "@/content/devices";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "Companion Devices", description: c.hero.lead };

export default function DevicesPage() {
  return <main id="main-content">
    <section className={styles.hero}><div className="container"><Reveal><p className="eyebrow">COMPANION DEVICES</p><h1>{c.hero.title}</h1><p className={styles.lead}>{c.hero.lead}</p></Reveal><div className={styles.rhythm}>{c.hero.rhythm.map((line,i)=><Reveal key={line} delay={i*80}><p><i className={i<3?styles[`dot${i+1}`]:""}/>{line}</p></Reveal>)}</div></div></section>
    <section className={styles.devices} aria-label="Companion device lineup"><DeviceAccordion /></section>
  </main>;
}
