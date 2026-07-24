export const homeContent = {
  hero: {
    title: [
      [{ text: "The New AI Computing Era" }],
      [
        { text: "Newnal aios", accent: true },
        { text: " Leads\u00a0the\u00a0Way" },
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
      title: "Newnal aios",
      statement: ["ONE ARCHITECTURE.", "COMPLETE DATA SOVEREIGNTY"],
      cardLabel: [
        [{ text: "Newnal " }, { text: "aios", wordmark: true }],
      ],
      bannerLabel: [
        [{ text: "Newnal " }, { text: "aios", wordmark: true }],
      ],
      href: "/aios",
      image: "/images/home/door/aios-ribbon.png",
      hoverImage: "/images/home/door/v3-hover-aios.png",
    },
    {
      id: "devices",
      title: "Devices",
      subtitle: "Powered by Newnal",
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
      hoverImage: "/images/home/door/v3-hover-devices.png",
    },
    {
      id: "private",
      title: "Private Phone",
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
      hoverImage: "/images/home/door/v3-hover-private.png",
    },
  ],
  learnMore: "Learn More",
} as const;
