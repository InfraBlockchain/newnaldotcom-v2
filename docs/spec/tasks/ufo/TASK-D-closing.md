# UFO TASK D — 섹션 5–9 (Power Gauge · Creator · Signal Guide · Spec · CTA)

> 마스터 플랜: `docs/spec/07-ufo.md` (§4 토큰·타이포, §6 오픈 퀘스천 1, §7 카피, §8 DoD 필독)
> **선행 조건**: TASK A Phase 1이 main에 머지되어 있어야 한다 (`content/ufo.ts`·섹션 스텁 존재 확인 후 착수).
> 디자인 소스: Figma `g7xkiCYymXjZTuNxgg9LzW` — Sec 5 `405:631`, Sec 6 `520:2`, Sec 7 `521:2`, Sec 8 `521:26`, Sec 9 `521:53`.
> **주의**: 섹션 6·7·8의 eyebrow/포인트 컬러는 틸이 아니라 블루 `#4d9fff`다(피그마 그대로). 토큰 `var(--ufo-alt-accent, #4d9fff)` 사용 — 통일 결정이 나면 토큰만 바뀐다.

## 소유 파일 (이 목록이 전부 — 스텁 내용을 실구현으로 교체)

```
components/ufo/sections/UfoPowerGauge.tsx  + UfoPowerGauge.module.css
components/ufo/sections/UfoCreator.tsx     + UfoCreator.module.css
components/ufo/sections/UfoSignalGuide.tsx + UfoSignalGuide.module.css
components/ufo/sections/UfoSpecTable.tsx   + UfoSpecTable.module.css
components/ufo/sections/UfoCtaRow.tsx      + UfoCtaRow.module.css
```

**절대 금지**: `page.tsx`, `content/ufo.ts`, `globals.css`, 다른 섹션 파일, 그 외 리포 전체.
카피는 전부 `import { ufoContent } from "@/content/ufo"` — 하드코딩 금지.
색 토큰은 `var(--ufo-deep, #346f69)`처럼 **리터럴 fallback 필수**.
진입 모션은 `components/shared/Reveal` 재사용(읽기 전용).

## 섹션 5 — Power Gauge (`405:631`, 라이트, pt 140 / pb 200, gap 96)

- 센터 헤더(gap 32): eyebrow `powerGauge.eyebrow`(Inter Medium 12, ls 1.8px, `--ufo-deep`) / 제목 `powerGauge.title`(Inter Light 80/1.05/-1.6px — h2지만 display/xl 스케일) / 리드 `powerGauge.lead`(IBM Plex Serif Italic 32/1.25, `--ink-soft`, max-width 900)
- 카드 2열(`powerGauge.cards`, gap 24, flex 1:1): bg `--soft-bg`, radius 20, px 32 / py 40 — 넘버(Inter Light 40, `--ufo-accent` #6db4aa) / 제목(Inter 20/1.3) / 본문(Inter 15/1.55, `--ink-soft`)

## 섹션 6 — Creator (`520:2`, bg #fafafa, py 140, 센터, gap 60)

- eyebrow `creator.eyebrow`(Inter Medium 12, ls 1.8px, `--ufo-alt-accent`) / h2 `creator.title`(Inter Light 64/1.08/-1.28px) / 본문 `creator.body` 3행(Inter 18/1.55, `--ink-soft`, max-width 820)
- 예시 `creator.examples` 5행(IBM Plex Serif Italic 22/1.3, rgba(25,25,28,.75), 세로 gap 16)
- 마무리 `creator.closing`(Inter 20, `--ink`)

## 섹션 7 — Signal Guide (`521:2`, 다크 `--stage`, py 140, gap 80)

- 센터 헤더(gap 24): eyebrow `signalGuide.eyebrow`(`--ufo-alt-accent`) / h2 `signalGuide.title`(Inter Light 64, white) / 본문 4행(Inter 18/1.55, #a8a8b2, max-width 820)
- **LED 존 3열** (`signalGuide.zones`, gap 40, 각 width 420 센터):
  - LED 오브(120px): 이미지 다운로드 금지 — **CSS radial-gradient + blur/box-shadow 글로우**로 구현. 존 컬러는 `zone.color`(#4d9fff / #ff9933 / #ffd94d). 애니메이션: blue = 느린 pulse(scale/opacity), orange = glow(밝기), golden = strobe(빠른 깜빡임 — 과하지 않게, 3Hz 미만 유지). `prefers-reduced-motion: reduce`에서 전부 정지(정적 글로우만).
  - 거리(Inter Light 40, white) / 라벨(Inter Medium 11, ls 2.42px, `zone.color`) / 설명(Inter 15/1.55, #a8a8b2, width 340)
- 마무리 `signalGuide.closing`(Inter Light 24/1.3, #f0f0f0, 센터)

## 섹션 8 — Spec (`521:26`, 라이트, py 60)

- 컨테이너: 상단 3px 라인(`--ufo-alt-accent`) / 라벨 `spec.label`(Inter Medium 12, ls 1.8px, `--ufo-alt-accent`) / 제목 `spec.title`(Inter Light 32/1.2)
- `spec.rows`를 **정의 리스트(`<dl>`) 또는 table**로: 행마다 1px 디바이더(#e5e5eb), 좌측 라벨 칼럼 240px(Inter Medium 11, ls 1.1px, `--ink-soft`), 우측 값(Inter 17)
- 피그마는 absolute 배치지만 **flex/grid로 재구성**할 것 (기존 yali spec 테이블 `app/devices/yali/page.module.css` 참고 가능 — 읽기만)

## 섹션 9 — CTA row (`521:53`, py 100, 센터)

- 버튼 2개(gap 12): `cta.primary` = solid(bg `--ink`, white, radius 999, px 28 / py 14, `mailto:contact@newnal.com?subject=Get%20UFO`) / `cta.secondary` = outline(border `--ink`, radius 999) — 동작은 페이지 최상단 스크롤(`#main-content` 앵커) 임시 연결

## 반응형 (1440 기준 외 1024/768/390)

- 카드 2열(Sec 5): 768 이하 1열. LED 존 3열: 1024에서 gap 축소, 768 이하 세로 스택.
- Spec: 768 이하 라벨/값 세로 스택. 타이포는 전부 clamp.

## 완료 기준

- [ ] `npm run lint` + `npm run build` 통과 후 main 푸시
- [ ] 1440px에서 피그마 각 노드 스크린샷과 시각 대조 일치
- [ ] 카피 = `content/ufo.ts` 그대로 (하드코딩 0)
- [ ] LED 애니메이션이 reduced-motion에서 정지
- [ ] 390/768/1024/1440 파손 없음
