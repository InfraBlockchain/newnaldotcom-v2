import { NavItem } from "@/content/homepage";
import styles from "./header.module.css";

type HeaderProps = {
  brand: string;
  navigation: NavItem[];
};

export function Header({ brand, navigation }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#" className={styles.brand}>
          {brand}
        </a>
        <nav className={styles.nav} aria-label="Primary">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
