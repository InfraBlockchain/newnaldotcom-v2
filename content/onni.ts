export const onniContent = {
  hero: {
    eyebrow: "ONNI · AI CARE COMPANION",
    title: "AI Care Companion for Little Ones",
    emphasis: "Little Ones",
    lead: "Care that grows with your baby",
    leadDetail: "ONNI is an AI care companion for babies and young children\n— designed to support safety, growth, sleep, feeding, and everyday moments of connection.",
    negatives: ["Not just a baby monitor.", "Not just a night light.", "Not just a sound machine."],
    closing: "A companion that helps parents understand, comfort, and remember the earliest days of life.",
  },
  personalized: {
    title: "Support that stays with your baby’s rhythm",
    lead: [
      "Babies do not live by perfect schedules. But every small moment matters.",
      "ONNI helps parents follow the rhythm of the day — feeding, naps, tummy time, soothing sounds, night light, and the little changes that are easy to miss.",
    ],
    proofs: [
      ["24hr", "gentle care", "Support throughout the day and night.", "ONNI helps parents stay aware of feeding, sleep, play, and comfort moments — without needing to remember everything alone."],
      ["1", "daily rhythm", "One connected view of your baby’s day.", "Feeding logs, nap records, tummy time, soothing sounds, and memory moments come together in one natural care flow."],
      ["0", "extra burden", "Care records without another complicated app.", "Talk to ONNI, check the app, or let the device quietly support the routine — so parents can focus more on the baby, not the tracking."],
    ],
    vignette: {
      time: "ONNI · DAILY RHYTHM",
      message: "From morning wake-up to bedtime, ONNI stays close to the moments that make up your baby’s care.",
      playing: "GENTLE CARE",
      track: "A calmer rhythm for every day",
    },
  },
  philosophy: {
    title: "It understands the rhythm\nbehind every little moment",
    lead: [
      "Care for a baby is not one thing.",
      "It is sleep, feeding, play, comfort, growth, sound, light, memory, and routine — all changing week by week.",
      "With the parent’s permission, ONNI learns from your baby’s daily patterns and helps turn scattered moments into a clearer picture of care.",
    ],
    circles: [
      ["Baby Routine", ["Sleep", "Feeding", "Play", "Tummy time", "Growth moments"]],
      ["Parent Input", ["Voice notes", "Feeding logs", "Schedule preferences", "Family messages"]],
      ["Newnal AIOS", ["Pattern recognition", "Gentle reminders", "Personalized content", "Memory organization"]],
    ],
  },
  everyday: {
    title: "Play, learn, and grow —\none small moment at a time",
    quote: "ONNI is designed to support your baby’s early development with gentle visual, sound, and interaction content.",
    support: [
      "From black-and-white focus patterns for early visual stimulation to songs, stories, and multilingual exposure, ONNI turns everyday care into small moments of growth.",
      "The content changes as your baby grows — helping parents provide age-appropriate stimulation without constantly searching for what to play next.",
    ],
    tiles: [
      { time: "TUMMY TIME", title: "Tummy Time Content", description: "Visual patterns, friendly faces, songs, and playful prompts designed for tummy-time sessions.", image: "/images/onni/everyday-morning.png", scene: "Baby enjoying tummy-time content with ONNI" },
      { time: "VISUAL DEVELOPMENT", title: "Visual Development", description: "High-contrast black-and-white patterns for early focus and visual engagement.", image: "/images/onni/everyday-play.png", scene: "Baby engaging with visual development content" },
      { time: "EMOTIONAL DEVELOPMENT", title: "Emotional Development", description: "Songs, lullabies, and familiar voices that help create comfort and connection.", image: "/images/onni/everyday-music.png", scene: "Baby soothed by familiar sounds" },
      { time: "MULTILINGUAL EXPOSURE", title: "Multilingual Exposure", description: "Parent AI can speak, sing, and read in multiple languages — introducing language naturally through everyday moments.", image: "/images/onni/everyday-evening.png", scene: "ONNI sharing multilingual content with a baby" },
      { time: "MEMORY ALBUM", title: "Memory Album", description: "ONNI can help capture and organize precious milestones, from the first rollover to the first time sitting alone.", image: "/images/onni/family-stories.png", scene: "Family remembering baby milestones with ONNI" },
    ],
  },
  moments: {
    title: "Step away without feeling far away",
    lead: "Parents cannot be next to the crib every second. ONNI helps you stay connected from the kitchen, the living room, the office, or anywhere you need to be. Check in through the app, listen, watch, speak, or let ONNI play a familiar parent voice when your baby needs comfort. ONNI gives parents a calmer way to stay close — without turning every moment into anxiety.",
    cards: [
      { title: "Remote Monitoring", description: "Check your baby’s status in real time through the ONNI app.", image: "/images/onni/family-updates.png", scene: "Parent checking ONNI remotely" },
      { title: "Parent Call", description: "Wake or comfort your baby with a familiar parent voice.", image: "/images/onni/family-stories.png", scene: "Parent comforting a baby through ONNI" },
      { title: "Live View", description: "See what ONNI sees from your phone, even while cooking or working nearby.", image: "/images/onni/family-hero.png", scene: "Parent watching a live ONNI view" },
      { title: "Family Access", description: "Allow selected caregivers or family members to check in when needed.", image: "/images/onni/family-independence.png", scene: "Family staying connected through ONNI" },
      { title: "Gentle Alerts", description: "Receive notifications when ONNI notices meaningful changes in sleep, sound, motion, or routine.", image: "/images/onni/everyday-evening.png", scene: "ONNI providing a gentle care alert" },
    ],
  },
  spec: {
    title: "Made for the nursery.\nReady for everyday care.",
    lead: "A compact care companion designed to sit naturally in the nursery and support everyday family routines.",
    rows: [
      ["OPERATING SYSTEM", "Powered by Newnal ‘aios’"],
      ["DIMENSIONS", "65 mm diameter × 21 mm depth"],
      ["DISPLAY", "2.8-inch circular AMOLED display"],
      ["CONNECTIVITY", "Wi-Fi and Bluetooth connectivity"],
      ["LIGHTING", "360° translucent LED light guide ring"],
      ["AUDIO", "30cc independent acoustic enclosure"],
    ],
  },
} as const;
