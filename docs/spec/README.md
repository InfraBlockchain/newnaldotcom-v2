# Newnal.com 리뉴얼 — 구현 스펙 문서

> **⚠️ 2026-07-15 업데이트**: `/aios`와 `/devices`는 피그마 확정 디자인을 그대로 구현하는 것으로 변경됐다.
> 이 두 페이지는 **`06-figma-final-aios-devices.md`가 `03-aios.md`·`05-devices-hub.md`를 대체**하며,
> 두 페이지에 한해 "Figma는 draft" 원칙이 뒤집힌다(피그마 프레임 `316:42`·`602:4`가 target).
> 예외: `/aios`의 IP Portfolio 섹션은 현행 구현 유지. 헤더·푸터 전역 교체 포함 — 상세는 06 문서.

구현 에이전트(Codex / Sonnet)를 위한 기획·디자인 스펙입니다.
**기존 저장소의 `app/`, `components/`, `content/` 코드는 전부 폐기하고 새로 구축합니다.**
(기존 코드는 참고하지 말 것 — 구조·네이밍·스타일 모두 이 문서 기준으로 새로 시작)

## 읽는 순서

1. `00-foundation.md` — 사이트 IA, 기술 스택, 공용 디자인 시스템(토큰·타이포·그리드·모션·접근성)
2. `02-home.md` — 홈
3. `03-aios.md` — Newnal aios
4. `04-private-phone.md` — Private Phone
5. `05-devices-hub.md` — Companion Devices 허브
6. `01-yali.md` — YALI 제품 페이지

## 현재 스코프 — 사이트 전체를 구현한다. 디바이스 상세만 YALI 우선.

| 페이지 | 상태 |
|---|---|
| 홈 (`/`) | **지금 구현** — `02-home.md` |
| Newnal aios (`/aios`) | **지금 구현** — `03-aios.md` |
| Private Phone (`/private-phone`) | **지금 구현** — `04-private-phone.md` |
| Companion Devices 허브 (`/devices`) | **지금 구현** — `05-devices-hub.md` |
| YALI (`/devices/yali`) | **지금 구현** — `01-yali.md` |
| ILLI / UFO 상세 | 보류 (스펙 미작성) — 허브에서 소개만 하고 상세 링크는 비활성 |

## 원본 자료

카피의 최종 출처 (우선순위 순 — 2026-07-14 확정):

1. **Figma 초안 텍스트** — `Newnal.com` 파일(key `g7xkiCYymXjZTuNxgg9LzW`) V2 페이지. YALI는 node `405:4`. **글(카피)의 최신 확정본**
2. `docs/원고_디바이스-페이지-세부-기획안.md` — Figma에 placeholder로 비어 있는 자리의 보완용 (Google Docs 2026-07-14 export)
3. `docs/원고_홈페이지-총체-기획안.md`, `docs/원고_웹사이트개편기획.md` — 구버전 참고용 (충돌 시 무시)

스펙 문서의 영문 카피는 Figma verbatim이며, 보완/미확정 문구는 `[보완]`/`[옵션 — 확정 필요]`로 표시되어 있다.
디자인(레이아웃·토큰·모션)은 Figma를 복제하지 않고 스펙 문서를 따른다 — Figma는 draft, 스펙이 target.
- 디자인 초안: Figma `Newnal.com` 파일, 페이지 V2의 `YALI — Product Page` 프레임(node `405:4`)
  - 초안은 **참고용 draft**다. 픽셀 단위로 복제하지 말고, 스펙 문서에 정의된 토큰·레이아웃을 따른다.
  - Figma 초안 위 메모 "보라톤으로 맞춰주세요"가 이번 디벨럽의 출발점 — 보라 톤 시스템은 `00-foundation.md`의 토큰으로 확정되어 있다.

## 완료 기준 (Definition of Done)

- [ ] `npm run build` 경고·에러 없음, `npm run lint` 통과
- [ ] 1440 / 1024 / 768 / 390 폭에서 레이아웃 파손 없음 (각 폭 스크린샷으로 확인)
- [ ] 모든 이미지 `next/image` 사용, 실제 에셋이 없는 슬롯은 스펙에 정의된 placeholder 처리
- [ ] `prefers-reduced-motion: reduce`에서 모든 모션 비활성
- [ ] 키보드 포커스 링 표시, 시맨틱 헤딩 구조(h1 1개, 섹션별 h2)
- [ ] 각 스펙 문서 하단의 "수용 기준" 체크리스트 전부 충족
- [ ] Vercel 프리뷰 배포 확인 (프로젝트: `steveofnewnal/newnaldotcom-v2`)
