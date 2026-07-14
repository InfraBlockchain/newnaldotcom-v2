# 01 — YALI 제품 페이지 스펙 (`/devices/yali`)

> 토큰·공용 컴포넌트는 `00-foundation.md`를 따른다. 이 문서는 페이지 고유의 기획·카피·레이아웃·모션을 정의한다.
>
> **카피 출처(우선순위)**: ① `docs/원고_디바이스-페이지-세부-기획안.md`(디바이스 페이지 확정 기획) → ② `docs/원고_홈페이지-총체-기획안.md`(총체 기획 — 다이어그램·보조 카피 보강용). 이 문서의 영문 카피는 두 원고에서 그대로 가져온 것이며, 원고에 없는 문구는 `[데모 카피]` / `[확정 필요]`로 표시했다. 구현 에이전트는 표기 없는 카피를 임의로 바꾸지 말 것.

---

## 0. 페이지 기획

- **제품**: YALI — K-pop 팬을 위한 AI Artist Companion 디바이스. 지름 86mm 원형 퍽(puck), 2.8" 원형 AMOLED, 360° LED 라이트 링. Newnal AIOS 구동
- **오디언스**: 글로벌 K-pop 팬덤 (10대 후반–30대, 모바일 우선, 영문 카피)
- **페이지의 단 하나의 목표**: "내 아티스트가 내 일상에 산다"는 감각을 만들고 → `Get YALI` 클릭
- **핵심 서사(페이지 구조 원리)**: 팬의 하루. 아침에 깨우고(라이트) → 하루 종일 곁에 있고(라이트) → 중요한 순간·콘서트의 밤(다크 바이올렛) → 다시 손 안의 사물(스펙, 라이트). 다크 섹션 = "무대/밤", 라이트 섹션 = "일상/낮"
- **시그니처 요소 — Aura Ring**: 실제 하드웨어의 360° LED 라이트 링을 페이지의 시각 언어로 승격. (1) 히어로에서 디바이스/영상 썸네일 뒤에 숨쉬는 링 글로우, (2) 스크롤 진행을 나타내는 서브내브의 원형 링, (3) 콘서트 섹션의 응원봉 빛 점들. **상시 모션은 이 요소에만 허용**

### 원고 반영 노트 (2026-07-14 대조 완료)

- 유스케이스는 세부 기획안의 **1부 4타일 + 2부 3타일** 체계를 따른다. 총체 기획안의 5종 캐러셀(Alarm~Goodnight)과 Concert Mode 3종(Light Stick/Capture/Offsite)은 **이 페이지에서 사용하지 않는다** (충돌 시 세부 기획안 우선 — 변경 시 원고부터 수정할 것)
- 총체 기획안에서 가져온 신규 섹션: One-to-Many vs One-to-One 다이어그램(S2), Three Layers(S3)
- Figma 초안의 proof 숫자(340/1/0)는 두 원고 어디에도 없어 **삭제**했다

---

## 1. 페이지 구조 개요

```
[GNB — 전역]
[Sub-nav — YALI 로컬, sticky]
S1  Hero               라이트   "Your artist should live in your life, not just your feed." + 홍보영상
S2  Personalized       다크     "Fandom, personalized around you." + One-to-Many vs One-to-One 다이어그램
S3  Three Layers       라이트   "One artist identity. A different relationship for every fan."
S4  Use Cases 1부      라이트   "Start the day with the artist you love" — 타일 4종
S5  Use Cases 2부      다크     "Be there when it matters" — 타일 3종
S6  정리                라이트   "Made for fans, not followers." + 핵심 가치 3종 벤다이어그램
S7  Spec + Closing     라이트   스펙 테이블 + 최종 CTA
[Footer — 전역]
```

챕터 라벨(서브내브·섹션 아이브로우 공통):
`01 Personalized Fandom`(S2–S3) · `02 Your Day Together`(S4) · `03 Moments That Matter`(S5) · `04 Made for Fans`(S6–S7)

---

## 2. Sub-nav (로컬 내비)

```
┌──────────────────────────────────────────────────────────────┐
│ YALI · AI Artist Companion    ◔ 02 Your Day Together    YALI ILLI UFO │ Get YALI │
└──────────────────────────────────────────────────────────────┘
```

- 높이 56px, GNB 아래 sticky(GNB는 스크롤 시 숨김, 서브내브만 잔류). 배경 `--bg` 95% 불투명 + 하단 `--line`
- 좌: `YALI` (Instrument Sans 600) + `·` + `AI Artist Companion` (`--ink-soft`)
- 중: **원형 진행 링(지름 18px)** + 현재 챕터명. 링은 페이지 스크롤 진행률만큼 `--violet` stroke가 채워짐 (SVG `stroke-dashoffset`). 챕터명은 스크롤 위치에 따라 교체 — 시그니처 요소의 축소판
- 우: `YALI / ILLI / UFO` 스위처(YALI만 활성, 나머지 `--ink-faint` + `aria-disabled`) + `Get YALI` primary 버튼(소형)
- 모바일: 좌측 라벨과 CTA만 남기고 중앙·스위처 숨김

---

## 3. 섹션별 스펙

### S1 — Hero (라이트, 챕터 없음)

**목적**: 한 문장의 테제 + 홍보 영상. 이 페이지가 앱이 아니라 "관계와 사물"을 팔고 있음을 3초 안에 전달.

**카피** (세부 기획안 S1 verbatim)
- Eyebrow: `● YALI · AI ARTIST COMPANION` (앞의 점은 6px `--violet` 원)
- H1: `Your artist should live in your life, not just your feed.`
- Lead: `YALI is your AI Artist Companion, powered by Newnal AIOS. It brings the artist you love into your everyday moments through personalized greetings, conversations, recommendations, memories, and experiences.`
- 3행 부정 카피: `Not another fan app.` / `Not another notification.` / `Not a chatbot.`
- 마무리 한 줄: `A daily companion built around the artist you love`
- 보조 킥커(총체 기획안에서 보강, 히어로 하단 또는 S2 도입에 배치): `One artist. Millions of fans. A different relationship for every person.`

**레이아웃**
```
┌──────────────────────────────────────────────┐
│              ● YALI · AI ARTIST COMPANION     │
│      Your artist should live in your          │   H1 중앙, max-width 1140
│        life, not just your feed.              │   Fraunces display-xl
│                 (lead, 2줄)                    │
│                                              │
│  Not another fan app.      ┌──────────────┐  │   좌: 부정 카피 3행 + 마무리 1줄
│  Not another notification. │ ▶ 영상 썸네일  │  │   우: 홍보영상 플레이어
│  Not a chatbot.            │  (Aura Ring)  │  │      (16:9, radius 28px)
│  A daily companion built…  └──────────────┘  │
│        One artist. Millions of fans. …        │   킥커 (display-m, 중앙)
└──────────────────────────────────────────────┘
```

**비주얼**
- 배경 `--bg`. 상단에 극히 옅은 radial 라벤더 글로우 1개(`--lavender` 6%) — 그 이상 장식 금지
- **홍보영상**: 원고 지시 — *"처음엔 썸네일만 보이고 재생버튼만, 영상 연결 안 해도 됨"*. 썸네일은 `yali-hero.png`(어둡게 오버레이) + 중앙 원형 재생 버튼(64px, `--violet` 배경 백색 삼각형). 클릭 동작은 미연결 상태로 두되 버튼은 `aria-label="Play video (coming soon)"` 처리. **Aura Ring은 썸네일 뒤에** conic-gradient 링(두께 ~2px + blur 글로우, `--lavender`→`--violet`) + `--dur-ambient` breathing — 페이지 유일의 상시 모션
- 부정 카피 3행: Instrument Sans 500, `--ink-soft`. 마무리 줄 `A daily companion…`만 `--ink` 강조

**모션**: 로드 시 eyebrow→H1→lead 순 스태거 리빌. 부정 카피 3행은 스크롤 진입 시 순차 리빌

**에셋**: 영상 썸네일(`yali-hero.png` 대체 가능), 추후 실제 영상 URL

---

### S2 — Personalized Fandom (다크 · 챕터 01)

**목적**: "모두에게 같은 콘텐츠"인 기존 팬덤과 1:1 관계의 차이를 **구조 다이어그램**으로 증명. 첫 다크 전환 = 무대의 밤.

**카피** (헤드라인·리드: 세부 기획안 S2 / 다이어그램: 총체 기획안 YALI S2 verbatim)
- Eyebrow: `01 · PERSONALIZED FANDOM`
- H2: `Fandom, personalized around you`
- Lead: `Most fan platforms send the same content to everyone. YALI is different. It learns your favorite songs, moments, memories, routines, and preferences — then connects them to the artist's voice, world, and official content. The result is fandom that feels less like following, and more like being known.`
- **다이어그램 — One-to-Many vs One-to-One** (좌우 분할):
  - 좌 `Traditional Fandom`: `One Artist` ↓ `The same post or content` ↓ `Thousands or millions of fans` — 불릿: `Same message` / `Same timing` / `No individual context` / `Interaction ends when content ends`
  - 우 `YALI`: `Artist Identity + Newnal AIOS` ↓ `Individually personalized interaction` ↓ `Each fan` — 불릿: `Different context` / `Different conversation` / `Different recommendations` / `Relationship that develops over time`

**레이아웃**
```
┌────────────── --stage 배경 ──────────────┐
│         01 · PERSONALIZED FANDOM          │
│      Fandom, personalized around you      │  중앙 정렬, lead max-width 800
│                 (lead)                    │
│  ┌─ Traditional Fandom ─┐ ┌─── YALI ───┐  │  좌우 패널 분할.
│  │ One Artist            │ │ Artist Identity│  좌: --stage-2 위 무채 회색조,
│  │   ↓ same content      │ │  + Newnal AIOS │     1→다수로 퍼지는 선
│  │ millions of fans      │ │   ↓ personalized│ 우: --lavender 글로우,
│  │ · Same message …      │ │ Each fan       │     1:1 개별 연결선
│  └───────────────────────┘ │ · Different …  │  (SVG or CSS, 이미지 금지)
│                            └───────────────┘  │
└───────────────────────────────────────────┘
```

**비주얼**
- 배경 `--stage`, 상단 `--stage-2` radial. 섹션 경계는 직선
- 다이어그램은 코드(SVG) 구현. 좌 패널은 의도적으로 흐리고 균질하게(같은 메시지가 복제되는 느낌), 우 패널은 연결선마다 굵기·경로를 다르게(개별 관계) — 구조 자체가 카피의 증거가 되도록
- 좌 패널 텍스트 `--on-stage-soft`, 우 패널 강조 `--lavender`

**모션**: 뷰포트 진입 시 좌→우 순 리빌. 우 패널 연결선은 `stroke-dashoffset`으로 한 번 그려지기(600ms, reduced-motion 시 즉시)

---

### S3 — Three Layers (라이트 · 챕터 01)

**목적**: YALI 지능의 3층 구조(아티스트 세계 / 팬의 세계 / AIOS)를 설명. 총체 기획안 YALI S3 신설 섹션.

**카피** (총체 기획안 verbatim)
- H2: `One artist identity. A different relationship for every fan.`
- Lead: `YALI brings together three layers of intelligence: the artist's world, the fan's world, and Newnal AIOS.` (이하 원고 문단 3개 전문 사용)
- 레이어 3종 (01/02/03 넘버링 — 실제 적층 순서이므로 넘버링이 정보를 가짐):
  1. **The Artist's World** — `The artist's voice, personality, values, music, stories, visual identity, and creative universe. YALI is built to reflect how the artist communicates and what the artist represents—not simply to generate generic fan content.`
  2. **Your World** — `Your favorite songs, meaningful memories, routines, interests, emotional moments, and history as a fan. Only the data you choose to share is used to personalize the experience.`
  3. **Newnal AIOS** — `The intelligence layer that connects artist identity with fan context. AIOS remembers relevant interactions, understands the current situation, and determines what kind of response, recommendation, or experience is appropriate for that moment.`

**레이아웃**: H2+lead 좌측 정렬(max-width 720) → 아래 3단 가로 카드(태블릿 이하 세로). 카드는 `--surface` 배경 + `--line` 보더, 상단에 mono `01 / 02 / 03` + 얇은 수평선. **적층 은유**: 데스크톱에서 카드 3장을 미세하게 계단식 오프셋(각 +16px)으로 배치해 "레이어"를 형태로 표현

---

### S4 — Use Cases 1부: Everyday (라이트 · 챕터 02) ★ 페이지의 몸통

**목적**: 일상 유스케이스 4종을 "아티스트와 함께 흐르는 하루"로 경험시킨다.

**카피** (세부 기획안 S3 verbatim)
- Eyebrow: `02 · EVERYDAY MOMENTS`
- H2: `Start the day with the artist you love`
- Lead: `YALI is there for the small moments — the ones that make fandom feel alive. A morning greeting before school or work. A song recommendation on the way home. A message before an exam, interview, concert, or difficult day. It brings the artist's presence into your real life, not just your feed.`
- 경험 타일 4종 (하루 흐름 라벨은 mono — 원고에 시각 지정이 없으므로 시간대 라벨만, 구체 시각 발명 금지):
  1. `MORNING` **Morning Message** — `Wake up to a greeting shaped around your schedule, mood, and fan history.`
  2. `ANY MOMENT` **Mood-Based Music** — `Get songs, performances, or clips selected for how you feel right now.`
  3. `ANY MOMENT` **Daily Encouragement** — `Receive words that match your moment — whether you need energy, comfort, focus, or celebration.`
  4. `NIGHT` **Night Recap** — `End the day with a memory, message, or song connected to you and the artist.`

**레이아웃**
```
┌──────────────────────────────────────────────┐
│ 02 · EVERYDAY MOMENTS                         │  헤더: H2 + lead (좌측, max 720)
│ Start the day with the artist you love        │
│                                              │
│ MORNING ─────────────────────────────────    │  세로 타임라인 레일:
│ │ Morning Message         ┌──────────┐       │  좌측 mono 라벨 + 헤어라인,
│ │ (설명)                   │  이미지    │       │  본문+이미지 카드 좌/우 교차
│ │                         └──────────┘       │  (1,3 이미지 우 / 2,4 이미지 좌)
│ ANY MOMENT ──────────────────────────────    │
│ │ Mood-Based Music …                          │
│ … (×4)                                       │
└──────────────────────────────────────────────┘
```

- 타임라인 레일: 1px `--line` 세로선 + 각 항목 지점 8px `--violet` 원. 스크롤에 따라 지나온 구간이 `--violet`으로 채워짐(시그니처 링과 같은 "빛이 차오르는" 문법)
- 이미지 카드: radius 28px, 비율 4:3. 보유 에셋 `yali-everyday.png` 외 3장 필요 → 없는 슬롯은 placeholder 규칙(§5) 적용
- 모바일: 교차 해제, 라벨→제목→설명→이미지 세로 스택. 레일 좌측 고정

---

### S5 — Use Cases 2부: Moments That Matter (다크 · 챕터 03)

**목적**: 감정의 정점. 콘서트·중요한 순간의 연결 — 시네마틱 브릿지 + 타일 3종.

**카피** (세부 기획안 S4 verbatim)
- 브릿지 (풀블리드 포토 위):
  - Eyebrow: `· MOMENTS THAT MATTER ·`
  - H2: `Be there when it matters`
  - Lead: `YALI helps you stay connected to the moments that matter most — releases, livestreams, concerts, ticket openings, events, and memories from the artist's journey. But instead of sending every fan the same alert, YALI understands what is relevant to you.`
- 경험 타일 3종:
  1. **Concert Live Mode** — `Can't make the show? Experience it anyway. Concert Live Mode connects you directly to the crowd, letting you stream live through the lenses of fans in the crowd. Artists can see and share the energy of everyone tuned in.`
  2. **Concert & Ticket Reminders** — `Stay ahead of the crowd. Get timely, tailored reminders right when you need them—never buried in a noisy feed.`
  3. **Content You Missed** — `Never miss a beat. Instantly catch up on the performances, interviews, and behind-the-scenes moments curated just for you.`

**레이아웃**
```
┌───── 풀블리드 콘서트 포토(어둡게 오버레이) ─────┐
│            · MOMENTS THAT MATTER ·            │   높이 ~720px, 텍스트 중앙
│            Be there when it matters           │
│                  (lead)                       │
└───────────────────────────────────────────────┘
┌────────────── --stage 배경 ───────────────────┐
│  ┌────────┐  ┌────────┐  ┌────────┐           │   3열 카드(태블릿 1열),
│  │ 포토    │  │ 포토    │  │ 포토    │           │   카드 = 이미지 + h3 + 설명
│  │Concert │  │Reminder│  │Missed  │           │
│  └────────┘  └────────┘  └────────┘           │
└───────────────────────────────────────────────┘
```

**비주얼**
- 브릿지 포토: `yali-concert.png` (스타디움 군중 + 보라 조명) + `--stage` 70% 오버레이
- **응원봉 빛 바다**: 브릿지 하단 1/3에 CSS radial 점 글로우(`--lavender`, 12–20개, 정적). 시그니처 모티프의 세 번째 등장 — 애니메이션 없이 배치만으로 충분
- 카드 이미지 hover: scale 1.03, `--dur-micro`

---

### S6 — 정리: Made for Fans (라이트 · 챕터 04)

**목적**: 핵심 가치 3종으로 페이지를 요약·수렴. 벤다이어그램(교집합 = YALI).

**카피** (세부 기획안 S5 verbatim)
- Eyebrow: `· FOR FANS, NOT FOLLOWERS ·` (중앙)
- H2: `Made for fans, not followers.`
- Lead: `YALI is designed to feel personal, collectible, and alive — a companion you keep close, not an app you forget to open. It turns fandom into something you can hear, see, remember, and return to every day.`
- 3행 리듬 카피(리드 아래, 행별 리빌): `Carry the artist's world with you.` / `Build your own fan memories.` / `Let every interaction become part of your story.`
- 벤 3원 (원고의 핵심 가치 3종):
  - **Personal AI Artist Companion** — `A dedicated companion experience powered by Newnal AIOS.`
  - **Official Artist Universe** — `Built around the artist's approved voice, content, style, and creative identity.`
  - **Your Fan Memory** — `A relationship that grows with your journey as a fan.`
  - 교집합 중앙 라벨: `NEWNAL YALI`

**레이아웃**: 헤드라인·리드 중앙 → 3원 벤다이어그램(SVG). 각 원 상단 아이콘(24px, 스트로크 1.5px), 원 안 제목(h3)+설명(caption). 원은 `--violet` 12% 채움 + 1px 스트로크, 겹침부 `mix-blend-mode: multiply`

**모바일**: 3원을 세로로 겹친 체인(각 원 60% 오버랩)으로 전환. 카드 3장으로 풀지 말 것 — "교집합" 구조 자체가 메시지

---

### S7 — Spec + Closing (라이트 · 챕터 04)

**목적**: 감정에서 사물로 착지. 스펙은 신뢰, CTA는 전환.

**카피 — 스펙 테이블** (세부 기획안 S6 verbatim)
- 상단 mono 라벨: `SPEC`, 제목: `Made to keep close.` `[데모 카피 — 원고에 제목 없음, 확정 필요]`

| 라벨 (mono, caps) | 값 |
|---|---|
| OPERATING SYSTEM | Powered by Newnal 'aios' |
| DIMENSIONS | 86 mm diameter × 26 mm depth |
| DISPLAY | 2.8-inch circular AMOLED display |
| CONNECTIVITY | Wi-Fi and Bluetooth connectivity |
| LIGHTING | 360° translucent LED light guide ring |
| AUDIO | 30cc independent acoustic enclosure |

**레이아웃**: 상단 3px `--ink` 라인 → 행마다 1px `--line` 디바이더. 좌 라벨 컬럼 240px. 테이블 우측(데스크톱)에 디바이스 렌더 1장(선택)

**Closing CTA**: 테이블 아래 중앙 — 버튼 2개: `Get YALI`(primary) + `How AIOS works`(secondary, `/aios` 미구현 동안 disabled). 아래 caption `Powered by Newnal aios.`

---

## 4. 콘텐츠 데이터 구조

`content/yali.ts`에 위 카피 전부를 상수로 정의하고 컴포넌트는 렌더만 한다. 카피가 마크업에 흩어지지 않게 하는 것이 목적. 원고 개정 시 이 파일과 본 스펙 문서를 함께 갱신한다.

## 5. 에셋 리스트

| 슬롯 | 파일 | 상태 |
|---|---|---|
| S1 영상 썸네일 | `yali-hero.png` (임시) | 실제 영상 썸네일/URL 대기 |
| S4 타일 이미지 ×4 | `yali-everyday.png` + 3장 | **3장 부족 → placeholder 규칙** |
| S5 콘서트 포토 | `yali-concert.png` | 보유 |
| S5 타일 이미지 ×3 | — | 부족 → placeholder 규칙 |
| S7 디바이스 렌더 | `yali-device.png` | 보유 (선택) |

placeholder 규칙: `--stage-2` 배경 + 중앙 mono 캡션 `PHOTO · <장면 설명>` + 12px `--on-stage-soft`. 회색 박스 금지.

## 6. 수용 기준 (이 페이지 전용)

- [ ] 모든 영문 카피가 `docs/원고_디바이스-페이지-세부-기획안.md`(우선) 및 `docs/원고_홈페이지-총체-기획안.md`와 일치 — `[데모 카피]` 표기 항목 제외
- [ ] 서브내브 원형 진행 링이 스크롤 진행률을 정확히 반영, 챕터명 4구간 전환
- [ ] 상시 루프 모션은 히어로 Aura Ring 하나뿐
- [ ] S1 영상: 썸네일+재생버튼만, 미연결 상태 명시적 처리
- [ ] S2 다이어그램이 이미지가 아닌 SVG/CSS로 구현, 좌우 대비가 시각적으로 성립
- [ ] S4 타일 4종·S5 타일 3종 전부 렌더, S4 레일 채움 스크롤 동기화
- [ ] S6 벤다이어그램 모바일 체인 degrade (카드 3장 아님)
- [ ] 다크 섹션에서 `--lavender`/`--on-stage` 계열만 사용
- [ ] Fraunces는 H1/H2/display-m에만 등장
- [ ] `prefers-reduced-motion`에서 Aura Ring 정지 + 리빌 즉시 표시
- [ ] 390px 폭에서 H1 3–4줄 이내, 가로 스크롤 없음
