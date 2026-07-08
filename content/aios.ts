export type FigureContent = {
  label: string;
  type: "diagram" | "image";
};

type FeatureItem = {
  title: string;
  description?: string;
};

type FeatureGroup = {
  title?: string;
  items: FeatureItem[];
};

type FlowStep = {
  label: string;
  description: string;
};

type MetricItem = {
  value: string;
  label: string;
};

type PricingItem = {
  price: string;
  label: string;
};

export type SectionContent = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  paragraphs: string[];
  bullets?: string[];
  /** Render bullets after paragraph 1 for the A6 flow order. */
  bulletsAfterFirstParagraph?: boolean;
  callouts?: string[];
  features?: FeatureItem[];
  featureGroups?: FeatureGroup[];
  steps?: FlowStep[];
  metrics?: MetricItem[];
  pricing?: PricingItem[];
  closing?: string;
  cta?: {
    label: string;
    href: string;
  };
  figure?: FigureContent;
};

export type ProductContent = {
  anchorId: string;
  title: string;
  description: string;
  sections: SectionContent[];
};

export const aiosContent = {
  anchorId: "aios",
  title: "Newnal aios",
  description: "The AI native OS. Every computing era has its own OS.",
  sections: [
    {
      id: "aios-data-sovereignty",
      eyebrow: "A1 / Data Sovereignty",
      title: "ONE ARCHITECTURE. COMPLETE DATA SOVEREIGNTY",
      subtitle: "From 100% open to absolute zero.",
      paragraphs: [
        "Newnal is built on a simple belief: your data should move only by your choice.",
        "With Newnal AIOS and dedicated devices, your daily life, context, and personal data can be opened to the world’s AI systems—allowing them to understand you, adapt to you, and expand the value of your data. This is active sovereignty: the freedom to use your information to its fullest potential.",
        "On the other hand, with Newnal Private Phone, no personal data is connected at all. It creates an independent space designed to protect you from unauthorized disclosure, broken trust, and unwanted digital traces. This is defensive sovereignty: the freedom to remain unseen.",
        "The right to close, withhold, and block your data is an essential part of human sovereignty.",
        "Whether your data is fully opened or completely closed, the decision must remain yours.",
        "Newnal is the single technological foundation that enables both:",
        "the abundance of data utilization and the freedom of complete disconnection.",
      ],
      figure: {
        type: "diagram",
        label:
          "Newnal logo connected to 1 - data utilization and 0 - complete disconnection",
      },
    },
    {
      id: "aios-os-paradigm",
      eyebrow: "A2 / OS Paradigm Shift",
      title: "In the Age of AI Computing Era",
      subtitle: "Every Computing Era has its own OS",
      paragraphs: [
        "AI will not be unlocked by adding another app.",
        "An operating system transformation is required.",
        "Newnal is building the AI native OS.",
      ],
      figure: {
        type: "diagram",
        label: "Windows 95 to iOS to Newnal AIOS lineage diagram",
      },
    },
    {
      id: "aios-inconvenient",
      eyebrow: "A3 / Current AI Problem",
      title: "Why Does AI Still Feel Inconvenient?",
      paragraphs: [
        "AI is intelligent.",
        "But AI relies on you to manually define all context and intent through input. You're asked to repeatedly re-enter intentions, context, data etc. every time to achieve optimal results.",
        "AI has learned the world.",
        "But it has not learned you.",
        "So we changed the question.",
        "Not, “How do we make AI smarter?”",
        "But, “How do we build AI that understands me?”",
      ],
    },
    {
      id: "aios-my-ai",
      eyebrow: "A4 / Data Ownership",
      title: "MY AI — AI Built From You",
      subtitle: "Newnal AIOS begins with one fundamental question: Where is my data?",
      paragraphs: [
        "Today, your data is scattered across servers: Google, Meta, shopping platforms, delivery apps, coffee apps, financial institutions, and more.",
        "Yet you cannot properly use your own data. Newnal designed things differently.",
        "The Newnal AIOS is built on data architecture where:",
        "From this foundation, My AI is created.",
        "You are no longer just a user of AI.",
        "You become the creator of your own AI.",
      ],
      features: [
        {
          title: "Your data is controlled by you",
        },
        {
          title: "No one can access your data without permission",
        },
        {
          title: "You can see exactly what data was used, when, and how",
        },
      ],
    },
    {
      id: "aios-constant-input",
      eyebrow: "A5 / Proactive AI",
      title: "AI That Doesn’t Require Constant Input",
      paragraphs: [
        "Today’s AI is input-driven. But think about this: If AI truly understands you, why should you have to explain yourself every time?",
        "Newnal AIOS is not a UI (User Interface). It is an AI Interface.",
        "A single signal appears on your screen. It is not just a notification.",
        "It means: “My AI has a suggestion for me.”",
        "One principle is critical:",
        "Control always remains with you.",
      ],
      bullets: ["Silent by default", "Proactive when it matters"],
      features: [
        {
          title:
            "Looks like you could use some new glasses, I found some that match your style.",
          description: "MY AI · Just now",
        },
        {
          title:
            "The running shoes you've been considering — price comparison done",
          description: "MY AI · 5 min ago",
        },
        {
          title:
            "Want me to draft a letter for your parents' upcoming anniversary?",
          description: "MY AI · 1 hr ago",
        },
        {
          title:
            "You've got an upcoming payment — want me to take care of that transfer for you?",
          description: "MY AI · Today",
        },
        {
          title: "Long day today, want to listen to a relaxing song?",
          description: "MY AI · Today",
        },
      ],
      callouts: [
        "AI makes suggestions first — It never makes decisions for you.",
      ],
    },
    {
      id: "aios-agent-place",
      eyebrow: "A6 / Reverse Login Ecosystem",
      title: "A World Where Services Connect Without Apps",
      paragraphs: [
        "Today, to use a service, we must:",
        "Newnal reverses this structure through Reverse Login",
        "We call this ecosystem Agent Place.",
        "In the future, specialized AI agents will work for you — only with your permission.",
        "Data is more vulnerable the harder you try to protect it; counterintuitively, it is protected the more you open it.",
      ],
      bulletsAfterFirstParagraph: true,
      bullets: [
        "Download the app",
        "Log in",
        "Create passwords",
        "Verify identity",
        "Register payment",
      ],
      features: [
        {
          title:
            "You no longer log into services, but instead services log into you.",
        },
        {
          title: "Services request access to your data from your AI",
        },
        {
          title: "Only when you grant permission does data connect",
        },
      ],
    },
    {
      id: "aios-android",
      eyebrow: "A7 / Seamless Integration",
      title: "Full Android Compatibility",
      paragraphs: [
        "“So can I still use my existing apps?” Yes.",
        "Newnal AIOS runs alongside Android.",
        "Use your existing apps when needed. When you need AI, switch to AI mode.",
        "This is why we are fundamentally different from previous AI devices.",
        "We are not a break from the current systems, but a connection.",
      ],
    },
  ],
} satisfies ProductContent;
