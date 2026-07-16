# UFO TASK B — 섹션 1 Hero + 섹션 2 Dark Showcase

> 마스터 플랜: `docs/spec/07-ufo.md` (§4 토큰·타이포, §7 카피, §8 DoD 필독)
> **선행 조건**: TASK A Phase 1이 main에 머지되어 있어야 한다 (`content/ufo.ts`·섹션 스텁 존재 확인 후 착수).
> 디자인 소스: Figma `g7xkiCYymXjZTuNxgg9LzW` — Sec 1 `405:480`, Sec 2 `405:500`. 노드에서 직접 디자인 컨텍스트를 추출해 1440px 기준 픽셀 대조로 구현할 것.

## 소유 파일 (이 목록이 전부 — 스텁 내용을 실구현으로 교체)

```
components/ufo/sections/UfoHero.tsx        + UfoHero.module.css
components/ufo/sections/UfoDarkShowcase.tsx + UfoDarkShowcase.module.css
```

**절대 금지**: `page.tsx`, `content/ufo.ts`, `globals.css`, 다른 섹션 파일, 그 외 리포 전체.
카피는 전부 `import { ufoContent } from "@/content/ufo"` — 컴포넌트에 문자열 하드코딩 금지.
색 토큰은 `var(--ufo-deep, #346f69)`처럼 **리터럴 fallback 필수**.
진입 모션은 `components/shared/Reveal` 재사용(읽기 전용).

## 섹션 1 — Hero (`405:480`, 라이트)

- 구조(세로 중앙 정렬, pt 80 / pb 40 / px 48, gap 48):
  1. 배지: 6px 틸 점 + `hero.badge` (Inter Medium 13, letter-spacing 1.04px, `--ufo-deep`)
  2. h1: `hero.title` — Inter Light 80/1.05/-1.6px, 센터, max-width 1200 (clamp로 반응형)
  3. 리드: `hero.lead` + 빈 줄 + `hero.leadLines` 3행 — IBM Plex Serif Italic 32/1.25, `--ink-soft`, 센터, max-width 900
  4. 히어로 카드: 높이 620, radius 24, full-width — **CSS 그라디언트** `linear-gradient(90deg → 피그마: from #d1ebe5, via #7ab8ad 140%, to #1f4747 200%)` (실사진 placeholder)
     - 좌하단: 라벨 `hero.photo.label`(Inter Medium 11, ls 1.1px, rgba(255,255,255,.75)) + `hero.photo.caption`(Inter 22, white)
     - 우하단: 유리 칩(rgba(255,255,255,.15) bg + rgba(255,255,255,.4) border, radius 999) — 재생 아이콘(인라인 svg 삼각형) + `hero.photo.chip`. **정적 마크업, 클릭 동작 없음** (07 §6-2)
- h1은 페이지 유일의 h1이다.

## 섹션 2 — Dark Showcase (`405:500`, `--stage` #0b0b0e)

- py 140 / px 48, 센터 헤더(gap 24):
  - eyebrow: 틸 점 + `showcase.eyebrow` (Inter Medium 12, ls 1.2px, `--ufo-mint` #a8e0d6)
  - h2: `showcase.title` — Inter Light 64/1.08/-0.96px, white, 센터, max-width 1000
  - 리드: `showcase.lead` 4행 — Inter 20/1.5, `--on-stage-soft` #a8a8b2, 센터, max-width 900
- 하단 2컬럼(gap 80, pt 40):
  - **좌: 착용 4종 리스트** (`showcase.mounts`, 세로 gap 48): 넘버 Inter Light 56 white + 태그 Inter 18 #a8a8b2 (baseline 정렬) / 제목 Inter 20 white / 설명 Inter 15 #a8a8b2 (width 340)
  - **우: Travel Showcase 패널**: 520×620, radius 32, border `--stage-border`, bg `linear-gradient(253deg, #1a3333 73%, #0d171a 151%)`. 내부 카드 3개(`showcase.panel`):
    1. signal 카드: bg #0d171a, border rgba(51,107,102,.5), radius 20 — 라벨(#a8e0d6 10px ls 1px) / sub(#a6b2b8 14) / text(white 15)
    2. mode 카드: bg #0d171a, radius 16, 가로 배치 — 좌측 64px 원형 아이콘 슬롯(간단한 인라인 svg 또는 틸 그라디언트 원) + 라벨(#a8a8b2) / text(white 16)
    3. today 카드: 라벨(#a8a8b2) + 스와치 60px 4개(radius 8, `panel.today.swatches`) + 인용(IBM Plex Serif Italic 15 white)

## 반응형 (1440 기준 외 1024/768/390)

- 1024: 2컬럼 → gap 축소, 패널 폭 축소. 768 이하: 세로 스택(리스트 → 패널 순), 히어로 카드 높이 축소(≈ 420 → 390에서 320), display 타입은 clamp가 처리.
- 히어로/패널 그라디언트는 이미지가 아니므로 파손 없음 확인만.

## 완료 기준

- [ ] `npm run lint` + `npm run build` 통과 후 main 푸시
- [ ] 1440px에서 피그마 `405:480`·`405:500` 스크린샷과 시각 대조 일치
- [ ] 카피 = `content/ufo.ts` 그대로 (하드코딩 0)
- [ ] `prefers-reduced-motion`에서 Reveal 즉시 표시
- [ ] 390/768/1024/1440 파손 없음
