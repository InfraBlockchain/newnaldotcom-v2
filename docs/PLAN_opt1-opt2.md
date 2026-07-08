# newnaldotcom-v2 — opt-1 / opt-2 기획서

> 작성: 2026-07-08. 원고 기준: `docs/원고_웹사이트개편기획.md` (Google Docs "웹사이트 개편 기획" 사본).
> 구현 담당 에이전트를 위한 스펙. **콘텐츠 구조는 두 옵션이 완전히 동일하고, 보여주는 방식(라우팅·컴포지션)만 다르다.**

---

## 0. 전제

| 항목 | 내용 |
|------|------|
| 작업 repo | `InfraBlockchain/newnaldotcom-v2` (이 repo) |
| 기존 카피 소스 | `InfraBlockchain/newnaldotcom-2` (public, 참고용 — 원고에 "기존 그대로"로 표시된 섹션의 카피·이미지 추출처) |
| 배포 | Vercel `steveofnewnal/newnaldotcom-v2` |
| 스택 | Next.js 16 + TypeScript + CSS Modules (기존 패턴 유지) |
| ⚠️ Next.js 16 | 코드 작성 전 `node_modules/next/dist/docs/`의 관련 가이드를 먼저 읽을 것 (루트 CLAUDE.md 지시) |

**핵심 원칙**: 콘텐츠는 `content/`에 단일 정의, 섹션 컴포넌트도 단일 구현. opt-1과 opt-2는 이것들을 **조합하는 방식만** 다르다. 카피 수정이 두 옵션에 동시 반영되어야 A/B 비교가 성립한다.

---

## 1. 공유 콘텐츠 구조 (IA)

GNB 메뉴 3개 (원고 확정):

1. **Newnal aios**
2. **Private Phone**
3. **Newnal aios Devices** (정식 명칭 "Devices Run By Newnal aios — YALI & ILLI", GNB에는 압축형 사용)

### 1-1. Newnal aios (섹션 8개)

| # | 섹션 | 카피 소스 |
|---|------|-----------|
| A1 | **Data Sovereignty 철학** — "ONE ARCHITECTURE. COMPLETE DATA SOVEREIGNTY" / "From 100% open to absolute zero." | 원고 (신규, 전문 수록됨) |
| A2 | **OS Paradigm Shift** — "In the Age of AI Computing Era… Every Computing Era has its own OS" | 원고 (신규) + 기존 Hardware X 섹션에서 재배치되는 내용 |
| A3 | Why does AI still feel inconvenient? | 기존 newnaldotcom-2에서 그대로 |
| A4 | My AI — AI Built From You | 기존 그대로 |
| A5 | AI that doesn't require constant input | 기존 그대로 |
| A6 | A World where Services Connect Without Apps | 기존 그대로 |
| A7 | Full Android Compatibility | 기존 그대로 |
| — | ~~Phone Number~~, ~~Hardware X~~(A2로 흡수) | **삭제 확정** |
| ? | 온보딩, Roadmap | **삭제 고민 중 — 사용자 결정 대기. 1차 구현에서는 제외** |

다이어그램 placeholder 2개:
- A1: Newnal 로고 ↔ "1 — data utilization" / "0 — complete disconnection" 연결 다이어그램
- A2: Windows 95 → iOS → Newnal AIOS 계보 다이어그램

### 1-2. Private Phone (섹션 6개)

| # | 섹션 | 핵심 |
|---|------|------|
| P1 | Hero — "Privacy that holds—even when trust breaks." | 히어로샷 + 서브텍스트 4항목(아이콘) + CTA "See How It Works"(→PDF) |
| P2 | "Privacy that survives the leak." | 4개 기둥: Decentralized Identity / Independent Message Histories / Real-Time Voice Modulation / E2E·On-Device Encryption |
| P3 | "A new number for every connection." | 3-Step Flow 다이어그램 (Generate → Share → Connect) + 클로징 카피 |
| P4 | "CONVERSATIONS WITHOUT A DEFINITIVE ORIGINAL" | 대화 원본 부재 개념 + 이미지 |
| P5 | "Freedom From Ads and Spam" | 기존 번호체계 vs Newnal 비교 다이어그램 (1:N vs 1:1) |
| P6 | "Built on infrastructure that has already served millions." | Proof Numbers(43M Users / 30M Daily tx / 120 Countries) + Pricing($700 기기 / $270·yr) |

카피 전문이 원고에 있음 — 원고 그대로 사용.

### 1-3. Newnal aios Devices (YALI + ILLI)

**YALI** (섹션 3개):
| # | 섹션 | 핵심 |
|---|------|------|
| Y1 | Hero — "AI Companion for Kpop Artist and Fans" | "Not a fan app. Not a smart speaker. Not a limited edition phone." |
| Y2 | 핵심 가치 — "From Fan Moments to Personal Moments" | 일방향 팬덤 → 개인화 상호작용 |
| Y3 | Use Cases — "From Following Your Artist to Living Alongside Them" | Everyday 5종(Alarm / Listening Together / Artist Recommends / Artist Remembered / Goodnight) + **One more Thing: Concert Mode 3종**(Light Stick / Capture the Moment / Offsite) |

**ILLI** (섹션 3개):
| # | 섹션 | 핵심 |
|---|------|------|
| I1 | Hero — "AI Companion for the Golden Generation" | "Growing older should bring more connections, not less." |
| I2 | 핵심 가치 — "Care That Understands You" | 3원 겹침 다이어그램: Your Life / Your Family / Trusted Services |
| I3 | Use Cases — "From Everyday Moments to Moments That Matter" | 7종: Family Morning Call / Personalized Workout / Important Info Reminders / Secure Payments(보이스피싱 방지) / Conversation Partner / SOS / Smart Shopping |

> ⚠️ 참고자료(iCloud INDEX.md)에는 ILLI 기능이 9종(+문자→영상, 목소리→문자)이나 원고에는 7종까지만 있음. **원고 기준 7종으로 구현, 사용자 확인 대기.**

### 1-4. 콘텐츠 파일 구성

```
content/
├── site.ts            # 브랜드, GNB 메뉴 정의(라벨·앵커id·페이지경로 모두 보유), footer
├── aios.ts            # A1~A7
├── private-phone.ts   # P1~P6
└── devices.ts         # YALI Y1~Y3 + ILLI I1~I3
```

- 각 메뉴 항목은 `{ label, anchorId, pagePath }`를 모두 가진다 → opt-1은 anchorId를, opt-2는 pagePath를 사용.
- 기존 `content/homepage.ts`(철학 드래프트)는 건드리지 않는다. `/` 루트 페이지도 현행 유지.
- 이미지·다이어그램은 전부 placeholder 컴포넌트(회색 박스 + 라벨 텍스트)로 구현. 실제 에셋은 추후 교체.

---

## 2. opt-1 — 원페이지 랜딩 (`/opt-1`)

원고의 흐름 그대로 한 페이지에 전부 이어 붙이고, GNB가 각 제품 존의 앵커 메뉴가 되는 형태.

### 구조

```
/opt-1
├── [Site Hero] 사이트 오프닝 (아래 '미결 4' 참고 — 임시로 A1 카피를 오프닝으로 겸용)
├── Zone 1: Newnal aios      #aios          (A1 → A7)
├── Zone 2: Private Phone     #private-phone (P1 → P6)
├── Zone 3: aios Devices      #devices       (Y1→Y3, I1→I3)
└── Footer
```

### GNB 동작

- 상단 고정(sticky). 로고 + 메뉴 3개.
- 메뉴 클릭 → 해당 존으로 smooth scroll.
- **Scrollspy**: 현재 화면의 존에 해당하는 메뉴에 active 상태 표시 (IntersectionObserver).

### UX 노트

- 총 ~20개 섹션의 초장문 스크롤. 존 경계가 인지되도록 **존마다 배경 톤/분위기를 구분**하고, 존 시작마다 존 인트로(제품명 + 한 줄 포지셔닝)를 둘 것.
- Devices 존 내부에서 YALI→ILLI 전환 시 서브 구분(디바이스 이름 스티키 라벨 등)이 필요.
- 이미지 lazy loading 필수. placeholder 단계에서도 컴포넌트 구조는 lazy 전제로.
- 페이지 하단에 맨 위로 이동 버튼.

---

## 3. opt-2 — 허브 + 개별 페이지 (`/opt-2`)

히어로컷 + 메뉴 요약 카드로 구성된 1개 허브 페이지에서, 메뉴별 개별 페이지로 이동(현재 페이지 이동, 새 탭 아님)하는 형태.

### 라우팅

```
/opt-2                  # 허브
/opt-2/aios             # A1 → A7
/opt-2/private-phone    # P1 → P6
/opt-2/devices          # Y1→Y3 + I1→I3
```

### 허브 페이지 구성

1. **히어로컷** — 브랜드 스테이트먼트 (임시: "ONE ARCHITECTURE. COMPLETE DATA SOVEREIGNTY" + "From 100% open to absolute zero." — A1 카피 재사용)
2. **메뉴 요약 카드 3개** — 각 카드: 제품명 / 한 줄 요약 / 대표 비주얼 placeholder / CTA("Explore →")
   - Newnal aios: "The AI native OS. Every computing era has its own OS."
   - Private Phone: "Privacy that holds—even when trust breaks."
   - aios Devices: "YALI & ILLI — AI companions built on Newnal aios."
3. Footer

### GNB 동작

- 모든 페이지 공통 GNB: 로고(→ `/opt-2` 허브) + 메뉴 3개(각 페이지로 이동).
- 현재 페이지의 메뉴에 active 상태 표시.

### UX 노트

- 각 상세 페이지 하단에 **다음 제품으로 넘어가는 크로스 네비게이션** (예: aios 하단 → "Next: Private Phone →"). 허브로 돌아가지 않고도 순환 가능하게.
- Devices 페이지는 YALI/ILLI 두 블록이 한 페이지에 — 페이지 상단에 두 디바이스로 점프하는 로컬 앵커 탭(YALI | ILLI) 배치.

---

## 4. 구현 순서 제안

1. `content/` 4개 파일 작성 — 원고(`docs/원고_웹사이트개편기획.md`) 카피 그대로 + "기존 그대로" 섹션(A3~A7)은 `newnaldotcom-2` repo에서 카피 추출해 채움
2. 공유 섹션 컴포넌트 (`components/sections/`) — placeholder 다이어그램/이미지 컴포넌트 포함
3. 공유 GNB 컴포넌트 — anchor 모드 / page 모드 양쪽 지원
4. `/opt-1` 컴포지션 (+ scrollspy)
5. `/opt-2` 허브 + 상세 3페이지 컴포지션
6. `npm run lint` + `npm run build` 통과 확인

---

## 5. 미결 사항 (사용자 결정 필요 — 구현 블로킹 아님)

1. **온보딩·Roadmap 섹션** — 원고에 "삭제 고민". 1차 구현 제외로 진행, 최종 결정 대기.
2. **ILLI 기능 8·9** (문자→영상 / 목소리→문자) — 원고에 없음(참고자료엔 9종). 7종으로 진행 중.
3. **Private Phone CTA** "See How It Works" → 연결할 PDF 파일 확정 필요. 임시 `#`.
4. **opt-1 최상단 오프닝** — 별도 사이트 히어로를 만들지, A1(Data Sovereignty)을 오프닝 겸용으로 쓸지. 임시로 A1 겸용.
5. **언어** — 원고가 영문 카피 중심. 영문 단일로 진행하는지 확인 필요. 임시 영문 단일.
