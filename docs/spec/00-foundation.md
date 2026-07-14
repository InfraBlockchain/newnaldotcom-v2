# 00 — Foundation: IA · 기술 스택 · 디자인 시스템

모든 페이지가 공유하는 기반 스펙. 페이지별 문서(01-yali 등)는 이 문서의 토큰을 참조한다.

---

## 1. 사이트 IA / 라우팅

기획 원고의 메뉴 구조를 따른다.

```
/                      홈 ★ — 02-home.md
/aios                  Newnal aios ★ — 03-aios.md
/private-phone         Private Phone ★ — 04-private-phone.md
/devices               Companion Devices 허브 ★ — 05-devices-hub.md
/devices/yali          YALI ★ — 01-yali.md
/devices/illi          보류 (허브에서 소개만, 상세 링크 비활성)
/devices/ufo           보류 (허브에서 소개만, 상세 링크 비활성)
```

- GNB 메뉴 라벨(Figma 확정): `Newnal aios` · `Companion Devices` · `Private Phone` (+ 로고 `Newnal`)
- 보류 페이지(ILLI/UFO 상세)는 죽은 링크를 배포하지 않는다 — 허브 안에서 소개하되 상세 진입만 비활성(`aria-disabled`) 처리.
- 특허/IP는 별도 페이지가 아니라 aios 페이지의 "Intellectual Property Portfolio" 섹션으로 흡수 (Figma 초안 기준).

## 2. 기술 스택

- **Next.js (App Router) + TypeScript**, 배포는 Vercel
- 스타일: **CSS Modules + CSS Custom Properties**(토큰). Tailwind·UI 라이브러리 사용하지 않음
- 폰트: `next/font/google` — 아래 3종
- 이미지: `next/image`. 원격 이미지 없음, 전부 `public/images/`
- 애니메이션: CSS transition/animation + `IntersectionObserver` 기반 스크롤 리빌 1개 훅으로 통일. 외부 모션 라이브러리 금지

### 디렉터리 구조

```
app/
  layout.tsx            # 폰트 로드, 전역 토큰, GNB/Footer
  globals.css           # 리셋 + 토큰 정의(:root, [data-theme])
  devices/yali/page.tsx
components/
  site/    (header, footer)
  yali/    (페이지 전용 섹션 컴포넌트, 섹션당 1파일)
  shared/  (Reveal, AuraRing, SpecTable 등 재사용 요소)
content/
  yali.ts  # 페이지 카피를 전부 데이터로 분리 (JSX 안에 하드코딩 금지)
```

## 3. 컬러 토큰 — 모노톤 전역 + 제품별 테마 스코프 (2026-07-15 개정)

**원칙: 보라는 YALI 전용이다.** 전역(홈·aios·devices 허브·GNB/푸터)은 **무채 모노톤**, Private Phone은 다크&블루(`--pp-*`), YALI만 보라 테마. 제품 컬러는 해당 페이지의 `[data-theme]` 스코프 안에서만 존재한다.

```css
:root {
  /* 전역 — 모노톤 (aios·홈·허브·GNB/푸터) */
  --bg:        #F7F7F8;  /* 라이트 배경, 중립 */
  --surface:   #FFFFFF;
  --line:      #E4E4E7;
  --ink:       #131316;  /* 텍스트·프라이머리 버튼·포커스까지 전부 잉크로 */
  --ink-soft:  #55555C;
  --ink-faint: #8E8E96;
  --stage:     #131316;  /* 전역 다크 표면(푸터, 홈 PP카드) — 중립 니어블랙 */
  --stage-2:   #1E1E23;
  --on-stage:  #F2F2F4;
  --on-stage-soft: #A5A5AE;
}

[data-theme="yali"] {   /* YALI 페이지 전용 — 보라 */
  --bg:        #F7F5FB;  /* 라벤더 스민 아이보리 */
  --line:      #E5DFF0;
  --ink:       #16101F;
  --ink-soft:  #554D63;
  --ink-faint: #8B8399;
  --stage:     #160E24;  /* 보라 다크 섹션 */
  --stage-2:   #221338;
  --on-stage:  #F3EFFB;
  --on-stage-soft: #A99BC4;
  --violet:    #6C4BD8;  /* CTA·링크·액티브 — YALI 스코프 밖 사용 금지 */
  --violet-deep: #4B2FA6;
  --lavender:  #C9B6FF;  /* 다크 위 글로우 전용 */
}
/* Private Phone은 기존 [data-theme="private"] --pp-* 유지 (04 스펙 참조) */
```

대비·사용 규칙:
- 전역 프라이머리 버튼 = `--ink` 배경/백색 텍스트. 포커스 아웃라인도 `--ink`(다크 위 백색). 전역에서 유채색 액센트 금지
- `--violet`/`--lavender`는 `[data-theme="yali"]` 내부에서만. 규칙은 기존과 동일(라이트 위 소형 본문 금지, lavender는 stage 위 전용)
- devices 허브의 디바이스 식별색(YALI 보라 점·ILLI 앰버 점·UFO 그린 점)은 "제품의 이름표"로서 소면적 점·보더에만 허용 — 페이지 UI 자체는 모노톤

## 4. 타이포그래피

| 역할 | 폰트 | 용도 |
|---|---|---|
| Display | **Instrument Serif** (400 단일 웨이트 + italic) | 대형 헤드라인 전용. Instrument Sans와 같은 페어로 설계된 세리프 — "한 가족의 두 목소리"가 이 사이트 타이포의 콘셉트 |
| Body/UI | **Instrument Sans** | 본문, 내비, 버튼 |
| Utility | **IBM Plex Mono** | 아이브로우, 스펙 테이블 라벨, 캡션 넘버링 |

> 선정 근거: 흔한 AI 디자인 조합(크림 배경+Fraunces류 세리프)을 의도적으로 회피. Instrument Serif/Sans 페어는 명명 가능한 단일 결정이며, 단일 웨이트라 디스플레이 전용 규율이 강제된다.

**이탤릭 강조 규칙(타입 시그니처)**: 각 페이지 히어로 H1에서 감정·주장 핵심 구절 **하나만** Instrument Serif *italic*으로 꺾는다 — YALI: "…live *in your life*, not just your feed." / aios: "…COMPLETE *DATA SOVEREIGNTY*" / Private Phone: "…even when *trust breaks*." / Devices 허브: "…the lives we *actually live*." H1당 1회, 본문에는 사용 금지.

한글이 섞일 경우 fallback: `"Pretendard Variable", Pretendard, -apple-system, sans-serif` (현재 카피는 전부 영문).

### 스케일 (데스크톱 → 모바일, clamp로 유동)

```css
--type-display-xl: clamp(2.75rem, 1rem + 5.2vw, 5.25rem);   /* 히어로 h1. Instrument Serif, lh 1.04, ls -0.01em */
--type-display-l:  clamp(2.25rem, 1rem + 3.4vw, 3.75rem);   /* 섹션 h2. Instrument Serif, lh 1.08 */
--type-display-m:  clamp(1.75rem, 1rem + 1.8vw, 2.5rem);    /* 서브 헤드. Instrument Serif */
--type-h3:         1.375rem;   /* Instrument Sans 600 */
--type-body-l:     1.25rem;    /* 리드 문단. lh 1.55 */
--type-body:       1.0625rem;  /* 기본. lh 1.65 */
--type-caption:    0.8125rem;  /* lh 1.5 */
--type-eyebrow:    0.75rem;    /* Plex Mono 500, uppercase, ls 0.18em */
```

Instrument Serif는 400 단일 웨이트 — 크기와 이탤릭으로만 위계를 만든다. **디스플레이 서체를 카드 제목 등 중간 크기에 남용하지 말 것** — h3 이하는 전부 Instrument Sans.

## 5. 레이아웃 / 스페이싱

- 디자인 기준 폭 1440, 콘텐츠 컨테이너 `max-width: 1280px`
- 사이드 패딩: 데스크톱 48px / 태블릿 32px / 모바일 20px
- 브레이크포인트: `≥1200` desktop · `768–1199` tablet · `<768` mobile
- 스페이싱 스케일: 4px 베이스. 섹션 수직 패딩 `clamp(96px, 12vw, 160px)`
- 라운드: 카드 `24px`, 이미지 패널 `28px`, 버튼 pill `999px`
- 그림자 대신 **헤어라인(`--line`) + 배경 대비**로 층위 표현. box-shadow는 다크 섹션의 글로우(`--lavender` 저투명)에만 사용

## 6. 공용 컴포넌트

### GNB (전역, 라이트)
- 높이 72px, `--bg` 위에 `backdrop-filter` 없이 불투명. 하단 1px `--line`
- 좌: Newnal 로고(워드마크) / 중: 메뉴 3개 / 우: CTA(Contact 또는 Pre-order, pill, `--violet`)
- 스크롤 시 상단 고정(sticky). 모바일: 햄버거 → 풀스크린 오버레이(`--stage` 배경)

### Footer (전역, 다크)
- `--stage` 배경. 로고 + 제품 링크 컬럼 + copyright + 법적 링크. 장식 최소

### 버튼
- Primary(전역): `--ink` 배경 / 백색 텍스트 / pill / hover 톤 10% 밝게 + translateY(-1px)
- Secondary: 투명 배경 + 1.5px `currentColor` 보더 / pill
- YALI 스코프 내 Primary: `--violet` 배경(hover `--violet-deep`), 다크 위엔 `--lavender` 배경 + `--ink` 텍스트
- PP 스코프 내 Primary: `--pp-accent` 배경 + `--pp-bg` 텍스트

### Reveal (스크롤 리빌)
- 공용 훅/컴포넌트 1개: `opacity 0→1` + `translateY(24px→0)`, 600ms, `cubic-bezier(.22,1,.36,1)`, 1회만
- 같은 뷰포트 안의 형제 요소는 80ms 스태거
- `prefers-reduced-motion: reduce`면 즉시 표시(전 사이트 공통)

## 7. 모션 토큰

```css
--ease-soft: cubic-bezier(.22, 1, .36, 1);
--dur-micro: 200ms;   /* hover, focus */
--dur-reveal: 600ms;  /* 스크롤 리빌 */
--dur-ambient: 7s;    /* 아우라 링 breathing 등 상시 루프 */
```

원칙: **상시 루프 모션은 페이지당 1–2곳**(시그니처 요소)에만. 나머지는 전부 1회성 리빌과 마이크로 인터랙션.

## 8. 접근성 / 품질 플로어

- 포커스: `outline: 2px solid var(--ink); outline-offset: 3px` (다크 위에선 백색, YALI 스코프에선 `--violet`/`--lavender`)
- 본문 대비 WCAG AA 이상 (토큰 조합 규칙을 따르면 자동 충족)
- 이미지 전부 의미 있는 `alt`, 장식 이미지는 `alt=""`
- 헤딩 계층 준수, 랜드마크(`header/main/footer/nav`) 사용
- 스크롤 하이재킹·horizontal scroll 구간 금지
