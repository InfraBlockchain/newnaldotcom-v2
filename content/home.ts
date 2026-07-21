export const homeContent = {
  hero: {
    title: ["One aios", "Across four devices."],
    sub: ["Intelligence that truly knows you.", "Data under your control."],
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
      hoverImage: "/images/home/door/v3-hover-aios.png",
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
      hoverImage: "/images/home/door/v3-hover-devices.png",
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
      hoverImage: "/images/home/door/v3-hover-private.png",
    },
  ],
  learnMore: "Learn More",
} as const;
