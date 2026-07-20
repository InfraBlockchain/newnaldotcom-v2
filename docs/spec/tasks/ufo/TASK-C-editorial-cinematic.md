# UFO TASK C — 섹션 3 Editorial Band + 섹션 4 Cinematic

> 마스터 플랜: `docs/spec/07-ufo.md` (§4 토큰·타이포, §7 카피, §8 DoD 필독)
> **선행 조건**: TASK A Phase 1이 main에 머지되어 있어야 한다 (`content/ufo.ts`·섹션 스텁 존재 확인 후 착수).
> 디자인 소스: Figma `g7xkiCYymXjZTuNxgg9LzW` — Sec 3 `405:546`, Sec 4 `405:599`. 노드에서 직접 디자인 컨텍스트를 추출해 1440px 기준 픽셀 대조로 구현할 것.

## 소유 파일 (이 목록이 전부 — 스텁 내용을 실구현으로 교체)

```
components/ufo/sections/UfoEditorialBand.tsx + UfoEditorialBand.module.css
components/ufo/sections/UfoCinematic.tsx     + UfoCinematic.module.css
```

**절대 금지**: `page.tsx`, `content/ufo.ts`, `globals.css`, 다른 섹션 파일, 그 외 리포 전체.
카피는 전부 `import { ufoContent } from "@/content/ufo"` — 하드코딩 금지.
색 토큰은 `var(--ufo-deep, #346f69)`처럼 **리터럴 fallback 필수**.
진입 모션은 `components/shared/Reveal` 재사용(읽기 전용).

## 섹션 3 — Editorial Band (`405:546`, 라이트, py 140 / px 48, gap 64)

- **헤더 (좌우 justify-between, 하단 정렬)**:
  - 좌: eyebrow `editorial.eyebrow`(Inter Medium 12, ls 1.2px, `--ufo-deep`) + h2 `editorial.title`(Inter Light 64/1.08/-0.96px)
  - 우(width 460): 인용 `editorial.quote`(IBM Plex Serif Italic 22/1.3, `--ink-soft`) + `editorial.support`(Inter 17/1.55)
- **카드 2×2** (`editorial.cards`, row gap 24): 행마다 wide(860px)+narrow(460px) 조합, 두 번째 행은 순서 반전(narrow 먼저). 카드 공통: bg `--soft-bg`(#f9f9f8), radius 20, p 32, 높이 500, 상단 미디어 + 하단 텍스트 justify-between.
  - 카드 1(wide): 미디어 = 틸 라이트 그라디언트(from #d9ebe5 → via #8cbfb8 150% → to #26524d 200%), 내부 좌하단 화이트 배지 카드(rgba(255,255,255,.92), radius 12: 라벨 9px `--ufo-deep` + 캡션 13px)
  - 카드 2(narrow): 미디어 = 다크 그라디언트(218deg, #1f3838 73% → #0d171a 151%): 라벨(#a8e0d6 9px) / 캡션(#a6b2b8 14) / serif 문구(white 16 italic)
  - 카드 3(narrow): 미디어 = 페일 그라디언트(197deg, #f0faf7 50% → #d9ede5 121%): 라벨(`--ufo-deep` 9px) + 스와치 60px 4개(radius 8)
  - 카드 4(wide): 미디어 = 다크 그라디언트(90deg-ish, from #1a3333 → to #050f12 200%): 라벨(#a8e0d6 9px) / 문구(white 15) + 미니 이퀄라이저 바 4개(#a8e0d6, 첫 개만 불투명, 높이 4/8/12/16)
  - 카드 하단 텍스트 공통: 라벨(Inter Medium 11, ls 1.1px, `--ufo-deep`) / 제목(Inter 20/1.3) / 본문(Inter 15/1.55, `--ink-soft`)

## 섹션 4 — Cinematic (`405:599`, 다크 `--stage`)

1. **시네마 밴드**: 높이 720, full-bleed, bg `linear-gradient(-54deg, #598c8c 100%, #1f4747 143%, #050f12 178%)` (실사진 placeholder — CSS로). 센터 텍스트 스택(gap 32, max-width 1000):
   - eyebrow `cinematic.eyebrow`(Inter Medium 12, ls 1.8px, `--ufo-mint`)
   - h2 `cinematic.title`(Inter Light 72/1.08/-1.44px, white)
   - 본문 `cinematic.body`(Inter 17/1.55, `--on-stage-faint` #bfbfc7, max-width 760)
2. **스트립 row** (px 48 / py 32, justify-between): 좌측 미니 프로그레스 바(62×6, 인라인 svg 또는 div — 첫 세그먼트만 활성) / 중앙 `cinematic.strip.caption`(13px #bfbfc7) / 우측 `cinematic.strip.link` + 화살표 아이콘(13px white). 링크 동작 없음(정적).
3. **카드 3열** (`cinematic.cards`, gap 40, pb 120 / pt 40): flex 1:1:1, bg `--stage-surface`(#141419), border `--stage-border`, radius 20, px 32 / py 40 — 넘버(Inter Light 40, `--ufo-mint`) / 제목(Inter 20 white) / 본문(Inter 14/1.55 #a8a8b2)

## 반응형 (1440 기준 외 1024/768/390)

- 헤더: 1024 이하 세로 스택(우측 블록이 아래로).
- 카드 2×2: 1024에서 wide/narrow 비율 유지하되 폭 축소, 768 이하 전부 1열(순서는 카드 1→2→3→4), 높이 auto.
- 시네마 밴드: 768 이하 높이 축소(≈520), 타이포 clamp.
- 카드 3열: 1024에서 3열 유지(폭 축소), 768 이하 1열.

## 완료 기준

- [ ] `npm run lint` + `npm run build` 통과 후 main 푸시
- [ ] 1440px에서 피그마 `405:546`·`405:599` 스크린샷과 시각 대조 일치
- [ ] 카피 = `content/ufo.ts` 그대로 (하드코딩 0)
- [ ] `prefers-reduced-motion`에서 Reveal 즉시 표시
- [ ] 390/768/1024/1440 파손 없음
