// Product copy for the Companion Devices hero and cards.
export const devicesContent = {
  hero: {
    heading: ["AI Devices", "Powered by Newnal aios"],
    rhythm: [
      "For the artist you love.",
      "For the family you care for.",
      "For the world waiting outside.",
      "For the little ones you raise.",
    ],
    closing: "All centered around you.",
  },
  slides: [
    {
      id: "yali",
      name: "YALI",
      heading: "K-POP Artist AI Companion, YALI",
      body: "It brings the artist you love into your everyday moments through personalized greetings, recommendations, memories, and experiences.",
      tagline: "Daily interactions built around the artist you love",
      image: "/images/figma/devices-card-yali.webp",
      href: "/devices/yali",
    },
    {
      id: "illi",
      name: "ILLI",
      heading: "AI Companion for the Golden Generation, ILLI",
      body: "It helps older adults stay independent, supported, and intimately connected with their loved ones throughout the day.",
      tagline: "A companion that understands the lives of the Golden Generation and their families",
      image: "/images/figma/devices-card-illi.webp",
      href: "/devices/illi",
    },
    {
      id: "ufo",
      name: "UFO",
      heading: "Real-World Treasure Hunt, UFO",
      body: "UFO is a wearable adventure device that transforms the everyday into the extraordinary. It turns real places into treasure zones, missions, and collectible moments.",
      tagline: "A companion device for the adventurous! For the real-world, beyond the screen!",
      image: "/images/figma/devices-card-ufo.webp",
      href: "/devices/ufo",
    },
    {
      id: "onni",
      name: "ONNI",
      heading: "Family AI Companion, ONNI",
      body: "ONNI is a warm, playful AI companion for young children and the families who care for them.",
      tagline: "A companion designed to grow with your family",
      image: "/images/figma/devices-card-onni.webp",
      href: "/devices/onni",
    },
  ],
} as const;

export type DeviceSlide = (typeof devicesContent.slides)[number];
