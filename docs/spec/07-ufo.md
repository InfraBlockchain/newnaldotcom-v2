# 07 — UFO 제품 페이지 (`/devices/ufo`) 마스터 플랜

> 작성: 2026-07-16. 발주자: Steve.
> 디자인 소스: Figma `Newnal.com`(key `g7xkiCYymXjZTuNxgg9LzW`) — **`UFO — Product Page` 프레임 `405:460`이 target**.
> https://www.figma.com/design/g7xkiCYymXjZTuNxgg9LzW/Newnal.com?node-id=405-460
>
> `/aios`·`/devices`와 동일하게 **"Figma는 draft" 원칙의 예외**다(06 문서 전례). 이 페이지는 피그마를 그대로 구현한다.
> 카피는 아래 §7 부록이 피그마 verbatim 추출본이며 **임의 윤문 금지**.

## 1. 배경 / 전제

- 피그마의 UFO 페이지는 같은 파일의 YALI Product Page 프레임(`405:4`)과 **동일한 디자인 언어**(라이트/다크 밴드 교차, 넘버링 카드, 스펙 테이블)에 **톤만 틸(teal) 계열**이다.
- 단, 현재 배포된 `/devices/yali`는 피그마가 아니라 `01-yali.md` 스펙(보라 테마) 기반이라 **UFO 페이지와 시각 언어가 다르다.** 이는 의도된 것(사용자 지시: 피그마 기준 구현)이며, YALI 페이지를 UFO에 맞춰 고치는 작업은 이번 스코프가 아니다.
- 기존 코드 컨벤션은 따른다: `content/*.ts` 카피 분리, CSS Modules, `Reveal` 공용 컴포넌트, `[data-theme]` 스코프 토큰, `next/image`.

## 2. 라우트 / IA 변경

| 항목 | 현재 | 변경 |
|---|---|---|
| `/devices/ufo` | 없음 (00-foundation에서 "보류") | **신규 구현** |
| devices 허브 UFO 카드 (`content/devices.ts`) | `href: null` | `href: "/devices/ufo"` (TASK A Phase 2, 마지막에 활성화) |
| YALI 서브내브 스위처 (`YaliSubnav.tsx`) | UFO `aria-disabled` | `/devices/ufo` 링크 활성화 (TASK A Phase 2) |

## 3. 페이지 구조 — 9개 섹션 + 서브내브

컴포넌트는 전부 `components/ufo/sections/`에, 섹션당 `.tsx` + `.module.css` 한 쌍.

| # | 섹션 | Figma node | 배경 | 컴포넌트 | 소유 태스크 |
|---|---|---|---|---|---|
| — | 로컬 서브내브 | `405:461` | white | `UfoSubnav` | **A** |
| 1 | Hero | `405:480` | white | `UfoHero` | **B** |
| 2 | Dark Showcase (착용 방식 4종 + Travel Showcase 패널) | `405:500` | `#0b0b0e` | `UfoDarkShowcase` | **B** |
| 3 | Editorial Band (Two ways to hunt, 카드 2×2) | `405:546` | white | `UfoEditorialBand` | **C** |
| 4 | Cinematic (Treasures Made for You + 카드 3) | `405:599` | dark | `UfoCinematic` | **C** |
| 5 | Power Gauge (Move Together + 카드 2) | `405:631` | white | `UfoPowerGauge` | **D** |
| 6 | Creator (You are the map maker) | `520:2` | `#fafafa` | `UfoCreator` | **D** |
| 7 | Signal Guide (LED 3존: 100m/50m/10m) | `521:2` | `#0b0b0e` | `UfoSignalGuide` | **D** |
| 8 | Spec 테이블 | `521:26` | white | `UfoSpecTable` | **D** |
| 9 | CTA row | `521:53` | white | `UfoCtaRow` | **D** |

각 태스크 에이전트는 자기 섹션의 node id로 피그마에서 직접 디자인 컨텍스트를 뽑아 픽셀 기준으로 구현한다.

## 4. 디자인 시스템 (피그마 추출)

### 토큰 — `globals.css`에 `[data-theme="ufo"]` 블록 추가 (TASK A 소유)

```css
[data-theme="ufo"] {
  /* 뉴트럴 (피그마 neutral/*) */
  --bg: #ffffff;
  --line: #e5e5e5;
  --ink: #19191c;
  --ink-soft: #6b6b70;
  --soft-bg: #f9f9f8;          /* neutral/bg-soft — 라이트 카드 */
  /* 다크 밴드 (피그마 dark/*) */
  --stage: #0b0b0e;            /* dark/bg */
  --stage-surface: #141419;    /* dark/surface — 다크 카드 */
  --stage-border: #33333d;     /* dark/border */
  --on-stage: #ffffff;
  --on-stage-soft: #a8a8b2;
  --on-stage-faint: #bfbfc7;
  /* UFO 아이덴티티 — 틸 */
  --ufo-deep: #346f69;         /* ufo/deep — 라이트 위 eyebrow·라벨 */
  --ufo-accent: #6db4aa;       /* ufo/accent — 카드 넘버링 */
  --ufo-mint: #a8e0d6;         /* 다크 위 eyebrow·넘버링 */
  /* 후반부 섹션(6~8) 액센트 — §6 오픈 퀘스천 1 참고 */
  --ufo-alt-accent: #4d9fff;
}
[data-theme="ufo"] :focus-visible { outline-color: var(--ufo-deep); }
```

**B/C/D 규칙 (TASK-B 전례와 동일)**: 모듈 CSS에서 토큰은 반드시 `var(--ufo-deep, #346f69)`처럼 **리터럴 fallback 포함**으로 사용한다. A의 토큰 커밋에 의존하지 않고 독립 렌더링돼야 한다.

### 타이포 — `app/devices/ufo/fonts.ts` (TASK A 소유, `next/font/google`)

전역 `--font-display`/`--font-body`를 쓰지 않는다 (devices 허브의 로컬 폰트 전례).

| 스타일 | 폰트 | 크기/행간/자간 |
|---|---|---|
| display/xl | Inter Light 300 | 80px · 1.05 · -2% → `clamp(2.75rem, 1rem + 5.2vw, 5rem)` |
| display/lg | Inter Light 300 | 64px · 1.08 · -1.5% → clamp |
| display/md (cinema) | Inter Light 300 | 72px · 1.08 → clamp |
| editorial/lg | IBM Plex Serif Italic 400 | 32px · 1.25 |
| editorial/md | IBM Plex Serif Italic 400 | 22px · 1.3 |
| heading/sm (카드 제목) | Inter Regular 400 | 20px · 1.3 |
| body/md | Inter Regular 400 | 17px · 1.55 |
| body/sm | Inter Regular 400 | 15px · 1.55 |
| label (eyebrow) | Inter Medium 500 | 11–13px · letter-spacing 0.9–1.8px · uppercase |
| 카드 넘버링 | Inter Light 300 | 40–56px |

→ Inter는 300/400/500, IBM Plex Serif는 italic 400만 서브셋 로드.

### 이미지/그래픽 정책

- 피그마의 "사진" 슬롯은 전부 **그라디언트 placeholder**다(프레임명에 `PHOTO · …` 주석). 실사진 에셋이 없으므로 **CSS 그라디언트로 그대로 구현**하고, 피그마의 gradient stop 값을 그대로 옮긴다. `next/image` 불필요.
- 섹션 7 LED 글로우 3종(blue/orange/golden)은 이미지 다운로드 대신 **CSS radial-gradient + `box-shadow`/blur**로 구현 권장 (다운로드 URL은 7일 만료라 리포에 넣을 수 없음). 애니메이션(pulse/glow/strobe)은 `prefers-reduced-motion: reduce`에서 정지.
- 색상 스와치 사각형들(Sec 2·3)은 피그마 hex 그대로 `div` 처리.

### 모션

- 섹션 진입은 기존 `components/shared/Reveal` 재사용 (읽기 전용 — 수정 금지).
- LED pulse 등 ambient 모션은 CSS keyframes, reduced-motion에서 비활성.

## 5. 병렬 작업 설계 — 태스크 A/B/C/D (4명, 파일 배타 소유)

상세는 `docs/spec/tasks/ufo/TASK-{A,B,C,D}-*.md`. 요약:

```
A Phase 1 (선행, 최우선 착수)
   ├─ [data-theme="ufo"] 토큰, fonts.ts, content/ufo.ts(카피 전체),
   │  UfoSubnav, page.tsx 조립, 섹션 9개 스텁(components/ufo/sections/*)
   ▼
B ∥ C ∥ D (완전 병렬 — 각자 소유한 스텁 파일을 실구현으로 교체)
   ▼
A Phase 2 (B/C/D 완료 후)
   └─ 허브 링크 활성화(content/devices.ts, YaliSubnav), 전체 반응형 QA, 빌드 확인
```

- **핵심 규칙**: A가 Phase 1에서 모든 섹션 파일을 Placeholder 스텁으로 먼저 생성·푸시한다. 이후 B/C/D는 **자기 소유 파일의 내용만 교체**하고, `page.tsx`·`content/ufo.ts`·전역 파일은 절대 건드리지 않는다. 파일 겹침이 0이므로 머지 순서 무관.
- **B/C/D는 A Phase 1 커밋이 main에 있어야 착수 가능** (스텁·content가 있어야 빌드가 깨지지 않음).
- 카피는 전부 `content/ufo.ts`에서 import한다 (직접 하드코딩 금지 — 카피 수정이 한 파일에서 끝나야 함).

### 파일 소유권 총괄표

| 파일 | 소유 |
|---|---|
| `app/globals.css` (`[data-theme="ufo"]` 블록만 추가) | A |
| `app/devices/ufo/page.tsx` / `page.module.css` / `fonts.ts` | A |
| `content/ufo.ts` | A |
| `components/ufo/UfoSubnav.tsx` + `.module.css` | A |
| `components/ufo/sections/UfoHero.*`, `UfoDarkShowcase.*` | B |
| `components/ufo/sections/UfoEditorialBand.*`, `UfoCinematic.*` | C |
| `components/ufo/sections/UfoPowerGauge.*`, `UfoCreator.*`, `UfoSignalGuide.*`, `UfoSpecTable.*`, `UfoCtaRow.*` | D |
| `content/devices.ts` (href 한 줄) / `components/shared/YaliSubnav.tsx` (스위처 링크) | A (Phase 2) |
| 그 외 전부 (`app/devices/yali/**`, `components/site/**`, 홈·aios 등) | **전원 수정 금지** |

### 브랜치 / 푸시

- 지시대로 **main에서 직접 작업**한다. 파일이 배타적이라 충돌 없음. 단 main 푸시 = Vercel 자동 배포이므로 **푸시 전 로컬 `npm run build` 통과가 필수**다.
- 만약 branch protection으로 직접 푸시가 거부되면 태스크별 브랜치(`feat/ufo-a` 등) → PR 머지로 전환.
- 허브에서 UFO로 들어가는 링크는 A Phase 2까지 잠겨 있으므로, 작업 중 스텁 상태 페이지가 배포돼도 일반 동선에는 노출되지 않는다.

## 6. 오픈 퀘스천 (기본값으로 진행하되 확인 필요)

1. **액센트 불일치**: 피그마에서 섹션 1–5는 틸(`#346f69`/`#6db4aa`/`#a8e0d6`), 섹션 6·7·8은 블루(`#4d9fff`) eyebrow를 쓴다. 디자이너 의도인지 전역 스타일 잔재인지 불명. → **기본값: 피그마 그대로 구현**(`--ufo-alt-accent` 토큰으로 분리해 두었으니 통일 결정 시 토큰 한 줄 교체로 끝남).
2. **"Watch film · 1:36" 칩 (Sec 1)**: 필름 에셋이 없다. → 기본값: 칩을 정적 마크업으로만 표시(클릭 동작 없음). 영상 준비되면 `AutoPauseVideo` 연결.
3. **"Get UFO" CTA 목적지**: YALI 전례(`mailto:contact@newnal.com?subject=Get%20YALI`)를 따라 `mailto:…Get%20UFO`로. "Start the hunt"는 페이지 상단 스크롤 이동(임시).
4. **헤더**: 전역 헤더는 `/devices` active 처리만으로 충분(기존 로직이 `startsWith("/devices/")` 커버). 수정 불필요.

## 7. 부록 — 카피 verbatim (피그마 추출, 2026-07-16)

`content/ufo.ts`에 그대로 들어간다. 전체 TS 리터럴은 TASK-A 문서에 포함. 섹션별 원문:

### Subnav
- `UFO` · `AI Outside-World Companion` / `Chapter · Out in the World` / 스위처 `YALI` `ILLI` `UFO`(현재) / CTA `Get UFO`

### Sec 1 — Hero
- 배지: `UFO · REAL-WORLD ADVENTURE DEVICE`
- H1: `UFO — REAL-WORLD ADVENTURE DEVICE`
- 리드(serif italic): `Powered by Newnal AIOS, UFO is a wearable adventure device that transforms the everyday into the extraordinary. It turns real places into treasure zones, missions, and collectible moments — making every walk, park, school route, and city corner feel like part of a game.`
- 리드 마무리 3행: `Screens off.` / `Step outside.` / `Start the hunt.`
- 히어로 카드(틸 그라디언트): 라벨 `UFO · REAL-WORLD PLAY`, 문구 `Screens off. Step outside. Start the hunt.`, 칩 `Watch film · 1:36`

### Sec 2 — Dark Showcase
- eyebrow: `WEARABLE ADVENTURE`
- H2: `Small enough to wear. Powerful enough to start an adventure`
- 리드 4행: `UFO is designed to move with you.` / `Attach it to your wrist, shoelace, backpack strap, keyring, or watch band — then let the device guide you through the world around you.` / `Built for everyday movement.` / `Ready for spontaneous play.`
- 착용 4종: `01 wrist — Wrist close-up — For quick access and active play.` / `02 shoelace — Shoelace close-up — For movement-based missions and outdoor exploration.` / `03 backpack strap — Backpack strap close-up — For school, travel, and group adventures.` / `04 keyring — Keyring close-up — For always-ready treasure hunting.`
- Travel Showcase 패널: `SIGNAL · UFO POWERED` / `Attach anywhere · light guides the rest.` / `Wrist · shoelace · backpack · keyring — the world is your board.` ▸ `TREASURE MODE · READY` / `The world becomes the map.` ▸ `TODAY · SNAP HUNTING` + 스와치 4개(`#6b9e94` `#8cb8ad` `#385952` `#b8d9d1`) + 인용 `"Every walk turned into a hunt. My daily route feels new again."`

### Sec 3 — Editorial Band
- eyebrow: `TWO WAYS TO HUNT · 03` / H2: `Hunt treasures in two different ways`
- 우측 인용(serif): `"UFO gives you two ways to play in the real world. Some treasures are hidden as physical Treasure Cards. Others are hidden in the places and objects already around you."`
- 우측 본문: `Find the card. Or capture the world. Either way, the hunt begins outside.`
- 카드 1(wide): 이미지 배지 `WEEKS 1-3 · SNAP HUNTING` / `Every month begins with a three-week hunt.` ▸ 라벨 `SNAP HUNTING` / 제목 `Track down custom treasures.` / 본문 `Every month begins with a three-week hunt. Track down custom treasures to charge your Power gauge and unlock the gateway to Treasure Card Hunting.`
- 카드 2(narrow·다크 이미지): `WEEK 4 · STAKES RAISED` / `Week four. The stakes are raised.` / serif `Physical real-world Treasure Cards.` ▸ 라벨 `TREASURE CARD HUNTING` / 제목 `The most valuable rewards yet.` / 본문 `Treasure Card mode is activated in Week 4 of each month. Hunters search for physical real-world Treasure Cards — featuring the most valuable rewards yet.`
- 카드 3(narrow): 이미지 배지 `IN THE REAL WORLD · SNAP` + 스와치(`#8cb8ad` `#6b9e94` `#bfd9d1` `#477a73`) ▸ 라벨 `SNAP HUNTING · PROCESS` / 제목 `Step into the real world.` / 본문 `In Snap Hunting mode, treasures are hidden in plain sight — on murals, signs, statues, or trees. When the map guides you to the spot, find the right target, and take the shot with your camera. Newnal aios verifies your photo and location, instantly unlocking your reward.`
- 카드 4(wide·다크 이미지): `SEARCH FLOW · TREASURE CARD` / `Follow the map. Let the device take over. Follow the light.` + 이퀄라이저 바 ▸ 라벨 `TREASURE CARD · PROCESS` / 제목 `No screens. Follow the light.` / 본문 `Follow the map: the app guides you to the edge of the treasure zone. Let the device take over: once you arrive, UFO guides the rest of the way. Follow the light: as you draw closer, the device shifts its light patterns, letting you lock onto the signal without ever staring at a screen.`

### Sec 4 — Cinematic
- eyebrow: `· TREASURES MADE FOR YOU · 04` / H2: `Treasures Made for You`
- 본문: `UFO rewards are powered by Newnal AIOS. With the player's permission, My Data can help personalize the reward — so the treasure you unlock feels more relevant to your life, interests, and moments. The more your AIOS understands what you like, the more personal the treasure can become. Not random prizes. Rewards that feel like they found you.`
- 스트립: `04 · Treasures Made for You` / `Explore`
- 카드 3: `01 — A runner may discover running gear. — Because UFO listens to how you move — trails, pace, and rhythm become the treasure map.` / `02 — A foodie may unlock a restaurant experience. — Because taste is a signal too — the reward matches what you love to eat, drink, and try.` / `03 — Something that fits the occasion. — A player preparing for a special day may receive something that fits the occasion — not a random prize.`

### Sec 5 — Power Gauge
- eyebrow: `· POWER GAUGE · 05` / H2: `Move Together, Power Up`
- 리드(serif): `Two ways your Power Gauge grows: the more you move, and the more you play together.`
- 카드 2: `01 — The more you move, the more you level up. — As you move through the real world, your activity charges your Power Gauge. Fill it up to unlock hidden maps, rare treasures, and higher-level missions.` / `02 — The more you play together. — Players can meet, team up, and play together in the real world. When hunters connect their UFO devices, they can charge Power faster and take on bigger challenges together.`

### Sec 6 — Creator
- eyebrow: `· YOU ARE THE MAP MAKER · 06` / H2: `Create a treasure only you could hide`
- 본문 3행: `With Snap Hunting, players do not only find treasures.` / `They can create them.` / `Choose a real-world place, object, or detail that matters to you. Upload it as a Snap Hunt, add a clue, and invite other players to discover it.`
- 예시(serif, 5행): `A favorite café sign.` / `A school landmark.` / `A hidden mural.` / `A park bench with a memory.` / `A street corner only locals know.`
- 마무리: `Your world can become someone else's adventure.`

### Sec 7 — Signal Guide
- eyebrow: `· SIGNAL GUIDE · 07` / H2: `The closer you get, the stronger the signal`
- 본문 4행: `UFO is not just a wearable.` / `It is your real-world signal guide.` / `The app helps you find the edge of the treasure zone.` / `Once you are close, the UFO device guides your final search with light.`
- 존 3개: `100m — BLUE PULSE(#4d9fff) — You have entered the treasure zone.` / `50m — ORANGE GLOW(#ff9933) — You are getting closer. Start searching the real world around you.` / `10m — GOLDEN STROBE(#ffd94d) — The treasure is near. Look carefully. The final clue is close.`
- 마무리: `The world awaits. No screens. Follow the signal to the treasure.`

### Sec 8 — Spec
- 라벨 `SPEC` / 제목 `Made for the field.`
- 행: `OPERATING SYSTEM — Powered by Newnal 'aios'` / `DIMENSIONS — 40 mm diameter × 15 mm depth` / `DISPLAY — 2.8-inch circular AMOLED display` / `CONNECTIVITY — BLE 5.3 connection to smartphone` / `LIGHTING — 360° micro LED signal ring` / `SENSORS — 3-axis accelerometer for movement and activity tracking` / `NFC — Smartphone NFC/tagging interaction`

### Sec 9 — CTA
- 버튼: `Get UFO`(solid) / `Start the hunt`(outline)

## 8. 완료 기준 (Definition of Done — 전 태스크 공통)

- [ ] `npm run build` + `npm run lint` 통과 (푸시 전 로컬 필수)
- [ ] 1440px에서 피그마 `405:460`과 섹션별 시각 대조 일치
- [ ] 카피가 §7 부록과 글자 단위로 동일 (임의 윤문 금지)
- [ ] 1440 / 1024 / 768 / 390 폭 파손 없음
- [ ] `prefers-reduced-motion: reduce`에서 모든 모션(LED 포함) 비활성
- [ ] 시맨틱 헤딩(h1 1개 = Hero, 섹션별 h2), 키보드 포커스 링
- [ ] A Phase 2 후: `/devices` 허브 → UFO 카드 → `/devices/ufo` 진입 동작, Vercel 배포 확인
