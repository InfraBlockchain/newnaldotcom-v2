# 00 — Foundation: IA · 기술 스택 · 디자인 시스템

모든 페이지가 공유하는 기반 스펙. 페이지별 문서(01-yali 등)는 이 문서의 토큰을 참조한다.

---

## 1. 사이트 IA / 라우팅

기획 원고의 메뉴 구조를 따른다.

```
/                      홈 (보류 — 현재는 /devices/yali로 리다이렉트해도 무방)
/aios                  Newnal aios 소개 (보류)
/private-phone         Private Phone (보류 — 세부 기획안에 Free App 섹션 2종·$0 요금 항목 추가됨)
/devices               Devices 허브 (보류)
/devices/yali          ★ 지금 구현
/devices/illi          보류
/devices/ufo           보류
/patents               특허 페이지 (보류 — 세부 기획안: 5분할 타일. 상단 Core Patents 30% + Whitepapers 30%, 하단 Periphery Patents 20% + Trademarks 10% + Design 10%)
```

`/devices` 허브 대문 카피 (세부 기획안 확정, 구현 시 verbatim 사용):
- H1: `AI companions for the lives we actually live.`
- Lead: `Powered by Newnal AIOS, our devices are built for the relationships, routines, and moments that make life personal.`
- Sub: `For the artist you love. / For the family you care for. / For the world waiting outside. / All centered around you.`

- GNB 메뉴 라벨: `Newnal aios` · `Private Phone` · `Devices` (+ CTA)
- 보류 페이지 링크는 `href="#"` 대신 **라우트는 실제 경로로 걸되 페이지는 미구현 상태로 두지 말고**, GNB에서 해당 항목을 비활성(회색, `aria-disabled`) 처리한다. 죽은 링크를 배포하지 않는 것이 원칙.

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

## 3. 컬러 토큰 — "보라톤" 시스템

Figma 초안의 무채색+보라 혼용을 정리해, **모든 중립색에 보라 기운이 도는** 단일 램프로 통일한다.
(아래 hex는 초안에서 추출한 값이 아니라 이번에 새로 확정한 값이다. 이 값이 최종.)

```css
:root {
  /* 라이트 표면 */
  --bg:        #F7F5FB;  /* 페이지 기본 배경 — 라벤더가 스민 아이보리 */
  --surface:   #FFFFFF;  /* 카드/패널 */
  --line:      #E5DFF0;  /* 헤어라인, 디바이더 */

  /* 잉크 */
  --ink:       #16101F;  /* 헤드라인·본문 강조 — 보라 캐스트 니어블랙 */
  --ink-soft:  #554D63;  /* 보조 본문 */
  --ink-faint: #8B8399;  /* 캡션, 비활성 */

  /* 스테이지(다크 섹션) */
  --stage:     #160E24;  /* 다크 섹션 배경 */
  --stage-2:   #221338;  /* 다크 섹션 내 패널/그라디언트 상단 */
  --on-stage:  #F3EFFB;  /* 다크 위 본문 */
  --on-stage-soft: #A99BC4;

  /* 액센트 */
  --violet:    #6C4BD8;  /* 프라이머리 — CTA, 링크, 액티브 */
  --violet-deep: #4B2FA6; /* hover/pressed */
  --lavender:  #C9B6FF;  /* 다크 위 글로우·하이라이트 전용. 라이트 배경 위 텍스트 금지(대비 부족) */
}
```

대비 규칙: 라이트 배경 위 텍스트는 `--ink`/`--ink-soft`만. `--violet`은 라이트 위에서 버튼 배경·대형 텍스트·아이콘까지만(소형 본문 금지). `--lavender`는 `--stage` 위 전용.

## 4. 타이포그래피

| 역할 | 폰트 | 용도 |
|---|---|---|
| Display | **Fraunces** (variable, `opsz` 활용) | 대형 헤드라인 전용. 팬레터의 온기 — 이 페이지 성격의 절반 |
| Body/UI | **Instrument Sans** | 본문, 내비, 버튼 |
| Utility | **IBM Plex Mono** | 아이브로우, 스펙 테이블 라벨, 캡션 넘버링 |

한글이 섞일 경우 fallback: `"Pretendard Variable", Pretendard, -apple-system, sans-serif` (현재 카피는 전부 영문).

### 스케일 (데스크톱 → 모바일, clamp로 유동)

```css
--type-display-xl: clamp(2.75rem, 1rem + 5.2vw, 5.25rem);   /* 히어로 h1. Fraunces, lh 1.04, ls -0.02em */
--type-display-l:  clamp(2.25rem, 1rem + 3.4vw, 3.75rem);   /* 섹션 h2. Fraunces, lh 1.08 */
--type-display-m:  clamp(1.75rem, 1rem + 1.8vw, 2.5rem);    /* 서브 헤드. Fraunces */
--type-h3:         1.375rem;   /* Instrument Sans 600 */
--type-body-l:     1.25rem;    /* 리드 문단. lh 1.55 */
--type-body:       1.0625rem;  /* 기본. lh 1.65 */
--type-caption:    0.8125rem;  /* lh 1.5 */
--type-eyebrow:    0.75rem;    /* Plex Mono 500, uppercase, ls 0.18em */
```

Fraunces는 `wght` 480–560, `opsz` 대형에서 high-contrast로. **디스플레이 서체를 카드 제목 등 중간 크기에 남용하지 말 것** — h3 이하는 전부 Instrument Sans.

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
- Primary: `--violet` 배경 / 백색 텍스트 / pill / hover `--violet-deep` + translateY(-1px)
- Secondary: 투명 배경 + 1.5px `currentColor` 보더 / pill
- 다크 위 Primary: `--lavender` 배경 + `--ink` 텍스트

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

- 포커스: `outline: 2px solid var(--violet); outline-offset: 3px` (다크 위에선 `--lavender`)
- 본문 대비 WCAG AA 이상 (토큰 조합 규칙을 따르면 자동 충족)
- 이미지 전부 의미 있는 `alt`, 장식 이미지는 `alt=""`
- 헤딩 계층 준수, 랜드마크(`header/main/footer/nav`) 사용
- 스크롤 하이재킹·horizontal scroll 구간 금지
