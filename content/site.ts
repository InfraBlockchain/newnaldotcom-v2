export type MenuItem = {
  label: string;
  anchorId: string;
  pagePath: string;
};

type HubCard = {
  title: string;
  summary: string;
  href: string;
  figureLabel: string;
};

export const siteContent = {
  brand: "NEWNAL",
  footerNote: "One architecture for data utilization and complete disconnection.",
  menuItems: [
    {
      label: "Newnal aios",
      anchorId: "aios",
      pagePath: "/opt-2/aios",
    },
    {
      label: "Private Phone",
      anchorId: "private-phone",
      pagePath: "/opt-2/private-phone",
    },
    {
      label: "Newnal aios Devices",
      anchorId: "devices",
      pagePath: "/opt-2/devices",
    },
  ] satisfies MenuItem[],
  hubCards: [
    {
      title: "Newnal aios",
      summary: "The AI native OS. Every computing era has its own OS.",
      href: "/opt-2/aios",
      figureLabel: "Newnal aios product system visual placeholder",
    },
    {
      title: "Private Phone",
      summary: "Privacy that holds—even when trust breaks.",
      href: "/opt-2/private-phone",
      figureLabel: "Private Phone hero device visual placeholder",
    },
    {
      title: "Newnal aios Devices",
      summary: "YALI, ILLI & UFO — AI companions built on Newnal aios.",
      href: "/opt-2/devices",
      figureLabel: "yali-hero",
    },
  ] satisfies HubCard[],
};
