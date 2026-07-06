export type NavItem = {
  label: string;
  href: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  supportingText: string;
  primaryCta: string;
  secondaryCta: string;
};

export type PhilosophyContent = {
  id: string;
  eyebrow: string;
  title: string;
  statement: string;
  paragraphs: string[];
};

export type Principle = {
  title: string;
  description: string;
};

export type PrinciplesContent = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: Principle[];
};

export type SystemBlock = {
  label: string;
  title: string;
  description: string;
  bullets: string[];
};

export type SystemContent = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  blocks: SystemBlock[];
};

export type RoadmapItem = {
  phase: string;
  title: string;
  description: string;
};

export type RoadmapContent = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: RoadmapItem[];
};

export type ClosingContent = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
};

export const homepageContent = {
  brand: "NEWNAL",
  footerNote: "Draft homepage structure for the next Newnal website.",
  navigation: [
    { label: "Philosophy", href: "#philosophy" },
    { label: "Principles", href: "#principles" },
    { label: "System", href: "#system" },
    { label: "Roadmap", href: "#roadmap" },
  ] satisfies NavItem[],
  hero: {
    eyebrow: "Draft Philosophy Homepage",
    title: "Placeholder Hero Title for a New AI-Era Product Story",
    description:
      "Placeholder hero description for the first screen. This area should eventually express Newnal's core philosophical stance in one concise paragraph.",
    supportingText:
      "Placeholder supporting text for a future statement about operating systems, personal data, and AI-native interaction.",
    primaryCta: "Placeholder CTA",
    secondaryCta: "Placeholder Secondary",
  } satisfies HeroContent,
  philosophy: {
    id: "philosophy",
    eyebrow: "Section 01",
    title: "Placeholder Philosophy Title",
    statement: "Placeholder statement about why the current model no longer feels sufficient.",
    paragraphs: [
      "Placeholder paragraph for the philosophical opening. This should later explain the shift from feature-driven devices to meaning-driven systems.",
      "Placeholder paragraph for the next layer of explanation. This should later define what Newnal believes the user should control, own, or experience differently.",
    ],
  } satisfies PhilosophyContent,
  principles: {
    id: "principles",
    eyebrow: "Section 02",
    title: "Placeholder Principles Title",
    description:
      "Placeholder description for the core principles grid. Replace with real product philosophy, operating assumptions, or user promises.",
    items: [
      {
        title: "Placeholder Principle A",
        description: "Placeholder description for a first principle or product promise.",
      },
      {
        title: "Placeholder Principle B",
        description: "Placeholder description for a second principle or system behavior.",
      },
      {
        title: "Placeholder Principle C",
        description: "Placeholder description for a third principle or user benefit.",
      },
      {
        title: "Placeholder Principle D",
        description: "Placeholder description for a fourth principle or differentiator.",
      },
    ],
  } satisfies PrinciplesContent,
  system: {
    id: "system",
    eyebrow: "Section 03",
    title: "Placeholder System Title",
    description:
      "Placeholder description for how Newnal's worldview becomes a system. This section is structured for platform logic, interface behavior, and trust architecture.",
    blocks: [
      {
        label: "Layer 01",
        title: "Placeholder System Layer One",
        description: "Placeholder summary for the first system layer.",
        bullets: [
          "Placeholder bullet for data structure or ownership behavior.",
          "Placeholder bullet for user control or permissions.",
          "Placeholder bullet for future integration logic.",
        ],
      },
      {
        label: "Layer 02",
        title: "Placeholder System Layer Two",
        description: "Placeholder summary for the second system layer.",
        bullets: [
          "Placeholder bullet for interface behavior or AI role.",
          "Placeholder bullet for operating model or context engine.",
          "Placeholder bullet for service orchestration or access flow.",
        ],
      },
    ],
  } satisfies SystemContent,
  roadmap: {
    id: "roadmap",
    eyebrow: "Section 04",
    title: "Placeholder Roadmap Title",
    description:
      "Placeholder description for a staged launch narrative. Replace with actual timing, milestone names, and rollout details later.",
    items: [
      {
        phase: "Phase 01",
        title: "Placeholder Milestone One",
        description: "Placeholder description for the first release or messaging milestone.",
      },
      {
        phase: "Phase 02",
        title: "Placeholder Milestone Two",
        description: "Placeholder description for the second release or ecosystem milestone.",
      },
      {
        phase: "Phase 03",
        title: "Placeholder Milestone Three",
        description: "Placeholder description for the third release or public transition.",
      },
    ],
  } satisfies RoadmapContent,
  closing: {
    id: "closing",
    eyebrow: "Closing Statement",
    title: "Placeholder Closing Title",
    description:
      "Placeholder closing description for the final conviction statement. This is where the new Newnal story can land with a single, sharp ending.",
    ctaLabel: "Placeholder Final Action",
  } satisfies ClosingContent,
};
