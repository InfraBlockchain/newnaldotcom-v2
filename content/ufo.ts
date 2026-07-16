// Verbatim copy per docs/spec/07-ufo.md §7 (Figma 405:460, extracted 2026-07-16).
// Do not paraphrase.
export const ufoContent = {
  subnav: { name: "UFO", tagline: "AI Outside-World Companion", chapter: "Chapter · Out in the World", cta: "Get UFO" },
  hero: {
    badge: "UFO · REAL-WORLD ADVENTURE DEVICE",
    title: "UFO — REAL-WORLD ADVENTURE DEVICE",
    lead: "Powered by Newnal AIOS, UFO is a wearable adventure device that transforms the everyday into the extraordinary. It turns real places into treasure zones, missions, and collectible moments — making every walk, park, school route, and city corner feel like part of a game.",
    leadLines: ["Screens off.", "Step outside.", "Start the hunt."],
    photo: { label: "UFO · REAL-WORLD PLAY", caption: "Screens off. Step outside. Start the hunt.", chip: "Watch film · 1:36" },
  },
  showcase: {
    eyebrow: "WEARABLE ADVENTURE",
    title: "Small enough to wear. Powerful enough to start an adventure",
    lead: [
      "UFO is designed to move with you.",
      "Attach it to your wrist, shoelace, backpack strap, keyring, or watch band — then let the device guide you through the world around you.",
      "Built for everyday movement.",
      "Ready for spontaneous play.",
    ],
    mounts: [
      { num: "01", tag: "wrist", title: "Wrist close-up", text: "For quick access and active play." },
      { num: "02", tag: "shoelace", title: "Shoelace close-up", text: "For movement-based missions and outdoor exploration." },
      { num: "03", tag: "backpack strap", title: "Backpack strap close-up", text: "For school, travel, and group adventures." },
      { num: "04", tag: "keyring", title: "Keyring close-up", text: "For always-ready treasure hunting." },
    ],
    panel: {
      signal: { label: "SIGNAL · UFO POWERED", sub: "Attach anywhere · light guides the rest.", text: "Wrist · shoelace · backpack · keyring — the world is your board." },
      mode: { label: "TREASURE MODE · READY", text: "The world becomes the map." },
      today: { label: "TODAY · SNAP HUNTING", swatches: ["#6b9e94", "#8cb8ad", "#385952", "#b8d9d1"], quote: "\"Every walk turned into a hunt. My daily route feels new again.\"" },
    },
  },
  editorial: {
    eyebrow: "TWO WAYS TO HUNT · 03",
    title: "Hunt treasures in two different ways",
    quote: "\"UFO gives you two ways to play in the real world. Some treasures are hidden as physical Treasure Cards. Others are hidden in the places and objects already around you.\"",
    support: "Find the card. Or capture the world. Either way, the hunt begins outside.",
    cards: [
      {
        wide: true,
        media: { badge: "WEEKS 1-3 · SNAP HUNTING", caption: "Every month begins with a three-week hunt." },
        label: "SNAP HUNTING",
        title: "Track down custom treasures.",
        body: "Every month begins with a three-week hunt. Track down custom treasures to charge your Power gauge and unlock the gateway to Treasure Card Hunting.",
      },
      {
        wide: false,
        media: { badge: "WEEK 4 · STAKES RAISED", caption: "Week four. The stakes are raised.", editorial: "Physical real-world Treasure Cards." },
        label: "TREASURE CARD HUNTING",
        title: "The most valuable rewards yet.",
        body: "Treasure Card mode is activated in Week 4 of each month. Hunters search for physical real-world Treasure Cards — featuring the most valuable rewards yet.",
      },
      {
        wide: false,
        media: { badge: "IN THE REAL WORLD · SNAP", swatches: ["#8cb8ad", "#6b9e94", "#bfd9d1", "#477a73"] },
        label: "SNAP HUNTING · PROCESS",
        title: "Step into the real world.",
        body: "In Snap Hunting mode, treasures are hidden in plain sight — on murals, signs, statues, or trees. When the map guides you to the spot, find the right target, and take the shot with your camera. Newnal aios verifies your photo and location, instantly unlocking your reward.",
      },
      {
        wide: true,
        media: { badge: "SEARCH FLOW · TREASURE CARD", caption: "Follow the map. Let the device take over. Follow the light.", equalizer: true },
        label: "TREASURE CARD · PROCESS",
        title: "No screens. Follow the light.",
        body: "Follow the map: the app guides you to the edge of the treasure zone. Let the device take over: once you arrive, UFO guides the rest of the way. Follow the light: as you draw closer, the device shifts its light patterns, letting you lock onto the signal without ever staring at a screen.",
      },
    ],
  },
  cinematic: {
    eyebrow: "· TREASURES MADE FOR YOU · 04",
    title: "Treasures Made for You",
    body: "UFO rewards are powered by Newnal AIOS. With the player's permission, My Data can help personalize the reward — so the treasure you unlock feels more relevant to your life, interests, and moments. The more your AIOS understands what you like, the more personal the treasure can become. Not random prizes. Rewards that feel like they found you.",
    strip: { caption: "04 · Treasures Made for You", link: "Explore" },
    cards: [
      { num: "01", title: "A runner may discover running gear.", text: "Because UFO listens to how you move — trails, pace, and rhythm become the treasure map." },
      { num: "02", title: "A foodie may unlock a restaurant experience.", text: "Because taste is a signal too — the reward matches what you love to eat, drink, and try." },
      { num: "03", title: "Something that fits the occasion.", text: "A player preparing for a special day may receive something that fits the occasion — not a random prize." },
    ],
  },
  powerGauge: {
    eyebrow: "· POWER GAUGE · 05",
    title: "Move Together, Power Up",
    lead: "Two ways your Power Gauge grows: the more you move, and the more you play together.",
    cards: [
      { num: "01", title: "The more you move, the more you level up.", text: "As you move through the real world, your activity charges your Power Gauge. Fill it up to unlock hidden maps, rare treasures, and higher-level missions." },
      { num: "02", title: "The more you play together.", text: "Players can meet, team up, and play together in the real world. When hunters connect their UFO devices, they can charge Power faster and take on bigger challenges together." },
    ],
  },
  creator: {
    eyebrow: "· YOU ARE THE MAP MAKER · 06",
    title: "Create a treasure only you could hide",
    body: [
      "With Snap Hunting, players do not only find treasures.",
      "They can create them.",
      "Choose a real-world place, object, or detail that matters to you. Upload it as a Snap Hunt, add a clue, and invite other players to discover it.",
    ],
    examples: ["A favorite café sign.", "A school landmark.", "A hidden mural.", "A park bench with a memory.", "A street corner only locals know."],
    closing: "Your world can become someone else's adventure.",
  },
  signalGuide: {
    eyebrow: "· SIGNAL GUIDE · 07",
    title: "The closer you get, the stronger the signal",
    body: [
      "UFO is not just a wearable.",
      "It is your real-world signal guide.",
      "The app helps you find the edge of the treasure zone.",
      "Once you are close, the UFO device guides your final search with light.",
    ],
    zones: [
      { distance: "100m", label: "BLUE PULSE", color: "#4d9fff", text: "You have entered the treasure zone." },
      { distance: "50m", label: "ORANGE GLOW", color: "#ff9933", text: "You are getting closer. Start searching the real world around you." },
      { distance: "10m", label: "GOLDEN STROBE", color: "#ffd94d", text: "The treasure is near. Look carefully. The final clue is close." },
    ],
    closing: "The world awaits. No screens. Follow the signal to the treasure.",
  },
  spec: {
    label: "SPEC",
    title: "Made for the field.",
    rows: [
      ["OPERATING SYSTEM", "Powered by Newnal 'aios'"],
      ["DIMENSIONS", "40 mm diameter × 15 mm depth"],
      ["DISPLAY", "2.8-inch circular AMOLED display"],
      ["CONNECTIVITY", "BLE 5.3 connection to smartphone"],
      ["LIGHTING", "360° micro LED signal ring"],
      ["SENSORS", "3-axis accelerometer for movement and activity tracking"],
      ["NFC", "Smartphone NFC/tagging interaction"],
    ],
  },
  cta: { primary: "Get UFO", secondary: "Start the hunt" },
} as const;

export type UfoContent = typeof ufoContent;
