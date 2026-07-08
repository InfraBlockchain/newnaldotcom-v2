import { Fragment } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";
import type { SectionContent } from "@/content/aios";
import { FigurePlaceholder } from "./figure-placeholder";
import styles from "./content-section.module.css";

type Tone = "light" | "dark" | "muted";

/** Prefer an even split; only use 3 columns when the count divides evenly by 3. */
function gridColumns(count: number) {
  return count % 3 === 0 && count >= 3 ? 3 : 2;
}

type ContentSectionProps = {
  section: SectionContent;
  tone: Tone;
  priorityFigure?: boolean;
};

export function ContentSection({
  section,
  tone,
  priorityFigure = false,
}: ContentSectionProps) {
  const hasVisual = Boolean(section.figure);
  const bulletList = section.bullets?.length ? (
    <ul className={styles.bullets}>
      {section.bullets.map((bullet) => (
        <li key={bullet}>{bullet}</li>
      ))}
    </ul>
  ) : null;
  const showBulletsAfterFirstParagraph = Boolean(
    section.bulletsAfterFirstParagraph && bulletList,
  );

  return (
    <section id={section.id} className={`${styles.section} ${styles[tone]}`}>
      <div className={`${styles.inner} ${hasVisual ? styles.withVisual : ""}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>{section.eyebrow}</p>
          <h2 className={styles.title}>{section.title}</h2>
          {section.subtitle ? <p className={styles.subtitle}>{section.subtitle}</p> : null}
          <div className={styles.paragraphs}>
            {section.paragraphs.map((paragraph, index) => (
              <Fragment key={paragraph}>
                <p>{paragraph}</p>
                {showBulletsAfterFirstParagraph && index === 0 ? bulletList : null}
              </Fragment>
            ))}
          </div>
          {showBulletsAfterFirstParagraph ? null : bulletList}
          {section.callouts?.length ? (
            <div className={styles.callouts}>
              {section.callouts.map((callout) => (
                <p key={callout}>{callout}</p>
              ))}
            </div>
          ) : null}
          {section.cta ? (
            <Link href={section.cta.href} className={styles.cta}>
              {section.cta.label}
            </Link>
          ) : null}
        </div>
        {section.figure ? (
          <div className={styles.visual}>
            <FigurePlaceholder figure={section.figure} priority={priorityFigure} />
          </div>
        ) : null}
      </div>
      {section.features?.length ? <FeatureGrid features={section.features} tone={tone} /> : null}
      {section.steps?.length ? <StepFlow steps={section.steps} tone={tone} /> : null}
      {section.featureGroups?.length ? (
        <FeatureGroups featureGroups={section.featureGroups} tone={tone} />
      ) : null}
      {section.metrics?.length ? <MetricGrid metrics={section.metrics} tone={tone} /> : null}
      {section.pricing?.length ? <PricingGrid pricing={section.pricing} tone={tone} /> : null}
      {section.closing ? <p className={`${styles.closing} ${styles[tone]}`}>{section.closing}</p> : null}
    </section>
  );
}

function FeatureGrid({
  features,
  tone,
}: {
  features: NonNullable<SectionContent["features"]>;
  tone: Tone;
}) {
  return (
    <div
      className={`${styles.grid} ${styles[tone]}`}
      style={{ "--cols": gridColumns(features.length) } as CSSProperties}
    >
      {features.map((feature) => (
        <article className={styles.card} key={feature.title}>
          <h3>{feature.title}</h3>
          {feature.description ? <p>{feature.description}</p> : null}
        </article>
      ))}
    </div>
  );
}

function StepFlow({
  steps,
  tone,
}: {
  steps: NonNullable<SectionContent["steps"]>;
  tone: Tone;
}) {
  return (
    <div
      className={`${styles.steps} ${styles[tone]}`}
      style={{ "--cols": gridColumns(steps.length) } as CSSProperties}
    >
      {steps.map((step) => (
        <article className={styles.step} key={step.label}>
          <span>{step.label}</span>
          <p>{step.description}</p>
        </article>
      ))}
    </div>
  );
}

function FeatureGroups({
  featureGroups,
  tone,
}: {
  featureGroups: NonNullable<SectionContent["featureGroups"]>;
  tone: Tone;
}) {
  return (
    <div className={styles.groups}>
      {featureGroups.map((group, index) => (
        <div className={styles.group} key={group.title ?? `group-${index}`}>
          {group.title ? <h3 className={styles.groupTitle}>{group.title}</h3> : null}
          <FeatureGrid features={group.items} tone={tone} />
        </div>
      ))}
    </div>
  );
}

function MetricGrid({
  metrics,
  tone,
}: {
  metrics: NonNullable<SectionContent["metrics"]>;
  tone: Tone;
}) {
  return (
    <div
      className={`${styles.metrics} ${styles[tone]}`}
      style={{ "--cols": gridColumns(metrics.length) } as CSSProperties}
    >
      {metrics.map((metric) => (
        <div className={styles.metric} key={metric.label}>
          <strong>{metric.value}</strong>
          <span>{metric.label}</span>
        </div>
      ))}
    </div>
  );
}

function PricingGrid({
  pricing,
  tone,
}: {
  pricing: NonNullable<SectionContent["pricing"]>;
  tone: Tone;
}) {
  return (
    <div
      className={`${styles.pricing} ${styles[tone]}`}
      style={{ "--cols": gridColumns(pricing.length) } as CSSProperties}
    >
      {pricing.map((item) => (
        <div className={styles.price} key={`${item.price}-${item.label}`}>
          <strong>{item.price}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}
