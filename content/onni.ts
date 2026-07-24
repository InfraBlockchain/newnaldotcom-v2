const onniImage = "/images/figma/devices-card-onni.png";

export const onniContent = {
  hero: {
    eyebrow: "ONNI · FAMILY AI COMPANION",
    title: "Growing together, every day.",
    emphasis: "every day.",
    lead: "ONNI is a warm, playful AI companion for young children and the families who care for them.",
    leadDetail: "It turns everyday curiosity, routines, and shared moments into experiences that help children feel seen while keeping parents connected and in control.",
    negatives: ["Not another screen.", "Not another distraction.", "Not a replacement for family."],
    closing: "A companion made to grow alongside your family.",
  },
  personalized: {
    title: "Every child grows in their own way.",
    lead: [
      "Children are curious in different ways, at different times, and in different rhythms.",
      "ONNI gets to know the stories, questions, routines, and interests that make a child unique — then responds with care that fits their world.",
      "The result is a companion that feels less like technology, and more like a familiar part of the day.",
    ],
    proofs: [
      ["1", "shared rhythm", "Follows their day.", "ONNI can shape conversations and prompts around the routines a family chooses together."],
      ["0", "unwanted noise", "Nothing competing for attention.", "Every interaction is designed to support a moment, not interrupt it."],
      ["100%", "family-led", "Care stays connected.", "Parents decide how ONNI participates, with controls that stay close to home."],
    ],
    vignette: {
      time: "ONNI · 7:42 AM",
      message: "Good morning. Should we make today’s story about the moon, the ocean, or a secret garden?",
      playing: "TODAY'S SPARK",
      track: "A story waiting to begin",
    },
  },
  philosophy: {
    title: "Made for children,\nconnected to family.",
    lead: "A companion that gives children room to explore while keeping the people who care for them close.",
    circles: [
      ["Child’s World", ["curiosity", "play", "routine", "imagination"]],
      ["Family Care", ["guidance", "boundaries", "connection", "trust"]],
      ["Shared Memories", ["stories", "moments", "growth", "togetherness"]],
    ],
  },
  everyday: {
    title: "Small moments,\nmade more meaningful.",
    quote: "“A little more confidence for children. A little more connection for families.”",
    support: [
      "A gentle start before school or daycare.",
      "A playful question when curiosity appears.",
      "A familiar transition between busy parts of the day.",
      "A calmer moment to wind down together.",
    ],
    tiles: [
      { time: "MORNING", title: "Start with Curiosity", description: "A story, question, or small plan to help a child begin the day with confidence.", image: onniImage, scene: "ONNI companion for a child's morning routine" },
      { time: "AFTERNOON", title: "Make Room to Explore", description: "Prompts and play that follow a child's interests without taking over their attention.", image: onniImage, scene: "ONNI companion for afternoon exploration" },
      { time: "ANY MOMENT", title: "A Familiar Presence", description: "A thoughtful companion for transitions, questions, and the small moments in between.", image: onniImage, scene: "ONNI companion in a family home" },
      { time: "EVENING", title: "Wind Down Together", description: "A calmer way to reflect on the day, share a story, and settle into the evening.", image: onniImage, scene: "ONNI companion for an evening family routine" },
    ],
  },
  moments: {
    title: "Built for the whole family.",
    lead: "ONNI is not another screen competing for attention. It is a shared companion that can bring children and caregivers into the same moment.",
    cards: [
      { title: "Family Updates", description: "Stay close to the moments that matter, with the family setting the boundaries and pace.", image: onniImage, scene: "ONNI family update experience" },
      { title: "Shared Stories", description: "Turn questions, discoveries, and daily rituals into memories you can revisit together.", image: onniImage, scene: "ONNI shared story experience" },
      { title: "Growing Independence", description: "Give children room to explore with guidance that remains connected to family care.", image: onniImage, scene: "ONNI supporting a child's independence" },
    ],
  },
  spec: {
    title: "Designed to belong at home.",
    rows: [
      ["OPERATING SYSTEM", "Powered by Newnal 'aios'"],
      ["COMPANION MODE", "Voice, visual, and family-aware interactions"],
      ["FAMILY CONTROLS", "Parent-managed permissions and shared settings"],
      ["CONNECTIVITY", "Secure Wi-Fi and Bluetooth connection"],
      ["PRIVACY", "Your family data stays under your control"],
    ],
  },
} as const;
