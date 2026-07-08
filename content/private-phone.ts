import type { ProductContent } from "./aios";

export const privatePhoneContent = {
  anchorId: "private-phone",
  title: "Private Phone",
  description: "Privacy that holds—even when trust breaks.",
  sections: [
    {
      id: "private-phone-hero",
      eyebrow: "P1 / Private Phone",
      title: "Privacy that holds—even when trust breaks.",
      paragraphs: [
        "Most secure phones protect you from hackers.",
        "Newnal Private Phone also protects you from the person on the other side of the conversation.",
        "Even when a private message is captured or a call is recorded without your consent, Newnal is designed to prevent that material from becoming definitive proof against you.",
        "Built for leaders, creators, executives, and anyone whose reputation is an asset.",
      ],
      bullets: [
        "De-identified communication.",
        "Independent message histories.",
        "Real-time voice transformation.",
        "End-to-end and on-device encryption.",
      ],
      cta: {
        label: "See How It Works",
        href: "#",
      },
      figure: {
        type: "image",
        label: "Private Phone hero shot image placeholder",
      },
    },
    {
      id: "private-phone-leak",
      eyebrow: "P2 / Leak-Resistant Privacy",
      title: "Privacy that survives the leak.",
      paragraphs: [
        "Encryption protects the channel. Newnal protects you when the person on the other side takes a screenshot, records a call, or shares a conversation without context.",
      ],
      features: [
        {
          title: "Decentralized Identity",
          description:
            "Communicate without exposing your personal phone number or real-world identity.",
        },
        {
          title: "Independent Message Histories",
          description:
            "Each device can retain a different conversation history, preventing any single screenshot from becoming an authoritative original.",
        },
        {
          title: "Real-Time Voice Modulation",
          description: "Transform your voiceprint before it reaches the other device.",
        },
        {
          title: "End-to-End and On-Device Encryption",
          description:
            "Protect communications in transit and sensitive data stored on the device.",
        },
      ],
    },
    {
      id: "private-phone-number",
      eyebrow: "P3 / Relationship Numbers",
      title: "A new number for every connection.",
      paragraphs: [
        "Connect directly—without sharing a phone number, email address, or personal contact information.",
        "Newnal does not sync your address book or use a permanent public identifier. When you want to connect with someone, the phone generates a unique Newnal number specifically for that relationship.",
        "Share the number directly with the other person. Once they enter it on their device, a closed, encrypted one-to-one connection is created between the two phones.",
      ],
      steps: [
        {
          label: "01. Generate",
          description: "Create a unique Newnal number for one specific contact.",
        },
        {
          label: "02. Share",
          description:
            "Pass the number directly without revealing your personal phone number or contact details.",
        },
        {
          label: "03. Connect",
          description:
            "The other person enters the number to establish an encrypted one-to-one connection.",
        },
      ],
      closing: "One person. One number. One private connection.",
      figure: {
        type: "image",
        label: "Number generation image placeholder",
      },
    },
    {
      id: "private-phone-original",
      eyebrow: "P4 / No Definitive Original",
      title: "CONVERSATIONS WITHOUT A DEFINITIVE ORIGINAL",
      paragraphs: [
        "What is captured cannot become unquestionable proof.",
        "Newnal allows the conversation history on each device to exist independently.",
        "When content is changed on one device, the record on the other device remains untouched. The two devices can therefore display different versions of the same exchange.",
        "Without one shared, authoritative record, a screenshot cannot conclusively establish what was originally said—or who said it.",
        "The conversation may be exposed.",
        "Your identity and words remain unverified.",
      ],
      figure: {
        type: "image",
        label: "Conversation mutation concept image placeholder",
      },
    },
    {
      id: "private-phone-spam",
      eyebrow: "P5 / Freedom From Ads and Spam",
      title: "Freedom From Ads and Spam",
      paragraphs: [
        "Traditional phone networks are built around one permanent number.",
        "Once that number is exposed, copied, purchased, or randomly generated, advertisers, scammers, and unknown callers can continue trying to reach you.",
        "Newnal reverses that model.",
        "Each relationship receives its own unique connection number, and only the person connected through that number can use it to contact you.",
      ],
      figure: {
        type: "diagram",
        label:
          "Traditional 1:N phone number model compared with Newnal 1:1 connection number model",
      },
    },
    {
      id: "private-phone-proof",
      eyebrow: "P6 / Proven Infrastructure",
      title: "Built on infrastructure that has already served millions.",
      paragraphs: [
        "Newnal Private Phone is built by Newnal and Blockchain Labs, drawing on more than a decade of blockchain engineering and national-scale operations.",
        "Its foundation includes InfraBlockchain, a public blockchain infrastructure designed to operate without cryptocurrency, and the technology behind COOV, South Korea’s blockchain-based COVID-19 credential service.",
        "No separate SIM card or carrier plan is required for Newnal private communications.",
        "Enterprise purchasing and deployment options are available.",
      ],
      metrics: [
        {
          value: "43M",
          label: "Users",
        },
        {
          value: "30M",
          label: "Daily transactions",
        },
        {
          value: "120",
          label: "Countries supported",
        },
      ],
      pricing: [
        {
          price: "$700",
          label: "One-time device fee",
        },
        {
          price: "$270 / year",
          label: "Private Node & Communication",
        },
      ],
    },
  ],
} satisfies ProductContent;
