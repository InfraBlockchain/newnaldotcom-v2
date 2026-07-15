# 06 — 피그마 확정 디자인 반영: `/aios` + `/devices`

> 작성: 2026-07-15. 구현 에이전트용 스펙.
> **이 문서는 `/aios`와 `/devices` 두 페이지에 한해 `03-aios.md`·`05-devices-hub.md`를 대체한다.**
> 이 두 페이지에서는 기존 "Figma는 draft, 스펙이 target" 원칙이 **뒤집힌다: 피그마 확정 프레임이 target이고, 픽셀 충실하게 그대로 구현한다** (사용자 확정 2026-07-15).

---

## 0. 전제

| 항목 | 내용 |
|------|------|
| 피그마 파일 | key `g7xkiCYymXjZTuNxgg9LzW` ([Newnal.com](https://www.figma.com/design/g7xkiCYymXjZTuNxgg9LzW/Newnal.com)) |
| 확정 프레임 | **`/aios` → node `316:42` ("aios")** · **`/devices` → node `602:4` ("CompanionDevices")** — 데스크톱 1440 프레임 |
| 시각 대조 기준 | `docs/figma-refs/aios-full.png`, `docs/figma-refs/companion-devices-full.png` (프레임 전체 스크린샷, 커밋됨) |
| 유일한 예외 | `/aios` 마지막 **Intellectual Property Portfolio 섹션은 현행 구현 그대로 유지** — 피그마에는 회색 placeholder뿐. 기존 `components/shared/IpPortfolio.tsx` + `content/aios.ts`의 데이터·스타일(Instrument Serif / IBM Plex Mono / EVIDENCE eyebrow / Download 버튼 2개)을 손대지 않고 새 페이지에 그대로 삽입한다 (사용자 지시: "기존에 배포해뒀던 디자인대로") |
| 기술 규칙 | 기존과 동일: App Router + TS + CSS Modules + CSS 변수만. Tailwind·모션 라이브러리 금지. `Reveal` 재사용 가능(모션은 기존 관행 유지, 피그마엔 모션 정보 없음) |
| ⚠️ Next.js 16 | 코드 작성 전 `node_modules/next/dist/docs/` 관련 가이드 선행 확인 (루트 CLAUDE.md) |
| 세부값 보충 | 이 문서에 없는 수치가 필요하면 Figma MCP `get_design_context(fileKey, nodeId)`로 해당 노드만 조회. 문서와 충돌 시 이 문서가 우선 |

### 스코프 밖 (건드리지 않음)

- `/` 홈, `/private-phone`, `/devices/yali` — 현행 유지.
- `content/home.ts`, `content/privatePhone.ts`, `content/yali.ts` — 수정 금지.

---

## 1. 전역 변경 (헤더 · 푸터 · 폰트)

### 1-1. Header — 피그마 `602:5` 기준으로 **전역 교체**

- 높이 64px, 좌우 80px(콘텐츠 1280 정렬), 흰 배경, sticky 유지(기존 관행).
- 좌측 로고 `Newnal` — **Syne 500, 17px, ls -0.03em**, 검정. 링크 `/` 유지.
- 중앙 메뉴 3개: `Newnal aios` `Companion Devices` `Private Phone` — Inter 400 14px, `rgba(10,10,10,0.5)`, 패딩 12px×6px, pill radius 30px, gap 4px.
- **active = 현재 페이지 pill에 1px `#848484` 보더** (기존 밑줄 방식 폐기).
- 참고: aios 프레임(`316:43`)의 대문자 헤더는 구버전 — 무시하고 602 헤더로 통일.
- Private Phone 페이지의 다크 헤더 변형이 현행에 있으면 토큰만 맞춰 유지 (미결 §6-⑤).

### 1-2. Footer — 피그마 `602:38` 기준으로 **전역 교체**

- 한 줄: 좌 `Newnal`(로고 스타일 동일) / 우 `© 2026 Newnal. All rights reserved.` (Inter 400 12px). 패딩 80×30, 양끝 정렬.
- 현행 리치 푸터(Products/Connect 컬럼)는 폐기 (미결 §6-④).

### 1-3. 폰트 (`app/layout.tsx`에 추가)

| 역할 | 폰트 | 로딩 |
|------|------|------|
| 새 디스플레이(헤드라인·로고) | **Syne** 400·500 | `next/font/google`, `--font-syne` |
| 새 본문 | **Inter** 400·500·700 | `next/font/google`, `--font-inter` |
| devices 카드 라벨(YALI/ILLI/UFO) | **Pretendard** 700 | self-host (npm `pretendard` woff2 → `next/font/local`), `--font-pretendard` |
| IP Portfolio 섹션 | Instrument Serif / Instrument Sans / IBM Plex Mono | **기존 그대로 유지** |

> 피그마 devices 본문의 "Google Sans Flex"는 웹 라이선스가 없어 **Inter로 대체**(자간 -0.04em 유지). 한글 문단의 "SamsungOneKorean"도 무시하고 Pretendard.
> 기존 Instrument Sans/Serif는 홈·Private Phone·YALI에서 계속 쓰이므로 **제거하지 말 것**.

### 1-4. 신규 토큰 (globals.css에 추가 — 기존 토큰과 충돌 시 `--fg-*` 접두)

```
--fg-ink:         #0a0a0b   /* 본문 내 강조 스팬 */
--fg-text:        #19191c   /* 제목·카드 텍스트 */
--fg-muted:       #6b6b70   /* 회색 본문 */
--fg-accent:      #4d9fff   /* 포인트 블루: eyebrow·top-bar·강조 */
--fg-accent-soft: #eaf3ff   /* 타임라인 active 원 배경 */
--fg-line:        #b8b8bf   /* 다이어그램 선 */
--fg-border:      #d9d9de   /* 원형·타임라인 카드 보더 */
--fg-card-border: #e5e5eb
--fg-card-bg:     #f9f9fa
--fg-panel-bg:    #f6f6f8   /* 다이어그램 패널 */
--fg-band-bg:     #f8f8f8   /* 회색 밴드 섹션 */
--fg-dot:         #9a9a9a   /* 캐러셀 dot */
```

### 1-5. 타이포 스케일 (두 페이지 공통)

- H1(aios 히어로): Syne 400, 84px, ls -0.03em, lh 0.95, 중앙.
- H1(devices 히어로): Syne 500, 60px, ls -0.03em, lh 1.0, 좌정렬.
- H2(섹션 대제목): Syne 400, 60px, ls -0.03em, lh 0.95.
- H3(aios 하단 3개 섹션 제목): Syne 400, ~40px, lh 1.2 (스크린샷 대조로 확정).
- Eyebrow: Inter 500, 12px, ls 0.08em, 대문자, `--fg-accent`.
- 영문 본문: Inter 400, 16px, lh 1.65, `--fg-muted`; 강조 스팬 `--fg-ink`(필요시 700).
- 한글 H2: Pretendard 700, 47px, lh 1.2. 한글 본문: Pretendard 400, 17.5px, lh 1.33.

---

## 2. `/aios` 페이지 (피그마 `316:42`)

콘텐츠 골격은 현행 `/aios`와 거의 같다 — **카피는 피그마 원문으로 갱신하고, 비주얼을 위 토큰으로 전면 교체**한다. `content/aios.ts`는 스키마 유지하되 카피를 피그마 원문과 대조·수정(임의 윤문 금지). 기존의 보라 글로우·serif 헤드라인·eyebrow 문구(피그마에 없는 것)는 제거.

위→아래 (섹션 사이 배경: 명시 없으면 흰색, 콘텐츠 폭 1280 / 좌우 80px):

**S1. Hero — `316:56`**: 상하 패딩 120px, 중앙, gap 40px. H1 2줄 `ONE ARCHITECTURE.` / `COMPLETE DATA SOVEREIGNTY`. 서브 `Intelligence that truly knows you.` / `Data under your control.` — Inter 20px lh 1.5 `--fg-muted`. 배경 장식 없음(현행 글로우 제거).

**S2. From 100% open to absolute zero. — `316:78`**: H2 중앙. 2단(gap 40px): 좌 텍스트 3문단(16px; `Newnal AIOS`·`Newnal Private Phone`은 ink 스팬, `defensive sovereignty`는 ink 볼드) / 우 스펙트럼 다이어그램 635×325 `--fg-panel-bg` 패널 — 현행 `Spectrum` 컴포넌트를 재스타일: 중앙 `Newnal` (Syne 32px) 위에 `(foundation)`, 좌우 1px `--fg-line` 선 + 끝 14px 원, **좌측 = `100` / `Newnal AIOS` / `ACTIVE SOVEREIGNTY`, 우측 = `0` / `Private Phone` / `DEFENSIVE SOVEREIGNTY`** (라벨 15px Inter 500, 소버린티 라벨 10px ls 0.08em accent). 이어서 리드 `Newnal is the single technological foundation that enables both:` + **카드 2장**(1/2씩, gap 24): 상단 3px accent 바 + `--fg-card-bg` 본체(보더 `--fg-card-border`, 패딩 40) — eyebrow + 22px 문장 `Abundance of data utilization.` / `Freedom of complete disconnection.`.

**S3. In the Age of AI Computing Era — `316:96`**: **풀블리드 `--fg-band-bg` 밴드**, 패딩 80. H2 중앙. 2단: 좌 3문단(`Every Computing Era has its own OS` / `AI will not be unlocked by adding another app.⏎An operating system transformation is required.` / `Newnal is building the AI native OS.`) / 우 **타임라인 카드**(`--fg-card-bg`, 보더 `--fg-border`, radius 12, 높이 260): 현행 `EraTimeline` 재스타일 — 원 3개 110px(보더 `--fg-border`, 연도 11px muted + 이름 13px Inter 500) + 70px 연결선, **NOW 원만 active**(bg `--fg-accent-soft`, 보더 2px accent, 텍스트 accent, `drop-shadow(0 0 2px #4d9fff)`), 하단 시대 라벨 행 14px(마지막 `AI Computing Era`만 accent).

**S4~S6 — `316:129`** (흰 배경, 제목 Syne ~40px 좌정렬):

- **S4. Why Does AI Still Feel Inconvenient? — `316:108`**: `AI is intelligent.` → **callout**(상단 3px accent 바 + `--fg-card-bg` 박스, 중앙 텍스트): `But AI relies on you to manually define all context and intent through input. You're asked to repeatedly re-enter intentions, context, data etc. every time to achieve optimal results.` → 문단 `AI has learned the world. / But it has not learned you. / So we changed the question. / Not, "How do we make AI smarter?" / But, "How do we build AI that understands me?"` (마지막 인용 accent 강조 — 스크린샷 참조).
- **S5. MY AI — AI Built From You — `316:119`**: 도입(`Where is my data?` accent 강조) → **넘버 카드 3장**(top-bar 스타일 동일, gap 20): `01 Your data is controlled by you` / `02 No one can access your data without permission` / `03 You can see exactly what data was used, when, and how` (번호 accent 12px, 본문 20~22px) → 마무리 `From this foundation, My AI is created. …` (`My AI`, `your own AI` accent).
- **S6. A World Where Services Connect Without Apps — `316:124`**: 리드 `Today, to use a service, we must:` → **5-스텝 카드 행**(5등분, `--fg-card-bg`): 번호 01~05 + 24px 인라인 SVG 아이콘 + `Download the app` / `Log in` / `Create passwords` / `Verify identity` / `Register payment` → 리드 `Newnal reverses this structure through Reverse Login` → **3열 카드**: `01 You no longer log into services, but instead services log into you.` / `02 Services request access to your data from your AI` / `03 Only when you grant permission does data connect` → `We call this ecosystem Agent Place. …` + **인용 callout**: `Data is more vulnerable the harder you try to protect it; counterintuitively, it is protected the more you open it.` (현행 코드 다이어그램 연출은 폐기 — 피그마의 카드형으로).

**S7. Intellectual Property Portfolio**: **현행 `<IpPortfolio />` 그대로** (데이터·스타일·PDF 버튼 무변경). 회색 밴드 배경 유지.

**S8. Footer** (§1-2).

---

## 3. `/devices` 페이지 (피그마 `602:4`)

기존 가로 아코디언 허브를 폐기하고 아래로 교체. `content/devices.ts`는 새 구조로 재작성.

**D1. Hero — `602:18`**: 높이 522px, 패딩 80, **배경 이미지** `public/images/figma/devices-hero-bg.png`(디바이스 패밀리샷, `next/image` fill·cover·priority). 좌정렬 스택(gap 40): H1 3줄 `AI companions` / `for the lives` / `we actually live.` → 서브 3줄 `For the artist you love.` / `For the family you care for.` / `For the world waiting outside.` (Inter 16px lh 1.6) → `All centered around you.` (Inter 20px).

**D2. 제품 인트로 + 디바이스 캐러셀 — `602:89` + `602:99`** (하나의 연동 섹션): 상하 패딩 64, gap 24.

구조: 상단 **인트로 멘트 블록**(헤딩 + 본문 + 태그라인, 중앙 정렬) + 하단 **카드 캐러셀** + dot. 피그마의 dot 라벨("슬라이드N 선택: {헤딩}")이 말해주듯 **인트로 멘트는 활성 슬라이드에 따라 바뀐다** — 슬라이드 전환 시 멘트 블록을 부드럽게 페이드 교체(reduced-motion에서는 즉시 교체), 멘트 영역에 `aria-live="polite"`.

원래 피그마의 한글 멘트(삼성 갤럭시 홍보문)는 placeholder였고, **아래가 사용자 확정 카피다 (2026-07-15, verbatim — 임의 윤문 금지)**. `content/devices.ts`에 슬라이드 배열로 정의:

| 슬라이드 | 헤딩 | 본문 | 태그라인 |
|---|---|---|---|
| 1 · YALI | K-POP Artist AI Companion, YALI | It brings the artist you love into your everyday moments through personalized greetings, recommendations, memories, and experiences. | A daily companion built around the artist you love |
| 2 · ILLI | AI Companion for the Golden Generation, ILLI | It helps older adults stay independent, supported, and intimately connected with their loved ones throughout the day. | A companion that understands the lives of the Golden Generation and their families |
| 3 · UFO | Real-World Treasure Hunt, UFO | UFO is a wearable adventure device that transforms the everyday into the extraordinary. It turns real places into treasure zones, missions, and collectible moments. | A companion device for the adventurous! For the real-world, beyond the screen! |

- 멘트 타이포(영문 카피 확정에 따라 한글용 Pretendard 슬롯을 대체): 헤딩 **Syne 500, `clamp(28px, 3.3vw, 47px)`, lh 1.2, 중앙** / 본문 Inter 400 17.5px lh 1.5 `--fg-muted`, 최대 폭 760px / 태그라인 Inter 500 15px `--fg-accent`. 피그마가 새 카피로 갱신돼 있으면 해당 노드(`602:91`·`602:93`) 스타일을 재조회해 우선 적용.
- 카드 3장 **YALI / ILLI / UFO** — 각 콘텐츠 폭의 ~88%(1123×476 @1440), radius 20px, gap 20px, 이미지 cover, 좌하단 패딩 40px에 흰 라벨(Pretendard 700 40px).
- 이미지: `public/images/figma/devices-card-{yali,illi,ufo}.png` (커밋됨; 1x 해상도 — §6-①).
- **정렬: 활성 카드 중앙 정렬** (사용자 확정 2026-07-15, 삼성닷컴 캐러셀 방식) — `scroll-snap-align: center`, 이전/다음 카드가 좌우에 **균등하게** 살짝 보인다. 첫/마지막 슬라이드도 중앙에 오도록 트랙 양끝에 `(뷰포트 폭 − 카드 폭) / 2` 인라인 패딩. 뷰포트가 카드보다 좁으면(모바일) 자연히 좌우 균등 peek.
- 동작: **CSS scroll-snap 가로 캐러셀**(`x mandatory`) + 스와이프/드래그, dot·멘트 동기화만 JS(IntersectionObserver). 자동재생 없음.
- **좌우 Navigator 버튼** (사용자 확정 2026-07-15): 카드 영역에 수직 중앙 오버레이로 prev/next 원형 버튼(≈44px, 흰 배경 + `--fg-card-border` 보더 + 화살표 아이콘 인라인 SVG, hover 시 배경 `--fg-panel-bg`). 첫 슬라이드에서 prev, 마지막에서 next는 `disabled`(반투명). 클릭 시 해당 인덱스로 스크롤(reduced-motion이면 즉시). `aria-label="Previous slide"/"Next slide"`, 키보드 포커스 가능. 모바일(767px 이하)에서는 숨기고 스와이프만.
- **dot 3개**(슬라이드당 1개 — 카피 확정으로 3개로 확정): active = 31×8px pill, 나머지 8px 원, `--fg-dot`. 각 dot `aria-label="슬라이드 N: {헤딩}"` 버튼.
- YALI 카드 클릭 → `/devices/yali` (기존 상세 유지). ILLI/UFO는 비링크.

**D3. Footer.**

---

## 4. 반응형 (피그마는 1440 단일 — 데스크톱 픽셀 충실 우선, 이하 규칙으로 적응)

- `clamp()`: H1 84 → `clamp(40px, 6vw, 84px)`, H2/devices H1 60 → `clamp(32px, 4.5vw, 60px)`, 한글 H2 47 → `clamp(28px, 4vw, 47px)`.
- 좌우 패딩 80 → 태블릿 40 → 모바일 20.
- 2단(S2·S3)과 카드 행(S2 하단·S5·S6 3열)은 900px 이하 세로 스택; 5-스텝 행은 2~3열 그리드 → 모바일 세로.
- 캐러셀 카드 모바일 88vw. 헤더는 로고 + 메뉴 가로 스크롤(햄버거 불필요).

---

## 5. 구현 순서 · 완료 기준 · 배포

> **병렬 분업 (2026-07-15)**: 이 스펙은 두 에이전트가 동시 작업하도록 분할되어 있다 —
> **TASK A**(`docs/spec/tasks/TASK-A-aios-global.md`, Codex): §1 전역 + §2 `/aios` ·
> **TASK B**(`docs/spec/tasks/TASK-B-devices.md`, Copilot): §3 `/devices` + §4(devices분).
> 파일 소유권이 서로 배타적이므로 각 태스크 문서의 허용/금지 목록을 우선한다. 아래 순서는 단일 에이전트 작업 시의 기준.

1. 폰트·토큰(§1-3~1-5) → Header/Footer 교체(§1-1~1-2) → `/aios` S1~S6 재스킨 + S7 유지 → `/devices` 교체 → 반응형.
2. 완료 기준: 기존 DoD(README) + **1440px에서 `docs/figma-refs/*.png`와 섹션별 시각 대조 일치**. `/`·`/private-phone`·`/devices/yali` 회귀 없음(헤더/푸터 교체 영향 확인).
3. 배포: main push 후 Vercel 프로덕션 반영 확인 (안 되면 `vc-work` 확인 후 `vercel deploy --prod`). 배포 후 5개 라우트 + `/docs/ip-rights-en.pdf` 200 확인.

---

## 6. 미결 사항 (블로킹 아님 — 기본값으로 진행)

1. **디바이스 이미지 해상도 1x** — 고해상 원본(iCloud `img_YALI`/`img_ILLI` 폴더 참조) 확보 시 교체.
2. **푸터 미니멀화** — 피그마형(기본값) vs 현행 리치형. 리치형 유지 결정 시 §1-2 무시.
3. **Private Phone 다크 헤더 변형** — 새 pill 헤더의 다크 대응 여부. 기본값: 라이트 헤더 그대로 사용.
4. **홈(`/`)·YALI의 구 디자인과의 시각 불일치** — 이번 스코프에선 감수. 추후 피그마 확정안 나오면 06 문서 방식으로 확장.

> ~~D2 삼성 placeholder 카피~~ — 2026-07-15 사용자 확정 카피로 해소(§3 D2 표). ~~dot 2 vs 3~~ — 3으로 확정.
