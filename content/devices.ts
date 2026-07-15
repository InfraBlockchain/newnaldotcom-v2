// Verbatim copy per docs/spec/06-figma-final-aios-devices.md §3 (D1 hero, D2 slide table).
// Do not paraphrase — the user confirmed this copy on 2026-07-15.
export const devicesContent = {
  hero: {
    heading: ["AI companions", "for the lives", "we actually live."],
    rhythm: [
      "For the artist you love.",
      "For the family you care for.",
      "For the world waiting outside.",
    ],
    closing: "All centered around you.",
  },
  slides: [
    {
      id: "yali",
      name: "YALI",
      heading: "K-POP Artist AI Companion, YALI",
      body: "It brings the artist you love into your everyday moments through personalized greetings, recommendations, memories, and experiences.",
      tagline: "A daily companion built around the artist you love",
      image: "/images/figma/devices-card-yali.png",
      href: "/devices/yali",
    },
    {
      id: "illi",
      name: "ILLI",
      heading: "AI Companion for the Golden Generation, ILLI",
      body: "It helps older adults stay independent, supported, and intimately connected with their loved ones throughout the day.",
      tagline: "A companion that understands the lives of the Golden Generation and their families",
      image: "/images/figma/devices-card-illi.png",
      href: null,
    },
    {
      id: "ufo",
      name: "UFO",
      heading: "Real-World Treasure Hunt, UFO",
      body: "UFO is a wearable adventure device that transforms the everyday into the extraordinary. It turns real places into treasure zones, missions, and collectible moments.",
      tagline: "A companion device for the adventurous! For the real-world, beyond the screen!",
      image: "/images/figma/devices-card-ufo.png",
      href: null,
    },
  ],
} as const;

export type DeviceSlide = (typeof devicesContent.slides)[number];
