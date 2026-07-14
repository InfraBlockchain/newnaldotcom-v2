# WORKPLAN — 2026-07-15 후속 작업 상세 계획

구현 에이전트(Sonnet)용 실행 계획. 위에서부터 순서대로 진행하고, 단계마다 커밋한다.
스펙 기준은 `docs/spec/`(README → 00 → 페이지별). 이 문서는 "무엇을 어떻게 바꿀지"의 구체 지시다.

---

## 0. 전제 상태

- 사이트 5페이지 구현 완료·main push됨(`61b6002`), 워킹트리 깨끗함
- 스펙 타이포가 커밋 `bb2656a`에서 갱신됨 — **코드는 아직 구버전(Fraunces)** ← 1단계에서 해소
- Vercel preview만 배포됨. production 미배포
- 에셋 원본 위치(iCloud, 로컬 마운트됨):
  - `/Users/mini/Library/Mobile Documents/com~apple~CloudDocs/Newnal/09_Web_Projects/NewnalDotCom_v2/img_YALI/`
  - `.../NewnalDotCom_v2/img_ILLI/`
  - `.../NewnalDotCom_v2/PrivatePhone-Brochure_0714v4.pdf`
  - `.../NewnalDotCom_v2/img_YALI/[EN]Newnal-Intellectual-Property-Rights-June-2026.pdf` (KR판 동일 폴더)

---

## 1단계 — 타이포 크리틱 반영 (Fraunces → Instrument Serif + H1 이탤릭)

근거: `docs/spec/00-foundation.md` §4 (커밋 `bb2656a`).

### 1-1. `app/layout.tsx`
- import를 `{ IBM_Plex_Mono, Instrument_Sans, Instrument_Serif }`로 교체
- `fraunces` 상수 → `instrumentSerif`로 교체:
  ```ts
  const instrumentSerif = Instrument_Serif({
    variable: "--font-display",
    subsets: ["latin"],
    weight: "400",
    style: ["normal", "italic"],
    display: "swap",
  });
  ```
- `<html className>`의 `fraunces.variable` → `instrumentSerif.variable`

### 1-2. `app/globals.css`
- 48행 `h1, h2 { font-family: var(--font-display)...; font-weight: 520; }` → `font-weight: 400;`
- display 계열 letter-spacing이 -0.02em이면 -0.01em로 완화 (Instrument Serif는 자체 폭이 좁음)
- 파일 내 다른 `font-weight: 5xx`가 display에 걸려 있으면 전부 400으로 (body/mono 웨이트는 유지)

### 1-3. H1 이탤릭 강조 (페이지당 정확히 1곳, `<em>` 사용 — globals에 `h1 em { font-style: italic; }` 확인)
| 파일 | H1 | 이탤릭 구절 |
|---|---|---|
| `app/page.tsx` (홈) | Intelligence that truly knows you. Data under your control. | `truly knows you` |
| `app/aios/page.tsx` | ONE ARCHITECTURE. COMPLETE DATA SOVEREIGNTY | `DATA SOVEREIGNTY` |
| `app/private-phone/page.tsx` | Privacy that holds—even when trust breaks. | `trust breaks` |
| `app/devices/page.tsx` | AI companions for the lives we actually live. | `actually live` |
| `app/devices/yali/page.tsx` | Your artist should live in your life, not just your feed. | `in your life` |
- H1 텍스트가 `content/*.ts`에 있으면 문자열을 분할 필드로 바꾸지 말고, 해당 구절을 마커로 감싸 렌더에서 `<em>` 처리하는 최소 방식 선택(예: content에 `emphasis: "in your life"` 필드 추가 후 컴포넌트에서 split)
- 완료 기준: 5개 H1 모두 세리프 400 + 구절 1개 이탤릭, 그 외 이탤릭 없음

---

## 1.5단계 — 컬러 스코프 재조정 (보라 격리 · 2026-07-15 추가)

근거: `docs/spec/00-foundation.md` §3 개정. **보라는 YALI에만, Private Phone은 다크&블루 유지, 나머지(홈·aios·허브·GNB/푸터)는 모노톤.**

- `app/globals.css`: `:root` 토큰을 개정된 §3 값(중립 모노톤)으로 교체하고, 보라 계열(`--violet`, `--violet-deep`, `--lavender`)과 라벤더 캐스트 값(`--bg #F7F5FB`, `--stage #160E24` 등)은 `[data-theme="yali"]` 블록으로 이동
- `app/devices/yali/page.tsx`: 페이지 루트 요소에 `data-theme="yali"` 부여 (YALI sub-nav 포함)
- 홈·aios·devices 허브·헤더/푸터에서 보라 사용처 전부 제거: 프라이머리 버튼·포커스 링·hover 액센트·다이어그램 액티브 → `--ink` 기반 (스펙 02/03 문서의 개정 톤 노트 참조)
- devices 허브의 디바이스 식별 점 3색(보라/앰버/그린)은 소면적 유지 허용
- Private Phone은 변경 없음 (`--pp-*` 유지)
- 검증: YALI 외 페이지 CSS에서 `#6C4BD8`·`#C9B6FF`·`violet`·`lavender` grep 결과 0건

## 2단계 — YALI 에셋 통합

### 2-1. 이미지 복사·리네임 (원본은 건드리지 않음)
`public/images/yali/` 생성 후 아래 매핑으로 복사. 여러 변형이 있는 항목은 **파일을 열어 보고 4:3 크롭에 가장 적합하고 인물/디바이스가 선명한 1장** 선택(기본 후보를 적어둠).

| 용도 (스펙 §S4 타일) | 원본 후보 | 대상 파일명 |
|---|---|---|
| Morning Message | `Morning Message.png` | `everyday-morning.png` |
| Mood-Based Music | `Mood-Based Music1.png` (1~3 중 선택) | `everyday-music.png` |
| Daily Encouragement | `Daily Encouragement1.png` (1~6 중 선택) | `everyday-encouragement.png` |
| Night Recap | `Night Recap.png` | `everyday-night.png` |

| 용도 (스펙 §S5 카드) | 원본 후보 | 대상 파일명 |
|---|---|---|
| Concert Live Mode | `Concert Live Mode1.png` (1~2 중) | `moments-live.png` |
| Concert & Ticket Reminders | `Concert & Ticket Reminders1.jpeg` (1~2 중) | `moments-reminders.jpg` |
| Content You Missed | `Content You Missed1.jpeg` (1~3 중) | `moments-missed.jpg` |

- 1600px 초과 폭이면 리사이즈: `sips -Z 1600 <file>` (macOS 기본 도구)
- ILLI: 아코디언 키비주얼 1장 — `img_ILLI/Family Morning Call.png` → `public/images/illi/accordion-key.png` (나머지 ILLI 이미지는 ILLI 페이지 구현 시 사용, 지금 복사하지 않음)

### 2-2. 히어로 영상 (`0714_Yali_hero.mp4`, 48MB)
- ffmpeg 필요 — 없으면 `brew install ffmpeg`… brew도 없는 머신이므로 **다운로드 불가 시 이 소단계는 보류하고 포스터만 진행 불가 표시**. ffmpeg 가능하면:
  ```bash
  # 웹용 압축 (목표 ≤8MB, 1280w, 무음)
  ffmpeg -i 0714_Yali_hero.mp4 -vf scale=1280:-2 -c:v libx264 -crf 26 -preset slow -an -movflags +faststart public/videos/yali-hero.mp4
  # 포스터 스틸 (스펙: 썸네일)
  ffmpeg -i 0714_Yali_hero.mp4 -ss 00:00:02 -frames:v 1 public/images/yali/hero-poster.jpg
  ```
- 와이어링: `app/devices/yali/page.tsx` 히어로 — 포스터+재생버튼은 유지하되, 클릭 시 `<video>` 재생(poster=포스터, src=압축본, `preload="none"`, controls). 스펙의 `aria-label="Play video (coming soon)"` → `"Play video"`로 변경
- 영상 처리 불가 환경이면: 포스터 대신 기존 `yali-hero.png` 유지 + TODO 잔류

### 2-3. content 와이어링
- `content/yali.ts`: S4 타일 4개·S5 카드 3개의 placeholder 필드를 위 이미지 경로로 교체. `alt`는 타일 제목 기반 서술형으로
- placeholder 컴포넌트 경로가 사라지는 슬롯은 `next/image`로 교체 (`fill` + `sizes` 지정)
- `components/shared/DeviceAccordion.tsx`: ILLI 패널 placeholder → `illi/accordion-key.png`

## 3단계 — PDF·Patents 데이터

### 3-1. Private Phone 브로슈어
- `PrivatePhone-Brochure_0714v4.pdf` → `public/docs/private-phone-brochure.pdf` 복사
- `content/privatePhone.ts` + `app/private-phone/page.tsx`: `See How It Works →` CTA를 해당 PDF로 연결(`target="_blank" rel="noopener"`), disabled 해제

### 3-2. IP 포트폴리오 (aios 페이지)
- **1차 소스(구글독)는 접근 권한이 닫혀 있음**: https://docs.google.com/document/d/1annZ2VxKNpXnVic5QH4cO0xMH0Hgo1zKD19vnAJr_NE — 사용자에게 링크 공유(뷰어) 요청 필요. 열리면 `/export?format=txt`로 받아 이 데이터를 우선 사용
- 폴백: `[EN]Newnal-Intellectual-Property-Rights-June-2026.pdf`를 Read 도구로 읽어 특허·상표·백서 목록(제목/번호/상태) 추출 → `content/aios.ts`의 IP 타일 행 데이터 채움
- PDF 2종(EN/KR)을 `public/docs/ip-rights-en.pdf`, `ip-rights-kr.pdf`로 복사, IP 섹션에 다운로드 링크 추가
- 타일 실데이터가 확보되면 `TO BE PROVIDED` placeholder 제거

## 4단계 — 카피 확정 (사용자 지시: "피그마 기준으로 모두")

- `content/home.ts`의 TODO 2건을 아래로 확정하고 TODO 주석 제거:
  - 홈 히어로 H1: `Intelligence that truly knows you. Data under your control.` (Figma aios 히어로 서브카피 승격 — 확정)
  - aios 카드 설명: `The AI native OS. My AI, built from you.` (Figma "Newnal is building the AI native OS" + "MY AI — AI Built From You" 파생 — 확정)
- 비교표(Private Phone CH08)의 `Independent message history / Free App` 셀은 **TBD 그대로 둔다** (사용자 지시)
- `docs/spec/02-home.md`의 `[제안 — 확정 필요]` 표기 → `(확정 2026-07-15)`로 갱신
- `docs/spec/01-yali.md` 에셋 리스트 표를 2단계 결과로 갱신 (placeholder → 보유)

## 5단계 — 검수·배포

1. `npm run lint && npm run build`
2. dev 서버 기동 후 5페이지 × {1440, 390} 스크린샷 재캡처(기존 방식 재사용: `/private/tmp/newnal-screenshots/`) — 특히 확인:
   - H1 세리프 교체 후 줄바꿈 파손 여부(390px에서 홈 3줄, YALI 3–4줄 이내)
   - 실이미지 적용 후 타일/카드의 텍스트 대비
   - YALI 히어로 포스터 밝기 위에 재생버튼 가시성
3. `prefers-reduced-motion` 재검증 (기존 검증 스크립트 방식)
4. 단계별 커밋 메시지: `1단계: "Apply Instrument Serif display face and H1 italic emphasis"` / `2단계: "Wire YALI/ILLI imagery and hero video"` / `3단계: "Link Private Phone brochure and IP portfolio data"` / `4단계: "Finalize home copy per Figma"` — 각 커밋 후 main push (Vercel 자동 배포)
5. production 배포는 하지 않는다 — preview URL만 사용자에게 보고 (도메인 연결 여부 확인 전)

## 6단계 — 이후 (이 계획에 포함하지 않음)

- ILLI / UFO 상세 페이지: 스펙 작성은 기획 담당(Claude)이 Figma 405:230 / 405:460 기준으로 별도 진행 예정. 구현 에이전트는 착수하지 말 것
- Patents 구글독 접근이 열리면 3-2 데이터 교체

## 보고 형식 (작업 완료 시)

- 단계별 완료 여부 체크리스트
- 스크린샷 경로, 커밋 해시 목록
- 남은 TODO (`rg -n "TODO" app components content` 결과)
- 선택한 이미지 변형(예: Mood-Based Music2 선택)과 이유 한 줄
