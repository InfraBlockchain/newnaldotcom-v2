"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { devicesContent } from "@/content/devices";
import styles from "./DeviceAccordion.module.css";

export function DeviceAccordion() {
  const [active, setActive] = useState(0);
  return <div className={styles.accordion}>
    {devicesContent.devices.map((device, index) => (
      <article key={device.id} className={`${styles.panel} ${styles[device.id]} ${active === index ? styles.active : ""}`}>
        <button type="button" aria-expanded={active === index} aria-controls={`device-${device.id}`} onClick={() => setActive(index)} onFocus={() => setActive(index)}>
          <span>{device.name}</span><span className={styles.expand}>+</span>
        </button>
        <div id={`device-${device.id}`} className={styles.content}>
          {device.id === "yali" ? <Image src="/images/yali-hero.png" alt="YALI AI Artist Companion in violet light" fill sizes="(max-width: 767px) 100vw, 80vw" priority /> : device.id === "illi" ? <Image src="/images/illi/accordion-key.png" alt="ILLI AI Companion supporting a family morning call" fill sizes="(max-width: 767px) 100vw, 80vw" /> : <div className={styles.placeholder} role="img" aria-label={`Placeholder for ${device.name} key visual`}><span>PHOTO · {device.name} key visual</span></div>}
          <div className={styles.overlay} />
          <div className={styles.copy}><h2>{device.title}</h2><p>{device.description}</p>{device.href ? <Link href={device.href}>{device.cta}</Link> : <span className={styles.disabled} aria-disabled="true">{device.cta}</span>}</div>
        </div>
      </article>
    ))}
  </div>;
}
