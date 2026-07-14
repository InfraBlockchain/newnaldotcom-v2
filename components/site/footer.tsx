import Link from "next/link";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div><Link className={styles.logo} href="/">Newnal</Link><p>Intelligence that truly knows you.<br />Data under your control.</p></div>
        <nav aria-label="Products"><strong>Products</strong><Link href="/aios">Newnal aios</Link><Link href="/devices">Companion Devices</Link><Link href="/private-phone">Private Phone</Link></nav>
        <nav aria-label="Contact"><strong>Connect</strong><a href="mailto:contact@newnal.com">contact@newnal.com</a><span>Seoul, Republic of Korea</span></nav>
      </div>
      <div className={styles.bottom}><span>© 2026 Newnal · Blockchain Labs. All rights reserved.</span><span>Privacy · Terms</span></div>
    </footer>
  );
}
