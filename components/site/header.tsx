"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./header.module.css";

const links = [
  ["Newnal aios", "/aios"],
  ["Devices", "/devices"],
  ["Private Phone", "/private-phone"],
] as const;

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const isActive = (href: string) => pathname === href || (href === "/devices" && pathname.startsWith("/devices/"));

  return (
    <header className={`${styles.header} ${pathname === "/devices/yali" ? styles.yaliHeader : ""}`}>
      <div className={styles.inner}>
        <Link className={styles.logo} href="/" aria-label="Newnal home">Newnal</Link>
        {isHome ? (
          <nav className={styles.homeNav} aria-label="Home resources">
            <a href="https://keynote.newnal.com/v/4sGbG7ZxfBJRnfJbBPa8P?_b=1" target="_blank" rel="noreferrer">Keynote ↗</a>
            <a href="https://column.newnal.com/" target="_blank" rel="noreferrer">Founder column ↗</a>
          </nav>
        ) : (
          <nav className={styles.nav} aria-label="Main navigation">
            {links.map(([label, href]) => <Link key={href} className={isActive(href) ? styles.active : ""} href={href}>{label}</Link>)}
          </nav>
        )}
      </div>
    </header>
  );
}
