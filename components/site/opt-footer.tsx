import styles from "./opt-footer.module.css";

type OptFooterProps = {
  brand: string;
  note: string;
};

export function OptFooter({ brand, note }: OptFooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>{brand}</div>
        <p>{note}</p>
      </div>
    </footer>
  );
}
