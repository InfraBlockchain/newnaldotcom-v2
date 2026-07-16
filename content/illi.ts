export const illiContent = {
  hero: {
    eyebrow: "ILLI · FAMILY CARE COMPANION",
    title: "Care that feels like family.",
    emphasis: "feels like family.",
    lead: "ILLI is your Family Care Companion, powered by Newnal AIOS.",
    leadDetail: "A quiet check-in. A reminder that lands with warmth. A voice from the family when it matters most.",
    negatives: ["Not another health app.", "Not another alert system.", "Not a monitoring device."],
    closing: "A daily companion built around the people you care for.",
  },
  personalized: {
    eyebrow: "01 · SUPPORTIVE PRESENCE",
    title: "Support that stays with the rhythm of the day.",
    lead: [
      "Most care services wait for something to go wrong.",
      "ILLI is different. It learns your routines, preferences, and needs — then provides support throughout everyday life.",
      "The result is care that feels less like supervision, and more like family.",
    ],
    proofs: [
      [
        "24h",
        "Always",
        "Support around the clock.",
        "ILLI learns your daily rhythm and provides reminders, encouragement, and check-ins at the moments that matter most.",
      ],
      [
        "1",
        "Daily ritual",
        "A moment of connection.",
        "Every interaction is a chance to feel cared for and understood, woven into your natural routine.",
      ],
      [
        "0",
        "No burden",
        "Care without intrusion.",
        "ILLI respects your independence. Support arrives gently, not as demands or interruptions.",
      ],
    ],
    vignette: {
      time: "FROM YOUR CARE CIRCLE · 9:30 AM",
      message: "Good morning. Your medication reminder, and the weather looks nice for a walk today.",
      playing: "CARE CHECK-IN",
      track: "Connection moment · Family care",
    },
  },
  philosophy: {
    eyebrow: "· CARE THAT CONNECTS ·",
    title: "It understands the whole person.",
    lead: "Care is not just medical or logistical. It is emotional, practical, and deeply personal. ILLI brings the whole picture together.",
    circles: [
      ["Your Life", ["daily routines", "preferences", "independence", "dignity"]],
      ["Your Family", ["support", "involvement", "peace of mind", "connection"]],
      ["Trusted Services", ["health", "safety", "wellness", "care coordination"]],
    ],
  },
  everyday: {
    eyebrow: "02 · MOMENTS OF CARE",
    title: "Stay close, even\nwhen you are apart",
    quote: '"ILLI brings family closer by keeping everyone informed and supported."',
    support: [
      "A medication reminder at just the right time.",
      "A check-in when isolation risk appears.",
      "Coordination between family members and care providers.",
      "Peace of mind that comes from knowing someone is connected and cared for.",
    ],
    tiles: [
      {
        time: "MORNING",
        title: "Health & Medication",
        description:
          "Gentle reminders for medications, meals, and wellness routines timed to your natural schedule.",
        image: "/images/illi/everyday-health.png",
        scene: "Health reminder from ILLI",
      },
      {
        time: "ANY MOMENT",
        title: "Shopping & Errands",
        description: "ILLI helps with practical tasks — from shopping lists to appointment coordination.",
        image: "/images/illi/everyday-errands.png",
        scene: "ILLI practical support",
      },
      {
        time: "ANYTIME",
        title: "Emergency Contact",
        description: "In moments when it matters, ILLI can alert your family and trusted contacts instantly.",
        image: "/images/illi/everyday-emergency.png",
        scene: "ILLI emergency connection",
      },
      {
        time: "NIGHT",
        title: "Evening Recap",
        description: "End the day with a summary of wellness, accomplishments, and care moments.",
        image: "/images/illi/everyday-night.png",
        scene: "Evening recap with ILLI",
      },
    ],
  },
  moments: {
    eyebrow: "· CARE THAT MATTERS ·",
    title: "A companion that stays with the whole day.",
    lead: "ILLI helps you stay connected to what matters most — health, family, independence, and peace of mind.",
    cards: [
      {
        title: "Independence, protected",
        description:
          "Support that respects autonomy. ILLI empowers rather than restricts, keeping people connected while maintaining their dignity and choices.",
        image: "/images/illi/moments-independence.png",
        scene: "ILLI independence support",
      },
      {
        title: "Family, closer by design",
        description:
          "Family members stay informed without intrusion. Real-time insights and gentle notifications keep everyone aware and connected.",
        image: "/images/illi/moments-family.png",
        scene: "ILLI family connection",
      },
      {
        title: "Trusted care, connected",
        description:
          "Healthcare providers and care coordinators get the insights they need to provide better, more personalized support.",
        image: "/images/illi/moments-care.png",
        scene: "ILLI care coordination",
      },
    ],
  },
  spec: {
    title: "Made to keep close.",
    rows: [
      ["OPERATING SYSTEM", "Powered by Newnal 'aios'"],
      ["DIMENSIONS", "86 mm diameter × 26 mm depth"],
      ["DISPLAY", "2.8-inch circular AMOLED display"],
      ["CONNECTIVITY", "Wi-Fi and Bluetooth connectivity"],
      ["LIGHTING", "360° translucent LED light guide ring"],
      ["AUDIO", "30cc independent acoustic enclosure"],
    ],
  },
} as const;
