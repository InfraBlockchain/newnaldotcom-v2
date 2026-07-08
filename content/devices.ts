import type { ProductContent } from "./aios";

export const devicesContent = {
  anchorId: "devices",
  title: "Devices Run By Newnal aios — YALI, ILLI & UFO",
  description: "YALI, ILLI & UFO — AI companions built on Newnal aios.",
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
    /* ── UFO ── */
    {
      id: "ufo-hero",
      eyebrow: "UFO / U1",
      title: "The Real World Is the Game",
      paragraphs: [
        "Not a fitness tracker.",
        "Not another game played through a screen.",
        "Not a loyalty app built around points.",
        "Newnal UFO is a real-world treasure-hunting game powered by Newnal AIOS.",
        "Every month, a new Treasure Map transforms cities, trails, parks, and landmarks into playable territory. Runners move through the real world, follow the light from their UFO device, and discover physical Treasure Cards hidden around them.",
        "The more you move, the more power you build.",
        "The more people you bring, the greater the treasure becomes.",
      ],
      cta: {
        label: "See How the Hunt Works",
        href: "#",
      },
      figure: {
        type: "image",
        label: "UFO device hero shot placeholder",
      },
    },
    {
      id: "ufo-overview",
      eyebrow: "UFO / U2",
      title: "Real-World Treasure Hunting Powered by Newnal AIOS",
      paragraphs: [
        "Powered by Newnal AIOS and your personal data, every hunt is different.",
      ],
      features: [
        {
          title: "Real-World Treasure Hunting",
          description: "Explore physical locations and discover treasures hidden beyond the screen.",
        },
        {
          title: "AI-Personalized Rewards",
          description: "Unlock rewards selected around your preferences, routines, and context.",
        },
        {
          title: "Movement-Powered Progress",
          description: "Running, walking, and exploring charge your Power Gauge.",
        },
        {
          title: "More Power Together",
          description: "Connect with other Runners to unlock larger shared rewards.",
        },
      ],
    },
    {
      id: "ufo-aios",
      eyebrow: "UFO / U3",
      title: "Where AI Meets the Physical World",
      paragraphs: [
        "With the user's permission, Newnal AIOS learns from their My Data—including interests, routines, movement, preferences, relationships, and everyday context.",
        "AIOS uses that understanding to shape the experience around the individual:",
      ],
      bullets: [
        "Which rewards are most relevant",
        "Which treasure categories become available",
        "How movement contributes to progression",
        "When individual or team challenges should unlock",
        "What kind of treasure will feel genuinely valuable",
      ],
      figure: {
        type: "diagram",
        label: "AIOS to My Data to UFO connection diagram",
      },
    },
    {
      id: "ufo-objects",
      eyebrow: "UFO / U4",
      title: "The Objects That Power the Hunt",
      paragraphs: [
        "Two objects work together to guide the hunt.",
      ],
      features: [
        {
          title: "The UFO Device",
          description:
            "A small, circular game device designed to travel wherever the Runner goes. Attach it to a shoe lace, wrist strap, shoulder bag, keyring, or clothing mount. Its 360-degree light ring responds to the distance between the Runner and the hidden treasure—guiding from 100 meters to the final discovery.",
        },
        {
          title: "Treasure Card",
          description:
            "Physical cards hidden at real-world locations. Each card contains an embedded IC chip with a unique blockchain-linked identity. The reward is not printed on the card. A Treasure Card remains an UnFound Object until it is discovered and tagged—only then does Newnal AIOS reveal the reward.",
        },
      ],
    },
    {
      id: "ufo-hunt",
      eyebrow: "UFO / U5",
      title: "Follow the Map. Then Follow the Light.",
      paragraphs: [
        "Newnal UFO begins as a mobile game and gradually moves the Runner away from the screen.",
        "The app guides the first part of the journey. Once the Runner enters the treasure zone, the UFO Device takes over.",
      ],
      steps: [
        {
          label: "01. Activate",
          description:
            "Open the UFO app and connect your UFO Device. When Runner Mode is activated, your monthly Treasure Map opens and available treasure zones appear across the real world.",
        },
        {
          label: "02. Navigate",
          description:
            "Select a treasure zone from the map. The app guides you toward the approximate location until you are within 100 meters of the hidden Treasure Card. The exact location remains concealed.",
        },
        {
          label: "03. Look Up",
          description:
            "Once in the 100-meter zone, put the phone away and follow the light. The UFO Device's 360-degree light ring shifts: Mystic Blue (100M) → Intense Orange (50M) → Golden Strobe (10M).",
        },
        {
          label: "04. Tag and Reveal",
          description:
            "Find the hidden Treasure Card and tag it with your UFO Device at the discovery location. Newnal AIOS verifies the card and instantly opens the reward inside the app.",
        },
      ],
    },
    {
      id: "ufo-rewards",
      eyebrow: "UFO / U6",
      title: "My Data-Powered Treasure",
      paragraphs: [
        "The Same Card. A Different Treasure for Everyone.",
        "With the user's permission, Newnal AIOS uses My Data to understand what kind of reward will matter to the person who discovers the card.",
        "The physical Treasure Card may be identical. What it reveals depends on the Runner.",
      ],
      features: [
        {
          title: "Running habits + active lifestyle",
          description: "→ Running Shoe Reward",
        },
        {
          title: "Morning routine + coffee preference",
          description: "→ Coffee Reward",
        },
        {
          title: "Upcoming anniversary + relationship context",
          description: "→ Dining Experience",
        },
      ],
    },
    {
      id: "ufo-power",
      eyebrow: "UFO / U7",
      title: "The Power Gauge",
      paragraphs: [
        "The Power Gauge transforms physical movement into game progression.",
        "Walking, running, climbing, and exploring increase your Power. Longer and more active journeys build it faster.",
        "Power grows faster when people move together. Runners can connect their UFO Devices and form a party with family, friends, partners, or other players they meet in the field.",
      ],
      features: [
        {
          title: "0–30% — Explorer Tier",
          description: "Access regular Treasure Maps and everyday rewards.",
        },
        {
          title: "30–70% — Runner Tier",
          description: "Unlock new locations and higher-value Treasure Cards.",
        },
        {
          title: "70–90% — Rare Tier",
          description: "Gain access to Hidden Maps and Rare Card missions.",
        },
        {
          title: "90%+ — Legendary Tier",
          description: "Qualify for Super Final Treasure challenges.",
        },
      ],
    },
  ],
} satisfies ProductContent;
