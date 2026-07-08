import type { ProductContent } from "./aios";

export const devicesContent = {
  anchorId: "devices",
  title: "Devices Run By Newnal aios — YALI & ILLI",
  description: "YALI & ILLI — AI companions built on Newnal aios.",
  sections: [
    {
      id: "yali-hero",
      eyebrow: "YALI / Y1",
      title: "AI Companion for Kpop Artist and Fans",
      paragraphs: [
        "Not a fan app.",
        "Not a smart speaker.",
        "Not a limited edition phone.",
        "YALI is your K-pop AI Artist Companion — the first product built around a single premise: your artist should live in your life, not just your feed.",
      ],
      figure: {
        type: "image",
        label: "YALI representative hero shot image placeholder",
      },
    },
    {
      id: "yali-value",
      eyebrow: "YALI / Y2",
      title: "From Fan Moments to Personal Moments",
      paragraphs: [
        "Fandom has always been one-directional.",
        "The artist speaks. The fan receives. Nothing is personal.",
        "Artists and their AI companions can interact with fans based on fan’s unique data, preferences, and context. This enables personalized, always-on engagement that feels authentic, relevant, and emotionally meaningful.",
      ],
    },
    {
      id: "yali-use-cases",
      eyebrow: "YALI / Y3",
      title: "From Following Your Artist to Living Alongside Them",
      paragraphs: [
        "YALI transforms everyday moments into personal experiences shared with your artist.",
        "Today’s fan platforms only connect you when you open an app or new content is released.",
        "YALI stays with you throughout the day.",
      ],
      featureGroups: [
        {
          items: [
            {
              title: "Alarm",
              description:
                "Your artist wakes you up in a new and exciting way every morning",
            },
            {
              title: "Listening Together",
              description: "You can listen to the same music as your Artist at the same time",
            },
            {
              title: "Artist Recommends",
              description:
                "Your Artist recommends music, books, places to travel, etc. based on your interests",
            },
            {
              title: "Artist Remembered",
              description:
                "Personalized congratulatory messages for your birthdays and other special occasions",
            },
            {
              title: "Goodnight From Your Artist",
              description:
                "Your Artist’s soothing goodnight messages and lullaby in sync with your lifestyle and routine",
            },
          ],
        },
        {
          title: "One more Thing: Concert Mode",
          items: [
            {
              title: "Concert Light Stick Mode",
              description: "Light up to cheer on your artists live",
            },
            {
              title: "Capture the Moment",
              description: "Capture the concert without taking out your phone",
            },
            {
              title: "Offsite",
              description: "Experience the excitement and energy of the concert, wherever you are.",
            },
          ],
        },
      ],
    },
    {
      id: "illi-hero",
      eyebrow: "ILLI / I1",
      title: "AI Companion for the Golden Generation",
      paragraphs: [
        "Growing older should bring more connections, not less.",
        "Not a smart speaker.",
        "Not a medical alert button.",
        "Not another screen for video calls.",
        "ILLI is your AI Companion for the Golden Generation — built around one simple premise: the people you love should remain part of your everyday life.",
      ],
      figure: {
        type: "image",
        label: "ILLI representative hero cut image placeholder",
      },
    },
    {
      id: "illi-value",
      eyebrow: "ILLI / I2",
      title: "Care That Understands You",
      paragraphs: [
        "Senior care has always been fragmented.",
        "One device reminds you to take medication.",
        "Another responds when something goes wrong.",
        "Family calls when they can.",
        "But nothing understands the whole person.",
        "With the user’s permission, ILLI learns from their My Data — daily routines, preferences, wellbeing, home context, and relationships.",
        "Personalized. Proactive. Family-connected.",
      ],
      figure: {
        type: "diagram",
        label: "Three overlapping circles diagram: Your Life, Your Family, Trusted Services",
      },
    },
    {
      id: "illi-use-cases",
      eyebrow: "ILLI / I3",
      title: "From Everyday Moments to Moments That Matter",
      paragraphs: [
        "ILLI helps the Golden Generation stay independent, supported, and emotionally connected throughout everyday life.",
        "Today’s care waits for a request — or a crisis.",
        "ILLI stays present throughout the day.",
      ],
      featureGroups: [
        {
          items: [
            {
              title: "Family Morning Call",
              description: "Wake up to personalized messages from your Family’s AIs",
            },
            {
              title: "Personalized Workout Program",
              description: "Keep in shape with routines created just for you",
            },
            {
              title: "Important Information Reminders",
              description: "Helping to complete all your important checklists",
            },
            {
              title: "Secure Payments (Voice Phishing Prevention)",
              description: "Send secure payments for special occasions without worry",
            },
            {
              title: "Conversation Partner",
              description: "From everything to your health to your grandkids, ILLI is eager to hear",
            },
            {
              title: "SOS Emergency Call",
              description: "Calls emergency services in moments of need",
            },
            {
              title: "Smart Shopping",
              description: "Orders your favorites automatically",
            },
          ],
        },
      ],
    },
  ],
} satisfies ProductContent;
