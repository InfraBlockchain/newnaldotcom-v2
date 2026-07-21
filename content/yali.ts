export const yaliContent = {
  hero: {
    eyebrow: "YALI · AI ARTIST COMPANION", title: "Your artist living in your life.", emphasis: "living in your life.",
    lead: "YALI is your AI Artist Companion, powered by Newnal AIOS.",
    leadDetail: "It brings the artist you love into your everyday moments through personalized greetings, conversations, recommendations, memories, and experiences.",
    negatives: ["Not another fan app.", "Not another notification.", "Not a chatbot."], closing: "A daily companion built around the artist you love.",
  },
  personalized: {
    eyebrow:"01 · PERSONALIZED FANDOM",title:"Fandom, personalized around you.",lead:["Most fan platforms send the same content to everyone.", "YALI is different. It learns your favorite songs, moments, memories, routines, and preferences — then connects them to the artist's voice, world, and official content.", "The result is fandom that feels less like following, and more like being known."],
    proofs:[["340","moments/wk","Learns as you live.","YALI observes your listens, saves, replays, and skipped notifications to build your fan profile."],["1","true voice","The artist's actual world.","Every message, song pick, and clip is drawn from the artist's approved universe — nothing generated in-between."],["0","broadcasts","Nothing sent to everyone.","If it doesn't fit your schedule, mood, or fan history — it doesn't reach you."]],
    vignette:{time:"FROM YOUR ARTIST · 8:24 AM",message:"Good morning. I put together a playlist for your commute — you had a long day yesterday.",playing:"NOW PLAYING",track:"Cadence — B-side Live"},
  },
  philosophy:{
    eyebrow:"· FOR FANS, NOT FOLLOWERS ·",
    title:"Made for fans, not followers.",
    lead:"A companion you keep close, not an app you forget to open. Carry the artist's world with you.",
    circles:[
      ["Personal Companion",["daily moments","mood","routine","preferences"]],
      ["Artist Universe",["voice","content","style","world"]],
      ["Fan Memory",["journey","moments","milestones"]],
    ],
  },
  everyday:{eyebrow:"02 · EVERYDAY MOMENTS",title:"Start the day with\nthe artist you love",quote:"\"YALI is there for the small moments — the ones that make fandom feel alive.\"",support:["A morning greeting before school or work.", "A song recommendation on the way home.", "A message before an exam, interview, concert, or difficult day.", "It brings the artist's presence into your real life, not just your feed."],tiles:[
    {time:"MORNING",title:"Morning Message",description:"Wake up to a greeting shaped around your schedule, mood, and fan history.",image:"/images/yali/everyday-morning.jpg",scene:"Morning greeting from YALI"},
    {time:"ANY MOMENT",title:"Mood-Based Music",description:"Get songs, performances, or clips selected for how you feel right now.",image:"/images/yali/everyday-music.jpg",scene:"YALI device for listening to music with an artist"},
    {time:"ANY MOMENT",title:"Daily Encouragement",description:"Receive words that match your moment — whether you need energy, comfort, focus, or celebration.",image:"/images/yali/everyday-encouragement.jpg",scene:"YALI artist message for a special occasion"},
    {time:"NIGHT",title:"Night Recap",description:"End the day with a memory, message, or song connected to you and the artist.",image:"/images/yali/everyday-night.png",scene:"Nighttime recap with YALI"},
  ]},
  moments:{eyebrow:"· MOMENTS THAT MATTER ·",title:"Be there when it matters.",lead:"YALI helps you stay connected to the moments that matter most — releases, livestreams, concerts, tickets, and memories from the artist's journey. Instead of sending every fan the same alert, YALI understands what is relevant to you.",cards:[
    {title:"Concert Live Mode",description:"Can't make the show? Experience it anyway. Concert Live Mode connects you directly to the crowd, letting you stream live through the lenses of fans in the crowd. Artists can see and share the energy of everyone tuned in.",image:"/images/yali/moments-live.png",scene:"YALI concert light stick mode"},
    {title:"Concert & Ticket Reminders",description:"Stay ahead of the crowd. Get timely, tailored reminders right when you need them—never buried in a noisy feed.",image:"/images/yali/moments-reminders.jpg",scene:"YALI concert ticket reminder"},
    {title:"Content You Missed",description:"Never miss a beat. Instantly catch up on the performances, interviews, and behind-the-scenes moments curated just for you.",image:"/images/yali/moments-missed.jpg",scene:"YALI behind-the-scenes content reminder"},
  ]},
  spec:{title:"Made to keep close.",rows:[["OPERATING SYSTEM","Powered by Newnal 'aios'"],["DIMENSIONS","86 mm diameter × 26 mm depth"],["DISPLAY","2.8-inch circular AMOLED display"],["CONNECTIVITY","Wi-Fi and Bluetooth connectivity"],["LIGHTING","360° translucent LED light guide ring"],["AUDIO","30cc independent acoustic enclosure"]]},
} as const;
