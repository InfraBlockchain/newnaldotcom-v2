import styles from "./footer.module.css";

type FooterProps = {
  brand: string;
  footerNote: string;
};

export function Footer({ brand, footerNote }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>{brand}</div>
        <p className={styles.note}>{footerNote}</p>
      </div>
    </footer>
  );
}
