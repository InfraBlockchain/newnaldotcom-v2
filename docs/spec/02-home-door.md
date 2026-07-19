# 02-door — 홈 페이지 구현 스펙 v2 (`/`, branch: `door`)

> **이 문서의 지위**: `door` 브랜치 전용. `02-home.md`(2026-07-15 확정)를 대체할 새 홈 2개 시안의 **구현 스펙**. 두 시안 모두 구현해 비교 후 채택한다.
> **디자인 소스 (SSOT)**: Figma `Newnal.com` (fileKey `g7xkiCYymXjZTuNxgg9LzW`)
> - **Opt 1** — 텍스트 리스트형: node `647:4` ("Home - 1")
> - **Opt 2** — 이미지 배너형: node `664:4` ("Home - 2")
> 카피·수치는 위 Figma에서 verbatim 추출(2026-07-20). 이 문서와 Figma가 다르면 **Figma가 이긴다** — 개발 에이전트는 Figma MCP로 위 노드를 직접 재확인할 수 있다.
>
> **변경 이력**: v1(2026-07-20 오전)의 "Three Doors" 자체 탐색안은 디자이너 시안 확정으로 폐기. v2는 확정 시안의 구현 스펙이다.

---

## 0. 두 옵션 요약

| | Opt 1 ("Home - 1") | Opt 2 ("Home - 2") |
|---|---|---|
| 구조 | 히어로 + **가로형 텍스트 카드 3단** (흰 카드, 우측 셰브런) | 히어로 + **풀블리드 이미지 배너 3단** (Learn More 버튼) |
| 카드/배너 순서 | aios → Companion Devices → Private Phone (두 옵션 동일) | 동일 |
| 텍스트 위계 | **스테이트먼트가 주인공** (40px), 제품명이 라벨(28px) | **제품명이 주인공** (36px), 스테이트먼트가 서브(20px) |
| 이미지 | 없음 (완전 텍스트) | 배너당 1장 (에셋 확보 완료, §5) |
| 전체 톤 | 모노톤 (#eaeaea 위 흰 카드) | 히어로 모노톤 + 배너는 이미지가 색 담당 |

---

## 1. 공통 — 헤더 · 히어로 · 푸터 (두 옵션 동일)

### 뷰포트 기준
Figma 프레임 1440px. 좌우 패딩 **80px** (기존 `--side: 48px`와 다름 — 홈 한정 80px 적용, 또는 컨테이너 재정의 [확정 필요]).

### 헤더 (GNB)
- 높이 64px, 좌 "Newnal" 로고(Syne Medium 17px, tracking -0.51px), 중앙 정렬 링크 3개: `Newnal aios` `Companion Devices` `Private Phone`
- 링크: 14px, `rgba(10,10,10,0.5)`, tracking -0.56px, 패딩 12×6
- 전역 헤더가 이미 존재 — 기존 GNB와 시각 차이가 있으면 홈 한정이 아니라 **전역 수정 여부 [확정 필요]** (이번 작업 범위는 홈만이므로, 기본값: 기존 GNB 유지하고 차이는 기록만)

### 히어로
- 배경 `#eaeaea`, 패딩 `80px / 120px(상하)`, 내부 gap 40px, **좌측 정렬**
- H1: **Syne Medium 84px**, tracking -2.52px, line-height 0.95, 색 `#000`
  ```
  One aios
  Across four devices.
  ```
  ⚠️ 기존 카피와 다름: 마침표 없는 `One aios` + 강제 줄바꿈. 기존 `<EmphasizedText>` 이탤릭 강조 **사용 안 함**
- 서브: Google Sans Flex Regular **44px**, tracking -1.76px, line-height 1.2, 색 `#000` (기존의 `--ink-soft` 아님)
  ```
  Intelligence that truly knows you.
  Data under your control.
  ```
- 모션: Figma에 정의 없음. [제안] 로드 시 `<Reveal>` 1회, 상시 모션 없음 (기존 홈 원칙 유지)

### 푸터
- 좌 "Newnal"(Syne Medium 17px) / 우 `© 2026 Newnal. All rights reserved.` (12px, tracking -0.48px), 패딩 80×30
- 전역 푸터와의 관계는 헤더와 동일한 원칙 [확정 필요]

### ⚠️ 폰트 (2026-07-20 잠정 확정)
시안 폰트: **Syne Medium**(H1·로고) + **Google Sans Flex** Regular/Light(본문·카드) + Inter Medium(버튼).
- Syne, Inter: 리포에 이미 로드됨 (`app/devices/fonts.ts` 참조) — 문제 없음
- **Google Sans Flex는 Google 사유 폰트로 공개 배포·자가호스팅 라이선스가 확인되지 않음.** → **잠정 확정: Pretendard로 대체** (디자이너 결정 2026-07-20)
  - 리포 폰트 스택에 이미 `Pretendard Variable` 폴백이 있으므로 로딩 경로부터 확인하고, 없으면 Pretendard Variable 웹폰트를 정식 로드(자가호스팅 권장, SIL OFL)
  - Google Sans Flex Regular → Pretendard Regular(400), GSF Light("aios" 워드마크) → Pretendard Light(300)
  - tracking(-0.04em 계열)·크기 값은 시안 수치 그대로 유지
- 홈 스코프 토큰 `--font-home-body` 한 곳으로 격리해, 최종 폰트가 바뀌어도 한 줄 수정으로 끝나게 할 것

---

## 2. Opt 1 — 텍스트 리스트형 (node `647:4`)

### 구조
히어로 블록(#eaeaea) **안에** 카드 리스트 포함 (히어로 텍스트 gap 40px 아래, 카드 간 gap 20px). 즉 페이지 전체가 `#eaeaea` 하나의 면이고 흰 카드 3장이 그 위에 놓인다.

### 카드 공통
- 흰색 `#ffffff`, **높이 300px**, 패딩 40px, 라운드 없음(직각), 그림자 없음
- flex row, 좌측 텍스트 칼럼(너비 813px) / 우측 셰브런, 수직 중앙 정렬
- 텍스트 칼럼 내부: 스테이트먼트 ↔ 제품명 라벨 사이 **gap 45px**
- 셰브런: `>` 방향 꺾쇠, 42×42px 영역 (에셋 `public/images/home/door/chevron.svg` — 인라인 SVG로 재작성 권장, stroke `#000`)
- 카드 전체가 `<a>` 블록 (기존 홈 원칙)

### 카드별 카피 (Figma verbatim)

| # | 스테이트먼트 (Google Sans Flex Regular) | 제품명 라벨 | href |
|---|---|---|---|
| 1 | `ONE ARCHITECTURE.`⏎`COMPLETE DATA SOVEREIGNTY` — 40px, tracking -1.6px, lh 1.2 | `Newnal aios` | `/aios` |
| 2 | `One AIOS. Distinct companions for different lives.` — 40px, tracking -1.6px | `Companion Devices`⏎`Powered by Newnal aios` | `/devices` |
| 3 | `Privacy that holds— even when trust breaks.` — **36px, tracking -1.44px** (이 카드만 작음) | `Newnal Private Phone` | `/private-phone` |

- Figma 원본의 `COMPLETE DATA SOVEREIGNTY ` 뒤 공백 1개는 트림한다
- **"aios" 워드마크 처리**: 제품명 라벨 안의 `aios`만 별도 스타일 — 앞말은 Regular 28px(tracking -1.12px), `aios`는 **Light 36px** (예: "Newnal " 28px + "aios" 36px Light가 한 베이스라인에). 카드 1·2에 적용, 카드 3(Private Phone)은 28px 단일 스타일
- 카드 3의 대시는 em dash `—` (holds— 붙여쓰기) verbatim 유지

### 인터랙션 [제안 — Figma에 정의 없음]
- hover/focus-visible: 셰브런 `translateX(8px)` (`--dur-micro`) — 기존 홈 관례. 배경 변화 등 추가 효과 없음 (조용하게)
- 키보드 포커스: 카드 아웃라인 offset -4px (기존 관례)

---

## 3. Opt 2 — 이미지 배너형 (node `664:4`)

### 구조
히어로 블록(#eaeaea, 카드 없음) 종료 후, **풀폭 배너 3개 연속** (배너 간 여백 0 — 면이 이어짐).

### 배너 공통
- **높이 600px**, 패딩 80px(좌우) × 120px(상하), flex column `justify-between`
- 상단 좌측: 제품명(36px, tracking -1.44px, lh 1.24) + 스테이트먼트(20px, tracking -0.8px, lh 1.6), gap 16px, 색 `#000`
- 하단 좌측: **Learn More** 필 버튼 — bg `#0a0a0a`, 패딩 16×8, radius 9999, Inter Medium 14px 흰색
- 배경 이미지는 `pointer-events:none` 장식 레이어. 클릭 대상은 [확정 필요]: Learn More 버튼만 링크 vs 배너 전체 링크 (권장: 배너 전체 `<a>` + 버튼은 시각 요소 — 관문 성격상 클릭 면적 최대화)

### 배너별 스펙 (Figma verbatim)

| # | 제품명 | 스테이트먼트 | 배경 | href |
|---|---|---|---|---|
| 1 | `Newnal aios` | `ONE ARCHITECTURE.`⏎`COMPLETE DATA SOVEREIGNTY` | bg `#fbfafa` + 우측 리본 이미지(opacity 0.7, 우상단 크롭: left 50.54%, top -32.56%, w 55.68%, h 133.64%) | `/aios` |
| 2 | `Companion Devices`⏎`Powered by Newnal aios` | `One AIOS. Distinct companions for different lives.` | 풀블리드 사진 (left -15.68%, w 118.4%, h 100%) | `/devices` |
| 3 | `Newnal`⏎`Private Phone` | `Privacy that holds— even when trust breaks.` | 풀블리드 사진 (w 99.92%, h 100%) | `/private-phone` |

- 텍스트는 세 배너 모두 검정 — 이미지 좌측 영역이 밝아서 성립. 반응형에서 이미지 크롭이 바뀌면 대비 깨질 수 있음 → 텍스트 뒤 은은한 라이트 스크림(white 0~40% 그라디언트) 허용 [제안]

### 인터랙션 [제안 — Figma에 정의 없음]
- 배너 hover: Learn More 버튼 bg `#0a0a0a → #2a2a2e` (`--dur-micro`). 이미지 줌 등 모션 없음
- 키보드 포커스: 배너 아웃라인 (Opt 1과 동일 규칙)

---

## 4. 카피 변경 — `content/home.ts` 개정표

기존 `content/home.ts`는 이번 시안과 카피가 다르다. **시안 verbatim으로 개정한다** (이번 Figma가 새 SSOT):

| 항목 | 기존 (main) | 신규 (Figma verbatim) |
|---|---|---|
| hero.title | `One aios. Across four devices.` (+ emphasis 이탤릭) | `One aios`⏎`Across four devices.` (강조 없음, 줄바꿈 고정) |
| 카드 순서 | aios → devices → private | aios → devices → private (동일 — v1의 스펙트럼 순서 변경안 폐기) |
| aios 카드 | 설명 `For the AI Computing Era` | 스테이트먼트 `ONE ARCHITECTURE.⏎COMPLETE DATA SOVEREIGNTY`로 교체 |
| devices 카드 | 제목 `AI Companion Devices Powered by Newnal` | `Companion Devices⏎Powered by Newnal aios`로 교체 |
| private 카드 | 설명 `No public identity.⏎No universal phone number.` | 스테이트먼트 `Privacy that holds— even when trust breaks.`로 교체 |

두 옵션이 같은 카피를 위계만 바꿔 쓰므로 `content/home.ts` 하나로 두 옵션을 모두 서빙한다 (statement/label 필드 분리).

## 5. 에셋 (확보 완료 — 2026-07-20)

`public/images/home/door/`에 다운로드 완료 (Figma MCP 에셋 URL은 7일 만료라 선확보):

| 파일 | 용도 | 원본 해상도 | 비고 |
|---|---|---|---|
| `aios-ribbon.png` | Opt 2 배너 1 | 1024×1024 | 배치 크롭으로 커버 |
| `devices-photo.png` | Opt 2 배너 2 | **1364×480** | ⚠️ 1440px 풀블리드 대비 저해상 — 디자이너에게 2x 에셋 요청 권장, 확보 전까지 사용 |
| `private-phone-photo.png` | Opt 2 배너 3 | 2072×864 | 충분 |
| `chevron.svg` | Opt 1 카드 화살표 | 벡터 | 인라인 SVG 재작성 권장 |

이미지는 Next `<Image>` + `fill` + `object-position`으로 Figma 크롭 좌표 재현.

## 6. 반응형 [제안 — Figma는 1440 데스크톱만 존재]

모바일 시안이 없으므로 아래는 기존 홈 관례에서 유도한 제안. 디자이너 확인 후 확정:

- **≤1200px**: 좌우 패딩 80 → 48px, 히어로 H1 `clamp(44px, 6vw, 84px)`, 서브 `clamp(24px, 3vw, 44px)`
- **≤900px (Opt 1)**: 카드 높이 auto(min 200px), 스테이트먼트 `clamp(24px, 4.5vw, 40px)`, 셰브런은 우하단으로
- **≤900px (Opt 2)**: 배너 높이 `clamp(420px, 60vh, 600px)`, 텍스트 뒤 라이트 스크림 필수(이미지 크롭 변동으로 대비 보장 안 됨)
- **390px**: H1 3줄 이내, Opt 1 카드 3의 `holds—` 줄바꿈 확인
- `prefers-reduced-motion`: 모든 전환 제거

## 7. 구현 계획 (핸드오프)

**브랜치**: `door` (main과 동일 상태에서 시작 — 확인됨 2026-07-20)

**두 옵션 동시 구현·비교 방법 [제안]**
- `/` = Opt 1, `/home-2` = Opt 2 (임시 비교 라우트, 채택 결정 후 제거)
- 공용 부품(히어로·카피·푸터)은 공유하고 옵션별 섹션만 분리

**변경 파일**

| 파일 | 작업 |
|---|---|
| `content/home.ts` | §4 개정표대로 재작성 (statement/label 필드 구조) |
| `app/page.tsx` + `app/page.module.css` | Opt 1 구현 |
| `app/home-2/page.tsx` + `page.module.css` | Opt 2 구현 (임시 라우트) |
| `components/home/HomeHero.tsx` | 공용 히어로 (두 옵션 공유) |
| `app/layout.tsx` 또는 홈 전용 fonts | Syne는 기존 로드 재사용, 본문은 **Pretendard** (§1 — `--font-home-body`로 격리) |
| `public/images/home/door/*` | 확보 완료 — 추가 작업 없음 |

**구현 원칙**
- Figma 수치를 우선하되, 색·폰트는 신규 토큰 남발 금지 — 홈 스코프 CSS 변수(`--home-*`)로 격리해 채택 결정 후 전역 토큰화
- 상시 루프 모션 0개 (기존 원칙)
- 개발 에이전트가 Figma MCP 사용 가능하면 구현 후 node `647:4`/`664:4` 스크린샷과 픽셀 대조할 것

## 8. 수용 기준

- [ ] 카피가 Figma verbatim (§2·§3·§4 표와 1:1, 트레일링 공백 트림 외 변형 없음)
- [ ] Opt 1: #eaeaea 면 위 흰 카드 3장, 높이 300px, 셰브런 우측 중앙, "aios" 워드마크 스타일(Light·36px) 재현
- [ ] Opt 2: 배너 3개 600px, Learn More 필 버튼, 이미지 크롭 위치 Figma와 일치
- [ ] `/` = Opt 1, `/home-2` = Opt 2로 나란히 비교 가능
- [ ] 카드/배너 전체 클릭 영역 + 키보드 포커스 아웃라인
- [ ] 상시 루프 모션 0개, reduced-motion 대응
- [ ] 390px에서 레이아웃 성립 (§6)
- [ ] `npm run build`, `npm run lint` 통과

## 9. 확정 필요 항목 (구현 착수 전 디자이너 답변 필요)

1. ~~본문 폰트~~ → **확정: Pretendard 잠정 적용** (§1, 2026-07-20)
2. 홈 좌우 패딩 80px를 전역 `--side`(48px)와 별도로 갈지
3. GNB·푸터를 시안대로 전역 수정할지, 기존 유지할지 (기본값: 기존 유지)
4. Opt 2 배너 클릭 범위: 버튼만 vs 배너 전체 (권장: 전체)
5. Opt 2 devices 사진 2x 에셋
6. 모바일 시안 부재 — §6 제안대로 진행 여부
