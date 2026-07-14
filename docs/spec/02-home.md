# 02 — 홈 페이지 스펙 (`/`)

> 토큰·공용 컴포넌트는 `00-foundation.md`를 따른다. 카피 출처: Figma `Home` 프레임(node `418:701`).
> **주의**: Home 초안은 이미지 중심이라 텍스트가 얇다. Figma에 있는 카피는 verbatim, 없는 자리는 `[제안 — 확정 필요]`로 표시했다.

---

## 0. 페이지 기획

- **역할**: 3개 축(aios / Companion Devices / Private Phone)으로 갈라지는 관문. 홈에서 설득을 끝내려 하지 않는다 — 브랜드의 한 문장 + 세 갈래 길만 명확하게
- **분량**: 히어로 + 3분기 카드 + 푸터. 스크롤 2화면 이내로 유지 (Figma 초안도 1604px로 짧다 — 의도로 존중)
- **톤**: 라이트(`--bg`), 사이트 기본 보라 액센트. 세 카드가 각 목적지의 톤을 예고(aios=라이트, Devices=보라, Private Phone=다크)

## 1. 페이지 구조

```
[GNB — 전역: Newnal | Newnal aios · Companion Devices · Private Phone]
S1  Hero          풀블리드 비주얼 + 브랜드 한 문장
S2  Three Paths   3분기 카드 (aios / Private Phone / Devices)
[Footer — 전역]
```

## 2. 섹션별 스펙

### S1 — Hero

**카피**
- H1 `[제안 — 확정 필요]`: `Intelligence that truly knows you. Data under your control.`
  (Figma Home 히어로에는 텍스트가 없음. 위 문장은 Figma aios 히어로의 서브카피에서 가져온 브랜드 스테이트먼트 — 홈 히어로로 승격 제안. 다른 문장으로 확정되면 교체)
- 보조 CTA `[제안 — 확정 필요]`: `Explore Newnal aios →` (`/aios`)

**레이아웃·비주얼**
- 높이 `min(860px, 90vh)` 풀블리드. Figma 초안의 히어로는 이미지 프레임 — 브랜드 키비주얼 1장(에셋 미확보 시 placeholder 규칙: `--stage-2` 배경 + mono 캡션 `PHOTO · brand key visual`)
- 이미지 위 H1은 하단 좌측 정렬(과도한 중앙 히어로 회피), 텍스트 대비를 위해 하단 그라디언트 오버레이
- 모션: 로드 시 H1 리빌 1회. 상시 모션 없음 (홈은 조용하게 — 시그니처 모션은 제품 페이지의 것)

### S2 — Three Paths (3분기 카드)

**카피** (Figma verbatim, 카드 1 제목·설명만 `[보완/제안]`)

| # | 제목 | 설명 | 목적지 |
|---|---|---|---|
| 1 | `Newnal aios` `[제안 — Figma 카드에 텍스트 없음]` | `The AI native OS. My AI, built from you.` `[제안 — 확정 필요]` | `/aios` |
| 2 | `Newnal Private Phone` | `No public identity. No universal phone number.` | `/private-phone` |
| 3 | `AI Companion Devices Powered by Newnal` | `One AIOS. Distinct companions for different lives.` | `/devices` |

**레이아웃·비주얼**
- 3등분 풀폭 카드(각 480×600 비율 유지, 모바일 세로 스택). 카드 사이 구분은 1px `--line`
- 각 카드: 상단에 제목(Fraunces display-m)+설명(body), 하단 우측에 화살표(→, Figma의 Vector 1 위치 재현). 배경은 목적지 톤 예고 — 카드1 `--surface`, 카드2 `--stage`(다크, 텍스트 `--on-stage`), 카드3 `--violet` 8% 틴트
- hover: 배경 톤 2% 심화 + 화살표 8px 우측 이동(`--dur-micro`). 카드 전체가 링크(`<a>` 블록)

## 3. 수용 기준

- [ ] `[제안]` 표기 카피가 그대로 구현되었고, 표기 없는 카피는 Figma verbatim
- [ ] 세 카드 전체가 클릭 영역이며 키보드 포커스 시 카드 외곽선 표시
- [ ] 홈에 상시 루프 모션 없음
- [ ] 390px에서 카드 세로 스택, 히어로 H1 3줄 이내
