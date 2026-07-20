export const homeContent = {
  hero: {
    title: ["The New AI Computing Era"],
    sub: ["Newnal aios Leads the Way"],
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
} as const;
