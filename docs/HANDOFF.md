# Newnal.com v2 — 구현 인계 및 코드리뷰 메모

작성일: 2026-07-15

## 현재 상태

사이트 전체 재구축을 완료했다. 기존 `app/`, `components/`, `content/` 구현은 요청대로 제거했으며, 스펙 문서를 기준으로 다음 경로를 새로 만들었다.

| 경로 | 상태 | 핵심 구현 |
|---|---|---|
| `/` | 완료 | 브랜드 키 비주얼 placeholder, 3개 진입 카드 |
| `/aios` | 완료 | 스펙트럼·OS 타임라인·Reverse Login 코드 다이어그램 |
| `/private-phone` | 완료 | 전용 다크/스틸 블루 테마, 5개 코드 다이어그램, 비교표 |
| `/devices` | 완료 | 키보드 조작 가능한 가로 아코디언, 모바일 카드 스택 |
| `/devices/yali` | 완료 | 로컬 sub-nav, 스크롤 진행 링/레일, 코드 목업·벤·타임라인 |

공용 기반은 다음 파일에 있다.

- `app/layout.tsx`: Fraunces / Instrument Sans / IBM Plex Mono, 전역 Header/Footer
- `app/globals.css`: 디자인 토큰, 리셋, 버튼, 접근성, reduced-motion
- `components/site/header.tsx`, `components/site/footer.tsx`: 전역 GNB/Footer
- `components/shared/Reveal.tsx`: 사이트 전체에서 사용하는 IntersectionObserver 리빌
- `components/shared/Placeholder.tsx`: 스펙 준수 placeholder (`PHOTO · …`)

페이지 카피는 `content/`에 분리했다. 특히 YALI 카피는 스펙 요구대로 `content/yali.ts`에 모았다.

## 스펙 기준 및 주의사항

반드시 아래 순서로 스펙을 확인할 것. 기존 구현이나 구문서는 디자인/카피의 기준이 아니다.

1. `docs/spec/README.md`
2. `docs/spec/00-foundation.md`
3. `docs/spec/02-home.md`
4. `docs/spec/03-aios.md`
5. `docs/spec/04-private-phone.md`
6. `docs/spec/05-devices-hub.md`
7. `docs/spec/01-yali.md`

기술 규칙:

- Next.js App Router + TypeScript
- CSS Modules + CSS Custom Properties만 사용. Tailwind/UI/모션 라이브러리 추가 금지
- 모든 보유 이미지에는 `next/image` 사용
- 리빌은 `Reveal` 컴포넌트 하나로 통일
- `prefers-reduced-motion: reduce`에서 리빌 즉시 표시, 상시 모션 정지
- `Private Phone` 내부에서는 `--pp-*` 전용 토큰만 사용해야 함

## 검증 완료 내역

- `npm run lint` 통과
- `npm run build` 통과
- Vercel preview 배포 및 5개 경로 HTTP 200 확인
  - Preview: https://newnaldotcom-v2-iu9ik4ouq-steveofnewnal.vercel.app
  - Inspect: https://vercel.com/steveofnewnal/newnaldotcom-v2/GMW4Keh69GWTh6MRJHcDjhb8ErZu
- 1440 / 1024 / 768 / 390 폭에서 5개 페이지를 캡처해 점검
  - 검증 아티팩트: `/private/tmp/newnal-screenshots/`
  - 파일명: `{home|aios|private-phone|devices|yali}-{1440|1024|768|390}.png`
- 모든 페이지에서 `scrollWidth === innerWidth` 확인
  - 예외: Private Phone 비교표는 스펙대로 내부 가로 스크롤 컨테이너임
- 모든 페이지에서 h1 1개, 이미지 `alt` 누락 0개 확인
- 스크롤 후 Reveal 표시 확인
  - Home 4/4, AIOS 24/24, Private Phone 32/32, Devices 5/5, YALI 27/27
- 390px reduced-motion 검사에서 Private Phone/YALI의 활성 애니메이션 0개 확인

## 다음 코드리뷰 우선순위

### 1. 카피/제품 확정 전 상태가 정확히 보존됐는지 확인

- Home 제안 카피는 확정하지 않았다. `content/home.ts`의 TODO를 참조할 것.
- Private Phone 비교표의 `Independent message history` / Free Connection App 셀은 `TBD`다. ✓/✗로 바꾸면 안 된다.
- PDF URL이 없으므로 `See How It Works →` CTA는 disabled 상태다.
- YALI 영상은 미연결 상태라 썸네일과 disabled 재생 버튼만 렌더한다.

### 2. 실제 콘텐츠/에셋이 들어올 때의 교체 지점 확인

- Home 브랜드 key visual: `app/page.tsx`
- ILLI/UFO key visual: `components/shared/DeviceAccordion.tsx`
- YALI Everyday 이미지 3장 및 Moments 카드 이미지 3장: `content/yali.ts`
- YALI 실제 홍보 영상 URL/스틸: `app/devices/yali/page.tsx`
- Private Phone How It Works PDF: `content/privatePhone.ts`, `app/private-phone/page.tsx`
- AIOS IP 포트폴리오 행 데이터: `content/aios.ts`

placeholder는 회색 박스로 교체하지 말고 `--stage-2` + `PHOTO · <scene>` 규칙을 유지한다.

### 3. 인터랙션/접근성 확인

- GNB 모바일 햄버거: `components/site/header.tsx`
- Devices 아코디언: button + `aria-expanded` / focus 시 활성화
- YALI sub-nav: 스크롤 진행 SVG 링과 챕터 라벨 갱신
- Private Phone 비교표: 모바일에서 외부 페이지가 아닌 테이블 래퍼만 가로 스크롤
- 키보드 포커스 링과 disabled 링크/CTA의 `aria-disabled` 상태

### 4. 시각 검토 포인트

- YALI와 Home의 실제 이미지 교체 전, placeholder와 실제 에셋의 밝기/대비가 헤드라인 가독성을 해치지 않는지 확인
- Private Phone은 사이트 보라 테마가 섞이지 않도록 전용 스틸 블루 톤을 유지
- 390px Home h1은 현재 3줄, YALI h1은 3–4줄 범위를 유지해야 함
- Devices는 768px 이상에서 가로 아코디언, 390px에서 세로 카드 스택으로 전환됨
- AIOS 스펙트럼 라벨은 반드시 `0 = Private Phone / Defensive`, `100 = Newnal AIOS / Active` 순서 유지

## 미해결 TODO 목록

코드 내 TODO 검색 명령:

```bash
rg -n "TODO" app components content
```

현재 항목:

1. Home 히어로와 Newnal aios 카드 제안 카피 최종 확정
2. Free Connection App의 Independent message history 지원 여부 확정
3. 미확보 이미지/영상/PDF/IP 데이터 제공 및 placeholder 교체

## 저장소/배포 메모

- 원격: `git@github.com:InfraBlockchain/newnaldotcom-v2.git`
- 현재 구현은 로컬 working tree에 있으며, 아직 Git commit/push는 하지 않았다.
- Vercel CLI로 기존 `steveofnewnal/newnaldotcom-v2` 프로젝트에 연결되어 있다. `.vercel`과 `.env.local`은 gitignore 처리됨.
- 최종 preview는 위 URL이며, production 배포는 실행하지 않았다.

## 다음 에이전트의 권장 시작 순서

1. `git status --short`로 현재 대규모 교체(diff)를 먼저 확인
2. `npm run lint && npm run build` 실행
3. preview와 `/private/tmp/newnal-screenshots/`를 비교하며 시각 리뷰
4. 위 TODO 중 제품/카피 담당자가 확정한 항목만 교체
5. 변경 후 390px과 1440px을 우선 재캡처하고 reduced-motion을 재검증
