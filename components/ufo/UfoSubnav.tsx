import Link from "next/link";
import { ufoContent } from "@/content/ufo";
import styles from "./UfoSubnav.module.css";

export function UfoSubnav() {
  const { subnav } = ufoContent;

  return (
    <nav className={styles.nav} aria-label="UFO page navigation">
      <div className={styles.inner}>
        <div className={styles.brand}>
          <strong>{subnav.name}</strong>
          <span>· {subnav.tagline}</span>
        </div>
        <div className={styles.chapter}>
          <span className={styles.chapterDot} aria-hidden="true" />
          <span>{subnav.chapter}</span>
        </div>
        <div className={styles.actions}>
          <div className={styles.switcher} aria-label="Companion device pages">
            <Link href="/devices/yali">YALI</Link>
            <span aria-disabled="true">ILLI</span>
            <strong aria-current="page">UFO</strong>
          </div>
          <a className={styles.cta} href="mailto:contact@newnal.com?subject=Get%20UFO">
            {subnav.cta}
          </a>
        </div>
      </div>
    </nav>
  );
}
