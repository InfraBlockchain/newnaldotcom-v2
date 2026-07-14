# 01 — YALI 제품 페이지 스펙 (`/devices/yali`)

> 토큰·공용 컴포넌트는 `00-foundation.md`를 따른다. 이 문서는 페이지 고유의 기획·카피·레이아웃·모션을 정의한다.

---

## 0. 페이지 기획

- **제품**: YALI — K-pop 팬을 위한 AI Artist Companion 디바이스. 지름 86mm 원형 퍽(puck), 2.8" 원형 AMOLED, 360° LED 라이트 링. Newnal AIOS 구동
- **오디언스**: 글로벌 K-pop 팬덤 (10대 후반–30대, 모바일 우선, 영문 카피)
- **페이지의 단 하나의 목표**: "내 아티스트가 내 일상에 산다"는 감각을 만들고 → `Get YALI` 클릭
- **핵심 서사(페이지 구조 원리)**: 팬의 하루. 아침에 깨우고(라이트) → 하루 종일 곁에 있고(라이트) → 콘서트의 밤(다크 바이올렛) → 다시 손 안의 사물(스펙, 라이트). 초안의 라이트/다크 교차를 이 서사로 재해석한다. 다크 섹션 = "무대/밤", 라이트 섹션 = "일상/낮"
- **시그니처 요소 — Aura Ring**: 실제 하드웨어의 360° LED 라이트 링을 페이지의 시각 언어로 승격. (1) 히어로에서 디바이스 뒤에 숨쉬는 링 글로우, (2) 스크롤 진행을 나타내는 서브내브의 원형 링, (3) 콘서트 섹션의 응원봉 빛 점들. **상시 모션은 이 요소에만 허용**

### 초안 대비 디벨럽 포인트 (구현 시 초안과 다르게 갈 곳)

1. 초안 히어로의 빈 placeholder 720px 프레임 + 중복 히어로 포토 → 히어로 1개로 통합, 밀도 정리
2. 초안은 Everyday Moments 유스케이스를 2개만 노출 → 원고의 **5개 전부**를 "하루 타임라인"으로 구성
3. 원고의 "One More Thing: Concert Mode" 3종이 초안에 명시적으로 없음 → Sec 5로 신설
4. 벤다이어그램의 placeholder 텍스트("PC cats" 등) → 실제 카테고리 카피로 교체 (아래 Sec 3)
5. 보라톤 혼용 → `00-foundation.md` 토큰으로 통일
6. 서브내브의 "Chapter" 페이저 → 원형 스크롤 진행 링과 결합한 챕터 시스템으로 정식화

---

## 1. 페이지 구조 개요

```
[GNB — 전역]
[Sub-nav — YALI 로컬, sticky]
S1  Hero              라이트   "Your artist should live in your life, not just your feed."
S2  Personalized      다크     "Fandom, personalized around you." + 3 proof stats + 디바이스 비네트
S3  Philosophy        라이트   "Made for fans, not followers." + 3원 벤다이어그램
S4  Everyday Moments  라이트   하루 타임라인 — 유스케이스 5종
S5  Concert Mode      다크     "Be there when it matters." + One More Thing 3종
S6  Spec + Closing    라이트   스펙 테이블 + 최종 CTA
[Footer — 전역]
```

챕터 라벨(서브내브·섹션 아이브로우에 공통 사용):
`01 Everyday Fandom`(S2–S3) · `02 Your Day Together`(S4) · `03 Moments That Matter`(S5) · `04 The Device`(S6)

---

## 2. Sub-nav (로컬 내비)

```
┌──────────────────────────────────────────────────────────────┐
│ YALI · AI Artist Companion    ◔ 02 Your Day Together    YALI ILLI UFO │ Get YALI │
└──────────────────────────────────────────────────────────────┘
```

- 높이 56px, GNB 아래 sticky(GNB는 스크롤 시 숨김, 서브내브만 잔류). 배경 `--bg` 95% 불투명 + 하단 `--line`
- 좌: `YALI` (Instrument Sans 600) + `·` + `AI Artist Companion` (`--ink-soft`)
- 중: **원형 진행 링(지름 18px)** + 현재 챕터명. 링은 페이지 스크롤 진행률만큼 `--violet` stroke가 채워짐 (SVG `stroke-dashoffset`). 챕터명은 스크롤 위치에 따라 교체. — 시그니처 요소의 축소판
- 우: `YALI / ILLI / UFO` 스위처(YALI만 활성, 나머지 `--ink-faint` + `aria-disabled`) + `Get YALI` primary 버튼(소형)
- 모바일: 좌측 라벨과 CTA만 남기고 중앙·스위처 숨김

---

## 3. 섹션별 스펙

### S1 — Hero (라이트, 챕터 없음)

**목적**: 한 문장의 테제와 실물. 이 페이지가 앱이 아니라 "사물"을 팔고 있음을 3초 안에 전달.

**카피** (verbatim)
- Eyebrow: `● YALI · AI ARTIST COMPANION` (앞의 점은 6px `--violet` 원)
- H1: `Your artist should live in your life, not just your feed.`
- Lead: `YALI is your AI Artist Companion, powered by Newnal AIOS. It brings the artist you love into your everyday moments through personalized greetings, conversations, recommendations, memories, and experiences.`
- 3행 부정 카피(디바이스 옆): `Not another fan app.` / `Not another notification.` / `Not a chatbot.`
- 마무리 한 줄: `A daily companion built around the artist you love.`

**레이아웃**
```
┌──────────────────────────────────────────────┐
│              ● YALI · AI ARTIST COMPANION     │
│      Your artist should live in your          │   H1 중앙, max-width 1140
│        life, not just your feed.              │   Fraunces display-xl
│                 (lead, 2줄)                    │
│                                              │
│  Not another fan app.        ┌─────────┐     │   좌: 부정 카피 3행 스택
│  Not another notification.   │  ◯ 디바 │     │      (display-m, 행마다 리빌 스태거)
│  Not a chatbot.              │  이스+링 │     │   우: 디바이스 렌더 + Aura Ring
│  A daily companion built…    └─────────┘     │
└──────────────────────────────────────────────┘
```

**비주얼**
- 배경 `--bg`. 배경 상단에 극히 옅은 radial 라벤더 글로우 1개(`--lavender` 6% 투명) — 그 이상 장식 금지
- **Aura Ring**: 디바이스 이미지(`public/images/yali-device.png`, 없으면 `yali-hero.png` 크롭) 뒤에 conic-gradient 링(두께 ~2px + blur 글로우, `--lavender`→`--violet`). `--dur-ambient`로 scale 1→1.03 + opacity breathing. 페이지에서 가장 눈에 띄는 상시 모션은 여기 하나
- 부정 카피 3행: Fraunces가 아닌 **Instrument Sans 500, `--ink-soft`**, 마지막 줄 `A daily companion…`만 `--ink`로 반전 강조

**모션**: 로드 시 eyebrow→H1→lead 순 스태거 리빌. 부정 카피 3행은 스크롤 진입 시 순차 리빌

**에셋**: 디바이스 단독 렌더(투명 배경 선호). 현재 보유: `yali-device.png`, `yali-hero.png`

---

### S2 — Personalized Fandom (다크 · 챕터 01)

**목적**: "모두에게 같은 콘텐츠"인 기존 팬 플랫폼과의 차이를 증거(숫자·화면)로 보여준다. 첫 다크 전환 = 무대의 밤.

**카피**
- Eyebrow: `01 · PERSONALIZED FANDOM`
- H2: `Fandom, personalized around you.`
- Lead: `Most fan platforms send the same content to everyone. YALI is different. It learns your favorite songs, moments, memories, routines, and preferences — then connects them to the artist's voice, world, and official content. The result is fandom that feels less like following, and more like being known.`
- Proof 3종 (숫자는 Fraunces display-m, 라벨은 mono):
  1. `340` `moments/wk` — `Learns as you live.` — `YALI observes your listens, saves, replays, and skipped notifications to build your fan profile.`
  2. `1` `true voice` — `The artist's actual world.` — `Every message, song pick, and clip is drawn from the artist's approved universe — nothing generated in-between.`
  3. `0` `broadcasts` — `Nothing sent to everyone.` — `If it doesn't fit your schedule, mood, or fan history — it doesn't reach you.`
- 디바이스 비네트(원형 화면 목업 안): `FROM YOUR ARTIST · 8:24 AM` / `Good morning. I put together a playlist for your commute — you had a long day yesterday.` / 웨이브폼 / `NOW PLAYING — Cadence — B-side Live`

**레이아웃**
```
┌────────────── --stage 배경 ──────────────┐
│         01 · PERSONALIZED FANDOM          │
│      Fandom, personalized around you.     │  중앙 정렬, lead max-width 800
│                 (lead)                    │
│                                           │
│  340 moments/wk   ┌───────────────┐       │  좌: proof 3종 세로 스택 (340px 컬럼)
│  Learns as you…   │  ◯ 원형 화면   │       │  우: 2.8" 원형 화면 목업 —
│  1 true voice     │  메시지 카드    │       │     CSS로 원형 프레임 + 링 글로우,
│  The artist's…    │  웨이브폼       │       │     내부에 메시지/웨이브폼/NOW PLAYING
│  0 broadcasts     │  NOW PLAYING   │       │
│  Nothing sent…    └───────────────┘       │
└───────────────────────────────────────────┘
```

**비주얼**
- 배경: `--stage`, 상단에서 `--stage-2` radial 그라디언트. 섹션 경계는 직선(곡선 divider 금지)
- 원형 화면 목업은 **이미지가 아니라 코드로** 구현(지름 ~480px 원, 보더 `--lavender` 20%, 내부 메시지 카드·웨이브폼 바·NOW PLAYING). 웨이브폼은 초안처럼 세로 바 ~30개, 정적이되 hover 시에만 미세 애니메이션 허용
- 숫자(340/1/0)는 `--lavender`, 본문은 `--on-stage-soft`

**모션**: proof 숫자는 뷰포트 진입 시 카운트업 없이 리빌만(카운트업은 이 브랜드 톤에 과함)

---

### S3 — Philosophy (라이트 · 챕터 01)

**목적**: YALI가 무엇의 교집합인지 구조로 설명. 초안의 벤다이어그램을 정식 콘텐츠로 완성.

**카피**
- Eyebrow: `· FOR FANS, NOT FOLLOWERS ·` (중앙)
- H2: `Made for fans, not followers.`
- Lead: `A companion you keep close, not an app you forget to open. Carry the artist's world with you.`
- 벤 3원 (초안의 "PC cats/AU cats/FM cats" placeholder를 아래 확정 카피로 교체):
  - **Personal Companion** — `Morning greetings · Daily conversations · Your routines & moods`
  - **Artist Universe** — `Official voice & music · Approved moments · The artist's real world`
  - **Fan Memory** — `Your history together · Milestones & anniversaries · Moments you saved`
  - 교집합 중앙 라벨: `NEWNAL YALI`

**레이아웃**: 헤드라인 중앙 → 아래 3원 벤다이어그램(SVG). 각 원 상단에 아이콘(24px, 스트로크 1.5px), 원 안에 제목(h3)+카테고리 3행(caption). 원은 `--violet` 12% 채움 + 1px 스트로크, 겹침부는 자연 혼합(`mix-blend-mode: multiply`)

**모바일**: 벤 유지가 어려우면 3원을 세로로 겹친 체인(각 원 60% 오버랩)으로 전환. 카드 3장으로 풀어버리지 말 것 — "교집합" 구조 자체가 메시지

---

### S4 — Everyday Moments (라이트 · 챕터 02) ★ 페이지의 몸통

**목적**: 원고의 유스케이스 5종을 "아티스트와 함께 흐르는 하루"로 경험시킨다. 초안(2개 노출)을 5개 전부로 확장.

**카피**
- Eyebrow: `02 · EVERYDAY MOMENTS`
- H2: `Start the day with the artist you love`
- 인용(우측 컬럼): `"YALI is there for the small moments — the ones that make fandom feel alive."`
- 보조: `A morning greeting before school or work. A song recommendation on the way home. A message before an exam, interview, concert, or difficult day. It brings the artist's presence into your real life, not just your feed.`
- 타임라인 5종 (시각 라벨은 mono — 하루의 흐름이라는 정보를 구조가 직접 전달):
  1. `7:00 AM` **Alarm** — `Your artist wakes you up in a new and exciting way every morning.`
  2. `8:40 AM` **Listening Together** — `Listen to the same music as your artist, at the same time.`
  3. `1:15 PM` **Artist Recommends** — `Music, books, places to travel — recommended from your interests.`
  4. `6:30 PM` **Artist Remembered** — `Personalized congratulations for your birthday and special occasions.`
  5. `11:20 PM` **Goodnight From Your Artist** — `Soothing goodnight messages and lullabies, in sync with your routine.`

**레이아웃**
```
┌──────────────────────────────────────────────┐
│ 02 · EVERYDAY MOMENTS          "quote…"       │  헤더: 좌 H2 / 우 인용+보조
│ Start the day with…            (보조문단)      │
│                                              │
│ 7:00 AM ────────────────────────────────     │  세로 타임라인:
│ │ Alarm                    ┌──────────┐      │  좌측 mono 시각 + 헤어라인 레일,
│ │ (설명)                    │  이미지    │      │  본문+이미지 카드가 좌/우 교차
│ │                          └──────────┘      │  (1,3,5 이미지 우 / 2,4 이미지 좌)
│ 8:40 AM ────────────────────────────────     │
│ │ Listening Together …                        │
│ … (×5)                                       │
└──────────────────────────────────────────────┘
```

- 타임라인 레일: 1px `--line` 세로선 + 각 항목 지점에 8px `--violet` 원. 스크롤에 따라 지나온 구간의 레일이 `--violet`으로 채워짐(시그니처 링과 같은 "빛이 차오르는" 문법)
- 이미지 카드: radius 28px, 비율 4:3. 보유 에셋 `yali-everyday.png` 외 4장 필요 → 없는 슬롯은 `--stage-2` 배경 + 중앙에 mono 캡션(`PHOTO · morning alarm scene` 형식) placeholder
- 모바일: 교차 배치 해제, 시각→제목→설명→이미지 세로 스택. 레일은 좌측 고정

---

### S5 — Concert Mode (다크 · 챕터 03)

**목적**: 감정의 정점. 시네마틱 브릿지("Be there when it matters") 뒤에 원고의 "One More Thing: Concert Mode" 3종을 공개.

**카피**
- 브릿지 (풀블리드 포토 위):
  - Eyebrow: `· MOMENTS THAT MATTER ·`
  - H2: `Be there when it matters.`
  - Lead: `YALI helps you stay connected to the moments that matter most — releases, livestreams, concerts, tickets, and memories from the artist's journey. Instead of sending every fan the same alert, YALI understands what is relevant to you.`
- One More Thing 헤더: eyebrow `ONE MORE THING`, H2 `Concert Mode.`
- 카드 3종:
  1. **Concert Light Stick Mode** — `Light up to cheer on your artist live.`
  2. **Capture the Moment** — `Capture the concert without taking out your phone.`
  3. **Offsite** — `Experience the excitement and energy of the concert, wherever you are.`

**레이아웃**
```
┌───── 풀블리드 콘서트 포토(어둡게 오버레이) ─────┐
│            · MOMENTS THAT MATTER ·            │   높이 ~720px, 텍스트 중앙
│           Be there when it matters.           │
│                  (lead)                       │
└───────────────────────────────────────────────┘
┌────────────── --stage 배경 ───────────────────┐
│   ONE MORE THING                              │
│   Concert Mode.                               │
│  ┌────────┐  ┌────────┐  ┌────────┐           │   3열 카드(태블릿 1열),
│  │ 포토    │  │ 포토    │  │ 포토    │           │   카드 = 이미지 + h3 + 1줄
│  │ Light… │  │ Capture│  │ Offsite│           │
│  └────────┘  └────────┘  └────────┘           │
└───────────────────────────────────────────────┘
```

**비주얼**
- 브릿지 포토: `yali-concert.png` (스타디움 군중 + 보라 조명). 위에 `--stage` 70% 오버레이로 텍스트 대비 확보
- **응원봉 빛 바다**: 브릿지 하단 1/3에 CSS radial 점 글로우(`--lavender`, 다양한 크기 12–20개)를 흩뿌림. 정적. 시그니처 모티프의 세 번째 등장 — 애니메이션 없이 배치만으로 충분
- 카드 이미지 hover: scale 1.03, `--dur-micro`

---

### S6 — Spec + Closing (라이트 · 챕터 04)

**목적**: 감정에서 사물로 착지. 스펙은 신뢰, CTA는 전환.

**카피 — 스펙 테이블** (초안 verbatim)
- 상단 mono 라벨: `SPEC`, 제목: `Made to keep close.` (Fraunces display-m)

| 라벨 (mono, caps) | 값 |
|---|---|
| OPERATING SYSTEM | Powered by Newnal 'aios' |
| DIMENSIONS | 86 mm diameter × 26 mm depth |
| DISPLAY | 2.8-inch circular AMOLED display |
| CONNECTIVITY | Wi-Fi and Bluetooth connectivity |
| LIGHTING | 360° translucent LED light guide ring |
| AUDIO | 30cc independent acoustic enclosure |

**레이아웃**: 상단 3px `--ink` 굵은 라인 → 행마다 1px `--line` 디바이더. 좌 컬럼 라벨 240px, 우 값. 테이블 우측(데스크톱)에 디바이스 측면 렌더 1장(선택)

**Closing CTA**: 테이블 아래 중앙 — H2 없이 버튼 2개만: `Get YALI`(primary) + `How AIOS works`(secondary, `/aios` 비활성 상태면 텍스트 링크 스타일로 두되 disabled). 그 아래 caption `Powered by Newnal aios.`

---

## 4. 콘텐츠 데이터 구조

`content/yali.ts`에 위 카피 전부를 상수로 정의하고 컴포넌트는 이를 렌더만 한다. 카피 수정이 코드 수정 없이 가능해야 한다는 뜻이 아니라(어차피 ts지만), **카피가 마크업에 흩어지지 않게** 하는 것이 목적.

## 5. 에셋 리스트

| 슬롯 | 파일 | 상태 |
|---|---|---|
| S1 디바이스 렌더 | `yali-device.png` | 보유 |
| S1/기타 히어로 포토 | `yali-hero.png` | 보유 |
| S4 타임라인 이미지 ×5 | `yali-everyday.png` + 4장 | **4장 부족 → placeholder 규칙 적용** |
| S5 콘서트 포토 | `yali-concert.png` | 보유 |
| S6 측면 렌더 | — | 선택. 없으면 생략 |

placeholder 규칙: `--stage-2` 배경 + 중앙 mono 캡션 `PHOTO · <장면 설명>` + 12px `--on-stage-soft`. 회색 박스 금지.

## 6. 수용 기준 (이 페이지 전용)

- [ ] 서브내브 원형 진행 링이 스크롤 진행률을 정확히 반영하고, 챕터명이 4개 구간에서 올바르게 전환
- [ ] 상시 루프 모션은 히어로 Aura Ring 하나뿐이다 (S2 웨이브폼은 hover 시에만)
- [ ] S4 타임라인 5종이 전부 렌더되고, 레일 채움이 스크롤과 동기화
- [ ] S3 벤다이어그램이 모바일에서 체인 형태로 degrade (카드 3장 아님)
- [ ] 다크 섹션(S2·S5 하단)에서 `--lavender`/`--on-stage` 계열만 사용, 라이트용 잉크 토큰 미사용
- [ ] Fraunces는 H1/H2/display-m 및 S2 proof 숫자에만 등장
- [ ] `prefers-reduced-motion`에서 Aura Ring 정지 + 리빌 즉시 표시
- [ ] 390px 폭에서 H1 3–4줄 이내, 가로 스크롤 없음
