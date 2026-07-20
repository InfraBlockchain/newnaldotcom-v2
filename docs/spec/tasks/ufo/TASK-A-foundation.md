# UFO TASK A — 파운데이션 · 조립 · 통합

> 마스터 플랜: `docs/spec/07-ufo.md` (먼저 정독할 것)
> **Phase 1은 B/C/D의 선행 조건이다. 최우선으로 착수해 main에 푸시한다.**
> Phase 2는 B/C/D 완료 후에만 진행.

## Phase 1 — 스캐폴딩 (즉시)

### 1. `app/globals.css` — `[data-theme="ufo"]` 토큰 블록 추가

07 문서 §4의 토큰 블록을 기존 `[data-theme="yali"]` 블록 아래에 그대로 추가.
focus-visible 규칙도 추가: `[data-theme="ufo"] :focus-visible { outline-color: var(--ufo-deep); }`
**globals.css에서 이것 외에 아무것도 건드리지 말 것.**

### 2. `app/devices/ufo/fonts.ts`

`next/font/google`로 Inter(300·400·500) + IBM Plex Serif(italic 400) 로컬 인스턴스화.
전역 `--font-display`/`--font-body` 사용 금지 (devices 허브의 `app/devices/fonts.ts` 전례 참고).

### 3. `content/ufo.ts` — 카피 전체 (verbatim)

07 문서 §7 부록의 카피를 아래 구조로 작성. `as const` + 타입 export. **한 글자도 바꾸지 말 것.**

```ts
// Verbatim copy per docs/spec/07-ufo.md §7 (Figma 405:460, extracted 2026-07-16).
// Do not paraphrase.
export const ufoContent = {
  subnav: { name: "UFO", tagline: "AI Outside-World Companion", chapter: "Chapter · Out in the World", cta: "Get UFO" },
  hero: {
    badge: "UFO · REAL-WORLD ADVENTURE DEVICE",
    title: "UFO — REAL-WORLD ADVENTURE DEVICE",
    lead: "Powered by Newnal AIOS, UFO is a wearable adventure device that transforms the everyday into the extraordinary. It turns real places into treasure zones, missions, and collectible moments — making every walk, park, school route, and city corner feel like part of a game.",
    leadLines: ["Screens off.", "Step outside.", "Start the hunt."],
    photo: { label: "UFO · REAL-WORLD PLAY", caption: "Screens off. Step outside. Start the hunt.", chip: "Watch film · 1:36" },
  },
  showcase: {
    eyebrow: "WEARABLE ADVENTURE",
    title: "Small enough to wear. Powerful enough to start an adventure",
    lead: [
      "UFO is designed to move with you.",
      "Attach it to your wrist, shoelace, backpack strap, keyring, or watch band — then let the device guide you through the world around you.",
      "Built for everyday movement.",
      "Ready for spontaneous play.",
    ],
    mounts: [
      { num: "01", tag: "wrist", title: "Wrist close-up", text: "For quick access and active play." },
      { num: "02", tag: "shoelace", title: "Shoelace close-up", text: "For movement-based missions and outdoor exploration." },
      { num: "03", tag: "backpack strap", title: "Backpack strap close-up", text: "For school, travel, and group adventures." },
      { num: "04", tag: "keyring", title: "Keyring close-up", text: "For always-ready treasure hunting." },
    ],
    panel: {
      signal: { label: "SIGNAL · UFO POWERED", sub: "Attach anywhere · light guides the rest.", text: "Wrist · shoelace · backpack · keyring — the world is your board." },
      mode: { label: "TREASURE MODE · READY", text: "The world becomes the map." },
      today: { label: "TODAY · SNAP HUNTING", swatches: ["#6b9e94", "#8cb8ad", "#385952", "#b8d9d1"], quote: "\"Every walk turned into a hunt. My daily route feels new again.\"" },
    },
  },
  editorial: {
    eyebrow: "TWO WAYS TO HUNT · 03",
    title: "Hunt treasures in two different ways",
    quote: "\"UFO gives you two ways to play in the real world. Some treasures are hidden as physical Treasure Cards. Others are hidden in the places and objects already around you.\"",
    support: "Find the card. Or capture the world. Either way, the hunt begins outside.",
    cards: [ /* 07 §7 Sec 3 카드 1~4 — media(배지/캡션/스와치), label, title, body 필드로. wide 여부 포함 */ ],
  },
  cinematic: {
    eyebrow: "· TREASURES MADE FOR YOU · 04",
    title: "Treasures Made for You",
    body: "UFO rewards are powered by Newnal AIOS. With the player's permission, My Data can help personalize the reward — so the treasure you unlock feels more relevant to your life, interests, and moments. The more your AIOS understands what you like, the more personal the treasure can become. Not random prizes. Rewards that feel like they found you.",
    strip: { caption: "04 · Treasures Made for You", link: "Explore" },
    cards: [
      { num: "01", title: "A runner may discover running gear.", text: "Because UFO listens to how you move — trails, pace, and rhythm become the treasure map." },
      { num: "02", title: "A foodie may unlock a restaurant experience.", text: "Because taste is a signal too — the reward matches what you love to eat, drink, and try." },
      { num: "03", title: "Something that fits the occasion.", text: "A player preparing for a special day may receive something that fits the occasion — not a random prize." },
    ],
  },
  powerGauge: {
    eyebrow: "· POWER GAUGE · 05",
    title: "Move Together, Power Up",
    lead: "Two ways your Power Gauge grows: the more you move, and the more you play together.",
    cards: [
      { num: "01", title: "The more you move, the more you level up.", text: "As you move through the real world, your activity charges your Power Gauge. Fill it up to unlock hidden maps, rare treasures, and higher-level missions." },
      { num: "02", title: "The more you play together.", text: "Players can meet, team up, and play together in the real world. When hunters connect their UFO devices, they can charge Power faster and take on bigger challenges together." },
    ],
  },
  creator: {
    eyebrow: "· YOU ARE THE MAP MAKER · 06",
    title: "Create a treasure only you could hide",
    body: [
      "With Snap Hunting, players do not only find treasures.",
      "They can create them.",
      "Choose a real-world place, object, or detail that matters to you. Upload it as a Snap Hunt, add a clue, and invite other players to discover it.",
    ],
    examples: ["A favorite café sign.", "A school landmark.", "A hidden mural.", "A park bench with a memory.", "A street corner only locals know."],
    closing: "Your world can become someone else's adventure.",
  },
  signalGuide: {
    eyebrow: "· SIGNAL GUIDE · 07",
    title: "The closer you get, the stronger the signal",
    body: [
      "UFO is not just a wearable.",
      "It is your real-world signal guide.",
      "The app helps you find the edge of the treasure zone.",
      "Once you are close, the UFO device guides your final search with light.",
    ],
    zones: [
      { distance: "100m", label: "BLUE PULSE", color: "#4d9fff", text: "You have entered the treasure zone." },
      { distance: "50m", label: "ORANGE GLOW", color: "#ff9933", text: "You are getting closer. Start searching the real world around you." },
      { distance: "10m", label: "GOLDEN STROBE", color: "#ffd94d", text: "The treasure is near. Look carefully. The final clue is close." },
    ],
    closing: "The world awaits. No screens. Follow the signal to the treasure.",
  },
  spec: {
    label: "SPEC",
    title: "Made for the field.",
    rows: [
      ["OPERATING SYSTEM", "Powered by Newnal 'aios'"],
      ["DIMENSIONS", "40 mm diameter × 15 mm depth"],
      ["DISPLAY", "2.8-inch circular AMOLED display"],
      ["CONNECTIVITY", "BLE 5.3 connection to smartphone"],
      ["LIGHTING", "360° micro LED signal ring"],
      ["SENSORS", "3-axis accelerometer for movement and activity tracking"],
      ["NFC", "Smartphone NFC/tagging interaction"],
    ],
  },
  cta: { primary: "Get UFO", secondary: "Start the hunt" },
} as const;
```

(`editorial.cards`는 07 §7 Sec 3의 카드 4개 원문으로 채울 것 — 생략 금지.)

### 4. `components/ufo/UfoSubnav.tsx` + `.module.css`

피그마 `405:461` 기준 로컬 서브내브. `YaliSubnav` 구조 참고(복붙 후 UFO화 가능하되 YaliSubnav 파일 자체는 Phase 1에서 수정 금지):
- 좌: `UFO · AI Outside-World Companion` / 중: `Chapter · Out in the World`(챕터 스크롤 진행 표시는 선택) / 우: 스위처 `YALI`(→`/devices/yali`) `ILLI`(`aria-disabled`) `UFO`(현재, bold) + `Get UFO` 버튼(`mailto:contact@newnal.com?subject=Get%20UFO`)

### 5. 섹션 스텁 9개 — `components/ufo/sections/`

`UfoHero` `UfoDarkShowcase` `UfoEditorialBand` `UfoCinematic` `UfoPowerGauge` `UfoCreator` `UfoSignalGuide` `UfoSpecTable` `UfoCtaRow`
각각 named export 함수 컴포넌트(props 없음). 스텁 본문은 `components/shared/Placeholder` 재사용 또는 최소 `<section>` + 섹션명 텍스트. **스텁 생성 후 이 파일들의 소유권은 B/C/D로 넘어간다 — A는 이후 수정 금지.**

### 6. `app/devices/ufo/page.tsx` + `page.module.css`

- `export const metadata: Metadata = { title: "UFO", description: ufoContent.hero.lead }`
- `<main id="main-content" data-theme="ufo">` 아래 UfoSubnav + 섹션 9개를 순서대로 조립. 폰트 변수 클래스 적용.
- `page.module.css`는 페이지 래퍼·공통 컨테이너만 (섹션 내부 스타일은 각 섹션 모듈 소유).

### Phase 1 완료 → 즉시 main 푸시 (빌드 통과 확인 후). B/C/D 착수 가능해짐.

## Phase 2 — 통합 (B/C/D 전원 완료 후)

1. `content/devices.ts`: ufo 슬라이드 `href: null` → `"/devices/ufo"`
2. `components/shared/YaliSubnav.tsx`: 스위처의 `UFO` `aria-disabled` → `/devices/ufo` 링크
3. 전체 QA: 07 문서 §8 DoD 전 항목 (반응형 4개 폭, reduced-motion, 헤딩 구조, 피그마 대조)
4. Vercel 배포 확인

## 수정 허용 파일 (이 목록이 전부)

```
app/globals.css                     ([data-theme="ufo"] 블록 추가만)
app/devices/ufo/**                  (신규)
content/ufo.ts                      (신규)
components/ufo/UfoSubnav.*          (신규)
components/ufo/sections/*           (Phase 1 스텁 생성까지만 — 이후 B/C/D 소유)
content/devices.ts                  (Phase 2, href 한 줄)
components/shared/YaliSubnav.tsx    (Phase 2, 스위처 링크만)
```

## 수정 금지

- B/C/D 소유가 된 섹션 파일 내용 (Phase 1 스텁 이후)
- `app/devices/yali/**`, `components/site/**`, `components/shared/**`(YaliSubnav Phase 2 제외), 홈·aios·private-phone 전부
