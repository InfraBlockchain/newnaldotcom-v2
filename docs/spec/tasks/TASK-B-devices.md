# TASK B — `/devices` 페이지 전면 교체 (히어로 + 인트로·캐러셀)

> 담당: Copilot. 작성: 2026-07-15.
> 스펙 원본: `docs/spec/06-figma-final-aios-devices.md` — **§3(/devices), §4(반응형)이 이 태스크의 범위다.**
> TASK A(Codex, 전역+aios)와 **동시 진행**된다. 아래 파일 소유권을 벗어나면 충돌하므로 절대 넘지 말 것.

## 브랜치 / PR

- 브랜치: `feat/figma-devices` (main에서 분기)
- 완료 시 main으로 PR 생성 (main 직접 push 금지 — 저장소 룰)

## 범위

기존 가로 아코디언 허브를 폐기하고 피그마 `602:4` 구조로 교체:

1. **D1 히어로**: 배경 `public/images/figma/devices-hero-bg.png`(fill·cover·priority), 좌정렬 텍스트 스택 — 스펙 §3 D1 그대로.
2. **D2 제품 인트로 + 캐러셀 연동 섹션**: 확정 카피 3세트(YALI/ILLI/UFO — 스펙 §3 D2 표, verbatim), 활성 슬라이드에 따라 인트로 멘트 페이드 교체(`aria-live="polite"`), CSS scroll-snap 캐러셀 + dot 3개, YALI 카드만 `/devices/yali` 링크.
3. `content/devices.ts`를 슬라이드 배열 구조로 재작성.
4. §4 반응형 규칙 적용 (devices 한정).

## 독립 작동 규칙 (A 머지 여부와 무관하게 완성돼야 함)

- **전역 파일 접근 금지** — 헤더/푸터/globals.css/layout.tsx는 TASK A 소유. 현행 헤더가 그대로 보여도 신경 쓰지 말 것(통합 시 A의 헤더로 바뀜).
- **폰트**: `app/devices/` 안에서 `next/font`로 로컬 인스턴스화 — Syne(500)·Inter(400·500) from `next/font/google`, **Pretendard 700**(카드 라벨용)은 npm `pretendard` 추가 후 `next/font/local`. (layout 변수 의존 금지 — 통합 후 정리는 후속 커밋)
- **색 토큰**: 모듈 CSS에서 `var(--fg-accent, #4d9fff)`처럼 **리터럴 fallback 포함**으로 사용. fallback 값은 스펙 §1-4 표와 정확히 일치시킬 것.

## 수정 허용 파일 (이 목록이 전부)

```
app/devices/page.tsx
app/devices/page.module.css     (없으면 신규)
content/devices.ts
components/devices/**           (신규 디렉토리 — 캐러셀 등 이 페이지 전용 컴포넌트)
package.json / package-lock.json  (pretendard 추가만)
```

## 수정 금지 (TASK A 소유 / 스코프 밖)

- `app/layout.tsx`, `app/globals.css`, `components/site/**`
- `app/aios/**`, `content/aios.ts`, `components/shared/**`
  - `components/shared/DeviceAccordion.*`: import만 제거하고 **파일은 삭제하지 말 것** (정리는 통합 후)
  - `Reveal` 등 shared 컴포넌트는 **읽기(사용)는 가능**, 수정 금지
- `app/devices/yali/**` — 라우트·내용 그대로 유지 (카드에서 링크만 건다)
- `app/page.tsx`, `app/private-phone/**`, 기타 content 파일

## 완료 기준

- [ ] `npm run lint` + `npm run build` 통과
- [ ] 1440px에서 `docs/figma-refs/companion-devices-full.png`와 시각 대조 일치 (헤더/푸터 제외 — A 소유)
- [ ] 카피가 스펙 §3 D2 표와 글자 단위로 동일 (임의 윤문 금지)
- [ ] 캐러셀: 드래그/스와이프·dot 클릭 동작, dot·멘트 동기화, 자동재생 없음, `prefers-reduced-motion`에서 페이드 즉시 교체
- [ ] 캐러셀 **활성 카드 중앙 정렬**(첫/마지막 슬라이드 포함, 양옆 균등 peek) + **좌우 Navigator 버튼**(첫/끝에서 disabled, 모바일 숨김) — 스펙 §3 D2 (2026-07-15 추가)
- [ ] `/devices/yali` 정상 접근 (YALI 카드 클릭 경로 포함)
- [ ] 390/768/1024/1440에서 파손 없음, 가로 스크롤은 캐러셀 내부에만 존재

## 통합 (둘 다 머지된 뒤 — 어느 쪽이 먼저 머지돼도 무방, 파일 겹침 없음)

1. 로컬 폰트 인스턴스를 A의 layout 변수(`--font-syne` 등)로 통합(선택, 후속 커밋).
2. 미사용 확정된 `DeviceAccordion` 제거(후속 커밋).
