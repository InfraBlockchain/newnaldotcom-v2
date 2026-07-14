type EmphasizedTextProps = {
  text: string;
  emphasis: string;
};

export function EmphasizedText({ text, emphasis }: EmphasizedTextProps) {
  const [before, after] = text.split(emphasis);

  return <>{before}<em>{emphasis}</em>{after}</>;
}
