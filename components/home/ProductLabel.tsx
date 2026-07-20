import styles from "./ProductLabel.module.css";

type LabelPart = {
  readonly text: string;
  readonly wordmark?: boolean;
};

type ProductLabelProps = {
  label: readonly (readonly LabelPart[])[];
  wordmark?: boolean;
};

export function ProductLabel({ label, wordmark = false }: ProductLabelProps) {
  return (
    <span className={styles.label}>
      {label.map((line, lineIndex) => (
        <span className={styles.line} key={lineIndex}>
          {line.map((part, partIndex) => (
            <span
              className={wordmark && "wordmark" in part && part.wordmark ? styles.wordmark : undefined}
              key={partIndex}
            >
              {part.text}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
}
