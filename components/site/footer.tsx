import Link from "next/link";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Link className={styles.logo} href="/">Newnal</Link>
      <p>© 2026 Newnal. All rights reserved.</p>
    </footer>
  );
}
