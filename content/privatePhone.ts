export const privatePhoneContent = {
  numbers: ["482-KRN-3917", "731-BXQ-5204", "156-GHT-8463", "629-MLP-7051", "347-FVC-6590", "518-JNR-2746", "894-DWZ-1328"],
  hero: {
    // TODO(link): Replace the disabled CTA state when the How It Works PDF URL is provided.
    eyebrow: "CHAPTER 01 — OVERTURE",
    title: "Privacy that holds— even when trust breaks.",
    sub: "Most secure phones defend against hackers. Newnal defends against the person on the other side.",
    audience: "Built for leaders, creators, executives, and anyone whose reputation is an asset.",
    cta: "See How It Works →",
  },
  protects: {
    eyebrow: "CHAPTER 02 — WHAT NEWNAL PROTECTS", title: "Privacy that survives the leak.",
    lead: "Encryption protects the channel. Newnal protects you when the person on the other side takes a screenshot, records a call, or shares a conversation out of context.",
    items: [
      ["Decentralized Identity", "Communicate without exposing your personal phone number, email, or any real-world identifier. Newnal issues an identity you control."],
      ["Independent Message Histories", "Every device holds its own record. When content changes on one, the other stays untouched—no single copy can claim to be the original."],
      ["Real-Time Voice Modulation", "Transform your voiceprint before it leaves your device. What is recorded cannot be traced back to your natural voice."],
      ["End-to-End & On-Device Encryption", "Messages and calls are protected in transit. Sensitive data at rest is sealed on-device, inaccessible even to Newnal."],
    ],
  },
  works: {
    eyebrow: "CHAPTER 03 — HOW IT WORKS", title: "A new number for every connection.", lead: "Newnal never syncs your address book or reuses a permanent identifier. Every relationship earns its own private line.",
    steps: [
      ["Generate", "Your Newnal device mints a fresh number reserved for one specific person."],
      ["Share", "Hand it off directly—by voice, gesture, or one-time code. No address book leaves your phone."],
      ["Connect", "The other person enters the number once. From then on, you share a closed, encrypted line."],
    ],
    closing: "One person. One number. One private connection.",
  },
  leak: {
    eyebrow: "CHAPTER 04 — WHEN A CONVERSATION IS EXPOSED", title: "A screenshot is no longer proof.", lead: "Each device retains its own version of the conversation. When one side rewrites a message, the other side still holds the original—so no single capture can settle the truth.",
    a: { label: "DEVICE A · LATER EDITED", messages: ["Where are we tomorrow?", "Cancel it.", "Understood."], caption: "Record on this device was changed after the conversation." },
    b: { label: "DEVICE B · ORIGINAL PRESERVED", messages: ["Where are we tomorrow?", "8pm, same place.", "See you."], caption: "The other device holds the original record, untouched." },
    closing: "The conversation may be exposed. Your identity and words remain unverified.",
  },
  inbox: { eyebrow: "CHAPTER 05 — AN INBOX ONLY YOU FILL", title: "Freedom From Ads and Spam", lead: "Traditional networks give one number away to everyone. Newnal issues a dedicated number for every person you trust—so no one else can reach you." },
  contacts: { eyebrow: "CHAPTER 07 — CONTACTS ON THE OTHER SIDE", title: "Your contacts can join for free.", lead: "Newnal Private Phone is built so your protection does not depend on the other person buying the same device. No Private Phone required on their side. No phone number exchange.", summary: "The other person installs the free connection app, enters the number, and joins your encrypted 1:1 communication channel." },
  compare: {
    eyebrow: "CHAPTER 08 — WHERE PROTECTION LIVES", title: "Private Phone vs Free App", lead: "The free connection app allows your contacts to communicate with you securely. But the deeper protection comes from the Newnal Private Phone itself.",
    rows: [
      ["Voice modulation", "yes", "no"], ["Identity separation", "yes", "no"], ["Unique number generation", "yes", "no"], ["Device-level private environment", "yes", "no"], ["Encrypted 1:1 messaging", "yes", "yes"],
      // TODO(product): Confirm whether Independent message history is supported by the Free Connection App.
      ["Independent message history", "yes", "tbd"],
    ],
  },
  foundation: {
    eyebrow: "CHAPTER 06 — TRUSTED FOUNDATION", title: "Built on infrastructure that has already served millions.", lead: "Newnal and Blockchain Labs bring more than a decade of engineering: InfraBlockchain public infrastructure, and the technology behind COOV—the blockchain-based COVID-19 credential trusted by Korea and 120 countries.",
    proofs: [["43M", "Users", "on Newnal infrastructure"], ["30M", "Daily transactions", "processed reliably"], ["120", "Countries", "with COOV credentials"]],
    scale: "The same foundation that Korea trusted for COVID-19 credentials.", credit: "Powered by InfraBlockchain public infrastructure · Engineered by Blockchain Labs",
    prices: [["PRIVATE PHONE", "One-time device fee", "$700", "Includes private-node hardware.", "No SIM card or carrier plan required."], ["PRIVATE COMMUNICATION", "Annual subscription", "$270 / year", "Newnal private-node service.", "Enterprise deployment options available."], ["FREE CONNECTION APP", "For your contacts", "$0", "For contacts on the other side.", "* No number generation, no voice modulation."]],
  },
} as const;
