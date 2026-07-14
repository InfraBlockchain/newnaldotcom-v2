# 구현 에이전트 시작 프롬프트

아래 프롬프트를 Codex/Sonnet에 그대로 붙여넣는다. (저장소 루트에서 시작한다는 전제)

---

Newnal.com 웹사이트를 새로 구축한다. 기획·디자인 스펙이 전부 준비되어 있다.

**규칙**
1. 먼저 `docs/spec/README.md`를 읽고, 거기 명시된 순서대로 `00-foundation.md` → `02-home.md` → `03-aios.md` → `04-private-phone.md` → `05-devices-hub.md` → `01-yali.md`를 전부 읽어라.
2. 기존 `app/`, `components/`, `content/` 코드는 전부 삭제하고 새로 시작한다. 기존 코드를 참고하지 마라. `public/images/`와 `docs/`는 유지한다.
3. 기술 스택·디렉터리 구조·디자인 토큰·타이포·모션 규칙은 `00-foundation.md`가 유일한 기준이다. Tailwind나 UI/모션 라이브러리를 추가하지 마라.
4. 스펙의 영문 카피는 verbatim으로 사용한다. `[보완]`, `[제안 — 확정 필요]` 표기가 있는 카피도 표기된 그대로 구현하되, `[확정 필요]` 항목은 임의로 확정하지 말고 코드에 `TODO` 주석을 남겨라.
5. 다이어그램·목업은 스펙에 명시된 대로 전부 코드(SVG/CSS)로 구현한다. 이미지 에셋이 없는 슬롯은 각 스펙의 placeholder 규칙을 따른다.

**구현 순서** (페이지 단위로 완성하고 다음으로)
1. 프로젝트 뼈대 + 전역 GNB/Footer + 토큰(`globals.css`)
2. `/` 홈
3. `/aios`
4. `/private-phone` (전용 다크 테마 `--pp-*` 토큰)
5. `/devices` 허브
6. `/devices/yali` (가장 분량 많음 — 서브내브·Aura Ring·타임라인 포함)

**완료 기준**
- `npm run build`와 `npm run lint`가 경고·에러 없이 통과
- 각 스펙 문서 하단의 "수용 기준" 체크리스트 전부 충족
- 1440 / 1024 / 768 / 390 폭에서 전 페이지 스크린샷을 찍어 레이아웃 파손이 없음을 확인
- `prefers-reduced-motion: reduce`에서 모든 모션 비활성 확인
- 완료 후: 충족한 수용 기준 체크리스트와 스크린샷, 그리고 `[확정 필요]`로 남긴 TODO 목록을 보고하라

---

## 참고 (프롬프트에 포함하지 않아도 됨)

- 배포: Vercel `steveofnewnal/newnaldotcom-v2` — main push 시 자동 배포
- 카피 원본: Figma `Newnal.com` V2 페이지가 최신. 원고 md 2종은 보완용
- 미확보 에셋이 도착하면 각 스펙의 "에셋 리스트" 표를 갱신할 것
