import type { Metadata } from "next";
import Image from "next/image";
import { DeviceAccordion } from "@/components/shared/DeviceAccordion";
import { devicesContent as c } from "@/content/devices";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "Companion Devices", description: c.hero.lead };

export default function DevicesPage() {
  return <main id="main-content">
    <section className={styles.hero}>
      <Image src="/images/devices/hero-companions.png" alt="" fill priority sizes="100vw" />
      <div className="srOnly"><h1>{c.hero.title}</h1><p>{c.hero.lead}</p></div>
      <div className={styles.mobileHeroCopy}><h1>{c.hero.title}</h1><p>{c.hero.rhythm.join(" ")}</p></div>
    </section>
    <section className={styles.devices} aria-label="Companion device lineup"><DeviceAccordion /></section>
  </main>;
}
