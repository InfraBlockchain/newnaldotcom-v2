"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./header.module.css";

const links = [
  ["Newnal aios", "/aios"],
  ["Companion Devices", "/devices"],
  ["Private Phone", "/private-phone"],
] as const;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`${styles.header} ${pathname === "/devices/yali" ? styles.yaliHeader : ""}`}>
      <div className={styles.inner}>
        <Link className={styles.logo} href="/" aria-label="Newnal home">Newnal</Link>
        <nav className={styles.desktopNav} aria-label="Main navigation">
          {links.map(([label, href]) => <Link key={href} className={pathname === href ? styles.active : ""} href={href}>{label}</Link>)}
        </nav>
        <button className={styles.menuButton} type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span />
        </button>
      </div>
      <div className={`${styles.mobileMenu} ${open ? styles.open : ""}`} aria-hidden={!open}>
        <nav aria-label="Mobile navigation">
          {links.map(([label, href]) => <Link key={href} href={href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>{label}</Link>)}
        </nav>
      </div>
    </header>
  );
}
