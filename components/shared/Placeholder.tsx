import styles from "./Placeholder.module.css";

export function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return <div className={`${styles.placeholder} ${className}`} role="img" aria-label={`Placeholder: ${label}`}><span>PHOTO · {label}</span></div>;
}
