# 04 — Private Phone 페이지 스펙 (`/private-phone`)

> 토큰·공용 컴포넌트는 `00-foundation.md`를 따른다. 카피 출처: Figma `PrivatePhone · v3 (Dark security)` 프레임(node `361:2`) verbatim.
> 초안 자체가 CHAPTER 체계를 갖고 있다 — 이 페이지는 사이트에서 유일하게 **처음부터 끝까지 다크**인 페이지.

---

## 0. 페이지 기획

- **제품**: Newnal Private Phone — 해커가 아니라 "대화 상대방"으로부터 보호하는 폰. 관계별 고유 번호, 독립 대화 기록, 실시간 음성 변조, E2E+온디바이스 암호화
- **오디언스**: 리더·크리에이터·경영진 — 평판이 자산인 사람들. 톤은 신뢰·정밀·절제 (K-pop 페이지의 감성과 정반대)
- **페이지의 단 하나의 목표**: "유출되어도 증거가 되지 않는다"는 역발상을 이해시키고 → `See How It Works` (PDF)
- **테마 — Dark Security**: 전 구간 다크. 사이트 보라 토큰 대신 이 페이지 전용 스틸 블루 램프 사용:

```css
[data-theme="private"] {
  --pp-bg:      #0A0E16;  /* 페이지 배경 — 블루 캐스트 니어블랙 */
  --pp-panel:   #10161F;  /* 패널/카드 */
  --pp-line:    #1E2836;  /* 헤어라인 */
  --pp-text:    #E8EDF5;  /* 본문 */
  --pp-soft:    #8B99AD;  /* 보조 텍스트 */
  --pp-accent:  #7DA2D4;  /* 스틸 블루 — 숫자·강조·다이어그램 */
  --pp-glow:    #3D5A80;  /* 글로우, 저투명 전용 */
}
```

- **시그니처 — Newnal Number**: `482-KRN-3917` 형식의 번호 칩(mono, 알약형 배경)이 페이지 전체를 관통하는 모티프. 히어로에 흩어져 떠 있고, CH03·05·07 다이어그램에 반복 등장. 상시 모션은 히어로 번호 칩의 느린 부유(floating) 하나만
- **구조 장치 — CHAPTER**: 초안의 챕터 체계를 그대로 정식화. 각 섹션 상단에 mono 아이브로우 `CHAPTER 0N — LABEL`. 서사가 실제로 장(章) 구조이므로 넘버링이 정보를 가짐

## 1. 페이지 구조 (Figma 초안의 챕터 순서 그대로)

```
CH01  Overture            Privacy that holds—even when trust breaks.
CH02  What Newnal Protects  Privacy that survives the leak. (4 보호 장치)
CH03  How It Works        A new number for every connection. (3-Step)
CH04  The Leak Test       A screenshot is no longer proof. (Device A vs B)
CH05  An Inbox Only You Fill  Freedom From Ads and Spam (허브 vs 전용선)
CH07  Contacts Join Free  Your contacts can join for free. (3분할)
CH08  Phone vs App        Private Phone vs Free App (비교표)
CH06  Foundation & Pricing  Built on infrastructure… + 가격 3종
```
※ 챕터 번호는 초안 그대로 유지하되 표시 순서는 위와 같다(06이 마지막 — 신뢰·가격으로 착지). 번호와 순서의 불일치가 어색하면 표시 번호만 01–08로 순차 재부여해도 무방 — 구현 시 일관성만 유지할 것.

## 2. 섹션별 스펙

### CH01 — Overture (히어로)

**카피** (Figma verbatim)
- Eyebrow: `CHAPTER 01 — OVERTURE`
- H1: `Privacy that holds— even when trust breaks.`
- Sub: `Most secure phones defend against hackers. Newnal defends against the person on the other side.`
- 대상 선언: `Built for leaders, creators, executives, and anyone whose reputation is an asset.`
- CTA: `See How It Works →` (PDF 링크 — URL 미확보 시 disabled + `aria-label` 처리)

**비주얼 — 시네마틱 히어로 컴포지션** (초안 구성 재현·정제, 전부 코드)
- 배경: `--pp-bg` 위에 미세 그리드(1px `--pp-line`, 56px 간격 — 초안의 그리드 라인. 투명도 30%로 절제)
- 중앙: 폰 목업 실루엣 + 주위를 감싸는 동심 타원 오라(`--pp-glow` 저투명 4겹)
- **부유하는 Newnal Number 칩 7개**: `482-KRN-3917`, `731-BXQ-5204`, `156-GHT-8463`, `629-MLP-7051`, `347-FVC-6590`, `518-JNR-2746`, `894-DWZ-1328` (Figma verbatim). mono 12–14px, `--pp-panel` 알약 배경. `--dur-ambient`(10s+)로 각기 다른 위상의 미세 부유 — 페이지 유일의 상시 모션
- 에셋: 폰 목업 렌더 1장 필요(미확보 시 CSS 실루엣으로 대체 가능)

### CH02 — What Newnal Protects

**카피** (Figma verbatim)
- Eyebrow: `CHAPTER 02 — WHAT NEWNAL PROTECTS`
- H2: `Privacy that survives the leak.`
- Lead: `Encryption protects the channel. Newnal protects you when the person on the other side takes a screenshot, records a call, or shares a conversation out of context.`
- 보호 장치 4행 (넘버드 리스트 — 초안 그대로):
  1. **Decentralized Identity** — `Communicate without exposing your personal phone number, email, or any real-world identifier. Newnal issues an identity you control.`
  2. **Independent Message Histories** — `Every device holds its own record. When content changes on one, the other stays untouched—no single copy can claim to be the original.`
  3. **Real-Time Voice Modulation** — `Transform your voiceprint before it leaves your device. What is recorded cannot be traced back to your natural voice.`
  4. **End-to-End & On-Device Encryption** — `Messages and calls are protected in transit. Sensitive data at rest is sealed on-device, inaccessible even to Newnal.`

**레이아웃**: 풀폭 행 리스트. 각 행 = 1px `--pp-line` 상단 디바이더 + `01` mono 넘버(좌 80px) + 제목(중앙 500px, Instrument Sans 600) + 설명(우 500px, `--pp-soft`) + 우측 끝 아이콘(72px, 스트로크). 행 hover 시 배경 `--pp-panel`

### CH03 — How It Works

**카피** (Figma verbatim)
- Eyebrow: `CHAPTER 03 — HOW IT WORKS`
- H2: `A new number for every connection.`
- Lead: `Newnal never syncs your address book or reuses a permanent identifier. Every relationship earns its own private line.`
- 3-Step (스텝 사이 1px 세로 디바이더):
  1. `01` **Generate** — `Your Newnal device mints a fresh number reserved for one specific person.`
  2. `02` **Share** — `Hand it off directly—by voice, gesture, or one-time code. No address book leaves your phone.`
  3. `03` **Connect** — `The other person enters the number once. From then on, you share a closed, encrypted line.`
- 클로징(풀폭, Instrument Serif display-m): `One person. One number. One private connection.`

**비주얼**: 각 스텝 상단에 소형 라인 일러스트(폰→`N-4712` 칩→화살표 등, 초안 구성 참고, 전부 SVG). 넘버 칩은 시그니처 스타일 재사용

### CH04 — The Leak Test

**카피** (Figma verbatim)
- Eyebrow: `CHAPTER 04 — WHEN A CONVERSATION IS EXPOSED`
- H2: `A screenshot is no longer proof.`
- Lead: `Each device retains its own version of the conversation. When one side rewrites a message, the other side still holds the original—so no single capture can settle the truth.`
- 좌 폰 `DEVICE A · LATER EDITED`: 말풍선 `Where are we tomorrow?` / `Cancel it.` / `Understood.` + 캡션 `Record on this device was changed after the conversation.`
- 우 폰 `DEVICE B · ORIGINAL PRESERVED`: 말풍선 `Where are we tomorrow?` / `8pm, same place.` / `See you.` + 캡션 `The other device holds the original record, untouched.`
- 클로징: `The conversation may be exposed. Your identity and words remain unverified.`

**비주얼**: 폰 프레임 2대를 나란히(CSS 구현 — 이미지 아님). 두 번째 말풍선만 서로 다름 — **다른 말풍선에만** `--pp-accent` 1px 보더로 차이를 표시. 이 페이지의 논증 핵심이므로 리빌을 좌→우 순으로 주어 "같은 대화, 다른 기록"이 읽히게 함

### CH05 — An Inbox Only You Fill

**카피** (Figma verbatim)
- Eyebrow: `CHAPTER 05 — AN INBOX ONLY YOU FILL`
- H2: `Freedom From Ads and Spam`
- Lead: `Traditional networks give one number away to everyone. Newnal issues a dedicated number for every person you trust—so no one else can reach you.`
- 좌 패널 `TRADITIONAL — ONE SHARED HUB`: 중앙 `You` 노드에 `Family / Ad / Spam / Unknown / Friend`가 전부 연결. 캡션 `One line, everyone sits on it.`
- 우 패널 `NEWNAL — SEPARATE PRIVATE WIRES`: 컬럼 헤더 `YOU / PRIVATE NUMBER / CONTACT`, 5행 — `689-RWN-4948 → Family`, `812-VTW-7304 → Client`, `733-HXR-5706 → Doctor`, `659-NWH-5096 → Friend`, `252-ZHE-6967 → Coworker`. 캡션 `Five wires. Five numbers. Nothing shared.`

**비주얼**: 좌우 분할 패널(`--pp-panel` 배경, 중앙 1px 디바이더). 좌측 허브 다이어그램에서 `Ad / Spam / Unknown` 노드만 채도 낮은 경고 톤(`--pp-soft` 40%)으로 — 원치 않는 연결임이 보이게. 우측 5행의 번호 칩은 시그니처 스타일. SVG 구현

### CH07 — Contacts Join Free

**카피** (헤드라인: Figma verbatim / Sub·캡션: 초안이 placeholder — `[보완]` 세부 기획안 Section 7)
- Eyebrow: `CHAPTER 07 — CONTACTS ON THE OTHER SIDE`
- H2: `Your contacts can join for free.`
- Lead `[보완]`: `Newnal Private Phone is built so your protection does not depend on the other person buying the same device. No Private Phone required on their side. No phone number exchange.`
- 하단 요약 `[보완]`: `The other person installs the free connection app, enters the number, and joins your encrypted 1:1 communication channel.`

**비주얼 — 3분할 다이어그램** (초안 구성 그대로, CSS/SVG)
- 좌 `PRIVATE PHONE OWNER`: Newnal 폰 목업 — `GENERATE NUMBER` → `N-4712` 칩
- 중 `ENCRYPTED 1:1 CONNECTION`: 자물쇠 + `N-4712` 칩 + 양방향 펄스 점선
- 우 `FREE APP USER`: 일반 폰 목업 — 앱 아이콘 → `ENTER NUMBER` 입력창(`N-4712`) → `Join` 버튼

### CH08 — Phone vs App

**카피** (행 라벨: Figma verbatim / Sub: placeholder → `[보완]`)
- Eyebrow: `CHAPTER 08 — WHERE PROTECTION LIVES`
- H2: `Private Phone vs Free App`
- Lead `[보완]`: `The free connection app allows your contacts to communicate with you securely. But the deeper protection comes from the Newnal Private Phone itself.`
- 비교표 (컬럼: `NEWNAL PRIVATE PHONE` / `FREE CONNECTION APP`):

| 행 | Private Phone | Free App |
|---|---|---|
| Voice modulation | ✓ | ✗ |
| Identity separation | ✓ | ✗ |
| Unique number generation | ✓ | ✗ |
| Device-level private environment | ✓ | ✗ |
| Encrypted 1:1 messaging | ✓ | ✓ |
| Independent message history | ✓ | `[확정 필요]` |

- ✓/✗ 배분은 세부 기획안("번호 생성 및 음성 변환 미제공") 기반 추정 — Independent message history의 Free App 지원 여부는 **확인 필요**. 원본 비교표 PDF(YT 업로드본) 확보 시 대조할 것

**레이아웃**: 초안의 행 디바이더 테이블 형식. ✓는 `--pp-accent`, ✗는 `--pp-soft` 30%

### CH06 — Foundation & Pricing (마지막 배치)

**카피** (Figma verbatim)
- Eyebrow: `CHAPTER 06 — TRUSTED FOUNDATION`
- H2: `Built on infrastructure that has already served millions.`
- Lead: `Newnal and Blockchain Labs bring more than a decade of engineering: InfraBlockchain public infrastructure, and the technology behind COOV—the blockchain-based COVID-19 credential trusted by Korea and 120 countries.`
- Proof 3종: `43M` `Users` `on Newnal infrastructure` / `30M` `Daily transactions` `processed reliably` / `120` `Countries` `with COOV credentials`
- `PROOF OF SCALE` — `The same foundation that Korea trusted for COVID-19 credentials.` + COOV 로고 락업(`COOV` / `BLOCKCHAIN CREDENTIAL`)
- 크레딧: `Powered by InfraBlockchain public infrastructure · Engineered by Blockchain Labs`
- 인터루드(제품 이미지 브레이크): `· INTERLUDE ·` + `TWO DEVICES · ONE PRIVATE LINE` — 폰 2대 + 중앙 `N-4712` 칩 연결선 컴포지션
- `PRICING` — `Own it, then live with it.`
- 가격 카드 3종:
  1. `PRIVATE PHONE` / `One-time device fee` / **$700** / `Includes private-node hardware.` / `No SIM card or carrier plan required.`
  2. `PRIVATE COMMUNICATION` / `Annual subscription` / **$270 / year** / `Newnal private-node service.` / `Enterprise deployment options available.`
  3. `FREE CONNECTION APP` / `For your contacts` / **$0** / `For contacts on the other side.` / `* No number generation, no voice modulation.`
- 마무리: `Enterprise inquiries → contact@newnal.com` (mailto 링크)

**레이아웃**: proof 3종은 1px 세로 디바이더로 3등분(숫자 Instrument Serif display-l, `--pp-accent`). 가격 카드 3장은 동일 크기 — $0 카드도 동급으로 취급(초안 그대로). 카드 보더 `--pp-line`, 금액만 `--pp-text` 대형

### Footer (이 페이지 전용 오버라이드)

`© 2026 Newnal · Blockchain Labs. All rights reserved.` — 전역 푸터를 쓰되 이 페이지에서는 `--pp-bg` 위 `--pp-line` 상단 보더로 톤 통일

## 3. 수용 기준

- [ ] `[보완]`/`[확정 필요]` 표기 없는 모든 카피가 Figma(node 361:2) verbatim
- [ ] 페이지 전 구간 `--pp-*` 토큰 사용 — 사이트 보라(`--violet`/`--lavender`) 미사용
- [ ] 상시 모션은 CH01 번호 칩 부유 하나뿐, `prefers-reduced-motion`에서 정지
- [ ] 다이어그램 5종(히어로 컴포지션·3-Step·Leak Test·허브vs전용선·3분할 연결) 전부 코드 구현
- [ ] CH04 두 디바이스의 차이 말풍선이 시각적으로 구분됨
- [ ] 비교표의 `[확정 필요]` 셀이 임의로 ✓/✗ 확정되지 않고 TODO 주석으로 남음
- [ ] `See How It Works` CTA가 PDF URL 미확보 상태를 명시적으로 처리
- [ ] 390px에서 CH05·CH07 다이어그램 세로 재배열, 비교표 가로 스크롤 컨테이너
