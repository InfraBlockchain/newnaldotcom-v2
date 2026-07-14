# 03 — Newnal aios 페이지 스펙 (`/aios`)

> 토큰·공용 컴포넌트는 `00-foundation.md`를 따른다. 카피 출처: Figma `aios` 프레임(node `316:42`) verbatim.
> 구원고에 있던 "AI that doesn't require constant input", "Full Android Compatibility" 섹션은 Figma 최신 초안에서 제외되어 이 스펙에도 없다. 되살리려면 원고·초안부터 갱신할 것.

---

## 0. 페이지 기획

- **역할**: 사이트의 사상적 중심. 제품이 아니라 **철학과 아키텍처**를 파는 페이지 — "데이터 주권"이라는 하나의 개념을 6개 섹션이 단계적으로 전개
- **서사**: 주권 선언(1↔0 스펙트럼) → 시대 진단(OS 계보) → 문제(AI가 나를 모른다) → 해답(My AI) → 세계관(Reverse Login·Agent Place) → 증거(IP 포트폴리오)
- **톤**: 라이트, 텍스트 중심의 에디토리얼. 다이어그램 3개(스펙트럼·타임라인·Reverse Login)가 시각의 전부 — 전부 코드(SVG/CSS)로 구현, 이미지 금지
- **시그니처 — 1↔0 스펙트럼**: "100% open ↔ absolute zero" 축이 이 페이지의 고유 모티프. 히어로에서 선언하고 S2 다이어그램으로 구체화

## 1. 페이지 구조

```
S1  Hero            ONE ARCHITECTURE. COMPLETE DATA SOVEREIGNTY
S2  Sovereignty     From 100% open to absolute zero + 스펙트럼 다이어그램
S3  OS Era          In the Age of AI Computing Era + OS 계보 타임라인
S4  Problem         Why Does AI Still Feel Inconvenient?
S5  My AI           MY AI — AI Built From You + 원칙 3카드
S6  Agent Place     A World Where Services Connect Without Apps + Reverse Login
S7  IP              Intellectual Property Portfolio
```

## 2. 섹션별 스펙

### S1 — Hero

**카피** (Figma verbatim)
- H1: `ONE ARCHITECTURE. COMPLETE DATA SOVEREIGNTY`
- Sub: `Intelligence that truly knows you. Data under your control.`

**레이아웃·비주얼**: 860px 높이, 중앙 정렬. H1은 Instrument Serif display-xl, 두 문장을 2행으로 분리. 배경 `--bg` + 좌우 대각에서 만나는 옅은 라벤더 글로우 2개(1과 0의 양극 암시). 상시 모션 없음

### S2 — Sovereignty (From 100% open to absolute zero)

**카피** (Figma verbatim)
- H2: `From 100% open to absolute zero.`
- 문단 1: `Newnal is built on a simple belief: your data should move only by your choice.`
- 문단 2: `With Newnal AIOS and dedicated devices, your daily life, context, and personal data can be opened to the world's AI systems—allowing them to understand you, adapt to you, and expand the value of your data. This is active sovereignty: the freedom to use your information to its fullest potential.`
  (Figma 원문에 "This is : the freedom…"로 단어 누락 — 구원고 기준 `active sovereignty` 보정, `[보완]`)
- 문단 3: `On the other hand, with Newnal Private Phone, no personal data is connected at all. It creates an independent space designed to protect you from unauthorized disclosure, broken trust, and unwanted digital traces. This is defensive sovereignty: the freedom to remain unseen.`
- 브릿지: `Newnal is the single technological foundation that enables both:`
- 카드 2종: `ACTIVE SOVEREIGNTY` — `Abundance of data utilization.` / `DEFENSIVE SOVEREIGNTY` — `Freedom of complete disconnection.`

**스펙트럼 다이어그램** (우측 패널, SVG)
```
 0 ●──────────  Newnal (foundation)  ──────────● 100
 Private Phone                            Newnal AIOS
 DEFENSIVE SOVEREIGNTY              ACTIVE SOVEREIGNTY
```
- 좌 끝점 `0` = Private Phone(defensive), 우 끝점 `100` = Newnal AIOS(active), 중앙 `Newnal (foundation)`
- **주의**: Figma 초안은 좌우 라벨이 끝점과 어긋나게 배치되어 있음(0 옆에 Newnal AIOS 라벨). 위 배치가 논리적으로 맞는 것 — 이대로 구현
- 끝점 원 2개는 각각 `--stage`(0)·`--violet`(100) 채움. 뷰포트 진입 시 중앙에서 양끝으로 선이 그려지는 리빌 1회

**레이아웃**: 좌 텍스트 컬럼(문단 3개) / 우 다이어그램 패널. 아래 풀폭으로 브릿지 문장 + 2카드(상단 3px 라인 + 카드, `00-foundation` 카드 규칙)

### S3 — OS Era

**카피** (Figma verbatim)
- H2: `In the Age of AI Computing Era`
- 서브헤드: `Every Computing Era has its own OS`
- 본문: `AI will not be unlocked by adding another app. An operating system transformation is required.`
- 결론: `Newnal is building the AI native OS.` (본문과 구분되게 `--ink` 강조)

**타임라인 다이어그램** (SVG)
- 원 3개 + 연결선: `1995 / Windows 95` → `2007 / iOS` → `NOW / Newnal AIOS`(active — `--violet` 스트로크 + 글로우)
- 하단 시대 라벨: `Personal Computing Era` / `Mobile Computing Era` / `AI Computing Era`
- 리빌: 좌→우 순차(각 120ms 스태거)

### S4 — Problem (Why Does AI Still Feel Inconvenient?)

**카피** (Figma verbatim)
- H2: `Why Does AI Still Feel Inconvenient?`
- 도입: `AI is intelligent.`
- 강조 콜아웃(상단 3px 라인 박스): `But AI relies on you to manually define all context and intent through input. You're asked to repeatedly re-enter intentions, context, data etc. every time to achieve optimal results.`
- 결론: `AI has learned the world. But it has not learned you. So we changed the question. Not, "How do we make AI smarter?" But, "How do we build AI that understands me?"`
  — 마지막 두 물음은 행을 분리하고 `"How do we build AI that understands me?"`만 Instrument Serif display-m으로 승격 (페이지의 전환점)

### S5 — My AI (AI Built From You)

**카피** (Figma verbatim)
- H2: `MY AI — AI Built From You`
- 도입: `Newnal AIOS begins with one fundamental question: Where is my data?`
- 브릿지: `The Newnal AIOS is built on data architecture where:`
- 원칙 3카드 (01/02/03 — 아키텍처 원칙의 열거, 넘버링 유지):
  1. `Your data is controlled by you`
  2. `No one can access your data without permission`
  3. `You can see exactly what data was used, when, and how`
- 결론: `From this foundation, My AI is created. You are no longer just a user of AI. You become the creator of your own AI.` — 마지막 문장 `--ink` 강조

**레이아웃**: H2 → 도입(`Where is my data?`는 이탤릭 Instrument Serif로 분리) → 3카드 가로(모바일 세로) → 결론

### S6 — Agent Place (Services Connect Without Apps)

**카피** (Figma verbatim)
- H2: `A World Where Services Connect Without Apps`
- Before 라벨: `Today, to use a service, we must:` — 5단계: `01 Download the app / 02 Log in / 03 Create passwords / 04 Verify identity / 05 Register payment`
- After 라벨: `Newnal reverses this structure through Reverse Login` — 3단계:
  1. `You no longer log into services, but instead services log into you.`
  2. `Services request access to your data from your AI`
  3. `Only when you grant permission does data connect`
- 마무리: `We call this ecosystem Agent Place. In the future, specialized AI agents will work for you — only with your permission.`
- 강조 콜아웃: `Data is more vulnerable the harder you try to protect it; counterintuitively, it is protected the more you open it.`

**레이아웃·비주얼**: Before 5단계는 작게·회색조(`--ink-faint`, 아이콘 24px) 가로 나열 — 번거로움이 시각적으로 느껴지게 밀도 높게. After 3단계는 크게·`--violet` 액센트로 여유 있게 — 대비가 곧 메시지. 콜아웃은 S4와 동일한 3px 라인 박스 재사용

### S7 — IP (Intellectual Property Portfolio)

**카피**
- H2: `Intellectual Property Portfolio` (Figma verbatim)
- 타일 구성 `[보완 — Figma 초안의 타일 라벨이 "Utility Patents" 중복 placeholder 상태]`: 좌열 2타일 `Technical Whitepapers` / `Utility Patents`, 우열 3타일은 `Core Patents` / `Trademarks` / `Design` (세부 기획안의 특허 페이지 5분할 구성을 이 섹션에 적용)
- 각 타일 내부 실데이터(특허 번호·백서 목록)는 **미확보 — placeholder 목록 3행씩**, mono 캡션 `TO BE PROVIDED`

**레이아웃**: 2열 비대칭 그리드(좌 460px 타일 2개, 우 300px 타일 3개). 타일은 `--surface` + `--line` 보더, hover 시 보더 `--violet`

## 3. 수용 기준

- [ ] 모든 카피 Figma verbatim (`[보완]` 2곳 제외)
- [ ] 다이어그램 3종(스펙트럼·타임라인·Reverse Login) 전부 코드 구현, 이미지 없음
- [ ] S2 스펙트럼 라벨이 끝점과 논리적으로 일치 (0=Private Phone, 100=AIOS)
- [ ] S4→S5로 이어지는 질문("understands me?")이 시각적 전환점으로 기능
- [ ] 상시 루프 모션 없음, 리빌은 각 1회
- [ ] 390px에서 다이어그램 3종 모두 세로 재배열로 degrade
