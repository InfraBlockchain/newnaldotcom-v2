export const homeContent = {
  hero: {
    title: [
      [{ text: "The New AI Computing Era" }],
      [
        { text: "Newnal aios", accent: true },
        { text: " Leads the Way" },
      ],
    ],
    intro: [
      { text: "Newnal aios is built on a new principle: " },
      { text: "you own your data, and your intelligence belongs to you.", bold: true },
      { text: " A user-centered OS architecture that connects your data and AI across " },
      { text: "multiple devices", bold: true },
    ],
  },
  paths: [
    {
      id: "aios",
      statement: ["ONE ARCHITECTURE.", "COMPLETE DATA SOVEREIGNTY"],
      cardLabel: [
        [{ text: "Newnal " }, { text: "aios", wordmark: true }],
      ],
      bannerLabel: [
        [{ text: "Newnal " }, { text: "aios", wordmark: true }],
      ],
      href: "/aios",
      image: "/images/home/door/aios-ribbon.png",
    },
    {
      id: "devices",
      statement: ["One AIOS. Distinct companions for different lives."],
      cardLabel: [
        [{ text: "Companion Devices" }],
        [{ text: "Powered by Newnal " }, { text: "aios", wordmark: true }],
      ],
      bannerLabel: [
        [{ text: "Companion Devices" }],
        [{ text: "Powered by Newnal " }, { text: "aios", wordmark: true }],
      ],
      href: "/devices",
      image: "/images/home/door/devices-photo.png",
    },
    {
      id: "private",
      statement: ["Privacy that holds— even when trust breaks."],
      cardLabel: [
        [{ text: "Newnal Private Phone" }],
      ],
      bannerLabel: [
        [{ text: "Newnal" }],
        [{ text: "Private Phone" }],
      ],
      href: "/private-phone",
      image: "/images/home/door/private-phone-photo.png",
    },
  ],
  learnMore: "Learn More",
  heroV3: {
    title: [
      [{ text: "The New AI Computing Era" }],
      [
        { text: "Newnal aios", accent: true },
        { text: " Leads the Way" },
      ],
    ],
  },
  accordionPaths: [
    {
      id: "aios",
      href: "/aios",
      title: ["Newnal aios"],
      subtitle: ["One Architecture.", "Complete Data Sovereignty."],
      image: "/images/home/door/v32-hover-aios.png",
    },
    {
      id: "devices",
      href: "/devices",
      title: ["Companion Devices", "Powered by Newnal aios"],
      subtitle: ["One aios.", "Distinct companions for different lives."],
      image: "/images/home/door/v32-hover-devices.png",
    },
    {
      id: "private",
      href: "/private-phone",
      title: ["Newnal Private Phone"],
      subtitle: ["Privacy that holds— even when trust breaks."],
      image: "/images/home/door/v32-hover-private.png",
    },
  ],
} as const;
