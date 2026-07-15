"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./header.module.css";

const links = [
  ["Newnal aios", "/aios"],
  ["Companion Devices", "/devices"],
  ["Private Phone", "/private-phone"],
] as const;

export function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href || (href === "/devices" && pathname.startsWith("/devices/"));

  return (
    <header className={`${styles.header} ${pathname === "/devices/yali" ? styles.yaliHeader : ""}`}>
      <div className={styles.inner}>
        <Link className={styles.logo} href="/" aria-label="Newnal home">Newnal</Link>
        <nav className={styles.nav} aria-label="Main navigation">
          {links.map(([label, href]) => <Link key={href} className={isActive(href) ? styles.active : ""} href={href}>{label}</Link>)}
        </nav>
      </div>
    </header>
  );
}
